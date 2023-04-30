const Discord = require("discord.js")

module.exports = {

    name: "ip",

    async run(bot, message) {
        
        await message.reply(`**L'ip du serveur : 162.19.21.222:27016 | Console : (F10 : connect 162.19.21.222:27016 )**`)
    }
}