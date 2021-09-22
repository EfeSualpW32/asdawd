const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db');

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 var espriler = ["50","200","1000","1200","800","999","500","100"];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

 

      

    {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(`Dövülen Kişiden ${espri} Tl Para Çıktı`);
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