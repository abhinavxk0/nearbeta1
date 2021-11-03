module.exports = {
    name: 'report',
    aliases: ['rep'],
    async execute(client, command, message, args, Discord) {
        const report = args.join('');
        const xavier = await client.users.cache.get('307777831625293825')
        const user = message.mentions.users.first() || message.author

        const repembed = new Discord.MessageEmbed()
            .setColor('#defafe')
            .setAuthor(message.author.tag, user.displayAvatarURL({ size: 4096, dynamic: true }))
            .setDescription(report)

        xavier.send(repembed)
    }
}