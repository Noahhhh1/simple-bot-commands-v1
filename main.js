const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const LoadCommands = require("./Loader/loadCommands")
const config = require("./config")

bot.commands = new Discord.Collection()

bot.login(config.token)
LoadCommands(bot)

bot.on("messageCreate", async message => {
    if (message.content === "!ping") return bot.commands.get("ping").run(bot, message)
})

bot.on("messageCreate", async message => {
    if (message.content === "!workshop") return bot.commands.get("workshop").run(bot, message)
})

bot.on("messageCreate", async message => {
    if (message.content === "!ip") return bot.commands.get("ip").run(bot, message)
})

bot.on("messageCreate", async message => {
    if (message.content === "!boutique") return bot.commands.get("boutique").run(bot, message)
})

bot.on("messageCreate", async message => {
    if (message.content === "!discord") return bot.commands.get("discord").run(bot, message)
})

console.log("Le bot est opérationel !")

