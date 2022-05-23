import { BaseCommandInteraction, Client, MessageEmbed, TextChannel, Permissions } from "discord.js"
import dbGetMulti from "../db/dbGetMulti"
import dbUseQuestion from "../db/dbUseQuestion"
import { Command } from "../types/Command"
import { getRandomInt } from "../util/getRandomInt"

export const NewQuestion: Command = {
  name: "newqotd",
  description: "Sends a new QOTD, regardless of time. Use with caution.",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {

    if (interaction.memberPermissions?.has(Permissions.FLAGS.MANAGE_ROLES)) {

      const unusedQuestions: any[] = await dbGetMulti("SELECT id, question from qotd_unused") as any[]

      if (unusedQuestions.length !== 0) {
        const chosenQuestionId = getRandomInt(unusedQuestions.length)

        const chosenQuestion = unusedQuestions[chosenQuestionId]

        const qotdEmbed = new MessageEmbed()
          .setColor('#d5e1ee')
          .setTitle('Question of the Day')
          .setDescription(chosenQuestion.question)
          .setFooter({ text: 'Question #' + chosenQuestion.id });

        dbUseQuestion(chosenQuestion.id, chosenQuestion.question)

        console.log("meowbert forcibly sent new QOTD#" + chosenQuestion.id + " - " + chosenQuestion.question)

        await interaction.followUp({
          ephemeral: true,
          embeds: [qotdEmbed],
        })
      } else {

        const qotdEmbed = new MessageEmbed()
          .setColor('#d5e1ee')
          .setTitle('Question of the Day')
          .setDescription("oh no, we're out of questions")
          .setFooter({ text: "no more questions" });

        await interaction.followUp({
          ephemeral: true,
          embeds: [qotdEmbed],
        })

      }

    } else {

      const embed = new MessageEmbed()
      embed
      .setColor('#e74c3c')
      .setTitle('Failed to send QOTD!')
      .setDescription('This command is for administrators only.')

      await interaction.followUp({
        ephemeral: true,
        embeds: [embed],
      })
    }



  }

}

