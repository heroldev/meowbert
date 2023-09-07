import { Client } from "discord.js";
import { sendQOTD } from "./jobs/sendQOTD";
import { updateListeningStatus } from "./jobs/updateStatus";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import { checkFeelings } from "./jobs/checkFeelings";
require('dotenv').config()

/**
 * Creates a new client
 */
export const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

updateListeningStatus.start()
sendQOTD.start()
checkFeelings.start()

client.login(process.env.DISCORD_API_TOKEN);