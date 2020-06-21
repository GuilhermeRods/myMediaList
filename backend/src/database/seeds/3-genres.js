import moment from "moment"

export const seed = async knex => {
  await knex("genres").del()
  await knex("genres").insert([
    {
      id: "5cb08da8-f987-4a13-a866-a1d5fb64d0dc",
      genre_api_id: 1,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Action",
      name_pt: "Ação",
      slug: "ação"
    },
    {
      id: "25f8260e-9a74-4a05-918f-373be67b7479",
      genre_api_id: 2,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Adventure",
      name_pt: "Aventura",
      slug: "aventura"
    },
    {
      id: "2e73c808-a214-4cb2-bfc7-0f2e4569db21",
      genre_api_id: 3,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Comedy",
      name_pt: "Comédia",
      slug: "comédia"
    },
    {
      id: "8066c258-6eb1-459c-b246-d37cf266154b",
      genre_api_id: 4,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Drama",
      name_pt: "Drama",
      slug: "drama"
    },
    {
      id: "bd09f5f7-7654-4dd9-86d0-ed70afac5060",
      genre_api_id: 5,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Sci-Fi",
      name_pt: "Ficção cientifica",
      slug: "ficção-cientifica"
    },
    {
      id: "0cbfa3e2-f5f4-4a16-9db1-929c8188767b",
      genre_api_id: 6,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Space",
      name_pt: "Espaço",
      slug: "espaço"
    },
    {
      id: "689b9023-b6a9-4819-b89c-c68b36b68b01",
      genre_api_id: 7,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Mystery",
      name_pt: "Mistério",
      slug: "mistério"
    },
    {
      id: "dc57fa3b-f5b6-4c34-a0b5-4df89f534676",
      genre_api_id: 8,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Magic",
      name_pt: "Mágico",
      slug: "mágico"
    },
    {
      id: "37fa4072-0dae-426e-a21f-09825be8f283",
      genre_api_id: 9,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Supernatural",
      name_pt: "Sobrenatural",
      slug: "sobrenatural"
    },
    {
      id: "8911cf24-107a-46da-b4d5-b243325f8165",
      genre_api_id: 10,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Police",
      name_pt: "Policial",
      slug: "policial"
    },
    {
      id: "967cd357-cfe1-42ef-ba96-356f17a5b499",
      genre_api_id: 11,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Fantasy",
      name_pt: "Fantasia",
      slug: "fantasia"
    },
    {
      id: "1348384b-5967-4640-9da7-9804d5386671",
      genre_api_id: 13,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Sports",
      name_pt: "Esporte",
      slug: "esporte"
    },
    {
      id: "a5b6b064-6743-46d7-bf0f-deec7d207c97",
      genre_api_id: 14,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Romance",
      name_pt: "Romance",
      slug: "romance"
    },
    {
      id: "807d5dd6-b09d-4b11-a86d-53edc00c0223",
      genre_api_id: 15,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Cars",
      name_pt: "Carros",
      slug: "carros"
    },
    {
      id: "0c88c2b7-043d-40d2-a415-0ea6665fe90c",
      genre_api_id: 16,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Slice of Life",
      name_pt: "Pedaço da vida",
      slug: "pedaço da vida"
    },
    {
      id: "8352d03e-170b-4529-81ff-bf18a67f112f",
      genre_api_id: 17,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Racing",
      name_pt: "Corrida",
      slug: "corrida"
    },
    {
      id: "985b3a62-0423-464c-9e85-f17936077a1f",
      genre_api_id: 19,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Horror",
      name_pt: "Horror",
      slug: "horror"
    },
    {
      id: "0631d9dd-cfae-42a4-83ad-f07e2f44d744",
      genre_api_id: 20,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Psychological",
      name_pt: "Psicológico",
      slug: "psicológico"
    },
    {
      id: "5c8875b0-949d-4937-96c4-b5344c3bf0f2",
      genre_api_id: 21,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Thriller",
      name_pt: "Thriller",
      slug: "thriller"
    },
    {
      id: "ae5a3483-18a5-46f2-bde0-0b0260f5536f",
      genre_api_id: 22,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Martial Arts",
      name_pt: "Artes Marciais",
      slug: "artes-marciais"
    },
    {
      id: "0be78533-8351-460c-87a0-186ec5206bcc",
      genre_api_id: 23,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Super Power",
      name_pt: "Super Poder",
      slug: "super-poder"
    },
    {
      id: "5923bfb9-99e1-49ff-a1c1-d657a59aec23",
      genre_api_id: 24,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "School",
      name_pt: "Escolar",
      slug: "escolar"
    },
    {
      id: "36a72a61-45ee-448b-a596-9fc8106e120d",
      genre_api_id: 25,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Ecchi",
      name_pt: "Ecchi",
      slug: "ecchi"
    },
    {
      id: "fb42c418-2668-4966-89d0-130d33fa11b5",
      genre_api_id: 26,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Vampire",
      name_pt: "Vampiro",
      slug: "vampire"
    },
    {
      id: "87b62f27-1a8a-4ec8-80fe-3ee239c487ec",
      genre_api_id: 27,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Historical",
      name_pt: "Histórico",
      slug: "histórico"
    },
    {
      id: "22624046-2966-4254-a901-a5e0e4018a98",
      genre_api_id: 28,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Military",
      name_pt: "Militar",
      slug: "military"
    },
    {
      id: "bf8109c0-68d4-4798-bb11-010f4881ee88",
      genre_api_id: 29,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Dementia",
      name_pt: "Demência",
      slug: "demência"
    },
    {
      id: "cbd1172a-b440-4d87-8769-df4558f0a0f9",
      genre_api_id: 30,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Mecha",
      name_pt: "Mecha",
      slug: "mecha"
    },
    {
      id: "57b51c58-9222-444b-a1a6-6632819ed2d9",
      genre_api_id: 31,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Demons",
      name_pt: "Demônios",
      slug: "Demônios"
    },
    {
      id: "fbdd57bf-c7c7-41cf-8eb0-091d2e3a3f06",
      genre_api_id: 32,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Samurai",
      name_pt: "Sumaria",
      slug: "samurai"
    },
    {
      id: "5567aec3-05a7-44cf-86a6-dbb552f21316",
      genre_api_id: 34,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Harem",
      name_pt: "Harem",
      slug: "harem"
    },
    {
      id: "3fe6b02c-717b-4b9d-857c-8c4f513723a8",
      genre_api_id: 35,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Music",
      name_pt: "Música",
      slug: "musica"
    },
    {
      id: "2946f089-1aea-427f-a0bc-3276c9fa1135",
      genre_api_id: 36,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Parody",
      name_pt: "Paródia",
      slug: "paródia"
    },
    {
      id: "9911a43b-b004-4dfb-9d5d-e81126b08fc2",
      genre_api_id: 37,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Shoujo Ai",
      name_pt: "Shoujo Ai",
      slug: "shoujo-ai"
    },
    {
      id: "38379b75-f676-4095-a5c2-4ef5789ff7d5",
      genre_api_id: 38,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Game",
      name_pt: "Jogos",
      slug: "jogos"
    },
    {
      id: "f511879f-bfaa-44fc-8461-31a58eb13e7f",
      genre_api_id: 39,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Shounen Ai",
      name_pt: "Shounen Ai",
      slug: "shounen-ai"
    },
    {
      id: "dad91d6c-1dba-4b08-8d1c-65b5c2093ad9",
      genre_api_id: 40,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Kids",
      name_pt: "Crianças",
      slug: "crianças"
    },
    {
      id: "02df4a65-0103-48c1-8e25-e6d0119e7174",
      genre_api_id: 41,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Hentai",
      name_pt: "Hentai",
      slug: "hentai"
    },
    {
      id: "d860415b-d05d-4a43-bb5e-c79ef59aef92",
      genre_api_id: 42,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Yuri",
      name_pt: "Yuri",
      slug: "yuri"
    },
    {
      id: "8c16ff4b-a7f5-4597-a34d-2679a0fe8ec8",
      genre_api_id: 43,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Yaoi",
      name_pt: "Yaoi",
      slug: "yaoi"
    },
    {
      id: "2b9c7630-7a0d-4d12-9d66-dd827ee3856a",
      genre_api_id: 44,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Anime Influenced",
      name_pt: "Anime Influenciado",
      slug: "anime-influenciado"
    },
    {
      id: "ec053a26-b533-40cb-82c8-167b898edfee",
      genre_api_id: 45,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Gender Bender",
      name_pt: "Gender Bender",
      slug: "gender-bender"
    },
    {
      id: "63d10ce9-247e-4a4d-bc97-71802e57a551",
      genre_api_id: 46,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Doujinshi",
      name_pt: "Doujinshi",
      slug: "doujinshi"
    },
    {
      id: "949787d3-ee1e-4387-9092-870e7cb50829",
      genre_api_id: 47,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Mahou Shoujo",
      name_pt: "Mahou Shoujo",
      slug: "mahou-shoujo"
    },
    {
      id: "25524ba6-3828-4760-8a38-3ffd54369856",
      genre_api_id: 48,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Mahou Shounen",
      name_pt: "Mahou Shounen",
      slug: "mahou-shounen"
    },
    {
      id: "a27d4bdb-22e2-4019-b19c-32be4b8f1c74",
      genre_api_id: 49,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Gore",
      name_pt: "Gore",
      slug: "gore"
    },
    {
      id: "e3110f87-f10f-40e4-bb3f-fbcfda5f5110",
      genre_api_id: 50,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Law",
      name_pt: "Lei",
      slug: "lei"
    },
    {
      id: "abe9a24c-c7ed-40d9-966a-1105dcbfaa7c",
      genre_api_id: 51,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Cooking",
      name_pt: "Cozinhando",
      slug: "cozinhando"
    },
    {
      id: "3a7c2ebd-fdfe-46ad-9da8-62945364fbad",
      genre_api_id: 52,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Mature",
      name_pt: "Maturo",
      slug: "maturo"
    },
    {
      id: "063b9aaa-3f34-4cd5-860d-1288293ffec1",
      genre_api_id: 53,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Medical",
      name_pt: "Médico",
      slug: "médico"
    },
    {
      id: "4b771974-401b-43b9-ade2-8a3e41fdd374",
      genre_api_id: 54,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Political",
      name_pt: "Politíca",
      slug: "politíca"
    },
    {
      id: "f04bec6b-98ca-4704-be96-ea647e03b43c",
      genre_api_id: 55,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Tokusatsu",
      name_pt: "Tokusatsu",
      slug: "tokusatsu"
    },
    {
      id: "24ec6734-9238-4959-a8fc-d0c1063ea389",
      genre_api_id: 56,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Youth",
      name_pt: "Juventude",
      slug: "juventude"
    },
    {
      id: "d82d8862-24fd-4e4c-beba-ecd4e062f28f",
      genre_api_id: 57,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Workplace",
      name_pt: "Local de Trabalho",
      slug: "local-de-trabalho"
    },
    {
      id: "6e164b7a-e301-4f7e-900d-32beee8c5fd9",
      genre_api_id: 58,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Crime",
      name_pt: "Crime",
      slug: "crime"
    },
    {
      id: "183cca01-8bdc-4897-8af3-01fd283ef005",
      genre_api_id: 59,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Zombies",
      name_pt: "Zombis",
      slug: "zombis"
    },
    {
      id: "ce8205af-1c38-4ab4-90f0-fa1b42eedd9a",
      genre_api_id: 60,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Documentary",
      name_pt: "Documentário",
      slug: "documentário"
    },
    {
      id: "6883de51-e9e0-4831-8a79-feb3bc06717e",
      genre_api_id: 61,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Family",
      name_pt: "Familía",
      slug: "familía"
    },
    {
      id: "af6fe642-c5d5-40f2-b22b-3eee6f274801",
      genre_api_id: 62,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Food",
      name_pt: "Comida",
      slug: "comida"
    },
    {
      id: "6ae2f500-ca3f-40b3-84cb-476e5a8464ab",
      genre_api_id: 63,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Friendship",
      name_pt: "Amizade",
      slug: "amizade"
    },
    {
      id: "507589ce-af64-43f5-b173-431b0af11d7d",
      genre_api_id: 64,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Tragedy",
      name_pt: "Tragédia",
      slug: "tragédia"
    },
    {
      id: "1f6b5ee3-bbcf-40b7-9ab6-a60ec1f0bd50",
      genre_api_id: 65,
      created_at: moment.utc(),
      updated_at: moment.utc(),
      name_es: "Isekai",
      name_pt: "Isekai",
      slug: "isekai"
    }
  ])
}
