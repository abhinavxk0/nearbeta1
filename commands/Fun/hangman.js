const { hangman } = require('reconlx')
const { execute } = require('../Utility/help')

module.exports = {
    name: 'hangman',
    description: 'hangman game',
    async execute(client, command, message, args, Discord){
        message.channel.send(
            'Please wait for the reactions to load!'
        )

        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Please specify a channel!')
        const word = args.slice(1).join(" ")
        if(!word) return message.channel.send('Please specify a word to guess.')

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })
        hang.start();
    
    message.delete()
    }
}        