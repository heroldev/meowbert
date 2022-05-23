import { Command } from "./types/Command";
import { Hello } from "./commands/Hello";
import { Help } from "./commands/Help";
import { TestEmbed } from "./commands/TestEmbed";
import { SendQuestionTo } from "./commands/SendQuestionTo";
import { AddQuestion } from "./commands/AddQuestion";

export const Commands: Command[] = [Hello, Help, SendQuestionTo, AddQuestion];