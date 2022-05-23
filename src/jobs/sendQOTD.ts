import { MessageEmbed, TextChannel } from "discord.js";
import { client } from "../Bot"
import dbGetMulti from "../db/dbGetMulti";
import dbGetSingle from "../db/dbGetSingle";
import dbUseQuestion from "../db/dbUseQuestion";
import { getRandomInt } from "../util/getRandomInt";
const cron = require('cron')

export const sendQOTD = cron.job('0 7 * * *', () => {

  if (!client.user || !client.application) {
    console.log("Error with question of the day job")
  } else {

    dbGetMulti("SELECT id, question from qotd_unused").then((result) => {
      const unusedQuestions: any[] = result as any[]

      if (unusedQuestions.length !== 0) {
        const chosenQuestionId = getRandomInt(unusedQuestions.length)

        const chosenQuestion = unusedQuestions[chosenQuestionId]

        const qotdEmbed = new MessageEmbed()
          .setColor('#d5e1ee')
          .setTitle('Question of the Day')
          .setDescription(chosenQuestion.question)
          .setFooter({ text: 'Question #' + chosenQuestion.id });


        dbGetMulti("SELECT guild_id, channel_id FROM qotd_channel").then((result: any) => {
          result.forEach((row: any) => {
            client.channels.fetch(row.channel_id).then((channel) => {
              if (channel !== null) {
                (channel as TextChannel).send({
                  embeds: [qotdEmbed]
                })
              }
            })
          })
        })

        dbUseQuestion(chosenQuestion.id, chosenQuestion.question)

        console.log("meowbert sent new QOTD#" + chosenQuestion.id + " - " + chosenQuestion.question)
      } else {
        // this is the "damn no more questions" case
        const qotdEmbed = new MessageEmbed()
          .setColor('#d5e1ee')
          .setTitle('Question of the Day')
          .setDescription("no more questions :(")
          .setFooter({ text: "we're fresh out of questions" });


        dbGetMulti("SELECT guild_id, channel_id FROM qotd_channel").then((result: any) => {
          result.forEach((row: any) => {
            client.channels.fetch(row.channel_id).then((channel) => {
              if (channel !== null) {
                (channel as TextChannel).send({
                  embeds: [qotdEmbed]
                })
              }
            })
          })
        })
        console.log("damn no more questions")
      }
    })

  }

})