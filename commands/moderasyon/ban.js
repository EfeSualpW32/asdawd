const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const talkedRecently = new Set();

 if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
  let rol = db.fetch(`banrol_${message.guild.id}`);
  if (
    !message.member.roles.cache.has(rol) &&
    !message.member.hasPermission("BAN_MEMBERS")
  )
    return message.channel.send("BAN Yetkisine sahip değilsin.");
  let banlog = db.fetch(`banlog_${message.guild.id}`);
  if (message.content === '?ban') {
    message.react('814284144632397845'); // buraya istediğiniz emojinin ID'sini girin
}
  if (!banlog)
    return message.channel.send(
      "Ban log sistemi ayarlanmamış.**Ayarlamak İçin** `?ban-log #kanal`"
    );
  let user = message.mentions.users.first();
  let sebep = args.slice(1).join(" ") || "Belirtilmemiş.";
  if (!user) return message.channel.send(" ``Bir kişi etiketlemelisin.``");
  if (user.id === message.author.id)
    return message.channel.send(" ``Kendini banlayamazsın.``");
  if (user.id === client.user.id)
    return message.channel.send(" ``Botu banlayamazsın.``");
  if (user.id === message.guild.ownerID)
    return message.channel.send(" ``Sunucu sahibini banlayamazsın.``");
  if (!message.guild.member(user).bannable)
    return message.reply(
      "``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``"
    );

  message.channel
    .send(
      "<@" +
        user.id +
        "> Kişisini **" +
        sebep +
        "** Sebebiyle banlamak istediğine eminmisin ? <a:4225_ban_button:814532928863731733>"
    )
    .then(async m => {
      m.react("✅").then(r => {
        const tamam = (reaction, user) =>
          reaction.emoji.name == "✅" && user.id == message.author.id;
        const tamam2 = m.createReactionCollector(tamam);

        tamam2.on("collect", async r => {
          message.guild.members.cache.get(user.id).ban({
            reason: `${sebep}`
          });
          let embed = new Discord.MessageEmbed()
            .setColor("0x36393E")
            .setTitle("<a:4889_Banned:814581728772882443> Kişi Banlandı <a:4889_Banned:814581728772882443>")
            .addField("Yetkili", `🛡️__${message.author.tag}__🛡️`)
            .addField("Banlanan kişi", user)
            .addField("Sebep", sebep)
            .setImage(
              "https://media1.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif"
            )
            .setThumbnail(
              "https://media.giphy.com/media/Rp0U1kTu2gzrEowbJL/giphy.gif"
            );
          client.channels.cache.get(banlog).send(embed);
        });
      });
      await m.react("❌").then(r => {
        const tamam = (reaction, user) =>
          reaction.emoji.name == "❌" && user.id == message.author.id;
        const tamam2 = m.createReactionCollector(tamam);

        tamam2.on("collect", async r => {
          m.delete();
          message.channel.send("Banlama işlemi iptal edildi.");
        });
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 2
};

exports.help = {
  name: "ban"
};
