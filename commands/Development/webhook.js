const { WebhookClient } = require('discord.js')

module.exports = {
    name: 'webhook',
    async execute(client, command, message, args, Discord){

        const wc = new WebhookClient('857586312965783592', 'HsHfQMQUDokdjN5iUcSiyZNaxCxOCZvWk5_4uGznjNU-k-Jcf6xw9hHNI1GKRVv7nu22')

        wc.send(args.join(" "))
    }
}