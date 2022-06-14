import { Command } from "./types/Command";
import { Hello } from "./commands/Hello";
import { Help } from "./commands/Help";
import { TestEmbed } from "./commands/TestEmbed";
import { SendQuestionTo } from "./commands/SendQuestionTo";
import { AddQuestion } from "./commands/AddQuestion";
import { StopQuestion } from "./commands/StopQuestion";
import { Status } from "./commands/Status";
import { NewQuestion } from "./commands/NewQuestion";
import { RedoQuestion } from "./commands/RedoQuestion";
import { Broadcast } from "./commands/Broadcast";

export const Commands: Command[] = [Hello, Help, SendQuestionTo, AddQuestion, StopQuestion, Status, NewQuestion, RedoQuestion, Broadcast];