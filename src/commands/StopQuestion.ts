import { BaseCommandInteraction, Client, CommandInteraction, CommandInteractionOptionResolver, GuildMember, MessageEmbed } from "discord.js";
import { ChannelTypes } from "discord.js/typings/enums";
import {Permissions } from "discord.js"
import { dbSetQuestionChannel } from "../db/dbSetQuestionChannel";
import { Command } from "../types/Command";
import { dbDisableQuestion } from "../db/dbDisableQuestion";

/**
 * Removes a QOTD channel association from the database. 
 * This command must be ran before meowbert is removed from a server, otherwise it will break.
 * @author heroldev (Andrew Herold)
 */
export const StopQuestion: Command = {
  name: "stopqotd",
  description: "Disables the QOTD for this server",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {

    let embed = new MessageEmbed()

    if (interaction.memberPermissions?.has(Permissions.FLAGS.MANAGE_ROLES)) {

      dbDisableQuestion(interaction.guildId || "")

      embed
        .setColor('#d5e1ee')
        .setTitle('QOTD Disabled!')
        .setDescription('The question of the day will no longer be sent to this server.')

    } else {

      embed
      .setColor('#e74c3c')
      .setTitle('Failed to disable the QOTD!')
      .setDescription('This command is for administrators only.')
      
    }

    await interaction.followUp({
      ephemeral: true,
      embeds: [embed],
    })
  }
};