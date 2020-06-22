import uuidv4 from "uuid/dist/v4"
import moment from "moment"

export const seed = async knex => {
  const mediaTypes = [
    {
      id: "795177df-344e-4cde-8db2-c04c47bf459b",
      type: "anime",
      created_at: moment.utc(),
      updated_at: moment.utc()
    },
    {
      id: "02bed58e-0ed5-4e6f-8e07-23280f6e4715",
      type: "movie",
      created_at: moment.utc(),
      updated_at: moment.utc()
    },
    {
      id: "c52f189d-9072-4cc1-a06d-7d680685abf6",
      type: "tv_show",
      created_at: moment.utc(),
      updated_at: moment.utc()
    },
    {
      id: "5a1d1669-1996-4734-b3d0-db1e03203563",
      type: "manga",
      created_at: moment.utc(),
      updated_at: moment.utc()
    }
  ]

  await knex("media_types").del()
  await knex("media_types").insert(mediaTypes)
}
