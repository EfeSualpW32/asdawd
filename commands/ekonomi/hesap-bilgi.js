const Discord = require('discord.js');
const ayarlar = require('../../config');
const db = require('quick.db');
const ms = require('ms');
const Canvas = require('canvas')
    , Font = Canvas.Font
    , path = require('path');
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
var kişi = message.mentions.users.first()|| message.author
var bıçak =  db.fetch(`bıçak_${kişi.id}`) || 'yok'
var silah =  db.fetch(`silah_${kişi.id}`) || 'yok'
var haydar =  db.fetch(`haydar_${kişi.id}`) || 'yok'
var taxici =  db.fetch(`taxici_${kişi.id}`) || 'Meslek Yok'
var Dolmuşcu =  db.fetch(`dolmuşcu_${kişi.id}`) || 'Meslek Yok'
var aşçı =  db.fetch(`aşçı_${kişi.id}`) || 'Meslek Yok'
var kuyumcu =  db.fetch(`kuyumcu_${kişi.id}`) || 'Meslek Yok'
var guild = message.channel.guild

  var parapara =  db.fetch(`para_${kişi.id}`) || 0
    var isim =  db.fetch(`hesapisim_${kişi.id}`) || 'Hesap Yok'
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
            ctx.fillText(`${kişi.id}` , canvas.width / 5.80, 340 )
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

