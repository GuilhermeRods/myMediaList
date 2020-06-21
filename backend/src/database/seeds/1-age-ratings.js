import uuidv4 from "uuid/dist/v4"

export const seed = async knex => {
  const age_ratings = [
    {
      id: "385ec366-12a6-456f-a165-3952d3b1df56",
      type: "G",
      description: "General Audiences"
    },
    {
      id: "5a7a92ba-2911-4b54-b720-52bb52760144",
      type: "PG",
      description: "Teens 13 or older"
    },
    {
      id: "96d4b97e-cbab-49f8-9a0a-4a3707fabe5d",
      type: "R",
      description: "Restricted"
    },
    {
      id: "82795de4-743a-4e15-ac1c-e31996fa0318",
      type: "R18",
      description: "Explicit"
    }
  ]

  await knex("age_ratings").del()
  await knex("age_ratings").insert(age_ratings)
}
