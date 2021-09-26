const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db');

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 var espriler = ['100','50','25','200','250','5','75'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

  let yavaşmod = 8.64+7, // 24 Saat

        amount = Math.floor(Math.random() * 1000) + 4000;      


    let lastDaily = await db.fetch(`günlükbea_${message.guild.id}`);

    if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {

        let timeObj = ms(yavaşmod - (Date.now() - lastDaily));





      return message.reply(`Her 24 Saate Bir Para Alabilirsin`)

      

    } else {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(new Discord.MessageEmbed().setDescription(`${espri}<:tl:891668420066672650> Kadar Parayı Kaptın!`).setColor("#36393f"));
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ["günlük"],
  permLevel: 0
};

exports.help = {
  name: 'günlük-para'
};