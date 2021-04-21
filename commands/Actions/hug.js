module.exports = {
    name: 'hug',
    async execute(client, command, message, args, Discord){
        let gifs = [
            "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif",
            "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
            "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
            "https://media.tenor.com/images/aab83bd3725feeaccb9929f8ca964db9/tenor.gif",
            "https://64.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif",
            "https://i.pinimg.com/originals/63/63/06/636306b78e9a992418f10c427a0a3b66.gif",
            "https://media.tenor.com/images/accfef6ee4cab73f9b2caf2e34ec4380/tenor.gif",
            "https://pa1.narvii.com/6110/b4d5e1e0c775f73b48a4a76afb3917b574a71c35_hq.gif",
            "https://data.whicdn.com/images/213476418/original.gif",
            "https://64.media.tumblr.com/e149a5fbabdfd6531f29bba15703bdf5/tumblr_mlzqwoeHzE1sn5lrwo1_500.gif",
            "https://i.pinimg.com/originals/e6/36/47/e636479dafb6be4d4a6c23e2c52a42bf.gif",
            "https://media1.tenor.com/images/50c0ec78664fe643ce2ba898232b2282/tenor.gif",
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const embed = new Discord.MessageEmbed()
        embed.setColor('RANDOM')
        embed.setImage(pick)

        if(args[0]){
            let user = message.mentions.members.first();
            embed.setTitle(`${message.author.username} hugs mentioned user!`)
        } else {
            embed.setTitle(`${message.author.username} wants a hug!`)
        }
    message.channel.send(embed);
    message.react('✅');
    
    }
}
