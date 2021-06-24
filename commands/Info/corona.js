const Discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports = {
    name: 'corona',
    aliases: ['covid'],
    description: 'corona check',
    async execute(client, command, message, args, Discord) {
        if (!args.length) {
            return message.channel.send("> Please give the name of country")
        }

        if (args.join(" ") === "all") {
            const corona = await track.all() //it will give global cases

            const coronaembed = new Discord.MessageEmbed()
                .setTitle("Global Cases")
                .setColor("#defafe")
                .setDescription("Sometimes cases number may differ from small amount.")
                .addField("Total Cases", corona.cases, true)
                .addField("Total Deaths", corona.deaths, true)
                .addField("Total Recovered", corona.recovered, true)
                .addField("Today's Cases", corona.todayCases, true)
                .addField("Today's Deaths", corona.todayDeaths, true)
                .addField("Active Cases", corona.active, true);

            return message.channel.send(coronaembed)



        } else {
            const corona = await track.countries(args.join(" ")) //change it to countries

            const poopembed = new Discord.MessageEmbed()
                .setTitle(`${corona.country}`)
                .setColor("#defafe")
                .setDescription("Sometimes cases number may differ from small amount.")
                .addField("Total Cases", corona.cases, true)
                .addField("Total Deaths", corona.deaths, true)
                .addField("Total Recovered", corona.recovered, true)
                .addField("Today's Cases", corona.todayCases, true)
                .addField("Today's Deaths", corona.todayDeaths, true)
                .addField("Active Cases", corona.active, true);

            return message.channel.send(poopembed)


        }
    }
}
