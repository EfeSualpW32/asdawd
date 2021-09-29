const Discord = require("discord.js");
const ayarlar = require("../config.json");
const db = require("quick.db");
const talkedRecently = new Set();

module.exports = message => {
      
  let client = message.client;
  if(!message.guild){
    var prefix = ayarlar.prefix 
  } else {
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.fetch(`prefix_${message.guild.id}`);
  }

  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix;
  }
  }
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  if(db.has(`bakım_${client.user.id}`)){
    if(message.author.id !== "852641223947845743") return message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#36393f")
      .setAuthor(`${client.user.username} Bakım 👨‍🔬`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle("Botumuz Kısa Süreliğine Bakıma Alınmıştır")
      .setDescription("||`Lütfen Daha Sonra Tekrar Deneyiniz.` <a:ttnet:764635922917621791> || <a:YanpSnennleGif:814802754672656404> \n\n**Daha Fazla Bilgi Almak İçin :** [EFDA BOT.ml](https://www.efdabot.ml) |`www.efdabot.ml`|\n\n========>| **Destek Alabilirsiniz** |<========")
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )
  }
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.MessageEmbed()
                .setTitle('<a:YanpSnennleGif:814802754672656404>')
                .setImage("https://s3.gifyu.com/images/ezgif.com-gif-maker-5e6edee781c3863de.gif")
					.setDescription(`**Bu komutu kullanabilmek için** \`Mesajları Yönet\` **Yetkisine sahip olmalısın!**`)
          .setColor("#36393f")
				message.channel.send({embed})
				return
			}
		}
    		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
                .setTitle('<a:YanpSnennleGif:814802754672656404>')
                .setImage("https://s3.gifyu.com/images/ezgif.com-gif-maker-4a590d188c543ba90.gif")
					.setDescription(`**Bu komutu kullanabilmek için** \`Üyeleri At\` **Yetkisine sahip olmalısın!**`)
					.setColor("#36393f")
				message.channel.send({embed})
				return
			}
		}
       if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
                .setTitle('<a:YanpSnennleGif:814802754672656404>')
                .setImage("https://s3.gifyu.com/images/ezgif.com-gif-maker-3727dead2437c3c6e.gif")
					.setDescription(`**Bu komutu kullanabilmek için** \`Üyeleri Yasakla\` **Yetkisine sahip olmalısın!**`)
					.setColor("#36393f")
				message.channel.send({embed})
				return
			}
		}
    	if (cmd.conf.permLevel === 5) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.MessageEmbed()
                .setTitle('<a:YanpSnennleGif:814802754672656404>')
                .setImage("https://s3.gifyu.com/images/ezgif.com-gif-maker-22aa84dde360ef97b.gif")
					.setDescription(`**Bu komutu kullanabilmek için** \`Yönetici\` **Yetkisine sahip olmalısın!**`)
					.setColor("#36393f")
				message.channel.send({embed})
				return
			}
		}

		if (cmd.conf.permLevel === 4) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
                .setTitle('<a:YanpSnennleGif:814802754672656404>')
					.setDescription(`Bu komutu sadece **Sahibim** kullanabilir!`)
					.setColor("#36393f")
				message.channel.send({embed})
				return
			}
		}
 
		
    if (perms < cmd.conf.permLevel) return;
    if (db.fetch(`karalıst_${message.author.id}`)) return message.channel.send('Benim kara listemde bulunuyorsun!')
    cmd.run(client, message, params, perms);
    
     }

  if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
      if (command == "") return;
      message.reply(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setTitle("UYARI <a:YanpSnennleGif:814802754672656404>")
          .setDescription(
            "Sunucuda`" +
              command +
              "` adında bir komut bulunamadı Yardım İçin `yardım` a gidiniz")
      ).then(x => {x.delete({timeout: 3000})});
      
    }
    
 
  }


};
