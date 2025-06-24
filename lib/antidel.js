const { isJidGroup } = require('@whiskeysockets/baileys');
const { loadMessage, getAnti } = require('../data');
const config = require('../config');

// ==========================
// TEXT (SMS) DELETE HANDLER
// ==========================
const DeletedText = async (conn, mek, jid, deleteInfo, isGroup, update) => {
    const messageContent = mek.message?.conversation || mek.message?.extendedTextMessage?.text || '*(Empty Text Message)*';

    // Create stylish frame/kibox
    const boxMessage = `
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 💬 *Deleted Message Detected!*
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 🔖 *Content:*
┃ ${messageContent}
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 🕒 ${new Date().toLocaleTimeString('en-GB')}
┃ 👤 From: @${mek.key.participant?.split('@')[0] || 'unknown'}
${isGroup ? `┃ 👥 Group: ${(await conn.groupMetadata(jid)).subject}` : ''}
┗━━━━━━━━━━━━━━━━━━━━━━━┛
`.trim();

    await conn.sendMessage(
        jid,
        {
            text: boxMessage,
            contextInfo: {
                mentionedJid: isGroup ? [update.key.participant, mek.key.participant] : [update.key.remoteJid],
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363382023564830@newsletter",
                    newsletterName: "𝙱.𝙼.𝙱-𝚇𝙼𝙳"
                }
            }
        },
        { quoted: mek }
    );
};

// ==========================
// MEDIA DELETE HANDLER
// ==========================
const DeletedMedia = async (conn, mek, jid, deleteInfo) => {
    const antideletedmek = structuredClone(mek.message);
    const messageType = Object.keys(antideletedmek)[0];

    if (antideletedmek[messageType]) {
        antideletedmek[messageType].contextInfo = {
            stanzaId: mek.key.id,
            participant: mek.sender,
            quotedMessage: mek.message,
        };
    }

    // Relay media with tag only
    if (messageType === 'imageMessage' || messageType === 'videoMessage') {
        antideletedmek[messageType].caption = `${deleteInfo}\n\n*🖼️ / 🎥 Media Recovered*`;
        await conn.relayMessage(jid, antideletedmek, {});
    } else if (messageType === 'audioMessage' || messageType === 'documentMessage') {
        await conn.sendMessage(jid, {
            text: `*🚮 DELETED MEDIA DETECTED!*\n\n${deleteInfo}\n\n*🎵 / 📄 Media Recovered Below*`,
            contextInfo: {
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363382023564830@newsletter",
                    newsletterName: "𝙱.𝙼.𝙱-𝚇𝙼𝙳"
                }
            }
        }, { quoted: mek });

        await conn.relayMessage(jid, antideletedmek, {});
    } else {
        await conn.sendMessage(jid, {
            text: `*🚮 DELETED MESSAGE DETECTED!*\n\n${deleteInfo}\n\n*♻️ Message Content Recovered Below*`,
            contextInfo: {
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363382023564830@newsletter",
                    newsletterName: "𝙱.𝙼.𝙱-𝚇𝙼𝙳"
                }
            }
        }, { quoted: mek });

        await conn.relayMessage(jid, antideletedmek, {});
    }
};

// ==========================
// MAIN LISTENER
// ==========================
const AntiDelete = async (conn, updates) => {
    for (const update of updates) {
        if (update.update.message === null) {
            const store = await loadMessage(update.key.id);
            if (store && store.message) {
                const mek = store.message;
                const isGroup = isJidGroup(store.jid);
                const antiDeleteType = isGroup ? 'gc' : 'dm';
                const antiDeleteStatus = await getAnti(antiDeleteType);
                if (!antiDeleteStatus) continue;

                const deleteTime = new Date().toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                });

                let deleteInfo, jid;

                if (isGroup) {
                    const groupMetadata = await conn.groupMetadata(store.jid);
                    const groupName = groupMetadata.subject;
                    const sender = mek.key.participant?.split('@')[0];
                    const deleter = update.key.participant?.split('@')[0];

                    deleteInfo = `
*🔰 𝗡𝗢𝗩𝗔-𝗫𝗠𝗗 𝐀𝐍𝐓𝐈𝐃𝐄𝐋𝐄𝐓𝐄 🔰*

*⏰ Time:* ${deleteTime}
*👥 Group:* ${groupName}
*🚮 Deleted by:* @${deleter}
*👤 Original Sender:* @${sender}`.trim();

                    jid = config.ANTI_DEL_PATH === "log" ? conn.user.id : store.jid;
                } else {
                    const senderNumber = mek.key.remoteJid?.split('@')[0];
                    const deleterNumber = update.key.remoteJid?.split('@')[0];

                    deleteInfo = `
*🔰 𝗡𝗢𝗩𝗔-𝗫𝗠𝗗 𝐀𝐍𝐓𝐈𝐃𝐄𝐋𝐄𝐓𝐄 🔰*

*⏰ Time:* ${deleteTime}
*🚮 Deleted by:* @${deleterNumber}
*👤 Original Sender:* @${senderNumber}`.trim();

                    jid = config.ANTI_DEL_PATH === "log" ? conn.user.id : update.key.remoteJid;
                }

                if (mek.message?.conversation || mek.message?.extendedTextMessage) {
                    await DeletedText(conn, mek, jid, deleteInfo, isGroup, update);
                } else {
                    await DeletedMedia(conn, mek, jid, deleteInfo);
                }
            }
        }
    }
};

module.exports = {
    DeletedText,
    DeletedMedia,
    AntiDelete,
};
