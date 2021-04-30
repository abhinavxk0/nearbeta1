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
                { name: '🔧 Utility', value: '`avatar`, `mcserver`, `ping`\n`corona`, `reportbug`,`anime`, `embed`\n`updatelogs`, `invite`' },
                { name: '🎵 Music', value: '`play`, `stop`, `skip`, `queue`\n`loop`, `resume`, `pause`, `volume`\n`shuffle`' },
                { name: '😂 Fun', value: '`dankmeme`, `wholesomememe`, `8ball`' },
                { name: '🙋‍♂️ Actions', value: '`hug`, `kiss`, `pat`' },
                { name: '⚙  Moderation', value: '`ban`, `unban`, `kick`, `clear`\n`nickname`, `resetnickname`' }
            )
            .setFooter(`${message.author.username} have a amazing day ahead!`, message.author.displayAvatarURL({ size: 4096, dynamic: true }));
        try {
            message.author.send(helpEmbed)
            message.channel.send('> Check your DMS for the list of commands!')
        } catch (err) {
            message.reply('There was an error sending you a DM!')
            message.channel.send(helpEmbed)
            console.log(err)
        }
    }
}


