import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../types/Command";

export const Help: Command = {
  name: "help",
  description: "Info and commands for meowbert",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const embed = new MessageEmbed()
      .setColor('#d5e1ee')
      .setTitle('meowbert help & info')
      .setAuthor({ name: 'developed by heroldev', url: 'https://github.com/heroldev', iconURL: 'https://i.imgur.com/QuUEvbD.png' })
      .setDescription('Thank you for using meowbert!')
      .addFields(
        { name: 'Functionality', value: '- sends a Question of the Day at 7am Central Time to each registered server channel'},
        { name: 'General Commands', value: '`/hello` - omg hey :3\n`/help` - returns this message' },
        { name: 'Question of the Day Commands', value: '`/addqotd` - adds a new Question of the Day\n`/qotdchannel` - (**Mod Only**) sets the channel where the Question of the Day is sent' },
      )
      .setFooter({ text: 'meowbert v1.0.0', iconURL: 'https://i.imgur.com/QuUEvbD.png' });

    await interaction.followUp({
      ephemeral: true,
      embeds: [embed],
    })
  }
};