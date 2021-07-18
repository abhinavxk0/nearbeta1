module.exports = {
    name: 'reply',
    async execute(client, command, message, args, Discord){
        message.lineReply('test')
        message.lineReplyNoMention('test 1')
    }
}
