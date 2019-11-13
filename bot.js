const Discord = require("discord.js");
const client = new Discord.Client();
const token = "aAGDj4PBsuQ1ot0yAvSLheosE60xZV7N";

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", message => {
    function send(msg) {
        message.reply(msg).then();
    }

    if (message.content === "ping") {
        send("Pong!");
    }
    else if (message.content === "whoami") {
        send("You are <@" + message.author.id.toString() + ">!")
    }
});

client.login(token).then();