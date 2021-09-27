const Discord = require('discord.js');
const ayarlar = require('../../config');
const db = require('quick.db');
const ms = require('ms');
const Canvas = require('canvas')
    , Font = Canvas.Font
    , path = require('path');
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
let kişi = message.mentions.users.first() || message.author
let bıçak = await db.fetch(`bıçak_${message.author.id}`) || 'yok'
let silah = await db.fetch(`silah_${message.author.id}`) || 'yok'
let haydar = await db.fetch(`haydar_${message.author.id}`) || 'yok'
let taxici = await db.fetch(`taxici_${message.author.id}`) || 'Meslek Yok'
let Dolmuşcu = await db.fetch(`dolmuşcu_${message.author.id}`) || 'Meslek Yok'
let aşçı = await db.fetch(`aşçı_${message.author.id}`) || 'Meslek Yok'
let kuyumcu = await db.fetch(`kuyumcu_${message.author.id}`) || 'Meslek Yok'
let guild = message.channel.guild

  let parapara = await db.fetch(`para_${kişi.id}`) || 0
    let isim = await db.fetch(`hesapisim_${kişi.id}`) || 'Hesap Yok'
const { createCanvas, loadImage } = require('canvas');
            const canvas = Canvas.createCanvas(1280, 920);
            const ctx = canvas.getContext("2d");
var background = await loadImage("https://cdn.glitch.com/0bb90534-d183-4b5d-a865-453271102d9c%2FASDASD.png?v=1632765725756");
            ctx.drawImage(background , 0 ,0 , canvas.width , canvas.height);
    const avatar = await Canvas.loadImage(kişi.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar , 930 , 45 , 320 , 320);
            
            ctx.font = '60px sans-serif';
            ctx.fillStyle = "#0aecfc";
            ctx.fillText(`\nBıçak:${bıçak}\nSilah:${silah}\nHaydar:${haydar}` , canvas.width / 35, 630 )
  ctx.font = '60px sans-serif';
            ctx.fillStyle = "#0aecfc";
            ctx.fillText(`${isim}` , canvas.width / 5.80, 250 )
   ctx.font = '60px sans-serif';
            ctx.fillStyle = "#0aecfc";
            ctx.fillText(`${guild.name}` , canvas.width / 3.20, 531 )
   ctx.font = '60px sans-serif';
            ctx.fillStyle = "#0aecfc";
            ctx.fillText(`${message.author.id}` , canvas.width / 5.80, 340 )
    ctx.font = '60px sans-serif';
            ctx.fillStyle = "#0aecfc";
            ctx.fillText(`\n${taxici}\n${Dolmuşcu}\n${aşçı}\n${kuyumcu}` , canvas.width / 1.43, 600 )
            
            ctx.font = '60px sans-serif';
            ctx.fillStyle = "#0aecfc";
            ctx.fillText(`${parapara}` , canvas.width / 12.11, 90 )
            
            const attachment = new Discord.MessageAttachment(
              canvas.toBuffer(),
              "ooo.jpg"
              
            );
            message.channel.send(attachment)
 
};

exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'hesap'
};

