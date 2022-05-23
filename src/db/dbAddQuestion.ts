import dbRun from "./dbRun"

export const dbAddQuestion = (question: string) => {

  let addedDate = new Date()

  return dbRun("INSERT into qotd_unused (question, date_added) VALUES (?,?)", [question, addedDate.toISOString()])

}

export default dbAddQuestion