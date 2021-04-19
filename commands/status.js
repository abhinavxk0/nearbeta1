const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "status",
  category: "owner",
  description: "Change the bot status",
  async execute(client, command, message, args, Discord){
    //OWNER ONLY COMMAND
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("> You need to be the server owner to execute this command!")
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("Please give status message")
    }
    
 db.set(`status`, args.join(" "))
   await message.channel.send("Updated the bot status!")
    process.exit(1);}
   } 
    
    
  
