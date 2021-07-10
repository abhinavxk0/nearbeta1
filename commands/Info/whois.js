const moment = require('moment')

module.exports = {
    name: 'whois',
    aliases: ['userinfo'],
    async execute(client, command, message, args, Discord) { // Variables
        const {guild, channel} = message
        const user = message.mentions.users.first() || message.author
        const member = guild.members.cache.get(user.id)

        let badgestops = {
            HOUSE_BRAVERY: "<:bravery:863264912892887090>",
            HOUSE_BRILLIANCE: "<:brilliance:863264805154193408>",
            HOUSE_BALANCE: "<:balance:863265042434490378>"
        };
        let status = {
            online: "Online",
            idle: "Idle",
            dnd: "DND",
            offline: "Offline"
        }
        let badges = user.flags.toArray().map(flag => badgestops[flag]);
        const devices = user.presence ?. clientStatus || {};
        const entries = Object.entries(devices).map((value) => `${
            value[0]
        }`)
        const description = () => {
            if (devices > 1) {
                const entries = Object.entries(devices).map((value) => value[0]);
                return `Device: ${entries}`;
            } else {
                const entries = Object.entries(devices).map(
                    (value, index) => `${
                        index + 1
                    }) ${
                        value[0]
                    }`
                ).join("\n");
                return `Devices:\n${entries}`;
            }
        };

        let colour = message.member.displayHexColor;
        let color = colour.slice(1).trim().split(/ +/g);
        const nickname = member.nickname || 'None'

        message.channel.send(new Discord.MessageEmbed().setTitle(user.tag).setThumbnail(user.displayAvatarURL({dynamic: true})).setColor('defafe').addField("__User Identity__", [`**ID**: ${
                user.id
            }`, `**Created**: ${
                moment(user.createdTimestamp).format("LLL")
            }`, `**Avatar**: [Click Here](${
                user.displayAvatarURL({dynamic: true})
            })`, `**Badges**: ${badges}`]).addField("__Presence__", [`**Devices**: ${entries}`, `**Status**: ${
                status[user.presence.status]
            }`]).addField("__Server Member Info__", [
            `**Nickname**: ${nickname}`,
                `**Role Count**: ${
                member.roles.cache.size - 1
            }`,
            `**Joined ${
                guild.name
            } on:** ${
                moment(user.joinedTimestamp).format("LLL")
            }`,
        ]))
    }
}
