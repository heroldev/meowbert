import dbGetSingle from "./dbGetSingle"
import dbRun from "./dbRun"

export const dbDisableQuestion = (guildId: string) => {

  dbRun('DELETE FROM qotd_channel WHERE guild_id=?', [guildId])

}