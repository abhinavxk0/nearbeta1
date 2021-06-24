const { MessageEmbed } = require('discord.js');


module.exports = {
  name: '8ball',
  aliases: ['8b'],
  async execute(client, command, message, args, Discord) {

    if (!args[0]) return message.channel.send('Please ask a full question!');
    const replies = ['Yes.', 'No.', 'Hell naw.', 'Definitely.', 'Of course!', 'What kind of question is that?'];

    const result = Math.floor(Math.random() * replies.length);
    const question = args.join(' ');
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed() // create embed 
        .setAuthor('🎱 The 8 Ball says...')
        .setColor('#defafe')
        .addField('Question:', question)
        .addField('Answer:', replies[result])
        .setFooter(`Asked by ${message.author.username}`);
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`);
    }
  },
};