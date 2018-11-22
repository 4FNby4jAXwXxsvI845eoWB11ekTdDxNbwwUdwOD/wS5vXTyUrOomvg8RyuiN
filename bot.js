const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`anonymous`,"http://twitch.tv/anonymous")
client.user.setStatus("dnd")
});



client.login("NTE0ODQxOTgwNTg5NzAzMTg3.DtgFwQ.M9jqHJOF3lqSs0jCzZHqjTOkd9c");
