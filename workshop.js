const Discord = require("discord.js")

module.exports = {

    name: "workshop",

    async run(bot, message) {
        
        await message.reply(`Le workshop du serveur : https://steamcommunity.com/sharedfiles/filedetails/?id=2955555803`)
    }
}