import cron from "node-cron"
import axios from "axios"
import { ANIME_API_URL } from "../config"
import { connectionDev } from "../database/connect"

export const animeCron = async () => {
  console.log("Started cron")
  const animes = []
  for (let index = 0; index <= 60; index += 20) {
    const result = await axios
      .get(
        `${ANIME_API_URL}/anime?page%5Blimit%5D=20&page%5Boffset%5D=${index}`
      )
      .catch(err => console.log(err))
    animes.push(...result.data.data)
  }

  const medias = await Promise.all(
    animes.map(async anime => {
      const animeExits = await connectionDev("medias")
        .select("media_api_id")
        .where({ media_api_id: anime.id })
        .first()

      if (animeExits) {
        const type = await connectionDev("media_types")
          .where({ type: "anime" })
          .first()

        const age_rating = await connectionDev("age_ratings")
          .select("id")
          .where({ type: anime.attributes.ageRating })
          .first()

        return connectionDev("medias")
          .where({ media_api_id: anime.id })
          .update({
            media_api_id: anime.id,
            media_type_id: type.id,
            title: anime.attributes.canonicalTitle,
            description: anime.attributes.synopsis,
            slug_title: anime.attributes.slug,
            image_poster: anime.attributes.posterImage.original,
            image_cover: anime.attributes.coverImage
              ? anime.attributes.coverImage.original
              : null,
            youtube_id: anime.attributes.youtubeVideoId,
            age_rating_id: age_rating.id,
            start_date: anime.attributes.startDate,
            end_date: anime.attributes.endDate
          })
          .returning(["id", "media_api_id"])
      } else {
        const type = await connectionDev("media_types")
          .where({ type: "anime" })
          .first()

        const age_rating = await connectionDev("age_ratings")
          .select("id")
          .where({ type: anime.attributes.ageRating })
          .first()

        return connectionDev("medias")
          .insert({
            media_api_id: anime.id,
            media_type_id: type.id,
            title: anime.attributes.canonicalTitle,
            description: anime.attributes.synopsis,
            slug_title: anime.attributes.slug,
            image_poster: anime.attributes.posterImage.original,
            image_cover: anime.attributes.coverImage
              ? anime.attributes.coverImage.original
              : null,
            youtube_id: anime.attributes.youtubeVideoId,
            age_rating_id: age_rating.id,
            start_date: anime.attributes.startDate,
            end_date: anime.attributes.endDate
          })
          .returning(["id", "media_api_id"])
      }
    })
  )

  await Promise.all(
    medias.map(async media => {
      media.map(async anime => {
        const episodes = await axios
          .get(`${ANIME_API_URL}/anime/${anime.media_api_id}/episodes`)
          .catch(err => console.log(err))

        await episodes.data.data.map(async episode => {
          const episodeExist = await connectionDev("videos")
            .select("id")
            .where({ episode_api_id: episode.id })
            .first()

          if (episodeExist) {
            await connectionDev("videos")
              .update({
                media_id: anime.id,
                media_api_id: anime.media_api_id,
                episode_api_id: episode.id,
                title: episode.attributes.canonicalTitle
                  ? episode.attributes.canonicalTitle
                  : episode.attributes.titles.en_us,
                video_number: episode.attributes.number,
                airdate: episode.attributes.airdate,
                image: episode.attributes.thumbnail
                  ? episode.attributes.thumbnail.original
                  : null,
                description: episode.attributes.synopsis
              })
              .where({ episode_api_id: episode.id })
          } else {
            await connectionDev("videos").insert({
              media_id: anime.id,
              media_api_id: anime.media_api_id,
              episode_api_id: episode.id,
              title: episode.attributes.canonicalTitle
                ? episode.attributes.canonicalTitle
                : episode.attributes.titles.en_us,
              video_number: episode.attributes.number,
              airdate: episode.attributes.airdate,
              image: episode.attributes.thumbnail
                ? episode.attributes.thumbnail.original
                : null,
              description: episode.attributes.synopsis
            })
          }
        })
      })
    })
  )

  console.log("Finished cron")
}
