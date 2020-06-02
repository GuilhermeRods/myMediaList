import cron from 'node-cron'
import axios from 'axios'
import { ANIME_API_URL } from '../config'
import { connectionDev } from '../database/connect'

export const animeCron = async () => {
  console.log('Started cron')
  const animes = []
  for (let index = 0; index <= 60; index += 20) {
    const result = await axios.get(
      `${ANIME_API_URL}/anime?page%5Blimit%5D=20&page%5Boffset%5D=${index}`
    )
    animes.push(...result.data.data)
  }

  await Promise.all(
    animes.map(async anime => {
      const animeExits = await connectionDev('medias')
        .select('title')
        .where({ title: anime.attributes.canonicalTitle })

      if (!animeExits.length) {
        const type = await connectionDev('media_types')
          .where({ type: 'anime' })
          .first()

        const age_rating = await connectionDev('age_ratings')
          .select('id')
          .where({ type: anime.attributes.ageRating })
          .first()

        const [id] = await connectionDev('medias')
          .insert({
            media_type_id: type.id,
            title: anime.attributes.canonicalTitle,
            description: anime.attributes.synopsis,
            slug_title: anime.attributes.slug,
            image_poster: anime.attributes.posterImage.original,
            image_cover: anime.attributes.coverImage
              ? anime.attributes.coverImage.original
              : 'false',
            youtube_id: anime.attributes.youtubeVideoId,
            age_rating_id: age_rating.id,
            start_date: anime.attributes.startDate,
            end_date: anime.attributes.endDate
          })
          .returning('id')

        const episodes = await axios.get(
          `${ANIME_API_URL}/anime/${anime.id}/episodes`
        )

        episodes.data.data.map(async episode => {
          await connectionDev('videos').insert({
            media_id: id,
            title: episode.attributes.canonicalTitle
              ? episode.attributes.canonicalTitle
              : 'noName',
            video_number: episode.attributes.number,
            airdate: episode.attributes.airdate,
            image: episode.attributes.thumbnail
              ? episode.attributes.thumbnail.original
              : 'false',
            description: episode.attributes.synopsis
          })
        })
      }
    })
  )
  console.log('Finished cron')
}
