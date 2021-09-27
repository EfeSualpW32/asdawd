const Discord = require("discord.js");
const db = require("quick.db");
var ayarlar = require("../../config");
const Canvas = require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
  let kişi = message.mentions.users.first() || message.author
  
let parapara = await db.fetch(`para_${kişi.id}`) || 0 

            const { createCanvas, loadImage } = require('canvas');
            var image = await loadImage("krekart.png");
            const canvas = createCanvas(1092, 678);
            const ctx = canvas.getContext("2d");

            const background = await Canvas.loadImage('/app/assets/krekart.png');
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