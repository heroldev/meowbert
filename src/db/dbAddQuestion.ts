import dbRun from "./dbRun"

/**
 * Takes a given question and adds it to the database
 * @param question the text of the question
 * @param user the user ID requesting the question to be added
 * @returns the ID of the question, either in the queue or in the unused table
 */
export const dbAddQuestion = (question: string, user: string) => {

  let addedDate = new Date()

  if (user === process.env.DEV_TOKEN || user === process.env.ADDL_USER_TOKEN) {
    // user is developer
    return dbRun("INSERT into qotd_unused (question, date_added) VALUES (?,?)", [question, addedDate.toISOString()])
  } else {
    // user is a regular user
    return dbRun("INSERT into qotd_queue (question, date_added, user_id) VALUES (?,?,?)", [question, addedDate.toISOString(), user])
  }
  

}

export default dbAddQuestion