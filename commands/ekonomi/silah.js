const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db')

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 if(db.fetch(`silah_${message.author.id}`) == undefined) {var baltavar = "0"}
    const engin = new Discord.MessageEmbed()
    .setTitle('Eşya yok!')
    .setDescription(`Elinde Silah Eşyası olmadığından kullanamazsın!`)
    if(db.fetch(`silah_${message.author.id}`) == undefined) return message.channel.send(engin)
  
 var espriler = ["500","5000","400","10000","28000","40000","1000","4000"];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

 

      

    {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(`Silahla Vurulan Kişiden ${espri} Tl Para Çıktı`);
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ["silah"],
  permLevel: 0
};

exports.help = {
  name: 'vur'
};