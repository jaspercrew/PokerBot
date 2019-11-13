const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", message => {
    function send(msgText) {
        message.client.channels.get(message.channel.id).send(msgText);
    }

    if (message.content === "ping") {
        send("Pong!");
    }
    else if (message.content === "whoami") {
        send("You are <@" + message.author.id.toString() + ">!");
    }
});

client.login(process.env.BOT_TOKEN).then();