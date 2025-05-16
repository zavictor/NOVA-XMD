const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "sailasi",
    desc: "menu the bot",
    category: "menu",
    react: "🔥",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭───────────────❖
│    〔 𝐁.𝐌.𝐁-𝐗𝐌𝐃 MENU 〕
╰───────────────❖

┌─────❖ MAIN MENU ❖
│ • Menu
│ • Dlmenu
│ • Groupmenu
│ • Funmenu
│ • Othermenu
│ • Mainmenu
│ • Ownermenu
└───────────────

┌────❖ DOWNLOAD ❖
│ • Yt Audio
│ • Video
│ • Facebook
│ • Insta
│ • Twitter
│ • Mediafire
│ • Playstore
│ • Apkpure
│ • Tiktok
│ • Joox
└───────────────

┌────❖ GROUP MENU ❖
│ • Add
│ • Kick
│ • Promote
│ • Demote
│ • Tagall
│ • Setname
│ • Setdesc
│ • Setpp
│ • Group open/close
│ • Linkgc
└───────────────

┌─────❖ FUN MENU ❖
│ • Meme
│ • Truth
│ • Dare
│ • Joke
│ • Rate
│ • Simp
│ • Ship
│ • Say
│ • Short story
└───────────────

┌────❖ OTHER MENU ❖
│ • Toimg
│ • Tovideo
│ • Tomp3
│ • Sticker
│ • Emojimix
│ • Removebg
│ • Quoted
│ • Profile
│ • Ping
└───────────────

┌────❖ OWNER MENU ❖
│ • Join
│ • Block
│ • Unblock
│ • Bcgc
│ • Bcall
│ • Setppbot
│ • Setbio
│ • Setnamebot
│ • Setexif
└───────────────

> ${config.DESCRIPTION}

╰───「 VIEW CHANNEL 」───╯
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/nxezm9.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363382023564830@newsletter',
                        newsletterName: '🔥𝐁.𝐌.𝐁-𝐗𝐌𝐃🔥',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/cm4ozo.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
