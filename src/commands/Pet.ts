import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../types/Command";

export const Pet: Command = {
    name: "pet",
    description: "omg u givin me the pets",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const embed = new MessageEmbed()
        .setColor('#d5e1ee')
        .setTitle('omg! :3')
        .setDescription('ur pettin\' me! *purrs contently*')
  
        await interaction.followUp({
            ephemeral: true,
            embeds:[embed]
        });
    }
};