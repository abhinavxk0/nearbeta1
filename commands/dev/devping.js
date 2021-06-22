module.exports = {
    name: 'devping',
    execute(client, command, message, args, Discord) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setAuthor(`🏓  DevPong! ${client.ws.ping}ms`));

    }
};