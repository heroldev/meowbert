import {Promise} from 'bluebird'
import dbRun from './dbRun'
const sqlite3 = require('sqlite3')

export const dbCreate = (dbFilePath: string) => {

  const database = new sqlite3.Database(dbFilePath, (err: any) => {
    if (err) {
      console.log('meowbert failed to create the database', err)
    } else {
      console.log('meowbert connected to database, creating tables..')
      runInitQueries()
      console.log('tables created! make sure to add questions :)')
    }
  })

  const runInitQueries = () => {
    // create the tables
    database.run("CREATE TABLE IF NOT EXISTS `qotd_channel` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `guild_id` varchar(50) NOT NULL, `channel_id` varchar(50) DEFAULT NULL);", [])
    database.run("CREATE TABLE IF NOT EXISTS `qotd_unused` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `question` varchar(250) NOT NULL,`date_added` date DEFAULT NULL) ;", [])
    database.run("CREATE TABLE IF NOT EXISTS `qotd_used` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `qotd_id` varchar(50) NOT NULL,`question` varchar(250) NOT NULL, `date_used` date NOT NULL );", [])

  }

  database.close()

}

export default dbCreate