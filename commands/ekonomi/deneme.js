const Discord = require("discord.js");
const db = require("quick.db");
var ayarlar = require("../../config");
const Canvas = require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
  
  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
   let parapara = await db.fetch(`para_${kllanç.id}`) || 0  
  const hesapdurumu = await db.fetch(`hesapdurumcodare-${kllanç.id}`);
  const hesapismi = await db.fetch(`${kllanç.id}`);

  if (!hesapdurumu) {
    if (args[0])
      return message.reply(
        `Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`
      );
    message.reply(
      `İlk olarak hesap oluşturmalısın. ${prefix}hesap-oluştur <Hesap İsmi>`
    );
  } else {
    if (hesapdurumu) {
      if (!hesapismi) {
        const embedczdn = new Discord.MessageEmbed()
          .setColor(process.env.renk)
          .setDescription(
            `Hesap İsmi: ${client.ekoayarlar.isimsiz}\n Bakiye: **${parapara}**`
          );
        message.channel.send(embedczdn);
      } else {
        if (hesapdurumu) {
          if (hesapismi) {
           
            const { createCanvas, loadImage } = require("canvas");
            const canvas = createCanvas(1092, 678);
            const ctx = canvas.getContext("2d");

            const background = await Canvas.loadImage(
              "https://cdn.discordapp.com/attachments/611466015582322700/668155571492356117/woxecredit.png"
            );
            ctx.drawImage(background , 0 ,0 , canvas.width , canvas.height);
            
            const avatar = await Canvas.loadImage(message.author.displayAvatarURL())
            ctx.drawImage(avatar , 500 , 200 , 250 , 250)
            
            ctx.font = '60px sans-serif';
            ctx.fillStyle = "BLACK";
            ctx.fillText(`${message.author.id}` , canvas.width / 5, 550 )
            
            ctx.font = '60px sans-serif';
            ctx.fillStyle = "BLACK";
            ctx.fillText(`Para: ${parapara}` , canvas.width / 3.25, 650 )
            
            const attachment = new Discord.MessageAttachment(
              canvas.toBuffer(),
              "Hoşgeldin.png"
            );
            
            message.channel.send(attachment)
          }
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  katagori: "Ekonomi"
};
exports.help = {
  name: "cüzdan",
  description: "Bakiyenizi gösterir.",
  usage: "cüzdan <@kullanıcı>"
};