import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import dbAddQuestion from "../db/dbAddQuestion";
import dbGetSingle from "../db/dbGetSingle";
import { Command } from "../types/Command";

export const Status: Command = {
  name: "status",
  description: "detailed information about meowbert",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {

    interface INumQuestions {
      "COUNT(*)": number
    }

    let num_questions = await dbGetSingle('SELECT COUNT(*) FROM qotd_unused;') as INumQuestions

    const embed = new MessageEmbed()
      .setColor('#d5e1ee')
      .setTitle('meowbert status')
      .setDescription('general and detailed info about meowbert')
      .addFields(
        { name: 'Build Date', value: process.env.BUILD_DATE || ''},
        { name: 'DB Information', value: num_questions["COUNT(*)"] + " questions ingested" },
      )
      .setFooter({ text: 'meowbert v1.3.0', iconURL: 'https://i.imgur.com/QuUEvbD.png' });

    await interaction.followUp({
      ephemeral: true,
      embeds: [embed],
    })
  }
};