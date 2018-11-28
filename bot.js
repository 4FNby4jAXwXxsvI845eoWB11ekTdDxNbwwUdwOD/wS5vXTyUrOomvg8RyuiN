const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
});

client.on('ready', async() => {
var server = "514822456998101002"; //
var channel = "514822457706807312";//
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein**')
    },305);
 });

 
client.login("NTE0ODQxOTgwNTg5NzAzMTg3.DuCAEw.J9aP7eDeEV3HzwT-mxEh5SzdK68");
