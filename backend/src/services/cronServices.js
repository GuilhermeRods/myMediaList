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

  console.log("Finished fetching animes")

  const animeTypeId = "795177df-344e-4cde-8db2-c04c47bf459b"

  await Promise.all(
    animes.map(async anime => {
      const animeExits = await connectionDev("medias")
        .select("media_api_id")
        .where({ media_api_id: anime.id })
        .andWhere({ media_type_id: animeTypeId })
        .first()

      if (animeExits) {
        const age_rating = await connectionDev("age_ratings")
          .select("id")
          .where({ type: anime.attributes.ageRating })
          .first()

        await connectionDev("medias")
          .where({ media_api_id: anime.id })
          .andWhere({ media_type_id: animeTypeId })
          .update({
            media_api_id: anime.id,
            media_type_id: animeTypeId,
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
        const age_rating = await connectionDev("age_ratings")
          .select("id")
          .where({ type: anime.attributes.ageRating })
          .first()

        await connectionDev("medias")
          .insert({
            media_api_id: anime.id,
            media_type_id: animeTypeId,
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
  console.log("Finished Anime creation")

  const animesDb = await connectionDev("medias")
    .select("id", "media_api_id")
    .where({
      media_type_id: animeTypeId
    })
    .catch(err => console.log(err))

  console.log("Finished fetching Anime on DB")

  await Promise.all(
    animesDb.map(async anime => {
      const genres = await axios.get(
        `${ANIME_API_URL}/anime/${anime.media_api_id}/genres`
      )
      await genres.data.data.map(async genre => {
        const genresWithMediaExist = await connectionDev("media_genres")
          .select("id")
          .where({ genre_api_id: genre.id })
          .andWhere({ media_id: anime.id })
          .first()

        if (genresWithMediaExist) {
          await connectionDev("media_genres")
            .update({ genre_api_id: genre.id, media_id: anime.id })
            .where({ genre_api_id: genre.id })
            .andWhere({ media_id: anime.id })
        } else {
          await connectionDev("media_genres").insert({
            genre_api_id: genre.id,
            media_id: anime.id,
            media_api_id: anime.media_api_id
          })
        }
      })
    })
  )
  console.log("Finished Anime media_genres creation")

  await Promise.all(
    animesDb.map(async anime => {
      const episodes = await axios
        .get(`${ANIME_API_URL}/anime/${anime.media_api_id}/episodes`)
        .catch(err => console.log(err))

      await episodes.data.data.map(async episode => {
        const episodeExist = await connectionDev("videos")
          .select("id")
          .where({ episode_api_id: episode.id })
          .andWhere({ media_id: anime.id })
          .first()

        if (episodeExist) {
          await connectionDev("videos")
            .update({
              media_id: anime.id,
              // media_api_id: anime.media_api_id,
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
            .andWhere({ media_id: anime.id })
        } else {
          await connectionDev("videos").insert({
            media_id: anime.id,
            // media_api_id: anime.media_api_id,
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
  )
  console.log("Finished Anime Videos Creation")

  const mangas = []

  const mangaTypeId = "5a1d1669-1996-4734-b3d0-db1e03203563"

  for (let index = 0; index <= 60; index += 20) {
    const result = await axios
      .get(
        `${ANIME_API_URL}/manga?page%5Blimit%5D=20&page%5Boffset%5D=${index}`
      )
      .catch(err => console.log(err))
    mangas.push(...result.data.data)
  }
  console.log("Finished Manga fetching")

  await Promise.all(
    mangas.map(async manga => {
      const mangaExists = await connectionDev("medias")
        .where({
          media_type_id: mangaTypeId
        })
        .andWhere({ media_api_id: manga.id })
        .first()

      const ageRating = await connectionDev("age_ratings").select("id").where({
        type: manga.attributes.ageRating
      })

      if (mangaExists) {
        await connectionDev("medias")
          .update({
            media_api_id: manga.id,
            media_type_id: mangaTypeId,
            slug_title: manga.attributes.slug,
            description: manga.attributes.synopsis,
            title: manga.attributes.canonicalTitle
              ? manga.attributes.canonicalTitle
              : manga.attributes.titles.en_us,
            start_date: manga.attributes.startDate,
            end_date: manga.attributes.endDate,
            age_rating_id: ageRating ? ageRating.id : null,
            image_poster: manga.attributes.posterImage.original
              ? manga.attributes.posterImage.original
              : null,
            image_cover: manga.attributes.coverImage
              ? manga.attributes.coverImage.original
              : null
          })
          .where({ media_api_id: manga.id })
          .andWhere({ media_type_id: mangaTypeId })
          .catch(err => console.log(err))
      } else {
        await connectionDev("medias")
          .insert({
            media_api_id: manga.id,
            media_type_id: mangaTypeId,
            slug_title: manga.attributes.slug,
            description: manga.attributes.synopsis,
            title: manga.attributes.canonicalTitle
              ? manga.attributes.canonicalTitle
              : manga.attributes.titles.en_us,
            start_date: manga.attributes.startDate,
            end_date: manga.attributes.endDate,
            age_rating_id: ageRating ? ageRating.id : null,
            image_poster: manga.attributes.posterImage.original
              ? manga.attributes.posterImage.original
              : null,
            image_cover: manga.attributes.coverImage
              ? manga.attributes.coverImage
              : null
          })
          .catch(err => console.log(err))
      }
    })
  )
  console.log("Finished Mangas creation")

  const mangasOnDB = await connectionDev("medias")
    .select("id", "media_api_id")
    .where({ media_type_id: mangaTypeId })

  console.log("Finished fetching Mangas on DB")

  await Promise.all(
    mangasOnDB.map(async manga => {
      const genres = await axios.get(
        `${ANIME_API_URL}/manga/${manga.media_api_id}/genres`
      )

      genres.data.data.map(async genre => {
        const mangaAndGenreExists = await connectionDev("media_genres")
          .select("id")
          .where({
            media_id: manga.id
          })
          .andWhere({ genre_api_id: genre.id })
          .first()

        if (mangaAndGenreExists) {
          await connectionDev("media_genres")
            .update({
              media_id: manga.id,
              media_api_id: manga.media_api_id,
              genre_api_id: genre.id
            })
            .where({ media_id: manga.id })
            .andWhere({ genre_api_id: genre.id })
        } else {
          await connectionDev("media_genres").insert({
            media_id: manga.id,
            genre_api_id: genre.id,
            media_api_id: manga.media_api_id
          })
        }
      })
    })
  )

  console.log("Finished cron")
}
