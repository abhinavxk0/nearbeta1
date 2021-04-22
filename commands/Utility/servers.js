module.exports = {
    name: 'servers',
    async execute(client, command, message, args, Discord){
        message.channel.send(`Currently in ${client. guilds. cache. size} servers!`)
    }
}