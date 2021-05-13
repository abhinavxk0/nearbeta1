module.exports = {
    name: 'jump',
    execute(client, command, message, args, Discord){
        client.distube.jump(message, parseInt(args[0]))
        try {message.channel.send(`Jumped to ${args[0]} song!`)
    } catch(err){
        message.channel.send("Invalid song number." + err)
    }
    }
}