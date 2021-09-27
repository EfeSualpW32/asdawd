const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { sahip, mailUsername, mailPasscode } = require("./config.json");
const AsciiTable = require("ascii-table");
const fs = require("fs");
require("./util/eventHandler.js")(client);
const qdb = require("quick.db");
let tarih = new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" });
const db = require("quick.db");
const moment = require("moment");
const Canvas = require('canvas')
/////TABLES
var commandtable = new AsciiTable("EFDA BOT KOMUT MASASI");
////
client.arez = {
  başarılı: "#66FF00",
  başarısız: "#FF0000",
  ünlem: "<a:unlem:821085126091735090>",
  ok: "<a:okee:810110613186543627>",
  hayır: "<a:hayir:821647058694832169>",
  evet: "<a:evett:821646077383540747>",
  hayırr: "<a:hayirr:811134331866578974>",
  load: "<a:loadgif:810110100126826536>",
  loading: ""
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
commandtable.setHeading("Command", "Status", "Aliases");
fs.readdirSync("./commands").forEach(dir => {
  const commandFiles = fs
    .readdirSync(`./commands/${dir}/`)
    .filter(file => file.endsWith(".js"));
  for (const file of commandFiles) {
    const komutcuklar = require(`./commands/${dir}/${file}`);
    if (komutcuklar.help.name) {
      client.commands.set(komutcuklar.help.name, komutcuklar);
      commandtable.addRow(
        komutcuklar.help.name,
        "✔️",
        komutcuklar.conf.aliases
      );
    } else {
      commandtable.addRow(komutcuklar.help.name, "❌");
      continue;
    }
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });
  }
});
console.log(commandtable.toString());
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
   if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
   if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if (message.author.id === sahip) permlvl = 4;
  return permlvl;
};
//ETİKETLENİNCE PREFİX SÖYLEME 
client.on("message", message => {
  if(!message.guild){
    var p = "?"
  } else {
  if (db.has(`prefix_${message.guild.id}`)) {
    var p = db.fetch(`prefix_${message.guild.id}`);
  } else {
    var p = "?";
  }
  }
  const embed = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setTitle(" Merhaba! Ben <a:idle:814802757776703498>EFDA BOT!")
    .addField(
      "\n Bu sunucudaki prefix'im ;",
      `<:okeys:820285379298328607> \`${p}\``
    ) //sunucuya bak knk
    .addField(
      " Sahibim İd si;",
      "<:okeys:820285379298328607> `852641223947845743`"
    ) //DUR DUR  LA DUR ADD FİELD BU SET DESCRİPTİON DEİL SET DESCRİPTİON İLE OYUN OYNA AMA ADDFİELD İLE YANLIŞ YAPMA ŞANSIN YOK BEN NİYE CAPSLE YAZIYOM AQ sunucuya geç
    .addField(" Sahibim;", "<:okeys:820285379298328607> <@!852641223947845743>")
  .addField(" Web Sitem;", "<:okeys:820285379298328607> [Burdan Gidebilirsiniz](https://www.efdabot.ml)")//TAM AGA SAKİN SİKCEKMİŞ GİBİ BAĞIRIYON ASOIDHJAOISHDJFASFO
    .setFooter(client.user.username)
    .setThumbnail("https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2Fezgif.com-gif-maker-6c3ab6491a5e480d7.gif?v=1621708715117");
  if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`)
    return message.channel.send(embed); //
});
//--\\
//AYARLAMALI OTO İSİM\\
client.on("guildMemberAdd", member => {
    if(!member.guild){
    return;
  };
  var arezreiz = qdb.fetch(`otoisim_${member.guild.id}`);

  if (!arezreiz) return;
  member.setNickname(arezreiz);
  var arezreiz = qdb.delete(`otoisim_${member.guild.id}`)
});
//--\\


//NAPİM MESAJI
client.on("message", mesaj => {
  if (mesaj.content.toLowerCase() === "napim") {
    mesaj.channel.send("birileri sert mesajlar istiyor");
  }
});
//--\\
//--\\
//--\\ 811078963555467324
//HG BB MESAJI AYARLAMALI if (db.fetch
client.on("guildMemberAdd", async member => {
    if(!member.guild){
    return;
  };
  var teyitci = qdb.fetch(`teyitci_${member.guild.id}`);
  var rol = `<@&${teyitci}>`;
  var gelen = `<@${member.id}>`;
  var rolMesaj = `${rol} Rolundekiler Senle En Kısa Zamanda İlgilenicek`;
  if (!teyitci) {
    var rol = "";
    var gelen = "";
    var rolMesaj =
      "<a:8809_nitro:814581760331481129> Sunucumuza Boost basarak özel avantajların sahibi olabilirsin!";
  }
  var kanal = qdb.fetch(`hgbbkanali_${member.guild.id}`);
  if (!kanal) return;
  var tag = qdb.fetch(`tag_${member.guild.id}`);
  var tagMesaj = `<a:3281_sharingan:814532953479708733> Ayrıca Tagımızı Alarak Bize Destek Olabilirsin "${tag}"`;
  if (!tag) {
    var tag = "";
    var tagMesaj = "";
  }
  let viruskanal = member.guild.channels.cache.get(kanal);
  let virususer = client.users.cache.get(member.id);
  let viruskullanıcı = client.users.cache.get(member.id);
  const virushesapkurulus =
    new Date().getTime() - viruskullanıcı.createdAt.getTime();
  let viruj;
  if (virushesapkurulus < 1296000000) viruj = " Güvenilir Değil!";
  if (virushesapkurulus > 1296000000) viruj = " Güvenilir!";
  const hgembed = new Discord.MessageEmbed()
    .setImage(
      "https://pa1.narvii.com/6912/d50194346960feae7915c3818978c40673af1e74r4-800-600_00.gif"
    )
    .setDescription(
      `
    
     <a:3281_sharingan:814532953479708733> Aramıza Hoşgeldin **${
       virususer.username
     }** !
  
     <a:3281_sharingan:814532953479708733> Seninle Birlikte **${
       member.guild.memberCount
     }** Kişiyiz
  
     <a:3281_sharingan:814532953479708733> ${rolMesaj}
     
     <a:3281_sharingan:814532953479708733> İsmini Ve Yaşını Yazıp Kayıt Olabilirsin.

     <a:3281_sharingan:814532953479708733> Hesabın Kuruluş Tarihi ${moment(
       member.user.createdAt
     ).format("**DD MMMM YYYY hh:mm:ss**")}
  
     <a:3281_sharingan:814532953479708733> Hesabın Güvenlik Durumu: **${viruj}**
    
     ${tagMesaj}
    
    `
    )
    .setColor("#2f3136")
    .setTitle(
      "<a:hypeshiny:820284427900944404> Aramıza Yeni Birisi Katıldı <a:hypeshiny:820284427900944404>"
    )
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true }))
    .setFooter(`${member.guild.name} Kayıt Sistemi`);
  viruskanal.send(`${rol} ${gelen}`, hgembed);
});
client.on("guildMemberRemove", async member => {
    if(!member.guild){
    return;
  };
  var gelen = `<@${member.id}>`;
  var kanal = qdb.fetch(`hgbbkanali_${member.guild.id}`);
  if (!kanal) return;
  var viruskanal = member.guild.channels.cache.get(kanal);
  let virususer = client.users.cache.get(member.id);
  let viruskullanıcı = client.users.cache.get(member.id);
  const virushesapkurulus =
    new Date().getTime() - viruskullanıcı.createdAt.getTime();
  let viruj;
  if (virushesapkurulus < 1296000000) viruj = " Güvenilir Değildi...";
  if (virushesapkurulus > 1296000000) viruj = " Güvenilirdi...";
  const hgembed = new Discord.MessageEmbed()
    .setImage("https://media.giphy.com/media/yfo9ccvoRPu8w/giphy.gif")
    .setDescription(
      `
    
      <a:3281_sharingan:814532953479708733> **${
        virususer.username
      }** Aramızdan Ayrıldı :( <a:ElSallamaGif:820592905608888362>
  
      <a:3281_sharingan:814532953479708733> Sensiz **${
        member.guild.memberCount
      }** Kişiyiz

      <a:3281_sharingan:814532953479708733> Hesabın Kuruluş Tarihi ${moment(
        member.user.createdAt
      ).format("**DD MMMM YYYY hh:mm:ss**")}
  
      <a:3281_sharingan:814532953479708733> Hesabın Güvenlik Durumu: **${viruj}**
    
    `
    )
    .setColor("#2f3136")
    .setTitle("Birisi aramızdan ayrıldı :(")
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true }))
    .setFooter(`${member.guild.name} Kayıt Sistemi`);
  viruskanal.send(hgembed);
});
//--\\ bekle geldim
//KÜFÜR ENGEL
client.on("message", async msg => {
    if(!msg.guild){
    return;
  };
  const Database = require("plasma-db");
  const db = new Database("./database.json");  
  let engin = db.fetch(`küfürengellog_${msg.guild.id}`);
  let enginn = db.fetch(`küfürengelmesaj_${msg.guild.id}`);
  let enginar = db.fetch(`küfürengel_${msg.guild.id}`);

  if (enginar === "aktif") {
    const kufurler = [
      "oç",
      "OÇ",
      "kancık",
      "amın evladı",
      "Piç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amın",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "sik",
      "yarrak",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "amq"
    ];
    if (kufurler.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();
          const embed = new Discord.MessageEmbed()
            .setTitle("Bir küfür yakaladım!")
            .setDescription(
              `<@${msg.author.id}> adlı kullanıcı küfürlü kelime kullandı! \n Kullanıcının ettiği küfür silindi!`
            );
          client.channels.cache.get(engin).send(embed);
          return msg.channel.send(`<@${msg.author.id}>, ${enginn}`);
        }
      } catch (err) {
        console.log(err);
      }
    }
  } else return;
});
//KÜFÜR ENGEL BİTİŞŞ
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//REKLAM ENGEL
client.on("message", msg => {
  if(!msg.guild){
    return;
  };
  if (!db.has(`reklam_${msg.guild.id}`)) return;
  const reklam = [
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    ".net",
    ".rf.gd",
    ".az",
    ".party",
    "discord.gg"
  ];
  if (reklam.some(word => msg.content.includes(word))) {
    try {
      if (!msg.member.hasPermission("BAN_MEMBERS")) {
        msg.delete();
        return msg
          .reply(
            "**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? !**"
          )
          .then

        
      }
    } catch (err) {
      console.log(err);
    }
  }
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//FAKE GİR ÇIK   -KATIL- dert ettiğin şeye bak aq
client.on("message", async message => {
    if(!message.guild){
    return;
  };
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  if (message.author.id === "275926652842934272") {
    if (message.content === prefix + "fgir") {
      // Buraya ne yazarsanız yazdığınız şeye göre çalışır
      client.emit(
        "guildMemberAdd",
        message.member || (await message.guild.fetchMember(message.author))
      );
    }
  } else return;
});
//FAKE GİR ÇIK  -ÇIK-
client.on("message", async message => {
    if(!message.guild){
    return;
  };
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  if (message.author.id === "275926652842934272") {
    if (message.content === prefix + "fçık") {
      // Buraya ne yazarsanız yazdığınız şeye göre çalışır
      client.emit(
        "guildMemberRemove",
        message.member || (await message.guild.fetchMember(message.author))
      );
    }
  } else return; //GG bak mesaj'ı gönderen kişinin id'si bu ise işlemi gerçekleştir eğer değilse (else) işlemi bitir (return;)
});
//--\\
//////////--------\\\\\\\\\\ ArezCK Oto Cevap Başlangıç
client.on("message", message => {
  if(!message.guild) return;
  if (db.has(`otocevap_${message.guild.id}`)) {
    if (
      message.content.toLowerCase() === "sa" ||
      message.content.toLowerCase() === "selam" ||
      message.content.toLowerCase() === "selamunaleyküm" ||
      message.content.toLowerCase() === "selamın Aleyküm" ||
      message.content.toLowerCase() === "slm" ||
      message.content.toLowerCase() === "sea" ||
      message.content.toLowerCase() === "selamlar"
    ) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription("Aleykümselam, hoşgeldin Sefalar Getirdin :kaaba: ")
      );
    }
  }
  if (!db.has(`saas_${message.guild.id}`)) return;
}); //sa-as yapanın amınakoym seninki çok gelişmiş bekle
client.on("message", message => {
  if(!message.guild){
    return;
  };
  if (db.has(`otocevap_${message.guild.id}`)) {
    if (
      message.content.toLowerCase() === "günaydın" ||
      message.content.toLowerCase() === "gn" ||
      message.content.toLowerCase() === "gunaydın" ||
      message.content.toLowerCase() === "g.n" ||
      message.content.toLowerCase() === "güno"
    ) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription("**Günaydın!** :sun_with_face: ")
      );
    }
  }
  if (!db.has(`otocevap_${message.guild.id}`)) return; //gel bi sunucuya
});

client.on("message", message => {
    if(!message.guild){
    return;
  };
  if (db.has(`otocevap_${message.guild.id}`)) {
    if (
      message.content.toLowerCase() === "iyi geceler" ||
      message.content.toLowerCase() === "ig" ||
      message.content.toLowerCase() === "good night" ||
      message.content.toLowerCase() === "i.g"
    ) {
      //burda mısın? //anladın ?   || koyman lazım   , ve demek 5 tane mesaj o yüzden atıyodu  ama || veya , yada demek anladın ?
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription(
            "**İyi Geceler** :first_quarter_moon_with_face: ,**bay bay**"
          )
      );
    }
  }
  if (!db.has(`otocevap_${message.guild.id}`)) return;
});

client.on("message", message => {
    if(!message.guild){
    return;
  };
  if (db.has(`otocevap_${message.guild.id}`)) {
    if (
      message.content.toLowerCase() === "merhaba" ||
      message.content.toLowerCase() === "merhabalar" ||
      message.content.toLowerCase() === "mrb" ||
      message.content.toLowerCase() === "merhab"
    ) {
      //burda mısın? //anladın ?   || koyman lazım   , ve demek 5 tane mesaj o yüzden atıyodu  ama || veya , yada demek anladın ?
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription("**Sanada Merhaba Hoşgeldin** 🚩")
      );
    }
  }
  if (!db.has(`otocevap_${message.guild.id}`)) return;
});
client.on("message", message => {
    if(!message.guild){
    return;
  };
  if (db.has(`otocevap_${message.guild.id}`)) {
    if (
      message.content.toLowerCase() === "napıyosun" ||
      message.content.toLowerCase() === "Napıyosunuz" ||
      message.content.toLowerCase() === "efda napıyosun" ||
      message.content.toLowerCase() === "napıyonuz"
    ) {
      //burda mısın? //anladın ?   || koyman lazım   , ve demek 5 tane mesaj o yüzden atıyodu  ama || veya , yada demek anladın ?
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription("**Siz Değerli Üyelere Hizmet Veriyorum** :comet: ")
      );
    }
  }
  if (!db.has(`otocevap_${message.guild.id}`)) return;
});
client.on("message", message => {
    if(!message.guild){
    return;
  };
  if (db.has(`otocevap_${message.guild.id}`)) {
    if (
      message.content.toLowerCase() === "gunaydın" ||
      message.content.toLowerCase() === "guno" ||
      message.content.toLowerCase() === "herkse gunaydın"
    ) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription("**Günaydın!** :sun_with_face: ")
      );
    }
  }
  if (!db.has(`otocevap_${message.guild.id}`)) return; //gel bi sunucuya
});
client.on("message", message => {
    if(!message.guild){
    return;
  };
  if (db.has(`otocevap_${message.guild.id}`)) {
    if (
      message.content.toLowerCase() === "baybay" ||
      message.content.toLowerCase() === "bb" ||
      message.content.toLowerCase() === "grş" ||
      message.content.toLowerCase() === "görüşürüz"
    ) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#36393f")
          .setDescription("**Görüşürüz,bb** :wave: ")
      );
    }
  }
  if (!db.has(`otocevap_${message.guild.id}`)) return; //gel bi sunucuya
});

////////////--------------\\\\\\\\\\\\\ ArezCK Oto Cevap Bitiş!
const canvacord = require("canvacord");
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content === "{prefix}triggered") {
    let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png"
    });
    let image = await canvacord.Canvas.trigger(avatar);
    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
    return message.channel.send(attachment);
  }
});
//-----------------------Modlog-----------------------\\
//-----------------------Modlog-----------------------\\
//-----------------------Modlog-----------------------\\
//-----------------------Modlog-----------------------\\
client.on('channelCreate', async channel => {
  if(!channel.guild) return;
  var kanalid = db.fetch(`codeminglog_${channel.guild.id}`)
  if(!kanalid) return;
  const c = channel.guild.channels.cache.get(kanalid);
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`Kanal oluşturuldu`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n► ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});

client.on('channelDelete', async channel => {
if(!channel.guild) return;
  var kanalid = db.fetch(`codeminglog_${channel.guild.id}`)
  if(!kanalid) return;
  const c = channel.guild.channels.cache.get(kanalid);
  if (!c) return;
    let embed = new Discord.MessageEmbed()
                    .addField(`Kanal silindi`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n��� ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)

    c.send(embed)
});

   client.on('channelNameUpdate', async channel => {
  if(!channel.guild) return;
  var kanalid = db.fetch(`codeminglog_${channel.guild.id}`)
  if(!kanalid) return;
  const c = channel.guild.channels.cache.get(kanalid);
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`Kanal İsmi değiştirildi`, ` Yeni İsmi: \`${channel.name}\`\n► ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});




client.on('emojiCreate', emoji => {
  if(!emoji.guild) return;
  var kanalid = db.fetch(`codeminglog_${emoji.guild.id}`)
  if(!kanalid) return;
  const c = emoji.guild.channels.cache.get(kanalid);
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji oluşturuldu`, ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\n► ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiDelete', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`codeminglog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji silindi`, ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\n► ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });


client.on('guildBanAdd', async (guild, user) => {    
  if(!guild) return;
  var kanalid = db.fetch(`codeminglog_${guild.id}`)
  if(!kanalid) return;
  const c = guild.channels.cache.get(kanalid);
  if (!c) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcı banlandı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Sebep: **${entry.reason || 'Belirtmedi'}**\n Banlayan: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    c.send(embed)
});

client.on('guildBanRemove', async (guild, user) => {    
   if(!guild) return;
  var kanalid = db.fetch(`codeminglog_${guild.id}`)
  if(!kanalid) return;
  const c = guild.channels.cache.get(kanalid);
  if (!c) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL())
                    .addField(`Kullanıcının banı açıldı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL())

    c.send(embed)
});
client.on('messageDelete', async message => {    
  if(message.author.bot) return
  const guild = message.guild
  if(!guild) return;
  var kanalid = db.fetch(`codeminglog_${guild.id}`)
  if(!kanalid) return;
  const c = guild.channels.cache.get(kanalid);
  if (!c) return;
  
    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
                    .setTitle("Mesaj silindi")                
                    .addField(`Silinen mesaj : ${message.content}`,`Kanal: ${message.channel.name}`)
                  //  .addField(`Kanal:`,`${message.channel.name}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${message.client.user.username}#${message.client.user.discriminator}`, message.client.user.avatarURL())

    c.send(embed)
});

client.on('messageUpdate', async(oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;

    const guild = oldMessage.guild
  if(!guild) return;
  var kanalid = db.fetch(`codeminglog_${guild.id}`)
  if(!kanalid) return;
  const c = guild.channels.cache.get(kanalid);
  if (!c) return;

    let embed = new Discord.MessageEmbed()
    .setTitle("Mesaj güncellendi!")
    .addField("Eski mesaj : ",`${oldMessage.content}`)
    .addField("Yeni mesaj : ",`${newMessage.content}`)
    .addField("Kanal : ",`${oldMessage.channel.name}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,`${oldMessage.client.user.avatarURL()}`)

    c.send(embed)
});

client.on('roleCreate', async (role) => {    

   const guild = role.guild
  if(!guild) return;
  var kanalid = db.fetch(`codeminglog_${guild.id}`)
  if(!kanalid) return;
  const c = guild.channels.cache.get(kanalid);
  if (!c) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
.addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL())

    c.send(embed)
});

client.on('roleDelete', async (role) => {    

   const guild = role.guild
  if(!guild) return;
  var kanalid = db.fetch(`codeminglog_${guild.id}`)
  if(!kanalid) return;
  const c = guild.channels.cache.get(kanalid);
  if (!c) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
    .addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL())

    c.send(embed)
});

//-----------------------Modlog Son-----------------------\\
//-----------------------Modlog Son-----------------------\\
//-----------------------Modlog Son-----------------------\\ 
//-----------------------Modlog Son-----------------------\\


//-----------------------AFK SİSTEMİ-----------------------\\
//-----------------------AFK SİSTEMİ-----------------------\\
//-----------------------AFK SİSTEMİ-----------------------\\
client.on('message', async message => {
  if(!message.guild){
    return;
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  let sss = await db.fetch(`prefix_${message.guild.id}`) || prefix.prefix
 
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
 
  if (message.content.includes(`<@${kullanıcı.id}>`) || message.content.includes(`<@!${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`<a:YanpSnennleGif:814802754672656404> __**${message.author.tag}**__ adlı kullanıcı artık AFK degil :x:`))
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`<a:YanpSnennleGif:814802754672656404> Kişi Afk.`).setDescription(`**AFK:** \`${kullanıcı.tag}\`\n\n**Sebep :** \`${sebep}\``))
 
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`<a:YanpSnennleGif:814802754672656404> __**${message.author.tag}**__ adlı kullanıcı artık AFK değil.`))
      db.delete(`afk_${message.author.id}`)
    }
  }
  }
);
//-----------------------AFK SİSTEMİ-SON----------------------\\
//-----------------------AFK SİSTEMİ-SON----------------------\\
//-----------------------AFK SİSTEMİ-SON----------------------\\
//-----------------------AFK SİSTEMİ-SON----------------------\\


