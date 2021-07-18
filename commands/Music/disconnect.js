module.exports = {
    name: 'disconnect',
    aliases: ['dc'],
    async execute(client, command, message, args, Discord){
        
        let queue = client.distube.getQueue(message);
        queue.connection.disconnect()

    }
}