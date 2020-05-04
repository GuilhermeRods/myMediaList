import knex from 'knex'
import knexfile from './knexfile'

export const connectionDev = knex(knexfile.development)