//-----------------------RESİMLİ GİRİŞ ÇIKŞ----------------------\\
//-----------------------RESİMLİ GİRİŞ ÇIKŞ----------------------\\
//-----------------------RESİMLİ GİRİŞ ÇIKŞ----------------------\\
//-----------------------RESİMLİ GİRİŞ ÇIKŞ----------------------\\

//3f7b0028-f947-4f5a-b2a6-d90ab4c59568%2Fgiri\305%9F yaptbakım?v=1617739886620
  client.on("guildMemberAdd", async member => {
    const guild = member.guild
    if(!guild) return;
    var kanal = db.fetch(`resimligirişçıkış.${member.guild.id}`)
    if(!kanal) return;
    var kanalcık = member.guild.channels.cache.get(kanal)
    if(!kanalcık) return;
    const canvas = Canvas.createCanvas(648, 360);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('/app/assets/ggg.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 34px Arial";
    ctx.fillStyle = "#1e90ff"
    ctx.textAlign = "center"
    ctx.fillText(`${member.user.username}`, 325, 270);
    ctx.font = "bold 48px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.textAlign = "left";
    ctx.fillText(`#${member.guild.memberCount}`, 490.5, 120)
    
    ctx.beginPath();
    ctx.arc(325, 150, 75, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 250, 75, 150, 150);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'efda-giriş.png');
    kanalcık.send(`${member} sunucuya katıldı, **${guild.memberCount}** kişi olduk. Hoşgeldin **${member.user.tag}**!`,attachment)
  })
  client.on("guildMemberRemove", async member => {
    const guild = member.guild
    if(!guild) return;
    var kanal = db.fetch(`resimligirişçıkış.${member.guild.id}`)
    if(!kanal) return;
    var kanalcık = member.guild.channels.cache.get(kanal)
    if(!kanalcık) return;
    const canvas = Canvas.createCanvas(648, 360);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('/app/assets/gngngrs.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 34px Arial";
    ctx.fillStyle = "#1e90ff"
    ctx.textAlign = "center"
    ctx.fillText(`${member.user.username}`, 325, 270);
    ctx.font = "bold 48px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.textAlign = "left";
    ctx.fillText(`#${member.guild.memberCount}`, 490.5, 120)
    
    ctx.beginPath();
    ctx.arc(325, 150, 75, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 250, 75, 150, 150);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'efda-giriş.png');
    kanalcık.send(`${member.user.tag} \`(ID => [${member.id}])\` sunucudan ayrıldı, **${guild.memberCount}** kişi olduk. Görüşürüz **${member.user.username}**!`,attachment)
  })
