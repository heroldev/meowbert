import { BaseCommandInteraction, Client, Interaction } from "discord.js";
import { Commands } from "../Commands";

/**
 * An event handler to handle commands when they are called by a user.
 * Called in the bot entry-point, and is hit whenever someone creates an interaction with the bot.
 */
export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenu()) {
            await handleSlashCommand(client, interaction);
        }
    });
};

/**
 * Handles slash commands by checking them against the command array to make sure they can be executed
 * Commands must be pushed in Commands.ts
 * Also logs the usage of a command to the console
 * @param client The bot client in a given server
 * @param interaction The interaction by a user
 * @returns 
 */
const handleSlashCommand = async (client: Client, interaction: BaseCommandInteraction): Promise<void> => {
  const slashCommand = Commands.find(c => c.name === interaction.commandName);
  if (!slashCommand) {
      interaction.followUp({ content: "An error has occurred" });
      return;
  }

  await interaction.deferReply();
  console.log(interaction.type + " sent by " + interaction.user.username + ": /" + interaction.commandName)

  slashCommand.run(client, interaction);
};