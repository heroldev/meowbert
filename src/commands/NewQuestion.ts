import { BaseCommandInteraction, Client, MessageEmbed, TextChannel, Permissions } from "discord.js"
import dbGetMulti from "../db/dbGetMulti"
import dbUseQuestion from "../db/dbUseQuestion"
import { Command } from "../types/Command"
import { getRandomInt } from "../util/getRandomInt"
import { onDemandQOTD } from "../util/onDemandQOTD"
require('dotenv').config()

/**
 * NewQuestion command
 * Sends a new QOTD to all registered channels, regardless of time
 * @author heroldev (Andrew Herold)
 */
export const NewQuestion: Command = {
  name: "newqotd",
  description: "Sends a new QOTD to all registered channels, regardless of time.",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {

    if (interaction.user.id === process.env.DEV_TOKEN) {

      onDemandQOTD(false)

      const qotdEmbed = new MessageEmbed()
        .setColor('#d5e1ee')
        .setTitle('New Question of the Day Sent!')
        .setDescription("I sure hope you know what you are doing.")

      await interaction.followUp({
        ephemeral: true,
        embeds: [qotdEmbed],
      })
    } else {

      const embed = new MessageEmbed()
      embed
        .setColor('#e74c3c')
        .setTitle('Failed to send new QOTD!')
        .setDescription('This command has locked permissions.')

      await interaction.followUp({
        ephemeral: true,
        embeds: [embed],
      })
    }
  }

}

