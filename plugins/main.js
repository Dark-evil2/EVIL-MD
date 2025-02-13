(function (_0x48c261, _0x212a18) {
    const _0x57e8f8 = _0x48c261();
    while (true) {
      try {
        const _0x5f0c03 = parseInt(_0x65d3(0x3db, 'VO^!')) / 0x1 + parseInt(_0x65d3(0x601, "8[x7")) / 0x2 * (parseInt(_0x65d3(0x5fc, "mq1C")) / 0x3) + parseInt(_0x65d3(0x8de, "kCiQ")) / 0x4 + -parseInt(_0x65d3(0x508, "o%1l")) / 0x5 * (-parseInt(_0x65d3(0x561, ")b[f")) / 0x6) + -parseInt(_0x65d3(0x80b, 'OiR9')) / 0x7 * (-parseInt(_0x65d3(0x89a, 'wwHy')) / 0x8) + parseInt(_0x65d3(0x6f7, 'kCiQ')) / 0x9 + -parseInt(_0x65d3(0x6a2, "p6K[")) / 0xa;
        if (_0x5f0c03 === _0x212a18) {
          break;
        } else {
          _0x57e8f8.push(_0x57e8f8.shift());
        }
      } catch (_0x52d4c5) {
        _0x57e8f8.push(_0x57e8f8.shift());
      }
    }
  })(_0x2810, 0xded07);
  const config = require("../settings");
  const os = require('os');
  const {
    cmd,
    commands
  } = require("../lib/command");
  const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    Func,
    fetchJson
  } = require('../lib/functions');
  const si = require("systeminformation");
  function _0x14fe69(_0x2c746e, _0x5e1302, _0x35a292, _0x49c617, _0x295972) {
    return _0x65d3(_0x295972 - 0xa8, _0x35a292);
  }
  if (config.COMMAND_TYPE === 'button') {
    const _0x360318 = {
      'pattern': "pay",
      'react': '📖',
      'desc': "Get bot's command list.",
      'category': "other",
      'use': ".menu",
      'filename': __filename
    };
    cmd(_0x360318, async (_0x45ef9b, _0x276f0c, _0x500e21, {
      from: _0x35175a,
      prefix: _0x8e5450,
      pushname: _0xa16be7,
      reply: _0x229455
    }) => {
      try {
        const _0x2b5569 = "\nX-BYTE want money from youuuuu".trim();
        const _0x198602 = {
          'showAdAttribution': true
        };
        const _0x59a099 = {
          'externalAdReply': _0x198602
        };
        const _0x306388 = {
          'text': _0x2b5569,
          'contextInfo': _0x59a099
        };
        const _0x1a2b39 = {
          'extendedTextMessage': _0x306388
        };
        await _0x45ef9b.relayMessage(_0x500e21.chat, {
          'requestPaymentMessage': {
            'currencyCodeIso4217': "Rupee",
            'amount1000': 0x2710,
            'requestFrom': _0x500e21.sender,
            'noteMessage': _0x1a2b39
          }
        }, {});
      } catch (_0x4b8fe1) {
        console.error(_0x4b8fe1);
        await _0x229455("An error occurred while fetching repository information.");
      }
    });
    const _0x2272e9 = {
      'pattern': "menu2",
      'react': "2️⃣",
      'alias': ["panel", "buttons", 'commands', "cmd"],
      'desc': "Get bot's buttoned version commands list.",
      'category': "main",
      'use': '.menu2',
      'filename': __filename
    };
    cmd(_0x2272e9, async (_0x50b73f, _0x430f4f, _0x15cbe5, {
      from: _0x1af0e6,
      prefix: _0x5314c0,
      pushname: _0xe741bf,
      reply: _0x59a3e5
    }) => {
      try {
        if (os.hostname().length == 0xc) {
          hostname = "replit";
        } else if (os.hostname().length == 0x24) {
          hostname = "heroku";
        } else if (os.hostname().length == 0x8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
        const _0x42f5b5 = "```👋 Hello " + _0xe741bf + "```" + "\n\n╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ* ❯═───\n│ *𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* " + require('../package.json').version + "\n│ *𝙈𝙀𝙈𝙊𝙍𝙔:* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n│ *𝙍𝙐𝙉𝙏𝙄𝙈𝙀:* " + runtime(process.uptime()) + "\n│ *𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈:* " + hostname + "\n╰━━━━━━━━━━━━━━━┈⊷";
        const _0x1f5cb2 = [];
        const _0x15a630 = new Map();
        for (let _0x3c924a = 0x0; _0x3c924a < commands.length; _0x3c924a++) {
          const _0x416684 = commands[_0x3c924a];
          if (!_0x416684.dontAddCommandList && _0x416684.pattern !== undefined) {
            const _0x455137 = _0x416684.category.toUpperCase();
            if (!_0x15a630.has(_0x455137)) {
              _0x1f5cb2.push(_0x455137);
              _0x15a630.set(_0x455137, []);
            }
            _0x15a630.get(_0x455137).push(_0x416684.pattern);
          }
        }
        const _0x5b767d = [];
        for (const _0x2352a5 of _0x1f5cb2) {
          const _0x5f5c35 = {
            'header': '',
            'title': _0x2352a5 + " MENU",
            'description': '',
            'id': _0x5314c0 + "category " + _0x2352a5
          };
          _0x5b767d.push(_0x5f5c35);
        }
        const _0x4cbfe0 = {
          'display_text': config.BTN,
          'url': config.BTNURL,
          'merchant_url': config.BTNURL
        };
        let _0x40cdc0 = [{
          'name': 'cta_url',
          'buttonParamsJson': JSON.stringify(_0x4cbfe0)
        }, {
          'name': 'single_select',
          'buttonParamsJson': JSON.stringify({
            'title': "🕳𝐎𝐏𝐄𝐍 𝐁𝐎𝐓 𝐌𝐄𝐍𝐔🕳",
            'sections': [{
              'title': "Please tap here",
              'highlight_label': '𝐃𝐀𝐑𝐊-𝐄𝐕𝐈𝐋',
              'rows': _0x5b767d
            }]
          })
        }];
        const _0x188b28 = {
          'image': config.LOGO,
          'header': '',
          'footer': "*_ᴅᴀʀᴋ-ᴇᴠɪʟ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*",
          'body': _0x42f5b5
        };
        return await _0x50b73f.sendButtonMessage(_0x1af0e6, _0x40cdc0, _0x15cbe5, _0x188b28);
      } catch (_0x595d69) {
        _0x59a3e5("*Error !!*");
        console.log(_0x595d69);
      }
    });
    const _0x1fa9d7 = {
      'pattern': "menu",
      'react': '✅',
      'alias': ["help"],
      'desc': "Get bot's command list.",
      'category': "main",
      'use': ".menu",
      'filename': __filename
    };
    cmd(_0x1fa9d7, async (_0x1845e1, _0x1a6841, _0x13e165, {
      from: _0x2f8f3f,
      prefix: _0x229c1c,
      l: _0x1c619d,
      quoted: _0x47a5b2,
      body: _0x5e7cb0,
      isCmd: _0x4d35e7,
      command: _0x35222d,
      args: _0x55de59,
      q: _0x576416,
      isGroup: _0x3d3cbc,
      sender: _0x536751,
      senderNumber: _0x2ef2f1,
      botNumber2: _0x24dad8,
      botNumber: _0x59a074,
      pushname: _0x22181f,
      isMe: _0x5a236a,
      isOwner: _0x11febb,
      groupMetadata: _0x296599,
      groupName: _0x341347,
      participants: _0x39bf80,
      groupAdmins: _0x513c25,
      isBotAdmins: _0x57b6a4,
      isAdmins: _0x7a25f7,
      reply: _0x37c4ad
    }) => {
      try {
        let _0x51250b = '';
        for (let _0x116982 = 0x0; _0x116982 < commands.length; _0x116982++) {
          if (commands[_0x116982].category === 'download') {
            if (!commands[_0x116982].dontAddCommandList) {
              _0x51250b += "*O:* " + commands[_0x116982].pattern + "\n";
            }
          }
        }
        ;
        let _0x224f7f = '';
        for (let _0x1902ef = 0x0; _0x1902ef < commands.length; _0x1902ef++) {
          if (commands[_0x1902ef].category === 'search') {
            if (!commands[_0x1902ef].dontAddCommandList) {
              _0x224f7f += "*O:* " + commands[_0x1902ef].pattern + "\n";
            }
          }
        }
        ;
        let _0x2d05e5 = '';
        for (let _0x6140fb = 0x0; _0x6140fb < commands.length; _0x6140fb++) {
          if (commands[_0x6140fb].category === "convert") {
            if (!commands[_0x6140fb].dontAddCommandList) {
              _0x2d05e5 += "*O:* " + commands[_0x6140fb].pattern + "\n";
            }
          }
        }
        ;
        let _0x3468d0 = '';
        for (let _0x3a9c03 = 0x0; _0x3a9c03 < commands.length; _0x3a9c03++) {
          if (commands[_0x3a9c03].category === "logo") {
            if (!commands[_0x3a9c03].dontAddCommandList) {
              _0x3468d0 += "*O:* " + commands[_0x3a9c03].pattern + "\n";
            }
          }
        }
        ;
        let _0x2bd71b = '';
        for (let _0x3e5ccc = 0x0; _0x3e5ccc < commands.length; _0x3e5ccc++) {
          if (commands[_0x3e5ccc].category === "main") {
            if (!commands[_0x3e5ccc].dontAddCommandList) {
              _0x2bd71b += "*O:* " + commands[_0x3e5ccc].pattern + "\n";
            }
          }
        }
        ;
        let _0x55366b = '';
        for (let _0x22d167 = 0x0; _0x22d167 < commands.length; _0x22d167++) {
          if (commands[_0x22d167].category === 'group') {
            if (!commands[_0x22d167].dontAddCommandList) {
              _0x55366b += "*O:* " + commands[_0x22d167].pattern + "\n";
            }
          }
        }
        ;
        let _0x46b7eb = '';
        for (let _0x57c2e7 = 0x0; _0x57c2e7 < commands.length; _0x57c2e7++) {
          if (commands[_0x57c2e7].category === "bug") {
            if (!commands[_0x57c2e7].dontAddCommandList) {
              _0x46b7eb += "*O:* " + commands[_0x57c2e7].pattern + "\n";
            }
          }
        }
        ;
        let _0xce86af = '';
        for (let _0x3e62ad = 0x0; _0x3e62ad < commands.length; _0x3e62ad++) {
          if (commands[_0x3e62ad].category === "movie") {
            if (!commands[_0x3e62ad].dontAddCommandList) {
              _0xce86af += "*O:* " + commands[_0x3e62ad].pattern + "\n";
            }
          }
        }
        ;
        let _0x471d4f = '';
        for (let _0x4de587 = 0x0; _0x4de587 < commands.length; _0x4de587++) {
          if (commands[_0x4de587].category === "other") {
            if (!commands[_0x4de587].dontAddCommandList) {
              _0x471d4f += "*O:* " + commands[_0x4de587].pattern + "\n";
            }
          }
        }
        ;
        let _0x4ace9b = "*╭─  *ᴅᴀʀᴋ-ᴇᴠɪʟ ᴍᴇɴᴜ* \n*│RUN TIME -* " + runtime(process.uptime()) + " \n*│RAM USEAGE -* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n*╰──────────►*\n*𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎:*\n> *╭──────────►*\n> *│𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*\n> *│   ───────*\n\n" + _0x51250b + "**\n> *╭──────────►*\n> *│𝐒𝐄𝐀𝐑𝐂𝐇 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*\n> *│   ───────*\n\n" + _0x224f7f + "**\n\n> *╭──────────►*\n> *│𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*\n> *│   ───────*\n\n" + _0x2d05e5 + "**\n\n> *╭──────────►*\n> *│𝐋𝐎𝐆𝐎 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*\n> *│   ───────*\n\n" + _0x3468d0 + "**\n\n> *╭──────────►*\n> *│𝐌𝐀𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*\n> *│   ───────*\n\n" + _0x2bd71b + "**\n\n> *╭──────────►*\n> *│𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*\n> *│   ───────*\n\n" + _0x55366b + "**\n\n> *╭──────────►*\n> *│𝐁𝐔𝐆 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*\n> *│   ───────*\n\n" + _0x46b7eb + "**\n\n> *╭──────────►*\n> *│𝐌𝐎𝐕𝐈𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*\n> *│   ───────*\n\n" + _0xce86af + "**\n\n> *╭──────────►*\n> *│𝐎𝐓𝐇𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*\n> *│   ───────*\n\n" + _0x471d4f + "**\t\n\nᴅᴀʀᴋ-ᴇᴠɪʟ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ";
        const _0xf4625f = {
          'display_text': config.BTN,
          'url': config.BTNURL,
          'merchant_url': config.BTNURL
        };
        let _0x2c1cab = [{
          'name': 'cta_url',
          'buttonParamsJson': JSON.stringify(_0xf4625f)
        }];
        const _0x3e77d6 = {
          'image': config.LOGO,
          'header': '',
          'footer': config.FOOTER,
          'body': _0x4ace9b
        };
        return await _0x1845e1.sendButtonMessage(_0x2f8f3f, _0x2c1cab, _0x13e165, _0x3e77d6);
      } catch (_0x4e1be3) {
        _0x37c4ad("*ERROR !!*");
        console.log(_0x4e1be3);
      }
    });
    const _0x759198 = {
      'pattern': "category",
      'dontAddCommandList': true,
      'filename': __filename
    };
    cmd(_0x759198, async (_0x3a7237, _0x5cddc5, _0x331c42, {
      from: _0x4579d5,
      q: _0x57a6f4,
      reply: _0x556f7f
    }) => {
      try {
        const _0x1d045c = _0x57a6f4.trim().toUpperCase();
        let _0x4061b1 = "*◈╾──────" + _0x1d045c + "𝐒𝐔𝐁 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓──────╼◈*\n\n> sᴇʟᴇᴄᴛ ʏᴏᴜ ᴡᴀɴᴛ ᴄᴏᴍᴍᴀɴᴅ ᴛʏᴘᴇ ᴀɴᴅ ᴇɴᴊᴏʏ ᴅᴀʀᴋ-ᴇᴠɪʟ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ\n\n";
        for (let _0x5619d5 = 0x0; _0x5619d5 < commands.length; _0x5619d5++) {
          const _0x3f709c = commands[_0x5619d5];
          if (_0x3f709c.category.toUpperCase() === _0x1d045c) {
            _0x4061b1 += "╭────────►\n│ • *" + _0x3f709c.pattern + "* \n╰────────────────────►\n";
          }
        }
        _0x4061b1 += "\n*Tᴏᴛᴀʟ Cᴏᴍᴍᴀɴᴅs Lɪsᴛ " + _0x1d045c + "*: " + commands.filter(_0x3f051f => _0x3f051f.category.toUpperCase() === _0x1d045c).length + "\n\n" + "*_ᴅᴀʀᴋ-ᴇᴠɪʟ_*\n*_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*";
        const _0x3ba5dd = {
          'newsletterJid': "120363252060326102@newsletter",
          'serverMessageId': 0x7f
        };
        const _0x142a5b = {
          'title': "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ",
          'body': "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
          'mediaType': 0x1,
          'sourceUrl': "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w",
          'thumbnailUrl': config.LOGO,
          'renderLargerThumbnail': true,
          'showAdAttribution': false
        };
        const _0x646afb = {
          'mentionedJid': [''],
          'groupMentions': [],
          'forwardingScore': 0x457,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': _0x3ba5dd,
          'externalAdReply': _0x142a5b
        };
        const _0xdc6eae = {
          'text': _0x4061b1,
          'contextInfo': _0x646afb
        };
        const _0x1127a0 = {
          'quoted': _0x5cddc5
        };
        await _0x3a7237.sendMessage(_0x4579d5, _0xdc6eae, _0x1127a0);
      } catch (_0x305396) {
        _0x556f7f("*Error !!*");
        console.log(_0x305396);
      }
    });
    const HamzaUptime = {
      'pattern': 'runtime',
      'react': '🤖',
      'alias': ["uptime", 'runntime'],
      'desc': "check bot runtime/Uptime.",
      'category': "main",
      'use': ".alive",
      'filename': __filename
    };
    cmd(HamzaUptime, async (_0x12be61, _0x33249d, _0x4cb0a2, {
      from: _0x2c5397,
      prefix: _0x5304ee,
      l: _0x186d0d,
      quoted: _0x11b916,
      body: _0x3319a7,
      isCmd: _0x3ac1f5,
      command: _0x2d1a68,
      args: _0x52c002,
      q: _0x3769dd,
      isGroup: _0x483379,
      sender: _0x5f23b1,
      senderNumber: _0x1a303e,
      botNumber2: _0x1cde96,
      botNumber: _0x10323f,
      pushname: _0xd7d045,
      isMe: _0x3a9a51,
      isOwner: _0x286f2a,
      groupMetadata: _0x2f9966,
      groupName: _0x4267d6,
      participants: _0x297487,
      groupAdmins: _0xb5ace2,
      isBotAdmins: _0x947ea6,
      isAdmins: _0xb51a6d,
      reply: _0x259b4b
    }) => {
      try {
        if (os.hostname().length == 0xc) {
          hostname = "replit";
        } else if (os.hostname().length == 0x24) {
          hostname = "heroku";
        } else if (os.hostname().length == 0x8) {
          hostname = 'koyeb';
        } else {
          hostname = os.hostname();
        }
        const _0x242cb2 = "*_ᴅᴀʀᴋ-ᴇᴠɪʟ ʀᴜɴɴɪɴɢ ғᴏʀ_* " + runtime(process.uptime());
        -NaN;
        const _0x3a025e = {
          'display_text': config.BTN,
          'url': config.BTNURL,
          'merchant_url': config.BTNURL
        };
        let _0x28b329 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x3a025e)
        }, {
          'name': 'quick_reply',
          'buttonParamsJson': JSON.stringify({
            'display_text': "ɢᴇᴛ ᴍᴇɴᴜ",
            'id': _0x5304ee + "menu"
          })
        }];
        const _0x444e6d = {
          'image': config.LOGO,
          'header': '',
          'footer': config.FOOTER,
          'body': _0x242cb2
        };
        return await _0x12be61.sendButtonMessage(_0x2c5397, _0x28b329, _0x4cb0a2, _0x444e6d);
      } catch (_0x51401f) {
        _0x259b4b("*Error !!*");
        console.log(_0x51401f);
      }
    });
    const _0x258102 = {
      'pattern': "alive",
      'react': '🤖',
      'desc': "Check bot online or no.",
      'category': "main",
      'use': ".alive",
      'filename': __filename
    };
    cmd(_0x258102, async (_0x20c949, _0x170527, _0x2f953a, {
      from: _0x36fa08,
      prefix: _0x5d74ab,
      l: _0xd8c8ac,
      quoted: _0x34a591,
      body: _0xcee999,
      isCmd: _0x3c7e83,
      command: _0x29d4b4,
      args: _0x5eab32,
      q: _0x4c7e06,
      isGroup: _0x1c4c02,
      sender: _0xbeddd9,
      senderNumber: _0x2add91,
      botNumber2: _0x441bc5,
      botNumber: _0x23ba6b,
      pushname: _0x2269cc,
      isMe: _0x2ebfdd,
      isOwner: _0x4bf880,
      groupMetadata: _0x11b339,
      groupName: _0x4a84e6,
      participants: _0xd3a981,
      groupAdmins: _0x3af00d,
      isBotAdmins: _0x5dcd67,
      isAdmins: _0x50515a,
      reply: _0x481b8e
    }) => {
      try {
        if (os.hostname().length == 0xc) {
          hostname = "replit";
        } else if (os.hostname().length == 0x24) {
          hostname = "heroku";
        } else if (os.hostname().length == 0x8) {
          hostname = 'koyeb';
        } else {
          hostname = os.hostname();
        }
        const _0x2b5d2a = "```👋 ʜɪ " + _0x2269cc + " ɪ'ᴍ ᴀʟɪᴠᴇ ɴᴏᴡ" + "```" + "\n\n*ɪ'ᴍ ᴅᴀʀᴋ-ᴇᴠɪʟ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ 🤖*\n    \n> *ᴠᴇʀsɪᴏɴ:* " + require('../package.json').version + "\n> *ᴍᴇᴍᴏʀʏ:* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n> *ʀᴜɴᴛɪᴍᴇ:* " + runtime(process.uptime()) + "\n> *ᴘʟᴀᴛғᴏʀᴍ:* " + hostname + "\n*ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ*";
        const _0x1ce6af = {
          'display_text': config.BTN,
          'url': config.BTNURL,
          'merchant_url': config.BTNURL
        };
        let _0x192313 = [{
          'name': 'cta_url',
          'buttonParamsJson': JSON.stringify(_0x1ce6af)
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ᴏᴘᴇɴ ᴍᴇɴᴜ",
            'id': _0x5d74ab + "menu"
          })
        }];
        const _0x412911 = {
          'image': config.LOGO,
          'header': '',
          'footer': config.FOOTER,
          'body': _0x2b5d2a
        };
        return await _0x20c949.sendButtonMessage(_0x36fa08, _0x192313, _0x2f953a, _0x412911);
      } catch (_0x11acf9) {
        _0x481b8e("*Error !!*");
        console.log(_0x11acf9);
      }
    });
    const _0x5344f3 = {
      'pattern': 'sc',
      'react': "🗃️",
      'alias': ["repo", "script", 'status'],
      'desc': "Get bot's command list.",
      'category': "main",
      'use': '.sc',
      'filename': __filename
    };
    cmd(_0x5344f3, async (_0x4260e9, _0x154ce6, _0x3e76a8, {
      from: _0x27c70b,
      prefix: _0x14d077,
      l: _0x41af0d,
      quoted: _0x26228e,
      body: _0x17b2e0,
      isCmd: _0x2ceca4,
      command: _0x207c52,
      args: _0x5b900b,
      q: _0x2477b9,
      isGroup: _0x19448d,
      sender: _0x83aa36,
      senderNumber: _0x1adfc9,
      botNumber2: _0x49e505,
      botNumber: _0x39be84,
      pushname: _0x79e700,
      isMe: _0x563e72,
      isOwner: _0x56f7ed,
      groupMetadata: _0x39f1a1,
      groupName: _0xffa16b,
      participants: _0x1a7c06,
      groupAdmins: _0x1c775f,
      isBotAdmins: _0x3161e9,
      isAdmins: _0x430d37,
      reply: _0x1c972b
    }) => {
      try {
        if (os.hostname().length == 0xc) {
          hostname = "replit";
        } else if (os.hostname().length == 0x24) {
          hostname = "heroku";
        } else if (os.hostname().length == 0x8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
        const _0x5c209f = "```👋 ʜɪ " + _0x79e700 + '```' + "\n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴅ ɪs ᴀ ᴄᴏᴏʟ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ ᴛᴏ ᴅᴏ ᴇᴠᴇʀʏᴛʜɪɴɢ ᴛʜᴀᴛ ɪs ᴘᴏssɪʙʟᴇ ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ.*\n  \n> *ᴠᴇʀsɪᴏɴ:* " + require('../package.json').version + "\n> *ᴍᴇᴍᴏʀʏ:* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n> *ʀᴜɴᴛɪᴍᴇ:* " + runtime(process.uptime()) + "\n> *ᴘʟᴀᴛғᴏʀᴍ:* " + hostname + "\nʏᴏᴜ ᴄᴀɴ ɢᴇᴛ ᴅᴀʀᴋ-ᴇᴠɪʟ ғᴏʀ ғʀᴇᴇ, ғᴏʟʟᴏᴡ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ ғᴏʀ ᴍᴏʀᴇ ᴜᴘᴅᴀᴛᴇs ";
        let _0x4658c8 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ғᴏʟʟᴏᴡ ᴜs",
            'url': "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w",
            'merchant_url': "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ғʙ ᴘʀᴏғɪʟᴇ",
            'url': "https://www.facebook.com/rahmanullah.official",
            'merchant_url': "https://www.facebook.com/rahmanullah.official"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ",
            'url': "https://wa.me/923319709781",
            'merchant_url': "https://wa.me/923319709781"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ᴅᴀʀᴋ-ᴇᴠɪʟ ɢᴄ",
            'url': "https://chat.whatsapp.com/JvaJHe9m6N6CMWqTRSAcbp",
            'merchant_url': 'https://chat.whatsapp.com/JvaJHe9m6N6CMWqTRSAcbp'
          })
        }, {
          'name': 'cta_url',
          'buttonParamsJson': JSON.stringify({
            'display_text': "ʙᴏᴛ sᴄʀɪᴘᴛ",
            'url': 'https://github.com/Dark-evil2/DARK-EVIL',
            'merchant_url': 'https://github.com/Dark-evil2/DARK-EVIL'
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ʙᴏᴛ ᴍᴇɴᴜ",
            'id': _0x14d077 + "menu"
          })
        }];
        const _0x9e84be = {
          'image': config.LOGO,
          'header': '',
          'footer': config.FOOTER,
          'body': _0x5c209f
        };
        return await _0x4260e9.sendButtonMessage(_0x27c70b, _0x4658c8, _0x3e76a8, _0x9e84be);
      } catch (_0x1a0aea) {
        _0x1c972b("*Error !!*");
        console.log(_0x1a0aea);
      }
    });
  }
  function _0x3737b7(_0x1f9e69, _0x5c440f, _0x2cbdf9, _0x38fe15, _0x809247) {
    return _0x65d3(_0x1f9e69 - 0x138, _0x809247);
  }
  const _0x4a4569 = {
    'pattern': 'system',
    'react': "🖥️",
    'alias': ["s_info"],
    'desc': "To Check bot's System information",
    'category': "main",
    'use': '.system',
    'filename': __filename
  };
  cmd(_0x4a4569, async (_0x525f22, _0x18127e, _0x25902a, {
    from: _0x686eb1,
    l: _0x23232e,
    quoted: _0x568fa8,
    body: _0x3451a,
    isCmd: _0x22af40,
    command: _0x578b04,
    args: _0x50efa9,
    q: _0x6f4c92,
    isGroup: _0x2ceaa6,
    sender: _0x436370,
    senderNumber: _0x38b11a,
    botNumber2: _0x33fdd7,
    botNumber: _0x5f00b1,
    pushname: _0x3a0b7d,
    isMe: _0x1062e6,
    isOwner: _0x1e3be3,
    groupMetadata: _0x19946f,
    groupName: _0x356974,
    participants: _0x564d74,
    groupAdmins: _0x4e2058,
    isBotAdmins: _0xc8a8c2,
    isAdmins: _0x10f0da,
    reply: _0x8be997
  }) => {
    try {
      const _0x2a24e9 = await si.cpu();
      const _0x154617 = await si.version();
      let _0x2b3cef = await si.time();
      const _0x48466f = os.hostname();
      let _0x294e37 = await fetchJson("https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/packageForXbyte.json");
      if (_0x48466f.length > 0xf) {
        const _0x119566 = "*𝘿𝙖𝙧𝙠-𝙚𝙫𝙞𝙡 𝙎𝙮𝙩𝙚𝙢 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨*\n\n*_Bot's System informations_*\n\n1.  _Runtime -: " + runtime(process.uptime()) + "_\n2.  _Ram Usage -: " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB_\n3.  _Bot Version -: " + _0x294e37.version + " Stable_\n\n*_Server System informations_*\n\n1.  _Platform : Heroku_\n2.  _Running OS : " + os.platform() + "_\n3.  _CPU Manufacture  -: " + _0x2a24e9.manufacturer + "_\n4.  _CPU Brand -: " + _0x2a24e9.brand + "_\n5.  _CPU Speed -: " + _0x2a24e9.speed + "_\n\n*_System Data Collector Engine_*\n\n1. _Engine Version -: " + _0x154617 + "_\n\n*_Running Server's information_*\n\n1. _Server Time Zone -: " + _0x2b3cef.timezone + "_\n2. _Time Zone Name -: " + _0x2b3cef.timezoneName + '_';
        const _0x5807ed = {
          'text': _0x119566
        };
        const _0x4c5e89 = {
          'quoted': _0x18127e
        };
        return await _0x525f22.sendMessage(_0x686eb1, _0x5807ed, _0x4c5e89);
      }
      const _0x4f6ed5 = "*𝘿𝙖𝙧𝙠-𝙚𝙫𝙞𝙡 𝙎𝙮𝙩𝙚𝙢 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨*\n\n*_Bot's System informations_*\n\n1.  _Runtime -: " + runtime(process.uptime()) + "_\n2.  _Ram Usage -: " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB_\n3.  _Bot Version -: " + _0x294e37.version + " Stable_\n\n*_Server System informations_*\n\n1.  _Platform : " + _0x48466f + "_\n2.  _Running OS : " + os.platform() + "_\n3.  _CPU Manufacture  -: " + _0x2a24e9.manufacturer + "_\n4.  _CPU Brand -: " + _0x2a24e9.brand + "_\n5.  _CPU Speed -: " + _0x2a24e9.speed + "_\n\n*_System Data Collector Engine_*\n\n1. _Engine Version -: " + _0x154617 + "_\n\n*_Running Server's information_*\n\n1. _Server Time Zone -: " + _0x2b3cef.timezone + "_\n2. _Time Zone Name -: " + _0x2b3cef.timezoneName + '_';
      const _0xcee4a5 = {
        'text': _0x4f6ed5
      };
      const _0x2aa5cf = {
        'quoted': _0x18127e
      };
      await _0x525f22.sendMessage(_0x686eb1, _0xcee4a5, _0x2aa5cf);
    } catch (_0x339e2e) {
      _0x8be997("*Error !!*");
      _0x23232e(_0x339e2e);
    }
  });
  function _0x2810() {
    const _0xf2c55b = ['4PsB4PsA4PEUW51B', "ncZdSCkoWO4", "W6zqofLH", "4BE54BECF8MYYyu", 'fIfJfNq', 'WPNdLG7dJmof', 'WPhcOfbBW5i', "nCovmhed", "4PsY4PArW4lILQvn", "W6m8W7jjCa", "fgJdHSkg", "AUc1QEc3H+c2Ioc2TG", "WPCGWQ3cMwS", '4PEliSkYW73dTa', "8lkRJVc/IA7WU6QLWQvG", "WOddGvC", "WPr0WQqSbW", "WQ5sWRVdKWG", 'h0W5W6DZ', "ggpdKCoFWO4", "W4uwWRq", "4PsK4PwW4PAL4PwG4PEE", 'W4e1W4jUwG', "W7fPqSkplW", "e0W8W5pdOa", 'W47cGSkAWPNdNa', "WQCUpKJdOq", "d8kbja", "W6vFW73dTI4", "4PsQ4Pwd4PwY4PAk4PwT", "WQ3cNWdcTmkv", "hM3dR0VcVq", 'W4fRe1fT', "cviLpNG", "4PAs4PEb4PAK4Pss4PEi", "WPdILPFIL7FILRNILRu", "fCkDF8kSW4q", "WQFdHhBdGmkt", "bduhWO/dNa", "W4/cUq7cQmkk", 'oWRcMmoUlG', "WOrrWR5kW7e", '8jUPKVggURFWQyUY8yoOLVgmQBu', "Bg3cMbfh", "8jwkT/cWI4tXGAQFlSo4", 'tr7dG8oayW', "vKtdQSk+WOW", "W6vfymkbfW", "et4WWOBdIW", "tqtdISolCa", 'W6NdHMZcPrW', 'uvzwW4FcSW', "WP3dNfVdJmoo", "uqpdGa", "vUkvKUkvMEkwNEkwGq", "rCkhW7ZdUCku", "WR8Pf1JdPa", "FupcTSoJW4u", "o0/dHSk3Fa", "oKBcQcPG", "WOrvWR1bW48", 'vNFcMYe/', 'WPGevWSM', "wSoIF8ooWOu", 'ae/cVIP0', "efFdIxZcOG", "4PAtwhbslq", 'oXddJSo9Cq', "h8oLF8ocW7W", "hxhdLg7cOW", 'eguKW5hcPa', "dmoTDa", "CxqMW4hcGq", "rCkyxZja", "FwpcL8ocW6e", "deJdTmo7cG", "8jw3PU+5Vq", "qSklW6xdVCkf", "WOSyk37dNW", "W4nfW4VdUJm", 'W7v9W5tdSI8', "qYNdOSoQwa", "DHHIza", "egu1W7tcNW", "W4xcNNCr", "w30IW7H5", "hMlcGSkOWQO", 'DCkcW68eWR4', "cCknmCkGW6G", "CmoExdr+", 'WPSuWObCW7a', "W7TxkqS", 'l2hcIrzD', "WQmkFqTZ", "D0dcGCk6jW", "W6tcPYBcHmka", "4PsH4PAD4PA14PsL4Ps8", "WQ7dJK0RWQ4", "WPRcQCkwW5tdKa", "W5NcHSkdW5ZdKG", "WPiPomoDWPy", 'uCkZW5CvWOe', "WR7cILGNWOa", "xXzwW5dcOG", "tcZcUCobW7a", "aCkFndrj", "fwxcNZTM", "Dg7dICkeCq", "iCobESoNW78", "WRFcOrtcMCkN", 'g8kqmJqB', "WP/cTMfo", "qrO2nNu", "WReOmxVdHq", "etRdJSoxCq", "C1xdM8o5W4u", "wJXfvhy", "4PwX4Ps44PAF4Pwf4PAS", "c+kvLmkvW5ddMq", "W7FXHlAl77MnW5BdI/cCP6K", 'WPVcJLiYWQC', 'W40aW4P7ta', "W5VcK8o9", "W6VdQghdH8o9", 'DMRcMdGI', "F3xcGmkdea", "hMddO8kuWPy", "WORILlZILP3ILjRILl8", "WRiWfeZdUa", "DWvLyKu", 'W7Pmexfu', 'vMCRW6/dRG', "rh0/W5BcKa", "hMldKmkqWQK", "fSoSEZqi", "WPZcK0jQW5K", "FxRcR0DU", "4PwO4PsN4PAd4PAv4PwM", "nbyMgLO", "uvaFW5BcQW", "aY8lWPpdGG", "WP7cO8oav8ka", "W6ddQMldKSos", "8lgYRmoxW7hdKmky", 'WRm6f1ZdSG', "YlhlUog1G3tHTly", "WRGdeSo3WRW", "WRNcRxrrW6C", "WOZdNeRdH8kk", "et4NWO/dJq", "W6ddMmk9Dmk7", "FHH/yem", "W77cM38tCa", 'WPJcQNu', "W5DlvSkxW5S", "vcOwWOBdJa", "WPWrmgZdHq", "4PAs4PsK4PwD4PEK4PEJ", 'ssWCW7Wi', "ASotv2iM", "WP3dG2iyuGtdRwC", "DZxdVt8H", "W5fAW6xdVqe", '8kwrJ+kcJVc6G53cU+g1P+g0Vog2QG', 'i0FdRSkNW54', "W4npW7xdPW", 'ufFdLSkpqG', '4PAs4PsK4PwD4PsR4PsS', "WO3dNeRdMW", "BSkxWQ98WRC", "W5RcPCo6nSo+", "u2JcNSkAiG", 'W50HW6JcRu0', "bhxcKZ50", "hgNdLCktWRi", '4PE04PEz4PwF4PER4Psf', 'dSkHW7RdVSkj', 'ifpdNuVcOW', 'zCooW6ZcICkE', "WOdcIqJdSxm", 'wIewW4JcGq', "WOpILlGWrby", "WO7cHWJdOvO", "BSk9W5qKWQ8", "ft8AWOldIG", "W5L+fur+", "WPVcMKXwW7q", 'CCkBywBdPq', 'pNyxW4JdKW', "W4CfWQpdHmob", "qmklW6BdUmkN", 'bHK/WRhdRW', "yK3cUdfN", "l2hcKXT+", "W5tcGSkBWPBcHq", 'ld/dQdCg', "WP7cTCkUmSoc", 'a+kwU1PwjW', "W7qepLLj", "aZOFage", "y8oAAcddOq", "tCkxW7W", "cCkGpmkCWRK", "omozvZWn", "ybHWzem", 'p8kEf3H4', "4PAG4Pwm4PAD4PsA4Ps/", "b1xdUG", "cCk3nSkQW4m", "dgBdT8oHfa", 'tCodFSolW7q', 'rrCuc3K', "nb3dRIOR", "WPZdH1ZdI8oe", "fvWtW6v7", "W54lWPJdKmo9", "o0NcM8kvha", 'hKfvhMW', "gCo2yXuj", "W7X1wa", "W4BcG2K", 'lf7cMW', 'ybHHA14', "DmoEtq", "WR7cGeOJWRS", "sX0Efq", "lmkWf8kHW6K", "twNcJW", "WORcLri", 'WQiMhCkAW7u', "g1tdNtX6", "WPqolq", 'pxBdLCoKlW', '4Bsc6PY04BESY4XS', "hM3cLCokWQq", "huJdTuxcVW", "4PwBuKLE", "WOFcVdhcJ8kh", "W6VcNWFcTSkb", 'WRNcIq4WWRK', "WO9DWR9aW60", "xZeE", 'W4RcHSkdW43dKa', "WOxcIrtdSNC", 'WQ3dTe7IL4dXGPAA77Q04Okx4PUy77MJ', "DSk3FHja", "z1dcMc0R", "WO3cIapdTZy", "srxdIa", 'ACkbW6y', "4BsRY7FiTEg3QSot", "hmo+EXua", "WR0EW7pWLOcOW6G", "W7fLW4ldHW4", "W45ICCkOW54", "vMtcKWyN", "4PA/4PEs4PAj4PwA4PAB", "nxRcMIFdRa", "WRFcJGpcPxS", "aCkEoa", "eKm1W5ZdPq", "WPipia", "WRJdKftdOSkN", "YilHTkpHTOpiIKy", "uSkdqvddOq", "weZdKMhcVW", "qfScW5dcRW", "W7zahKrb", "WRjPpevz", "dCo6BHmt", 'uMNcLCojW7a', 'xrP1D1G', "8jE5MVcHURZWPOM0CFc8U5i", "BSosW5aLWR0", "CxFcKMW", "ub/dO8ogAq", 'WPHzWQ3dGqi', "W5jSWRW7fq", "dSoHzCodW74", "WRHOWQNdRYq", "WPdcVrZcHmkN", "EmkAq3FdSW", 'WRWeFxr+', "i1jWtaC", "mIjdzLO", "W7ZcO0i2Aa", "ookwTde9hq", "dmo0C8ojW60", "sGpdQmocxG", "WRtcJ1ONWRS", "lvOqW4NdKW", "W79bmerE", "WOBdUr3cHmk+", 'ofBdL8kpWRG', "ehqJW6NcIa", "WPRdUuNdPCoN", "W7ClW4lcH2C", "W5tdK3/dOCoQ", "fXBdPXKH", 'W47cLCkEW5q', "beWKW6v4", 'BSkFWRL2W64', "E8kBW6uL", "tqJcGZNdUCk0WQtdNmk9nuvM", "dNRcM8kpoW", 'pXC0oLC', "buGhW7Lo", "WPdcTJhcN8kl", "srhdJmob", "ECk7FxpdPW", "B8kgWQ07WQC", "pGSWnvW", "W6lcKbC", "WO4yn2NdKW", "cHJcMYNdPG", 'qZag', "i23cMa", 'W55ZW4/dLt8', "8jQ5IVghQiJWRPQb8kg4SmkD", "WRxdSSkdESkr", "pKxdTSk2WRa", 'W6RdSMddTSom', "at5tWOxdLW", "FhZcSCoQW6a", "W4/cKYtcNmkk", "4OcluLa", "4PA64PEN4Ps44Pw24Psp", 'cSoobdlcIG', "YAliLYRHTjBcNa", "WOxcPWxcK8k2", 'YlBiKmQN4BAK4BAn', "aXHXWQS8", 'D8kTCrvh', "W6xcKrFcTSkA", "WOtcGWddRLS", "xwFcMSojW6e", 'tSoZW4BcTCoz', "qUkxRSkJWQ9m", "kUkwNUkuJUkuKUkwGa", "WPdcS8oD", "jx7dO8k1ta", "bmoZzq", "v27cJSoAW60", "cmoJzq", 'WQFcVdpcJSkP', 'Y53kQUg2JCkZ4Bwg', "cLhdNwdcUa", "W5lcS8oNpG", 'BJJdLCoixW', "rXxcHCoBFG", "vdJdHSoyFa", "kIRdNSoxeG", "W73ILP7ILk7ILylIL5W", "W60bWRNcGmoV", "WOCmn2pdKW", "WRvkWR7dGK0", "W4BcHtCnha", "vG3cGSo1W6i", 'EYJcSCoxW7q', 'eMhdTSknBa', "WRumdmoXtG", "4PsqxteN4Ps3", "WOanW7n+hW", '4Bs14BEF4BsAYjhkOW', 'qSoJECohW7C', 'DCktW6aKWOS', "dSoVFmolW7G", "z8kmW63dR8kn", 'WRuSC8kPgW', 'q0OtW4hcRG', 'd3OAW5pdLa', "gxPaWRjyB2hdJSkyWPWNESor", "f8oinSkQW4m", "uvCt", "kKddJCoIkW", 'WQ3dTetdImou', "EMJdJSkuoq", "4PEJW4XSWO8", "cGeaW6Sd", 'W67cNXdcP8kt', "bCklksDc", "CqdcV8o0lG", "4PAt4PsL4Pwv4OQC", "W5tcJtBcHSkV", "hNRdKmoxWPS", 'xrzwW5hcUq', "nM/cIr5E", "huZdJK3cUW", "a2FdJSkzWPO", "rCo4W4BcIq", "WO3cPmouFSkH", "WRZdRftcQZy", "WPFcGN1gW50", 'pxxdKCoDmG', "rSk6yG1g", 'A3xcNYuH', "W4HoFCk0W78", "WOBcMZFcU8kS", "fY0hWOldNW", "W510WPRdKGm", "zHjeD0C", "4PAp4PAh4Psp4Pw84PwZ", 'WPhcHNxdOCoa', "4Bw4Yj/QNl5A", "WQtcLL4dWOy", "zCk+za9g", '4Psr4PAW4Ps44Psu4Psr', "WRBcGfORWQ8", "WQ/cP+kuJ+kwS+kwVa", "ghVdJW", 'zWvBDg0', "h8oimmk2WOu", "W7NcImkBW5xdKa", "4BER4BA84BsJ4BAV4BAQ", "hwFcKaldHG", "W7D9wSkyW64", 'WRxcJK0YWRi', 'vqitWPBcRG', "dvtdSmo0aq", "WPBcSCo8u8kM", "W7xdOCkUmSoc", "s8oWW5lcVmkq", "ggpcGSktWQS", "pIxIL6VILyZILyW", "h2JdJa", "lLdcR8kpgW", "W5/dOEkwPokuKUkxIa", "gL7dP8k4WRm", "WPxcTZZcJSk5", "W4NdHs/dO8o9", "gghdGmkLvW", 'WQ/dIM7dNCoj', 'W7FdPa5iW7W', "mCoQv3P0", "e8kllqn2", "yCk2Fr4d", "cmksktfn", 'h2RdHmoHhG', "ufddNmoaza", "FcFcQmoFW4G", "WPfeW6G", "WRVcQdRcVCkP", 'k0xdGCk1yG', "FFcJMkeUiH4", "bmojWRlcRa", 'sX7dGmolwW', "W4K/W6K", "WO3cPCobDSkg", "W5BcOCo9", "Af83kc0", "AmkAEMldSW", "gwRdV8kqWRC", "BmkcWQm+WQe", "W51JeGTV", "W6lcJGhdOSkB", 'W5mCn3NdNW', "W63cN8oidSos", "fcZdSEkxNUkwHa", "W4ldHs/cNmkC", "rIyCW60z", "wMjCWPFdMq", "WR5eWQxdIGW", "WOhcTM8YWRe", "4BE4xCUaYOlcLG", 'WPFcHN5nW6m', "DSkllNZdRW", '4PsL4PwX4PAK4PAU4Psq', "WOWinNNdKW", "qSoYW5VcNSkw", "WP3dLK/dGCoE", "W4NILk9gWR88", 'ECo9yNvI', "CgRdHq", 'WPlcSdpcJSkK', "WPeyn2RdGG", "pSorqtuR", "W6BdNb5XW6O", "W7DPymkmcG", "ge03W6NdGa", 'h8oig8kLW5W', "t0FcJIul", "WRXjoevz", "WOZdKLRdH8on", "W7LJqSkCgG", "lSoeWOlcRmoS", 'x37dM8onW6W', "rX/dImocCa", "W6lcJb0", "Emk+Eru", "zqxcMSkJzG", "sWa5W5i8", "W7NcUComi8oA", "y8k6yGHk", "WQxWVQQp8lgRRFc5I7JWM7UC", "W7v+W4pdHHK", "WQtdGa4wWRq", "WPpcSdNcKG", "ASkGW5VcPSoS", "WOZcHWi", 'ffNdJM7cOW', "e3tdKCkEWQu", "sWRcGZJdUa", "W4GPW7XQAG", "qSoeW5tcUmkN", "WP7cH1bnW7W", "hSoYAG", "yL/cVI9N", 'ACkhxhZdHG', "fKO/W79M", "W4uTW7bPhW", 'W5RIL6pILjpILklILPe', 'v3/cJW', "wMpcLCoAW4u", "lv3dJCkDyG", "BCoCW5/cKSkP", "sWtdJCokyW", "WQhdRxZdNmos", 'bZqdWQBdOG', 'nokvTEkxQ+kvJokvJa', 'qmkGksno', "WRNcMX4KW7u", "k8k/td8Q", 'WQHDW7nMW6S', "u23cLCokW4G", "W5FdMtm", "krNdUYeR", "ENFcIW", "WPqFlhNdNW", "mWW3jeG", 'EmkDW60OWO8', "WORcGMDwW7q", "f2RdHW", "WOBcLehdTJy", 'mbxdOIi8', 'aCkxWPxdOmot', "nNZdImk0W48", "WRRcGf4", "WPjfWQ0", 'WPXzW6JdHau', 'W7JcGmo+imoQ', "v3y8W7lcMq", "ymkSDq", "lGW3o1u", "BmkpW77dV8kR", 'WQDUWRddGs8', '4Bw/4BAsl/cJKi/IGRdWQAcT', "WONcONumsG", "WP3WLBo1WRpWR6U58yIRLW", "AokxICoDrrG", 'WRNcJ0CUWOK', "qq/dMwjS", "WO7dGq7dGCoc", 'WPPNW4NcSZW', "8kQjNVc+QApWRRMz8j64VpcZI4u", "W4NcGSkwW4VdLG", "W5/cLConF8kT", "WRlHTjlkRUg3USk8", "4PEV4PAZ4PsU4PAI4PAQ", '4P+BW7rTW6ldLa', "pXCTihO", "WPLvWQDrW6y", "nUg3KUg2G+g1LSQK", "W6HOrSkjW7K", "mCk6gb4X", "FXrLj1G", "WQqOdmkKpq", 'WP8m8jstHZRdLW', "W6XMrSkCW7a", "tCo4W6RdOmo5", "bc4xW6qy", "W4pcVaNdQ3m", "xokxJSkcW4xdQa", 'tJ4BogK', 'WPpcK2DlW74', "s8kwW7e", "WR7cQs/cK8oJ", "WPdcTmkeESkP", "ubJdGmkpCW", "W6hcNNSgDG", "WPlILiSsW5FIJOC", "e3FdRCkYWRe", 'WPZcUcW', "4Bsf4BsbW4VHTzFHTyS", "CCk7uXro", "fImxWP4", "W5dcOmoW", 'W7rYtSkugG', "W6BdQ2RcK8oA", "jZlcSpcDKBFcPG", 'muZdMSkMyW', 'tayocx8', "h3tdLG", "b2jtWRpdKa", "W6dcMWRcTSkD", "WRJIL619eqy", "WOpdLKddHCoE", "WObSWR06hW", 'WP/cPSoOmCo+', "uvHjDde", "bxpdKmkwWQW", "emksktzj", '8ycdNCoOWODhFa', "ifxdS8o4fq", "WPhdVmkMnSoY", "W4mJW7b3xG", "pKJdKCkrrG", "jwZdGmomba", 'h8o0zSoCW6G', "aJS3fva", "EWlcSFgcO4lcHG", 'D8oWCXro', 'W4rSWRaGhW', 'WOXAWQy', 'W7DtlKDj', "4PAP4PEX4Psq4Pw+4Ps8", "W6VcK8odhmop", "4PsaW43dVCkhWPu", "qmkaW4VdO8kl", 'W5ldSSoGnmo9', 'AmkDW4u1WRy', "pbeLlq", 'egxdNG', "DmkxW6i4WQS", "avKKW75Z", "zYrRuw0", 'WOBcLrxdPhe', "WO3cJgfjWRe", 'rSoiW5/cRmk0', 'kq87hvC', "WPVcRSokzSkj", "f0NcL8kxjmkqW6DDWPbrW5xdUCkw", "4PYl8kotP+kbGpcSS4aU4BsY4BA5", "efhdVNZcVq", "WRVdU2VdSmkk", "vmkfW7ZdUmkd", 'Ecr4sf4', "W4NcOZtdL1K", 'r8ofy8ouW7y', "4PsP4PwY4Pw64PwSjW", "umklW47dPCkE", 'WPlcPmoj', "WPpcHXldSxm", '4PwF4PsQ4PA14PsB4PEb', 'W7vOxmkzW5a', "o8k6bJq7", "vmkBjSk3W5e", 'WRlcGfCJWPq', "4BwK4BAy4BslY6ZiKW", "lMxcKXHg", "msddJG", "W4e4W7r1uq", "WQdcIKSKWRW", "kXK3if4", "bNldKCkx", 'WRVcJLa5', "W7dIRRaZcmof", 'oZRdJSoxCq', "WQpdKrPEnG", "4Bw9gmIJYOFdRa", "W4ncW7JdVIK", "huRdUwNcVW", 'k0/dJCkG', 'AcddT+kuJ+kuSG', "WOFcOcZcN8kV", "WR/ILiqmW5To", "W5TpW6pdTd8", "W7BdPrLDW7u", "e8kwoq", "W5mPW7K", "EHvDxu8", "laxdPI4L", 'WOJdPctIM5VVU5pdOq', "aokwILlcSeC", "FZSwW5al", "h009W7JcOq", "cMnsWQPn", "k8k9WR/dISo5", "4Pw44Ps44PA64PEh4Psd", "W5avW75QBG", "a3VdKSkyWPa", "WR7cONq0WPS", "W7/dPNVdH8oz", "4Ok6krG", "bZGbWO7dLG", "4PsC4PEY4PAd4PwC4Psb", "WPpcVrKvWPO", "g3ddHCkSEa", "vMtdISkEWQW", "WORILOxcVsav", "yI3dH18", "qIyEW7O", 'W5rcvmkkna', "WOFdNM7dOSo+", "W7H8y8kzfW", "gfC+WQO7", "BZRdOSoOFa", "bwFdVCkEWOy", "nUkxSpc/LOxIG4pIMk3VU7JcRq8", "osRdTsKV", "rCk9W5NcHCku", 'mXCWifu', "WORcHK3cLSkF", "WObgWR0qhW", "C8oFxg0", 'W5VcISks', 'xvmyW4lcPq', 'eg/cLmodWQS', "WRdcGWRdOhu", "FXX/y3S", "W6T9ha", 'WODqW7naW60', "WO7cJezsW6e", '4PAI4Ps6gW', "W7FcO8kaW5tdTW", "WP56WODPW5S", "WOWseftdHW", "YRJHT6tHTPpQNR3HT6y", "8jI2Oo+7Pezg8y21Pfa", 'W6b1sq', 'y8otAh9c', "bmooW5FdNSkt", "WOGqo2pdLW", "4OoFc8oI", "WR0kWOFcS0e", "4lsyW47GTPJGT7NGTAy", "le/dGq", '8ykjKhmhWOJdRq', 'e8kwmYzU', "W74bWQ7dImkI", "v2pcLCkuWQ4", 'v1dcHw1e', "yGFcICk1Ba", "WOzaW7nZW6y", 'WPpcIePjW6K', 'sdetW6qj', "v8khW7RdPCkw", "jSoUwmoaW7u", 'AexdHmo9wW', "W7noch9Q", "yGRdNxus", 'WP1gWRPi', "WPRcS8oNC8k7", "WRtcUfqbWQq", "qXNdG8ow", 'g8oWyqqM', "aFc4IjVcICkFW5W", "A3VcMSkdna", "4Pss4Pw94Psr4Pshhq", "WPzyWQVdVIa", '4BAj4BsJ4BwD4BsMda', "gYeEWOBdLG", 'dSkaoSoKW4C', 'fVgdUk0/WQik', 'W71Ox8koWRW', "W6vQtCkpca", "WO5tWRJdPJC", "WPpcPmokDCk8", "W6ldPMhdL8oW", 'r8oTW6tcOSk7', "CqTBCf8", 'lM/cMG', 'FbP0Cf4', 'WQdcTv4MWOe', "oJbC8lAsTmov", "WPdcTmowmSk8", 'le/dKq', 'FZa7aeq', "ee0+", "pg7dI8o8ma", "cKCRW67dQa", "ecGWWOJdLq", "mmkhcmkuW6W", 'W4BcH8o6o8o8', "x8omFXuc", "mmohsJGc", "g8kCvq", "WOBcUrxdOhO", "hJ/dGGap", "W7BdJXL3W7u", 'DHX5WRFdJa', "W6ldOMhdHG", 'mH9+CXC', "WRxcRs8", "wSk7oSk2W5m", "W6XGx8kyW6y", "DbjJCfy", 'WOldKKddHSoM', "WQtcNK8V", "WPXgW7nhW6W", "W50l4PEi4PAN4PwT", 'wwNcJW', "WQpdUZRWOlgcsG", 'sa3IL67ILPxILAy', "fveT", "hIZdM8koWQq", 'vmoxW5lcRCk+', 'ymouW7VdISkW', "W7ddGXKcWPS", "gZ4E", 'WPFcO3mZWQe', "4Bsj4Bw5mEg0Nog0Sa", "ACkLW4BdImk1", "WPLeWQBdKYW", 'DmooE3ZdPa', 'xMmDW6Xn', "W7ZdONS", "WPiPeSoDWRW", "WPBcJtldIx4", "W5VdOuldMSoK", "d8ohzSoHW4e", "wqNcO8oknq", "Bw3cHdSn", "gKJcQHH7", 'nv0bW4X6', 'WPxcOhqAWPq', "WOaAW7HOta", "vUkuOpcPTytIGOZIMOlVUPvDWOy", "WRFcLHlcPSkl", "ow08W7xdJa", "W59pFSkPlW", "ECk6FHXx", "h8o/gLSP", 'nM3dJ8oxWRm', "nvpdLCkzWPq", "lgtdNrnB", "DHLsAfO", 'W4hdOCko4PsqW6G', "f0ldJmkLWPa", "8kEvLU+5KMimbGi", "yCortgb0", "ruHwW5dcRW", "W4K+W7mVWQm", "WQiHW7RcIu0", "WQ5OWRJdRGu", "W5hcOSolF8oN", 'f8kjnmkHWOu', "B8kTWQLwW4q", 'vhBcSSogW5m', "geBdT8oHaW", "k2VdNSk/WRC", "f8kjmCkGW6K", "uZLPDM0", "lxlcHa", "CrXLyLa", "4Psa4P64bokuKmkG", "WQPSWPC6nq", "W5/dNINcI8kN", 'WQxcM1GJWQa', "dfFdJMNcOa", "W7ZcIxqKwG", "W7FcOSkBW7tdHa", "WPVcJNy", "qSklW6FdUmkd", "ookvV/cBT57IGlRIMPxVU4jBta", 'vuGeW4VcUa', "vEkxR+kuJ+kvSokvPW", "WOJcJNjwW7G", "W4j0Fx5/", "dmk/zH0c", "W5BdR8k9hSoO", "W5OfWRNdLmoO", "WP/dSSkJbCoz", "sWxdL8kpzq", 'W6lcJaNcO8ka', "qb/dI8oBua", "gvaAW7ZdSG", 'sb8F', 'W4muW5NILzxILOm', "n0/dLmkWAW", "h0mTW7JdPG", "4PsB4PsA4PEU4Ps44PAE", 'WOJcLqxdNfS', "WOdILABXJlw54Oka4PM377UjaJC", "jNucW55t", 'gCkykG', "xh/cMSoxmW", 'WODqW7njW6O', "W4CLW7TJ", "W6CMW63cJ8kT", "W5pcISkwW57dKa", 'WQfgWQniW7a', "zJL4vge", '4Pwc4Psa4PE94Pw/4PsY', "WRW3ef/dTW", 'y8kErWfh', "W48+W6q", 'tbxdHmolDa', "WQq5n37dOa", "vmo4W57cNSkb", "WPzeWRhdGG8", 'WQFcM10Q', "WR7cR8keD8k6", "kSk9cYnR", "aM7dJ8kAWRG", 'fXtcMNZcPa', 'bokvSokwPEkwR+kuKq', "f8kjnSkQ", "ASo5BgWm", '4Pwa8j+KPokbSUkzSo+4SHrSfG', "h14/W7H7", "yCkaEK3dTq", "4Pw24Psh4PAI4PsW4Psn", "WPLcWRVdLWe", "W4ybWQpdH8o5", "W5/cSSoP", "W7P0qCkAgG", "fSosWOL8W4q", 'c0BdT8oWaq', 'WONcNNzEsa', 'pmoyW5WpWRC', "4BAW4BsQ4BAaWRpWRAkm4OoA8yIGTq", "wuRcUmowW64", 'W6PQySkwW48', "WOfrWRjbW6y", "oSkCmq", "rYiCW64H", 'a2RdGmkrWQm', "4BwyumIwY4jU", "rIWv", 'cCkCCq', "W7tcJrdcP8kz", "WOZdM0/dLG", "gsKE", "rXpdKmoDyW", "jNONW7Hh", 'DGjtWR3cIW', 'WO0nEw/dMq', 'W5RdQtmOWRe', 'eSkCkcXi', "zSkpBwBdTq", "krNdOIG", "g0iMW6Hd", "W5LicLf0", "qL4FW4RcRq", "dxBcPdTI", "xXHWW5vu", 'jSkDmcvy', 'W7bSqmksW7C', "FHiX", "zHZdKmozFG", "vHNdGSohzq", "rbmucee", "tsOuW7m", "W6ddTxy", "i23dI8kBWOC", "ocT0Duq", "4PAtwhbMmW", 'WR91WPLSW5e', "d0O2W6RdGa", "WONcHxGBha", "WPuyogNdKW", 'W43dK0hdPSoU', "eNNcMYXJ", "W5xcLCkoWPK", 'tSoVW4W', "4BsKWR3iRmMLW5m", "W4pdReBcJZy", "hHe4WQxdPq", "W6BdPMZdI8o5", "WPLbWQbn", "WRfIWRbCW4u", "W5/cNSo2C8kL", "WRxcLW/cJSkb", '8lMxIU+4Vq', "WRpdNK7IL4ddLa", "W4pcSXxdPhe", "W6Pev8koW68", "4PsB4PsA4PEU4PE34Pwr", 'cL3cMIJdOq', 'efrWW6LV', "hSoLF8ocW5q", "baGeW4lcPmkBWRfd", "W7LNwmkDaq", "W5HUu8kqW7u", "uqlcM8o9W54", "W5tcMY3cISkK", "WR/IL48mW4fe", 'ySovsMj0', "E8oUWRVcOSog", "cmoIFSojW7i", "W73IL6ZWLiAB4Oor4PQd77IdW5/dKG", "je3dMCozpa", "WRJdJG3dTmkt", "WRitEuldGW", "W5tdJtXsW7a", "W5dcPFc9GklcSCkJ", 'a0RcTc1Z', "tr0ugeW", "qmkLW7ZdUmku", "Fq9O", 'CmoivCoKWQ8', "a8oUEmoiW74", "4BA/W7/HTOtHTz8", "WQ7cU10JWRS", "W5PlW6pdTWC", 'jwxdNmkFvq', "W7CH8y2sMZLl", "uN7cN8o+W40", "tbhdKCoCCa", "WOtcUcVcN8kV", "yLBcMa1b", "W5/dOCkemSoO", "CmoEw3fI", "4Pw44Ps44PA64Psi4PEm", 'hw3dLCkqWOO', "guWKW7PL", "4PER4PwEWOi", "zmokW5WvWRW", "obK3mvW", "AYy0", "AmkBW7CWWQS", "4PE94PsT4PY3lCkC", 'WO1qWPbkW64', "uxuvW4rd", 'WQbeW4FcGmkh', "rSoVW5RcN8kd", "dvBdLghcOG", "WOBdNKVcMmka", "W4KfWRNdHCoQ", "egtdKSkwWO0", 'W5zEW77dSJS', "W4/cVSknW6/dRW", "4PEmlCkOW4hdOG", "urZdOmozqq", "WPTmWOxdHqO", 'W53dJIrIW5y', "fXJdIZGE", "guZdK2FcOG", 'WPZcOmoqD8kV', 'W4RcQSodkCob', "ySovxa", "x8orBH0c", "rbCugt8", "4Bs1gSUVYkVdQG", "WPdcKHtdRhG", "ef3dM3JcMq", "bMBdLSklWQC", "rtDvW7Ln", 'W4/dKKddHSkk', "zJWPrI0", "WPWqpa", "sWtdHmodmq", "nCkAmmk2W7y", "WQxIL7FILi/ILRpILRW", "W4uqWR7cGmo/", "DEkxOUkxI+kxLokuJG", "WQ3cOsFcKSkH", "CSkDW7uWWQi", "WPVcV0GpWP8", "oh/dN8kssq", "WR/cGv02WRi", "hSkhmCkWW6q", "6P+mc/gnK4/IGAdWL6kI", 'WOddUsRcHCkU', "ns7cMX5r", "4Ps+4Psm4PE74PAUWQ4", "fwlcGSklWQ0", "imoKlHJcOa", 'eMxdL8k2WPm', "ja00WRBdUW", "8jUPLpggURpWQyUW8yoOLCo9", "W4mTW6L/wa", "ouW+W7tdRW", '4PE/4PEb4PAK4Pss', "ncBIL7NWTlEX77M94Ock4PMe77UxWPK", "W5RcQJrpWRe", "W5dcOmoWESoY", "WRNcNwyGWRy", "bmkqW6ddQCog", "aq5hWP3dS8onW7mkW4y5WPVdILZdGq", "WO7cGWVdQMq", "W5FILRr5n8kC", 'CKlcGSkuhG', "W4LUWRXlW6y", "cCoKuSojW7q", "gKJdSCk1cq", 'WONdUZb0ha', "W7L5WQFcS2S", "dSocvCoKWOu", "WRtdI1hdSSomW5BdR8oEW7e4WPpdPW", "ESkDW6WOWQS", "W59mFmkrfG", "vqRcV8o0ba", "cmk+ecfI", "rCoYW5VcNSkY", "WRvKq8kptG", "F8o5CvDI", "WRjNmKzb", "WQDWWOapWOK", "AglcNSk2cW", "W4ruASkAna", 'mwbtWRFIL7e', '8kodVSkBW5FdLmo5', 'tCkkmCkSWRK', 'W57cVSoGo8oO', "WQ0Vce/dNq", "beGKW6n7", "W4Cdb8otWRW", "W47cQXhcGmke", "W5RdOMZdQSoS", "W6VcMsNcOmkt", "fZKEWPtdJa", 'W6DJtCkygG', "wuKc", "WPBcSSoq", 'WP/XI6+KCa', "W75nlL8", "WOZcSL5jW4u", "ytWiguy", "ddypg3O", "aqXdW4ldSW", "W69OqmkzW7K", '8yksKN/cO8kVWPS', 'vf7dHSoaFa', 'W4fAzSk4W5e', "WOLeWP3dLX0", 'jCk8nSkPW4a', "W47cVaZcHSk4", '4PwG4PEZ4PwD4PAn4PEJ', "WOBdHKVcVZy", "aCkDkr1z", "WOxdIwddSmog", "WOBcHrlcPxC", "YlNHTypHTOyWnq", "4PwthSozl8k9", "W7blCmkzW4G", "WQBdJ1GNWQu", "q8kaW53dR8kG", "pMpcNIaG", "vuGtW4lcPq", "zHHPCW", "WP5FWQNdUbG", "W4RcKgqBwW", "WQxcILCZWPC", 'WPVcQLuAWQq', "W4yLW7f/uq", "WOJdPuVdTSos", "4PsE4Psf4PER4Pwm4Pwm", "mHX/yXC", 'k8kFf2nM', '4Bsr4BA9gpcAKBNIGRlWORcC', "WO3cJCofymkV", "vmoeW4/cVmkP", "patcHq", "qmo5FuGm", "mLFILBZILiFILlC", "W5aTW6LUwG", "W5NcHgmw", "gJW7jwe", "WOrrWR4", 'WPLpWOVdIaa', 'lgGuW4VdLW', "4Pw/4PAF4Psp4PwW4PwN", "bXGja2m", "W4BcNCooamoT", "eSo6Frmp", "WPVcPmoxCq", "a2SaW4fo", "WRZcSColqCkh", "dCkEo8kjW6O", "cfC+W682", "gNflW5Wm", "gCoLACos", "W7TOsCkjtG", "gNxdHSkVWOS", "imk7FxpdPW", "kfi+Cfy", 'lNNdSehcNG', "WRpcNq4dWRi", "W4xcLh4zsa", "WOX4WOpdSrK", 'FMX5W4FcSG', 'xCkTybzq', "W4LRWPb1W5y", "4PwG4PEZ4PwD4Pwc4PsS", "W6yRWORdRW", "6P2a4Bs44Bwi4BAsnG", "kXGAWORdNq", "hCoHzCosW7W", "z8k+mCkmW48", 'W5iPW612vG', "Fbr/ybC", "WO/dK04", "WRiUFsem", "xaaw", "WPOXofNdKG", "DNVcH8kz", "WR/cNe0", "WPXhWQhdKqG", 'dmkwmYvy', "phPAWRq2", "W5lcK8kdW4NdHG", "WPdcOmoa", 'dUkuRCkOWRBdJa', "h0O3W7tdOG", "CLZcRGS9", "WPhcNgeMWOS", "ECk6rhddJq", "hsbFWOxdMq", "vftcUmkYaW", "bmkkW6FdUW", "zSkEx1RdIa", "q8ovshHO", 'WRhcIK0', 'W7jeW6RdUIu', "WPZcIN9hW78", "gs0AWOK", "cCkCoSkPWOu", "h2ddUw3cNa", "paFdKCoqnG", "WRlcQXdcJ8kD", 'qbtdPSoaFa', "4Pw+4PAE4Pso4PwX4PwM", 'W59MaIeF', "xL5wW4JcOW", "W5n/tCk+hG", "W43dTNZdP8o9", 'WROEW5KBWQm', 'Y6ZHTiZQNipdNEg2Ha', "W7zPqCouoa", "kr0In08", "ign4WQPN", "W6dcNWRcPSk4", "W4ddLwFdOCoT", "W5pcLmkd", "WRxcM8oxzmkF", "W7RcPEkuKokvVUkuVa", "W5lcGSkfW4RcLq", "fvNdLgZcGa", 'WRhcPYxILRhcNa', "WOzaW7rwWQm", "F8ktW7C5WQK", '4PAq4PEL4PspW74e', 'W6nJxSkibW', "WRGKcmoD", "W4ZcNh8mrq", "qwpcVCkXnq", "CmkBFxO", "W7FcO2PIW7W", "4PsOdLCvda", "W48WWONdISoo", "pKhdU1NcGW", "oaldJcW9", "fuldKKRcHG", "ddS1WP7dTq", 'nmkDf8kTW4O', 'W6auWORdQ8oG', '4Ps+4Psm4PE74PAU4PAe', "m2WEW59e", "W7bMqCkjW7i", 'W4qOW551uG', "vf41W4VcPW", "qIWbW74d", 'g1NdJM3cQW', "yVcDM6tWOQIq8jkiMGG", "Dmk4Dtjh", "EHjIC1K", 'Emk6Fq', "AYBdRmoQmq", "F37cRCkypa", 'tCotzCohW7S', "cCkakq", "CmoExgCX", 'qYSti2q', "qpgbQyRWRBIo8jAzU/cMMOO", 'gvVdJN3cVG', "W47dH8kwWPNdPG", "4PEw4PEV4Ps54PAy4PsA", "aMNdTuxcQW", 'q8o4W4FcMCot', "tConvCkgW44", "W55WC8kSW5m", 'WOVcGXtdQN0', "xUkuOEkvS+kxP+kwUa", "vSk2t2ldRq", "W7PbpfT5", "hJyfWOxdRq", "WP/dKLRdLSop", "WOxIL7FILi7ILRlILR0", "wSkYmmkQW4a", "cKLsWObn", "W7KDWR7dLmoO", "W5/dQ8o7qCkX", "W5lcS8oNl8o9", "W5lcT8oNlW", "luFcJ8o+lG", "aSoUDa", 'CuuIm1m', "BM7cM8kvna", 'W4/cIqRcQmk9', "EsaDW7Gi", 'ssigW68k', "W7WPh8ohWRW", 'W7fVx8klaG', "lSoDAHKG", "tx3cJ8oQW7W", "bCo0zCowW6O", "4Psa4PEU4Psoomkk", 'i3ZdLSkAWOW', "WQtcRGJdLN8", "WQtcTt7cN8kS", "W5NcLmoOdmoH", 'mX0Imf4', "C2NcImoDW6u", "ie4Mr1K", "W5/cTSofFmk8", 'dCo6Faul', "gmk/qcnh", "W67dQMO", "lmk8gG0", "WP5EWQxdLbK", "W5Xrfujd", "WPRcISktWPNdGG", "FsyqW445", "AhpcMqu9", "WPFcQCoCvCk4", "E1lILk7ILztILlS", "D28yW5tcQa", "WP7cTCoxu8k4", "YBhkMUg3RSox4BwC", 'hqiQW63dOa', 'W6xcKYtcGSkG', "zYxdKmoTyq", "W615rSkuW7e", 'vWtcIW', "W5TcC8kVnW", "jrGXWPddVq", "eg7dJSklWQC", "4PEJ4PEM4PwM4PAf4PEz", "Fs/dJb0B", "W5aTW7n/uW", "l1/dHSk8", 'W5FcGSkzW4W', "WQBcMKO/", 'FwnwW7pcIW', "W6ZcKWe", 'Fxe1W73cQa', "zSkRyHjn", "kwpdU8oKpa", "W4rsnvfj", "gCkdogjn", 'Emk6yHHl', "WPxcKwO", "sc3cO8kFrG", "W5HJx8kidW", "e8oWAa", "WO3cUuZcJXW", "cMNILj/ILORILA0", "d2VdOSobaG", "pehdLmkZAW", "4Pss4PAF4Psp4PwW4PwN", 'WPjzWRe', "WOdILQ3dRCkAWQC", "ySktW4/dU8kk", "o+kvUrGUoW", "tcOEW68d", "kUkuPY4OWQO", 'W5ZdJKddVCkw', "W7/dQhZdMSoi", 'W5HDW6pdOgS', "WP3dNK/dLSod", "W7ZILkyzBCo/", 'WQiHW73cIu0', "hCorWR3cVmoEdHhdQSoiW40Njq", "mf7cKSkNlG", "EXHAWQOC", 'tcJcJCkgWQ0', "WRddH8o9WPNcVW", "WPtcJuOTWPi", "WOhcKWe", 'oam0WQG', 'WO8kiutdMG', "WOZcTCowE8kM", "lHhdQcG", "WPpcVqriW6i", "dMC0W7xdMW", "4PE94Pw94Pwz4Psn4Pw5", "dtRdGHSy", "WOZdNKO", "wsOCW60b", "rxXcW5dcJSkjrmoKWQFdHdhcQmo4", "WP7cJh1wW5a", "WOFcGIxdQNS", "jZVdNr0H", "W5HyW7q", 'gubdoMW', "W5BcGSkzW57dGq", 'w1jBtsC', "WQFcJ1O2WRK", "zrbsWRbn", "WO1kWRZdKWG", 'nUkwGUkwG+kvNokxJG', "W4H+ASkuW6K", 'DCk/bvbT', "W6dcNW3cRa", 'WRJcIK4KWRK', "wWlcHCoxW5q", "WRNcVhW1WOa", "gXldPSkroW", 'W73cNXdcTSkr', 'l2xcJXXA', "WQ/cQJxcKW", "W7OiWQJdGCo+", "sb/dGG", "wgntWQTh", 'z8kWzrvh', "xWKvW40G", "FCkRzaTq", "h1FcKCo9W7q", 'AbC8', "y8kbW7ZcRmke", "sSkaW7S", "CSkwW7b8WQm", "4Bw7YjdkLUg1T8UN", "W5RcOmoko8oO", '8kAkLpczIOpcUFgeUihXI5Uz', "fcJcLSonW54", "rCo5W7BcHCkE", "x8oKoJZcOa", "EMRcHtGn", '8jUWLEkaNpcEOOZdT+g3REg1U+g0Gq', "WPuCkG", 'fwBdLSkAWQu', "W4xILRhWLiw74OkN4PQA77MGgSoN", "WPFcItpdTwy", "vLFcR8k5fq", 'FmkSza', "n1y9W61I", '4PEceSkWaSoY', 'W6jiEmk3nG', "W5D+pK55", "WQhcSIG", "W4ldONZdGmoD", "eum3W7NdJq", "gf5WW6T4", "4BAX4BwGW63HTRVHTOO", "vCorthuX", "W4tcKh4ACa", "WRVcJLCZWPK", "bhjXEHS", "a27dTCk4WPO", "rGad", '4Pw04Pwm4PwZ4PsO4Pw3', "WPVcOMvGW4a", "txJcICohW6O", "WRpcQ1ypWO0", "E3jJxHS", "4PEw4PEV4Ps54Pwx4PEv", "4PAv4Psg4PsS4PE74PwU", "W7rYrCkvcq", "lKO1W7P6", "WQlcTcxdJty", "jCoADXyL", "D+kwUCkVD2q", "e2xdSSkB", "4PEt4PwiWOK", 'W71Nr8otWRi', "W5vbkqTH", "oX/dOdKR", "WPRcRa5TW7W", "h3ddGLlcPa", "tmo8W5VcJSk/", "WPNcKsZdVea", 'qCkQqGTi', "FYZcTCohW6C", "txCB4PQE77I4W7C", "W5C4k3/dMq", "WO9oWRVdKGe", "g0nmu34", "CZJcKbPktKDa", "WOPBWR5iW6i", "W5i4W6PGtG", "W7zYrCkuaa", "CmoCuxvI", "pmkrW6WXWQm", "D8knDMBdUG", "W73dOM7dKmoi", "WO1YWQVdLZW", "mLFILjmNfW", "WOddSuFdImoH", 'aSoYAa', 'W5ZdJZn3W58', "WP8MjSoBza", "oHqQnuG", "W47cJ8kcW5VcMW", "oHyNjXS", "W64iW44Wnq", 'x8kvl3Ph', "xhu0W4lcUG", "FCkWyW9n", '4BA34BsNWQ3WU6cJ4OoP8yQHPa', "WRHMWPveW5K", 'bhRcHCkLmq', "luxdGmk6AG", "8yEIJUkbQ/c+GQ3cG+g0VUg2N+g0SG", "W4SqW4FcGmkh", "W6eMq8kDtG", "aokuRUkvSUkwIUkvRq", '4Pw/4PAF4Psp4PA/4PAO', "8jwlL/cWIQFXGAUXnmo/", "WRFcQfb7W7m", 'W5viFmk5W48', "W7vno1i", "W71NxSkFtG", "A8kBurJcSG", 'mgmYW5ZdPW', "WQxcIW5IW7e", "W5VdKtfFfG", 'WP/dHL3dIG', "ewlcGSkEWQW", "hKO9WQOS", "DCkgW6W4WQ8", "e8kBkW", 'wbJcSa', 'Emk6Dbjc', "WONcK3jpW74", "4Pwc4Psa4PE94PAW4PE9", "ESkTAq", "8jQAUFc9QjVXJRMt8ycRGVcTUBG", 'W5BcImox', "umklW53dVmkw", "W4VcT8oOn8k7", "v3/cJ8oQW6S", "bmkcW63dRCks", "YyplSUg1UKZHTia", "W77dUvxdI8oa", "W6ZdSuxdHmou", "p1/dQtGG", 'et4aWO7dLW', 'WOhcUXlcJSkK', "W40bWRK", 'WOhcOrxcMmkq', "u8o4W4xcHq", "WQBcJLq", 'WPJcPmkeC8kM', 'vKVdMq', 'W6muW5KfWOK', "sSoYW4ZcJ8kr", "y8ovfdrO", "8yIQUHrOW7W", "W50lWR/dI8kT", "W5aWhs3cHa", "W57cV8oS", "W7fNvmksW64", "WOpdNeNdJq", "a8o0CmobW7W", "g17dSmoHaW", "4PAQ4PwK4PEn4PAG4PAn", "bmkwlIe", "W53cJmk8W5xdRa", "FmkWFLSo", "WRVcGuK", "uKJcOIiT", "awNdJ8kdWPS", "wCkqvZq", "h8kgnSkPW6a", "WPRcS8kdyCoO", "kSkepSkWW4m", "W4/cUG7cGSkk", "vN/cNCkema", "gf0BjZ0", "W5tcGmkoW43cGW", "WPddUtpcHmkT", "EvDwW7lcIW", 'lrhdUZKR', "smkxW6a0W6e", "W5zEWOFcS0e", "W7FHT4/kSUg1GUg3HW", "x1qAW43cPa", "pSk7eSkfW5q", 'rbCx', "zCoQW5BcM8ky", "gtFdVb82", 'dK7dR8oWca', "AmkgW6OYWQK", "q04eW43cPa", "W6VdO0ZdNmor", "W4CfWRNdICoI", "W4mxW63dLmoI", '4Pw84PsI4Pwz4PAD4PAb', "WP0GWRpcS2e", "W4RdUxxIL6NdQG", 'CSo4W4FcNmkw', 'kLqXW6FdPa', "WPnyWPJdTbG", 'uKNcJ8o5W6G', "rmoWW5RcMmkk", "WPlcO8okC8kH", "WO/cOmoD", 'vmokW6VdO8kl', 'imoe4PwJ4Pss4PAa', "W55zW7K", "ff3dPqldHG", "4BEI4BA0YzRHTR7cIG", "W77XIyUXWOJcPSks", "uwCtW5Pd", "W5/HT5RHTQaY4BEt", 'u8kPW4/dUmkE', "4PEs4PEs4PAj4PwA4PAB", "feSDW6NdSa", "qmoz4PwFyGW", 'E8oSsG', 'W6ddPxFdPSoK', "FMlcMSksiW", "mNCXdrC", "WR/dQMNdQCo/", 'vmoTW4hcG8kE', "W513EqFcLG", "WPKlWRVdKG8", 'B8kCDW', "WOdcHXldOhe", "ECkWDW", "yHXLC1i", "lCoCWQmdWOS", "mwxcIq", "WO/dL8ooWOJcGmogr2RcT1Xpkq", "4BsrY4tHTl/kIZS", 'W6xcLCksW4NdMq', "l0VdGCkGAW", "WP1DWR5aW7K", "eMFdLSkAWP8", 'W5FILB/WQBEu4Ok74PQp77MjWQhdIW', "WRRcNqZdGCoa", "hg3dLSkyWOW", "W4Soo17dRSkzpG", "WRVcI0aLWQG", 'naOUDae', 'nSkGW7yYWRO', "f8odzmoGW5e", 'rdFcM8omW7ddMsLuWOddRSo0bG', 'qmoWW5a', 'hKOP', "ACkDsh3dSG", 'WPbkWQBdGYe', "WRb5WP5qW5S", "4PAp4PAh4Psp4PAZ4PwZ", "wmkfAvhdRW", "4PAqAxJcGfm", "W79gWQ80hW", "W55+mKDl", 'rrTUWQJcTG', "zCo2E3bw", "W6ydW5joEG", "w8oZC8o1W4hcSNm", "aeldOSoLmW", "hfFdLhZcJq", 'WOZcRSorymkR', "wXCwdxq", 'AtVdPSo2CW', 'gmo0zCojW7C', "huvlvtW", "hGBdM8kKWQq", "W44aWO7dJ8oG", "pKO/W7Hf", "meGdW5hdMW", "fSouWRhcV8ouaZFdNSooW7CShq", "cwG+W5RdJa", "W5VcVCoNlSoA", "AtRdJ8owEW", "8kczNFcHQ7FWS5QL8kcATmo/", 'W5i7W6vtuW', "W6xcJq7cImo6", 'WP3cQN/cGSk5', "4PAA8j23Q+kdSokBNU+4M3bBWRi", '4PEfWRuftKC', 'WO1rWObMW6e', "WQBcJK0JWRa", "W43cLgmDtG", 'D8k6yGGd', 'wdaBW6ud', 'YkxdH+g3S8I2YkW', "D8kDW7O5WQW", "W79lk0jj", "WQ/dLh/dLSoz", "oXddHpgcVlZcMG", "W5KbWQK", "WPXeWQDmW64", "kCk9pWfT", "mMhcIqTx", "WRa/uZpcLG", 'oSobixxdQq', 'WQBdUx7dISoG', 'yHhdT8oOwW', 'WQpdKeVcSSkv', "WPpcKgC", "WPKsn3NdTW", "WQ/cJs/cUCkC", 'zsOmfvO', "lSkbg8kRW6m", "4BwG4BsGWPRkKEg3GW", 'edbwWQ7dQG', "DmkYDq", 'xvSyW4dcHG', "W4BcHwnEtG", "Bc7dKGXx", "WP4wogRdKW", 'dUkwUCkfWPu7', "4PwaW4KzkmkV", "4PE04PEz4PwF4PERW6a", 'FYdcLCoElG', "W6ZcIG3cRCkA", 'WORcHWxdVvm', 'WOZcSCobD8kS', "zSkPrZr2", "duVdNW", 'mau7WRpdUq', "WPnhCY0", "e2VdTmkRWO8", "WPhcQ3/cISkK", 'W4zxWRTeW60', "W5rlW7NdTIW", 'vSklW73dOSkc', "EMhcQcmH", "xcH5WPFcOq", "zqdcLq", "mGldOG", "ECo2W5lcQCkC", "W7rOwmkKgW", "W5NcJ8k9W4pdSG", "W60PW65PxG", "W5/dI8kegmoO", "muJcM8kzjq", "BMpcHHSA", "W5XtqSkfW6O", "Amk2W6OpWPG", "t3NcKSonW68", "W4WuWPZdQmof", 'W4ddJdXvW7K', 'y8kbyZ3dLG', "WR7cI8oTqmkj", "W5RcHxutha", 'v8ojvh1D', "oq554PELWPG", "zSkhyNFdRG", 'W4XCsmkwW7K', 'WRWeFxrU', 'fcxdOwXg', "W44TW7fBwW", 'W5NcKgqkwq', "aCoLF8obW60", "fhRdUmkwWO0", "t8kEza9v", 'W67dRMhcK8ou', "W7ZcI8kvW5FdKq", "W6qTW6L7hW", "WONdNcPE", "F8oEuxP2", "a8khmJam", "g3SFW68vkcldRG", "hxddGSothW", 'qsldPmoQCa', "W7DDuY3cVa", "4Bss4BwWmFcEOz/IG5RXJioa", "W5hcGfu7ra", "4PER4PwEWOlILO7dHG", "gCoVrmowW6K", "WQbU4PAG4PAG4PAn", "WOToWRRdLaq", "F2NdJSk2pW", "W5tcMdhcJ8oQ", "cvxcO8o2dG", "tCkdW6ddUmkv", "yG5RAfi", "WOxcPCoOEmky", 'W4rqfKnE', "hvxcO8oHaW", "rCkqW7VdRCkw", "ghJdJ8kEWPe", "WRlcQCoGumk9", '8jIXJSolbcNcPq', "wdlcMGldRa", "F2VcJ2W4", "WP/dUmowgmo0", "yJRcJCkEiW", "naO6", "CmkDW6q", "f2iuW6jM", "W7n5WQFcMxu", "etRdPmoxwW", "z8kGg8kgWPm", "W4VdINBdQSoz", "WQhcNN/cQmkf", 'DCk/l1OX', '4PsC4PEY4PAd4PsG4Psg', "W7dcJSkt", "CetcOt0d", "pfK7W69K", "xr0odwe", "W50un2VdMq", 'k8o5umo3W5y', "WQy+hmopx8koWR7cKmozw8ogWOtdNga", 'WPBcSCoisSk4', "W7ZdRhFdHmoL", "8kMNNE+5JhqBoMi", 'vHhdOmogCG', "pG/dI0zS", "eYCIWQxdVW", "h000W7ddOa", 'pmo4WQnwW64', "wZjAWRq2", 'W6TSu8kpW78', 'AxZcOmk4nq', "E1v5Da", 'oHP8WOtdGa', 'WONcOKu8ha', "jMxcJHW", "mSkkiSkiWRK", "WPRdOCoxD8kK", '4Bsa4BsEW47HT6ZHTzy', "4Bw/WR/QNl7iMUg1QG", "W5rEW6ZdJd4", 'W4JcNhu', "tSksmsTA", "g2ldSSoEnq", 'WOtcSWZdG1e', "vmoUW5a", "kaWXpvu", "m0/dM8kZEG", "atq5WPtdOG", "t3hcU8kpba", "W4WlWQldLmoO", "WQDiWQ3dRYq", 'lXC3nvC', "kwRcNazJ", "pXeIifC", "DCoFvMbq", "WOxcUs/cMCoS", "WRxdMmkJ4Ps34PAB", 'WPdcVdVcV8kV', "E/cDMjxcLmksW4m", 'uJC7W6ql', 'r8klEJldOG', "lmkYjq", "emoTDG", 'wSoc4PsY4PEe4PAL', "WPFcJHpdPZG", 'lmkahbjw', "n3dcIrzF", 'tbertg8', "gCoVv8opW6e", "W4qbWQhcJ8k9", "W6r+W4JdNMS", "WRxcM1O2WRm", "fCkAjG", "WP/dMmkPumk7", 'WQ/cMMCSWRO', "WRXVWRddLJC", "W68IWR1vsG", "4PABWRFcV8ouW5m", "W7Dwk05E", 'W500f0VdUq', "WOVcHXu", "W5KzW657wa", "W5ddQrKtWR8", "F+kDHEkxPEkxLokuJG", "A3hcNYmI", "WPVcPCoNFCkL", "at4F", 'WRBcJ8oIxCkA', 'CEkwSwnUeq', 'W5noW47dVcy', "hf3dGGK", 'bmoUWQJcHSog', 'WPHFWQVdJWq', 'wSkhW60DWOG', "4Pw04Pwm4PwZ4PEN4PA4", "E8k4Ervg", "oCkKlmktW5C", "cxHAzI0", "z8khAgS", "gvldK3RcRq", 'YzRkUUg1TSke4BEh', "4PAv4PsgbSoXza", 'W6tcKWxcPCkr', "Yi/HTOCV4BA+4BA5", "g3DdWRnuy2xcTSkEWQ0BrmoAW4K", "hcmaWPpdLG", "CSorthf2", "pmkrW6S9WQa", 'WPrhW6tdHqW', "WONcHN1gW5m", "DHj/C3y", "mGm8WRpdVq", "AM/cGCkdna", "W4OmjVgbO5xcNW", "zHH8j14", "WQK5aSoDW58", "BmktW7COWQS", 'WQ/WVQQHW5ddKmo0', 'CMRcJa', 'WOPUW63cQSkT', "lwlcJq54", "tCkGo8oPW4W", "W57cUmoGkmo6", "4PAkehZcMSoQ", 'uUkxSCkAmSoM', 'avpdSmk1eq', "W5rEW6ldOwS", 'ew7dHmkg', "WPpcHhTwW6i", "tbWp", "WQlcJwujWR4", 'WQP7WP5OW4i', "W7xIL4pcHdJXJzgt", "u8oEvhvx", 'nNxdUwpcJG', "WO54WPLZW5a", "efKEW4xcPa", "WOvBWRq", "W58bWQBdLmo/", 'tCklygBdQq', '4PwZghdcQUkuLG', "W44bWR7dGW", "W6dcNWRcT8ks", 'W5a+W451Eq', 'bmoZmCopW6O', "t2pcNSks", 'W7D+xmkoWRW', "W5dcImkoWPNdGW", 'hfZdUwFcOq', "WPVcRrL4W7u", "4PEsdCkjWP9y", "W6jasmkXW5i", "dmoUDCkgW7y", "ixtcNcbh", "WPRdRCoxWRpcLq", "hghdJ8oxWPe", 'w+kxSxdcSdW', "oLJdG8kXFa", 'CHJcScJdHG', "WOVdML3dKSog", "sUkuUN14bG", "ufOw", 'ntldPrS+', "DCoYWPxcQCkB", "ggFdLCkeWQe", "bmoeWQJcRmog", "d13dRCk9EW", "veztW63cMa", 'scddT184', 'FN5wW6JcGW', 'FbP4Avi', "n0pdMSkoWPG", "arrwW7VcJW", "bSk1pbrw", "WRpcIXKGWR0", 'gKPkwdZcVJRcMZHNwdtdJJ4', "umkqW63dVG", "d8kIomkdW6G", "4PwfW6VcRIZdQa", "v07cR2Cd", "WOxcSZpdHMC", 'W53cMh0BrG', 'W71JxSkitG', "awpdS8kdWQ8", "W77dH8k0W7BdUa", 'WPWebNNdKW', "4Psa4PEU4Pso4Pss4Pwp", "WOOSWQJdKSoI", "4PsC4PEY4PAd4PAt4Psb", 'WOFcVdhcJ8ki', "AIxXHAcK4Ogb8y2dIxRcRq", "DSoxW4dcVSkI", "C8kaW4GvWOi", "gVcrTktWTjQh8yckL/ctU5G", "W5dILkOZgmk7", "mdxdIX8v", "nHG9WRldQG", 'W4lcICkBW7FdLW', "c8oyW4FcMmkC", "i3/dHSkLWQq", "W40nWQVdMq", "W7XcmLLb", "W7D9eSkRW7K", "utjWWOa2", "E3FdIY0I", 'WO1hWQNdKWS', "WO5oWQBdG00", 'CMNcMG', '4OgpWQdHTiRHTQhHTP0', 'WPFcUcVcJSkT', "4PE/4PAaFokwPSoQ", "wYZcJ8ogW60", 'dIKvjxi', "B8k2FHD3", "nwxdMSkZWQK", "WR7cTZ7cHmkkWQtcIeldQCoga2u5", "WONcHNC", 'W4mjWQJcMSkN', '4Bw4YAZHTzPI4Bsn', "vCo4W5tcH8ot"];
    _0x2810 = function () {
      return _0xf2c55b;
    };
    return _0x2810();
  }
  const _0x337cae = {};
  function _0x4ccd35(_0x4f1fa6, _0x32a1a3, _0xcaeeb5, _0x56a97a, _0x3cdff8) {
    return _0x65d3(_0x56a97a - 0x137, _0x32a1a3);
  }
  function _0x65d3(_0x3cd9cd, _0x1e3527) {
    const _0x57358d = _0x2810();
    _0x65d3 = function (_0x418ac7, _0x357759) {
      _0x418ac7 = _0x418ac7 - 0x185;
      let _0x2b03c7 = _0x57358d[_0x418ac7];
      if (_0x65d3.EajhCq === undefined) {
        var _0x24d5a2 = function (_0xa66224) {
          let _0x90af = '';
          let _0x4b9cf6 = '';
          let _0x328e97 = 0x0;
          let _0xbc9683;
          let _0x12eb08;
          for (let _0x25b9f8 = 0x0; _0x12eb08 = _0xa66224.charAt(_0x25b9f8++); ~_0x12eb08 && (_0xbc9683 = _0x328e97 % 0x4 ? _0xbc9683 * 0x40 + _0x12eb08 : _0x12eb08, _0x328e97++ % 0x4) ? _0x90af += String.fromCharCode(0xff & _0xbc9683 >> (-0x2 * _0x328e97 & 0x6)) : 0x0) {
            _0x12eb08 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x12eb08);
          }
          let _0x54423e = 0x0;
          for (let _0x233f30 = _0x90af.length; _0x54423e < _0x233f30; _0x54423e++) {
            _0x4b9cf6 += '%' + ('00' + _0x90af.charCodeAt(_0x54423e).toString(0x10)).slice(-0x2);
          }
          return decodeURIComponent(_0x4b9cf6);
        };
        const _0x4eae28 = function (_0x32c3ab, _0x14a903) {
          let _0x364e9d = [];
          let _0x460929 = 0x0;
          let _0x19ef73;
          let _0x272b59 = '';
          _0x32c3ab = _0x24d5a2(_0x32c3ab);
          let _0x30d968;
          for (_0x30d968 = 0x0; _0x30d968 < 0x100; _0x30d968++) {
            _0x364e9d[_0x30d968] = _0x30d968;
          }
          for (_0x30d968 = 0x0; _0x30d968 < 0x100; _0x30d968++) {
            _0x460929 = (_0x460929 + _0x364e9d[_0x30d968] + _0x14a903.charCodeAt(_0x30d968 % _0x14a903.length)) % 0x100;
            _0x19ef73 = _0x364e9d[_0x30d968];
            _0x364e9d[_0x30d968] = _0x364e9d[_0x460929];
            _0x364e9d[_0x460929] = _0x19ef73;
          }
          _0x30d968 = 0x0;
          _0x460929 = 0x0;
          for (let _0x3365d7 = 0x0; _0x3365d7 < _0x32c3ab.length; _0x3365d7++) {
            _0x30d968 = (_0x30d968 + 0x1) % 0x100;
            _0x460929 = (_0x460929 + _0x364e9d[_0x30d968]) % 0x100;
            _0x19ef73 = _0x364e9d[_0x30d968];
            _0x364e9d[_0x30d968] = _0x364e9d[_0x460929];
            _0x364e9d[_0x460929] = _0x19ef73;
            _0x272b59 += String.fromCharCode(_0x32c3ab.charCodeAt(_0x3365d7) ^ _0x364e9d[(_0x364e9d[_0x30d968] + _0x364e9d[_0x460929]) % 0x100]);
          }
          return _0x272b59;
        };
        _0x65d3.kbtbfA = _0x4eae28;
        _0x3cd9cd = arguments;
        _0x65d3.EajhCq = true;
      }
      const _0x5afd34 = _0x57358d[0x0];
      const _0x3db807 = _0x418ac7 + _0x5afd34;
      const _0x42c6ec = _0x3cd9cd[_0x3db807];
      if (!_0x42c6ec) {
        if (_0x65d3.vtRguU === undefined) {
          _0x65d3.vtRguU = true;
        }
        _0x2b03c7 = _0x65d3.kbtbfA(_0x2b03c7, _0x357759);
        _0x3cd9cd[_0x3db807] = _0x2b03c7;
      } else {
        _0x2b03c7 = _0x42c6ec;
      }
      return _0x2b03c7;
    };
    return _0x65d3(_0x3cd9cd, _0x1e3527);
  }
  _0x337cae.pattern = "antispam";
  _0x337cae.alias = ['as', "spamoff"];
  _0x337cae.react = '📚';
  _0x337cae.desc = "if anyone send a spam, use this imediatly.";
  _0x337cae.category = 'main';
  function _0x4254ef(_0x3fbeb4, _0x5e3590, _0x94ac31, _0x4af019, _0x562566) {
    return _0x65d3(_0x3fbeb4 - 0x23f, _0x5e3590);
  }
  _0x337cae.use = ".antispam";
  _0x337cae.filename = __filename;
  function _0x1ef509(_0x43500e, _0x46c9fc, _0x2370c8, _0x308358, _0x2c75c7) {
    return _0x65d3(_0x2c75c7 + 0x31, _0x308358);
  }
  cmd(_0x337cae, async (_0x2663a0, _0x465dc6, _0x3b3237, {
    from: _0x2a3023,
    l: _0x466202,
    quoted: _0x112507,
    body: _0xb973a9,
    isCmd: _0x4c3e4f,
    command: _0x3045df,
    args: _0x29614c,
    q: _0x549b3b,
    isGroup: _0x56fe74,
    sender: _0x2127cb,
    senderNumber: _0x53bcbf,
    botNumber2: _0x5c7f10,
    botNumber: _0x4a7582,
    pushname: _0x461573,
    isMe: _0x23cc7d,
    isOwner: _0x805dcd,
    groupMetadata: _0x2137a7,
    groupName: _0x48396a,
    participants: _0x3c025c,
    groupAdmins: _0x2b1528,
    isBotAdmins: _0xd79c3b,
    isAdmins: _0x1809ef,
    reply: _0x2b394d
  }) => {
    try {
      _0x2b394d("\n🚮clear chat\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 🚮clear chat\n");
    } catch (_0x3d1896) {
      _0x466202(_0x3d1896);
    }
  });