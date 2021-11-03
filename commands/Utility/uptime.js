const moment = require('moment')

module.exports = {
    name: 'uptime',
    aliases: ['ut'],
    async execute(client, command, message, args, Discord){
        const d = moment.duration(client.uptime);
        const days = d.days() == 1 ? `${d.days()} day` : `${d.days()} days`;
        const hours = d.hours() == 1 ? `${d.hours()} hour` : `${d.hours()} hours`;
        const seconds =
          d.seconds() == 1 ? `${d.seconds()} seconds` : `${d.seconds()} seconds`;
        const minutes =
          d.minutes() == 1 ? `${d.minutes()} minutes` : `${d.minutes()} minutes`;


        message.lineReply(`Uptime: ${days}, ${hours}, ${minutes}, ${seconds}.`)
    }
}