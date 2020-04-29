// Update with your config settings.


module.exports = {
    development:{

    client: 'sqlite3',
    connection: {
      filename: './sqlite.db'
    },
    migrations:{
      directory:"./src/database/migrations"
    },
    useNullAsDefault:true,
  },

};
