module.exports = {
    name: 'hug',
    async execute(client, command, message, args, Discord){
        let gifs = [
            "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif",
            "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
            "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const embed = new Discord.MessageEmbed()
        embed.setColor('RANDOM')
        embed.setImage(pick)

        if(args[0]){
            let user = message.mentions.members.first();
            embed.setTitle(`${message.author.username} hugs ${client.users.get(user.id).username}!`)
        } else {
            embed.setTitle(`${message.author.username} wants a hug!`)
        }
    message.channel.send(embed);
    message.react('✅');
    
    }
}
