module.exports = {
    name: 'help',
    aliases: ['commands'],
    category: "info",
    description: "help command",
    execute(client, command, message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help Command')
            .setThumbnail('https://cdn.discordapp.com/attachments/822106850258321440/822432415364546580/nearrrfulll.jpg')
            .addFields(
                { name: '🎵 Music', value: '`play`, `stop`, `skip`, `queue`\n`loop`, `resume`, `pause`, `volume`' },
                { name: '😂 Fun', value: '`dankmeme`, `wholesomememe`, `8ball`' },
                { name: '🔧 Utility', value: '`avatar`, `mcserver`, `ping`\n`corona`, `reportbug`,`anime`, `embed`\n`updatelogs`' },
                { name: '⚙  Moderation', value: '`ban`, `unban`, `kick`, `clear`\n`nickname`, `resetnickname`' }
            )
            .setFooter(`${message.author.username} have a amazing day ahead!`);
        message.channel.send(helpEmbed)
    }
}

