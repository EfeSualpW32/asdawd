const Discord = require("discord.js");
const db = require("quick.db");
const canvas = require('canvas');

var ayarlar = require("../../config");
const Canvas = require('canvas')
    , Font = Canvas.Font
    , path = require('path');
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
  let kişi = message.mentions.users.first() || message.author
  
let parapara = await db.fetch(`para_${kişi.id}`) || 0 

const { createCanvas, loadImage } = require('canvas');
            const canvas = Canvas.createCanvas(1092, 678);
            const ctx = canvas.getContext("2d");
var background = await loadImage("https://cdn.glitch.com/0bb90534-d183-4b5d-a865-453271102d9c%2Foooo.png?v=1632749446473");
 const avatar = await Canvas.loadImage(kişi.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 500 , 200 , 250 , 250)
            ctx.drawImage(background , 0 ,0 , canvas.width , canvas.height);
          
            
            ctx.font = '60px sans-serif';
            ctx.fillStyle = "BLACK";
            ctx.fillText(`${message.author.id}` , canvas.width / 5, 550 )
            
            ctx.font = '60px sans-serif';
            ctx.fillStyle = "BLACK";
            ctx.fillText(`Para: ${parapara}` , canvas.width / 3.25, 650 )
            
            const attachment = new Discord.MessageAttachment(
              canvas.toBuffer(),
              "ooo.jpg"
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