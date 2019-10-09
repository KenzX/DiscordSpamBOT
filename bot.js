const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("631575503354200076")
setInterval(function() {
channel.send(`Join Here : https://discord.gg/75C7nZZ`);
}, 30)
})

client.login(process.env.BOT_TOKEN);