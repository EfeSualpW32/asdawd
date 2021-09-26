const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db');

const ms = require('ms')

exports.run = async (client, message, args) => {
   if(db.fetch(`haydar_${message.author.id}`) == undefined) {var baltavar = "0"}
    const engin = new Discord.MessageEmbed()
    .setTitle('Eşya yok!')
    .setDescription(`Elinde Haydar Eşyası olmadığından kullanamazsın!`)
    if(db.fetch(`haydar_${message.author.id}`) == undefined) return message.channel.send(engin)
 var espriler = ["50","200","1000","1200","800","999","500","100"];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

 

      

    {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(new Discord.MessageEmbed().setDescription(`🏏 Dövülen Kişiden ${espri}<:tl:891668420066672650> Para Çıktı`).setColor("#36393f"));
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ["haydar"],
  permLevel: 0
};

exports.help = {
  name: 'kır'
};