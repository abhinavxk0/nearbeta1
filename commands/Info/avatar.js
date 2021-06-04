const Discord = require("discord.js");

module.exports = {
    name: 'avatar',
    category: "info",
    aliases: ['av', 'pfp'],
    permissions: ["SEND_MESSAGES"],
    description: "Sends user's avatar!",
    async execute(client, command, message, args, Discord) {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user = message.author;
        }
        let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });

        const avatarEmbed = new Discord.MessageEmbed()
            .setTitle('Avatar')
            .setDescription(`[Avatar URL](${avatar})`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
            .setColor('#d81b60')
            .setImage(avatar);

        return message.channel.send(avatarEmbed);
    }
}
