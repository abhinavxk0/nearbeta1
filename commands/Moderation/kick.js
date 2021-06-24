module.exports = {
    name: 'kick',
    cooldown: 10,
    description: 'kicks ppl',
    async execute(client, command, message, args, Discord) {
        const target = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args(0));
        let reason = args.slice(1).join(' ') || 'No specified reason.'

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription("You don't have the `KICK_MEMBERS` permission.")
        )
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription('> I need the `KICK_MEMBERS` permission!')
        )
        if (target.kickable) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#9a0000')
                .setDescription("The target is not kick-abale.")
        );

        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick( {reason} );
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#defafe')
                    .setDescription(`${target} has been kicked.\nReason: ${reason}`)
                    .setFooter(`Kicked by ${message.author.username}`)
            );
        } else {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#9a0000')
                    .setDescription("There was an error performing this task.")
            );
        }
    }
}