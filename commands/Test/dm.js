module.exports = {
    name: 'dm',
    execute(client, command, message, args, Discord) {
        message.author.send('SENT!')
    }
}