const config = require('../config');
const { cmd, commands } = require('../command');
const os = require('os');
const { runtime } = require('../lib/functions');
const fs = require('fs');
const path = require('path');

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

        // 🕒 Muda na tarehe ya sasa
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { hour12: true });
        const date = now.toISOString().split('T')[0];
        const totalCmds = commands.length;

        // 📝 Andika menu
        let menutext = `╭━━〔 *🌐 ${config.BOT_NAME || 'B.M.B-XMD'} AUTO MENU* 〕━━┈⊷\n`;
        menutext += `┃👤 Owner: ${config.OWNER_NAME}\n`;
        menutext += `┃📟 Mode: ${config.MODE}\n`;
        menutext += `┃📚 Prefix: ${config.PREFIX}\n`;
        menutext += `┃🕒 Time: ${time}\n`;
        menutext += `┃📅 Date: ${date}\n`;
        menutext += `┃📋 Commands: ${totalCmds}\n`;
        menutext += `┃⚙️ Platform: VPS\n`;
        menutext += `┃⏱️ Runtime: ${runtime(process.uptime())}\n`;
        menutext += `╰━━━━━━━━━━━━━━━⊷\n`;

        for (const [category, cmds] of Object.entries(grouped)) {
            menutext += `\n╭━━〔 *${category}* 〕━━┈⊷\n┃◈╭─────────────·๏\n`;
            cmds.sort().forEach(cmd => {
                menutext += `┃◈┃• ${cmd}\n`;
            });
            menutext += `┃◈└────────────┈⊷\n╰──────────────┈⊷\n`;
        }

        // 📂 Path mpya ya media (kwa picha zenyewe ndani ya /media/)
        const folderPath = path.join(__dirname, '../media');
        const files = fs.readdirSync(folderPath).filter(f => /^menu\d+\.jpg$/i.test(f));
        if (files.length === 0) return reply("❌ Hakuna picha za menu (menu1.jpg hadi menu10.jpg) kwenye `media/`!");

        const randomImage = files[Math.floor(Math.random() * files.length)];
        const imagePath = path.join(folderPath, randomImage);

        await conn.sendMessage(
            from,
            {
                image: fs.readFileSync(imagePath),
                caption: menutext,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 1000,
                    isForwarded: true
                }
            },
            { quoted: mek }
        );

        // Optional: Audio ya menu
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/bmb200/BMB-DATA/raw/refs/heads/main/media/menu1.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.log("❌ ERROR:", e);
        reply(`❌ Error: ${e.message || e}`);
    }
});
