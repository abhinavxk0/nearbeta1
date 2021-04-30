const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ['purge', 'delete'],
    description: "Clears messages!",
    async execute(client, command, message, args, Discord) {
        //_________________________________________EMBEDS___________________________________________________________
        const perm1Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> You need the `MANAGE_MESSAGES` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const perm2Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> I need the `MANAGE_MESSAGES` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const err1Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription(`> Please enter the amount of messages to be cleared!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const err2Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription(`> The argument has to be a number!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const err3Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription(`> The argument has to be a number between 1 and 100!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        //__________________________________________________________________________________________________________

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(perm1Embed)
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(perm2Embed)

        if (!args[0]) return message.channel.send(err1Embed);
        if (isNaN(args[0])) return message.channel.send(err2Embed);
        if (args[0] > 100) return message.channel.send(err3Embed);
        if (args[0] < 1) return message.channel.send(err3Embed);
        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)
        });
        message.delete()

    }
}




