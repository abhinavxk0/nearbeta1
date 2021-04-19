module.exports = {
    name: 'reportbug',
    description: "report bug",
    execute(client, command, message, args, Discord) {
        const supportEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Support Server')
        .setURL('https://discord.gg/nuF6yNaSn4')
        .setDescription('Ping the owners or make a ticket to get support!')
    message.channel.send(supportEmbed)

    }
}
        