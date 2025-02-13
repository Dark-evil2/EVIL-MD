(function (_0x1fff1c, _0x20bccf) {
    const _0x1b663e = _0x1fff1c();
    while (true) {
      try {
        const _0x1a686a = -parseInt(_0x2580(0x1ed, "g9Mw")) / 0x1 + -parseInt(_0x2580(0x27d, "$Hp(")) / 0x2 + parseInt(_0x2580(0x2b8, "1Oqi")) / 0x3 + -parseInt(_0x2580(0x32b, "6Nv6")) / 0x4 * (-parseInt(_0x2580(0x2a6, "7f4]")) / 0x5) + parseInt(_0x2580(0x163, "Wo3o")) / 0x6 * (parseInt(_0x2580(0x1ca, "c&tg")) / 0x7) + -parseInt(_0x2580(0x29f, 'F(qr')) / 0x8 + parseInt(_0x2580(0x1cc, 'S&MM')) / 0x9;
        if (_0x1a686a === _0x20bccf) {
          break;
        } else {
          _0x1b663e.push(_0x1b663e.shift());
        }
      } catch (_0x2be1d6) {
        _0x1b663e.push(_0x1b663e.shift());
      }
    }
  })(_0x431c, 0xc042e);
  const config = require('../settings');
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
    fetchJson
  } = require("../lib/functions");
  function _0x4bfeee(_0x18f00b, _0x64ca5, _0x1e750f, _0xcb341b, _0x45756c) {
    return _0x2580(_0x18f00b + 0x14e, _0x1e750f);
  }
  function _0x2580(_0x4fdcd4, _0x13f824) {
    const _0x3912db = _0x431c();
    _0x2580 = function (_0x4afe25, _0x362ad5) {
      _0x4afe25 = _0x4afe25 - 0x131;
      let _0x4dba47 = _0x3912db[_0x4afe25];
      if (_0x2580.mWUxrE === undefined) {
        var _0x477dfa = function (_0x2c34db) {
          let _0x46c9f9 = '';
          let _0x15232a = '';
          let _0x2405c9 = 0x0;
          let _0x2fed9f;
          let _0x496cd2;
          for (let _0x9cde93 = 0x0; _0x496cd2 = _0x2c34db.charAt(_0x9cde93++); ~_0x496cd2 && (_0x2fed9f = _0x2405c9 % 0x4 ? _0x2fed9f * 0x40 + _0x496cd2 : _0x496cd2, _0x2405c9++ % 0x4) ? _0x46c9f9 += String.fromCharCode(0xff & _0x2fed9f >> (-0x2 * _0x2405c9 & 0x6)) : 0x0) {
            _0x496cd2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x496cd2);
          }
          let _0x4806df = 0x0;
          for (let _0x2ed078 = _0x46c9f9.length; _0x4806df < _0x2ed078; _0x4806df++) {
            _0x15232a += '%' + ('00' + _0x46c9f9.charCodeAt(_0x4806df).toString(0x10)).slice(-0x2);
          }
          return decodeURIComponent(_0x15232a);
        };
        const _0x114415 = function (_0xc52310, _0x30c1e4) {
          let _0x50b73a = [];
          let _0x58f265 = 0x0;
          let _0x520fbf;
          let _0x2c2c89 = '';
          _0xc52310 = _0x477dfa(_0xc52310);
          let _0x1b674e;
          for (_0x1b674e = 0x0; _0x1b674e < 0x100; _0x1b674e++) {
            _0x50b73a[_0x1b674e] = _0x1b674e;
          }
          for (_0x1b674e = 0x0; _0x1b674e < 0x100; _0x1b674e++) {
            _0x58f265 = (_0x58f265 + _0x50b73a[_0x1b674e] + _0x30c1e4.charCodeAt(_0x1b674e % _0x30c1e4.length)) % 0x100;
            _0x520fbf = _0x50b73a[_0x1b674e];
            _0x50b73a[_0x1b674e] = _0x50b73a[_0x58f265];
            _0x50b73a[_0x58f265] = _0x520fbf;
          }
          _0x1b674e = 0x0;
          _0x58f265 = 0x0;
          for (let _0x3fc3ab = 0x0; _0x3fc3ab < _0xc52310.length; _0x3fc3ab++) {
            _0x1b674e = (_0x1b674e + 0x1) % 0x100;
            _0x58f265 = (_0x58f265 + _0x50b73a[_0x1b674e]) % 0x100;
            _0x520fbf = _0x50b73a[_0x1b674e];
            _0x50b73a[_0x1b674e] = _0x50b73a[_0x58f265];
            _0x50b73a[_0x58f265] = _0x520fbf;
            _0x2c2c89 += String.fromCharCode(_0xc52310.charCodeAt(_0x3fc3ab) ^ _0x50b73a[(_0x50b73a[_0x1b674e] + _0x50b73a[_0x58f265]) % 0x100]);
          }
          return _0x2c2c89;
        };
        _0x2580.jxKFmP = _0x114415;
        _0x4fdcd4 = arguments;
        _0x2580.mWUxrE = true;
      }
      const _0x602e29 = _0x3912db[0x0];
      const _0x4e7586 = _0x4afe25 + _0x602e29;
      const _0x233eba = _0x4fdcd4[_0x4e7586];
      if (!_0x233eba) {
        if (_0x2580.UOGoxS === undefined) {
          _0x2580.UOGoxS = true;
        }
        _0x4dba47 = _0x2580.jxKFmP(_0x4dba47, _0x362ad5);
        _0x4fdcd4[_0x4e7586] = _0x4dba47;
      } else {
        _0x4dba47 = _0x233eba;
      }
      return _0x4dba47;
    };
    return _0x2580(_0x4fdcd4, _0x13f824);
  }
  const axios = require('axios');
  const fs = require('fs');
  async function sswebA(_0x27c345 = '', _0x59da9d = false, _0x4ad30d = "desktop") {
    _0x4ad30d = _0x4ad30d.toLowerCase();
    if (!['desktop', "tablet", 'phone'].includes(_0x4ad30d)) {
      _0x4ad30d = "desktop";
    }
    let _0x11b84b = new URLSearchParams();
    _0x11b84b.append("url", _0x27c345);
    _0x11b84b.append("device", _0x4ad30d);
    if (!!_0x59da9d) {
      _0x11b84b.append('full', 'on');
    }
    _0x11b84b.append("cacheLimit", 0x0);
    let _0x42f0f5 = await axios({
      'url': "https://www.screenshotmachine.com/capture.php",
      'method': "post",
      'data': _0x11b84b
    });
    let _0x546d86 = _0x42f0f5.headers["set-cookie"];
    let _0x580c31 = await axios({
      'url': "https://www.screenshotmachine.com/" + _0x42f0f5.data.link,
      'headers': {
        'cookie': _0x546d86.join('')
      },
      'responseType': "arraybuffer"
    });
    return Buffer.from(_0x580c31.data);
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x542d5e = {
      'pattern': 'ss',
      'react': "🗃️",
      'desc': "Url to screenshot convert",
      'category': 'convert',
      'use': ".ss",
      'filename': __filename
    };
    cmd(_0x542d5e, async (_0x5657fd, _0x2196fc, _0x9ed029, {
      from: _0x23beff,
      q: _0x3743b2,
      pushname: _0x53f28f,
      reply: _0x6f8609
    }) => {
      try {
        const _0x323cfb = [];
        const _0x42145f = new Map();
        for (let _0x3aa953 = 0x0; _0x3aa953 < 0x1; _0x3aa953++) {
          const _0x1f5d3f = commands[_0x3aa953];
          if (!_0x1f5d3f.dontAddCommandList && _0x1f5d3f.pattern !== undefined) {
            const _0xd1ae5c = _0x1f5d3f.category.toUpperCase();
            if (!_0x42145f.has(_0xd1ae5c)) {
              _0x323cfb.push(_0xd1ae5c);
              _0x42145f.set(_0xd1ae5c, []);
            }
            _0x42145f.get(_0xd1ae5c).push(_0x1f5d3f.pattern);
          }
        }
        const _0x47b646 = [];
        for (const _0x432f09 of _0x323cfb) {
          _0x47b646.push({
            'header': "sᴇʟᴇᴄᴛ ᴀ ᴛʏᴘᴇ",
            'title': "ᴅᴇsᴋᴛᴏᴘ ᴛʏᴘᴇ",
            'description': '',
            'id': ".desktop " + _0x3743b2
          });
          _0x47b646.push({
            'header': '',
            'title': "ᴘʜᴏɴᴇ ᴛʏᴘᴇ",
            'description': '',
            'id': ".ssphone " + _0x3743b2
          });
          _0x47b646.push({
            'header': '',
            'title': "ᴛᴀʙ ᴛʏᴘᴇ",
            'description': '',
            'id': ".sstab " + _0x3743b2
          });
        }
        const _0x10222c = {
          'display_text': config.BTN,
          'url': config.BTNURL,
          'merchant_url': config.BTNURL
        };
        let _0x32a6fc = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x10222c)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "sᴇʟᴇᴄᴛ sᴄʀᴇᴇɴsʜᴏᴛ ᴛʏᴘᴇs",
            'sections': [{
              'title': "sᴇʟᴇᴄᴛ ᴀ ᴄᴀᴛᴇɢᴏʀʏy",
              'highlight_label': "𝐃𝐀𝐑𝐊 𝐄𝐕𝐈𝐋",
              'rows': _0x47b646
            }]
          })
        }];
        const _0x376ad1 = {
          'image': config.LOGO,
          'header': '',
          'footer': config.FOOTER,
          'body': "`𝐃𝐀𝐑𝐊-𝐄𝐕𝐈𝐋 𝐒𝐂𝐑𝐄𝐄𝐍𝐒𝐇𝐎𝐓 𝐓𝐀𝐊𝐄𝐑`\n    "
        };
        return await _0x5657fd.sendButtonMessage(_0x23beff, _0x32a6fc, _0x9ed029, _0x376ad1);
      } catch (_0x5f0470) {
        _0x6f8609("*Error !!*");
        console.log(_0x5f0470);
      }
    });
    const _0x3beb04 = {
      'pattern': 'desktop',
      'use': ".screenshot",
      'react': '🎥',
      'desc': "Convert url to screenshot",
      'category': '',
      'filename': __filename
    };
    cmd(_0x3beb04, async (_0x5c9dbe, _0x1997f0, _0x1c647c, {
      from: _0x1389c1,
      q: _0x16bddc,
      reply: _0x32ce1a
    }) => {
      function _0x443aa3(_0x3675ef, _0x48d408, _0x344395, _0x40f768, _0x1674cf) {
        return _0x2580(_0x344395 + 0x35f - 0x157, _0x3675ef);
      }
      const _0x4dd421 = {
        'xVCpD': function (_0x50f97c, _0x4577b3) {
          return _0x50f97c(_0x4577b3);
        },
        'hHrQe': "*ERROR !!*",
        'XWnwt': function (_0x3db4e2, _0x446cd7) {
          return _0x3db4e2(_0x446cd7);
        },
        'TRSTi': function (_0x3dde88, _0x528f26) {
          return _0x3dde88 === _0x528f26;
        },
        'psOod': 'tLdkN',
        'kxxHj': "*Please enter a query or a url!*",
        'FSIhi': function (_0x511ecd, _0x2dadbf, _0x353e7b, _0x45466b) {
          return _0x511ecd(_0x2dadbf, _0x353e7b, _0x45466b);
        },
        'IZzfJ': "desktop",
        'UdHRY': function (_0x40b5db, _0x37dae8) {
          return _0x40b5db + _0x37dae8;
        },
        'eKbPH': ".jpg",
        'Zccos': "quick_reply",
        'GBEic': "Image type",
        'eQXWZ': function (_0x55e125, _0x37b9ff) {
          return _0x55e125 + _0x37b9ff;
        },
        'xeNuC': ".ssi ",
        'EzCxG': "Document type",
        'XkyGF': function (_0x17b0c1, _0x276fb8) {
          return _0x17b0c1 + _0x276fb8;
        },
        'nffoR': function (_0x18124a, _0x459411) {
          return _0x18124a + _0x459411;
        },
        'hLCVz': ".ssd ",
        'DTpxl': function (_0x1d4945, _0x410870) {
          return _0x1d4945 === _0x410870;
        },
        'dGpMv': "CmLMq",
        'TdljC': function (_0x41c19f, _0x51ba84) {
          return _0x41c19f(_0x51ba84);
        },
        'pAzph': "*Error !!*"
      };
      function _0x4d4104(_0x3c7e2a, _0x56bccc, _0x13c6bd, _0x230902, _0x60993e) {
        return _0x2580(_0x230902 - 0x515 + 0x31b, _0x60993e);
      }
      function _0x312978(_0x57c209, _0x5845cf, _0x6c128d, _0x34860c, _0x5e302c) {
        return _0x2580(_0x6c128d - 0x20f + 0x1cd, _0x5845cf);
      }
      function _0x5424e8(_0x5c2651, _0x130b2f, _0x1db48a, _0x3a97de, _0x4ea1a7) {
        return _0x2580(_0x4ea1a7 + 0x500 - 0x2f2, _0x3a97de);
      }
      function _0x64c3af(_0x255391, _0x4f609e, _0x49353e, _0x5275d4, _0x3a4cf6) {
        return _0x2580(_0x49353e + 0x8d + 0x1cd, _0x5275d4);
      }
      try {
        if (!_0x16bddc) {
          return await _0x32ce1a("*Please enter a query or a url!*");
        }
        let _0x7d999 = getRandom('');
        let _0x4ba789 = await sswebA(_0x16bddc, true, "desktop");
        fs.writeFileSync(_0x7d999 + ".jpg", _0x4ba789);
        let _0x4bb01d = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ɪᴍᴀɢᴇ ᴛʏᴘᴇ",
            'id': ".ssi " + _0x7d999 + ".jpg"
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ",
            'id': ".ssd " + _0x7d999 + ".jpg"
          })
        }];
        const _0x7dbad2 = {
          'image': config.LOGO,
          'header': '',
          'footer': config.FOOTER,
          'body': "[𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋]\n\n   *📸𝑺𝑪𝑹𝑬𝑬𝑵𝑺𝑯𝑶𝑻 𝑮𝑬𝑻𝑻𝑬𝑹*"
        };
        return await _0x5c9dbe.sendButtonMessage(_0x1389c1, _0x4bb01d, _0x1997f0, _0x7dbad2);
      } catch (_0x2a982f) {
        console.log(_0x2a982f);
        _0x32ce1a("*Error !!*");
      }
    });
    const _0x3fbe88 = {
      'pattern': "ssphone",
      'use': '.screenshot',
      'react': '🎥',
      'desc': "Convert url to screenshot",
      'category': '',
      'filename': __filename
    };
    cmd(_0x3fbe88, async (_0x517305, _0x438dfd, _0x533c6d, {
      from: _0x2bebc0,
      q: _0x1996e8,
      reply: _0x334803
    }) => {
      function _0x42482b(_0xcdb66f, _0x133f63, _0x5416ae, _0x27c4a4, _0x1aac19) {
        return _0x2580(_0x133f63 + 0xe5 + 0x14e, _0x27c4a4);
      }
      function _0x38f2a6(_0x48e74d, _0x2c635a, _0x3d760c, _0x4d930e, _0x10d828) {
        return _0x2580(_0x4d930e + 0x91 + 0x14e, _0x3d760c);
      }
      function _0x385ba4(_0x2abefa, _0x1354b8, _0x238566, _0x24552b, _0xec407c) {
        return _0x2580(_0xec407c - 0x70 - 0x2f2, _0x2abefa);
      }
      function _0x17300b(_0x356fd9, _0x517afc, _0x4fb666, _0x2dc1b4, _0x2470e0) {
        return _0x2580(_0x517afc - 0x20a - 0x157, _0x2dc1b4);
      }
      const _0x4d2a91 = {
        'QAKPK': function (_0x4de5dc, _0xdb60a2) {
          return _0x4de5dc(_0xdb60a2);
        },
        'EItyJ': "*Error !!*",
        'oUEWq': function (_0xf1e27d, _0x4c2ed7) {
          return _0xf1e27d(_0x4c2ed7);
        },
        'RriqL': function (_0x36c728, _0x177ca6) {
          return _0x36c728 !== _0x177ca6;
        },
        'gvsVh': "TZRAW",
        'NsKGg': "PMBoy",
        'psmfB': "*Please enter a query or a url!*",
        'emjzi': function (_0x363f69, _0x437c05, _0x349e94, _0x357fdf) {
          return _0x363f69(_0x437c05, _0x349e94, _0x357fdf);
        },
        'umulW': 'phone',
        'qzUiY': function (_0x42387f, _0x2b1112) {
          return _0x42387f + _0x2b1112;
        },
        'zPrVG': '.jpg',
        'EVVil': "quick_reply",
        'asjfP': "Image type",
        'rUanA': ".ssi ",
        'zbQEY': "Document type",
        'kgvpv': function (_0x86cf2d, _0x39077b) {
          return _0x86cf2d + _0x39077b;
        },
        'fwsVx': ".ssd ",
        'gpydy': function (_0x39c401, _0x5d9874) {
          return _0x39c401 === _0x5d9874;
        },
        'YcnyP': "ScuNG",
        'doSBF': 'ocNSb'
      };
      function _0x25ef19(_0x1e54bc, _0x2c8e45, _0xfa9490, _0x1694c3, _0x1e37ea) {
        return _0x2580(_0x1e54bc - 0xce - 0x2f2, _0x1694c3);
      }
      try {
        if (!_0x1996e8) {
          return await _0x334803("*Please enter a query or a url!*");
        }
        let _0x1c9400 = getRandom('');
        let _0x41eaa6 = await sswebA(_0x1996e8, true, "phone");
        fs.writeFileSync(_0x1c9400 + ".jpg", _0x41eaa6);
        let _0x2a3ce2 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ɪᴍᴀɢᴇ ᴛʏᴘᴇ",
            'id': ".ssi " + _0x1c9400 + ".jpg"
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ",
            'id': ".ssd " + _0x1c9400 + ".jpg"
          })
        }];
        const _0x359db9 = {
          'image': config.LOGO,
          'header': '',
          'footer': config.FOOTER,
          'body': "[𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋]\n\n   *📸 𝑺𝑪𝑹𝑬𝑬𝑵𝑺𝑯𝑶𝑻 𝑮𝑬𝑻𝑻𝑬𝑹*"
        };
        return await _0x517305.sendButtonMessage(_0x2bebc0, _0x2a3ce2, _0x438dfd, _0x359db9);
      } catch (_0x16f67b) {
        console.log(_0x16f67b);
        _0x334803("*Error !!*");
      }
    });
    const _0x1285e4 = {
      'pattern': 'sstab',
      'use': ".screenshot",
      'react': '🎥',
      'desc': "Convert url to screenshot",
      'category': '',
      'filename': __filename
    };
    cmd(_0x1285e4, async (_0x5e941f, _0x5a439, _0x1c8b42, {
      from: _0x258f70,
      q: _0xf81ef4,
      reply: _0x11f0d0
    }) => {
      function _0x506c64(_0xfa9519, _0x4563fd, _0x588ed4, _0x4eaab7, _0x162df2) {
        return _0x2580(_0x4eaab7 + 0xa6 - 0x157, _0x4563fd);
      }
      function _0x5b0720(_0x4570fb, _0x347225, _0x52c918, _0x5f2eed, _0x4da32e) {
        return _0x2580(_0x347225 - 0x570 + 0x31b, _0x5f2eed);
      }
      function _0x36056c(_0x54913a, _0x1cd50b, _0x1c0751, _0x30ac86, _0x5dbad5) {
        return _0x2580(_0x1c0751 - 0x4dc + 0x14e, _0x30ac86);
      }
      function _0x33f2ef(_0x35914d, _0x372d7c, _0x532542, _0x2a0742, _0x47d2bd) {
        return _0x2580(_0x2a0742 - 0x3ee + 0x1cd, _0x47d2bd);
      }
      function _0x17384c(_0x3a5ff0, _0x1f223e, _0xcecce0, _0x512e83, _0x5757c9) {
        return _0x2580(_0x512e83 - 0x4a5 + 0x14e, _0xcecce0);
      }
      const _0xc127a4 = {
        'VwRwR': function (_0x53f3de, _0x4f6f61) {
          return _0x53f3de(_0x4f6f61);
        },
        'rnEOB': "*Please enter a query or a url!*",
        'GxFAh': function (_0x278eb5, _0x92650d) {
          return _0x278eb5(_0x92650d);
        },
        'xcuqz': function (_0xcd095f, _0x1ccb8e, _0x1031c8, _0x31e658) {
          return _0xcd095f(_0x1ccb8e, _0x1031c8, _0x31e658);
        },
        'yuiHa': "tablet",
        'tznaJ': function (_0x5ab0de, _0x44d68b) {
          return _0x5ab0de + _0x44d68b;
        },
        'QJsTZ': ".jpg",
        'aiIos': 'quick_reply',
        'nBJrF': "Image type",
        'DrWUW': function (_0x53d301, _0x35795b) {
          return _0x53d301 + _0x35795b;
        },
        'wwVFB': ".ssi ",
        'aRxzi': "Document type",
        'WhTxC': ".ssd ",
        'eEzkt': function (_0x1ab91b, _0x3ef437) {
          return _0x1ab91b(_0x3ef437);
        },
        'ULBvV': "*Error !!*"
      };
      try {
        if (!_0xf81ef4) {
          return await _0x11f0d0("*Please enter a query or a url!*");
        }
        let _0xc6d5fb = getRandom('');
        let _0x2890ba = await sswebA(_0xf81ef4, true, "tablet");
        fs.writeFileSync(_0xc6d5fb + ".jpg", _0x2890ba);
        let _0x1a01e2 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Image type",
            'id': ".ssi " + _0xc6d5fb + '.jpg'
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Document type",
            'id': ".ssd " + _0xc6d5fb + ".jpg"
          })
        }];
        const _0xf4e87 = {
          'image': config.LOGO,
          'header': '',
          'footer': config.FOOTER,
          'body': "[👨‍💻𝐃 𝐀 𝐑 𝐊 - 𝐄 𝐕 𝐈 𝐋]\n\n   *📸 𝑺𝑪𝑹𝑬𝑬𝑵𝑺𝑯𝑶𝑻 𝑮𝑬𝑻𝑻𝑬𝑹*"
        };
        return await _0x5e941f.sendButtonMessage(_0x258f70, _0x1a01e2, _0x5a439, _0xf4e87);
      } catch (_0x483ffe) {
        console.log(_0x483ffe);
        _0x11f0d0("*Error !!*");
      }
    });
  }
  const _0x35ce10 = {
    'pattern': "ssi"
  };
  function _0xa2d266(_0x3092b6, _0x32179e, _0x6ea3b3, _0xee235d, _0x4eca1b) {
    return _0x2580(_0x3092b6 + 0x31b, _0x32179e);
  }
  _0x35ce10.dontAddCommandList = true;
  function _0x500914(_0xeb35a4, _0xdf1943, _0x409383, _0x4590b1, _0x16da41) {
    return _0x2580(_0x409383 - 0x157, _0xeb35a4);
  }
  _0x35ce10.filename = __filename;
  cmd(_0x35ce10, async (_0x4e574f, _0x5baaac, _0x47a2e8, {
    from: _0x1ee222,
    l: _0x5e6b2d,
    quoted: _0x1b1e0f,
    body: _0xdde723,
    isCmd: _0x3c44b0,
    command: _0x3cf74a,
    args: _0x47dcf1,
    q: _0x32ea24,
    isGroup: _0x113212,
    sender: _0x2ec9b1,
    senderNumber: _0x5a6a05,
    botNumber2: _0x22e994,
    botNumber: _0x4c5c26,
    pushname: _0x3e36aa,
    isMe: _0x556bc4,
    isOwner: _0x1ece5a,
    groupMetadata: _0x5a41f4,
    groupName: _0x5e21f6,
    participants: _0x3483cf,
    groupAdmins: _0x4f2776,
    isBotAdmins: _0x22a2e1,
    isAdmins: _0x1a3e77,
    reply: _0x1de819
  }) => {
    function _0x8cf242(_0x1d4e72, _0x518356, _0x4ed979, _0x3d1f77, _0x212d92) {
      return _0x2580(_0x4ed979 + 0x17f - 0x2f2, _0x518356);
    }
    function _0x4acf90(_0x59b25b, _0x4d4bdb, _0x33dc57, _0x783504, _0x42afd9) {
      return _0x2580(_0x59b25b + 0x343 - 0x157, _0x33dc57);
    }
    function _0x2a6bee(_0x47b337, _0x568b1a, _0x189983, _0x39ed0c, _0x1f7b0e) {
      return _0x2580(_0x189983 + 0x13c + 0x1cd, _0x568b1a);
    }
    const _0x305f4e = {
      'GCFCp': function (_0x271142, _0x34d8be) {
        return _0x271142(_0x34d8be);
      },
      'dKOap': "*ERROR !!*",
      'aUCpf': function (_0x2708a7, _0x1a8073) {
        return _0x2708a7(_0x1a8073);
      }
    };
    function _0x2a0ca7(_0x5ac739, _0x24eef5, _0x556d14, _0x365d54, _0x4e6749) {
      return _0x2580(_0x556d14 + 0xa3 + 0x1cd, _0x24eef5);
    }
    function _0x525c26(_0x3034e2, _0x417d5a, _0x40e44f, _0x33cb5d, _0x30f0e3) {
      return _0x2580(_0x417d5a + 0x1a1 - 0x157, _0x3034e2);
    }
    try {
      const _0x5b9704 = {
        'text': '📥',
        'key': _0x5baaac.key
      };
      const _0x2e4000 = {
        'react': _0x5b9704
      };
      await _0x4e574f.sendMessage(_0x1ee222, _0x2e4000);
      const _0x504387 = {
        'quoted': _0x5baaac
      };
      await _0x4e574f.sendMessage(_0x1ee222, {
        'image': fs.readFileSync(_0x32ea24),
        'caption': config.FOOTER
      }, _0x504387);
      const _0x4161f5 = {
        'text': '✔',
        'key': _0x5baaac.key
      };
      const _0x2ce5ea = {
        'react': _0x4161f5
      };
      await _0x4e574f.sendMessage(_0x1ee222, _0x2ce5ea);
    } catch (_0x423d15) {
      _0x1de819("*ERROR !!*");
      _0x5e6b2d(_0x423d15);
    }
  });
  function _0x3e4267(_0x2f1d19, _0x224fff, _0x36188a, _0x249258, _0x119002) {
    return _0x2580(_0x2f1d19 + 0x1cd, _0x249258);
  }
  const _0x38b3ac = {
    'pattern': "ssd"
  };
  function _0x4e6562(_0x2eabae, _0x2b6039, _0x3605c8, _0x5f4e84, _0x3fe4bf) {
    return _0x2580(_0x5f4e84 - 0x2f2, _0x3fe4bf);
  }
  function _0x431c() {
    const _0x38d96b = ['bCouWQ9TWRO', "WO3dPSoVkCka", "h3CLySkc", 'WPiVaaf3', "W6fvW4aiW7K", "WPxdP8oxgmkb", "W57cOmkyESk2", "WPWRbX8", "kYddOCkqWPy", "aWadW5ldRa", "nwNdSKy", 'ENOLW5C', "WOqBWQ/dQ00", "W6JcICovW7JcIW", "WPhcKSoYW6NdQa", "W7i+WRBcTKNcMCkOW4JcOCosWRDLW7m", "gKaLsSkA", "oZVdM8k8WRC", "WPFdVmodBmkJ", "W7RcQmknwCkv", '8jILLVgbPAtXG7E58kANQmoX', "zqVdUYL6W74aySobW5L6", "lwTo", "W5tcRCoIW6xcQG", "77+r772R772t772hmG", "bLutW57dSG", "lwZcTLW9", "m8kosgWb", "mmkQWPRcLuS", "kuu0W7P9", "z8okpNnF", "mSkIzttcUW", "h8oszv4i", 'Y7ljMUg3HrtHTP4', "s8ofqCkIW5G", "W6GeWOBdUZ8", "qLaAW6W", "imopWPGKWPC", "W6OMjCoqW4W", "AKxcULhdMq", "bSo1ECoigG", "yL/cTe/dLa", "k8oVWORcRXG", 'W5ZdOSo1omkx', "W5Cnrv/dGW", "o1tcPq", 'WRLaW6WctW', "DMeSW7bY", "WQvFW6ffxG", "W5yzru7dIW", "W4ZcKx0PWOu", "WRlcGSk7CG", "W4TLWP7dVCor", "z8oJWOFdJSkF", "lKVcPW", "WRixWQS", "W4K3AG", "W67dNmkjtW", "khZdPa", 'W57cJmkYnGy', "W6JcSSkQwSo2", "W5ZcL3qAWOi", "W7GNA8kUlq", "W5/dH0BcSSkY", '4P6RfCk+r8o5', "cK92rCoU", "W5SskviJ", "oe/cR38S", "AuRdL8kquG", "WRSkWO/dPu0", 'eCoedSo1rq', "w8oYEmorha", "x23cLuRdPq", 'fSoZWOC8WOi', "lSk+uw4J", 'iMNcOub1', "WPqho8oiW6a", "F3/dSLf6", "W47cSx4jWOu", 'bSkADrlcTq', "W5RcVSoYW6xcPa", "ff7cQW", "qmkvtmkPWOe", "bCkRqfSI", "8lcIIEkcJpc/KBnf4BsI4BAG4BwV", "W43cQN8u", "fvjUvmos", 'o8kYth8J', "W6xcKMixWP8", "W7VcJSoIW7xcPq", 'WPhcKSoIW7lcRq', "W5BdLSoYl8kk", "deLUuq", "WPVcUCkdWP0S", "hSk6jSk3Aq", 'psLPWPaPwCkZW7RdLCk3pe4y', "EtqxpGO", "oZVdPSkkWRa", 'WQNcMmk8z8k4', "WQ0DW6ZdOva", "uCkutCkOgmksW5WpW7nyWPlcQSkl", 'W58NDW', "b3BdHYbd", "Bu07W4jG", "W5ZcGmoIW6JcRq", "WPfPW4/cVr8", "8y2NLVc8PAZWORwpWRhWVls0", 'xCosh8kXW74', "W74HCmkvha", 'ANOUW4HU', "A3OZW5bY", 'W6dcTSkFAmk1', "AKJdKCkbuG", "W6qplMC6", 'W6JcU8kXqmo2', 'BeTfqei', "FgT9W5zO", "W5hcH8oNW6/cMG", "aSkvjSkquG", "ztGBkd8", "WQzeW5BdOZ8", 'ALZdLSkD', "g3HYy8oF", "khhdKtG", "t8outmkJW4y", "WOnNW4v1sG", "Ah1evG0", "WPq3Cmkxsa", "c8odWPJcLa", "n2T5uxq", "WQ0bW40xWRW", "W5eOcM0T", 'e8koA0qs', "WPpcGSkXFCk/", 'WQuqjmodW4q', "W5ZdVmo9W7z8WO7dL8oKvGKrWR0x", "zeZdHvhdHq", "m2hdMW", "erqEW5tdOa", "w3hcP0RdHq", 'mgZdL8khwa', "FZldQNOI", "W5BWOOoC4OgQ8yMbIaFVVB/VVke", "yCokohvF", "WQRcJ8kotSkd", 'h8oXWPizWPC', "BfNcKq", "WO/dTSo0", "WP0Rdqn8", "afvlWPdcRq", "eCoceSo0yG", "W6rHWPpdV8oA", "WOGNdWjF", "uYKm", "W45JWP/cTW", "W7WaW50eWRi", "aSogs8kYW4a", "iKJcPW", "wda4W6pdIa", "wbW1dCkQbSkChSoYlhNcVa", "iMTewvK", "i8oBWOGcWOW", "W4aqW4mWWOm", 'hfKZvG', 'W5JcImoNW7K', "lwNdLZX4", "W43cHmoGW6pcVa", "dmkiBf8d", "jmk+AI4", "kSoaWP/cQGy", "WOLaW4ndsa", 'u1nhdG', 'AKZcLuddKG', "W6/cRCktCSor", "fXaeW4ldRW", "D0ZdL8kwxW", "zMSPW5nP", "WQT7W6xdPIC", "hc8miqO", '4BAmWPxjTSQ5WP0', "wXb/8jsGJmkB", "sKSTW5T2", "rLNcLLBdNq", "oKmVW7G", 'WQCwWQ8', "W7RcOmkXEmo2", 'CL5Yjd4', 'W6RcPSkCatC', "WPOWESkodq", "tJ4umHS", "fmkCe8khEa", "W4XLWRVdT8om", "F8oJWOa", "WORdLmk0WRldVvm6W7GtAIOAWQO", "WPNcVmk7WQW", "W6auW5OdWPu", "nSkTfSkLEW", "e01HuCoE", "W4eExq", 'yxe4WOm', "CSo7W5FdLHVdM8klW6JdVIJcJW", 'W5pdR0BcI8kL', "j8kHkSkaxG", 'lv9cwL0', "xZNdIMaI", 'Af3cHCkarq', "WO8Ne0zZ", "WO7cS8kHFmop", "BWZdUwaw", "W5VcQ8kvbWC", "jVgaGAVIGkBWPRczro+9Oo+9UW", "p8kWmG", "FKJdKCku", "WOrSW4VdOXS", "omogWRK", 'W5pcS2KsWP8', "j8oihSo/rq", "WR/dVSomemku", 'bWKqt3X+hCkIW6WgDJXZ', 'W5S0C8kBbG', "hdGujqO", 'W5NcTSkEo8k1', "w0eGsSkg", "ne14v8oI", 'W6uEpw0G', "W5LJWOlcUa", 'AuZdKq', "W6/dNmkdu8ot", "rSoLkmkKW50", "W4PXuf4LWOldNSobBmkkkHlcUa", 'WRddNmoheG', "kmobWP85WR8", "bezZxCo3", "W6NcOmolW4NcMG", "v8kTB04h", 'vmkYD8k5Aa', "nCo+WOiSWR4", "W6JdMmkk", 'dCkCD18d', "bCoYzSohnG", "BCkBs8kfrW", 'euL0qCo9', "WOLCW7nkva", "jmkHFWhcUa", 'W6HKWOtdT8ov', 'fSorEmofeW', "WQ4nWR/dRa", "nSkun8kuqa", "i1SSAmkY", 'WPikWRRdVxG', 'WQtcImkNFW', 'AeZdHmkwqW', 'oSk5BW', "BmoDowTl", "ju/cLKhcNa", "yt7dQMa8", "kMfq", "W7dcMCkME8k/", "WRKwlZna", 'zCoywCkHW4q', "AgPsquy", 'W5rJWRVdSCoZ', "jCkkEISaW43dSmooWPBdKhpdSmkm", "WPOgqv0", 'WRekWRu', "W6qAbf0R", 'l0iK', "WRFcGSkTCG", "WOZcUSk7WQuU", "WPNcQmk8WRaS", "B8keAG", 'a8oFfCo/uW', "oH/dQSkUWRK", "8jQJQUkdVVcXSyf8zqFdSq", "mgjZyCoc", 'imk6o8kGrq', "W43cSh8i", 'mSksFCkEEW', "rCoaxSkrW4O", "oSkNAq", "yxa2W4P/", "ngTwuvK", "lSoOo8oF", "W5ecrrRdKa", "wSkUuCk4wW", "WOSdgXz6", "luSvW7Xk", 'grVdH8kQWRq', 'smoIlSocBW', "W4S+vSkxmq", 'W71hW6FcGd8', "ndbYW5rT", "buXdwSo1", "eqFdGmkXWQu", "8k+IV+kaGFcQOAVcN0/dVmkC", "WOrxW6fgxG", 'W4ZcPmo4W5hcOW', "m+kFUxxXJjEU8y+vNW", "amobWP3cII4", "lMTwvKG", "DCksAG", 'W57cKSoRW6BcMa', 'W7ZdM0pcNmk3', 'eIGg', 'mNrzu2C', 'DCotkq', "zL3cI0hdSa", "i8o2wCowjG", "WRnjW6ldGY8", 'WP3dVSoL', "W5r8WPC", "E8okBhLE", "W58HBCknaa", "f8oUB8oy", 'zCoxWPldLmk7', "iCouWRK5WQS", "nwTzvMa", 'aM/dTgTC', "kZVdHmkrWOy", "khmhASkX", "Dmool8kvW6a", "W5tcO8kj", 'W7lcTCkSwG', "E0NcLK0", "omkRvuik", 'WOBcU8kX', 'W73cPSktesS', "WRBcQCk2umkZ", "W4LPWOhdS8ol", "bgJdIxDc", "lx7dOmkqqCkGW7u", "E8kIWOFdLCoA", 'shyXW4zj', "W4P2vv5cW6hcImoCBSkN", "b8omhSo8yW", "yK/cKq", "W5FcHmoGW6tcRq", "W5ZdLmofcCkX", "WO7cOmkUWR0", "WQuOnCoYW6S", "W7tcS8kRxW", "WP/dSSo0omkc", "FYxdVCkBWOm", 'W4JcQ8ksdcy', "WRXxWQ/dQ1m", 'WRBcSmkEecy', "nNFdIJ9B", "gSoutSo2bq", "WRbOW7pcOX0", "wCobtmkPW48", "gmk4Euas", "vZ4m", "xmoas8kU", "W7JcV08yWQW", "W77cTCkQqmo2", "m8ktychcLG", "nvirW797", 'WQPBW6XhAa', 'afpdJcDB', "uq0riWq", "W63dKmkCxCoj", "iZqHW6hdJa", "W5ZcS8oNW6hcSG", "i8kzWOJcGfq", "W4/cSsWvWPK", "WRKap2eP", "W6JcIu4wWR0", "xfnpeMO", "W7iGv3hdQW", 'nvWHW7j2', "W77cQMiwWO4", 'W7NcQM8vWOy', "wKLjgda", "bx0TW69A", "CeH2iHm", '8jgMNU+6HG', "WOZdPSoZnq", "CSkJvmkEwa", "4Bsq4Bs4W4xHTl7HTRS", "W4qnru7dGq", "WPa5bmoVW6a", "W4ZcKSoXW6JcPW", "jeiWx8ky", 'gmktDWSs', "t8kh772kWQqa", "WQ8agCoXW4e", "W5DlW77cOJ8", "W6anuXRdKa", 'W7r8WQa', "kZhdSmkk", 'WRRcRmkKWQeQ', "DmoTWP3dJmkF", 'W4zIW6XhwG', "W5S2gbz3", 'xN3dUMOJ', "W6efW4RdOW", 'hvK5sSkA', "fmoSBG", "W4/dHN3cQq", "ymorgwPb", 'W6/cICoUW67cRq', "odhdVa", "W77cM8kCvCop", "hCkmhCklxa", "W6NdMCoQm8oOjmkoW5ddHSkGAu8", "DZOdcN3cLq8JESoZ", "W4RcTSky", "zKLYzNK", "gmotC0mw", "W73cSmkoaYq", "j2HoAKy", "kCkVuh8p", 'W4RcKSoK', "WRODWR8", "W5FcG8kEtCkt", "BmksuCkdEG", "tX8epGK", "WQ9EW6nLDG", "c3PivSoU", 'W4ZcO8kyBSkM', "nKNcSh82", "W7hcIKSV", 'WQ0ufWnL', "W44iz8kvjG", "dCkhd8oZuG", 'mSk2hmkREW', "fc4weWC", "kuiL", "W6VcUSkaFSkh", 'WQdWR7cj4OgR8jUWImoh776577Y/', "uamboGO", "ev7dMdzL", 'WP/cLCo4W7dcRq', "WQlcImk+AmkU", 'Cf9shda', "8jU3Jpc0Hk3WKksB8lcwVFcuLlS", "aCojWP3cIs4", "WQSUbaDH", "imoLq8oZlq", "WQKqiW", "W5ZdIMpcPa", "cXSj", "W6VcGmkLC8k9", 'W64jj8of', "vmonWR7dT8k7", 'kghdKq', 'W448q2ZdOW', 'WOVdOCoPkCka', "W73cQCk2vCo0", 'WP7cVSkxrmko', "WPNcJSkMWQyh", "ldhdVa", "WPqBuftdKa", "z3LZmGe", "WRGzphqM", 'W5tdL2JcVmk8', "dKfHqmoZ", "WPDK77YU77+Asa", '776Y77+Q77+p772dyW', "r8oFWO/cHgS", "WOxdPSoPfCke", "W7NcQSk1uCo9", "W6/cSCkufIy", "W69yWRW", "AhaYW5D/", "FxOZW4Dx", "jgftsW", "W5iTBCkBrG", 'qCoRmSk1W7S', "k2Gyymkv", 'W6mvW5xdRa', "dSkjCuii", 'aSojWOu', 'WPHWW6Hlxa', "bv3dSuPc", "mWGHfmkY", "ACksEW", 'W4RdQ38dWPK', "W77cRmksfIy", "WPBcG++8S8oOW78", "W7ZcKSkNs8kF", "CHZcILFcNa", "WPrQlmksaq", "FCobA8kECG", "tCotqCkEW4O", 'WP4VcXX7', "W6GLW6pdMdC", 'qhHjhIm', "jN7dQff+", 'efuS', "W4ZcVCkyrmkH", "kSoZBSorga", 'jmkVWQ3cJKm', "WOJcNmklWRqV", "FKZdLSkw", "W5jpW77cJcW", 'gv4IW7P2', "jCk+ydlcVG", 'WPldGE++Ro++PmoO', "WQNdRSoZbCkIWOFcVmkjWOBcVcpdUrC", 'B8kvBmkfCa', "umo2ma", 'W6u9W4y2WRW', 'W57dKhBcVmk4', "sY7dHMaR", "smoutmkN", "dSkyBu8R", "W4xcOwuOWOi", "AmkBCmknva", "ngVdHq", 'W6eAW5m', 'W63dMSkbqSo8', "WR4unW9+", 'pgVdJcrU', "WRBdRCosesy", 'WOKNaavM', "pMT5r24", "x1xVVzZcHCkN", "DCkEowHD", "W4RdMSkbqmoy", "W6/cUCkKiYe", "ffX0wSo2", "W6VcT8kpcY0", "W78nD8khiG", "leqZW70", 'xb8AW5y', 'W5ubva', "WRSBWRJcPf8", 'lXddRCkZWQa', "4BAX4BsJWQRXHycJ4OoK8jArSW", "W7rbW6FcHcC", "W7aCWQNdT1u", "WPWSWOldKwW", "omoyWQWQWQS", 'WQrBW4RdNtK', 'aCkv77Yv77+IWOe', "WRNcGCk6wmkJ", "W59PWPpdVmo5", "hu3dLILL", "iwtdRKT+", 'l8k4AW', 'W7VcT8kuds0', "pMVdJsrk", 'WPG3WOpdKhS', "W5u0i8kkeq", "hmoDDLKk", "D8oSkNTl", "WROzWRJdPq", "WPDxW5xdJYK", "W47cOgieWQy", 'wsJdR2KQ', "keddHX1+", 'W4zPWOS', 'FKZdK8kCva', "sYJdUMC", "DfRdJCkAqW", 'WQPGW6BdQrS', 'W48MiN4h', "WRRdNmopcCkG", 'uLva8lobVXe', "fHBcJ1O", 'W64uW4acWR4', "WP4sWQedeq", "W6ZcU8kNwmo2", 'WRBcGSkTzSo3', 'o8kRiCk0EW', 'Fd98WOiW', "W53cKCox", "WQDKW7tdVHi", 'WPNdVCoZnCkk', "W74wW4ycWRW", "A20EW4jP", "uSolWOFdG8kW", "d1qSW7bW", "W6yEweVdQa", "W57cJmoK", "D8kzzSkKDa", "W5iBqMZdNa", "W7uElLS7", 're9shW', "bHayWPhdPG", "dKzLfq", 'jsZdSKzP', "WPddQCkNWRzP", "W4JdHMVcUCkD", "l1GUW7j/", "WQZcUCkPWO8D", "W4ZcHmoVW6tcIG", "W4FdP8oNWQGG", "ot3dPmkBWP8", 'WPusW69qgW', 'dCojWO/cJG', "E0NdK3Du", "zmoHWOhdN8kF", "W4XQWOVdGmou", "W6bdFFc3SzVcMa", 'lmkKWOK', "WPmNaaj3", 'vCoXl8kP', 'FCk1jCkJ', "i8kKWOpdJK0", "feiS", "zmkiemkHFSkRW4G", "oSkZmmkxCq", 'W4/cPCk0BSowz8kLWOZcQr/cR0xdTG', "8jAdRokbKFgpGiflofeJ", "WQSfecvW", 'pSk+o8kGra', 'W6ZdM8kBfSoj', "FCoql3ze", "W4VcJSouW7dcUa", "nwSxv0m", 'BK/cLKtdMW', "Etqypam", "tZldNh8/", "WP7cM8kEWOyF", "WQX/W74", 'W7mFW5BcRW', "fJiAW7ZdSq", "77YH77Yv77+x77YeWPW", 'W4lcOCkv', "ECkWrSk7ra"];
    _0x431c = function () {
      return _0x38d96b;
    };
    return _0x431c();
  }
  _0x38b3ac.dontAddCommandList = true;
  _0x38b3ac.filename = __filename;
  cmd(_0x38b3ac, async (_0x5b347c, _0x96aa7, _0xe8b12c, {
    from: _0x2972d9,
    l: _0x30ef2b,
    quoted: _0x485f0c,
    body: _0x210988,
    isCmd: _0x250d40,
    command: _0x4dcdf5,
    args: _0x571f23,
    q: _0x5a7bcc,
    isGroup: _0x3cc57d,
    sender: _0x46ac8d,
    senderNumber: _0x1c9bf9,
    botNumber2: _0x1cb2b9,
    botNumber: _0x1605f5,
    pushname: _0x50c502,
    isMe: _0x5c6e8e,
    isOwner: _0x3dc9d9,
    groupMetadata: _0x4df418,
    groupName: _0x3fb127,
    participants: _0xfa490b,
    groupAdmins: _0x40179c,
    isBotAdmins: _0x100113,
    isAdmins: _0xbeeaa0,
    reply: _0x5714c9
  }) => {
    function _0x3188e6(_0x425e8f, _0x1a0fb1, _0x58f6f0, _0x382556, _0xf8584b) {
      return _0x2580(_0xf8584b - 0x1e9 + 0x31b, _0x382556);
    }
    function _0x3154ec(_0x43a2f5, _0x21f5e0, _0x5cc8c4, _0x44c8d4, _0x5d2adf) {
      return _0x2580(_0x43a2f5 + 0x2df - 0x2f2, _0x44c8d4);
    }
    function _0x3267b6(_0x38142a, _0x390c1f, _0xa9d9f2, _0x1a969d, _0x11b364) {
      return _0x2580(_0x38142a - 0x12f - 0x157, _0x390c1f);
    }
    const _0x1774e5 = {
      'pDlvF': 'image/jpeg',
      'pGnbN': function (_0x4dbe9c, _0x234404) {
        return _0x4dbe9c + _0x234404;
      },
      'ekblC': "screenshot",
      'hvbhY': '.jpg',
      'qTqIn': function (_0x3455bc, _0xc9487f) {
        return _0x3455bc(_0xc9487f);
      },
      'GaLme': "*ERROR !!*",
      'oiauk': function (_0xbbdbf6, _0x293a9b) {
        return _0xbbdbf6(_0x293a9b);
      }
    };
    function _0x318531(_0x27eaa0, _0x157071, _0x1ad242, _0x570d64, _0x2c8743) {
      return _0x2580(_0x157071 + 0x4b3 - 0x2f2, _0x1ad242);
    }
    function _0x2f8c7b(_0x588eac, _0x386a41, _0x19a285, _0x51e052, _0x149b5a) {
      return _0x2580(_0x386a41 + 0x20b - 0x157, _0x51e052);
    }
    try {
      const _0xb46a60 = {
        'text': '📥',
        'key': _0x96aa7.key
      };
      const _0x106477 = {
        'react': _0xb46a60
      };
      await _0x5b347c.sendMessage(_0x2972d9, _0x106477);
      const _0xae62f6 = {
        'quoted': _0x96aa7
      };
      await _0x5b347c.sendMessage(_0x2972d9, {
        'document': fs.readFileSync(_0x5a7bcc),
        'mimetype': "image/jpeg",
        'fileName': 'screenshot.jpg',
        'caption': config.FOOTER
      }, _0xae62f6);
      const _0x5354cf = {
        'text': '✔',
        'key': _0x96aa7.key
      };
      const _0x334dbc = {
        'react': _0x5354cf
      };
      await _0x5b347c.sendMessage(_0x2972d9, _0x334dbc);
    } catch (_0x1ebeb7) {
      _0x5714c9("*ERROR !!*");
      _0x30ef2b(_0x1ebeb7);
    }
  });