//-----------------------RESİMLİ GİRİŞ ÇIKŞ---------SON--------\\
//-----------------------RESİMLİ GİRİŞ ÇIKŞ---------SON--------\\
//-----------------------RESİMLİ GİRİŞ ÇIKŞ---------SON--------\\
//-----------------------RESİMLİ GİRİŞ ÇIKŞ---------SON--------\\






//--------------------UYARI MAİN KISMI--------------------\\
//--------------------UYARI MAİN KISMI--------------------\\
//--------------------UYARI MAİN KISMI--------------------\\
client.on("message", message => {
  if(!message.guild){
    return;
    var rol = db.fetch(`uyaricezarol_${message.guild.id}`)
    let e = db.fetch(`uyaricezapuani_${message.author.id}`)
    
    if(e === "90"){
        message.author.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Görünüşe bakılırsa uyarı ceza puanın ${e} olmuş.\n \n Bütün ceza puanlarını sıfırladım ve belirtilen jail rolünü verdim!`))
        db.delete(`uyaricezapuani_${message.author.id}`)
        db.delete(`uyarisebep_${message.author.id}`)
        db.delete(`uyarisicil_${message.author.id}`)
        message.member.roles.add(rol)
    }
    if(e < "90") return;
    if(e > "90"){
 message.author.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Görünüşe bakılırsa uyarı ceza puanın ${e} olmuş.\n \n Bütün ceza puanlarını sıfırladım ve belirtilen jail rolünü verdim!`))
        db.delete(`uyaricezapuani_${message.author.id}`)
        db.delete(`uyarisebep_${message.author.id}`)
        db.delete(`uyarisicil_${message.author.id}`)
        message.member.roles.add(rol)
    }
}})





