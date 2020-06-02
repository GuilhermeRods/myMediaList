import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const SECRET = process.env.SECRET || 'supersecretkey'
export const PORT = process.env.PORT || 3000
export const DATABASE =
  process.env.DATABASE || 'postgress://user@password:host/database'
export const ANIME_API_URL =
  process.env.ANIME_API_URL || 'https://kitsu.io/api/edge'
