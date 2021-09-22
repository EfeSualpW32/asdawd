const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db')

const ms = require('ms')

exports.run = async (client, message, args) => {
  
  let silah = db.get(`silah_${message.author.id}` yarram)
  if yarram return message.reply('P')
  
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