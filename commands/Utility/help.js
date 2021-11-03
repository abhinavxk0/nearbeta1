const Pagination = require('discord.js-pagination');

module.exports = {
    name: 'help',
    async execute(client, command, message, args, Discord){
        const pageMain = new Discord.MessageEmbed()
            .setTitle('Help Command')
            .setColor('#defafe')
            .setThumbnail(client.user.displayAvatarURL({ size: 4096, dynamic: true }))
            .setDescription(
                `The prefix for ${client.user} is \`n!\`\nUse \`⏩\` and \`⏮️\` to flip through all the commands!\n
            **[Invite NearBeta](https://discord.com/oauth2/authorize?client_id=822424076491554827&scope=bot&permissions=8)**
            \n\`⏮️\`: **Previous** _(null)_ \n\`⏩\`: **Next** _(Moderation CMDS)_
            `
            )
        
        const pageOne = new Discord.MessageEmbed()
            .setAuthor('Moderation Commands')
            .setColor('#defafe')
            .setDescription(
                `
                \`ban\`, \`hackban\`, \`unban\`, \`kick\`, \`nick\`, \`resetnick\`, \`clear\`, \`drag\`
                \n\`⏮️\`: **Previous** _(Main Page)_ \n\`⏩\`: **Next** _(Music CMDS)_
                `
            )
        const pageTwo = new Discord.MessageEmbed()
            .setAuthor('Music Commands')
            .setColor('#defafe')
            .setDescription(
                `
                \`play\`, \`skip\`, \`stop\`, \`queue\`, \`pause\`, \`resume\`, \`loop\`, \`shuffle\`, \`volume\`, \`jump\`, \`autoplay\`
                \n\`⏮️\`: **Previous** _(Moderation CMDS)_ \n\`⏩\`: **Next** _(Fun CMDS)_
                `
            )
        const pageThree = new Discord.MessageEmbed()
            .setAuthor('Fun Commands')
            .setColor('#defafe')
            .setDescription(
                `
                \`hug\`, \`kiss\`, \`pat\`, \`8ball\`, \`afk\`, \`crackrate\`, \`dankmeme\`, \`drake\`, \`iosnotif\`, \`simprate\`, \`wholesomememe\`
                \n\`⏮️\`: **Previous** _(Music CMDS)_ \n\`⏩\`: **Next** _(Info CMDS)_
                `
            )
        const pageFour = new Discord.MessageEmbed()
            .setAuthor('Info Commands')
            .setColor('#defafe')
            .setDescription(
                `
                \`anime\`, \`avatar\`, \`color\`, \`corona\`, \`mcserver\`, \`membercount\`, \`role-info\`, \`serverinfo\`, \`spotify\`, \`whois\`
                \n\`⏮️\`: **Previous** _(Fun CMDS)_ \n\`⏩\`: **Next** _(Utility CMDS)_
                `
            )
        const pageFive = new Discord.MessageEmbed()
            .setAuthor('Utility Commands')
            .setColor('#defafe')
            .setDescription(
                `
                \`embed\`, \`help\`, \`invite\`, \`ping\`, \`servers\`, \`snipe\`, \`steal\`, \`enlarge\`, \`uptime\`, \`simprate\`, \`wholesomememe\`, \`youtube-s\`
                \n\`⏮️\`: **Previous** _(Info CMDS)_ \n\`⏩\`: **Next** _(null)_
                `
            )
        
        const pages = [
            pageMain,
            pageOne,
            pageTwo,
            pageThree,
            pageFour,
            pageFive
        ]
        const emojis = [
            "⏮️", "⏩"
        ]
        const timeout = '100000'

        Pagination(message, pages, emojis, timeout)
    }
}