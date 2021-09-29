const Discord = require('discord.js');
const ayarlar = require('../../config');
const db = require('quick.db');
const ms = require('ms')
const Canvas = require('canvas')
    , Font = Canvas.Font
    , path = require('path');
exports.run = async (client, message, args) => {
let kişi = message.mentions.members.first() 
if (!kişi) return message.reply('Kişi Belirt')

  let parası = await db.fetch(`para_${message.author.id}`) 
  let hesap =  await db.fetch(`hesap-${message.guild.id}`)
  
  if (kişi.bot) return message.reply('Botlar Para Alamaz?')
    if (kişi.id === message.author.id) return message.reply('Kendine Para Gönderemezssin')

let paragönderme = args.slice(1).join(' ')

if (!paragönderme) return message.reply('Miktar Belirt')
  
let parapara = await db.fetch(`para_${kişi.id}`) || 0 

  if (isNaN(paragönderme)) return message.reply('Para Miktarını Nası Sayısız Yazıcaksın?')
  
  if (parası < paragönderme) return message.reply('Paradan Büyük Miktar Gönderemezssin')
  db.add(`para_${kişi.id}`, paragönderme)
  db.add(`para_${message.author.id}`, -paragönderme)

  const { createCanvas, loadImage } = require('canvas');
            const canvas = Canvas.createCanvas(1092, 678);
            const ctx = canvas.getContext("2d");
var background = await loadImage("https://cdn.glitch.com/0bb90534-d183-4b5d-a865-453271102d9c%2Fawdawd.png?v=1632913663132");
            ctx.drawImage(background , 0 ,0 , canvas.width , canvas.height);

            ctx.font = '20px sans-serif';
            ctx.fillStyle = "BLACK";
            ctx.fillText(`${kişi.user.tag} Gönderilen Miktar ${paragönderme}` , canvas.width / 20, 310 )
            ctx.font = '20px sans-serif';
            ctx.fillStyle = "BLACK";
            ctx.fillText(`${kişi.user.tag} Kişisinin Toplam ${parapara} TL Parası Var` , canvas.width / 20, 340 )
            
            ctx.font = '25px sans-serif';
            ctx.fillStyle = "BLACK";
            ctx.fillText(`Parandan Düşülen Mİktar: ${paragönderme}` , canvas.width / 20, 385 )
            
            const attachment = new Discord.MessageAttachment(
              canvas.toBuffer(),
              "atm.jpg"
              
            );
            message.channel.send(attachment)

};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {

  name: 'test'
};