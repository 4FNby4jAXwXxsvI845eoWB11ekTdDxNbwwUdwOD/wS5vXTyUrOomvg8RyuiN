const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
client.user.setGame(`Anonymous`,"http://twitch.tv/anonymous")
});
client.login("NTE0ODQxOTgwNTg5NzAzMTg3.DtgFwQ.M9jqHJOF3lqSs0jCzZHqjTOkd9c");
