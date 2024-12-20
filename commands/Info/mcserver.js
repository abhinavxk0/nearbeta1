const util = require('minecraft-server-util');
const Discord = require('discord.js');

module.exports = {
    name: 'mcserver',
    aliases: ["mccheck"],
    description: 'get information about a minecraft server',
    execute(client, command, message, args, Discord) {
        if (!args[0]) return message.channel.send('> Please enter a minecraft server ip');
        if (!args[1]) return message.channel.send('> Please enter a minecraft server port');

        util.status(args[0], { port: parseInt(args[1]) }).then((response) => {
            const mcembed = new Discord.MessageEmbed()
                .setColor('#defafe')
                .setAuthor('Minecraft Server', 'https://toppng.com/public/uploads/thumbnail/block-of-grass-from-the-game-minecraft-minecraft-grass-block-vector-11562868488whfdyakzjr.png')
                .addFields(
                    { name: '**Server IP**', value: response.host, inline: true },
                    { name: '**Online Players**', value: response.onlinePlayers, inline: true  },
                    { name: '**Max Players**', value: response.maxPlayers, inline: true  },
                    { name: '**Version**', value: response.version, inline: true  }
                )
                .setFooter('Have an amazing day ahead!');

            message.channel.send(mcembed);
        })
            .catch((error) => {
                message.channel.send('> There was an error finding this server');
                throw error;
            })
    }
}