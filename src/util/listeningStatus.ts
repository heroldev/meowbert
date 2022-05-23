import { ExcludeEnum } from "discord.js"
import { ActivityTypes } from "discord.js/typings/enums"
import { getRandomInt } from "./getRandomInt"

const statuses = [{
  name: "FastTracker II",
  type: ActivityTypes.LISTENING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "this server",
  type: ActivityTypes.LISTENING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "the Plok OST",
  type: ActivityTypes.LISTENING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "the Bomb Jack OST",
  type: ActivityTypes.LISTENING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "XMPlay",
  type: ActivityTypes.LISTENING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "/help",
  type: ActivityTypes.LISTENING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "Skaven",
  type: ActivityTypes.LISTENING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "Jester",
  type: ActivityTypes.LISTENING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "Purple Motion",
  type: ActivityTypes.LISTENING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "Second Reality",
  type: ActivityTypes.WATCHING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "Daytona USA",
  type: ActivityTypes.PLAYING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
{
  name: "Jet Set Radio",
  type: ActivityTypes.PLAYING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},

{
  name: "Pokémon Emerald",
  type: ActivityTypes.PLAYING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},

{
  name: "Pokémon Black 2",
  type: ActivityTypes.PLAYING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},

{
  name: "Pokémon Platinum",
  type: ActivityTypes.PLAYING as ExcludeEnum<typeof ActivityTypes, "CUSTOM">
},
]

export const getListeningStatus = () => {

  let randomInt = getRandomInt(statuses.length)
  return statuses[randomInt]

}