//--------------------UYARI MAİN KISMI----------------SON--\\
//--------------------UYARI MAİN KISMI----------------SON--\\
//--------------------UYARI MAİN KISMI----------------SON--\\

//-------------------SUNUCU SAHİBİ MSJ------------GİRİŞ------\\
client.on("guildCreate", async guild => {
    guild.owner.send(
        new Discord.MessageEmbed()
        .setColor("#36393f")
        .setTitle('Merhabalar Ben EFDA')
        .setDescription('**Beni Sunucuna Eklediğin İçin Teşekkür Ederim**\n\n **Destek Sunucuma Gelmek İstersen** **`?destek`** **Yaza bilirsin**\n\n**Komutları Görmek İçinde `?yardım` Yazman Yeterli**\n**Biz Her Zaman Daha İyisini Arzuluyoruz Sende Demekki Bizim Gibisin :)**\n\n**Botumuza Herhangi Bişi Ekletmek İstersen Yada Hata vb... Görürsen Lütfen Bizimle İrtibata Geç**'));
  });

//------------------SUNUCU SAHİBİ MESAJ SON------------------\\
//------------------CAPSLOCK ENGEL---------------------------\\
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 1) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.permissions.has("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel.send(new Discord.MessageEmbed().setColor("#36393f").setDescription(`${msg.member} Lütfen Kelimelerimize Dikkat Edelim Büyük Harf Dizilimine Dikkat Edelim`)).then(x => {x.delete({timeout: 10000})});
              
          }
        }
      }
    }
  }
});
/* /app/assets/giris.png */



