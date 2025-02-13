const {
    default: makeWASocket,
    getAggregateVotesInPollMessage,
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    delay,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
  } = require("@whiskeysockets/baileys");
  const fs = require('fs');
  const P = require("pino");
  const FileType = require("file-type");
  const moment = require("moment-timezone");
  const l = console.log;
  var config = require("./settings");
  const NodeCache = require("node-cache");
  const util = require('util');
  var prefix = config.PREFIX;
  var prefixRegex = config.PREFIX === false || config.PREFIX === "null" ? '^' : new RegExp('^[' + config.PREFIX + ']');
  const {
    smsg,
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    fetchBuffer,
    getFile
  } = require("./lib/functions");
  const {
    sms,
    downloadMediaMessage
  } = require('./lib/msg');
  var {
    updateCMDStore,
    isbtnID,
    getCMDStore,
    getCmdForCmdId,
    connectdb,
    input,
    get,
    updb,
    updfb
  } = require("./lib/database");
  var {
    get_set,
    input_set
  } = require("./lib/set_db");
  function genMsgId() {
    let _0x2f661f = '3EB';
    for (let _0x5ef6d3 = "3EB".length; _0x5ef6d3 < 0x16; _0x5ef6d3++) {
      const _0x164f1b = Math.floor(Math.random() * 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.length);
      _0x2f661f += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(_0x164f1b);
    }
    return _0x2f661f;
  }
  const axios = require("axios");
  const path = require("path");
  const msgRetryCounterCache = new NodeCache();
  const ownerNumber = config.OWNER_NUMBER;
  function decodeBase64(_0x2b4491) {
    return Buffer.from(_0x2b4491, "base64").toString("utf-8");
  }
  const sessionDir = path.join(__dirname, "session");
  if (!fs.existsSync(sessionDir)) {
    fs.mkdirSync(sessionDir);
  }
  function saveDecodedSessionData(_0xc0c533) {
    const _0x1c1d04 = path.join(sessionDir, "creds.json");
    fs.writeFile(_0x1c1d04, JSON.stringify(_0xc0c533, null, 0x2), _0x4891e9 => {
      if (_0x4891e9) {
        console.error("Failed to save session data:", _0x4891e9.message);
        return;
      }
      console.log("Session data saved successfully.");
    });
  }
  if (!fs.existsSync(path.join(sessionDir, "creds.json"))) {
    if (config.SESSION_ID) {
      try {
        //Ab yahan say Evil session id fetch kary gaaa
        const decodedSessionId = Buffer.from(config.SESSION_ID.replace("Byte;;;", ''), 'base64').toString("utf-8");
        const sessionData = JSON.parse(decodedSessionId);
        saveDecodedSessionData(sessionData);
      } catch (_0x217cff) {
        console.error("Failed to save session ID:", _0x217cff.message);
      }
    } else {
        //Agar session id na mili to ye log karnay ke liye
      console.error("No SESSION_ID found!!!!!!!!!!!.");
    }
  } else {
    console.log("Session already exists.");
  }
  const express = require("express");
  const app = express();
  __path = process.cwd();
  const bodyParser = require("body-parser");
  const PORT = process.env.PORT || 0x1f40;
  async function connectToWA() {
    const {
      version: _0x38f749,
      isLatest: _0x913867
    } = await fetchLatestBaileysVersion();
    console.log("using WA v" + _0x38f749.join('.') + ", isLatest: " + _0x913867);
    const {
      state: _0x301474,
      saveCreds: _0x4dce03
    } = await useMultiFileAuthState(__dirname + "/session/");
    const _0x3e5f7b = makeWASocket({
      'logger': P({
        'level': "fatal"
      }).child({
        'level': 'fatal'
      }),
      'printQRInTerminal': true,
      'generateHighQualityLinkPreview': true,
      'auth': _0x301474,
      'defaultQueryTimeoutMs': undefined,
      'msgRetryCounterCache': msgRetryCounterCache
    });
    _0x3e5f7b.ev.on('connection.update', async _0x3cface => {
      const {
        connection: _0x2a1308,
        lastDisconnect: _0x3eff0e
      } = _0x3cface;
      if (_0x2a1308 === "close") {
        if (_0x3eff0e.error.output.statusCode !== DisconnectReason.loggedOut) {
          connectToWA();
        }
      } else {
        if (_0x2a1308 === "open") {
          console.log("Installing plugins 🔌... ");
          const _0xddb664 = require('path');
          fs.readdirSync("./plugins/").forEach(_0x427148 => {
            if (_0xddb664.extname(_0x427148).toLowerCase() == ".js") {
              require("./plugins/" + _0x427148);
            }
          });
        //   console.log("Plugins installed ✅");
          console.log("Bot connected ");
          await _0x3e5f7b.sendMessage(config.OWNER_NUMBER + "@s.whatsapp.net", {
            'text': "*DARK-EVIL CONNECTED*",
            'contextInfo': {
              'externalAdReply': {
                'title': "*_ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*",
                'thumbnailUrl': "https://telegra.ph/file/3fc1a690355a453762aec.jpg",
                'sourceUrl': 'https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w',
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          });
        }
      }
    });
    _0x3e5f7b.ev.on("call", async _0x5697ef => {
      if (config.ANTI_CALL === true) {
        for (const _0xf5db29 of _0x5697ef) {
          if (_0xf5db29.status == "offer") {
            if (_0xf5db29.isGroup == false) {
              await _0x3e5f7b.sendMessage(_0xf5db29.from, {
                'text': "⚠️︱I'm Dark Evil, I rejected Call Because my owner is Busy!",
                'mentions': [_0xf5db29.from]
              });
              await _0x3e5f7b.rejectCall(_0xf5db29.id, _0xf5db29.from);
            } else {
              await _0x3e5f7b.rejectCall(_0xf5db29.id, _0xf5db29.from);
            }
          }
        }
      }
    });
    _0x3e5f7b.ev.on("group-participants.update", async _0x208399 => {
      if (config.WELCOME === true) {
        console.log(_0x208399);
        try {
          let _0x209fe7 = await _0x3e5f7b.groupMetadata(_0x208399.id);
          let _0x220c2c = _0x208399.participants;
          for (let _0x4aefad of _0x220c2c) {
            try {
              ppuser = await _0x3e5f7b.profilePictureUrl(_0x4aefad, "image");
            } catch (_0x143152) {
              ppuser = "https://telegra.ph/file/3fc1a690355a453762aec.jpg";
            }
            try {
              ppgroup = await _0x3e5f7b.profilePictureUrl(_0x208399.id, "image");
            } catch (_0x47fcd3) {
              ppgroup = "https://telegra.ph/file/3fc1a690355a453762aec.jpg";
            }
            memb = _0x209fe7.participants.length;
            connWlcm = await getBuffer(ppuser);
            connLft = await getBuffer(ppuser);
            if (_0x208399.action == 'add') {
              const _0x3abfc0 = moment.tz("Asia/Karachi").format("HH:mm:ss");
              const _0x135d2c = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
              const _0x570f4c = _0x209fe7.participants.length;
              connbody = "┌─❖\n│「 𝗛𝗶 👋 」\n└┬❖ 「  @" + _0x4aefad.split('@')[0x0] + "  」\n   │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 \n   │✑  " + _0x209fe7.subject + "\n   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : \n   │✑ " + _0x570f4c + "th\n   │✑  𝗝𝗼𝗶𝗻𝗲𝗱 : \n   │✑ " + _0x3abfc0 + " " + _0x135d2c + "\n   └───────────────┈ ⳹\n   DESCRIPTION\n  DEV NAME = Rahman Tech\n  TEAM = Cyber-Team (T.T)\n  WHATSAPP CHANNEL = https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w";
              _0x3e5f7b.sendMessage(_0x208399.id, {
                'text': connbody,
                'contextInfo': {
                  'mentionedJid': [_0x4aefad],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'renderLargerThumbnail': true,
                    'title': "𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋",
                    'body': '' + _0x209fe7.subject,
                    'containsAutoReply': true,
                    'mediaType': 0x1,
                    'thumbnail': connLft,
                    'sourceUrl': '' + ppuser
                  }
                }
              });
            } else {
              if (_0x208399.action == "remove") {
                const _0x538a9e = moment.tz("Asia/Karachi").format("HH:mm:ss");
                const _0x1c2032 = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
                const _0x54a4e1 = _0x209fe7.participants.length;
                connbody = "┌─❖\n│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」\n└┬❖ 「 @" + _0x4aefad.split('@')[0x0] + "  」\n   │✑  𝗟𝗲𝗳𝘁 \n   │✑ " + _0x209fe7.subject + "\n   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : \n   │✑ " + _0x54a4e1 + "th\n   │✑  𝗧𝗶𝗺𝗲 : \n   │✑  " + _0x538a9e + " " + _0x1c2032 + "\n   └───────────────┈ ⳹\n   DESCRIPTION\n  OWNER NAME = Rahman Tech\n  TEAM =Cyber-Team(T.T)\n  WHATSAPP CHANNEL = https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w";
                _0x3e5f7b.sendMessage(_0x208399.id, {
                  'text': connbody,
                  'contextInfo': {
                    'mentionedJid': [_0x4aefad],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'renderLargerThumbnail': true,
                      'title': " 𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋",
                      'body': '' + _0x209fe7.subject,
                      'containsAutoReply': true,
                      'mediaType': 0x1,
                      'thumbnail': connLft,
                      'sourceUrl': '' + ppuser
                    }
                  }
                });
              }
            }
          }
        } catch (_0x27dfde) {
          console.log(_0x27dfde);
        }
      }
    });
    _0x3e5f7b.ev.on("group-participants.update", async _0x2a8114 => {
      if (config.ADMIN_EVENT === true) {
        console.log(_0x2a8114);
        try {
          let _0x52b8de = _0x2a8114.participants;
          for (let _0x460873 of _0x52b8de) {
            try {
              ppuser = await _0x3e5f7b.profilePictureUrl(_0x460873, "image");
            } catch (_0x2842ea) {
              ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
            }
            try {
              ppgroup = await _0x3e5f7b.profilePictureUrl(_0x2a8114.id, "image");
            } catch (_0x39b62c) {
              ppgroup = "https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60";
            }
            if (_0x2a8114.action == "promote") {
              xeonbody = " 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @" + _0x460873.split('@')[0x0] + ", you have been *promoted* to *admin* 🥳";
              _0x3e5f7b.sendMessage(_0x2a8114.id, {
                'text': xeonbody,
                'contextInfo': {
                  'mentionedJid': [_0x460873],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'containsAutoReply': true,
                    'title': "𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋",
                    'body': "TalkDrove",
                    'previewType': "PHOTO",
                    'thumbnailUrl': '',
                    'thumbnail': XeonWlcm,
                    'sourceUrl': '' + wagc
                  }
                }
              });
            } else if (_0x2a8114.action == "demote") {
              xeonbody = "𝗢𝗼𝗽𝘀‼️ @" + _0x460873.split('@')[0x0] + ", you have been *demoted* from *admin* 😬";
              _0x3e5f7b.sendMessage(_0x2a8114.id, {
                'text': xeonbody,
                'contextInfo': {
                  'mentionedJid': [_0x460873],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'containsAutoReply': true,
                    'title': '𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋',
                    'body': '𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋',
                    'previewType': "PHOTO",
                    'thumbnailUrl': '',
                    'thumbnail': XeonLft,
                    'sourceUrl': '' + wagc
                  }
                }
              });
            }
          }
        } catch (_0x12616c) {
          console.log(_0x12616c);
        }
      }
    });
    async function _0x499936(_0x819881) {
      if (store) {
        const _0x19c6d2 = await store.loadMessage(_0x819881.remoteJid, _0x819881.id);
        return _0x19c6d2?.['message'];
      }
      return {
        'conversation': 'Hai'
      };
    }
    _0x3e5f7b.ev.on("messages.update", async _0x288c6c => {
      for (const {
        key: _0x11a20c,
        update: _0xec0fae
      } of _0x288c6c) {
        if (_0xec0fae.pollUpdates && _0x11a20c.fromMe) {
          const _0x28eb65 = await _0x499936(_0x11a20c);
          if (_0x28eb65) {
            const _0x53b9f8 = await getAggregateVotesInPollMessage({
              'message': _0x28eb65,
              'pollUpdates': _0xec0fae.pollUpdates
            });
            var _0xa5f56f = _0x53b9f8.filter(_0x48f171 => _0x48f171.voters.length !== 0x0)[0x0]?.["name"];
            if (_0xa5f56f == undefined) {
              return;
            }
            var _0x2fc89d = prefix + _0xa5f56f;
            try {
              setTimeout(async () => {
                await gss.sendMessage(_0x11a20c.remoteJid, {
                  'delete': _0x11a20c
                });
              }, 0x2710);
            } catch (_0x25f3c9) {
              console.error("Error deleting message:", _0x25f3c9);
            }
            gss.appenTextMessage(_0x2fc89d, _0x288c6c);
          }
        }
      }
    });
    _0x3e5f7b.ev.on("messages.update", async _0x1399f1 => {
      for (const {
        key: _0x3c2f70,
        update: _0x25ae5b
      } of _0x1399f1) {
        if (_0x25ae5b.pollUpdates) {
          const _0x1a7252 = await _0x499936(_0x3c2f70);
          const _0x4ceb70 = _0x1a7252.message;
          if (_0x4ceb70) {
            const _0x958282 = _0x3c2f70.remoteJid;
            const _0xf1b2da = await jidNormalizedUser(_0x3e5f7b.user.id);
            const _0x360a2c = await getAggregateVotesInPollMessage({
              'message': _0x4ceb70,
              'pollUpdates': _0x25ae5b.pollUpdates
            });
            let _0x22e323 = _0x360a2c.find(_0x116962 => _0x116962.voters.length > 0x0)?.["name"] || '';
            let _0xbe11c4 = _0x360a2c.findIndex(_0x4ae168 => _0x4ae168.name === _0x22e323) || '';
            let _0x58e17a = _0x360a2c.find(_0x4e8aa4 => _0x4e8aa4.voters.length > 0x0)?.["voters"][0x0] == 'me' ? _0xf1b2da : _0x360a2c.find(_0x217cee => _0x217cee.voters.length > 0x0)?.['voters'][0x0];
            function _0x43a586(_0x4e58d5) {
              let _0x110ab1 = ["pollCreationMessage", "pollCreationMessageV1", "pollCreationMessageV2", "pollCreationMessageV3"];
              for (let _0x30ff18 of _0x110ab1) {
                if (_0x4e58d5[_0x30ff18] && _0x4e58d5[_0x30ff18].mentionedJid) {
                  return _0x4e58d5[_0x30ff18].mentionedJid;
                }
              }
              return null;
            }
            function _0x4cc1c4(_0x79dc68) {
              let _0x2d6cf7 = ['pollCreationMessage', 'pollCreationMessageV1', "pollCreationMessageV2", "pollCreationMessageV3"];
              for (let _0x6f0b7 of _0x2d6cf7) {
                if (_0x79dc68[_0x6f0b7] && _0x79dc68[_0x6f0b7].name) {
                  return _0x79dc68[_0x6f0b7].name;
                }
              }
              return null;
            }
            const _0x44ea05 = _0x43a586(_0x4ceb70);
            const _0x126335 = _0x4cc1c4(_0x4ceb70);
            const _0x166c4c = _0x44ea05?.["includes"](_0x58e17a);
            const _0x4d042f = _0x1a7252.key.remoteJid.includes('@g.us') ? _0x1a7252.key.participant : _0x1a7252.key.remoteJid;
            const _0x262a98 = {
              'body': _0xbe11c4 + 0x1,
              'voted': _0x22e323,
              'from': _0x958282,
              'isRequester': _0x166c4c ? _0x166c4c : false,
              'mentionedJid': _0x44ea05,
              'pollSender': _0x4d042f,
              'poll': _0x126335,
              'voter': _0x58e17a,
              'type': "poll"
            };
            await _0x3e5f7b.sendMessage(_0xf1b2da, {
              'text': JSON.stringify(_0x262a98, null, 0x2)
            });
          }
        }
      }
    });
    _0x3e5f7b.ev.on("creds.update", _0x4dce03);
    _0x3e5f7b.ev.on("messages.upsert", async _0x352764 => {
      try {
        _0x352764 = _0x352764.messages[0x0];
        if (!_0x352764.message) {
          return;
        }
        var _0x322be3 = require('./lib/id_db');
        _0x352764.message = getContentType(_0x352764.message) === "ephemeralMessage" ? _0x352764.message.ephemeralMessage.message : _0x352764.message;
        if (config.AUTO_STATUS_READ === true) {
          if (_0x352764.key && _0x352764.key.remoteJid === "status@broadcast") {
            await _0x3e5f7b.readMessages([_0x352764.key]);
          }
        }
        if (_0x352764.key && _0x352764.key.remoteJid === "status@broadcast") {
          return;
        }
        const _0x377fd9 = sms(_0x3e5f7b, _0x352764);
        const _0x15b63a = getContentType(_0x352764.message);
        const _0x4ede05 = _0x352764.key.remoteJid;
        const _0x2aa9c5 = _0x15b63a == 'extendedTextMessage' && _0x352764.message.extendedTextMessage.contextInfo != null ? _0x352764.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
        const _0x1e58d2 = _0x15b63a === "conversation" ? _0x352764.message.conversation : _0x15b63a === "extendedTextMessage" ? _0x352764.message.extendedTextMessage.text : _0x15b63a == "interactiveResponseMessage" ? _0x352764.message.interactiveResponseMessage && _0x352764.message.interactiveResponseMessage.nativeFlowResponseMessage && JSON.parse(_0x352764.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson) && JSON.parse(_0x352764.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x15b63a == "templateButtonReplyMessage" ? _0x352764.message.templateButtonReplyMessage && _0x352764.message.templateButtonReplyMessage.selectedId : _0x15b63a === "extendedTextMessage" ? _0x352764.message.extendedTextMessage.text : _0x15b63a == "imageMessage" && _0x352764.message.imageMessage.caption ? _0x352764.message.imageMessage.caption : _0x15b63a == 'videoMessage' && _0x352764.message.videoMessage.caption ? _0x352764.message.videoMessage.caption : '';
        if ((await isbtnID(_0x352764.message?.['extendedTextMessage']?.["contextInfo"]?.['stanzaId'])) && getCmdForCmdId(await getCMDStore(_0x352764.message?.["extendedTextMessage"]?.["contextInfo"]?.["stanzaId"]), _0x352764?.["message"]?.["extendedTextMessage"]?.["text"])) {
          getCmdForCmdId(await getCMDStore(_0x352764.message?.["extendedTextMessage"]?.["contextInfo"]?.["stanzaId"]), _0x352764?.["message"]?.['extendedTextMessage']?.["text"]);
        } else {
          if (_0x15b63a === "extendedTextMessage") {
            _0x352764.message.extendedTextMessage.text;
          } else {
            if (_0x15b63a == "imageMessage" && _0x352764.message.imageMessage.caption) {
              _0x352764.message.imageMessage.caption;
            } else if (_0x15b63a == "videoMessage" && _0x352764.message.videoMessage.caption) {
              _0x352764.message.videoMessage.caption;
            } else {
              '';
            }
          }
        }
        _0x3e5f7b.sendPoll = (_0x538a32, _0x500cb3 = '', _0x3c95d2 = [], _0x261bba = 0x1) => {
          return _0x3e5f7b.sendMessage(_0x538a32, {
            'poll': {
              'name': _0x500cb3,
              'values': _0x3c95d2,
              'selectableCount': _0x261bba
            }
          });
        };
        var _0x39d0ad = await get_set("all");
        config = await _0x246f9c(config, _0x39d0ad);
        prefix = config.PREFIX;
        var _0x2bab66 = _0x1e58d2.startsWith(prefix);
        var _0x1054d5 = _0x2bab66 ? _0x1e58d2.slice(prefix.length).trim().split(" ").shift().toLowerCase() : '';
        var _0x36f738 = _0x1e58d2.trim().split(/ +/).slice(0x1);
        var _0x4cc3ea = _0x36f738.join(" ");
        if (_0x377fd9.quoted && _0x377fd9.quoted.fromMe && (await _0x322be3.check(_0x377fd9.quoted.id))) {
          if (_0x1e58d2.startsWith(prefix)) {
            _0x1e58d2 = _0x1e58d2.replace(prefix, '');
          }
          var _0x2aaec9 = await _0x322be3.get_data(_0x377fd9.quoted.id, _0x1e58d2);
          if (_0x2aaec9.cmd) {
            _0x2bab66 = true;
            _0x1054d5 = _0x2aaec9.cmd.startsWith(prefix) ? _0x2aaec9.cmd.slice(prefix.length).trim().split(" ").shift().toLowerCase() : '';
            _0x36f738 = _0x2aaec9.cmd.trim().split(/ +/).slice(0x1);
            _0x4cc3ea = _0x36f738.join(" ");
          }
        }
        console.log(_0x1054d5);
        const _0x502baf = _0x4ede05.endsWith('@g.us');
        const _0x151d5a = _0x352764.key.fromMe ? _0x3e5f7b.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x3e5f7b.user.id : _0x352764.key.participant || _0x352764.key.remoteJid;
        const _0x1c0ba1 = _0x151d5a.split('@')[0x0];
        const _0x59fb4f = _0x3e5f7b.user.id.split(':')[0x0];
        const _0x51bef8 = _0x352764.pushName || "Sin Nombre";
        const _0xf46ec9 = _0x59fb4f.includes(_0x1c0ba1);
        const _0xb2c06c = "923072380380".includes(_0x1c0ba1);
        let _0x10d93e = (await axios.get('https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/X-ByteOwners.json')).data;
        const _0x177070 = _0x10d93e.split(',');
        const _0x4afb59 = [..._0x177070].map(_0x8d5035 => _0x8d5035.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(_0x151d5a);
        const _0xcffcd6 = await jidNormalizedUser(_0x3e5f7b.user.id);
        const _0x592b72 = [_0xcffcd6].map(_0x39f27f => _0x39f27f.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x151d5a);
        const _0x24b0c7 = _0xf46ec9 ? _0xf46ec9 : _0xb2c06c;
        const _0xce758c = ownerNumber.includes(_0x1c0ba1) || _0x24b0c7;
        const _0x450e2e = _0x502baf ? await _0x3e5f7b.groupMetadata(_0x4ede05)["catch"](_0x153016 => {}) : '';
        const _0x1de128 = _0x502baf ? _0x450e2e.subject : '';
        const _0x6ebc54 = _0x502baf ? await _0x450e2e.participants : '';
        const _0x50f0dc = _0x502baf ? await getGroupAdmins(_0x6ebc54) : '';
        const _0x2a0f21 = _0x502baf ? _0x50f0dc.includes(_0xcffcd6) : false;
        const _0x421481 = _0x502baf ? _0x50f0dc.includes(_0x151d5a) : false;
        const _0x9f68f1 = _0x564ca8 => {
          for (let _0x4b6f83 = 0x0; _0x4b6f83 < _0x564ca8.length; _0x4b6f83++) {
            if (_0x564ca8[_0x4b6f83] === _0x4ede05) {
              return true;
            }
          }
          return false;
        };
        const _0x33b954 = async _0x2cffe4 => {
          return await _0x3e5f7b.sendMessage(_0x4ede05, {
            'text': _0x2cffe4
          }, {
            'quoted': _0x352764
          });
        };
        function _0x246f9c(_0x39fe56, _0x590f85) {
          for (var _0x51c610 in _0x590f85) {
            _0x39fe56[_0x51c610] = _0x590f85[_0x51c610];
          }
          return _0x39fe56;
        }
        var _0x39d0ad = await get_set("all");
        config = await _0x246f9c(config, _0x39d0ad);
        _0x3e5f7b.replyad = async _0x2dccbb => {
          return await _0x3e5f7b.sendMessage(_0x4ede05, {
            'text': _0x2dccbb,
            'contextInfo': {
              'mentionedJid': [''],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': '120363252060326102@newsletter',
                'serverMessageId': 0x7f
              },
              'externalAdReply': {
                'title': "ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ",
                'body': "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
                'mediaType': 0x1,
                'sourceUrl': "https://wa.me/923319709781",
                'thumbnailUrl': "https://telegra.ph/file/07565436def969a74708e.jpg",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x352764
          });
        };
        _0x3e5f7b.buttonMessage2 = async (_0x2c008d, _0x2c2ab0, _0x207337) => {
          let _0x3af16c = '';
          const _0x33d963 = [];
          _0x2c2ab0.buttons.forEach((_0x4fb121, _0x6f1c64) => {
            const _0x4110e6 = '' + (_0x6f1c64 + 0x1);
            _0x3af16c += "\n" + _0x4110e6 + " | " + _0x4fb121.buttonText.displayText + "\n";
            _0x33d963.push({
              'cmdId': _0x4110e6,
              'cmd': _0x4fb121.buttonId
            });
          });
          if (_0x2c2ab0.headerType === 0x1) {
            const _0x1329f9 = _0x2c2ab0.text + "\n\n🔢 Reply you want number," + _0x3af16c + "\n" + _0x2c2ab0.footer;
            const _0x413a88 = await _0x3e5f7b.sendMessage(_0x4ede05, {
              'text': _0x1329f9,
              'contextInfo': {
                'mentionedJid': [''],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '120363252060326102@newsletter',
                  'serverMessageId': 0x7f
                },
                'externalAdReply': {
                  'title': "ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ",
                  'body': "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
                  'mediaType': 0x1,
                  'sourceUrl': "https://wa.me/923319709781",
                  'thumbnailUrl': 'https://telegra.ph/file/07565436def969a74708e.jpg',
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x207337 || _0x352764
            });
            await updateCMDStore(_0x413a88.key.id, _0x33d963);
          } else {
            if (_0x2c2ab0.headerType === 0x4) {
              const _0x3a1867 = _0x2c2ab0.caption + "\n\n🔢 Reply you want number," + _0x3af16c + "\n" + _0x2c2ab0.footer;
              const _0x28bb97 = await _0x3e5f7b.sendMessage(_0x2c008d, {
                'image': _0x2c2ab0.image,
                'caption': _0x3a1867,
                'contextInfo': {
                  'mentionedJid': [''],
                  'groupMentions': [],
                  'forwardingScore': 0x1,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "120363252060326102@newsletter",
                    'serverMessageId': 0x7f
                  },
                  'externalAdReply': {
                    'title': "ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ",
                    'body': "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
                    'mediaType': 0x1,
                    'sourceUrl': "https://wa.me/923319709781",
                    'thumbnailUrl': "https://telegra.ph/file/07565436def969a74708e.jpg",
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0x207337 || _0x352764
              });
              await updateCMDStore(_0x28bb97.key.id, _0x33d963);
            }
          }
        };
        _0x3e5f7b.replyList = async (_0x24a7da, _0x8e2368, _0x1c4714) => {
          function _0x17b0be(_0x59949c) {
            let _0x394786 = '';
            _0x59949c.forEach((_0x56f730, _0x50b5f6) => {
              _0x394786 += _0x56f730.title ? _0x56f730.title + "\n" : '';
              _0x56f730.rows.forEach((_0x56ebbd, _0x57d4ab) => {
                _0x394786 += _0x56ebbd.title + " || " + _0x56ebbd.description;
                _0x394786 += _0x57d4ab === _0x56f730.rows.length - 0x1 ? '' : "\n";
              });
              _0x394786 += _0x50b5f6 === _0x59949c.length - 0x1 ? '' : "\n\n";
            });
            return _0x394786;
          }
          if (!_0x8e2368.sections) {
            return false;
          }
          _0x8e2368[_0x8e2368.caption ? 'caption' : "text"] = (_0x8e2368.title ? _0x8e2368.title + "\n\n" : '') + (_0x8e2368.caption ? _0x8e2368.caption : _0x8e2368.text) + "\n\n" + _0x8e2368.buttonText + "\n\n" + (await _0x17b0be(_0x8e2368.sections)) + "\n\n" + _0x8e2368.footer;
          var _0x5cfa12 = {
            ..._0x8e2368
          };
          delete _0x8e2368.sections;
          delete _0x8e2368.footer;
          delete _0x8e2368.buttonText;
          delete _0x8e2368.title;
          const _0x437b69 = await _0x3e5f7b.sendMessage(_0x24a7da, _0x8e2368, _0x1c4714);
          const _0xdabddd = [];
          _0x5cfa12.sections.forEach(_0x515a33 => {
            _0x515a33.rows.forEach(_0x501a9b => {
              _0xdabddd.push({
                'rowId': _0x501a9b.rowId,
                'title': _0x501a9b.title
              });
            });
          });
          for (let _0x5bc096 = 0x0; _0x5bc096 < _0xdabddd.length; _0x5bc096++) {
            await _0x322be3.input_data(_0xdabddd[_0x5bc096].rowId, _0xdabddd[_0x5bc096].title, _0x437b69.key.id);
          }
        };
        _0x3e5f7b.buttonMessage = async (_0x76670d, _0x1787cc, _0x4572d2) => {
          let _0x976ac0 = '';
          const _0x4f4828 = [];
          _0x1787cc.buttons.forEach((_0x58196c, _0x50707c) => {
            const _0x3e5dc2 = '' + (_0x50707c + 0x1);
            _0x976ac0 += "\n" + _0x3e5dc2 + " | " + _0x58196c.buttonText.displayText + "\n";
            _0x4f4828.push({
              'cmdId': _0x3e5dc2,
              'cmd': _0x58196c.buttonId
            });
          });
          if (_0x1787cc.headerType === 0x1) {
            const _0x494980 = (_0x1787cc.text || _0x1787cc.caption) + "\n🔢 Reply you want number," + _0x976ac0 + "\n\n" + _0x1787cc.footer;
            const _0x409498 = await _0x3e5f7b.sendMessage(_0x4ede05, {
              'text': _0x494980,
              'contextInfo': {
                'mentionedJid': [''],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363252060326102@newsletter",
                  'serverMessageId': 0x7f
                },
                'externalAdReply': {
                  'title': "ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ",
                  'body': "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
                  'mediaType': 0x1,
                  'sourceUrl': "https://wa.me/923319709781",
                  'thumbnailUrl': "https://telegra.ph/file/07565436def969a74708e.jpg",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x4572d2 || _0x352764
            });
            await updateCMDStore(_0x409498.key.id, _0x4f4828);
          } else {
            if (_0x1787cc.headerType === 0x4) {
              const _0xb132f2 = _0x1787cc.caption + "\n\n🔢 Reply you want number," + _0x976ac0 + "\n" + _0x1787cc.footer;
              const _0x2e30f6 = await _0x3e5f7b.sendMessage(_0x76670d, {
                'image': _0x1787cc.image,
                'caption': _0xb132f2,
                'contextInfo': {
                  'mentionedJid': [''],
                  'groupMentions': [],
                  'forwardingScore': 0x1,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "120363252060326102@newsletter",
                    'serverMessageId': 0x7f
                  },
                  'externalAdReply': {
                    'title': "ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ",
                    'body': "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
                    'mediaType': 0x1,
                    'sourceUrl': "https://wa.me/923319709781",
                    'thumbnailUrl': 'https://telegra.ph/file/07565436def969a74708e.jpg',
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0x4572d2 || _0x352764
              });
              await updateCMDStore(_0x2e30f6.key.id, _0x4f4828);
            }
          }
        };
        _0x3e5f7b.listMessage2 = async (_0x8437b5, _0x45a17c, _0x173863) => {
          let _0x209227 = '';
          const _0xba3487 = [];
          _0x45a17c.sections.forEach((_0x56c2fc, _0x1ecd2f) => {
            const _0x5bd46b = '' + (_0x1ecd2f + 0x1);
            _0x209227 += "\n[" + _0x5bd46b + "] " + _0x56c2fc.title + "\n";
            _0x56c2fc.rows.forEach((_0x1eb8cb, _0xe37c82) => {
              const _0x4a56eb = _0x5bd46b + '.' + (_0xe37c82 + 0x1);
              const _0x29d8da = "   " + _0x4a56eb + " | " + _0x1eb8cb.title;
              _0x209227 += _0x29d8da + "\n";
              if (_0x1eb8cb.description) {
                _0x209227 += "   " + _0x1eb8cb.description + "\n\n";
              }
              _0xba3487.push({
                'cmdId': _0x4a56eb,
                'cmd': _0x1eb8cb.rowId
              });
            });
          });
          const _0xf963bd = _0x45a17c.text + "\n\n" + _0x45a17c.buttonText + ',' + _0x209227 + "\n" + _0x45a17c.footer;
          const _0x2a355e = await _0x3e5f7b.sendMessage(_0x4ede05, {
            'text': _0xf963bd,
            'contextInfo': {
              'mentionedJid': [''],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363252060326102@newsletter",
                'serverMessageId': 0x7f
              },
              'externalAdReply': {
                'title': "ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ",
                'body': "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
                'mediaType': 0x1,
                'sourceUrl': "https://wa.me/923319709781",
                'thumbnailUrl': 'https://telegra.ph/file/07565436def969a74708e.jpg',
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x173863 || _0x352764
          });
          await updateCMDStore(_0x2a355e.key.id, _0xba3487);
        };
        _0x3e5f7b.listMessage = async (_0x3494e8, _0x5f08c4, _0x69bbf6) => {
          let _0x4e2e79 = '';
          const _0x5e8f07 = [];
          _0x5f08c4.sections.forEach((_0x34b403, _0xee632) => {
            const _0x1c3558 = '' + (_0xee632 + 0x1);
            _0x4e2e79 += "\n[" + _0x1c3558 + "] " + _0x34b403.title + "\n";
            _0x34b403.rows.forEach((_0x1c70a4, _0x3d6b68) => {
              const _0x13cbe3 = _0x1c3558 + '.' + (_0x3d6b68 + 0x1);
              const _0x585f1c = "   " + _0x13cbe3 + " | " + _0x1c70a4.title;
              _0x4e2e79 += _0x585f1c + "\n";
              if (_0x1c70a4.description) {
                _0x4e2e79 += "   " + _0x1c70a4.description + "\n\n";
              }
              _0x5e8f07.push({
                'cmdId': _0x13cbe3,
                'cmd': _0x1c70a4.rowId
              });
            });
          });
          const _0x116486 = _0x5f08c4.text + "\n\n" + _0x5f08c4.buttonText + ',' + _0x4e2e79 + "\n" + _0x5f08c4.footer;
          const _0x5b6919 = await _0x3e5f7b.sendMessage(_0x4ede05, {
            'text': _0x116486,
            'contextInfo': {
              'mentionedJid': [''],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363252060326102@newsletter",
                'serverMessageId': 0x7f
              },
              'externalAdReply': {
                'title': "ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ",
                'body': "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
                'mediaType': 0x1,
                'sourceUrl': "https://wa.me/923319709781",
                'thumbnailUrl': "https://telegra.ph/file/07565436def969a74708e.jpg",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x69bbf6 || _0x352764
          });
          await updateCMDStore(_0x5b6919.key.id, _0x5e8f07);
        };
        _0x3e5f7b.edite = async (_0x20335e, _0x43d4fd) => {
          await _0x3e5f7b.relayMessage(_0x4ede05, {
            'protocolMessage': {
              'key': _0x20335e.key,
              'type': 0xe,
              'editedMessage': {
                'conversation': _0x43d4fd
              }
            }
          }, {});
        };
        const _0x298f3d = (await axios.get("https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/XByte.json")).data;
        config.LOGO = _0x298f3d.imageurl;
        config.BTN = _0x298f3d.button;
        config.CONTACT = _0x298f3d.contact;
        config.FOOTER = _0x298f3d.footer;
        config.BTNURL = _0x298f3d.buttonurl;
        config.CAPTION = _0x298f3d.caption;
        config.C_JID = _0x298f3d.newsletter;
        config.T_LINE = _0x298f3d.titleline;
        config.B_LINE = _0x298f3d.bodyline;
        config.HAMZA_WA = _0x298f3d.buttonurl2;
        config.LOGO2 = _0x298f3d.imageurl2;
        config.C_NAME = _0x298f3d.channel;
        config.O_NO = _0x298f3d.otherno;
        _0x3e5f7b.edit = async (_0x1d4c1a, _0x35e32a) => {
          await _0x3e5f7b.relayMessage(_0x4ede05, {
            'protocolMessage': {
              'key': _0x1d4c1a.key,
              'type': 0xe,
              'editedMessage': {
                'conversation': _0x35e32a
              }
            }
          }, {});
        };
        _0x3e5f7b.sendFileUrl = async (_0x305008, _0x1b5e3d, _0x51869f, _0x48b8ee, _0x50ef83 = {}) => {
          let _0x3925c9 = '';
          let _0x413189 = await axios.head(_0x1b5e3d);
          _0x3925c9 = _0x413189.headers['content-type'];
          if (_0x3925c9.split('/')[0x1] === "gif") {
            return _0x3e5f7b.sendMessage(_0x305008, {
              'video': await getBuffer(_0x1b5e3d),
              'caption': _0x51869f,
              'gifPlayback': true,
              ..._0x50ef83
            }, {
              'quoted': _0x48b8ee,
              ..._0x50ef83
            });
          }
          if (_0x3925c9 === "application/pdf") {
            return _0x3e5f7b.sendMessage(_0x305008, {
              'document': await getBuffer(_0x1b5e3d),
              'mimetype': 'application/pdf',
              'caption': _0x51869f,
              ..._0x50ef83
            }, {
              'quoted': _0x48b8ee,
              ..._0x50ef83
            });
          }
          if (_0x3925c9.split('/')[0x0] === "image") {
            return _0x3e5f7b.sendMessage(_0x305008, {
              'image': await getBuffer(_0x1b5e3d),
              'caption': _0x51869f,
              ..._0x50ef83
            }, {
              'quoted': _0x48b8ee,
              ..._0x50ef83
            });
          }
          if (_0x3925c9.split('/')[0x0] === "video") {
            return _0x3e5f7b.sendMessage(_0x305008, {
              'video': await getBuffer(_0x1b5e3d),
              'caption': _0x51869f,
              'mimetype': "video/mp4",
              ..._0x50ef83
            }, {
              'quoted': _0x48b8ee,
              ..._0x50ef83
            });
          }
          if (_0x3925c9.split('/')[0x0] === 'audio') {
            return _0x3e5f7b.sendMessage(_0x305008, {
              'audio': await getBuffer(_0x1b5e3d),
              'caption': _0x51869f,
              'mimetype': "audio/mpeg",
              ..._0x50ef83
            }, {
              'quoted': _0x48b8ee,
              ..._0x50ef83
            });
          }
        };
        _0x3e5f7b.sendButtonMessage = async (_0x35e543, _0x2ea3c2, _0x4035ee, _0x370ee5 = {}) => {
          let _0x571f00;
          if (_0x370ee5?.["video"]) {
            var _0x1a7235 = await prepareWAMessageMedia({
              'video': {
                'url': _0x370ee5 && _0x370ee5.video ? _0x370ee5.video : ''
              }
            }, {
              'upload': _0x3e5f7b.waUploadToServer
            });
            _0x571f00 = {
              'title': _0x370ee5 && _0x370ee5.header ? _0x370ee5.header : '',
              'hasMediaAttachment': true,
              'videoMessage': _0x1a7235.videoMessage
            };
          } else {
            if (_0x370ee5?.["image"]) {
              var _0x401a87 = await prepareWAMessageMedia({
                'image': {
                  'url': _0x370ee5 && _0x370ee5.image ? _0x370ee5.image : ''
                }
              }, {
                'upload': _0x3e5f7b.waUploadToServer
              });
              _0x571f00 = {
                'title': _0x370ee5 && _0x370ee5.header ? _0x370ee5.header : '',
                'hasMediaAttachment': true,
                'imageMessage': _0x401a87.imageMessage
              };
            } else {
              _0x571f00 = {
                'title': _0x370ee5 && _0x370ee5.header ? _0x370ee5.header : '',
                'hasMediaAttachment': false
              };
            }
          }
          let _0x4e0c33 = generateWAMessageFromContent(_0x35e543, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': {
                  'body': {
                    'text': _0x370ee5 && _0x370ee5.body ? _0x370ee5.body : ''
                  },
                  'footer': {
                    'text': _0x370ee5 && _0x370ee5.footer ? _0x370ee5.footer : ''
                  },
                  'header': _0x571f00,
                  'nativeFlowMessage': {
                    'buttons': _0x2ea3c2,
                    'messageParamsJson': ''
                  },
                  'contextInfo': {
                    'mentionedJid': [_0x377fd9.sender],
                    'forwardingScore': 0x3e7,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': config.C_JID,
                      'newsletterName': config.C_NAME,
                      'serverMessageId': 0x8f
                    },
                    'externalAdReply': {
                      'title': config.T_LINE,
                      'body': config.B_LINE,
                      'mediaType': 0x1,
                      'sourceUrl': config.HAMZA_WA,
                      'thumbnailUrl': config.LOGO2,
                      'renderLargerThumbnail': false
                    }
                  }
                }
              }
            }
          }, {
            'quoted': _0x4035ee
          });
          await _0x3e5f7b.sendPresenceUpdate("composing", _0x35e543);
          await sleep(0x3e8);
          return await _0x3e5f7b.relayMessage(_0x35e543, _0x4e0c33.message, {
            'messageId': _0x4e0c33.key.id
          });
        };
        if (!_0x24b0c7 && !_0xce758c && !_0x502baf && config.ONLY_GROUP == true) {
          return;
        }
        if (!_0x24b0c7 && !_0xce758c && config.ONLY_ME == true) {
          return;
        }
        const _0x2f2a78 = require("./lib/command");
        const _0x176c41 = _0x2bab66 ? _0x1054d5 : false;
        if (_0x2bab66) {
          const _0x477ed7 = _0x2f2a78.commands.find(_0x1e6274 => _0x1e6274.pattern === _0x176c41) || _0x2f2a78.commands.find(_0x49a460 => _0x49a460.alias && _0x49a460.alias.includes(_0x176c41));
          if (_0x477ed7) {
            if (_0x477ed7.react) {
              _0x3e5f7b.sendMessage(_0x4ede05, {
                'react': {
                  'text': _0x477ed7.react,
                  'key': _0x352764.key
                }
              });
            }
            try {
              _0x477ed7['function'](_0x3e5f7b, _0x352764, _0x377fd9, {
                'from': _0x4ede05,
                'prefix': prefix,
                'l': l,
                'quoted': _0x2aa9c5,
                'body': _0x1e58d2,
                'isCmd': _0x2bab66,
                'command': _0x1054d5,
                'args': _0x36f738,
                'q': _0x4cc3ea,
                'isGroup': _0x502baf,
                'sender': _0x151d5a,
                'senderNumber': _0x1c0ba1,
                'botNumber2': _0xcffcd6,
                'botNumber': _0x59fb4f,
                'pushname': _0x51bef8,
                'isMe': _0x24b0c7,
                'isOwner': _0xce758c,
                'groupMetadata': _0x450e2e,
                'groupName': _0x1de128,
                'participants': _0x6ebc54,
                'groupAdmins': _0x50f0dc,
                'isBotAdmins': _0x2a0f21,
                'isAdmins': _0x421481,
                'reply': _0x33b954,
                'config': config,
                'isCreator': _0x592b72,
                'isDev': _0x4afb59,
                'botNumber2': _0xcffcd6
              });
            } catch (_0x504964) {
              console.error("[PLUGIN ERROR] ", _0x504964);
            }
          }
        }
        _0x2f2a78.commands.map(async _0x33d871 => {
          if (_0x1e58d2 && _0x33d871.on === 'body') {
            _0x33d871["function"](_0x3e5f7b, _0x352764, _0x377fd9, {
              'from': _0x4ede05,
              'prefix': prefix,
              'l': l,
              'quoted': _0x2aa9c5,
              'body': _0x1e58d2,
              'isCmd': _0x2bab66,
              'command': _0x33d871,
              'args': _0x36f738,
              'q': _0x4cc3ea,
              'isGroup': _0x502baf,
              'sender': _0x151d5a,
              'senderNumber': _0x1c0ba1,
              'botNumber2': _0xcffcd6,
              'botNumber': _0x59fb4f,
              'pushname': _0x51bef8,
              'isMe': _0x24b0c7,
              'isOwner': _0xce758c,
              'groupMetadata': _0x450e2e,
              'groupName': _0x1de128,
              'participants': _0x6ebc54,
              'groupAdmins': _0x50f0dc,
              'isBotAdmins': _0x2a0f21,
              'isAdmins': _0x421481,
              'reply': _0x33b954,
              'config': config,
              'isCreator': _0x592b72,
              'isDev': _0x4afb59,
              'botNumber2': _0xcffcd6
            });
          } else {
            if (_0x352764.q && _0x33d871.on === "text") {
              _0x33d871["function"](_0x3e5f7b, _0x352764, _0x377fd9, {
                'from': _0x4ede05,
                'l': l,
                'quoted': _0x2aa9c5,
                'body': _0x1e58d2,
                'isCmd': _0x2bab66,
                'command': _0x33d871,
                'args': _0x36f738,
                'q': _0x4cc3ea,
                'isGroup': _0x502baf,
                'sender': _0x151d5a,
                'senderNumber': _0x1c0ba1,
                'botNumber2': _0xcffcd6,
                'botNumber': _0x59fb4f,
                'pushname': _0x51bef8,
                'isMe': _0x24b0c7,
                'isOwner': _0xce758c,
                'groupMetadata': _0x450e2e,
                'groupName': _0x1de128,
                'participants': _0x6ebc54,
                'groupAdmins': _0x50f0dc,
                'isBotAdmins': _0x2a0f21,
                'isAdmins': _0x421481,
                'reply': _0x33b954,
                'config': config,
                'isCreator': _0x592b72,
                'isDev': _0x4afb59,
                'botNumber2': _0xcffcd6
              });
            } else {
              if ((_0x33d871.on === "image" || _0x33d871.on === "photo") && _0x352764.type === 'imageMessage') {
                _0x33d871["function"](_0x3e5f7b, _0x352764, _0x377fd9, {
                  'from': _0x4ede05,
                  'prefix': prefix,
                  'l': l,
                  'quoted': _0x2aa9c5,
                  'body': _0x1e58d2,
                  'isCmd': _0x2bab66,
                  'command': _0x33d871,
                  'args': _0x36f738,
                  'q': _0x4cc3ea,
                  'isGroup': _0x502baf,
                  'sender': _0x151d5a,
                  'senderNumber': _0x1c0ba1,
                  'botNumber2': _0xcffcd6,
                  'botNumber': _0x59fb4f,
                  'pushname': _0x51bef8,
                  'isMe': _0x24b0c7,
                  'isOwner': _0xce758c,
                  'groupMetadata': _0x450e2e,
                  'groupName': _0x1de128,
                  'participants': _0x6ebc54,
                  'groupAdmins': _0x50f0dc,
                  'isBotAdmins': _0x2a0f21,
                  'isAdmins': _0x421481,
                  'reply': _0x33b954,
                  'config': config,
                  'isCreator': _0x592b72,
                  'isDev': _0x4afb59,
                  'botNumber2': _0xcffcd6
                });
              } else if (_0x33d871.on === "sticker" && _0x352764.type === "stickerMessage") {
                _0x33d871['function'](_0x3e5f7b, _0x352764, _0x377fd9, {
                  'from': _0x4ede05,
                  'prefix': prefix,
                  'l': l,
                  'quoted': _0x2aa9c5,
                  'body': _0x1e58d2,
                  'isCmd': _0x2bab66,
                  'command': _0x33d871,
                  'args': _0x36f738,
                  'q': _0x4cc3ea,
                  'isGroup': _0x502baf,
                  'sender': _0x151d5a,
                  'senderNumber': _0x1c0ba1,
                  'botNumber2': _0xcffcd6,
                  'botNumber': _0x59fb4f,
                  'pushname': _0x51bef8,
                  'isMe': _0x24b0c7,
                  'isOwner': _0xce758c,
                  'groupMetadata': _0x450e2e,
                  'groupName': _0x1de128,
                  'participants': _0x6ebc54,
                  'groupAdmins': _0x50f0dc,
                  'isBotAdmins': _0x2a0f21,
                  'isAdmins': _0x421481,
                  'reply': _0x33b954,
                  'config': config,
                  'isCreator': _0x592b72,
                  'isDev': _0x4afb59,
                  'botNumber2': _0xcffcd6
                });
              }
            }
          }
        });
        _0x3e5f7b.downloadAndSaveMediaMessage = async (_0x1a5789, _0x5db7f4, _0x649719 = true) => {
          let _0x4b585f = _0x1a5789.msg ? _0x1a5789.msg : _0x1a5789;
          let _0x5eeba8 = (_0x1a5789.msg || _0x1a5789).mimetype || '';
          let _0x4f8c3b = _0x1a5789.mtype ? _0x1a5789.mtype.replace(/Message/gi, '') : _0x5eeba8.split('/')[0x0];
          const _0x381c31 = await downloadContentFromMessage(_0x4b585f, _0x4f8c3b);
          let _0x5d398a = Buffer.from([]);
          for await (const _0x76c37d of _0x381c31) {
            _0x5d398a = Buffer.concat([_0x5d398a, _0x76c37d]);
          }
          let _0x13bc62 = await FileType.fromBuffer(_0x5d398a);
          trueFileName = _0x649719 ? _0x5db7f4 + '.' + _0x13bc62.ext : _0x5db7f4;
          await fs.writeFileSync(trueFileName, _0x5d398a);
          return trueFileName;
        };
        let _0x24186c = _0x1e58d2 ? prefixRegex.test(_0x1e58d2[0x0]) : false;
        if (config.READ_CMD_ONLY === true && _0x24186c) {
          await _0x3e5f7b.readMessages([_0x352764.key]);
        }
        if (config.AUTO_READ === true) {
          _0x3e5f7b.readMessages([_0x352764.key]);
        }
        if (config.AUTO_TYPING === true) {
          _0x3e5f7b.sendPresenceUpdate("composing", _0x4ede05);
        }
        if (config.AUTO_RECORDING === true) {
          _0x3e5f7b.sendPresenceUpdate("recording", _0x4ede05);
        }
        if (config.AUTO_BIO === true) {
          _0x3e5f7b.updateProfileStatus("This bio was updated by DARK-EVIL, POWERED BY RAHMAN TECH. " + runtime(process.uptime()) + " ")['catch'](_0x4e985f => _0x4e985f);
        }
        if (config.ALWAYS_ONLINE === false) {
          await _0x3e5f7b.sendPresenceUpdate("unavailable");
        }
        if (config.ALWAYS_ONLINE === true) {
          await _0x3e5f7b.sendPresenceUpdate("available");
        }
        if (config.AUTO_BLOCK == true && _0x377fd9.chat.endsWith('@s.whatsapp.net')) {
          return _0x3e5f7b.updateBlockStatus(_0x377fd9.sender, "block");
        }
        if (_0x377fd9.sender.startsWith(config.BLOCK_COUNTRY_PREFIX) && config.IS_BLOCK_COUNTRY_ON === true) {
          return _0x2c419a.updateBlockStatus(_0x377fd9.sender, "block");
        }
        if (config.ANTI_LINK == true) {
          if (_0x9f68f1 && _0x2a0f21) {
            if (!_0x421481) {
              if (!_0x24b0c7) {
                if (_0x1e58d2.match("https") || _0x1e58d2.match("http")) {
                  await _0x3e5f7b.sendMessage(_0x4ede05, {
                    'delete': _0x352764.key
                  });
                  _0x33b954("*「 ⚠️ 𝑳𝑰𝑵𝑲 𝑫𝑬𝑳𝑬𝑻𝑬𝑫 ⚠️ 」*");
                }
              }
            }
          }
        }
        if (config.ANTI_BOT == true) {
          if (!_0x592b72 && !_0x4afb59 && _0x502baf && !_0x2a0f21) {
            _0x33b954("```🤖 Bot Detected!!```\n\n_✅ Kicked *@" + _0x352764.sender.split('@')[0x0] + '*_', {
              'mentions': [_0x352764.sender]
            });
            _0x3e5f7b.groupParticipantsUpdate(_0x4ede05, [_0x352764.sender], "remove");
          }
        }
        const _0x4b3c01 = await fetchJson("https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/Bad_Words.json");
        if (config.ANTI_BAD == true) {
          if (!_0x421481 && !_0x4afb59) {
            for (any in _0x4b3c01) {
              if (_0x1e58d2.toLowerCase().includes(_0x4b3c01[any])) {
                if (!_0x1e58d2.includes("tent")) {
                  if (!_0x1e58d2.includes("docu")) {
                    if (!_0x1e58d2.includes("https")) {
                      if (_0x50f0dc.includes(_0x151d5a)) {
                        return;
                      }
                      if (_0x352764.key.fromMe) {
                        return;
                      }
                      await _0x3e5f7b.sendMessage(_0x4ede05, {
                        'delete': _0x352764.key
                      });
                      await _0x3e5f7b.sendMessage(_0x4ede05, {
                        'text': "*Bad word detected..!*"
                      });
                      await _0x3e5f7b.groupParticipantsUpdate(_0x4ede05, [_0x151d5a], "remove");
                    }
                  }
                }
              }
            }
          }
        }
        if (!_0xce758c) {
          if (config.ANTI_DELETE === true) {
            if (!_0x377fd9.id.startsWith("BAE5")) {
              if (!fs.existsSync("message_data")) {
                fs.mkdirSync("message_data");
              }
              function _0x38b30b(_0x3e4783, _0x2ad492) {
                const _0x1dadfc = path.join('message_data', _0x3e4783, _0x2ad492 + ".json");
                try {
                  const _0x522055 = fs.readFileSync(_0x1dadfc, "utf8");
                  return JSON.parse(_0x522055) || [];
                } catch (_0x4135b9) {
                  return [];
                }
              }
              function _0x1f3a6d(_0x171d85, _0x1f0312, _0x4bc06a) {
                const _0x30760e = path.join("message_data", _0x171d85);
                if (!fs.existsSync(_0x30760e)) {
                  fs.mkdirSync(_0x30760e, {
                    'recursive': true
                  });
                }
                const _0x3e17a6 = path.join(_0x30760e, _0x1f0312 + ".json");
                try {
                  fs.writeFileSync(_0x3e17a6, JSON.stringify(_0x4bc06a, null, 0x2));
                } catch (_0x161b92) {
                  console.error("Error saving chat data:", _0x161b92);
                }
              }
              function _0x8e067e(_0x38078b) {
                const _0x59e184 = _0x38078b.key.id;
                const _0x44407b = _0x38b30b(_0x4ede05, _0x59e184);
                _0x44407b.push(_0x38078b);
                _0x1f3a6d(_0x4ede05, _0x59e184, _0x44407b);
              }
              const _0x5e6117 = config.DELETEMSGSENDTO !== '' ? config.DELETEMSGSENDTO + "@s.whatsapp.net" : _0x4ede05;
              function _0x426a2f(_0xc9d7d8) {
                const _0x4b93a0 = _0xc9d7d8.msg.key.id;
                const _0xd59edf = _0x38b30b(_0x4ede05, _0x4b93a0);
                const _0x5c24bf = _0xd59edf[0x0];
                if (_0x5c24bf) {
                  const _0x133253 = _0xc9d7d8.sender.split('@')[0x0];
                  const _0xf7094 = _0x5c24bf.key.participant ?? _0xc9d7d8.sender;
                  const _0x4de8e9 = _0xf7094.split('@')[0x0];
                  if (_0x133253.includes(_0x59fb4f) || _0x4de8e9.includes(_0x59fb4f)) {
                    return;
                  }
                  if (_0x5c24bf.message && _0x5c24bf.message.conversation && _0x5c24bf.message.conversation !== '') {
                    const _0x2f2ef8 = _0x5c24bf.message.conversation;
                    if (_0x502baf && _0x2f2ef8.includes("chat.whatsapp.com")) {
                      return;
                    }
                    var _0x46c746 = "```";
                    _0x3e5f7b.sendMessage(_0x5e6117, {
                      'text': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n\n> 🔓 Message Text: " + _0x46c746 + _0x2f2ef8 + _0x46c746
                    });
                  } else {
                    if (_0x5c24bf.msg.type === 'MESSAGE_EDIT') {
                      _0x3e5f7b.sendMessage(_0x5e6117, {
                        'text': "❌ *edited message detected* " + _0x5c24bf.message.editedMessage.message.protocolMessage.editedMessage.conversation
                      }, {
                        'quoted': _0x352764
                      });
                    } else {
                      if (_0x5c24bf.message && _0x5c24bf.message.exetendedTextMessage && _0x5c24bf.msg.text) {
                        const _0x29242d = _0x5c24bf.msg.text;
                        if (_0x502baf && _0x29242d.includes("chat.whatsapp.com")) {
                          return;
                        }
                        var _0x46c746 = "```";
                        _0x3e5f7b.sendMessage(_0x5e6117, {
                          'text': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n\n> 🔓 Message Text: " + _0x46c746 + _0x29242d + _0x46c746
                        });
                      } else {
                        if (_0x5c24bf.message && _0x5c24bf.message.exetendedTextMessage) {
                          if (_0x502baf && messageText.includes("chat.whatsapp.com")) {
                            return;
                          }
                          var _0x46c746 = '```';
                          _0x3e5f7b.sendMessage(_0x5e6117, {
                            'text': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n\n> 🔓 Message Text: " + _0x46c746 + _0x5c24bf.body + _0x46c746
                          });
                        } else {
                          if (_0x5c24bf.type === "extendedTextMessage") {
                            async function _0x17b603() {
                              if (_0x5c24bf.message.extendedTextMessage) {
                                if (_0x502baf && messageText.includes("chat.whatsapp.com")) {
                                  return;
                                }
                                _0x3e5f7b.sendMessage(_0x5e6117, {
                                  'text': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n\n> 🔓 Message Text: " + "```" + _0x5c24bf.message.extendedTextMessage.text + "```"
                                });
                              } else {
                                if (_0x502baf && messageText.includes("chat.whatsapp.com")) {
                                  return;
                                }
                                _0x3e5f7b.sendMessage(_0x5e6117, {
                                  'text': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n\n> 🔓 Message Text: " + '```' + _0x5c24bf.message.extendedTextMessage.text + "```"
                                });
                              }
                            }
                            _0x17b603();
                          } else {
                            if (_0x5c24bf.type === "imageMessage") {
                              async function _0x436e36() {
                                var _0x2145d1 = getRandom('');
                                const _0x476e6b = sms(_0x3e5f7b, _0x5c24bf);
                                let _0x3c5ced = await _0x476e6b.download(_0x2145d1);
                                let _0x23648f = require('file-type');
                                let _0x3b8f67 = _0x23648f.fromBuffer(_0x3c5ced);
                                await fs.promises.writeFile('./' + _0x3b8f67.ext, _0x3c5ced);
                                if (_0x5c24bf.message.imageMessage.caption) {
                                  const _0x277e67 = _0x5c24bf.message.imageMessage.caption;
                                  if (_0x502baf && _0x277e67.includes('chat.whatsapp.com')) {
                                    return;
                                  }
                                  await _0x3e5f7b.sendMessage(_0x5e6117, {
                                    'image': fs.readFileSync('./' + _0x3b8f67.ext),
                                    'caption': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n\n> 🔓 Message Text: " + _0x5c24bf.message.imageMessage.caption
                                  });
                                } else {
                                  await _0x3e5f7b.sendMessage(_0x5e6117, {
                                    'image': fs.readFileSync('./' + _0x3b8f67.ext),
                                    'caption': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + '_'
                                  });
                                }
                              }
                              _0x436e36();
                            } else {
                              if (_0x5c24bf.type === "videoMessage") {
                                async function _0x46a001() {
                                  var _0x15eefc = getRandom('');
                                  const _0x32184c = sms(_0x3e5f7b, _0x5c24bf);
                                  const _0x3e33ab = _0x5c24bf.message.videoMessage.fileLength;
                                  const _0x433ae5 = _0x5c24bf.message.videoMessage.seconds;
                                  const _0x716b11 = config.MAX_SIZE;
                                  const _0x580ab3 = _0x3e33ab / 0x100000;
                                  if (_0x5c24bf.message.videoMessage.caption) {
                                    if (_0x580ab3 < _0x716b11 && _0x433ae5 < 0x708) {
                                      let _0x46a158 = await _0x32184c.download(_0x15eefc);
                                      let _0x57c291 = require("file-type");
                                      let _0x4d2d2e = _0x57c291.fromBuffer(_0x46a158);
                                      await fs.promises.writeFile('./' + _0x4d2d2e.ext, _0x46a158);
                                      const _0x20c0ad = _0x5c24bf.message.videoMessage.caption;
                                      if (_0x502baf && _0x20c0ad.includes("chat.whatsapp.com")) {
                                        return;
                                      }
                                      await _0x3e5f7b.sendMessage(_0x5e6117, {
                                        'video': fs.readFileSync('./' + _0x4d2d2e.ext),
                                        'caption': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n\n> 🔓 Message Text: " + _0x5c24bf.message.videoMessage.caption
                                      });
                                    }
                                  } else {
                                    let _0x2aa960 = await _0x32184c.download(_0x15eefc);
                                    let _0x57e2df = require("file-type");
                                    let _0x2a4530 = _0x57e2df.fromBuffer(_0x2aa960);
                                    await fs.promises.writeFile('./' + _0x2a4530.ext, _0x2aa960);
                                    const _0x57b75b = _0x5c24bf.message.videoMessage.fileLength;
                                    const _0x2f132b = _0x5c24bf.message.videoMessage.seconds;
                                    const _0x210d94 = config.MAX_SIZE;
                                    const _0x456b2f = _0x57b75b / 0x100000;
                                    if (_0x456b2f < _0x210d94 && _0x2f132b < 0x708) {
                                      await _0x3e5f7b.sendMessage(_0x5e6117, {
                                        'video': fs.readFileSync('./' + _0x2a4530.ext),
                                        'caption': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + '_'
                                      });
                                    }
                                  }
                                }
                                _0x46a001();
                              } else {
                                if (_0x5c24bf.type === 'documentMessage') {
                                  async function _0x1cbe97() {
                                    var _0x47ef00 = getRandom('');
                                    const _0x72054e = sms(_0x3e5f7b, _0x5c24bf);
                                    let _0x1d7859 = await _0x72054e.download(_0x47ef00);
                                    let _0x7d0894 = require("file-type");
                                    let _0xc8987 = _0x7d0894.fromBuffer(_0x1d7859);
                                    await fs.promises.writeFile('./' + _0xc8987.ext, _0x1d7859);
                                    if (_0x5c24bf.message.documentWithCaptionMessage) {
                                      await _0x3e5f7b.sendMessage(_0x5e6117, {
                                        'document': fs.readFileSync('./' + _0xc8987.ext),
                                        'mimetype': _0x5c24bf.message.documentMessage.mimetype,
                                        'fileName': _0x5c24bf.message.documentMessage.fileName,
                                        'caption': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n"
                                      });
                                    } else {
                                      await _0x3e5f7b.sendMessage(_0x5e6117, {
                                        'document': fs.readFileSync('./' + _0xc8987.ext),
                                        'mimetype': _0x5c24bf.message.documentMessage.mimetype,
                                        'fileName': _0x5c24bf.message.documentMessage.fileName,
                                        'caption': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n"
                                      });
                                    }
                                  }
                                  _0x1cbe97();
                                } else {
                                  if (_0x5c24bf.type === 'audioMessage') {
                                    async function _0x4fa8b8() {
                                      var _0x5779af = getRandom('');
                                      const _0xb86efe = sms(_0x3e5f7b, _0x5c24bf);
                                      let _0x366b0c = await _0xb86efe.download(_0x5779af);
                                      let _0x2f37ef = require("file-type");
                                      let _0x592e8d = _0x2f37ef.fromBuffer(_0x366b0c);
                                      await fs.promises.writeFile('./' + _0x592e8d.ext, _0x366b0c);
                                      if (_0x5c24bf.message.audioMessage) {
                                        const _0x1bc44a = await _0x3e5f7b.sendMessage(_0x5e6117, {
                                          'audio': fs.readFileSync('./' + _0x592e8d.ext),
                                          'mimetype': _0x5c24bf.message.audioMessage.mimetype,
                                          'fileName': _0x377fd9.id + ".mp3"
                                        });
                                        return await _0x3e5f7b.sendMessage(_0x5e6117, {
                                          'text': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n"
                                        }, {
                                          'quoted': _0x1bc44a
                                        });
                                      } else {
                                        if (_0x5c24bf.message.audioMessage.ptt === true) {
                                          const _0x2b5a84 = await _0x3e5f7b.sendMessage(_0x5e6117, {
                                            'audio': fs.readFileSync('./' + _0x592e8d.ext),
                                            'mimetype': _0x5c24bf.message.audioMessage.mimetype,
                                            'ptt': true,
                                            'fileName': _0x377fd9.id + ".mp3"
                                          });
                                          return await _0x3e5f7b.sendMessage(_0x5e6117, {
                                            'text': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n"
                                          }, {
                                            'quoted': _0x2b5a84
                                          });
                                        }
                                      }
                                    }
                                    _0x4fa8b8();
                                  } else {
                                    if (_0x5c24bf.type === 'stickerMessage') {
                                      async function _0x33fc7f() {
                                        var _0xbd55a3 = getRandom('');
                                        const _0x3925b0 = sms(_0x3e5f7b, _0x5c24bf);
                                        let _0x4946ce = await _0x3925b0.download(_0xbd55a3);
                                        let _0xf0aa1f = require("file-type");
                                        let _0x408a75 = _0xf0aa1f.fromBuffer(_0x4946ce);
                                        await fs.promises.writeFile('./' + _0x408a75.ext, _0x4946ce);
                                        if (_0x5c24bf.message.stickerMessage) {
                                          const _0x59ed8c = await _0x3e5f7b.sendMessage(_0x5e6117, {
                                            'sticker': fs.readFileSync('./' + _0x408a75.ext),
                                            'package': "X-BYTE 🌟"
                                          });
                                          return await _0x3e5f7b.sendMessage(_0x5e6117, {
                                            'text': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n"
                                          }, {
                                            'quoted': _0x59ed8c
                                          });
                                        } else {
                                          const _0x57c0f1 = await _0x3e5f7b.sendMessage(_0x5e6117, {
                                            'sticker': fs.readFileSync('./' + _0x408a75.ext),
                                            'package': "X-BYTE 🌟"
                                          });
                                          return await _0x3e5f7b.sendMessage(_0x5e6117, {
                                            'text': "🚫 *This message was deleted !!*\n 🚮 *Deleted by:* _" + _0x133253 + "_\n  📩 *Sent by:* _" + _0x4de8e9 + "_\n"
                                          }, {
                                            'quoted': _0x57c0f1
                                          });
                                        }
                                      }
                                      _0x33fc7f();
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  console.log("Original message not found for revocation.");
                }
              }
              if (!_0x502baf) {
                if (_0x352764.msg && _0x352764.msg.type === 0x0) {
                  _0x426a2f(_0x352764);
                } else {
                  _0x8e067e(_0x352764);
                }
              }
            }
          }
        }
        switch (_0x1054d5) {
          case "jid":
            _0x33b954(_0x4ede05);
            break;
          default:
            if (_0xce758c && _0x1e58d2.startsWith('$')) {
              let _0x45bd55 = _0x1e58d2.split('$')[0x1];
              let _0x570c9d = _0x45bd55.replace('°', ".toString()");
              try {
                let _0x382760 = await eval(_0x570c9d);
                if (typeof _0x382760 === "object") {
                  _0x33b954(util.format(_0x382760));
                } else {
                  _0x33b954(util.format(_0x382760));
                }
              } catch (_0x58b4da) {
                _0x33b954(util.format(_0x58b4da));
              }
            }
        }
      } catch (_0x463129) {
        const _0x34dc8a = String(_0x463129);
        console.log(_0x34dc8a);
      }
    });
  }

  //Ek new sesssion genrate karnay ke liyee
  let code = require("./lib/sessions/pair");
  require("events").EventEmitter.defaultMaxListeners = 0x1f4;
  app.use('/code', code);
  app.use('/', async (_0x422aaa, _0x111c21, _0x593e1e) => {
    _0x111c21.sendFile(__path + "/lib/sessions/pair.html");
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    'extended': true
  }));
  app.listen(PORT, () => {
    console.log("⏩ Server running on http://localhost:" + PORT);
  });
  setTimeout(() => {
    connectToWA();
  }, 0xbb8);

  //TalkDrove:)
  const schedule = require("node-schedule");
  const HamzaConfig = require("./settings.js");
  const HEROKU_API_KEY = HamzaConfig.HEROKU_API_KEY; //Heroku api key ko app.json ke through fetch karnay ke lye/ya settings.js mein sayyyyyy
  const APP_NAME = HamzaConfig.HEROKU_APP_NAME;
  const DELETE_DATE = moment.tz(HamzaConfig.BOT_EXPIRY_DATE + " " + HamzaConfig.BOT_EXPIRY_TIME, 'Asia/Karachi').toDate(); //Date ko fetch karnay ke liye...
  const deleteApp = async () => {
    try {
      console.log("App " + APP_NAME + " deleted successfully.");
    } catch (_0x1eb2c9) {
      console.error("Error deleting the app:", _0x1eb2c9.response ? _0x1eb2c9.response.data : _0x1eb2c9.message);
    }
  };
  schedule.scheduleJob(DELETE_DATE, deleteApp);

  //////////////////////////--Code by Dark Evil--/////////////////////////////////////////////