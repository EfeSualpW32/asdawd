const Discord = require('discord.js');

const ayarlar = require('../../config');

const db = require('quick.db')

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 var espriler = ["30","50","100","300","200","220","140","110","112","155","120","444"];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

 

      

    {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(new Discord.MessageEmbed().setDescription(`Medine De Dilendik ${espri}<:tl:891668420066672650>  Para Çıktı`).setColor("#36393f"));
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ['medine-dilencisi','dilen'],
  permLevel: 0
};

exports.help = {
  name: 'dilen'
};