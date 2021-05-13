module.exports = {
    name: 'seek',
    execute(client, command, message, args, Discord){
        client.distube.seek(message, Number(args[0]));
        message.react(
            '⏩'
        )
    }
}