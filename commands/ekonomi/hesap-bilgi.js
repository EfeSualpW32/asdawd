const Discord = require('discord.js');
const ayarlar = require('../../config');
const db = require('quick.db');
const ms = require('ms')
exports.run = async (client, message, args) => {
  
let kişi = message.mentions.users.first() || message.author
let bıçak = await db.fetch(`bıçak_${message.author.id}`) || '0'
let silah = await db.fetch(`silah_${message.author.id}`) || '0'
let haydar = await db.fetch(`haydar_${message.author.id}`) || '0'
  let parapara = await db.fetch(`para_${kişi.id}`) || 0  
  /// ARKADASLAR CALMAYIN BIR CODER DERKI ÇALAN KODIR DEĞİL 
    let isim = await db.fetch(`hesapisim_${kişi.id}`) || 'Hesap Yok'

 const sa = new Discord.MessageEmbed()
 .setDescription(`Kullanıcı: ${kişi} \n Parası : ${parapara} \n Hesap Adı ${isim} \n Envanter :\n Bıçak :${bıçak}\n Silah : ${silah}\n Haydar : ${haydar}`)
 return message.channel.send(sa)
};
///HAZIRLAYANLAR Clearly_ , FORCEX.js
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'hesap'
};