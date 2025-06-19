const config = require('../config');
const { cmd, commands } = require('../command');
const os = require('os');
const { runtime } = require('../lib/functions');
const axios = require('axios');
const fs = require('fs');

cmd({
    pattern: "bmb11",
    alias: ["menup"],
    desc: "Auto Generated Full Menu",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const grouped = {};

        for (const command of commands) {
            const cat = command.category?.toUpperCase() || "OTHER";
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push(command.pattern);
        }

        let menutext = `╭━━〔 *🌐 ${config.BOT_NAME || 'B.M.B-XMD'} AUTO MENU* 〕━━┈⊷\n`;
        menutext += `┃👤 *Owner:* ${config.OWNER_NAME}\n┃📟 *Mode:* ${config.MODE}\n┃📚 *Prefix:* ${config.PREFIX}\n┃⚙️ *Platform:* VPS\n┃⏱️ *Runtime:* ${runtime(process.uptime())}\n╰━━━━━━━━━━━━━━━⊷\n`;

        for (const [category, cmds] of Object.entries(grouped)) {
            menutext += `\n╭━━〔 *${category}* 〕━━┈⊷\n┃◈╭─────────────·๏\n`;
            cmds.sort().forEach(cmd => {
                menutext += `┃◈┃• ${cmd}\n`;
            });
            menutext += `┃◈└────────────┈⊷\n╰──────────────┈⊷\n`;
        }

        // ✅ Tuma video badala ya picha
        await conn.sendMessage(
            from,
            {
                video: fs.readFileSync('./media/thumb2.mp4'),
                caption: menutext,
                mimetype: 'video/mp4',
                gifPlayback: true,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 1000,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363382023564830@newsletter',
                        newsletterName: '🌐𝐁.𝐌.𝐁-𝐗𝐌𝐃🌐',
                        serverMessageId: 222
                    }
                }
            },
            { quoted: mek }
        );

        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/bmb200/BMB-DATA/raw/refs/heads/main/media/menu1.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`❌ Error:\n${e}`);
    }
});
