(function (_0x16591c, _0x3c6bb2) {
    const _0x21484c = _0x16591c();
    while (true) {
      try {
        const _0x2f32ee = -parseInt(_0x3f3b(0x13a, '1FIB')) / 0x1 + parseInt(_0x3f3b(0x225, 'TiOu')) / 0x2 + -parseInt(_0x3f3b(0x237, "s4D@")) / 0x3 * (-parseInt(_0x3f3b(0x1be, 'Ydye')) / 0x4) + -parseInt(_0x3f3b(0x2aa, "!U4C")) / 0x5 * (-parseInt(_0x3f3b(0x2cd, "4RGt")) / 0x6) + -parseInt(_0x3f3b(0x322, 'JP)o')) / 0x7 + parseInt(_0x3f3b(0x2ba, "5]wZ")) / 0x8 + -parseInt(_0x3f3b(0x26e, 'mhd@')) / 0x9 * (parseInt(_0x3f3b(0x26b, "91^$")) / 0xa);
        if (_0x2f32ee === _0x3c6bb2) {
          break;
        } else {
          _0x21484c.push(_0x21484c.shift());
        }
      } catch (_0x20b116) {
        _0x21484c.push(_0x21484c.shift());
      }
    }
  })(_0x2d29, 0xe4926);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require('../lib/command');
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
  } = require('../lib/functions');
  const _0x576a56 = {
    'pattern': "texttoimgv1",
    'react': '🤖'
  };
  function _0x4b4e4c(_0x4354e8, _0x5158e3, _0x28ac5f, _0x4dc893, _0x48a9a2) {
    return _0x3f3b(_0x48a9a2 - 0x11f, _0x28ac5f);
  }
  _0x576a56.alias = ["texttoimagev1", "toimagev1", "t2iv1"];
  _0x576a56.dontAddCommandList = true;
  _0x576a56.filename = __filename;
  cmd(_0x576a56, async (_0x1a0b36, _0x3a68e2, _0x4edcc6, {
    from: _0x160d03,
    l: _0x3a4f7c,
    prefix: _0x1a69bd,
    quoted: _0x570757,
    body: _0xaf0965,
    isCmd: _0x56f0b6,
    command: _0x5af033,
    args: _0x65629c,
    q: _0x2bd0e8,
    isGroup: _0x46dc4f,
    sender: _0x521591,
    senderNumber: _0x2a262d,
    botNumber2: _0x263081,
    botNumber: _0x4ad2a3,
    pushname: _0x45fa77,
    isMe: _0x1870e1,
    isOwner: _0x86a552,
    groupMetadata: _0x40af1d,
    groupName: _0x4a1f67,
    participants: _0x4cc400,
    groupAdmins: _0x1c7409,
    isBotAdmins: _0x2495c3,
    isAdmins: _0x6a75d1,
    reply: _0x2d90f0
  }) => {
    try {
      if (!_0x2bd0e8) {
        return _0x2d90f0("*Example: .imagine woman,hair cut colour red, full body, bokeh*");
      }
      let _0x45010c = await fetchJson("https://hercai.onrender.com/v3/text2image?prompt=" + _0x2bd0e8);
      const _0x2fe412 = {
        'url': _0x45010c.url
      };
      const _0xaa739f = {
        'image': _0x2fe412,
        'caption': "*_ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*"
      };
      const _0x4f242a = {
        'quoted': _0x3a68e2
      };
      _0x1a0b36.sendMessage(_0x160d03, _0xaa739f, _0x4f242a);
    } catch (_0x3aa475) {
      _0x2d90f0("*Server is busy. Try again later.!*");
      _0x3a4f7c(_0x3aa475);
    }
  });
  const _0x257054 = {
    "pattern": "prodia",
    "alias": ["texttoimage4", "toimage4", 't2i4'],
    react: '🤖',
    "dontAddCommandList": true,
    "filename": __filename
  };
  cmd(_0x257054, async (_0x2f410f, _0x2182c6, _0x54ae3f, {
    from: _0x3dc650,
    l: _0x307c35,
    prefix: _0x780fc9,
    quoted: _0x3c278b,
    body: _0x20838c,
    isCmd: _0x506e4c,
    command: _0xec34e9,
    args: _0x272339,
    q: _0x155598,
    isGroup: _0x28689d,
    sender: _0x1f2f1d,
    senderNumber: _0x3dfd4a,
    botNumber2: _0x5c5032,
    botNumber: _0x169ad4,
    pushname: _0x74788e,
    isMe: _0x547181,
    isOwner: _0x59b6ac,
    groupMetadata: _0x3d9562,
    groupName: _0x34ae14,
    participants: _0x58795,
    groupAdmins: _0xc747ee,
    isBotAdmins: _0x493006,
    isAdmins: _0x450589,
    reply: _0x375488
  }) => {
    try {
      if (!_0x155598) {
        return _0x375488("*Example: .imagine woman,hair cut colour red, full body, bokeh*");
      }
      let _0x29ce8e = await fetchJson("https://hercai.onrender.com/prodia/text2image?prompt=" + _0x155598);
      const _0x95c509 = {
        'url': _0x29ce8e.url
      };
      const _0x4c32c6 = {
        'image': _0x95c509,
        'caption': "ᴅᴀʀᴋ-ᴇᴠɪʟ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ"
      };
      const _0x58d5eb = {
        'quoted': _0x2182c6
      };
      _0x2f410f.sendMessage(_0x3dc650, _0x4c32c6, _0x58d5eb);
    } catch (_0x1bb740) {
      _0x375488("*Server is busy. Try again later.!*");
      _0x307c35(_0x1bb740);
    }
  });
  const _0x44b87a = {};
  function _0x3f3b(_0x429345, _0x1f031f) {
    const _0x3306c6 = _0x2d29();
    _0x3f3b = function (_0x2f567b, _0x1dbbaa) {
      _0x2f567b = _0x2f567b - 0xba;
      let _0x1b4d31 = _0x3306c6[_0x2f567b];
      if (_0x3f3b.xvdRuA === undefined) {
        var _0x4be1ee = function (_0xb83d62) {
          let _0x311856 = '';
          let _0x21505e = '';
          let _0x431021 = 0x0;
          let _0x2ed621;
          let _0x3baf57;
          for (let _0x400aba = 0x0; _0x3baf57 = _0xb83d62.charAt(_0x400aba++); ~_0x3baf57 && (_0x2ed621 = _0x431021 % 0x4 ? _0x2ed621 * 0x40 + _0x3baf57 : _0x3baf57, _0x431021++ % 0x4) ? _0x311856 += String.fromCharCode(0xff & _0x2ed621 >> (-0x2 * _0x431021 & 0x6)) : 0x0) {
            _0x3baf57 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x3baf57);
          }
          let _0x5aa950 = 0x0;
          for (let _0x2a39fe = _0x311856.length; _0x5aa950 < _0x2a39fe; _0x5aa950++) {
            _0x21505e += '%' + ('00' + _0x311856.charCodeAt(_0x5aa950).toString(0x10)).slice(-0x2);
          }
          return decodeURIComponent(_0x21505e);
        };
        const _0x32bbef = function (_0x804904, _0x5e1122) {
          let _0x2390dc = [];
          let _0x34782d = 0x0;
          let _0x5b9f7a;
          let _0x539fbd = '';
          _0x804904 = _0x4be1ee(_0x804904);
          let _0x340584;
          for (_0x340584 = 0x0; _0x340584 < 0x100; _0x340584++) {
            _0x2390dc[_0x340584] = _0x340584;
          }
          for (_0x340584 = 0x0; _0x340584 < 0x100; _0x340584++) {
            _0x34782d = (_0x34782d + _0x2390dc[_0x340584] + _0x5e1122.charCodeAt(_0x340584 % _0x5e1122.length)) % 0x100;
            _0x5b9f7a = _0x2390dc[_0x340584];
            _0x2390dc[_0x340584] = _0x2390dc[_0x34782d];
            _0x2390dc[_0x34782d] = _0x5b9f7a;
          }
          _0x340584 = 0x0;
          _0x34782d = 0x0;
          for (let _0x3129d1 = 0x0; _0x3129d1 < _0x804904.length; _0x3129d1++) {
            _0x340584 = (_0x340584 + 0x1) % 0x100;
            _0x34782d = (_0x34782d + _0x2390dc[_0x340584]) % 0x100;
            _0x5b9f7a = _0x2390dc[_0x340584];
            _0x2390dc[_0x340584] = _0x2390dc[_0x34782d];
            _0x2390dc[_0x34782d] = _0x5b9f7a;
            _0x539fbd += String.fromCharCode(_0x804904.charCodeAt(_0x3129d1) ^ _0x2390dc[(_0x2390dc[_0x340584] + _0x2390dc[_0x34782d]) % 0x100]);
          }
          return _0x539fbd;
        };
        _0x3f3b.KPCvDP = _0x32bbef;
        _0x429345 = arguments;
        _0x3f3b.xvdRuA = true;
      }
      const _0x27229a = _0x3306c6[0x0];
      const _0x45e006 = _0x2f567b + _0x27229a;
      const _0x181ac4 = _0x429345[_0x45e006];
      if (!_0x181ac4) {
        if (_0x3f3b.LMdnbY === undefined) {
          _0x3f3b.LMdnbY = true;
        }
        _0x1b4d31 = _0x3f3b.KPCvDP(_0x1b4d31, _0x1dbbaa);
        _0x429345[_0x45e006] = _0x1b4d31;
      } else {
        _0x1b4d31 = _0x181ac4;
      }
      return _0x1b4d31;
    };
    return _0x3f3b(_0x429345, _0x1f031f);
  }
  function _0x1d8650(_0x26b590, _0x201a00, _0x184c61, _0x4e08f6, _0x93c344) {
    return _0x3f3b(_0x93c344 + 0x189, _0x184c61);
  }
  _0x44b87a.pattern = "texttoimg2";
  _0x44b87a.alias = ["texttoimage2", "toimage2", "t2i2"];
  _0x44b87a.react = '🤖';
  _0x44b87a.dontAddCommandList = true;
  _0x44b87a.filename = __filename;
  cmd(_0x44b87a, async (_0x234b4f, _0x5f95c9, _0x11870e, {
    from: _0x283164,
    l: _0xa3fd4b,
    prefix: _0x2bd068,
    quoted: _0x5e4b8d,
    body: _0x48b87c,
    isCmd: _0x2e7741,
    command: _0x11d85d,
    args: _0x3266d9,
    q: _0x5f4116,
    isGroup: _0x1b07fc,
    sender: _0x48eb01,
    senderNumber: _0x299456,
    botNumber2: _0x34840e,
    botNumber: _0x1756e5,
    pushname: _0x4281c4,
    isMe: _0x4e0a36,
    isOwner: _0x6147e0,
    groupMetadata: _0x1b74ad,
    groupName: _0x598581,
    participants: _0x445822,
    groupAdmins: _0x2a9b0b,
    isBotAdmins: _0x376f42,
    isAdmins: _0x417392,
    reply: _0x553ebb
  }) => {
    try {
      if (!_0x5f4116) {
        return _0x553ebb("*Example: .imagine woman,hair cut colour red, full body, bokeh*");
      }
      let _0x34f72f = await fetchJson('https://hercai.onrender.com/v2/text2image?prompt=' + _0x5f4116);
      const _0xd3fddb = {
        'url': _0x34f72f.url
      };
      const _0x8ab1d = {
        'image': _0xd3fddb,
        'caption': "ᴅᴀʀᴋ-ᴇᴠɪʟ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜe"
      };
      const _0x48ab88 = {
        'quoted': _0x5f95c9
      };
      _0x234b4f.sendMessage(_0x283164, _0x8ab1d, _0x48ab88);
    } catch (_0x4f7864) {
      _0x553ebb("*Server is busy. Try again later.!*");
      _0xa3fd4b(_0x4f7864);
    }
  });
  const _0x49c264 = {};
  function _0x54f24d(_0x13c1d6, _0x31a0fa, _0x5f210a, _0x26ee0f, _0x31f465) {
    return _0x3f3b(_0x13c1d6 - 0x9, _0x5f210a);
  }
  _0x49c264.pattern = "texttoimg3";
  _0x49c264.alias = ["texttoimage3", "toimage3", 't2i3'];
  _0x49c264.react = '🤖';
  _0x49c264.dontAddCommandList = true;
  _0x49c264.filename = __filename;
  cmd(_0x49c264, async (_0x2784bd, _0x3b185e, _0x3c50ee, {
    from: _0x76affd,
    l: _0x1bdcbd,
    prefix: _0x12eb0e,
    quoted: _0x97471d,
    body: _0xcfb1af,
    isCmd: _0xc7707a,
    command: _0x2f5be6,
    args: _0x1574b6,
    q: _0x4f6bbb,
    isGroup: _0x88511a,
    sender: _0x16d939,
    senderNumber: _0x1ecfef,
    botNumber2: _0x351471,
    botNumber: _0x30fa94,
    pushname: _0x346de6,
    isMe: _0x5f3b82,
    isOwner: _0x196649,
    groupMetadata: _0x407dca,
    groupName: _0x7dcb55,
    participants: _0x2fe97e,
    groupAdmins: _0x29a03f,
    isBotAdmins: _0x2a8ba9,
    isAdmins: _0x4863c9,
    reply: _0x1040d5
  }) => {
    try {
      if (!_0x4f6bbb) {
        return _0x1040d5("*Example: .imagine woman,hair cut colour red, full body, bokeh*");
      }
      let _0x5da78f = await fetchJson("https://hercai.onrender.com/v1/text2image?prompt=" + _0x4f6bbb);
      const _0x596165 = {
        'url': _0x5da78f.url
      };
      const _0x461af6 = {
        'image': _0x596165,
        'caption': "*_ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*"
      };
      const _0x4e9815 = {
        'quoted': _0x3b185e
      };
      _0x2784bd.sendMessage(_0x76affd, _0x461af6, _0x4e9815);
    } catch (_0x4856e9) {
      _0x1040d5("*Server is busy. Try again later.!*");
      _0x1bdcbd(_0x4856e9);
    }
  });
  const _0x17aa6a = {
    'pattern': "aemtv1",
    'react': '💫',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x17aa6a, async (_0x17e341, _0x5e7976, _0x582982, {
    from: _0x2795b3,
    l: _0x30ac75,
    quoted: _0x20e6f4,
    prefix: _0x3aded4,
    body: _0x4d3a57,
    isCmd: _0x5a24ed,
    command: _0x1288e8,
    args: _0xcbae8d,
    q: _0x444e83,
    isGroup: _0x1778c1,
    sender: _0x54ed1f,
    senderNumber: _0xc293f2,
    botNumber2: _0x13f2b8,
    botNumber: _0x477a7c,
    pushname: _0x4fa179,
    isMe: _0x1870c5,
    isOwner: _0x9fef40,
    groupMetadata: _0x52438f,
    groupName: _0x2f0d52,
    participants: _0x20405c,
    groupAdmins: _0x2d1f40,
    isBotAdmins: _0x125b96,
    isAdmins: _0x595f92,
    reply: _0x1c0e78
  }) => {
    try {
      if (!_0x444e83) {
        return _0x1c0e78("*Please give me a url !*");
      }
      const _0x25b4e5 = {
        'url': "https://aemt.me/v1/text2img?text=" + _0x444e83
      };
      const _0x59a754 = {
        'image': _0x25b4e5,
        'caption': "*_ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*"
      };
      const _0x37a8db = {
        'quoted': _0x5e7976
      };
      await _0x17e341.sendMessage(_0x2795b3, _0x59a754, _0x37a8db);
      const _0x5b7121 = {
        'text': '✅',
        'key': _0x5e7976.key
      };
      const _0xceb666 = {
        'react': _0x5b7121
      };
      await _0x17e341.sendMessage(_0x2795b3, _0xceb666);
    } catch (_0x4d72be) {
      _0x1c0e78("*I can't get a screenshot. Try again later.*");
      console.log(_0x4d72be);
    }
  });
  const _0x261bce = {
    'pattern': "aemtv2",
    'react': '💫',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x261bce, async (_0x2eea18, _0x17cea8, _0x5be9c6, {
    from: _0xeb36b1,
    l: _0x5c1370,
    quoted: _0x4f7f3a,
    prefix: _0x412c44,
    body: _0x39fdc9,
    isCmd: _0xa8d605,
    command: _0x2aa3ca,
    args: _0xadeae8,
    q: _0x2c8380,
    isGroup: _0xaf435d,
    sender: _0x7bc761,
    senderNumber: _0x4ce968,
    botNumber2: _0x5f34fc,
    botNumber: _0x4ceb83,
    pushname: _0x11314e,
    isMe: _0x4d4f56,
    isOwner: _0x35294e,
    groupMetadata: _0x4269e8,
    groupName: _0x145a2c,
    participants: _0x32857b,
    groupAdmins: _0x12311b,
    isBotAdmins: _0x266952,
    isAdmins: _0x349096,
    reply: _0x32bbb2
  }) => {
    try {
      if (!_0x2c8380) {
        return _0x32bbb2("*Please give me a url !*");
      }
      const _0x546a7e = {
        'url': 'https://aemt.me/v2/text2img?text=' + _0x2c8380
      };
      const _0x2ca6f3 = {
        'image': _0x546a7e,
        'caption': "*_ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*"
      };
      const _0x90e11e = {
        'quoted': _0x17cea8
      };
      await _0x2eea18.sendMessage(_0xeb36b1, _0x2ca6f3, _0x90e11e);
      const _0x4509d6 = {
        'text': '✅',
        'key': _0x17cea8.key
      };
      const _0x2a2db9 = {
        'react': _0x4509d6
      };
      await _0x2eea18.sendMessage(_0xeb36b1, _0x2a2db9);
    } catch (_0x5b775f) {
      _0x32bbb2("*I can't get a screenshot. Try again later.*");
      console.log(_0x5b775f);
    }
  });
  const _0x1c55ba = {
    'pattern': 'aemtv3',
    'react': '💫',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x1c55ba, async (_0x9889b1, _0x47bf77, _0x2f74bb, {
    from: _0xabbf89,
    l: _0x527d5a,
    quoted: _0x298195,
    prefix: _0x36b2a5,
    body: _0xbbedb7,
    isCmd: _0x19b255,
    command: _0x151bf7,
    args: _0x4712f5,
    q: _0x3db012,
    isGroup: _0xe822f5,
    sender: _0x31352c,
    senderNumber: _0x4e2e3b,
    botNumber2: _0x5f2314,
    botNumber: _0xb1f7b,
    pushname: _0x273460,
    isMe: _0x44fa03,
    isOwner: _0x3eeec2,
    groupMetadata: _0xa4a65e,
    groupName: _0x129b4d,
    participants: _0x2a2d11,
    groupAdmins: _0x51590d,
    isBotAdmins: _0x1ed109,
    isAdmins: _0x4c9f0f,
    reply: _0x372e8c
  }) => {
    try {
      if (!_0x3db012) {
        return _0x372e8c("*Please give me a url !*");
      }
      const _0x332798 = {
        'url': "https://aemt.me/v3/text2img?text=" + _0x3db012
      };
      const _0x169de8 = {
        'image': _0x332798,
        'caption': "*_ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*"
      };
      const _0x6ab7f5 = {
        'quoted': _0x47bf77
      };
      await _0x9889b1.sendMessage(_0xabbf89, _0x169de8, _0x6ab7f5);
      const _0x10ecd3 = {
        'text': '✅',
        'key': _0x47bf77.key
      };
      const _0x32b774 = {
        'react': _0x10ecd3
      };
      await _0x9889b1.sendMessage(_0xabbf89, _0x32b774);
    } catch (_0x428e6e) {
      _0x372e8c("*I can't get a screenshot. Try again later.*");
      console.log(_0x428e6e);
    }
  });
  const _0x28443e = {
    'pattern': "aemtv4",
    'react': '💫',
    'dontAddCommandList': true,
    'filename': __filename
  };
  function _0x578173(_0x322744, _0x183400, _0x278c7a, _0x53c12b, _0x50541d) {
    return _0x3f3b(_0x53c12b - 0x18c, _0x50541d);
  }
  cmd(_0x28443e, async (_0x24d3a0, _0xaa0804, _0xfebe3b, {
    from: _0x316dbd,
    l: _0x3cfad0,
    quoted: _0x2e4d82,
    prefix: _0x19a57f,
    body: _0x4e2dc5,
    isCmd: _0x18d23d,
    command: _0x5a98d4,
    args: _0x4a7d73,
    q: _0x32c3b9,
    isGroup: _0x1ad554,
    sender: _0x59dcf6,
    senderNumber: _0x17f620,
    botNumber2: _0x37f6d8,
    botNumber: _0x19e3dd,
    pushname: _0x4aded1,
    isMe: _0x2b4e3f,
    isOwner: _0x52701f,
    groupMetadata: _0x3336b5,
    groupName: _0x5f10e0,
    participants: _0x36e081,
    groupAdmins: _0x4a7540,
    isBotAdmins: _0x425d18,
    isAdmins: _0x53eb01,
    reply: _0x450950
  }) => {
    try {
      if (!_0x32c3b9) {
        return _0x450950("*Please give me a url !*");
      }
      const _0x44dde1 = {
        'url': "https://aemt.me/v4/text2img?text=" + _0x32c3b9
      };
      const _0x183b04 = {
        'image': _0x44dde1,
        'caption': "*_ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*"
      };
      const _0x54a3f4 = {
        'quoted': _0xaa0804
      };
      await _0x24d3a0.sendMessage(_0x316dbd, _0x183b04, _0x54a3f4);
      const _0x40840e = {
        'text': '✅',
        'key': _0xaa0804.key
      };
      const _0x31abd2 = {
        'react': _0x40840e
      };
      await _0x24d3a0.sendMessage(_0x316dbd, _0x31abd2);
    } catch (_0x2c3c5a) {
      _0x450950("*I can't get a screenshot. Try again later.*");
      console.log(_0x2c3c5a);
    }
  });
  const _0x5e2035 = {
    'pattern': "aemtv5",
    'react': '💫',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x5e2035, async (_0x419ac6, _0x1ac85c, _0x4d2190, {
    from: _0x7c515e,
    l: _0x1fb647,
    quoted: _0x2f8f65,
    prefix: _0x4370a4,
    body: _0x3c9887,
    isCmd: _0x308256,
    command: _0xd5b77a,
    args: _0x13a562,
    q: _0x4db242,
    isGroup: _0x53248f,
    sender: _0x3b119e,
    senderNumber: _0x43c9b5,
    botNumber2: _0x14463b,
    botNumber: _0x2f07d4,
    pushname: _0x12a58f,
    isMe: _0x217e53,
    isOwner: _0x221245,
    groupMetadata: _0x4fe855,
    groupName: _0x5ae9f6,
    participants: _0x1c0666,
    groupAdmins: _0x863745,
    isBotAdmins: _0x52b3ba,
    isAdmins: _0x2ae750,
    reply: _0x201d6c
  }) => {
    try {
      if (!_0x4db242) {
        return _0x201d6c("*Please give me a url !*");
      }
      const _0x1f6290 = {
        'url': "https://aemt.me/v5/text2img?text=" + _0x4db242
      };
      const _0x393d4b = {
        'image': _0x1f6290,
        'caption': "ᴅᴀʀᴋ-ᴇᴠɪʟ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ"
      };
      const _0x7c024b = {
        'quoted': _0x1ac85c
      };
      await _0x419ac6.sendMessage(_0x7c515e, _0x393d4b, _0x7c024b);
      const _0x169fa2 = {
        'text': '✅',
        'key': _0x1ac85c.key
      };
      const _0x360af2 = {
        'react': _0x169fa2
      };
      await _0x419ac6.sendMessage(_0x7c515e, _0x360af2);
    } catch (_0x1ddcd4) {
      _0x201d6c("*I can't get a screenshot. Try again later.*");
      console.log(_0x1ddcd4);
    }
  });
  const _0x4d3732 = {
    'pattern': "aemtv6",
    'react': '💫',
    'dontAddCommandList': true,
    'filename': __filename
  };
  function _0x2d29() {
    const _0x40398f = ['WQPAW6lcGCkI', "WP4iWQRcU8kM", "W592lafW", 'W6jPlCkxWP0', "W4zUW6StW5VcLdxcKa", "W6hdKSoxW4ldVW", 'x09l', "W7tdKmo4cIi", "CXBdPx52", 'W7j2W5RdHHu', "vCkKFSo6WRddSCkSW4zWfSo6WQnv", 'C8o2W7yVW5q', 'mHZdOSoLqq', "nb7cPa", "lCo/zYmI", "WR7cOSo+Emk3", "4BsVhCQ+YzrR", 'fcnD', "xqtcS8o8WRC", 'oY4sr3K', 'W47dPwmRiG', "qv/dImkcWOG", "uWTujsS", "dCkBvmo/zq", "W6hdLCo0ztG", 'WOHfeva8', "W4FdL8oJtIG", "WQxcLCkDpt0", "WQNcPCo5sJu", "cSotW5dcQYG", "tvFdLCkxWOy", "W44+t8oUvW", "WR7cPSoAymkL", 'DSoGchhcVq', "l8oVW7JcOmob", "tvFdJa", "ySkLBSoLaG", "uaOC", "WQ7cQmoOEmoe", 'WQJdSSkMdG', 'W7/dHNO1da', "kCoQeqC/", "na8Er8oY", 'W7lcHCoAgwe', 'WQJcRSoRdG', 'WPijW6dcMCo/', "eCkjbmo/zq", "WPpcNCo6sCk7", "WQZdG8kzmGq", "t8o2W6bkW5q", 'WO00DG', "WRhcQmoP", 'eIWpCCoq', "WPFcT8kTW5/dJq", 'WQmyW5W/W48', "l1xcVSo+sq", "gdOjjSox", "lSovWRRcUCo8", "B8kgjmkZfW", 'W5e2mHxdJG', "W5S5W6y8W5S", "WP12WOWZWPW", 'W7dcI0ZdQXa', "WQdcVSo6amoY", "bbizrmo7", "jCo8nbSq", "W67cR8okus4", "h8kpvCkSDa", "v8kqWPNdQ2W", "W5rHW7tdTay", 'BmotW7lcUCkY', "8kwPNIpdGMNcTa", "W7LLca", "WQzAWRS", "f1WvbZ4", "hmolqcddQG", "zmkwWOtdQW", "qvVcISkvW5W", "W6ldL8oG", "vKlcMa", "WRaes1tdMq", "W7VdJZJdVe8", '8lQOJmkSabf9', "W6xcQSobCY4", "WOn2WOOHWP8", "rqJcV8o2WPO", "aeldGmkBWPS", "kmkTCSoYqq", "WQNcQ8o/Dmk3", "brtdRCkGWQ0", "WP7dGG3dRuK", "4BEkyCI7YyddLW", "smkxEmoWiG", 'BXDvf2G', 'DmoJWR5kW4G', "fWlcQColvdnmDdBdSmo6b8of", "a8o6iCk5W4G", "WP8RW4JcT8of", 'ChnosNC', "q1FdTSkmdq", "WPqPzq", 'W4Orwmk8sa', "pSo+W7JcNmoa", "W7bPgW", "W7lcHCoAha", "ehRcRSoSW6u", 'W6fLbSkiWP4', 'lCoYW7FdN8oy', "awZcPCo5W7y", "l8oOW4/cTmo9", "WObfWP9fDq", "uLFdOmkleq", 'sqvYetq', 'c8oJpZyr', 'eSoNiW', "gGWgz0y", "WP4mW6JcQSkK", 'rSobfmo8Aa', "DmoojGKl", "8ykAICohgW7dUa", "nW/cQCoHvW", "8yEAMeukbSoB", "4BsA4BAYW7lHT4pHTPu", "W4jPhmkeWQW", "oWqCFxm", "hc8y", "WQneWPiGWOC", "WOCKW5dcRmkw", "gmk9ESkTAG", 'pbxcPCoctq', "hSoIh2tdVG", "8yYRQmkcW6xcVJS", "sCk1g8k/W7a", "ySkDBSoQ", "sX1VWR45", 'W67cJmoiWO3dGq', 's8ovW5tdPxy', "bhZcSSo5W6C", 'svXxWQ8I', "pHFcTmoWvW", "mr7cSCk+fa", "ELpdNCkxWRS", "WPnlhCoKBq", "W458WRBcNg0", 'DHCn', "vr3cQCkQWPi", "WOJdSSkMdGm", 'nZuZFwa', 'W4OMz0ddRa', 'WP8XW4pcRSos', "WQJcMmkwW5hdLq", "WP1HWQJcNhO", "EMLqsNC", 'W67cHSoEpcO', "iCk4WR8lW7K", 'W6DZt8keWPG', 'h8kFWPFcOIm', "B8kwWQBcVCoQ", 'W4BdS3O', "W6PiW4OeW68", "WRNcT8kitW", "W4Guu8oita", "WQKICv7dUq", "W6hcLSkS", "W7r+cSkxW5e", "d1yk", "WPKUWQaWW5a", "Cmoum1ZcKG", "j8k6smkWAW", "WPrAW7xcV8o4", 'tvrrWR5R', "W7HiW5yP", 'BHBdPwfR', "W4GLW63dIdj2W4qsW6yEneW", "W7tcRmo1yCkc", "WOurmXfV", 'zmkrz8o5cG', 'AHFdVNPG', 'WRpdNSkZgZa', "uCoqW6ODW44", "omo0W7dcKSot", "uCo/hdKC", "W6xcSstdJJK", 'q35uWOmN', "CSo0dW", "YRdjJEg2KcZHT7S", "WPbqW77dGLC", "vvJdTCk4fa", "k8kLWQK8W70", "s1HkWQ89", "eCklg8oQia", "WP/dGG3dRuK", "WQaiW4/cRSkq", "W5rJWO9qkq", "cCootYhdVW", 'W7RdJmocrbu', 'WPu3W6S', 'CgvtwhG', "smo/nH4O", 'W5RdRmoQrZG', "W6vCaW", "gmoStrpdRq", 'hmkowW', 'FHhdOM9I', 'smoQxbpcQa', "W71+g8kvWOW", "WPiZWRfvW68", "t8oQctvC", "A8o2W6qEW7K", "g8o5fW", "cCoKv0FdPa", 'WODqWQu', "W7ldSCoBsYO", "rLja", "YAViTUg3KSo44BAF", 'd8kyBCkCEa', 'hCobiW', "fSk6w2jhWQ9vCdxdL8k3AHC", "WQlcPSoJe8oO", "WPfwWQ/cIL8", 'W4PPluhdSq', "jYCSyNC", "aSk1gCo8WQK", "oSo+m3aS", "W6NcGSocnt0", 'WOzycuuH', "W4pcUaldNG0", 'WRBcOSo3', "W6HhasON", "WPCIBeNdLq", "WOGNW6dcU8kf", "W5jyW7ddKX8", "tePVEMm", "WQ7dSSk/gsm", 'W4ymgmoXqq', 'WPLdWRxcINO', "W6tdGmoItGW", "YRhjVEg3Umkv4BAA", "AqyqaIm", "iwlcM8oCW48", "4BAQWQdkL8UqDa", 'WPbfW7BcRSoL', "W6ZcHsldGJ0", "ASkKySo5nW", 'tCoqpCk/W6y', "W65WlbXh", 'qCoZgwVcLq', "Emo+fN/dRG", "CSkrA8o6Bq", "eGSqDCoz", "WRLAWRRcKG", "WOddNaZdLM4", 'tSoxf3VcSW', 'awZcPCo5', 'WOKrWRG', "W4NcKCo6wdG", "8kIJRUkbIVcVS77dLog2Jog3QUg3TG", 'bbSnESoi', "WQGFWPtdLmoN", "W5LNWOiFWRS", "rSkDzSo/la", 'v8kWwmoXoq', "qSoHn0NcSq", "pCkcsmo6zG", "f8o0o8k5W6W", "t1HjWQGJ", 'WPWrWQVcOmoY', 'aW4d', "4BsU4Bs7WOxXH6kh4OgP8kAHKa", "WPPJWPnA", 'eISqDCoz', "W5rdW4KgW4i", "dSkeCmkjxG", "y8oYa2W", "W6KtWPa", 'W7XaW553W74', "WQRdRSo0qrO", "tJJdS1HK", 'fc8CC8oB', "vSoXdMdcRq", "bmkQvxJcUW", 'WPO/W7W8W4e', "h8ksE8kCtq", "W7FcLIJdMH4", "EapdOxPS", "yWjEaqO", "WRNdKCoPuJu", "W7qQhmkgWO0", "yxjQBxu", "WQ/dSSkWhHO", 'WOHShSoUwW', "pwZcR8oUW6m", "emkbxa", 'WQOZWOZdRSoD', 'uSo5atqB', "WP96WRxcI28", "WP8ZW43cQ8kE", "W6/cL0ZdQ1C", "W5vOW6JdKXS", 'W4Gzwmk7ua', "W4fsW6JdTba", "WOrbWPnfiG", 'WP0zW70fW5K', 'zvtdSSoMta', "WOOZua", "W7bpW4i1W6q", "uLFdOmkl", "fCoSB8kSW64", "v8ovW5NcQti", "BSoFWR/cVW", "WOfNvb8", 'f8o6xMGK', "8jEZO+kbO/cRK4NcVUg1H+g0Iog1HW", "tCk1rSosiG", 'bvabfIq', "wCkEBSkjxG", "W7tdHmoIdtu", "W77dKCofiq", 'lCkyB8kevG', "c00zaZK", "WOlcHrK", "bbiEs28", "WQiitxNdNq", "W6tdG8oaCZ0", "mH7dVCoWba", "qSoiqqBdPq", "W5f1dtTk", "W6pdQ8oPxay", 'W5NcTI4', 'ASoUhder', "c8orW53cPZi", 'wmoSfNxcSa', "BSo/WR/cUCo1", "ESoYW70EW6O", "u0ddTa", "xuldL8kkWOe", "W6RcL8kCW7BdHa", "WOmHWO5t", 'W7LsecXS', 'hrHeAea', "DCkeWRVcRSkJ", "kCk7W4/dJa", "yw9urNC", 'rCoDWRhcVmo7', "W7ToW54KW4S", 'kCoeW6RcMSoy', "W6xdKXddOwK", "bLWdaci", 'svXo', "WQZcPSo9a8on", "4Bsa4BwMWRhHTjxHTii", 'eH7cRSoIrq', "W6StW5K", "DqFdVq", "a8kdD8kysG", 'WPiZWRft', "AaPCacG", "W5LBW6JdOHi", "W4ryW5ldMXy", 'W6xcMXRdR1C', "AcvPbYC", 'q8kaxmozmG', "qCoKa38q", "AmofWQy", 'BCo7WQtcKSoi', "W6xcISobCY4", "tvGu", "WQTwWQ7cG8kP", 'W7ddPSoeBG8', "W6XafZLU", "W7T9iCkTWRu", "W5XbWR7cHx4", "EmoJxgVdVa", "WRNcOSo9i8ku", "WRBdP8o2sIO", "W5ZdK0JdTb0", "hqifyaK", "AmoBWRpcV8o3", "uGLCr3SxCSkFWPBcHGy8dq", 'W6hdTcddVvi', "CG/dTG", "FchdMuPl", "WQupW4/cGmkv", "FSoKW6mlW7S", 'bZehxgq', "mdlcSmoWqW", "q0lcI8koWOO", "WOSaW4tcHmkG", "W5NdGHZdPu4", "WR0XW4FcQCoK", "WO7cI8k0W6tdUG", "WRtcJ8kb", "vWZcU8oH", 'c8oeW53cSJi', 'dCo+sGBdRW', "WQ5HW5hcRmkf", "WQXZWQBcJmkG", "W7RcGSoyzIW", "beLcWQm/", "W6tdJmoIts0", "WPJcJ8kUW7/dPG", "iSo/WRNcK8oD", "WPfLWQ/dGa", "vtxcQSoFWQm", "FazrbJi", 'W5mmcW', "WPSPW40PW6C", "WOCUW7W0W5S", 'WPnCWRBcNg0', "WPT8WOa", "d8oOdq", 'C8ohdNxcUq', "kmo0W7FcI8o1", "W58xx8oXqW", "C8oRW6VcKmoz", "W7NcHSocDGq", "hCkcuSoQCW", 'WOVcMuFdOLu', "W57cHSouzH0", "B8k7z8oYja", "WPP3WPJcQSkZ", 'W4hdKWhdR1m', "WO52WRRcLcq", "aSoOW6JcM8ot", "W4yErmosAa", "qcawFu4", "W6fcdrrg", "W4RdSMT+", "g8oOvWpdHq", "W5TyW7KNW74", 'EmoEfNNcUW', "WQ/cV8o8", "wrBcQq", "kmklq8o/va", "W5tdHrVdTfO", "vahcNSo3WPy", "WPrfW5pdUa", "WOzMWOGtWQO", "fmklwSoVzq", "bCksB8ohcq", 'eZqyzSok', "vqdcS8oRWPm", "nbtcPcfX", "haeluSoj", "g8oKvWddPa", "ixClfq4", 'WQuaW73cUCod', "WQxcGmoeCYC", "dapcUSodqW", "EfFdSSktWO4", 'de1duX4', "emkjWO/dUNq", "oSoDjCo7jG", "fcNcRSoUW7a", "W55XnJPZ", "iCojqaNdPW", 'WR9AWQpcHCkZ', "DSo2W7CpWRi", "mXtcUG", "WR5ehSo8ra", "irugsJi", 'WRbxWOn/W74', "8kYySSk5W5xdPmkM", 'WPu8W4KWW7a', "cSkIwGJdPq", "WR/cVSoJBCkr", 'WQPwWQtcNW', "l1NcI8o+W7S", "vmoGeutcJq", 'Asb4iqG', "bmk+BSkjxG", "WPjeWOrPpW", "WRVdRCoyACke", "WRjQWQ4YWO4", "aSkQp8k/W6y", "wqNcRSomWP4", "W6PtW5XWWQS", "xryyBmok", "WPruhvq", "k1dcQfHK", "W6HAcNHL", "tfrlWR4L", 'sSoeWPBdQHi', "uYmyECok", 'vqFcJmoAWOK', "W5BcSsxdSZy", "WRrqfqah", "W4nsW7xdKJO", "WPieW7hcQmoW", "F8oZW5mfW7e", "W67dV8kGvmkKCSkjb8kf", "fN3cVmosW7C", 'lmoJksyi', "W6FdHmo4xIq", "wConW6q8W7m", "pHBcUa", "WPP2W4CgW68", "WR5tWRxcHeq", "q8o8brGf", "EmkgFSo8cG", 'vCkEW5VcPsS', "mmoam8ofiG", 'W69Acd1N', "nbtcOYfX", "WPKIjSk0", "W6bFfWXS", 'WODye0vV', "qWzdfIC", "W5PbWOjCmW", "WPCIBeNdMG", "W7uiW7FdKmkrWRXaDvjP", "WPLgWOuiWQS", 'WR7cLmo+nmoX', "8jQkQr0bqmkj", "b8o5f0FdNa", "gW4Hsgi", 'WRaIELNdJa', 'c8oSua', "W5mcfa", "W7FdQSo/scW", "gmknvSoHsq", 'FZJcTCoWsG', "WPLMWQJcNg0", "zadcPCoSWQ8", 'WOzfWOzsmW', 'W6pdKH/dQqu', "DmoBWRdcTSoZ", "WRZdQSoPqhG", 'cCoCAcddOq', "WPf6W5HP", "WRVdVmoKoSkA", 'FKldHZ0L', "ESo7W7KlW68", "pbRcS8k2ua", "vGZcSCo9WPu", "jCkgDmk8sq", "WONdUCo1qte", 'WOerfKm9', 'z3JdTSkRhW', "WPiwW6ddO8o0", "bY/cISoLyW", "W57dVWxdTfO", 'W7VcLSodzIW', "4BwV4BwSrpcDGy/IGy3WKOoH", "B8o4W7KhW7S", "efWdfWC", "W4NdR2eRmq", "gmkKqsCA", 'x8oXcxhcRG', "WPrWWRRcMw8", "eu4OpcS", "W6pdISoLrYa", "qhFdSmkjWOa", "W49AoCkwWOy", "W4FdThOVjW", "WQlcKWVdQX4", "h8kysSkfwa", "kmo+W6RcNa", 'WP5+WOyaWQO', "ASoGaMtcIG", "aZ3dVq", "W6DYW5y+W4e", 'WOvNCu7dQG', "W5mqvmosDG", "AaFdV2Pi", "WPn8WOKtWO4", "gYSrCCoq", "sCoDcWu/", "WQufW47cLCkN", 'WPyIy07dRa', "W5rsW6NcMbq", "WPvjWOKrkW", "WQVdRSo7rIW", "W7PfaSkeWPG", "WOKMBeNdLa", 'W47dTgSTEG', "WQhcOSoHwmku", "WPSKW5RcU8kJ", "WOSIp8oWEa", "W6LbW5pdNtO", 'WOmaW6tcRSoJ', "n8oNlJbL", "gSoIW7RcPSoq", "W6hcHSov", "s8kbwCoAeW", 'W5BcLXtdVIm', "WOFcOSo/fmof", "WOfzWOficq", "WQ3dImoy", "W5tdLXVdSb0", 'mSkfr8ksuW', "w8kLlcy", "pSkMnce3", "mCkyBSoqea", "WQ5EWRlcKSkU", '4BEp4BEkWQ3WOQom4OkA8lstVq', "W4qXw8o9qW", "8yYkLSoIW4ZcJSoz", 'j3JcISoDW7C', 'W4bzW4RdMI0', 'WOaZWQGsWR0', "WQiMWP3cU8ks", "rSobfmoQzq", "aZRdVq", "W7zMcSkXWPC", "s8oMdZCx", "w8oGfgpcTG", "imo0W74", "qx/dImkcWOG", "iLe9cZK", "W4K7r8k1oa", "bWeKqCoS", "WQ7cQmoOEmkc", "w8k+dvxcV8oCaa3cUmoxWP5+pa", "W7JdGKJdTLi", "jmkKcG", "WRpdMmkZgZa", "hKVdSSoRWP4", "W4P0f1iG", "v8o2dG", "WPamW6VdRCo7", "W6r/amkrWPO", 'WPKrW7hcVCoK', "fh3cRSoSW7i", 'WPLJa8oGkG', "gIDp", "WPjpWOHfiG", "ghVcL8oOW7a", "W5D0CW", "W6b4a8ofW54", "W5ddMGhdTe4", 'W4GWqmoDwmkYkCkJvG', "v8oVkGaB", "WPz2WOOtWRK", "WPJdN8kAmYC", "WQdcO8oKfSkl", "WOfNvbW", 'i8o2WRBcICkg', 'ELpdPtHP', "BrbvsYu", "WQZdV8kW", "WP17WQ3cNcq", "WRVcQmoKgSod", "cCkTCqldUG", 'W5OQxCoxDa', "tSoPhYRdVG", "FNtdRCklWOa", "ACoYW7ejW6G", "dCoObJeC", "W5ldLXJdOvq", "WP0ZbmkZzG", "nrBdThzX", "WRJdUmkWdHy", "w2JcUmoGW7y", "WOffdenI", "n8oufc0p", "WQPwWRtcG8oN", "sCoHkSk1W70", "W75VfG", "nmoJpG", 'sWPddJ4', "WP4rWQVdRCod", "W6hcVHxdRG4", "u3f/EhO", "WP/cSJCjnq", "W5LYWOikWRS", "WQnAWRdcH8kZ", "4BwZ4BAjgEg1Vog2JW", "haGkBKS", 'Amo5W5RcId8', 'W4ldUaBdHLC', "W6xcJSonFgu", "WR7cQmoIiSkv", 'W4apW6hcJSoe', 'k8oPlI8I', "WRfrW4i/W64", "sSo5W5xcQYe", "Ew9FbcK", 'W7ObW6zL', "jmo5amk+W7m", "bmkdlCoiBq", "wCoSdhxdVG", "W4vlddPL", "nCkgW6tdRCkQvtj/pXKFBG", "xaRcUG", "WR/dO8k/jsi", "WOpcHvZdONRdR3FdQWy", 'C8oJW6qAW68', "A8oCh2RcSq", "WQ3cHGNdSGm", "E8o4ha", "W47dPmoJCYu", "WPddG8k/lY4", "WOyaW4yqBq", "i8o1W6VcMSoA", 'yqRcLCoWWPq', "WOPDWO/cHmkK", "gCkpsmoUia", "WOtdH1JcRwS", "hCo/vuFcQq", "BmkDAmk8EG", 'waxcHq', "W58vW7FcOSoZ", "WRjyWR8RWOy", "lCo2W7W", "WR0JW5VcImkt", "W7DNW6NdNXG", "W7xdKIpdVWu", "WQZcTmoOwCoh", "W71oW5qP", "DmoEW70lW7S", "DmoyW70lW7S", "W7/cKCoamMG", "8l25ISkmoadcMq", 'raRcTmo1WPO', 'FqVdVwTR', "WRVcUCo1FSoy", "pSoegSk1W6S", "WR/dTSkUdJ4", "BffsWReC", "ts5Yetu", "4Bsm4BAtw+g0G+g3MW", "AvTkWPKy", "W61xjZDK", "gcej", "waFcHq", "hGtcUmo1WO8", "xs3dNLPa", "W5HsWPutWQy", "W6xdGmoTstu", "iajvcdi", "jCkKt2/cM8oRW6tcT8oS", 'W7JdRmoHsYy', "txFdOCkWWPy", 'WP15WRlcNhK', "WR3cOSoSfmoq", "w8kLlcq", "WRldRSoJ", 'aZJdVq', 'WOZdMmkwcau', 'W5HNWOiFWRS', "CCoYW7S+W48", 'cKOz', 'crqizqC', "W6pcKmoy", "sSo/gIab", "tCoEcSk9nmoSxrjssMXhkq", "WPrNWO4iWQe", 'hWaqFui', 's8kvDSkBqa', "W6NcLXu", "WQ/cKSkrW5JdSa", "W4ldOwa7ga", 'W6XeW540W4C', "WPbeWQrEkG", 'kLlcOdGXW54eW4yixehdKcq', "bKSiuG", "bSkhD8ov", "bv5pWROL", 'W67cH8oVFsq', "W4z0W7mfW7i", "o8oIbc0O", "sxnijSklWRjFW58elCkbFKO", 'Eg1oEwe', "q8ozW5RcRru", "W5LAW7RdKri", "uvnXy2u", "DSoGchpcVW", "t1/dUCkyaa", "sCo0kSkGW70", "WRtcLmkvW5tdSa", 'WRddJmkdCYW', "W5OEsKeQ", "qf3dT8klaa", "tCoXchNcSa", "W78gra", 'tWFdQxPr', "WPyGW5yRW6i", "W65uW58KW68", 'W7jtW7O1W7G', 'WRrEWQutWRW', 'aLhcUmowWPunW7NcMq', "eSoMkG", "WOeeW7hcUCoY", 'W6FdKJRcUvC', "mSkfW6BdQSkLxgL8kX0SESov", 'BmoxWRZcVmoE', "W59+W7BdLXa", "WQlcLqNdVLC", "WQnAWQ4", "q8oIahaE", "rWpdRmojcq", "BSkxzSk8CW", "aLCBeMq", "W54kwG", "W5RcOCoKEIy", "W7BdKCo/sZe", 'WRe0W6yjW5i', "WQn2WP8tWPS", "wgPQWQWp", 'WQ7cS8o+fSou', 'WPvnWOi', "WOzOzfJdTG", 'iruesJi', "W7fVhColWPW", "mmkMsCoEzq", "W6rsW6pdGIm", "WQvlWRBcLSk0", "W6pdISofrYa", "zmoijXmw", "hgtcVmoQW6C", 'WQ5lW5qtW5K', "xwvpsNm", "W6VcL8oFCZK", "FCoCp0NcLa", "8lodNUkbPFc6GOBcPUg0LEg2Mog1IG", "r8o5tJKb", "W5TsW6i", "h8oxD8khgq", "dmkpt8o/zq", 'qWdcS8o8WRy', 'WPa1W6aPW7q', "WOWSe8oQzW", "WQ7cJ8ku", "W5ecW6ZcU8oY", "ggiRjSkE", "qSovWPJcRsm", 'FgHNquu', "W4qeAKZdTG", "WQLBWOhcICkQ", "WR0KW4pcRmkd", 'fICe', "W79bW5a", "DmoVfMNcIG", "W4ZdOx4Rpq", "aCoGwaddRq", "WRbDWQNcQg8", 'W49xiH17', "WPTPWOPqia", "WQ8LqmkeWPO", "wLHtoru", 'W5HdW6/dHGq', 'D8oke1RcMW', "pCosdY0Y", 'tmorWPG', "WPK1WO3dJG", "ddCsymoB", "lG7cSSoLqq", "tYLEmtW", 'qYPwcd8', 't1JdK8kcW4e', 'WPaFbK8I', "WPOsW60nW5e", 'WPaIELNdRa', "z8kXCNqtWRhdUCkfWO3dRq", 'mcK4ESo6', "ACoUWRalW7S", 'dsWA', "EhqtrNu", "EXfC", 'thjaWOmS', 'p8knF8oyDq', "zmofWQhcUCo1", "umkRt3fy", "FcBcQSo5WPK", "W77dLSo4", "W4uIW5zqW7BcKmo3W7btW4L/W6tdQG", "WPf0WRxcMuy", "WO7cQmoOEmkI", "WOe0CuZdVW", "yuHeCMK", "W48xwmoOzq", "cSkAzG", "e8oHjSkJW64", "8lsOQs51hrK", "W4ddGWFdOvG", "WQaOW4/cQmkb", "Dg1y", "WPzpWOniAW", 'pmoVWQq', "y8kDz8o+iG", "WQNdPCo9", "WRO1W5BcOmkz", "t1hdGmon", "gmo+W6hcI8oG", "WOfDW7/dTsq", "W4ilqG", "WRZcQ8omfW", "emoIaZev", "qmoVW4VcRYO", "EgfttW", "cGyQx8oZ", "W7BdQe0xmG", "jdbvfZa", 'aLaduYy', "p2JcQmofW7a", "sLNdI8kxWQ4", 'dSoiC8kAvG', "p8ksE8kCBq", 'WP4SW6JcRmoW', 'cciStwK', 'W7/cKCoa', "W408W4GuWRS", "lGrvewy", "WRRcPmkHW4BdGG", 'ASoUaIq5', 'wmoum3/cUa', "WQ3dICoy", "t8oSusqx", "WOOIBGlcQa", '4BAv4Bsht/ggGPFIGPxWMig3', "W6nEWQFcI8kZ", "WQRcHmojzMK", 'WPf0WRZcMcq', "W5vpW6/cHb4", "W6PCcxDR", 'W6pcJSonDsW', "WRtcTmkvW5tdSa", "l8oxWRFcTCoM", "yd/cMSowWPa", "WR3dJSkhcqi", 'WR/dGSk7dd0', 'W7/dH1WioW', "yCkxz8oNnq", "zCkxzmoGkW", "t1XuWR5R", "uCoUadq/", 'E8oUWQlcMSoD', 'WPbuW7hdU8o7', "ecNcI8k7", "W47dTgC8Eq", "eCkpvCoVta", 'WQRcV8o5rCon', "e8oEdGCF", "EGVcSwDO", "8js6N8kfW4NcPKq", "WPGiW6tcQSoY", "uGRcUCoH", "dYCCD8ok", "thGFbYm", "dx3dOa", 'WQfqWQu', 'WPPXWRJcPxi', 'W6VdOwWLdq', "dGWb", 'WQbfWP9feW', 'WROZW44', "neWFeI4", 'dx3cQCoIW4S', "WRLqWQVcI8kM", "k8o+W6/dJG", "W4azW7JdMrO", 'o2fyrMq', "W6/dG8o6iW", "vePtF2O", "WOeOW6j9WPq", "W7fYiZPg", "zCkbECoYja", 'kCk7W4/dJq', "cLCiuZ0", "WOhcPCoKfCot", "EmoFd3BcTq", "tYBdSSoSW6C", "WRm/W7P9W5C", "pmoOqrpdNa", "WPrEde0O", "FaVdT3C", "WPymW6pcTa", "zvtdSSoIua", "W7faW7ldGWa", 'W75vW5uIWQq', "WRxcMmkkW5tdOW", "AqFdSg1X", "8ycxLU+7La", "WRpcRmkW", "n1GDuWi", "u8keWPG", "ruKjW7SF", "dCkeySkBFq", 'yWqpesm', "W47dRwS", "W5OZW6m8W5i", "ACotWRpcVmo3", "iCo6i8kHW6y", "8loANSk7WPWNW5m", 'FGpdOMSL', "WQ/cVCk6", "WObrbq", "WPLWfCkK", "W5ZdKvFdOvG", "v0PvEwu", "WR7cQCoty8kB", 'bsVcI8oIxq', "W5nwW7xcKqm", "W61wW7uFW6S", 'W7PNqmkvWO0', "W77dS8oUqqi", "WOiaW6VcQCoA", 'WQVdOmoqtcO', "zW5raIm", "W61cW5e5WQq", "aK0eegC", "WOq3W63cO8oJ", 'WQHRkmoUEa', "W4LfW4ugW7m", 'W4xdKXddOuK', "WQyYW5y", "W5fdW77dHfK", "W7ZdKCkm", "c8oaW4RcPsi", "WRBcICowW5JdSG", "WQRdV8oOtdy", "pSoYiJbR", "FmoYaG", "WPVcOSo1a8oW", "WOjHWOS", "W55Olv7dRa", "W68ZW4FcQ8oB", "W4ldKWBdSxa", "bmkAbG", 'WPH9WPucWQe', 'xe/cHCkcWOG', "CcbRgJa", 'nCoJW7usW6G', "rmkbW4ZdVcO", "lSo4p8kpW40", "WP/dLW3dUeK", 'WRLAWRRcKSkZ', "xCo9f2hcIa", "WRVcQmo9Emka", 'uWtcRCoSWPi', "fWSeqq", "c8o6ka", "W7CqW63cJSkI", "WQNcUCoIzCky", '8ycrQUkbVFc+GRhdHUg1O+g3Tog0SG', "W7BcNqxdPXa", 'oZBdThzX', "YBhiL+g2KeRHTPe", 'W4DDdSkeWPy', "zmoaW6m", 'wmoLW4yGW60', 'W6/cKWldRJS', "WP12WOiOWRS", "WQHmWRhcH8kG", "WRldSSkY", 'WR9gW5uKWQO', "8yEAMeukh8kx", 'l20mjJm', 'WQXrWQv6hW', "W7XaW4aKW6m", "W7reW4K", "W7z4W5tdOJi", 'umocW5tdQMC', "oHNcJmotvG", "4BsRfSI8YAZdJW"];
    _0x2d29 = function () {
      return _0x40398f;
    };
    return _0x2d29();
  }
  cmd(_0x4d3732, async (_0x3dd9c3, _0x275337, _0x3f6455, {
    from: _0x2bdcde,
    l: _0x747599,
    quoted: _0xd9c196,
    prefix: _0x67106c,
    body: _0x563f64,
    isCmd: _0x309e2e,
    command: _0x330879,
    args: _0x275579,
    q: _0x2924e3,
    isGroup: _0x51036a,
    sender: _0x4b07c8,
    senderNumber: _0x2a1ad0,
    botNumber2: _0x15ee2a,
    botNumber: _0x5ebca0,
    pushname: _0x473f12,
    isMe: _0xf8dde2,
    isOwner: _0x57e2af,
    groupMetadata: _0x2e8c00,
    groupName: _0x113bef,
    participants: _0x248db6,
    groupAdmins: _0x559ca4,
    isBotAdmins: _0x32f16e,
    isAdmins: _0x3bbdaf,
    reply: _0x19ad0b
  }) => {
    try {
      if (!_0x2924e3) {
        return _0x19ad0b("*Please give me a url !*");
      }
      const _0xbbbe2 = {
        'url': "https://aemt.me/v6/text2img?text=" + _0x2924e3
      };
      const _0x5d4ca0 = {
        'image': _0xbbbe2,
        'caption': "Powered by TalkDrove"
      };
      const _0x4f82bb = {
        'quoted': _0x275337
      };
      await _0x3dd9c3.sendMessage(_0x2bdcde, _0x5d4ca0, _0x4f82bb);
      const _0x3651f9 = {
        'text': '✅',
        'key': _0x275337.key
      };
      const _0x113eda = {
        'react': _0x3651f9
      };
      await _0x3dd9c3.sendMessage(_0x2bdcde, _0x113eda);
    } catch (_0xca4fc7) {
      _0x19ad0b("*I can't get a screenshot. Try again later.*");
      console.log(_0xca4fc7);
    }
  });
  const _0x1d4925 = {
    'pattern': "texttoimage",
    'react': "🗃️",
    'alias': ['t2i', "texttoimg", "text2img"],
    'desc': "Get bot's command list."
  };
  function _0x814adc(_0x395c36, _0x2708e2, _0x157cd9, _0xb378d1, _0xd9f70) {
    return _0x3f3b(_0xb378d1 - 0x344, _0xd9f70);
  }
  _0x1d4925.category = "convert";
  _0x1d4925.use = ".texttoimage";
  _0x1d4925.filename = __filename;
  cmd(_0x1d4925, async (_0x38a575, _0x2df1ad, _0x1f9f42, {
    from: _0x4416e4,
    prefix: _0x14e175,
    quoted: _0x20b8dd,
    body: _0x199a8e,
    isCmd: _0x11a77a,
    command: _0x5978dc,
    args: _0x3ea484,
    q: _0x429e10,
    isGroup: _0xbb1981,
    sender: _0x11c375,
    senderNumber: _0x336abe,
    botNumber2: _0x54066f,
    botNumber: _0x339988,
    pushname: _0x6504ff,
    isMe: _0x8325a6,
    isOwner: _0x303d49,
    groupMetadata: _0x46ceaf,
    groupName: _0x2bcc8a,
    participants: _0x4efc1e,
    groupAdmins: _0x458759,
    isBotAdmins: _0x280580,
    isAdmins: _0x31a24f,
    reply: _0x54250f
  }) => {
    try {
      let _0x884863 = [{
        'name': 'cta_url',
        'buttonParamsJson': JSON.stringify({
          'display_text': "ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ",
          'url': 'https://whatsapp.com/channel/│0029Va8TzeF0AgW8dVET3U1w',
          'merchant_url': "https://whatsapp.com/channel/│0029Va8TzeF0AgW8dVET3U1w"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "ᴛᴀᴘ ʜᴇʀᴇ",
          'sections': [{
            'rows': [{
              'title': "TextToImage V1",
              'id': ".aemtv1 " + _0x429e10
            }, {
              'title': "TextToImage V2",
              'id': ".aemtv2 " + _0x429e10
            }, {
              'title': "TextToImage V3",
              'id': ".aemtv3 " + _0x429e10
            }, {
              'title': "TextToImage V4",
              'id': ".aemtv4 " + _0x429e10
            }, {
              'title': "TextToImage V5",
              'id': ".aemtv5 " + _0x429e10
            }, {
              'title': "TextToImage V6",
              'id': ".aemtv6 " + _0x429e10
            }, {
              'title': "TextToImage V1 Hercai",
              'id': ".texttoimgv1" + _0x429e10
            }, {
              'title': "TextToOmage V2 Heracai",
              'id': ".texttoimg2" + _0x429e10
            }, {
              'title': "TextToImage V3 Hercai",
              'id': ".texttoimg3" + _0x429e10
            }, {
              'title': "Prodia Hercai",
              'id': ".prodia " + _0x429e10
            }]
          }]
        })
      }];
      const _0x227edf = {
        'image': "https://static-cse.canva.com/blob/959702/ArticleThumbnailsTexttoImage.png",
        'header': '.',
        'footer': config.FOOTER,
        'body': " TexttoImage generater"
      };
      return _0x38a575.sendButtonMessage(_0x4416e4, _0x884863, _0x1f9f42, _0x227edf);
    } catch (_0x15252a) {
      _0x54250f("*Error !!*");
      console.log(_0x15252a);
    }
  });