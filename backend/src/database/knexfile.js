import { DATABASE } from '../config'
import path from 'path'

export const 
  development = {
    client: 'pg',
    connection: DATABASE,
    migrations: {
      directory: path.resolve(__dirname, 'migrations')
    },
    useNullAsDefault: true
  }

const knex = {
    development
  }

export default knex