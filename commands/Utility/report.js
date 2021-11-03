module.exports = {
    name: 'report',
    aliases: ['rep'],
    asyncexecute(client, command, message, args, Discord) {
        const report = args.join('');
        const xavier = await client.users.cache.get('307777831625293825')

        const repembed = new Discord.MessageEmbed()
            .setColor('#defafe')
            .setAuthor(message.author.tag, message.author.displayAvatar({ size: 4098, dynamic: true }))
            .setDescription(report)

        xavier.send(repembed)
    }
}