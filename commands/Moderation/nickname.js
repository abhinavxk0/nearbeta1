module.exports = {
    name: 'nickname',
    cooldown: 10,
    aliases: ['nick', 'setnick'],
    async execute(client, command, message, args, Discord) {
        if(!args.length) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Nickname Command')
                .setDescription(
                    `**Description:** Sets a members's nickname.\n**Usage:** -nickname [user] (nickname)\n**Example:** -nickname @Xavier Noob`
                )
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        )

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription('> You need the `MANAGE_NICKNAMES` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        )
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription('> I need the `MANAGE_NICKNAMES` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        )

        const member = message.mentions.members.first() || message.member;

        if (!member) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription(`> Please specify a user!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        );

        const arguments = args.slice(1).join(" ");

        try {
            member.setNickname(arguments)
        } catch (err) {
            message.channel.send(
                new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription(`> I do not have permission to set ${args[0]}'s nickname!` + err)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
            )
            console.log(err)
        }
    }
}