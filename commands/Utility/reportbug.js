module.exports = {
    name: 'reportbug',
    aliases: ['report', 'support'],
    description: "report bug",
    execute(client, command, message, args, Discord) {
        const supportEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Support Server')
        .setURL('https://discord.gg/hsK4XZFkds')
        .setDescription('Ping the owners or make a ticket to get support!')
    message.channel.send(supportEmbed)

    }
}
        