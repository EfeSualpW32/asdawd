const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {

  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
let reklam = await db.fetch(`reklam88_${message.guild.id}`) || '<:off:891927242886746133>'
let caps = await db.fetch(`caps_${message.guild.id}`) || '<:off:891927242886746133>'
let küfür = await db.fetch(`küfür_${message.guild.id}`) || '<:off:891927242886746133>'
let otocvp = await db.fetch(`otocvp_${message.guild.id}`) || '<:off:891927242886746133>'
let hgbb = await db.fetch(`hgbb_${message.guild.id}`) || '<:off:891927242886746133>'
let sayaçs = await db.fetch(`sayaçs_${message.guild.id}`) || '<:off:891927242886746133>'
let logs = await db.fetch(`logs_${message.guild.id}`) || '<:off:891927242886746133>'
let otoah = await db.fetch(`otorols_${message.guild.id}`) || '<:off:891927242886746133>'
let ototahg = await db.fetch(`ototags_${message.guild.id}`) || '<:off:891927242886746133>'

var page = 0;
 
let arr = [];
let emojiarr = message.guild.emojis.cache.array();
for(let i =0; Number(i + "0") < (Math.round(emojiarr.length/10)*1 +1); ++i) {
var on = emojiarr.slice(Number(i + "0"), Number(i + "0")+10)
arr.push(on.toString())
}

let embd = new Discord.MessageEmbed()
message.channel.send(embd.setDescription(arr[0]).setDescription('Ayarlar Penceresine Hoşgeldiniz Ayarlarınızı Görmek İçin Sayfaları İleri Geri Değiştiriniz')).then(async msg => {
      await msg.react("⬅️");
      await msg.react("➡️");

      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector(filter, {
        time: 120000
      });

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "⬅️":
            reaction.users.remove(user).catch(console.error);
            if (page == 0) return;
            --page

              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription(`
**Hg-Bb** (${hgbb})
**Sayaç** (${sayaçs})
**Mod Log** (${logs})
**Otorol** (${otoah})
**Oto Tag** (${ototahg})`)
            msg.edit(embd)
           break;
          case "➡️":
            if (page == arr.length) return;
            ++page
            reaction.users.remove(user).catch(console.error);
              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription(`**Reklam Engel** (${reklam})
**CapsLock Engel** (${caps})
**Küfür Engel** (${küfür})
**Oto Cevap** (${otocvp})`)
            msg.edit(embd)
          break;

        }
      });
    })
}
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: "ayarlar",
        description: "Sayfalı Yardım Menüsü -ArdaDemr",
        usage: "Sayfalı Yardım Menüsü"
      };