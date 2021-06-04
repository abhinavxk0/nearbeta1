module.exports = {
    name: 'clear',
    aliases: ['purge', 'delete'],
    description: "Clears messages!",
    async execute(client, command, message, args, Discord) {
        if(!args.length) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Clear Command')
                .setDescription(
                    `**Description:** Clears messages.\n**Usage:** -clear [amount]\n**Example:** -clear 50`
                )
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        )
        //_________________________________________EMBEDS___________________________________________________________
        const perm1Embed = new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription('> You need the `MANAGE_MESSAGES` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')

        const perm2Embed = new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription('> I need the `MANAGE_MESSAGES` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')

        const err1Embed = new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription(`> Please enter the amount of messages to be cleared!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')

        const err2Embed = new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription(`> The argument has to be a number!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')

        const err3Embed = new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setDescription(`> The argument has to be a number between 1 and 100!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')

        //__________________________________________________________________________________________________________

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(perm1Embed)
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(perm2Embed)

        if (!args[0]) return message.channel.send(err1Embed);
        if (isNaN(args[0])) return message.channel.send(err2Embed);
        if (args[0] > 100) return message.channel.send(err3Embed);
        if (args[0] < 1) return message.channel.send(err3Embed);
        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)
        });
        message.delete()

    }
}




