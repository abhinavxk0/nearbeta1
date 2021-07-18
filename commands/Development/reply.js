module.exports = {
    name: 'reply',
    async execute(client, command, message, args, Discord){
        message.linereply('test')
        message.lineReplyNoMention('test 1')
    }
}
