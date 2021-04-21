module.exports = {
  name: '8ball',
  async execute(client, command, message, args, Discord) {
    if (!args[0]) return message.channel.send('Please ask a full question!'); 
    const replies = ['HELL YEA!', 'HELL NO!', 'NEVERRR!', 'DEFINITELYYY!!', 'sadly yep ;-;'];

    const result = Math.floor(Math.random() * replies.length); 
    const question = args.join(' '); 
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed()
        .setAuthor('🎱 The 8 Ball says...')
        .setColor('ORANGE').addField('Question:', question)
        .addField('Answer:', replies[result])
        .setFooter(`Asked by ${message.author.username}`);
      await message.channel.send(embed);
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`);
    }
  },
};