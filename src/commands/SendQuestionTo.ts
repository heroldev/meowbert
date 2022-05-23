import { BaseCommandInteraction, Client, CommandInteraction, CommandInteractionOptionResolver, GuildMember, MessageEmbed } from "discord.js";
import { ChannelTypes } from "discord.js/typings/enums";
import {Permissions } from "discord.js"
import { dbSetQuestionChannel } from "../db/dbSetQuestionChannel";
import { Command } from "../types/Command";

export const SendQuestionTo: Command = {
  name: "startqotd",
  description: "Sets the Question of the Day (QOTD) channel",
  type: "CHAT_INPUT",
  options: [
    {
      name: 'channel',
      type: 'CHANNEL',
      description: 'The channel where you want the QOTD to be sent',
      required: true
    }
  ],
  run: async (client: Client, interaction: BaseCommandInteraction) => {

    let embed = new MessageEmbed()

    if (interaction.memberPermissions?.has(Permissions.FLAGS.MANAGE_ROLES)) {

      dbSetQuestionChannel(interaction.guildId || "", interaction.options.get('channel', true).channel?.id || "")

      embed
        .setColor('#d5e1ee')
        .setTitle('QOTD Channel Set!')
        .setDescription('The question of the day will be sent to #' + interaction.options.get('channel', true).channel?.name)

    } else if (interaction.options.get('channel', true).channel?.type !== "GUILD_TEXT") {
      embed
        .setColor('#e74c3c')
        .setTitle('Failed to set QOTD Channel!')
        .setDescription('The question of the day will not be sent until a valid text channel is set as its destination.')

    } else {

      embed
      .setColor('#e74c3c')
      .setTitle('Failed to set QOTD Channel!')
      .setDescription('This command is for administrators only.')
      
    }

    await interaction.followUp({
      ephemeral: true,
      embeds: [embed],
    })
  }
};