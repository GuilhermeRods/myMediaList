import Knex from 'knex'
import knexfile from './knexfile'

const knexConfig = Knex(knexfile['test'])

const DatabaseTest = {
  createDB: () => knexConfig.migrate.latest(),
  destroyDB: () => knexConfig.migrate.rollback(null, true)
}

export default DatabaseTest
