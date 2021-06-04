module.exports = {
    name: 'help',
    aliases: ['commands'],
    category: "info",
    description: "help command",
    execute(client, command, message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Help Command')
            .setThumbnail('https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
            .addFields(
                { name: '<:5727_GreenTick:839167561341992981> Utility', value: '`ping`, `reportbug`, `embed`, `updatelogs`, `invite`', inline: true},
                { name: '<:5727_GreenTick:839167561341992981> Info', value: '`anime`, `avatar`, `corona / covid`, `mcserver`\n`userinfo / whois`, `youtube`, `servericon`', inline: true},
                { name: '<:5727_GreenTick:839167561341992981> Music', value: '`play`, `stop`, `skip`, `queue`, `loop`, `resume`, `pause`, `volume`\n`shuffle`, `lyrics`', inline: true},
                { name: '<:5727_GreenTick:839167561341992981> Fun', value: '`dankmeme`, `wholesomememe`, `8ball`', inline: true},
                { name: '<:5727_GreenTick:839167561341992981> Actions', value: '`hug`, `kiss`, `pat`', inline: true},
                { name: '<:5727_GreenTick:839167561341992981>  Moderation', value: '`ban`, `unban`, `kick`, `clear`, `nickname`, `resetnickname`', inline: true},
            )
            .setFooter(`${message.author.username} have an amazing day ahead!`, message.author.displayAvatarURL({ size: 4096, dynamic: true }));
    message.channel.send(helpEmbed)
    }
}


