const Discord = require('discord.js');
const qdb = require('quick.db');

exports.run = async(client, msg, args) => {
var renk =('#36393f')

  if (msg.channel.type !== "text") return;
  
const limit = args[0];
  
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Yazma sınırını (süresini) kaç saniye olarak ayarlamak istediğinizi yazınız!`)
              .setColor(renk)
            msg.channel.send({embed: embed})
            return
          }
if(limit > 0) {
  var a = new Discord.MessageEmbed()
  .setDescription("Yavaş Mod Başarılı Bir Şekilde Kapatılmıştır")
  .setColor(renk)
  msg.channel.send({emded: a});
}
if (isNaN(limit)) {
  var s = new Discord.MessageEmbed()
  .setDescription("Yazma sınırını (süresini) kaç saniye olarak ayarlamak istediğinizi yazınız!")
  .setColor(renk)
  msg.channel.send({embed: s});
    return
}
  
if (limit > 21600) {
  var x = new Discord.MessageEmbed()
  .setDescription("Yazma sınırı (süresi) limiti maksimum **21600** saniye olabilir!")
  .setColor(renk)
  msg.channel.send({embed: x});
    return
}
    var e = new Discord.MessageEmbed()
    .setDescription(`Yazma sınırı (süresi) başarıyla **${limit}** saniye olarak ayarlanmıştır!`)
    .setThumbnail(`https://dummyimage.com/500x500/2f3136f/f2f2f2&text=${limit}%20Saniye`)
    .setColor(renk)
    msg.channel.send({embed: e})
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yavaş"],
  permLevel: 1
};

exports.help = {
  name: 'yavaşmod',
  description: 'İstediğiniz Odada Aralıklı Konuşma Ayarlar',
  usage: 'yavaşmod'
};