module.exports = {
    name: 'kick',
    category: "moderation",
    description: 'kicks ppl',
    async execute(client, command, message, args, Discord) {
        if(!args.length) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Kick Command')
                .setDescription(
                    `**Description:** Kicks members.\n**Usage:** -kick [user]\n**Example:** -kick @Xavier`
                )
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        )
        const target = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args(0));
        
        

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Error!')
                .setDescription('> You need the `KICK_MEMBERS` permission!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        )
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Error!')
                .setDescription('> I need the `KICK_MEMBERS` permission!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        )
        if (target.kickable) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Error!')
                .setDescription('> The target is not kickable!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        );
        if (!message.member.roles.highest < target.highest) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setTitle('Error!')
                .setDescription('> The target is higher than you in the roles hierarchy!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096'))
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#d81b60')
                    .setTitle('Successfully kicked!')
                    .setDescription(`> ${target} has been kicked from the server!`)
                    .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
            );
        } else {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#d81b60')
                    .setTitle('Error!')
                    .setDescription("> You couldn't kick that member!")
                    .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
            );
        }
    }
}