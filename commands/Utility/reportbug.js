module.exports = {
    name: 'reportbug',
    aliases: ['report', 'support'],
    description: "report bug",
    execute(client, command, message, args, Discord) {
        const supportEmbed = new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Support Server')
            .setURL('https://discord.gg/3xRBRu4Jje')
            .setDescription('Ping the owners or make a ticket to get support!')
        message.channel.send(supportEmbed)

    }
}
