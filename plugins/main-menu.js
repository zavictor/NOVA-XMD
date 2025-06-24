const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
  pattern: "menu",
  alias: ["help", "allmenu"],
  desc: "Show all bot commands",
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

    let menuText = `╭━━〔 *𝐁.𝐌.𝐁-𝐗𝐌𝐃 MENU* 〕━━┈⊷\n┃ 👤 Hello *${pushname}*\n┃ 📅 ${new Date().toLocaleString()}\n┃ ⚙ Total Commands: *${commands.length}*\n╰━━━━━━━━━━━━━━━━━━━⊷\n\n`;

    for (const [category, cmds] of Object.entries(categories)) {
      menuText += `╭━━〔 *${category.toUpperCase()}* 〕━━┈⊷\n`;
      cmds.forEach(cmd => {
        menuText += `┃◈ • ${config.PREFIX}${cmd}\n`;
      });
      menuText += `╰━━━━━━━━━━━━━━⊷\n\n`;
    }

    menuText += `> _Powered by B.M.B-XMD_\n`;

    await conn.sendMessage(from, {
      text: menuText,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363382023564830@newsletter",
          newsletterName: "𝙱.𝙼.𝙱-𝚇𝙼𝙳"
        }
      }
    }, { quoted: mek });

  } catch (e) {
    console.error("Menu Error:", e);
    reply("❌ Failed to display menu.");
  }
});
