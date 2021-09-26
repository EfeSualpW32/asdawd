const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db');

const ms = require('ms')

exports.run = async (client, message, args) => {
   if(db.fetch(`bıçak_${message.author.id}`) == undefined) {var baltavar = "0"}
    const engin = new Discord.MessageEmbed()
    .setTitle('Eşya yok!')
    .setDescription(`Elinde Silah Eşyası olmadığından kullanamazsın!`)
    if(db.fetch(`bıçak_${message.author.id}`) == undefined) return message.channel.send(engin)
 var espriler = ["500","200","1000","1900","2003","2158","1800","3400","999","501"];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

 

      

    {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setDescription(`Silahla Vurulan Kişiden${espri}<:tl:891668420066672650> Para Çıktı`));
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ["sapla"],
  permLevel: 0
};

exports.help = {
  name: 'bıçak'
};