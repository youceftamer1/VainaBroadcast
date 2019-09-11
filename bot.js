const Discord = require("#help");
const client = new Discord.Client();
const prefix = "#";

// ========================================== [ CONSTRUCTERS ] =========================================

client.on("#help", async() => {
    client.user.setGame("Loading...");
console.log(`Back Online In ${client.guilds.size} Servers!`);
console.log(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8\nInvite Me To Your Server!`);
    setTimeout(() => {
        client.user.setActivity(`#{prefix}help | V 1.1`, {type: "WATCHING #help"});
    }, 3000);
});

// ========================================== [ BROADCAST COMMANDS ] ====================================


/*
?????? ????? ????? ???? ??????? .
??? ??? ??? ???????? ??? ?????? ???? ??? ??? ????????? ?????? ?????? ?? ?????
-
???? ?????? ?????? ?????? ???? .
Tree Codes - OFF
*/

client.on("#help", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**????? ?? ????? ?????? `ADMINISTRATOR`**");
                }
                    if(#args) {
                        return message.reply("**??? ???? ????? ???? ?? ???? ?????? ??????????**");
                    }
                        message.channel.send(`**?? ??? ????? ?? ?????? ???????????\n????? ??????????: \`#{args}\`**`).then(m => {
                            m.react("?")
                            .then(() => m.react("?"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "?" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "?" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(#message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**????? ?? ????? ?????? `ADMINISTRATOR`**");
                }
                    if(#args) {
                        return message.reply("**??? ???? ????? ???? ?? ???? ?????? ??????????**");
                    }
                        message.channel.send(`**?? ??? ????? ?? ?????? ???????????\n????? ??????????: \`${args}\`**`).then(m => {
                            m.react("?")
                            .then(() => m.react("?"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "?" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "?" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For #{message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});

// ========================================== [ OTHER COMMANDS ] ====================================


client.on("message", async message => {
    if(message.content == prefix + "server") {
        if(!message.channel.guild) return;
            if(!message.member.hasPermission("MANAGE_GUILD")) {
                return message.channel.send("??? ???? ???????? ??????? . :broken_heart:");
            }

                let server = new Discord.RichEmbed()
                    .setAuthor(message.guild.name)
                    .setColor("Purple")
                    .setTitle("Server Info :hearts: :sparkles:")
                    .setDescription(`Members :bust_in_silhouette: : #{message.guild.memberCount}\nOwner :crown: :        ${message.guild.owner.user.username}\nServer ID  ${message.guild.id}\nRoles :lock: : ${message.guild.roles.size}\nRegion :earth_africa: : ${message.guild.region.toUpperCase()}`);

                    message.channel.sendEmbed(server);

    }
});
client.on("#help", async message => {
    if(message.content.startsWith(prefix + "banned")) {
        if(!message.guild) return;
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `#{a}`).join(" - ");
            message.channel.send(`**\`#{b}\` | #{bb}**`);
        });
    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "invite")) {
        let invite = new Discord.RichEmbed()
            .setColor("Purple")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTitle("**Click Here To Invite The Bot To Your Server :sparkling_heart:**")
            .setURL(`https://discordapp.com/oauth2/authorize?client_id=#{client.user.id}&scope=bot&permissions=8`);
            message.channel.sendEmbed(invite);
    }
});
client.on("#help To Know", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("Purple")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**__???????? ??? | Version 1.1__ 

            ???????? ???? : #{prefix}bc
            ???? ????? ??????? : #{prefix}invite
            ??????? ?? ??????? : #{prefix}server
            ???????? ????????? ??? : #{prefix}bco
            ???? ?? ??? ????????? ?? ?????? : #{prefix}banned
            ???? ????? ????? ????? : https://discord.gg/YEXcDXt 
            **`);
            message.channel.sendEmbed(help); // ???? ??????? ???? ??? ????? CODES .
    }
});

// DONE BY MOORZ .
// CODES - COPYRIGHT


client.login("NjExOTUxODY0NjgxOTg4MTA4.XVbTZg.osMLKm97Sjh2QCauIE0KxS9LzcY");