import { BaseCommandInteraction, Client, MessageEmbed, TextChannel } from "discord.js";
import dbGetMulti from "../db/dbGetMulti";
import { Command } from "../types/Command";
require('dotenv').config()

/**
 * Broadcast Command for Meowbert
 * Sends a specified broadcast message to all QOTD channels if the discord user that invoked the command has developer permissions
 * Otherwise, logs the username who tried to invoke this developer-only command
 * @author heroldev (Andrew Herold)
 */
export const Broadcast: Command = {
  name: "broadcast",
  description: "Send a custom message to *all* QOTD channels.",
  type: "CHAT_INPUT",
  options: [
    {
      name: 'title',
      type: 'STRING',
      description: 'The title of your broadcast message',
      required: true
    },
    {
      name: 'message',
      type: 'STRING',
      description: 'The message you would like to broadcast',
      required: true
    }
  ],
  run: async (client: Client, interaction: BaseCommandInteraction) => {

    let broadcastTitle = interaction.options.get('title', true).value?.toString() || "Broadcast Title"
    let broadcastMessage = interaction.options.get('message', true).value?.toString() || "Broadcast Message"

    if (interaction.user.id === process.env.DEV_TOKEN) {

      const embed = new MessageEmbed()
        .setColor('#d5e1ee')
        .setTitle(broadcastTitle)
        .setDescription(broadcastMessage)
        .setFooter({ text: 'from the mind of meowbert', iconURL: 'https://i.imgur.com/QuUEvbD.png' });

      const replyEmbed = new MessageEmbed()
        .setColor('#d5e1ee')
        .setTitle("Broadcast Sent!")
        .setDescription("I sure hope you know what you are doing.")

      dbGetMulti("SELECT guild_id, channel_id FROM qotd_channel").then((result: any) => {
        console.log(result)
        result.forEach((row: any) => {
          client.channels.fetch(row.channel_id).then((channel) => {
            if (channel !== null) {
              (channel as TextChannel).send({
                embeds: [embed]
              })
              console.log("meowbert sent a broadcast: " + broadcastMessage + " to channel " + channel.id)
            }
          })
        })
      })

      await interaction.followUp({
        ephemeral: true,
        embeds: [replyEmbed]
      });
    } else {
      const embed = new MessageEmbed()
      embed
        .setColor('#e74c3c')
        .setTitle('Admin abuse!')
        .setDescription('This command has locked permissions. Your username has been reported.')

      console.log("meowbert ignored to send a broadcast: " + broadcastMessage + " from " + interaction.user.id + " - " + interaction.user.username)

      await interaction.followUp({
        ephemeral: true,
        embeds: [embed],
      })
    }
  }
}
