const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db');

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 var espriler = ['700','60','25','200','250','5','75','1000','10','40','80','900'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

 

      

    {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(`${espri} TL 'ye Çalışıp Kazandın Helal Olsun `);
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ["çalış"],
  permLevel: 0
};

exports.help = {
  name: 'çalış'
};