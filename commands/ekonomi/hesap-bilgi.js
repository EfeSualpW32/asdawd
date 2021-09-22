const Discord = require('discord.js');
const ayarlar = require('../../config');
const db = require('quick.db');
const ms = require('ms')
exports.run = async (client, message, args) => {
  
let kişi = message.mentions.users.first() || message.author
let bıçak = await db.fetch(`bıçak_${message.author.id}`) || 'yok'
let silah = await db.fetch(`silah_${message.author.id}`) || 'yok'
let haydar = await db.fetch(`haydar_${message.author.id}`) || 'yok'
let taxici = await db.fetch(`taxici_${message.author.id}`) || 'Meslek Yok'
let Dolmuşcu = await db.fetch(`dolmuşcu_${message.author.id}`) || 'Meslek Yok'
let aşçı = await db.fetch(`aşçı_${message.author.id}`) || 'Meslek Yok'
let kuyumcu = await db.fetch(`kuyumcu_${message.author.id}`) || 'Meslek Yok'


  let parapara = await db.fetch(`para_${kişi.id}`) || 0  
    let isim = await db.fetch(`hesapisim_${kişi.id}`) || 'Hesap Yok'

 const sa = new Discord.MessageEmbed()
 .setDescription(`Kullanıcı: ${kişi} \n Parası : ${parapara} \n Hesap Adı ${isim}\n **Envanter ↓**\n Bıçak :${bıçak}\n Silah : ${silah}\n Haydar : ${haydar}\n\n **Meslekler**↓\n →\`${taxici}\`\n→\`${Dolmuşcu}\`\n→\`${aşçı}\`\n→\`${kuyumcu}\``)
 return message.channel.send(sa)
};

exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'hesap'
};