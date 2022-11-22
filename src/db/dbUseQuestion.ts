import dbRun from "./dbRun"

/**
 * Marks an unused question as used, and moves it to the used table.
 * @param questionId the ID of the question to use
 * @param question the text of the question
 * @returns 
 */
export const dbUseQuestion = (questionId: number, question: string) => {

  let usedDate = new Date()

  return dbRun("INSERT into qotd_used (qotd_id, question, date_used) VALUES (?,?,?)", [questionId, question, usedDate.toISOString()]).then(() => {
    dbRun("DELETE FROM qotd_unused WHERE id=?", [questionId])
  })

}

export default dbUseQuestion