const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db')

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 if(db.fetch(`kuyumcu_${message.author.id}`) == undefined) {var baltavar = "0"}
    const engin = new Discord.MessageEmbed()
    .setTitle('Meslek yok!')
    .setDescription(`Mesleği Yapabilmek İçin Parayla Marketten Diploma Almalısın !`)
    if(db.fetch(`kuyumcu_${message.author.id}`) == undefined) return message.channel.send(engin)
  
 var espriler = ["2800",'2999','3100','3300','2200','3000'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

 

      

    {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(new Discord.MessageEmbed().setDescription(`💰 Kuyumucu Mesleğinden ${espri}<:tl:891668420066672650> Para Çıktı`).setColor("#36393f"))
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ["kuyumcu-çalış"],
  permLevel: 0
};

exports.help = {
  name: 'kuyumcu'
};