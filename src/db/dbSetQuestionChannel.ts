import dbGetSingle from "./dbGetSingle"
import dbRun from "./dbRun"


export const dbSetQuestionChannel = (guildId: string, channelId: string) => {

  // check if ID is set - if so, update it
  dbGetSingle("SELECT guild_id FROM qotd_channel WHERE guild_id=?", [guildId]).then((result: any) => {
    
    if(typeof result === 'undefined') {
      // if ID is not set, create the entry
      dbRun("INSERT INTO qotd_channel (guild_id, channel_id) VALUES (?,?);", [guildId, channelId])
    } else {
      // update the entry
      dbRun("UPDATE qotd_channel SET channel_id=? WHERE guild_id=?;", [channelId, guildId])
    }
  })

}