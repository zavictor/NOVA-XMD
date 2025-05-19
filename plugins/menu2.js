const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "👩‍💻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭━〔♡𝐁.𝐌.𝐁-𝐗𝐌𝐃♡〕━━┈⊷
┃┃★┃╭────────────
👮BY 𝐁.𝐌.𝐁-𝐗𝐌𝐃👩‍💻

💻BMB EXTRA CMDS💻
┃★┃ .porn
┃★┃ .xvideos 
┃★┃ .tempmail 
┃★┃ .tempnumber 
┃★┃ .nexus
┃★┃ .wastalk 
┃★┃ .imgscan
┃★┃ .forward 
┃★┃ .list
┃★┃ .adultmenu
┃★┃ .mpesamenu

💻 QURAN-MENU💻
┃★┃ .surah1
┃★┃ .surah2
┃★┃ .surah3
┃★┃ .surah4
┃★┃ .surah5
┃★┃ .surah6
┃★┃ .surah7
┃★┃ .surah8
┃★┃ .surah9
┃★┃ .surah10

💻 PRAYERTIME💻
┃★┃ .Prayertime

💻AI-MENU💻
┃★┃ Fluxpro
┃★┃ .ai
┃★┃ .chatgpt2
┃★┃ .openai
┃★┃ .deepseek
┃★┃ .fluxai
┃★┃ .imagine2
┃★┃ .imagine3
┃★┃ .wallpaper
┃★┃ .image
┃★┃ .ai voice

💻 ANIME-MENU💻
┃★┃ .anime
┃★┃ .anime1
┃★┃ .anime2
┃★┃ .anime3
┃★┃ .anime4
┃★┃ .anime5
┃★┃ .garl
┃★┃ .waifu
┃★┃ .neko
┃★┃ .maid
┃★┃ .awoo
┃★┃ .animegirl
┃★┃ .animegirl1
┃★┃ .animegirl2
┃★┃ .animegirl3
┃★┃ .animegirl4
┃★┃ .animegirl5
┃★┃ .dog

💻 REACTIONS-MENU💻
┃★┃ .cry
┃★┃ .cuddle
┃★┃ .bully
┃★┃ .hug
┃★┃ .awoo
┃★┃ .lick
┃★┃ .pat
┃★┃ .smug
┃★┃ .bonk
┃★┃ .yeet
┃★┃ .blush
┃★┃ .handhold
┃★┃ .highfive
┃★┃ .nom
┃★┃ .wave
┃★┃ .smile
┃★┃ .wink
┃★┃ .happy
┃★┃ .glomp
┃★┃ .bite
┃★┃ .poke
┃★┃ .cringe
┃★┃ .dance
┃★┃ .kill
┃★┃ .slap
┃★┃ .kiss

💻 CONVERTER-MENU 💻
┃★┃ .sticker
┃★┃ .topdf
┃★┃ .gif
┃★┃ .attp
┃★┃ .tts2
┃★┃ .tts3
┃★┃ .tts
┃★┃ .trt
┃★┃ .fancy
┃★┃ .gitclone
┃★┃ .url
┃★┃ .logo
┃★┃ .fetch
┃★┃ .emoji

💻 FUN-MENU💻
┃★┃ .define
┃★┃ .emix 
┃★┃ .happy
┃★┃ .heart
┃★┃ .angry
┃★┃ .sad
┃★┃ .shy
┃★┃ .moon
┃★┃ .confused
┃★┃ .hot
┃★┃ .nikal
┃★┃ .compatibility
┃★┃ .aura
┃★┃ .roast
┃★┃ .8ball
┃★┃ .compliment
┃★┃ .lovetest
┃★┃ .joke
┃★┃ .hack

💻 DL-MENU💻
┃★┃ .capcut
┃★┃ .ringtone
┃★┃ .tiktok2
┃★┃ .tiktok
┃★┃ .tiktoksearch
┃★┃ .Instagram
┃★┃ .facebook
┃★┃ .snapchat
┃★┃ .twitter
┃★┃ .mediafire
┃★┃ .gdrive  
┃★┃ .apk
┃★┃ .gdrive
┃★┃ .likee
┃★┃ .pinterest
┃★┃ .spotifysearch
┃★┃ .yts
┃★┃ .mp4
┃★┃ .mp3
┃★┃ .video
┃★┃ .video2
→ .video5
┃★┃ .video7
┃★┃ .play
┃★┃ .play5
┃★┃ .img
┃★┃ .apk2
┃★┃ .video7
┃★┃ .porn
┃★┃ .xvideos 
┃★┃ playy 
┃★┃ play3

💻 GROUP-MENU💻
┃★┃ .admin
┃★┃ .admin1
┃★┃ .tagall
┃★┃ .tag
┃★┃ .taggp
┃★┃ .hidetag
┃★┃ .unmute
┃★┃ .unlockgc
┃★┃ .kickall
┃★┃ .kickall2
┃★┃ .out
┃★┃ .removeadmins
┃★┃ .leave
┃★┃ .join
┃★┃ .invite
┃★┃ .resetglink
┃★┃ .jid1
┃★┃ .gjid
┃★┃ .removeall
┃★┃ .remove(+2'')

💻 OTHER-MENU💻
┃★┃ .ytsearch
┃★┃ .githubstalk
┃★┃ .tiktokstalk
┃★┃ .wikipedia
┃★┃ .movie
┃★┃ .srepo
┃★┃ .screenweb
┃★┃ .weather
┃★┃ .rcolor
┃★┃ .roll
┃★┃ .coinflip
┃★┃ .time
┃★┃ .date
┃★┃ .count
┃★┃ .shapar
┃★┃ .get
┃★┃ .dev
┃★┃ .mee
┃★┃ .profile

💻 OWNER-MENU💻
┃★┃ .alive
┃★┃ .version
┃★┃ .antidelete
┃★┃ .pkpayments 
┃★┃ .vv
┃★┃ .vv2
┃★┃ .forward
┃★┃ .save
┃★┃ .env
┃★┃ .allvar
┃★┃ .pair
┃★┃ .repo
┃★┃ .sc
┃★┃ .script
┃★┃ .update
┃★┃ .menu
┃★┃ .list
┃★┃ .owner
┃★┃ .shutdown
┃★┃ .broadcast
┃★┃ .ping
┃★┃ .speed
┃★┃ .fetch
┃★┃ .report
┃★┃ .support 
┃★┃ .nexus
┃★┃ .mpesamenu
┃★┃ .setprefix 
┃★┃ .msg

╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/5ybl4p.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363382023564830@newsletter',
                        newsletterName: '💻 𝐁.𝐌.𝐁-𝐗𝐌𝐃💻
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/m0nn1v.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
                      
