const { cmd, commands } = require("../command");
const config = require("../config");
const os = require("os");

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

    let menuText = `╭━━〔 *B.M.B-XMD MENU* 〕━━┈⊷
┃ 🤖 Hello *${pushname}*
┃ 📆 ${new Date().toLocaleString()}
┃ 💻 Commands Loaded: *${commands.length}*
╰━━━━━━━━━━━━━━━━━━━⊷\n\n`;

    for (const [cat, cmds] of Object.entries(categories)) {
      menuText += `╭━━〔 *${cat.toUpperCase()}* 〕━━┈⊷\n`;
      cmds.forEach(cmd => {
        menuText += `┃◈ • ${config.PREFIX}${cmd}\n`;
      });
      menuText += `╰━━━━━━━━━━━━━━⊷\n\n`;
    }

    menuText += `_Powered by B.M.B-XMD_`;

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
    console.error(e);
    reply("❌ Failed to display menu.");
  }
});
