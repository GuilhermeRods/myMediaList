import cron from 'node-cron'
import axios from 'axios'
import { ANIME_API_URL } from '../config'
import { connectionDev } from '../database/connect'

export const animeCron = async () => {
  console.log('Started cron')
  const animes = []
  for (let index = 0; index <= 40; index += 20) {
    const result = await axios.get(
      `${ANIME_API_URL}/anime?page%5Blimit%5D=20&page%5Boffset%5D=${index}`
    )

    animes.push(...result.data.data)
  }

  await Promise.all(
    animes.map(async ({ attributes }) => {
      const animeExits = await connectionDev('medias')
        .select('title')
        .where({ title: attributes.canonicalTitle })

      if (!animeExits) {
        const type = await connectionDev('media_types')
          .where({ type: 'anime' })
          .first()

        const age_rating = await connectionDev('age_ratings')
          .select('id')
          .where({ type: attributes.ageRating })
          .first()

        await connectionDev('medias').insert({
          media_type_id: type.id,
          title: attributes.canonicalTitle,
          description: attributes.synopsis,
          slug_title: attributes.slug,
          age_rating_id: age_rating.id
        })
      }
    })
  )
  console.log('Finished cron')
}
