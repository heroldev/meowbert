import {Promise} from 'bluebird'
import dbRun from './dbRun'
const sqlite3 = require('sqlite3')

/**
 * Creates the database if it doesn't already exist. Does not fill it with any data.
 * @author heroldev (Andrew Herold)
 * @param dbFilePath the file path of where you want the DB to be created
 */
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
    // create the QOTD tables
    database.run("CREATE TABLE IF NOT EXISTS `qotd_channel` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `guild_id` varchar(50) NOT NULL, `channel_id` varchar(50) DEFAULT NULL);", [])
    database.run("CREATE TABLE IF NOT EXISTS `qotd_queue` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `question` varchar(250) NOT NULL,`user_id` varchar(50) NOT NULL,`date_added` date DEFAULT NULL) ;", [])
    database.run("CREATE TABLE IF NOT EXISTS `qotd_unused` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `question` varchar(250) NOT NULL,`date_added` date DEFAULT NULL) ;", [])
    database.run("CREATE TABLE IF NOT EXISTS `qotd_used` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `qotd_id` varchar(50) NOT NULL,`question` varchar(250) NOT NULL, `date_used` date NOT NULL );", [])

    // create the pet tables
    database.run("CREATE TABLE IF NOT EXISTS `pet_count` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `user_id` varchar(50) NOT NULL,`type` INTEGER NOT NULL);", [])

  }

  database.close()

}

export default dbCreate