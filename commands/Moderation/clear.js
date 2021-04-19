const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ['purge', 'delete'],
    description: "Clears messages!",
    async execute(client, command, message, args, Discord) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("> You need the `MANAGE_MESSAGES` permission!")
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("> I do not have the `MANAGE_MESSAGES` permission!")
        
        if (!args[0]) return message.reply("Please enter the amount of messages to be cleared!");
        if (isNaN(args[0])) return message.reply("Please enter the amount of messages to be cleared!");
        if (args[0] > 100) return message.reply("You can't remove more than 100 messages at a time.");
        if (args[0] < 1) return message.reply("You need to remove at least 1 message.");
        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)
        });
        message.channel.send("> The amount of messages has been deleted successfully!");
        
    }
}
        



