import { MessageEmbed, TextChannel } from "discord.js";
import { client } from "../Bot"
import { getRandomInt } from "../util/getRandomInt";
const cron = require('cron')

/**
 * A cron job to ask about how people are feeling (sends to a private channel)
 * @author heroldev (Andrew Herold)
 */
export const checkFeelings = cron.job('0 1,13,17,21 * * *', () => {

  if (!client.user || !client.application) {
    console.log("Error with feelings job")
  } else {

    setTimeout((function () {

      const feelingsEmbed = new MessageEmbed()
        .setColor('#d5e1ee')
        .setTitle('feelings check!')
        .setDescription("how are you feeling right now?")
        .setFooter({ text: "please be descriptive and honest - use the emotion wheel if you need help!" });

      client.channels.fetch(process.env.FEELINGS_CHANNEL || "").then((channel) => {
        if (channel !== null) {
          (channel as TextChannel).send({
            embeds: [feelingsEmbed]
          })
        } else {
          console.log("meowbert failed to send a feelings check :( ")
        }
      })

      console.log("meowbert sent a feelings check!")

      // execute randomly in between each 4 hour interval
    }), getRandomInt(14400000));

  }

})