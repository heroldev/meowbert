import dbRun from "./dbRun"

export const dbUseQuestion = (questionId: number, question: string) => {

  let usedDate = new Date()

  return dbRun("INSERT into qotd_used (qotd_id, question, date_used) VALUES (?,?,?)", [questionId, question, usedDate.toISOString()]).then(() => {
    dbRun("DELETE FROM qotd_unused WHERE id=?", [questionId])
  })

}

export default dbUseQuestion