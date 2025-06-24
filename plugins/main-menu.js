const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const fs = require('fs');
const path = require('path');

cmd({
  pattern: "allmenu",
  alias: ["menu", "help"],
  desc: "Auto Generated Full Menu",
  category: "general",
  react: "🤖",
  filename: __filename
}, async (conn, m, { from, sender, pushname, reply }) => {
  try {
    const grouped = {};
    for (const command of commands) {
      const category = (command.category || "OTHER").toUpperCase();
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(command.pattern);
    }

    const now = new Date();
    const localTime = now.toLocaleTimeString("en-US", { hour12: true });
    const localDate = now.toISOString().split('T')[0];
    const totalCmds = commands.length;
    const caption =
      `🌐 ${config.botname || "Bot"} AUTO MENU\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `🌐 Name: ${config.ownername}\n` +
      `🌐 Owner: ${config.owner}\n` +
      `🌐 Bot: ${config.botname}\n` +
      `🕐 Time: ${localTime}\n` +
      `📅 Date: ${localDate}\n` +
      `📘 Total Commands: ${totalCmds}\n` +
      `⏱️ Runtime: ${runtime(process.uptime())}\n` +
      `━━━━━━━━━━━━━━━━━━━\n`;

    let menuText = caption;
    for (const [cat, cmds] of Object.entries(grouped)) {
      menuText += `\n──『 ${cat} 』──\n`;
      cmds.sort().forEach(cmd => {
        menuText += `➤ ${cmd}\n`;
      });
      menuText += "━━━━━━━━━━\n";
    }

    // Image selection from folder
    const imageFolder = path.join(__dirname, '../media/');
    const images = fs.readdirSync(imageFolder).filter(file => /^menu\d+\.jpg$/i.test(file));
    if (images.length === 0) return reply("🚫 Hakuna picha za menu zilizopatikana kwenye folder.");

    const selectedImage = images[Math.floor(Math.random() * images.length)];
    const imagePath = path.join(imageFolder, selectedImage);

    const msgOptions = {
      contextInfo: {
        externalAdReply: {
          title: "📡 Auto Menu",
          body: "B.M.B XMD",
          thumbnailUrl: 'https://github.com/bmb200/B.M.B-XMD/raw/main/BMB.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    };

    await conn.sendMessage(from, {
      image: fs.readFileSync(imagePath),
      caption: menuText,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true
      }
    }, msgOptions);

  } catch (e) {
    console.error("❌ ERROR:", e);
    reply("❌ Error: " + (e.message || e));
  }
});
