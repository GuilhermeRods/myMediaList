import { DATABASE } from '../config'
import path from 'path'

export const development = {
  client: 'pg',
  connection: DATABASE,
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  },
  useNullAsDefault: true
}

export const test = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'db_test.sqlite3')
  },
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  },
  useNullAsDefault: true
}
const knex = {
  development,
  test
}

export default knex
