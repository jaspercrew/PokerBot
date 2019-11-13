const Discord = require("discord.js");
const client = new Discord.Client();
const token = "aAGDj4PBsuQ1ot0yAvSLheosE60xZV7N";

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", message => {
    if (message.content === "ping") {
        message.reply("pong").then();
    }
});

client.login(token).then();