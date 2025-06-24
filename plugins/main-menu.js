const { cmd, commands } = require("../command");
const config = require("../config");
const os = require("os");
const fs = require("fs");
const path = require("path");

cmd({
  pattern: "menu",
  alias: ["help", "allmenu"],
  desc: "Show all available commands",
  category: "main",
  react: "📜",
  filename: __filename
}, async (conn, mek, m, { from, reply, pushname }) => {
  try {
    const categories = {};

    for (const command of commands) {
      const category = command.category || "other";
      if (!categories[category]) categories[category] = [];
      categories[category].push(command.pattern);
    }

    // Date and Time
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-TZ', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const currentDate = now.toLocaleDateString('sw-TZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // RAM Info
    const usedRAM = ((os.totalmem() - os.freemem()) / (1024 * 1024)).toFixed(1);
    const totalRAM = (os.totalmem() / (1024 * 1024)).toFixed(1);

    const mode = config.MODE || 'Public';
    const totalCommands = commands.length;

    // Beautiful Header
    const menuHeader = `
╭━━━〔 🔰 *𝐁.𝐌.𝐁-𝐓𝐄𝐂𝐇 MENU* 🔰 〕━━━╮
┃ 👤 𝗨𝘀𝗲𝗿: *${pushname}*
┃ ⚙️ 𝗠𝗼𝗱𝗲: *${mode.toUpperCase()}*
┃ 📅 𝗗𝗮𝘁𝗲: *${currentDate}*
┃ ⏰ 𝗧𝗶𝗺𝗲: *${currentTime}* (EAT)
┃ 💾 𝗥𝗔𝗠: *${usedRAM}MB / ${totalRAM}MB*
┃ 📦 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀: *${totalCommands}*
┃ 👑 𝗖𝗿𝗲𝗮𝘁𝗼𝗿: *𝙱.𝙼.𝙱-𝚇𝙼𝙳*
┃ ✅ 𝗦𝘁𝗮𝘁𝘂𝘀: *ONLINE*
╰━━━━━━━━━━━━━━━━━━━━━━━━━╯\n\n`;

    // Menu body
    let menuBody = "";

    for (const [cat, cmds] of Object.entries(categories)) {
      menuBody += `╭━━〔 *${cat.toUpperCase()}* 〕━━┈⊷\n`;
      cmds.forEach(cmd => {
        menuBody += `┃◈┃ ${config.PREFIX}${cmd}\n`;
      });
      menuBody += `╰━━━━━━━━━━━━━━⊷\n\n`;
    }

    const menuText = menuHeader + menuBody + `_Powered by B.M.B-XMD_`;

    // Random image from /scs
    const imageFolder = path.join(__dirname, "../scs");
    const images = fs.readdirSync(imageFolder).filter(f => /^menu\d+\.jpg$/i.test(f));
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imagePath = path.join(imageFolder, randomImage);

    // Send menu image + text
    await conn.sendMessage(from, {
      image: { url: imagePath },
      caption: menuText,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363382023564830@newsletter",
          newsletterName: "𝙱.𝙼.𝙱-𝚇𝙼𝙳"
        }
      }
    }, { quoted: mek });

    // Send background music
    await conn.sendMessage(from, {
      audio: { url: "https://files.catbox.moe/gagjb6.mp3" },
      mimetype: "audio/mp4",
      ptt: true
    }, { quoted: mek });

  } catch (e) {
    console.error("❌ Menu Error:", e);
    reply("❌ Failed to display the menu. Please try again.");
  }
});
