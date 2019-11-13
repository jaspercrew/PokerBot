const Discord = require("discord.js");
const client = new Discord.Client();

const COMMAND_START = "!";

const GAME_NAMES = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa",
    "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega"];

let NUM_ACTIVE_GAMES = 0;

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", message => {
    function send(msgText) {
        client.channels.get(message.channel.id).send(msgText);
    }
    function isCmd(test) {
        return message.content === COMMAND_START + test;
    }

    let guild = message.guild;
    // let channel = message.channel;
    let author = message.author;
    let authorMention = "<@" + author.id.toString() + ">";

    if (isCmd("ping"))
        send("Bong!");

    else if (isCmd("whoami"))
        send(`You are ${authorMention}! `);

    else if (isCmd("toxic"))
        send("Are you talking about <@363180361188114434>?");

    else if (isCmd("poker")) {
        let greek = GAME_NAMES[NUM_ACTIVE_GAMES];
        let letter = greek.charAt(0).toUpperCase() + greek.substring(1);
        NUM_ACTIVE_GAMES++;

        let name = `Poker Game ${letter}`;

        guild.createChannel(name, "text").then();
        guild.createRole({name: name, color: ""}).then();
    }
});

client.login(process.env.BOT_TOKEN).then();
