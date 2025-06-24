const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const util = require("util");
const { getAnti, setAnti, initializeAntiDeleteSettings } = require('../data/antidel');

// Initialize AntiDelete settings
initializeAntiDeleteSettings();

cmd({
    pattern: "antidelete",
    alias: ['antidel', 'ad'],
    desc: "Sets up the Antidelete feature.",
    category: "misc",
    filename: __filename
},
async (conn, mek, m, { from, reply, q, text, isCreator }) => {
    if (!isCreator) return reply('⚠️ This command is only for the bot owner.');

    try {
        const command = q?.toLowerCase();

        switch (command) {
            case 'on':
                await setAnti('gc', false);
                await setAnti('dm', false);
                return conn.sendMessage(from, {
                    text: '🔴 _AntiDelete is now OFF for Group Chats and Direct Messages._',
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "120363382023564830@newsletter",
                            newsletterName: "𝙱.𝙼.𝙱-𝚇𝙼𝙳"
                        }
                    }
                }, { quoted: mek });

            case 'off gc':
                await setAnti('gc', false);
                return reply('❌ _AntiDelete for Group Chats is now DISABLED._');

            case 'off dm':
                await setAnti('dm', false);
                return reply('❌ _AntiDelete for Direct Messages is now DISABLED._');

            case 'set gc':
                const gcStatus = await getAnti('gc');
                await setAnti('gc', !gcStatus);
                return reply(`🔄 _AntiDelete for Group Chats is now ${!gcStatus ? 'ENABLED' : 'DISABLED'}._`);

            case 'set dm':
                const dmStatus = await getAnti('dm');
                await setAnti('dm', !dmStatus);
                return reply(`🔄 _AntiDelete for Direct Messages is now ${!dmStatus ? 'ENABLED' : 'DISABLED'}._`);

            case 'set all':
                await setAnti('gc', true);
                await setAnti('dm', true);
                return reply('✅ _AntiDelete has been ENABLED for all chats._');

            case 'status':
                const currentDmStatus = await getAnti('dm');
                const currentGcStatus = await getAnti('gc');
                return reply(`🔍 _AntiDelete Status:_\n\n*DM:* ${currentDmStatus ? '✅ ENABLED' : '❌ DISABLED'}\n*Group:* ${currentGcStatus ? '✅ ENABLED' : '❌ DISABLED'}`);

            default:
                return reply(`
-- *AntiDelete Command Guide:* --
• \`\`.antidelete on\`\` - 🔴 Turn OFF AntiDelete
• \`\`.antidelete off gc\`\` - ❌ Disable for Groups
• \`\`.antidelete off dm\`\` - ❌ Disable for DMs
• \`\`.antidelete set gc\`\` - 🔄 Toggle Group
• \`\`.antidelete set dm\`\` - 🔄 Toggle DM
• \`\`.antidelete set all\`\` - ✅ Enable All
• \`\`.antidelete status\`\` - 🔍 Check status
                `.trim());
        }
    } catch (e) {
        console.error("⚠️ Error in antidelete command:", e);
        reply("❌ Error while processing your request.");
    }
});

// Don't touch this — it’s working fine 👇
cmd({
    pattern: "vv3",
    alias: ['retrive', '🔥'],
    desc: "Fetch and resend a ViewOnce message content (image/video/audio).",
    category: "misc",
    use: '<query>',
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const quotedMessage = m.msg.contextInfo.quotedMessage;

        if (quotedMessage && quotedMessage.viewOnceMessageV2) {
            const quot = quotedMessage.viewOnceMessageV2;

            if (quot.message.imageMessage) {
                let caption = quot.message.imageMessage.caption;
                let media = await conn.downloadAndSaveMediaMessage(quot.message.imageMessage);
                return conn.sendMessage(from, { image: { url: media }, caption }, { quoted: mek });
            }

            if (quot.message.videoMessage) {
                let caption = quot.message.videoMessage.caption;
                let media = await conn.downloadAndSaveMediaMessage(quot.message.videoMessage);
                return conn.sendMessage(from, { video: { url: media }, caption }, { quoted: mek });
            }

            if (quot.message.audioMessage) {
                let media = await conn.downloadAndSaveMediaMessage(quot.message.audioMessage);
                return conn.sendMessage(from, { audio: { url: media } }, { quoted: mek });
            }
        }

        if (!m.quoted) return reply("⚠️ Please reply to a ViewOnce message.");

        if (m.quoted.mtype === "viewOnceMessage") {
            if (m.quoted.message.imageMessage) {
                let caption = m.quoted.message.imageMessage.caption;
                let media = await conn.downloadAndSaveMediaMessage(m.quoted.message.imageMessage);
                return conn.sendMessage(from, { image: { url: media }, caption }, { quoted: mek });
            } else if (m.quoted.message.videoMessage) {
                let caption = m.quoted.message.videoMessage.caption;
                let media = await conn.downloadAndSaveMediaMessage(m.quoted.message.videoMessage);
                return conn.sendMessage(from, { video: { url: media }, caption }, { quoted: mek });
            } else if (m.quoted.message.audioMessage) {
                let media = await conn.downloadAndSaveMediaMessage(m.quoted.message.audioMessage);
                return conn.sendMessage(from, { audio: { url: media } }, { quoted: mek });
            }
        } else {
            return reply("❌ This is not a valid ViewOnce message.");
        }
    } catch (e) {
        console.log("⚠️ Error in vv3:", e);
        reply("❌ An error occurred while fetching the ViewOnce message.");
    }
});
