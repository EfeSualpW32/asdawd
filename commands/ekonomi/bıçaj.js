const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db');

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 var espriler = ["500","200","1000","1900","2003","2158","1800","3400","999","501"];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

 

      

    {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(`Silahla Vurulan Kişiden ${espri} Tl Para Çıktı`);
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