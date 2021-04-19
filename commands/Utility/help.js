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
                { name: '🎵 Music', value: '`play`, `stop`, `skip`, `queue`\n`3d`, `bassboost`, `echo`, `karaoke`\n`nightcore`, `vaporwave`, `loopnode`' },
                { name: '😂 Fun', value: '`dankmeme`, `wholesomememe`' },
                { name: '🔧 Utility', value: '`avatar`, `mcserver`, `ping`\n`corona`, `reportbug`,`anime`' },
                { name: '⚙  Moderation', value: '`ban`, `unban`, `kick`, `clear`' }
            )
            .setFooter('Music commands are a bit delayed but they do work!');
        message.channel.send(helpEmbed)
    }
}

