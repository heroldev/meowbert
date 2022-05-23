import {Promise} from 'bluebird'
const sqlite3 = require('sqlite3')

export const dbConnect = (dbFilePath: string) => {

  const database = new sqlite3.Database(dbFilePath, (err: any) => {
    if (err) {
      console.log('meowbert could not connect to database', err)
    } else {
      //console.log('meowbert connected to database')
    }
  })

  return database

}

export default dbConnect