import { BaseCommandInteraction, ChatInputApplicationCommandData, Client, CommandInteraction } from "discord.js";

/**
 * Interface enforcing command layout. See ./commands/TestEmbed.ts for an example
 */
export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: BaseCommandInteraction) => void;
}