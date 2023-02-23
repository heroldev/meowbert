import { BaseCommandInteraction, Client, MessageEmbed, TextChannel, Permissions } from "discord.js"
import dbGetMulti from "../db/dbGetMulti"
import dbUseQuestion from "../db/dbUseQuestion"
import { Command } from "../types/Command"
import { getRandomInt } from "../util/getRandomInt"
import { onDemandQOTD } from "../util/onDemandQOTD"
require('dotenv').config()

/**
 * Re-sends the last used Question of the Day to all registered QOTD channels
 * @author heroldev (Andrew Herold)
 */
export const RedoQuestion: Command = {
  name: "redoqotd",
  description: "Sends the last used QOTD to *all* registered QOTD channels.",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {

    if (interaction.user.id === process.env.DEV_TOKEN) {

      onDemandQOTD(true)

      const qotdEmbed = new MessageEmbed()
        .setColor('#d5e1ee')
        .setTitle('Re-do Question of the Day Sent!')
        .setDescription("I sure hope you know what you are doing.")

      await interaction.followUp({
        ephemeral: true,
        embeds: [qotdEmbed],
      })
    } else {

      const embed = new MessageEmbed()
      embed
        .setColor('#e74c3c')
        .setTitle('Failed to re-send QOTD!')
        .setDescription('This command has locked permissions.')

      await interaction.followUp({
        ephemeral: true,
        embeds: [embed],
      })
    }
  }
}

