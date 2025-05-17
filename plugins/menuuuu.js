const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "simba",
    desc: "menu the bot",
    category: "menu",
    react: "🔥",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭━〔🔥𝐁.𝐌.𝐁-𝐗𝐌𝐃🔥〕━━┈⊷
╭────────────
│ Owner : *${config.OWNER_NAME}*
│ Baileys : *Multi Device*
│ Type : *NodeJs*
│ Platform : *Heroku*
│ Mode : *[${config.MODE}]*
│ Prifix : *[${config.PREFIX}]*
│ Version : *1.0.0 *
╰────────────
╰━━━━━━━━━━━━━┈⊷
╭━━〔 *Menu List* 〕━━┈⊷
╭────────────·๏
┃» voicex
┃» voiceai
┃» aivoice
┃» vai
┃» stabilityai
┃» listcmd
┃» antidelete
┃» countryinfo
┃» couplepp
┃» ownermenu
┃» othermenu
┃» lemix
┃» repo
└───────────┈⊷
┃   ╭━━〔 *Ai Menu* 〕━━┈⊷
╭───────────·๏
┃» ai
┃» gpt
┃» meta
┃» blackbox
┃» gpt4
┃» bing
┃» copilot
└───────────┈⊷
   ╭━━〔 *happiness😁* 〕━━┈⊷
╭───────────·๏
┃» sad
┃» angry
┃» heart
┃» nikal
┃» hot
┃» confused
┃» moon
┃» shy
┃» confused
└───────────┈⊷
┃  ╭━━〔 *Owner Menu* 〕━━┈⊷
╭─────────────·๏
┃» owner
┃» menu
┃» menu2
┃» listcmd
┃» allmenu
┃» repo
┃» block
┃» unblock
┃» fullpp
┃» setpp
┃» restart
┃» shutdown
┃» updatecmd
┃» alive
┃» ping 
┃» gjid
┃» jid
└───────────┈⊷
┃  ╭━━〔 *all code* 〕━━┈⊷
╭─────────────·๏
┃» roast
┃» 8ball
┃» aura
┃» lovetest
┃» emoji
┃» lovetest
┃» compliment
┃» compatibility
┃    └───────────┈⊷
┃  ╭━━〔 *BMB CODE* 〕━━┈⊷
╭───────────·๏
┃» bmbxmd
┃» xmdbmb
┃» creator
┃» payment 
┃» support 
┃» hacker
┃» porn
┃» stabilityai
┃» stablediffusion
┃» fluxai
┃» imgscan
└───────────┈⊷
┃  ╭━━〔 *Download Menu* 〕━━┈⊷
╭─────────────·๏
┃» fb
┃» mediafire
┃» tiktok
┃» twitter
┃» ig
┃» apk
┃» img
┃» mediafire
┃» gdrive
┃» play
┃» play2
┃» play3
┃» tt2
┃» play4
┃» video
┃» video2
┃» play3
┃» mp4
┃» song
┃» video2
┃» git
┃» gdrive
┃» smovie
┃» baiscope 
┃» pindl 
└───────────┈⊷
┃  ╭━━〔 *Group Menu* 〕━━┈⊷
╭─────────────·๏
┃» add
┃» newgc
┃» jid
┃» invite
┃» add
┃» removeadmin
┃» kick
┃» dismiss 
┃» demote
┃» dismiss 
┃» left
┃» leave
┃» out
┃» delete 
┃» ginfo
┃» delete 
┃» disappear on
┃» disappear off
┃» newgc
┃» allreq
┃» updategname
┃» updategdesc
┃» joinrequests
┃» senddm
┃» poll
┃» mute
┃» unmute
┃» lockgc
┃» unlockgc
┃» invite
┃» tag
┃» hidetag
┃» tagall
┃» tagadmins
┃» admin
└───────────┈⊷
┃  ╭━━〔 *Other Menu* 〕━━┈⊷
╭─────────────·๏
┃» vv
┃» vv3
┃» pair
┃» pair2
┃» fact
┃» font
┃» define
┃» news
┃» movie
┃» weather
┃» srepo
┃» insult
┃» save
┃» wikipedia
┃» gpass
┃» githubstalk
┃» yts
┃» ytv
└───────────┈⊷
┃  ╭━━〔 *logo* 〕━━┈⊷
╭─────────────·๏
┃» 3dcomic
┃» cat
┃» neonlight
┃» blackpink
┃» deadpool
┃» thor
┃» naruto
┃» pornhub
┃» sadgirl
┃» futuristic
┃» 3dpaper
┃» eraser
┃» america
┃» leaf
┃» galaxy
┃» sans
┃» clouds
┃» paint
┃» birthday
┃» typography
┃» bear
┃» valorant
┃» bulb
┃» tatoo
┃» castle
┃» frozen
┃» luxury
┃» zodiac
┃» angelwings
┃» bulb
┃» nigeria
┃» devilwings
┃» hacker
┃» boom
┃» sunset
└───────────┈⊷
┃    ╭━━〔 *set commander* 〕━━┈⊷
╭─────────────·๏
┃» setppall
┃» getbio
┃» blocklist
┃» privacy
┃» updatebio
┃» groupsprivacy
┃» getprivacy
┃» getpp
┃» getbio
┃» setppall
┃» setonline
┃» setpp
┃» setmyname
┃» privacy
┃» blocklist
┃» autotyping
┃» mode
┃» asetprefix
┃» welcome
┃» admin-events
┃» antilink
┃» always-online
┃» auto-recording
┃» auto-seen
┃» status-react
┃» read-message
┃» auto-voice
┃» anti-bad
┃» auto-sticker
┃» auto-reply
┃» auto-react
┃» status-reply
┃» antilink
┃» antilinkkick
┃» deletelink
┃» auto-react
└───────────┈⊷
┃  ╭━━〔 *Main Menu* 〕━━┈⊷
╭─────────────·๏
┃» ping
┃» live 
┃» alive
┃» runtime
┃» uptime 
┃» repo
┃» owner
┃» menu
┃» menu2
┃» restart
└───────────┈⊷
┃  ╭━━〔 *Fun Menu* 〕━━┈⊷
╭─────────────·๏
┃» insult
┃» pickup
┃» ship
┃» character
┃» hack
┃» joke
┃» hrt
┃» hpy
┃» syd
┃» anger
┃» shy
┃» kiss
┃» mon
┃» cunfuzed
┃» setpp
┃» hand
┃» nikal
┃» hold
┃» hug
┃» nikal
┃» hifi
┃» poke
└───────────┈⊷
┃  ╭━━〔 *Convert Menu* 〕━━┈⊷
╭─────────────·๏
┃» sticker
┃» sticker2
┃» sticker2img
┃» convert
┃» toptt
┃» tomp3
┃» fancy
┃» take
┃» tts
┃» trt
└───────────┈⊷
┃  ╭━━〔 *Anime Menu* 〕━━┈⊷
╭─────────────·๏
┃» fack
┃» dog
┃» awoo
┃» garl
┃» waifu
┃» neko
┃» megnumin
┃» neko
┃» maid
┃» loli
┃» animegirl
┃» animegirl
┃» animegirl1
┃» animegirl2
┃» animegirl3
┃» animegirl4
┃» animegirl5
┃» anime1
┃» anime1
┃» anime2
┃» anime3
┃» anime4
┃» anime5
┃» animenews
┃» foxgirl
┃» naruto
└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/0mm8tr.jpg` },
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
            audio: { url: 'https://files.catbox.moe/oyxet3.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

                    
