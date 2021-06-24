module.exports = {
    name: 'help',
    aliases: ['commands'],
    category: "info",
    description: "help command",
    execute(client, command, message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#defafe')
            .setTitle('Help Command')
            .setThumbnail('https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
            .addFields(
                { 
                    name: '・Info',
                    value: '`anime`, `avatar`, `color`, `corona`\n`mcserver`, `membercount`, `serverinfo`, `userinfo`, `youtube-s`',
                    inline: true,
                },                
                { 
                    name: '・Moderation',
                    value: '`ban`, `hackban`, `unban`, `kick`\n`kick`, `clear`, `nick`, `resetnick`',
                    inline: true,
                },
                { 
                    name: '・Fun',
                    value: '`8ball`, `dankmeme`, `simprate`, `wholesomememe`',
                    inline: true,
                },
                { 
                    name: '・Music',
                    value: '`play`, `stop`, `pause`, `resume`\n`queue`, `skip`, `repeat`, `shuffle`\n`volume`',
                    inline: true,
                },
                { 
                    name: '・Utility',
                    value: '`embed`, `invite`, `ping`, `servers`',
                    inline: true,
                },

            )
            .setFooter(`${message.author.username} have an amazing day ahead!`, message.author.displayAvatarURL({ size: 4096, dynamic: true }));
    message.channel.send(helpEmbed)
    }
}


