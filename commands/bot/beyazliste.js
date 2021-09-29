const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./beyazlıst.json"); 
const qdb = require('quick.db');
 
exports.run = async(client, message, args, member) => {
    if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = qdb.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
    if (!args[0]) return message.channel.send(`Merhaba eğer beyaz liste özelliğini kullanmak istiyorsanız **?beyaz-liste al** eğer kara liste özelliğini kullanmak istiyorsanız **!kara-liste al** kullanınız`) 
  if (args[0] === 'al') {
      let engin = args[1]
    if(!engin) return message.channel.send('Lütfen kara listeden çıkaracağım kişiyi yaz!')
 
      db.delete(`karaliste_${engin}`)
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Merhaba sahibim! \n <@${engin}> adlı kişiyi başarı ile karalisteden çıkardım! \n Bundan sonra beni kullanabilecek!`)
   return message.channel.send(embed)
  };
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beyazliste"],
  permLevel: 4, //Burayı bot sahibi permine ayarlayın!!!
};
 
exports.help = {
  name: 'beyaz-liste'
};