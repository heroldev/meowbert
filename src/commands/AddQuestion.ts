import { BaseCommandInteraction, Client, CommandInteraction, CommandInteractionOptionResolver, MessageEmbed } from "discord.js";
import { ChannelTypes } from "discord.js/typings/enums";
import dbAddQuestion from "../db/dbAddQuestion";
import { dbSetQuestionChannel } from "../db/dbSetQuestionChannel";
import { Command } from "../types/Command";

export const AddQuestion: Command = {
  name: "addqotd",
  description: "Adds a new Question of the Day (QOTD)",
  type: "CHAT_INPUT",
  options: [
    {
      name: 'question',
      type: 'STRING',
      description: 'The QOTD you would like to add',
      required: true
    }
  ],
  run: async (client: Client, interaction: BaseCommandInteraction) => {

    let embed = new MessageEmbed()
    let questionToAdd = interaction.options.get('question', true).value?.toString() || ""

    const questionId = await dbAddQuestion(questionToAdd).then((value: any) => {
      return value.id
    })

    embed
        .setColor('#d5e1ee')
        .setTitle('New QOTD Added!')
        .setDescription('New Question of the Day added to database: "' + questionToAdd + "\"")
        .setFooter({ text: 'Question #' + questionId})

    await interaction.followUp({
      ephemeral: true,
      embeds: [embed],
    })
  }
};