//SAYAÇ MESAJ  
client.on("guildMemberAdd", member => {
var cılı = '#36393f'
var kanal = qdb.fetch(`sayackanali_${member.guild.id}`)
if(!kanal) return;
var hedef = qdb.fetch(`sayachedef_${member.guild.id}`)
if(!hedef) return;
client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor(cılı).setDescription(`<a:giri:781176533153873972> \`${member.user.tag}\` Sunucuya katıldı!, \`${hedef}\` kullanıcı olmaya \`${hedef - member.guild.memberCount}\` kişi kaldı!`))
if(hedef <= member.guild.memberCount){
  client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor(cılı).setDescription(`<a:konfeti:814802920990179359> Hedefimizi başardık! Sunucumuz \`${hedef}\` kişiye ulaştı! <a:konfeti:814802920990179359>`))
  qdb.delete(`sayackanali_${member.guild.id}`)
  qdb.delete(`sayachedef_${member.guild.id}`)
}
})
client.on("guildMemberRemove", member => {
var cılı = '#36393f'
var kanal = qdb.fetch(`sayackanali_${member.guild.id}`)
if(!kanal) return;
var hedef = qdb.fetch(`sayachedef_${member.guild.id}`)
if(!hedef) return;
client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor(cılı).setDescription(`<a:cks:885484594143567922> \`${member.user.tag}\` adlı kullanıcı sunucudan ayrıldı, \`${hedef}\` Kullanıcıya \`${hedef - member.guild.memberCount}\` kişi kaldı!`))
})

client.login(process.env.sebastian);
