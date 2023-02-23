import {client} from '../Bot'
import { getListeningStatus } from '../util/listeningStatus'
const cron = require('cron')

/**
 * A cron job to update the bot's status every hour, on the hour. Pulls the status data from ListeningStatus.
 * @author heroldev (Andrew Herold)
 */
export const updateListeningStatus = cron.job('0 */1 * * *', () => {

  if (!client.user || !client.application) {
    console.log("Error with update status job")
  } else {
  
    let status = getListeningStatus()
  
    client.user.setPresence({
      status: 'online',
      activities: [status]
    })
  
    console.log("meowbert status updated - "+ status.type + " " + status.name)
  }

})



