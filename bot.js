const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("540383693060177927")
setInterval(function() {
channel.send(`oihhhhhhhhhhhhhhhhhwadaowidawdawodhaowidhawidhaowdhaowdhaowdhawdahwodhtyhtyhtyhtyhtyhtyhthythtyhtyhthythytyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
