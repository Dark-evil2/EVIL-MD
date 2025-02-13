function _0x1167a4(_0x2fbfa4, _0x222192, _0x48d3c8, _0x3e31b1, _0x29707d) {
    return _0x1cca(_0x2fbfa4 - 0x101, _0x3e31b1);
  }
  (function (_0x49aa98, _0x59108a) {
    const _0x4d685a = _0x49aa98();
    while (true) {
      try {
        const _0x2a3cdd = -parseInt(_0x1cca(0xabf, '%XJ^')) / 0x1 * (parseInt(_0x1cca(0x53e, 'H(4j')) / 0x2) + -parseInt(_0x1cca(0x80d, "XnIc")) / 0x3 + -parseInt(_0x1cca(0xaa4, "O73h")) / 0x4 + parseInt(_0x1cca(0xa06, "jKpL")) / 0x5 + -parseInt(_0x1cca(0xa12, "&G&i")) / 0x6 + parseInt(_0x1cca(0x345, "H(4j")) / 0x7 + parseInt(_0x1cca(0x55e, "jKpL")) / 0x8;
        if (_0x2a3cdd === _0x59108a) {
          break;
        } else {
          _0x4d685a.push(_0x4d685a.shift());
        }
      } catch (_0x3645cf) {
        _0x4d685a.push(_0x4d685a.shift());
      }
    }
  })(_0x4917, 0xe33bb);
  const config = require("../settings");
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
    fetchJson,
    jsonformat
  } = require("../lib/functions");
  const fs = require('fs');
  function _0x1cca(_0x19c105, _0xcfc9ed) {
    const _0x2ca820 = _0x4917();
    _0x1cca = function (_0x3d29d1, _0x3c271d) {
      _0x3d29d1 = _0x3d29d1 - 0x1ef;
      let _0x4fb107 = _0x2ca820[_0x3d29d1];
      if (_0x1cca.MHOCGp === undefined) {
        var _0x3e279e = function (_0x148b12) {
          let _0x27d237 = '';
          let _0x252372 = '';
          let _0x2e2871 = 0x0;
          let _0x4de8b9;
          let _0x14e6ad;
          for (let _0x1840d = 0x0; _0x14e6ad = _0x148b12.charAt(_0x1840d++); ~_0x14e6ad && (_0x4de8b9 = _0x2e2871 % 0x4 ? _0x4de8b9 * 0x40 + _0x14e6ad : _0x14e6ad, _0x2e2871++ % 0x4) ? _0x27d237 += String.fromCharCode(0xff & _0x4de8b9 >> (-0x2 * _0x2e2871 & 0x6)) : 0x0) {
            _0x14e6ad = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x14e6ad);
          }
          let _0x2aabe0 = 0x0;
          for (let _0x1cc443 = _0x27d237.length; _0x2aabe0 < _0x1cc443; _0x2aabe0++) {
            _0x252372 += '%' + ('00' + _0x27d237.charCodeAt(_0x2aabe0).toString(0x10)).slice(-0x2);
          }
          return decodeURIComponent(_0x252372);
        };
        const _0x510f83 = function (_0x59678b, _0x12f983) {
          let _0x44194d = [];
          let _0x56ecd5 = 0x0;
          let _0x47812a;
          let _0x1f3cf1 = '';
          _0x59678b = _0x3e279e(_0x59678b);
          let _0x80cd4a;
          for (_0x80cd4a = 0x0; _0x80cd4a < 0x100; _0x80cd4a++) {
            _0x44194d[_0x80cd4a] = _0x80cd4a;
          }
          for (_0x80cd4a = 0x0; _0x80cd4a < 0x100; _0x80cd4a++) {
            _0x56ecd5 = (_0x56ecd5 + _0x44194d[_0x80cd4a] + _0x12f983.charCodeAt(_0x80cd4a % _0x12f983.length)) % 0x100;
            _0x47812a = _0x44194d[_0x80cd4a];
            _0x44194d[_0x80cd4a] = _0x44194d[_0x56ecd5];
            _0x44194d[_0x56ecd5] = _0x47812a;
          }
          _0x80cd4a = 0x0;
          _0x56ecd5 = 0x0;
          for (let _0x539c84 = 0x0; _0x539c84 < _0x59678b.length; _0x539c84++) {
            _0x80cd4a = (_0x80cd4a + 0x1) % 0x100;
            _0x56ecd5 = (_0x56ecd5 + _0x44194d[_0x80cd4a]) % 0x100;
            _0x47812a = _0x44194d[_0x80cd4a];
            _0x44194d[_0x80cd4a] = _0x44194d[_0x56ecd5];
            _0x44194d[_0x56ecd5] = _0x47812a;
            _0x1f3cf1 += String.fromCharCode(_0x59678b.charCodeAt(_0x539c84) ^ _0x44194d[(_0x44194d[_0x80cd4a] + _0x44194d[_0x56ecd5]) % 0x100]);
          }
          return _0x1f3cf1;
        };
        _0x1cca.NFGFsu = _0x510f83;
        _0x19c105 = arguments;
        _0x1cca.MHOCGp = true;
      }
      const _0x3d1600 = _0x2ca820[0x0];
      const _0x253fbf = _0x3d29d1 + _0x3d1600;
      const _0x30c553 = _0x19c105[_0x253fbf];
      if (!_0x30c553) {
        if (_0x1cca.TfvqyZ === undefined) {
          _0x1cca.TfvqyZ = true;
        }
        _0x4fb107 = _0x1cca.NFGFsu(_0x4fb107, _0x3c271d);
        _0x19c105[_0x253fbf] = _0x4fb107;
      } else {
        _0x4fb107 = _0x30c553;
      }
      return _0x4fb107;
    };
    return _0x1cca(_0x19c105, _0xcfc9ed);
  }
  var TextPro = require('@sl-code-lords/text-pro-me');
  var text_pro = new TextPro();
  const mumaker = require("mumaker");
  const {
    Maker
  } = require("imagemaker.js");
  let {
    img2url
  } = require("@blackamda/telegram-image-url");
  var imgmsg = '';
  if (config.LANG === 'URDU') {
    imgmsg = "```Koi naam likho!```";
  } else {
    imgmsg = "```Please give me a name !```";
  }
  var imgmsg2 = '';
  if (config.LANG === "URDU") {
    imgmsg2 = "*Misaal ke tour par: .banner Dark+Evil*";
  } else {
    imgmsg2 = "*Ex: .banner Dark+Evil*";
  }
  function _0x415a2e(_0x3547a4, _0x36d3bc, _0xb4d96b, _0x2276d0, _0x32f7e9) {
    return _0x1cca(_0x36d3bc + 0x1f0, _0x2276d0);
  }
  function _0x4917() {
    const _0x3cd6f7 = ['W5JcLCofsZy', 'pSknov0', "oSkEE8oEFa", "CKNcMSoj", "WPioW4VdVx8", "zHldNmoApW", "uSk/WOpdJ1q", "YiO04Bsb4BAxYPa", 'pqxcRr7dIq', "W7yCW6hcGhy", "yxFcJ8o3na", "WQBdPg3dL8o2", "wSodWO7cK8oy", "WP7cGK9YW7C", "W6CyvSo9aW", "WQZcMa9cW4O", 'bComW5ddQ2i', "uSkNWPSXpq", "W7hcLGFcOW", 'xSk7luNcHq', "WPNcLWy", 'WOWOWRG9W44', "W5KBW5RdSMG", "W7jbs8o1gG", "wvddQ8kjjq", "WPhcOCoi", "WOxdT2HEWRC", "WO7dOdSEW7a", "4BEg4BETYjVHTBxjSG", "WP/cMWnHW7C", 'WOW6yNZdPG', "WPNHTA3HT6hHTO3HT7C", "WQH6BCoWEa", "W6tcRCo0WRm4", 'j1qeW4/cOa', 'aGVcSmknka', 'W5tcP8oEW6FcJq', "wrhdIYddVa", "xmkqW5q2eq", "W7dcQCo2WRyn", "yGZdNSoyja", "W4RdMmoyESoQ", "eSk/kKRdRq", "v8o1WQLGga", "f8kKogFdRq", "tCo3WPu", "WP48ps/cUa", "B8kHW6vIWQ4", "A8o5WQb2CW", "iCoUWOn/EG", "k8oyW6tdJMa", "8kUDK++7UcS1WRNdJW", '4Bww4BAVYP3HTi/HTjG', "CSovWRrteG", 'px45WPC', "WR7dPwddKSoI", "Y7pHTAllUIBHT5u", "Y47HT7/HTy8vYRy", "WPWhW6NcVgi", 'W4tcKXZcPmkn', 'WR0gWPP8xW', "wSoSWRbTkG", "WPhcQXBcGwC", "WQZcSqPSW6m", "FCknWPG", "amk5k2ZcOW", "prruW6yY", "WOlcSmobW7JdJq", "Yk474BEz4BsqYlW", "r8k5WP7dGeW", "imkui1Tk", 'crRdPcBcSq', "W4KTWOhdOSkX", "nstcJwm7", "wCk1d17dQG", "WPyXCwVdTG", 'oSoAWQ1mua', "mKDdWPVcKW", "lHdcOmkjoq", 'WRa6WRNcNSkl', "oXbg", "WP46pJ7cSW", "WPCGWQtcMCkb", 'r8klW79TWPi', "EaJdMmod", "W7BcVmoUWRyw", "4lE64ls1W5FGTPhGTQq", "W4TsWRPqWOm", 'qchcIq', "eSoyW53dSfS", "WPhdMbeEW74", "tCkhWObsgq", "nVcMHjHSWR9d", "WO3cNCkMeCkS", 'rSkalwldQG', '8j6VVE+7Sa', 'W5GwWR4iWPu', "W69vq8o/hG", "WRtdRt45W54", "WPW1WRpcHmkl", "WRagWQzfjq", 'WRxcLmovbCkN', "W6nxtmk1fW", "hComW6tdPM4", "r8kCW55MWRK", "rmkqWPmq", "WPieW5JcSMC", "4lwp4lwm4ls14lExW44", 'W4KmWRbDBa', "umoXWQRdL3y", "qCkDW4HMWQO", "bg7dReHc", "cXdcQXxdSa", 'uXFcNW', 'Y4lHTkhHTlldJ8MV', "4PUOrComcCoN", "e2RdPeHB", "WOmpW4/cUa", 'iabmW6S', "eCk/kMJdPa", 'F8kcW4tcN1G', 'wJBdLCo+gq', "wmoNWOrZ", "c8kHWOJcJfq", 'W4S+WQpdNCk6', "WRlcRbG", "zH3dI8orvW", "4Bs74BwfYOZHTyJHTPi", "cCoysSkFpW", "W43dSh5hWQq", "W5XvWPRdHmkv", "W6FcImo3wJi", "WOlcKXPYWRi", "jmoxW63dRgO", "WP05FcBcSW", 'omoIWPzSEG', "W6lcU8o/", "muT5WOlcGa", "W50rW47cJCoq", 'W7xdGI0uW6O', "W4pcHmoFxWG", 'cmo/WONcJLS', "mLnfWP/cMG", "bmorW6FdJY8", '8ykSQU+5RsBcUmkceW', "gXtcSrtdMG", 'E+c0Hoc1Moc3Hcu', "WPlcRYn+W6y", "4lEsx8oLWOWR", "zmoxW6FdJca", "W7ahWOVdJCke", "WQW6gXlcUW", 'W44YW67cNeW', "WPiDWOJcRSk4", "W5hcGrNcHCkd", 'W5v4yCo2yW', "f8k7cuxdLa", "WPJdSdTrWR8", 'W53cOmosAY8', "WRJcQeZdLmoS", "W7RcRCoUWRyz", "yGddHCofwa", "WOJcQmoiWQRdGq", "W7hcM8oSWRWY", 'mSojWOBcKvG', "aCk/pa", 'EGtdK8oziG', "W6vztmo8hG", "W4etWRCyWPC", 'kHlcHGNdIa', "W7jbaSoXfG", 'iHbEW6a0', "WQJcNSo3dmkj", "WOVcNCkR", "W6JdGYWuWQO", "4BEg4BEAqEg3SUg0IW", "gCo1W7tcRuq", "W6bMnSk3zG", "WQ/cTSoD", "k8kTW6eSnG", "WQpdScT6", 'WPFcLCorzmkN', 'rCojrCkdlG', "WR/cImoLdSkA", "s8kbW4yN", "Fmo5WQe", 'o8oUFmk9fW', "gbhdTwG", "rSoFs8kdDW", 'W4OJWRBdU8kb', "W4CrWRbDW5K", "imkDobvz", "WRpcMCoFAmkS", "iN4OW5Sv", "ANKaWQhcRq", "WObrW7qrWP0", '4Bwl4BEOYzZHTPhHTi4', 'm8odW4hcKq', "tmkAWPuBda", "W7BdMdbaWQ4", 'W5TUW7dcUmkc', "w8kGjG", "yx7cGgWP", "p0yjWRm", "WRxdQLFdJ8oe", "W4LYWQH1WPe", 'qmk7mey', "WRhcQ8ozACkI", "jmoaWQJdO3O", "icjjW4eU", "ccpcVf1D", 'kpgePzmNW7q5', "W5BcGGPJWRi", "AebzW6yJ", "WRddMKxdVmoz", "W7tcQCoUWRis", 'WRJcPSoez8kv', "8l+CV++5U8oRW5ngcq", "8jcoUE+7Qq", 'WOhdRNjnWRe', 'WQ/cGbVcPSow', 'WR/dRwddKCoI', "Emk5WQBcQCoa", "WQ/cR8oOW7VdJG", "ECo1WRrNma", "mxeKWOqs", "zWddGa", 'WPVcSmoqW7JcGG', "A3KOWRFcVa", "W7lcU8oPWRys", "lCkKwSo6zG", "WPq6nIu", "WQBdVw7dGCoI", 'oJdcJCk7bW', "WPFcMCkMfCkY", "fCoJW6VcRLK", "W7ZcRCoJ", "fCkGmgJdSa", "4BwA4BApYAJHTjpkGW", "hCkImINcRG", 'oSkHu8oAqG', 'cgddSbfh', "WP11iJ7cTW", "BmoLWQJdGLa", "W6T/W7/cICke", "WPW8nYZcSW", "fH7cQmkfpW", "sa3cGYi", "q8o8WPG", "W6xcRCo0WQnv", 'WRldRvFdMq', "AWRdLCouCa", "dbdcVqu", 'WQdcLSoiuq', 'gXJdPgpcOG', "rmk5W7WUWO8", "BXddJmoLCq", "WO3dJvJdK8od", "wCk4phhdTW", "iupdHuLQ", "WR7cNCoObmkA", 'WOJcJmkMamkZ', 'cmkZWPSyeW', "oCorW6BdHui", 'wrpcQSkfpW', "WOuAWR9Aza", 'v8kZk03dIq', "WRBdQ2RcLCkH", "W6BdGdO", "W7vHD8o/", 'Fd3cHMy6', "WPpdLHz/W6i", "r8o1WONcGxS", "hqZdV3lcTq", 'iIO0WR3cQG', "d27dSL9o", "W7zXASoZxq", "WOqvW5RcS38", "u3VcICoWbG", 'nSkGpgjP', "W5WJW7tcMwi", "W5yYW7K", "WQHDuSoWfa", "z8kdWRVcJ2C", "W6pcHCoWamkc", "k3xdVxbJ", "WPagWQzf", "WPlcKXfL", "WOCcWQ5fBa", "yhKmWRlcSG", "WOxcKWXIW58", "WRldOta0", "sCoGWONdHru", "YyJHTPpjQ8kv4BAc", "WPZcTXvjW4u", "gHJdUM/cOG", "WP0BaZ/cJa", 'DSoYWR0VBq', "hNBdIhbk", 'Emo3WRa', "jmk8qSoLEG", "pmoltCkfmW", "WO7cVCobW68", "uJ7dGCojFa", "W7BcJCoqsYq", "W7pcGdPsWQ0", "W43dJSoIrmoU", 'WQxcMCoWhCkD', 'pWDg', 'bq/dUSoxEq', "W5OqWRmz", "nwL+W5yf", "WOfdWR8rCq", "8yYCSE+6I03dHe9A", "tr3cPCkcjq", "W6f9D8oNFa", 'WRJcLSoeuCkb', "YBD14Bwu4BwkYzy", "WRlcPwldLmoR", "WPWxWQ5dAG", 'zXRcK0uP', "vSkaWP4XW64", "k0HCW4/dMW", "WOVdQtqZW4q", 'jCoAW6pdR0u', "WRVdQCo8W44", 'f8oaWRHFwG', "e2dcRWOB", "sv/dJSoMyq", "qSoKWOBdOLa", "W6brtSo9fq", "W7FdMcXC", "f8k3W50TWOO", "b8oCrCkhpW", "4BEnWPxHTP/HTARHT64", "CXudW4hcNG", "vSkhW4HP", "j8kkl0FdHq", "WOxcGmkMumk0", "tW3dI8oziW", "W53cJSoZWO0a", "CCkXWR9TmG", "W487WRbXW4G", "WOCcWQPuyG", "CCoWWRfSoW", "W4ZdPJ5mWRW", "cvNdKxtcPa", "WPldRsCUWOO", "g8kkjG", "fXNcQrtdNG", "pHbqW60", 'dCoNW6/dTuK', 'W7vwtCoV', "W5lcUmoYWRGb", "FmULYP0Hfq", 'FWddL8ouhq', 'WQNcSWdcMIW', 'iJTSW5Dz', 'hCk+yCo3BW', 'mmoIWPi', "aevrWPZcMq", "ebdcRapcNq", 'WPhdSxrlWRu', 'C1lcMG', "y0FcMCocaa", 'WPNcImo8gCoo', "W7pcSadcM3K", "seJcGYRdSW", "WOSWpY7cMW", "WQpcISk3eCk0", "WQBcImo9", 'Y5hHTOJHT7iRYOy', 'gCoCrCkslG', 'rwNcTSoolW', "gCoCsCkyna", 'sCo1WOpcJeS', 'tKJcNcpdSq', "W5WqW6Pm", "WOW9ncq", "WRCakcxcPq", "iSoxr8kqna", "4Bw8Y7RjNog1TSI9", "WPiAW53cVgu", "mCoiWOBdNXy", 'a2RdRW', "4Bw4dEg3NUg1TUg2Vq", "WQldU2q", "pHbnWRfG", "tZBcIZ/dUq", 'WOhdQx4', "E8klWO0tgq", "k8MlYPxcJwK", 'WROefJNcLW', "mmoJWPTKCa", '4lso4lsWiEc0Ioc1Ia', "WQmtW4FcQsS", "W5y2pIFdUq", "WPJcN8oO", 'W5WYW6JcGhe', "p8kTwmoXra", "WORcSCocW6i", "iXXrW6qS", "W7VHTyJHT5/HT43HT60", 'AIe1W77cVa', "zvtcKmoIba", "gftdTwdcTG", 'WRJdNSkhhCow', 'hGFcQHZdVW', 'yeJcK8ocdq', "cmkEuComtW", "mxCKWPCa", "lCodW5xcMW", 'ECkOo2ddLW', "W5tcJrdcRSkl", 'AtaTWRBcTW', "WQBcG8oliSk8", "W4CqWPBdMa", "WQiTWRP3tG", "W7iyrmo3dG", 'pSkIghXw', "W6P6CSornW", "amkPix3dSW", "tSoJDMZdRq", "q8oQWPJcGuW", 'tCkmWOCEgW', 'rmkgW4fIWRa', "r8o/WOK", "nCkBcLNdSq", 'WRNcRrxcJgK', "EZzYW6xdQq", 'WOyAW7ncCq', 'W4pdUZHTWO0', "BenhWOFcMq", "WPxcISkMiCkz", "WR/cSGdcIMC", "WOOkW6feDW", 'W4SAWQJdUCkM', "u8oaWP7dJxO", "cmo3WPZdIvC", "W5iWW68", "WPn5WQ/cI2q", "W5WAWROjWPe", "f8kMW4ldIuW", "tCoFWOagda", "WRVcUWlcNse", "4BsReUg2KEg2Uog0LG", "WQBcNmkbfW", 'tatcKJJdSa', "WPasW4JcH0y", "eq3cItJcUa", "WO/cHZvjW4G", 'WPC7oGtcNa', "8jI9Go+7LYj0vCoQ", "WRy8W7JcHea", 'kCoOE8o0EW', "vmk8mgFdQa", 'i8kDpLrd', "jCkLv8oYBa", "WQTXDmo/FW", "W73cGmovBJ0", "a8kLn27dSa", 'CCopW4FcLvm', "W7j9Cmo/ma", "WOJcVmonoCkn", "lCodW5tdNHC", 'aq9wW6KX', 'xGGRWQRcSG', "WQBcLSorrSkq", "W7jxaSorfG", "rCkaW4fJWQO", 'W6pcRCoIWQm', "WQRdGtPvWR0", "n8oyW5lcJKu", "WPOGpsJdTG", "W7zxumoSgG", "WOikWRjuAW", "DrBdK8oekG", "nSocW4xcKKm", "W65mvSoOca", "WO3cJmo8hCkL", 'WRZdGZeZW7i', 'W4fztSo5aW', "Dmo5WQxcOSoe", "vWdcNW", "WPaFW5NcPa", "m3q7WPmb", "WPFcPgPkWRe", 'wGZcIINdUW', "e0WMWOil", 'rSkBW5qmfa', "gCk8W4yUWPu", 'WOJdSg9pWQm', "WQJcOSk6hCkb", "W4j0WPHOW5K", 'nCogWO9SEG', 'rCokuCkCka', "qbm5WPtcMG", 'W6dcJXJcU8ky', 'oSkxEqmF', "W6NdSaNcNwe", "W5FcVmkr4BAh4BA+", "WOBcLXzYW7C", "xWldR8or", "WPxcPCov", "WQZdJWu9W7a", 'i8oGW4u', 'WQJdUq8OW5O', "WRD9WQdcMCki", "gmkLmvddGa", "W7vXDSk6Fq", "p8oQWOu/", 'W5H3W4hcINu', "CCkBW70xWRW", "WQFcLSoEqCkP", "wH/dPColCW", "pJRcIIxdUa", "W4H2WR13W5K", "bCoQWO9/pW", "f8kTlwZdPa", "WRlcOdPsW5a", "WOqDW6xcRMu", "WRmHkSo/za", 'WO4xWRqjW5q', "4Bwu4BASYlNHT6BkQG", "WQNcQcSJW5O", "WP11js/cRG", 'W5rOWRK', 'WRtcSWdcJMK', 'lCojW4FcILm', "hSofW5tdNNq", "bqDt", "gbBcOZddOa", "W5qBWO/dMmkf", "WP/dPmoqWQRdLG", "W6ynWOhdISkE", "nsJcR8kRka", "4lAg4lsg4lsj4lAj4lwb", "aUc1NUc0LEc2NEc0La", "W5jks8o5fq", "cqdcQGxdMa", '4lEQ4lEjy8oy', "hvxcVb7dIa", "eGBcIshcUG", "WQdcNmkde8ou", "W4uJWQ3cNwC", "nw3dRL1P", "mSoAWQvrrW", 'WPpcQSoAWQRcJW', "e2XbWOhcHq", "C8oPWQTRyW", "BmkMW65bWOO", 'EI01WRZcTW', "uGlcIsddSq", "CSkNW7ldTq", 'umkkW4XKWQO', "lgtcJCovda", "WRpdPxXlWQi", "WQVcTWtcNxG", 'WOhcJSo3a8kJ', "xmkqW4Djta", "WPtdRh5r", "smo+WOxdJ10", "WPqXFhpdRG", 'eGFcHYldUW', "pSoyW4pcMvK", "W6xdGsPrWQu", "hJPYW64s", 'WQNdJJbzW6q', "FJBcNa", "uKtcH8otqW", "vWhcQ3Gb", "ChCIWPeC", "n1rB", "CSk4W7vlWPm", "xYBcHrNdNa", "YRZHTAlHT6nSYiW", "W5COWOifWPC", "bqpdHvhcVq", 'W5W7W6NcMxi', 'WPymW68b', "ruFdVSoABG", 'W4CqWPBdMmoq', "WQVdSwTkWRy", 'bwKH', "WRu1WQpcJ8kp", 'WQNcRuhcGgi', "tdFcNYRdTa", "WPhcOSkHg8ke", "jCk7i37dRa", "iCkNuSoWEW", 'W6pcP8kPW6ff', "ArBdISornW", "rbRdVmo1uG", "WRqpWRTqDG", 'WPC5WRZcIq', "ySk6wCoMBa", "WONdQxPyWRu", 'pxO/WOaw', "xmkMF3ZdIW", "WPNcPCofW6/dHq", 'WPpGT5RGTlFGTj3GTlO', "bv9MWOFcVa", 'W6NdIx8vW6S', "xmoaWQJcSCoI", "ASkuWQJcGs8", 'W5vYWR9/W5a', "krldONpcNa", "4Bwx4BwvYzxHTOFHTyC", "l8ohW7VdGgG", "wuxcH2ZdOq", "n8oPWPjOAW", "fCkLnW", "W6LksCk4pG", "WOJcRa0", "bmoRWR5Sxq", 'E8oXWQFcSCkb', 'WQBcKdPIW4m', "YQVHT4NiTqJHTQS", "W5BcJbJcRCoz", 'WPVcHGpcOhS', "kWhcVb3dMa", "tKFdPCorEG", "W5ZdLMGmWRG", "lSozW4NcILm", "WQJcLCoWqmkl", "W7j8ASogCW", "vmo3WO3dLv0", "Dd/cIxOU", "WPhdH07dOCoc", 'jbbhW7DT', "WQpdRxNdGq", "WO/dGg9PWOy", "W5n+WR1ZW4G", "B8k4W4OAWRi", "eCkMW5CWWPy", "rSosWOaxgq", 'WPRdR2jhWPO', "ite1WR7cTq", "qHtdTsNcSW", "WOSoWRneAW", "qCksWPuygq", 'W6JdOcS3W4y', 'uCktWPfstW', 'otRcLdddJG', "CCoeW5lcK1O", "W7JcUSk3WReh", "z8kFW4vOWQO", "WPxdTNC", "WPxcHaDNW6y", "v8opWQfZbW", "l8kuW7ZdMh8", "d3VdSva", 'lCojW4FcNui', "WOT1jslcTW", "omorW6NdGNS", "fqjpW7OT", "weJcHspdUa", "WQldGmoLg8kp", "zmk9mG8p", "vCk8mu3dNa", 'W780WQddQW', "WOGmWRLEka", "B0/cNmolfG", "WPldOxPlWRu", "W5ygWP3dJCkx", "W7vXACoovq", 'WOxdLCoJqCoX', "W4awWRGCWPG", 'W7HbWPzOW4O', "DetcNSoefW", "WOhcLSk8fCkS", "W6/cHSoDWPWD", "y8kLW6PEWPu", "FbNdQmoQwG", "AIe1W7pcRq", 'oqVdVa', "WOSLpspcOG", "xUc1H+c3TUc3HSk5", "4BwJYOdiHEg0U8QR", 'W4xdGHz9WPG', "mWr5W4eO", "WOVXH6AkW6VdK14", "W6HFd8o9hq", "hHBdOIBdSq", "WQNdII1bWQu", 'WRJcT8ovW7ZdGq', 'W5fUWQ94', "nh4+WPu", "WR87k8oYFG", 'jKne', 'CSo7WQG', "WROgW7BcJeq", 'W4dcJCoqscG', "amkPix0", "zCkdWONcILm", "W78/W6RcNeu", "WO7dOwKsWR8", 'WRtdPY16WOS', "xmkMk1JdNq", "WOVdPxzBWRe", 'WQaoW5lcR0C', "WQm1WRhcJ8kE", "DutcKCodlG", "vH3cSrZdKq", "pCk9wCoHBa", "W7u6WQhdUmk1", 'trddQSo0bq', "WP/cO8oUhSk+", "zCoFWRtdO2O", "qSkhm13dRa", 'qWhdHmoZuq', 'WRhcHrzCW6O', "gt/dNKpcLW", "W4CrWR5qW4u", "BchdH8o6vq", "WRVcTW3cJgi", "hSkMawVdUW", "W6FcQmo8v8oo", "WRBcUXG", "WQZdIqWYW70", 'oSkHu8oGAa', 'uSkYW5qMWPO', 'xmkwWPSr', "mCklfNddTa", "CmkBWQFdHge", "WQNcUXNcNse", "WOBcOmoKqmk1", 'WRhdNSosrmkk', 'DahcHCoibW', "4BwG4BA5YRVHT6NlHG", 'YBFHTBhHTRRdVCQs', "W4FcPmo/WRyg", "rCkmWPm", "cmoZW7JdPh0", "gXtcTqxdLa", "mN3dSa", 'WO7cOCojW77cGG', 'W4eqWO/dMmkv', "W7xcJeFdVCoj", "WRpcU0ZcJga", "WR0YWQxcGCoh", 'cmMM4BE74BwKxa', 'W6JcI8o/ysi', "WQNcU2LQ", 'WO8FWRSD', 'dSonW7ZdRfy', "W5L9WQPwW74", "WPe7ngFdOa", 'W6LpDCo9aq', "ySQ/4Bs44BE0W5y", 'W5KvW5dcScq', 'bKNdVuvp', 'W7e0W7pcLKW', "WQJcRa0", "k8ozW60", "hqBcTHddMG", "W6ldNIXvWQW", "nSolW47cIHy", 'W5VcKWrGW7C', "e2KOWPCh", "WOSnWRjyAW", 'W7tcGHdcP8kG', 'W5OyWO/dI8kv', 'W5CqWP3dJW', "W7xcQCo0WRKq", "W49+W7eHWO0", "WPygWR9sCq", "WOhdQhjEWQm", 'pCkDALPj', "hmoIW4xcTKq", "cHddVgpcVG", 'WOlcNK9IW7C', "q8k1pKddMa", "WOjmW5VcNSogWOxcKGJcVmosW6L4WQ8", "W6lcNJSu", "fFc4LkyIDe0", 'WRNcRCoQWR8A', "ASo3WOXGfW", 'WQ/dUJP3W5m', "cSolW47cTx4", "W4uJWQdcLM4", "vbhcIYa", "mmoHWOz/sa", 'WRNcQSo7WRKB', "f8ooW6ZcINS", "FsGPW5Sh", 'raBdMmoEtG', "WRhdNSorcmkD", "WRrWW6pcQa", "W5KuW57cS2u", "j8k04BEK4BEkYl4", "o35HWQ3cOW", "e8o3WQrmrW", 'WOD4WQ/cNw8', "nmo3WOmRAW", "l8kmpLrm", 'kLjdWP/cHq', "W6q2WOxdUCk4", "dbhcQmkfjq", "WQVdQs0SW48", "W7NdRxhdNCoO", "WRpdSW3cGgS", 'dbJcQq', "j1veWO7cKq", 'q8oXWPJcJfC', "rSk3pKVdMG", 'x8oMWO7dGfy', "gSk2W5mTWPC", "W4XIyxRdRKH+bWjFW7jcaa", "W77cPCo7WRaq", "gmkJpMy", "xHJdPG", "smo3WP5wfa", "Fs7dPCozxW", "Bmk0e0ZdIq", "umkqWRiQkG", 'WPayW57cQx4', "8kUDK++7Ua", "WOOWmcNcOG", "FrddLSoenq", "4BsyC+g3QUQCUUg1IW", "vvhcRmkyjG", "WO7dGCoNEG8", "YRJdTog2T+g1G8M5", 'WQtcRmoOWQix', "WPpcHrfNW7u", "WOryWPe", 'q8k/WOddJL8', "WQNdIc9CWQq", 'W6RcHG0', 'W7NcR8k6WQ4A', "W4iCWPFdP8k6", 'nK5sWOe', 'W6ldPYTJWPW', 'WOtcMvm1', 'zCkUW69GWOS', "h8owbmk4nW", 'pSoJWPTUFa', "tSkwWPGAeG", 'W4hdOHbGWO4', 'qLxHT6xHTB7iOG', "gmodWQ5/tq", "h8olWQHFrG", 'ALOqW6yU', "W5vtW7bzCq", "jgRdLd1V", "g8omv8kz", "W4DvWOJdG8kf", "4PIjW75lWQX+", "oCkOa1JdJa", "W5NcH8oxWRON", 'W7fXFmoJ', "WPagWQzfka", "fbRcOH4", "W5WVW5JcRgi", "euedWOmz", 'lqz6WO7cNq', 'YQrk4BAp4BA/YPy', "W5VcJbNcQCkq", "trdcItJdSa", "x8o5WObUWPS", "uCkkW4nJWPm", 'WRNcHCoHaW', "zJqGWRtcVa", 'eY/dULnE', "tu/cVCo1jG", "WQWMaWNcLW", "W4tcJSkcdxu", "hIbXW5if", 'WO8gWQC', "dq3cPdJdHq", "W5v+WQrK", "WPdiVCUQW5il", "W4dcGmoftYa", "4Bsm4BwOWPNWS5c44Occ8yIIIG", 'W4j14BwX4BwfYyK', "hWNdVg/cPa", "m8oUW7BcT3O", "W7DntCoShG", "WRldQxxdKmo0", 'aahcTqpdKG', "W7jDwSoS", "emoHWPPztG", 'WO3dJKjtWRi', "WQZcH8oTh8kp", "wZW5WQFdUq", 'ytWZW6y', 'W5JcLq1RWR0', "orTuWQnT", "g8oGySkqaW", "jG/cRmkdpW", "8l6FIo+4I8k3oSkHnW", 'W6BdHc1wWQO', "W5pcSbZcK8kr", "W6q0Dmo/FW", "W6BcN8o8WP4e", "fXddT8oAEW", "W5hcTSoqW77dIG", "r8kHW4eR", "vY7cKWBdRW", "EmoPWO1Spa", "fb7cS8kypa", "W6P1Cmo0DW", "WPhcJCk9bmkL", "nmo8WOrQEa", "qCkBdM7dVa", "WRaxW5pcVhm", 'W5SmWR4', "WQu4WRxcGG", "W7zKAmo+za", "a2XWWRBcVq", "uCkHCHRcMG", "WOy8W7NcPxK", "og85WOya", 'jbbhW7CW', 'jhr+W4bd', "WR3cGNbrWQu", 'smoMWQG', "xq7cG2hdOq", 'WOCwWRf0yG', "lenfW5ZdLG", "AvrwWPVcNG", "4Bsb4BsbYPxHTQpHTAq", "W5H6W6FcMwW", 'FGddLCovjG', "ibrlW7CL", "WPJcLblcOL4", 'Y5/HTQVHTQpdNSQV', "erddTW", "W4ddQ8kEW77dHW", "W53WVzE/WPxcRCku", 's8kcW4XGWRS', "W6FcKaFcImkx", 'W4CIWPRdR8kd', "WOqtW5hcUuy", "WOldQCoDW6/dHq", "rmkXW5WNWRq", "uSkNW4eIWP4", 'iWvtW6O0', 'WO/dPwNdR8oO', 'kmodW4RcMby', "vmo3W4ZdIfu", "fqdcQqxdLa", 'WP4AWOddGmkz', "a0RcPJy", "WR7dVc8OW4u", "W63dG8oMdmka", "4Bsvk+g3VUg0JEg1JW", "uUg1REg3IUg1Kog2UG", "BmkPuCo0ya", "WQpcQd56W54", "rmo8WPBcJSoP", "WRZcSWq", "WRNcGmoO", 'fd5BW6OM', "W6dcLCkK4BwG4BEY", "W4aAWQLoW5q", 'iNr5', "W5FdT8ovWQFdJW", 'WP8OWRtcN8kn', "aSorW6NdLwO", "DftcJmotgG", "xrZcUtJdSa", 'W48sWR4', 'WQBkOEg0REg2G1S', "FcKTWRRcRq", "W6JdRteYW4S", 'W4uAWQi', 'WOJcLSkZcCkH', "bCk5nN3dPG", "iMiAWQyW", "uHJdK8o0BW", "4Bwj4BEyYkdHTlhHTkG", "rCk7jMpdPa", "4Bs/4BEsY4dHTldiSG", "e8o7W5pcQ0W", "gbBcScFdUG", "fmo/WP9KAW", "W75muSoQfa", "WOBcKCkGfCk3", "eJfuW4Wk", "W781WQdcHmkf", 'W6dcJHe', "rrVdMSonzG", "CNtcRCoqia", "WQ7dVcSQW5K", 'WOW6CqpcUW', "W69vrCo9fq", 'ASo0WOjtfW', "wbRdPSowyG", 'WPlcVmo/CCkH', "nEg2Hog3L+g0O+g1Mq", 'wSoIDMxdQG', "oSouW5ldNKi", 'WQZcN8oevmkI', "WOeaWQOCAG", "WRxcISk+", "Yi7dG+g1SEg3I8M5", "4PUbC8optZ0", "uSkSW4zJWPW", "W5acWR7dOmkN", 'menwWOZcGG', "mSo9WPjQAW", "WPVcMG/cGfu", 'srdcLspdHW', "WRZdRxG", 'abdcQmkdoq', "pmoEW4pcN0i", "EsFcKK8+", "W7pcJtzhW6S", "emkfk3hdMq", "WQlcGCoOcmkn", "WQi1WR7cImkN", "vLBcV2pcVG", 'pCkDjffI', "WRNcQ8o1WRPA", "WOVcOSoloCkR", "wv/HT6tHT6plLa", 'bbbCW6TR', 'WOVcSCoEW77dHW', "zG/dVSoEEG", "W5auWPRdICkx", "dXtcTWVdKG", "W4NiICQ0gW8", "trFcSmkbjW", "f3RdRKXh", "oZVcKwCJ", "WPZcRCoDW6/dJa", "fUc3RUc1IEc2G8kV", "ymkDoL1a", "WRJcSKhcHwK", "WP7cGSoEvMO", 'WO7cRCoEW6q', 'rXNdRmosra', "W67dKeldUW", "A8oZW6S0BG", "WPhcOSo5CCkh", "aG3dVh/dVa", "yWNdLSocFq", 'c8oMWONdMuW', "W5ybWO/dGmkC", "WRVcGCoj", 'WRNcUXlcIG', "WQ/dPt49W48", 'k0TwWOJcKW', "W7/cVmoUWQCg", "p+g1I+g3QUg0Q+g1Ia", 'AbqnWONcTq', "W5m2W7NcMwO", "W4CrWR4", "WQhcGCoC", "zmkGW6jtWPS", "xqVcKMZdOq", "WQFdPtO", "W7tcKrG", 'WPpcNCk8fmkn', "W5vIWRb1WPe", "4PIaW5pcMMdcLG", "W5iIW7tcJwm", 'tCkdW4j1W74', 'WRhcGCkEbmoo', 'b8kPn23dJG', "WR3cMmo2hCkc", "fvC+WP0d", "4BwhWPtHTOFQNPhHTiS", 'WOujWRDdza', 'WQRdQtWXW5O', 'W4tcHmojtW', "W5GVW7tdMhu", 'W7v1CmoJDq', "sSo3W4hdJL4", "sCkHW5RcKq", "4BsDW6ZHT5/HT4lHTQe", "WRBdPwq", 'WR7cImoQcCkJ', "cw7dPv1a", "mmkeoh3dMq", "W4K4WRpdJJe", 'h8oaWRPMtq', 'W410WRS', "xXpdPSoAoW", "W7FdJcTaWQ4", "W5jbB8ociG", "WRNcImo8gCkE", "W40IW7pcKa", "g1ZcPmoxyG", "WRxcKmoBcmkt", "W4pcKCoDuJe", "WRP9WQpdGCki", "s0dcVmoXma", "W5dcRCoUWRup", "W6ldSIXrWQC", 'W6pcJXxcQmks', "msBcSSkhpq", "Y5hHT6piObxHTkO", 'gmkkghPc', "fXBcQ8kc", 'p8kYWRPJma', "uGdcLh/cTq", "p8knjufk", "lmojW4JcMNS", "yGddI8kf", "vSkkW5vZ", "W6b3CmoKma", "W6navSk4dW", "W4SMW6RcM3y", "j8kTtW", 'W7/dMx9AWQq', "W7NcN8ovuCkq", "W447WPfXW5C", "4PIdWQGRW7ddTq", "WPpdOxvBWP0", "4BsSYBdjREg1UmU8", "Emo6WQddQmoo", "kCkWqG", "eahcSqhdJG", "pWDu", "W5S+W6ZcNw8", "hcBcOtxdSG", "zIFcHhG1", "ivDXWQ3cNG", "WR4mWRntBa", "jCkDmW", "WOiuW4BdSh8", "WOFcRmo+dSkK", 'qHRdV2VdVW', "W7pdIcDaWRS", "WR4AhH7cKW", "WPtcNCkQbmkW", 'W4ryWOVdISkw', "dCo7WP0MWPC", "WP3cICoEFmkD", 'WP8FWP3cGCk4', 'o8omvSkbnG', "cmouW4RcUvC", "p2WJW5Sv", "WPq8WQJcPSks", 'ba3dPhBcOW', "z8ozW63dLw4", "WPVcKWfUW7m", "W6pcImo0bCkb", "WQZcJbRcP8kq", "W6r4BCo2yW", "W5xdOZvhWPS", "gConW6JcL3u", "uCkXW5e3W5q", "CmkBWQFdLwO", 'yhNcP8o9dG', "wvddQ8kylG", "W5lcLW3cP8kC", "W77dIdvDWOy", "zCkdWONcM1G", "gM8JWQeK", "4BwkYBFlK+g0SSQV", "hHJdPg7cVG", "WQT5yCoJCq", "WOxcHHNcP2y", "hHZdSxlcTq", "WQq+WP/cP8k6", "WRb7WQlcJCkE", "BCo5WRLHkG", "W7BcJthcGmkq", "W7rHA8oJDq", "WOtdRt4VW54", 'qCkyWPWluq', 'WOpcHCodtIC', "W402W7tcJgq", 'kCovrCksmq', "l8oxW7ZcJga", 'WRBcKSoEs8kb', "FHDEW60U", 'DCkgW6TMWQK', 'WONcSmkrW7VdLW', "fdSbWRK0", "4BwcxUg0Rog3Qog3TG", "W5ynWPRcGCoc", "W65TDmoZaq", "WRRcTYXb", 'mNqcWPWg', "ACo1WQ3cQCos", "WOxcQw9AWQG", "xsFdGCo0wG", "8lomVE+6VHTVW6Wz", "WQxdQsS/W40", "xXq3WONcOa", "WPtcMqz/", "W5vZWRL+", 'W4ddQ8kEW6/dJa', "W54wWRuw", "q8kAWO0", "W4dcUmojCI8", "rGxdV8oryG", "WRhcTW/cJce", "W4lcMCoiCHi", "n8khcuddJq", "WRldOdO0", "4BsE4BwtYBRHTjllKW", 'jCoMWPHL', "avNdI11Q", 'aHJcOCos', "W6xcHGFcQa", "W6pcJSoRamob", "sWRdQSoVEG", "W4fFymo+DG", 'wSkBWO1PWRe', "WOaAWQSvWPS", 'W4X+WRfYW5K', "WPiuaIlcGq", "p8k4wSo8Fq", "afu4WRCC", 'W40EWQSjWP0', "W5OwW4pdMmkv", "WP14mYVcUa", "WQldJCojdmkf", "eXdcVa", 'W4pdVWvaWQC', "tCoFWPiwdG", "W4SnWQHD4lwf", 'nCUk4BEQ4BsrBW', 'nqzmW6iN', "A8o5WQb2", "W7RcKmoFsmol", 'l8kzW7ZdHhC', 'W73cQaVcV8kT', "WPBdRx5iWP8", 'W40EWQ8yWPm', 'WPbdWRfFAq', "W6bHW6hdMmoe", "W5W6W6u", "brFdUYVcOW", "WOtcMWPpW4S", "k8omW5ddTwW", "W6xcP8oOW7Du", "W7G7WP4jWO4", 'aSourCkwpW', "FHzqW65V", "WQCHWRRcJ8kD", "Fd7cHg0Q", 'ACoXWRZcSq', "W6O0sCo2EW", 'h8ogW6q', "WQhdJrBcQSkx", "mwxdIeLb", "f1JdT0Hf", 'o3zIWQRcPW', 'jSooW7pcKKi', "wrFdLq", "WRtcV8kqmCkr", 'gKK+WRua', "u8oDWOFcG8o1", "WRxdRte+W6C", "umkGpK8", 'FYWYWRS', 'oSoaWOVcKLm', "jahdT37cKG", "eCoYB8kzcW", "ymkHWP9/CG", "bXZdQq", "FSoLWOxdL2S", "WPpdRxXrWRe", "mWdcGbBdKq", "WQu1WQJcMa", "btRdKw3cLa", "WQFcIaJcS00", "WR4nbaNcKa", "WOlcMujpW78", "fZRcG8kEjW", 'vqJcHYVdSa', "xtmKWPVcSG", 'W4OfWQXyyq', "WPCNp2FcPG", 'W5O5WRW6WPO', "n8kEcgDM", "e3BcVeHe", 'WQNcQGtcM2u', "jh41WOi", "WOpcMCkIbmkP", 'saJcIG', "gSkXmexcGq", 'WOldUM0', "EmoqWOpcI8oM", "gSo+W4pdOf8", "W54GWQVdUmkD", "r23dQu9s", 'BhpcTN42', "W70TWOZdRCkZ", "W5CYW7pcIum", "gmoaW43cVe4", "W7NcQ8o/W7Dj", "qcZdRCotnq", "W58kWRqjWPe", 'h8kPia', "W6myvSo9aW", 'xtRcLgGj', "nCkoCCoExW", "W4aAWQLqWPm", "yCkWfUg2Mog0Lq", 'dbZcQH8', "WPddGKpdR8oe", "y8oIWOtdJKW", "bSoUWOnUBq", "W451WRDEW7y", "x8knWP0lgq", "WPpdLIn0W6y", "uSo3WPtdLru", "W4j6FI/cUa", "gHZdH0tcKW", 'WPtcL8oYoCkT', "WOBcKCk+fCkU", "tqpdPSoAEa", "WQaFW5hcUNG", "WPdcNW5JW7W", 'cmkCWPulgq', "W4bHzZRcObKufYa", 'wZWIWRVdSG', "4BExW7dHTjRHTRlHTOC", "mSkdfL3dHG", "lrubW58", "iCIpY5pcMLO", "WRtdQ1fNWR0", 'kSkUu8o2Fq', 'zCkfWPa3bq', "w8oBWOVcKCoK", "W6/cHLNdUSoi", "sSoMWPtdGfO", "FSo1WRdcOmog", "WPpcQSkCW77dIG", 'b3v6WONcGq', "W6nYyCo0za", "cqRdO2FcTW", "WOecWQPujq", 'W4rvySo+wW', "kCk7rCo0BG", "WPdcLSorqCku", "gmoaWOjIWRa", "gmoaW4/cIKi", 'WPaHjtRcPq', 'WP0MiIVcSq', "gCktjgbQ", "WP7cJmoufcy", "W4LqWROCzG", "W4pcI8oTWPuM", "WP/cRqxcN28", "WOBcGtz8W7G", "qCkaW5TIWQW", 'W4xdH1mYWQddP0FdOmoFWOSCWOjpmW', "i8oAW63cGtW", 'uSkAW55V', "WQu/W6pdMSoA", "WQxdRwddLSoZ", "W6pcRCoIWQmf", "z8klWRiOhG", "jCoIWPz4mG", "rmkgW59IWQK", "WOVcOmk7fCks", "oSobW7VdIq", 'dXBdVgNcOG', 'bmo9WPS', 'WQpdSxhdKa', "lCk6rmo6FG", "WRSNncVcOG", "WO3cUdNcJv0", "W4pcLIFcJCko", "WPVcKs7cVuK", "WOCuWO59uG", 'lSoZv8k6ca', "tSoNWR3cRmoU", "W4LTDmorxW", "W5/cJ8oufJe", "B0/cLmkhtG", "WRG9WRhcI8kp", "eKPsWO7cHq", "u8oYeu3dGq", "WQ3dP8k1WRiB", "pmklALPb", 'ar1+W5in', "WQeLWQpcHa", 'W53cJSoFfIK', 'EUc3JEc2MmkJ4lE4', 'W7JcP8oRWOqs', 'W4FcHmosFGy', "W6BdNdOIW54", "W7pcUXhcGwm", "WO7dLhP7WQO", "a8onumkbkq", 'imo6WPH/EG', "W50qWPZcNW", 'oSoQWO4', "WRqUWQHRFa", "uSkYWORdJK0", 'xWldO8omnG', 'W45My8ocDW', 'WQBcUa9ZW5W', "Fq0F4BAo4BwC", "W5BcImoDxIS", "WQdcNmkqBmkj", 'z1pcMSkhcG', "WRpcN8ozuCkq", "W6pcGcXaWQ4", "YzlHT7BlRK3HT6S", "m8oXWRtcRCoo", "WO7cISkMoSkf", 'erJcPbBdMa', "cHlcPCkllG", "WRBdPgJdLmo0", "o8obW6FdLwO", 'E8kkhw3dOq', "WQhcSSkvkCkl", "W4GzWR4EWOa", "F8oPW4dcMfm", "WP3cMmo2hCkc", 'xSoMW4ZdJ1C', "WQhdGmkWxCoC", "WQu1WQJcMmkA", 'WP3cKXS', 'vSk5W5C', 'pCkmk0DC', "W50uWOeoWPO", "ebRcQSkibG", "W7DXzCoJDq", "4PI0W5JdUdxcSG", "n3XXWQtcOa", "W6NcUshcVSkZ", "xmkAWOWlda", "WQvWWRBcG8kF", 'wadcLs8', "oSovEWeC", "W6BdMtOA", "W5BdLSk6bmkT", 'WPHwW7lcVga', 'bMpdTv1y', 'fGFcLJVdPq', "uSk7m03dGa", "tfBcLmoVlq", "W7NcJdlcNSkV", "jmoqWQJcGc8", 'tKRdVSogzG', "FIWUWQFcVa", "WQzur8oSdW", 'o340', "WRpdP3BdM8oR", 'WOO6i2RdTW', "W4L2WRL+W4G", "ySkQWQi1ka", "WPNcKq0", "WO3cLJhcU2O", "fSkTn2FdPG", "W5S+W6ZcNsW", "WRVdJfVcV8kC", "nwK+W5yC", 'WOpcKmkZhSkU', "hCo0WRHjW5m", "W5G7W6lcMw8", "WOZdQ3Xq", "WPWhWOBcO8k5", "aJBcSaBdSG", "4lsH4lwBWPfylq", "WQlcKWfUWRK", "eX7cSmkylG", "WOaCWRqqW5S", 'W4OAWQGE', "D1tcKmotbG", "pCIn4BEl4BEEWOe", "WOJcOCoqW6NdLG", "omkTtSoHEq", "q8kYWQ3dK0W", "WQemW6NcLM0", "uXdcKJNdTW", "gw9TWPuC", "A8kiW4zIWQW", "WQ3dQog2UUg3MmUQ", "WPOtW4VcVgC", "ArFcMCo3pW", "Fd3dHwyG", "k8obW4FcJry", "W689W4FcLeG", "W7vDtmo8nG", "z0ZcMG", "sexdMSoFpq", "WQNdPdm/W4K", "W6tcKaFcQSkE", "frRcOrtdJW", "cwpdTvjo", 'c8kdu8o5tG', "keNcI8okdW", 'W7K4WQWeWQa', "imkrl0yp", "4BE3dUg2Pog3MUg0IW", "WOuoWRS", "WOhdRxuF", 'W6tcVmo1WRKq', "W6z1CmoYDW", "WPhcVrlcH0e", 'oSkTwSoMkq', "FatdJCoenq", "sSMLY7ywiq", 'CSkdW4X0WRm', "bmkMpuJdLa", "WQxcQKZcNMu", "WP3cNmodW43dKa", "WRtdOgddM8oP", 'WOhcL8oqk8kf', "wq/dQ8oCyG", "W4qKWR9Dza", "W4P6W7y", "tHldVSkFyG", 'uSo9W4ZdQfu', "4BAQY7djGUg1USM0", "dCoqsmkuna", "W7pcK8ouwJe", "yKxdJCoynq", 'd8kpv8ohBG', "WQZcGmoHqmkb", "W43cOJRcJa", "WRldP2XSWPO", "WQVjKSMiWRjX", "W5SAWO3dG8kC", 'W4KYW7JcJa', '4BASo+g3K+QCOog2Ua', "kCoLaCkIma", "W5SbWPRdNmkd", "ftVdT0dcLG", 'WRtcHqzWW7e', 'W4jZsmoosG', "z8omWQJHTQZHTjm", 'FNKSWPGD', "iCkkmW", "WQRcQGBcHwC", 'WQhdGmoWcmkw', "bmkTlx3dPG", "W5urWPVdNCkZ", 'W6BiKEg1Kog1GCkk', "BCkyWOJcLKi", "W7RlOSMRWP/cJq", 'qmklWPKt', 'nmojW58', 'saRdHGxdUa', "WRpdRxi", "bXXTW4qP", "cSolvSkElq", "b8oKW6FdPfG", "W6FdJt/GTQ7GTBa", "W6ZcJcBcGCkn", "f3RdR1q", 'hXldINxcVG', "W59atSo6oa", "uSk3pfW", "W7ldGsTDWQG", "WRtcIaZcHLu", "d8oCrCkvkG", "aCoJWPjQBa", 'nrasWRjX', "j2bYWRJcRW", 'omoHWPWRmG', "ACk5WRpcRmov", "WRVdP2BdMG", "W4NdTt11WOG", 'iw4IWOiw', "fmkbFCoHzG", "WOFcTXvLW4m", 'e2RdPeG', "wSk2FWNcJG", "W457ot7cUW", 'iGJdNmkFmW', "W7y0y8o+zG", "Y53HTl3jNCop4BEZ", "vqVcG2hcOW", 'W4uqWOlcGCkd', "WRFcQ8o2WRiu", "i8kIwCoGBa", "WQpdPtaUW4m", 'c2ZdHvDZ', "WOCIWOlcO8kh", "WOpdPmofW6xcGG", "8y6TLo+5KhRcGmoyCa", 'q8kXW4O3', "W4Pfs8o/DW", "l8kzW6xdGh0", "s8kbW4yNW7m", "aNZdR11m", "tWdcIcJdMa", "W7rDq8o7dW", "o8kmW5xcILm", "zYddHwmH", "pXLtW6yJ", 'hCkzxmoSyG', "kCoOD8oNFq", "jSoMWPLSBa", "W78ZWR/cGCof", "pSozW6q", 'W4botCo9gq', "uCkwc8kuna", "q8oHWP/dGf8", "gWFcObddIq", "W6ZdGx85W4S", 'FbddISoy', 'ACkCWO1fWPe', 'ASktWOeAxa', "CmUS4BsW4BAyya", "W4TesmoJzG", 'ASo7WQVcOCoe', "wcBcTd7dMG", "W5iyWOS", "WRlcMSoCqmkk", 'W4SlWR4fWOa', "W5zZWRjbW58", "tCoFWRunca", "xmkAWOWluq", "WPdcN8oaqmkY", "rCo6WP7dIeS", "e8o8WPn9Fa", "srxdKCoFja", "W4iaWOhdMmkv", 'W4rOWQ9XW5S', "WOSjWOhcR8kD", 'W4b3BCompG', "W7NcI8kq4BsO4BE4", "WOhcMq5G", "oxySWPew", "W5WqWQLDW5u", "WPFdLG9JW7e", "cmoyumkupq", "uSk+eexdNq", "WOKcWRvyAW", "W4P+WQu", "W7XZESoYha", "Y6FHTiJHTPKCYRi", "W6fXASk3", "YPdcVog3NEg0GSUE", "W6mvtCoUhG", "WRtdOwnlW7a", "e8kAlhNdGG", 'jNvtWQVcUq', 'WR4/WRZdJa', "WRZcSGJcIh8", "W7BcOCoOW7Ox", 'uCkFW4fUWQO', 'WRJcMSoexmoe', "CKtcH8oteW", "fXRcVmkyoW", 'W5G0W7tcIYW', "AuxdMmkqja", "nSkba13dLW", "sSoUWRq", 'ebJcOb/dIq', "CCkbW6HcWOW", 'uCo/lfZdJW', "WPRcRSk7kSkb", "nu9zWOJcHq", "4PUYWRldHSoKsG", 'z8k4W5CIWOO', "zSk8WRTTmW", "W5hcJmou", "W6dkH8UUr8oK", "grJcOa", 'hueAWQmc', "W7jqr8o2", '4PMPD8kQWR1Z', "W5NcR8oFWPKY", 'W78jWO8vWRi', 'nKKeW5NdHG', 'W5tcTmoqW6pdJa', 'WOpdUdC1W54', 'CmoUWQe', "tCkAW4nZWR8", 'kSkHwSoWzW', "wrhcLwZdOq", "cvNdUwJdSa", "auLAWOBcLq", "WPqbW6/cKvW", "WRyXWRZcJCks", 'WPlcNCkZbmkL', "W6JcJvtcV8kr", "W6xcRCo7WRqb", "W65XFq", "ytBcNx4", "l8kzW6NdKwO", "lCoBWQxdKNS", "W6RdJdrrW6y", 'vmo9W53cLq', 'oqrkW6OK', "WPpcM8k3hSk0", "AeejW7m2nmoKzmkI", 'WOlcTmoajmkI', "rCk7W4bJW5G", "eGdcLItdUG", "W5BcGG0MW6m", 'p3CRW5Su', "WQpcPIhdUmoO", "b3iNWOCa", "W6myq8k4dW", "W7tdMszyWQ4", 'WR7cRatcIhG', "WO/cT8ou", "WPC5ps/cTq", "WOKXaqJcHq", "W7j1WPLvW64", "WRaqWQ9CzG", "8kYmLo+4Uq", "WR8yiGBcPW", 'WPjwW4ZcUgC', 'yCkQq8o5AW', "uCodWQ7cT8oB", "bCoDbmoqEG", 'W6PMFq', "4BEn4BAiY4dHTyliTG", "WOJcQ8kg", "WRldShu", "WRxcSSoDW4pdIq", 'WPtdLCk9hSkS', "W4yhWOi", "pCoHW6xcMgy", "WPJcSSo+yG", "awBdSfKg", "WOpcHrz/WR8", 'W73cT8o0FWy', "b3GzWQy4", 'zZ8GWR7cGq', 'W77dNSkWvmkl', "p8ohW60", "leDfWPRcGG", 'ACo9WQFcQSon', "W75YC8oQhG", 'iGddICoypW', "WRddQh5EWQm", "cWxcQrJdIq", "WOVcMCo4", 'nCk8W5iiDa', "WQpdUYW7W40", "W5XgW5JcNa", "WRldU3ldLmoG", "ESkKW7SsWRy", 'WQieW5m', 'BerwWOhcMa', 'drpdUxtcSq', "WPiAWPldRd4", "WO/cJ8oYcCkV", "W5lcJCoexMG", "bGFcSmompW", "fSoaWPLLwW", '4PQZl8k2EvK', "WP0pWRSCCq", "W64JW6hcINi", "u8oMWPNdG10", "ymoMW63dKwm", "De7cJCkhqG", "WPdcNCkGumkT", "WP3cMCkr4Bs24Bwz", 'W5lHTy3HTz7HTAVHT5e', "EIST", 'ALVcR8oHjq', "imocWOfCAW", "4PI0WQqXESkI", "W4TmzSowuW", 'W7fuvCo9hW', "gSoiWQzyDG", "fCo2W4hdLv0", "sLlcJCoXjW", "WRWxdCo9fq", "4BwRW4hHTl/HT7BHTzO", "W6GaW5NcI3m", "FXZdUSokhW", 'W6DvrW', "W5j5zCobdW", "nWfVW4Kl", "qa/dSW", "oCoRyCk5mG", 'umkwWR4ymW', 'WQ3dRsy', "WPNcHbS", "nvvlW7OW", "WQ7dG11xWRW", "W7hcGGdcV8kC", "WQNcTGtcHW", "EmoNWRFcPmog", "W7zuq8oRfG", 'W4qcW75tDW', "FNm5WPSF", "f8kTkx3dQG", "FHHAWQWN", "W6ZcHGBcQmkr", "l8kPqSoWBG", "W6LbWRr9W70", "WOBcN8ofvSkt", "W6xdJKxdVSoo", "vKVdVmociW", 'Bmk8xSoWCa', "jWTdWORcJG", "qCk9W5C2WPG", 'W5WrWOFdJCkt', "W6ZdIcy", "FWddL8oueG", "WOxcLCk3xCoX", 'WOTiWRLIW4O', "W7qKWQJdUCk9", 'kmkTrCo2', "WOtcMraMWRm", "W4P+z8owzW", "vqVcJwZcUa", "4BwFW5tHTR3HT7NHTly", "Fd3cJIPI", 'W7ZdUMddGCoV', "W5qzW6BcNgy", "AGZdLCovpG", "k8kbW4pcIfm", 'WO/cItxcHga', "A8oOWR1WnW", "sCoGWPu", "o8o8W6ddT1S", "oXpcKCk9hW", "xmk1WPG", 'W6HCaSk5wW', "W7WDW4FcOuO", "iuDzWOVcKW", "WQZdL0tdVCox", "C8k3muNdNa", "WPeUW6FcH2y", "WRrWWQtcLCkA", "WRZcJ8ogW4FdPG", "BGBdSSo1BG", "n1vs", 'ibXrW6HG', "dmkYW6BcQXi", "bSkPogRdTW", "uCoHWQhcHmoZ", 'YATd4BEB4BsXYOu', 'W5JcR8o5WQCz', "pa7dKmocdq", 'WRlcVXxcIMS', 'W44NW6ZcKxu', 'ySktfwhdVa', "wCkHnuZdJW", "WP8tW57cQw4", "W7xdId5xWR8", "WQzCr8oReG", 'h8oasmkuDW', "W7tcKCofsCkg", "Y7JHTjtlTHZHTk4", "wmkMW4S", "BevyWOldMq", 'iSkHvCo0zq', 'W7FdIdjTWO4', "wCkkWPSlgq", "pCkIlfhdTa", "iN4SWPuh", 'WQtcKSocuq', "4BEt4BEtY5RHTkhHT6m", "DSobWP7cGSoU", "W6mBWPe4WRe", "WRhcGmodrmkd", "mrHA", "FSk5WR0hgq", "fmkIoLRdNq", 'BmknWQehmW', "pSorW7ddLq", "BCkpWPWqca", "E8o5WQTH", "W4z0WRb0W4G", "AITHWOxcUa", "W5v0W7XzW5e", "kuno", "YO/HTz7HTytdS8Ma", "vCk+nKNdNq", "AhvsWP3cGa", "C8oXWQVcQ8on", 'WQ3HTRxHTzdHTjxHT4W', "WPmYW7dcKg4", "m1nyWPVcKW", "W6W+WRmmWQW", "k8ojW57cIG", 'W43lRSMXfCoA', "nrtdKCopfW", "iSkyv8orCW", 'W6tcUmo2WR4b', "WPtcNCkQba", "z0VcLSovaG", "W6tdJcTrWQW", "s8oxtCkwmG", 'igxdKYqN', "WPpcQSou", "l8kui1rC", 'WRpcHSoLs8kg', "ChpdLK5V", 'er7cO8kdjq', "W6TXA8o5pq", 'W6hcG8oaxWe', "tGdcHY/dOq", "iColFau", "zX3cHhiE", 'i8oOE8o0yG', 'gmoCsSkvfW', "4BEKYBFjI+g1T8Ma", "W4TsWQGjWO0", "yYtdVSotuW", "vWFcQW", "WQBcT8kDjmkf", 'AtRdJSoPDW', "u0xcQY3dVG", "wCk4W5STWPW", "WPyBW5O", "pSolW4pdNNu", "oSkql1S", "k8oypKXF", "WRq6WOXtCa", "fhVdVu5r", "8k21T++6HW", "B8oaWPRdP1W", "orTAWQ54", 'uKZdT8ociW', 'nSoQW5KL', "FmkvWPOUoq", "xSoMWQhcPmov", 'nHXtW6yU', "FmkZWPWfpq", "fs/cVr0b", "sSkRW4jEWRW", 'CmkUW5PDWRS', "ySkMW54", "W4xcHHxcR8kj", "WOSrWQC", 'kCo5W4RcI3q', "DYBcIwG", "W47cNCkIgmkV", "fmkpECoYtW", "4Bw5W6ZHTzBQNlNHTOC", "W5u5W6hcGwa", "WOO6zW", "WQ3cPmoPxCkh", "WPa4W67cLgG", 'WQ7cUW/cJue', "rSkjWPenca", "WONcLCkZf8kL", "rGxdMmo1yG", "WQVGTAJGT5VGTitdGW", 'WP4ZncNcOG', "WOxdMmk+h8kN", "b8owq8kE", "cSovrCkjiW", 'W45xvSoBAa', "pSk2g1RdPq", "WPD1hcVcVq", "W41oWQHsW40", "W73XIlED77UMbJZcGa", "W5u6pYBcVW", 'tCkDW4HJW74', 'mHhcPSkhja', 'ButcHG', "xWldR8ksEq", "WRWy4Bsc4BAxY6q", "WPpcMaPNW7W", "WRNcQXxcKce", "WQddOxxdNCkQ", 'pHbtWQmI', "WPJdPhhdOCoe", "qZZcQ8kaja", "pKddV2PB", 'i28SWOqa', "WOxcI8kHeCkN", "jwLTWPqb", 'f27dQeHo', "W4ayW7yyWPi", "WRBdVgtdH8oK", "pSkzpKfk", "gCo0W7nJWOK", "4PU2W4/cH0lcRa", "qXZcRmknjq", "W7VcOSoJDZ0", "W7ZcUComWRyC", "r8omW4jp", "gfNdTMNcPq", "bSkAWOqxeW", 'g8o/BZK', "t1/cS8keiG", 'dSkMrmoTzW', 'DCoWWQVdRf4', 'q8kBW4H1WR0', "iW1fWO7cGG", "W7BcRadcNwq", "dSokv8kqpq", 'jCogWQDavq', "ESoVWQTJoq", "W6tdHx9xWQO", "W6bzqmo+ra", "W7RdVgNdKmkQ", "DtySWRhcSa", "q8kfW4r1WR8", 'WPJdJ1zoWPO', 'EJ3dOCo5tG', "zmkuW5ZdK3y", "FNGIWPTC", "WO/cISkR", 'aEg1SUg2HEg2NUg0Kq', "mxFdIxve", "W6r4kCoKza", 'WOdcLmohsCkl', "gmkvc2pdTW", 'iCkNq8o7Fq', "tmohWOxdReW", "w8kAWPOBmq", "ab7cTmkyiG", "qmo/oK7dIa", "WO7cOCojW77dKG", "WRJcRrlcIgS", "ztm0WRdcVG", "W7KbW7JcRKW", "mmoSW6FdR04", "W5hcLCoufIy", "uXZcQL4k", "WQpdQYSPWOO", "ymk3j1ZcJG", 'W6nLW77cHmkE', 'W4uqWRNdRSkZ', "BCk2WQasdq", "WPlcNCkZe8k0", 'AaddIG', "deldI1zO", "WQKyWR3cMSkV", "WOFdPZe2W4y", "iN/dTfnF", "WQecWQNcISkl", "wSkOk2JdPa", "WP4BW57cUM4", 'zrZcVJtdLG', "4BAAW6JHTPxQN6FHTBe", "WRudW6ZcM3W", "dSoxbmkDnq", "W6z1DSoJ", "WPxdT8khWRO", 'W6BdVJ4WW4m', "W50hWPRdPSk1", "CCoXWQxcS8oe", "WR4KW77dVuy", "W6ZdP1tdMZOQWPruWPbhuCkrzq", '4Bsu4BACYyFHTjRlGG', 'qtBcNx5V', "WOCBW43cP3O", "W5GqWPC", "W6fus8oSdW", 'W5KtW4/cTwq', 'W5RcTmouW7JdKq', '4BsBYjpjGEg0HCUE', 'irZdO3xcSq', "pWvjW4Ke", "Et3dVCowtG", "tCkHk0FdGa", "A8o5WQb2lG", "WO0nWR1DCa", 'WRRcH8kDuCkm', "emoBWPT/xa", 'FCk8AKDA', "W7SnWRC", "W6a0W7SCWPG", "W67dK+g2Kog0QSM7", "lvro", "jhmOWPG", "ChpcHcO7", "WQBcNmki", "WPm0W6/cLs4", "tKRdH8oEza", "gSk4EwRdSq", "lmoCW4RcL0i", "WOGGiIi", "W4u4W4BcRvC", 'WQdcLSoiuCku', "WPqDW5RcLfW", "kCoGWRfEsq", "W7tdIdfqWOy", 'gCk5W5DSWPO', "WRVdJfVcRSkx", "hXRcTWG", "m8ojW4hcJfC", "x8kGW4yZWOO", "W5vwwSo8nW", 'oSovW7ZdLwO', 'CctcQaS', 'aUg3P+g3U+g1NUg1UW', 'cM7dSLG', 'W5WqW64', "haddKKFcLG", "W4yxWOVcGCkt", "pmonW43cMW", "kZldNupcKW", 'CGhcMSobbq', "WRtcN3fCWR8", "WOJcQ8ka", "ErBdNa", "WRNcPCosW6NdGW", "WQTvr8oSgG", "W7pdGMWcW7S", "WONdKrStW6y", "WOmtW4FcQq", 'W5n0WQ4WWP0', 'be4fWRig', "YBHw4BA64BEDYOS", "WOVcGCoLhCkp", "BqJdNa", "WP/cLqnYW7C", "mmoMWOuRFq", "aKOMWP4k", "W5j1w0ddVa", 'l8kvlW', 'WR3cMmo3bq', "gHpcOCobpW", "yGhcJmotbG", 'r8kMluhdGa', "W5ylW7StWPS", 'n3CKWOih', 'oI7dT37cIq', "w8osW4zorq", "CczlW7OS", "WO7dOZzgWR8", "W7pcJtnBWQW", "W6dcNSoNdmkc", "WRRXH4wpg2/dTa", 'W5e4W6FcLW', 'WOxcGmkMxCkL', "WO0oWR9wya", "WOxcMa1XWR8", "WOfdWR8rCG", 'W5nYWRfXW44', "WRlcQW/cNw0", "WPVcMGHGW6O", 'W7NdPwtcMSoK', "Emo5bSkSmbHFqCkpWRXGga", "ycZdImoCcG", "W6fUuSoila", "h8ousa", 'W5uHndlcOG', 'r8opW5L+WQ4', 'nCoQWOrO', "bJ7dQutcOG", 'lCozW4JcMvm', "WPxcI8k3", 'WPCgWRbvsa', "FJhcTYddHG", 'W47cKmkMhCkS', "WQqJWRu", "W7tcKSoxrmkn", "trRcTmkeja", "W6zMyCo2za", "WONcTmoDW6pdLG", "abBdT2K", "nmk8g8oWBW", "W5pcLCoyvcS", 'W49uWQKCWOa', "W7xcIXhcPq", "A8kGW5HUCq", "W7dcHmo0WPi8", 'WPtcPh1qWQu', "omofW4dcHW", "W7FdGSkRcmka", "nmk8rSoNzG", 'k1NdN+g2QUg1VW', "WP1oWQ1fFa", "WPqCnbJcRa", "kmkTrq", "W4LKyhNdPeT/ErLhW4XClSkU", "cHdcPbldIq", "WO/cTSoD", "WPldRtWYWOe", "ESkXW68ZCa", "WQWwnsZcHG", "WPmuWPZdNSkF", "lCkpcKZdRW", 'xdCYWPZcKa', "W6rRWRr/W4G", "sCkJW7XbWP8", 'cSouqq', 'CCojW5BcLLK', "ygP3W6m", "i0Ts", 'W4eAWPZcJmor', 'xZuKWRlcQG', "zmowW6NdJ2e", "A8oZWQ/dT2S", "BZZdKSoRva", "W5RcQZrlWRu", "gSkREwZdPq", "wZ4sWQRcKW", "i34+", 'hXZdVMlcNq', "pmkDk0fk", 'mmo7W5FcNf8', "W5OxWR4t", "WRtdR3zMWRy", 'WOVdUbylW6u', 'W6FcL8ohsSkl', "qXxcRhiQ", "W5u2WQBdLSku", "m8o1W6hdGMe", "WQxcPCougSkV", "DHGOWRdcTW", "pbPyW6XT", "auRcGmk1pa", "4BALYPtjHEg0L8I8", "W4ruq8o7ea", "W6DuWPneW7K", "pmkwcNVdPW", "fSkQW4ldIuW", "hmkHpf5z", 'WOBdRxDAWR4', 'uCk9W54MWPC', 'WPNcUCk7e8kU', "W5qaWPZdH8kg", "WOVdSg15WOy", "yeFcMSoefW", 'WQZcQWdcHwu', "v8k6luhdNq", 'W6ZcQY7cUmkW', "WOT4pItcUG", "WPuwWRffya", "WPalWRTF", "WRD1eHJcKW", "imkNuCo6", 'C8oGWOa', 'oCkMuSoWEW', 'WRNcTSouW6VdLG', "W61DwW", "WP0qWP7dHmkF", 'WP05WRFcHmkE', "W7f3WRLXW48", 'FSk1WP8xcq', "srBcGW", "W7xcHGZcVW", "W6vxtmoUhG", "8ykSQU+5Rq", "amkJAJ/cSW", "C8opWPzfbW", 'WOWWkt4', "4PM1o8o2vCoo", "fwRdVv9F", "BmoKWP7dPuO", "W7tdNtnDWR8", "FmovWQldJNW", "pSofW5tcNfC", "d8QfY4CTW5q", "WRJdVHxcKhW", "WQFcIrhcK2G", "mM4GW5yF", 'q8k5W54', "WPtcLCkZa8oG", "DSo1W64", "YztHT7tHTRufYB0", "b1zFWOdcGG", "gIvOW7aY", "W7dcPKhHT6tHTja", "WPVcQCou", "WPWtW4y", 'W6tdNZPvWR8', 'W61GCmoNyW', "Dd/cJgS8", "qmoYpGJdRq", "kmolqCkqlG", "oSoxWP5Utq", "W7pcLbxcV8kA", 'zuRcJ8oodq', "c8o1WO3dJvK", "WRC5WRZcICke", "WOlcKXPYW6i", "awDXWQBcOq", "ESk5WQRcOmoo", '4BAa4BAnYlxHTldHT4W', "jCobCmk7oW", 'WRu1WRhcImkA', "ArFcIG", "W6tcKuFdQ8kp", "YyBHTO/HTzP6Ylm", 'nbRdGfBcPa', "cmoBWQrrsq", "W5VdH1m0WQu", "CKtcH8ottG", "4lEp4lsV4lso4lw94lwU", 's8oqWRb4hW', "YyJjR+g2RsFHT5m", "W4aqWOddImk9", "WQu7WRnxzG", "amoHpg/dPq", "DKdcLSoj", "WRqBWP3cVmkG", 'vmo3WO3dGKW', "W5xdGCofqJu", "drRcQ8kcAW", 'WOBdK3b8WQq', "pmkDk1zB", "o8oIWRLbtq", 'W4xcKSou', "WOu0WRrHuq", 'W5HtWO5IW48', 'WOtcN8ovrmkx', "WQ7dKvFdPCo3", "W5fYWRj7", 'nKnpWPS', "4lE/4lEb4lwf4lsL4lAT", "mmoEW43dK1m", "Y5pHT5pjNmk14Bsm", "W5hcJXhcQSkk", "WQBdK8oErmkj", "kqNdUgNcPa", "AITHWQxcUa", "ALOqW7CL", "uSo9W5/cLWG", "W7KwWRemWOC", "cmoncCkEna", "AJRdVColDa", 'kfhcKmomdq', "FVgmLQCPWQNcTG", "fGhcRaxdHa", "BmkgWOaYjq", "4BsgwEg3Pog2Oog1OW", "W7lcHHRcR8k0", "W4ekWRujWPu", "YB/HT6pkUfdHT4u", "kSkYWRb2mW", "hSk1oghdQW", "WRBdPZe/W4q", "WR3cNSorqSkb", "aMZdQa", "W5yjWQSAWPG", "8kE+O++7IW", "WOygWR9eCq", "hCkrW4P5W5K", "WP4ncrdcUW", 'px4UWP4s', "g8k+pxRcRa", "ytXSW6ldQq", "W6LCr8k1fW", 'o8kElfbD', "qctdT8o3", 'WQFdPISfW58', "m2KOWPCh", "W5xdGCoqgZe", "pSkTv8o2Fq", "W77dUWDJWRO", "f0BdS0e", 'WRZcI8o+W57dPW', 'W7zzvSoShG', "W4FcGJRcOSk6", "c8oRWOpdLeW", "W73cRCo7WO4+", "WRdcPColW7ldGq", "kKDzWOhcKW", "dqVdPgNcVW", "saldQ8orEa", "WOCdW4ZcTq", 'WPe4mc3cSW', "WRldRsCU", "BSoXWQRcOCoS", 'WQFdPh8PW54', "vHBcQHZcKG", "WOTeW4ddHmke", "WO95WR1+W5i", "W6JdNYy", "WQCQWQlcM8kB", "aSoxt8orDW", "q8kbW4KGWQ0", 'iSoQWPLVuG', 'FLvRW7e5', "erRcPCkppW", "WQT5yCk4FW", "l3ZdIN4Q", "W5VcJKlHTiVHTO4", "W6O4W6ZcNIe", "Cmo4WR1S", 'FGddMmotja', "FdRdHmo7qG", "W5OgWQSy", "wSk3CLhdGq", "W5uJW7tcIhi", "y8QsYkaFjq", "WPldOxPCWQq", 'Y4xcLog2JEg2OCQp', "i0PEWO7cHq", 'WQeXWQtcMmkp', "ewRdSa", "8jESS++6OIFdTchdOa", "pmodW5dcM0q", "jWzwW4/cGG", "F8oSWPHMma", "Du/cKmoqqW", "W7e0Amo4DW", 'W48YW6hcM3u', 'hvxcSqJdJq', "W6pcJaBcPCkj", "m28SWQKg", 'W6JcJr/dQ8ou', "WQpcQb4OW54", "W4TKyh7dPeL3FZLqW6zOamk4", "W6dcJdNcNCki", "zu7cKSooaa", 'W5abW4pdGCkr', "FCk3dfNdOa", "W5/dKSkhcW", "DSoXWR0", "W77dK8k6l8oo", "B8kDW7LmWPC", "f1rB", 'iMOLW77cUG', "wcBcSqJdKq", "F8oQWODJCa", "WOhcLXzJW6a", "WRNcImo8gq", "jCksE8o5yW", "xmkgW5qEeG", "je9BWORcMa", "ESoZWRy", "wqpcGcNdTG", 'WRq8WRlcJCke', "qmksWPerca", 'EtZdV8obgW', 'WRObW77cS0O', "W5XvWQpdJCkB", "WRW9pWJcPa", "WONdPxGsWQC", 'jgHGWP8D', "xqlcG2ZdLG", "8kUoQE+4Sa", 'bHDrW6yA', "kCo2W5O5lW", "W4q7WP1IW4G", "ng7dPKHA", "aMZdQbeA", 'n3xdINDC', "y0BcNSojfW", "amkXcxn7", 'xKNcQCoxmW', "W4lcHmobvZW", 'WOJdShzt', "WQpdQZDXW5m", "nSkmALTa", "WPqcWQPfya", "W6SaW6VcV2i", 'EeJcImkbzW', 'W4VcISkZbmkO', "WOeqWQ1qyG", 'iSoaW7ZdKxW', "sIKPWRZcRq", "CCoNWPdcTCo1", "dSolcSoqCa", "WRxcMCkKa8kb", "bSoNAHhdGbZdMSorWPRcRW", "WQJcI8oIcmkn", "dmkhW5LQWRi", "WQldNSkYxq", "uCkGCKFdGa", 'ECo5WRT2CW', "8jY+HE+5JG", "laz7WOBcKq", "phiJWPnE", "iSoaW6xdJq", "W7dcRGJcH2C", "g8oZz8kxpq", 'W6e7W47dVmk5', 'o8oFFmkvcW', "iqbqW7CL", "W6X+WQHXW5a", 'vmoRWRVdSxS', "neWeWOmE", "W7NcL1tcPCkw", "vmk1W4yMWP4", "ycS4", "hbJdPhlcTq", "bSoLWObTWPe", "WOlcSmkrW6tdJq", "fbBcQr7dMq", 'dSolv8oCnq', "W5j+WRj0W7e", "WPJcM8kLnmkQ", "YPxHTztHT6aQY5y", "hmk9W4pdLv0", "jSkmpKvC", "pSoDBCkwga", "WPCqWR9wya", "WR/cLSoj", "q8k8W5CT", "W67dGd5tWQ4", 'W4SmWQGCWPm', "WQFdRZP6W6K", "W4ddP3rtWR8", 'pSkbW4VcM1u', "rUg1OEg2N+g0P+g3LW", 'qCkGCKBdJW', "4BsNW4/iTmQiW74", "rpgbLRqvbCo4", "rmoLWORcJmoY", "WQ3cNmofv8oj", 'W6bSCmk3za', "WQFdUM7dMmoU", "uSkPWP0Lpq", "fSknxmo9zW", 'W6KPWQe6WQa', 'cog3T+g2OUg0PUg3Mq', "W6Dvu8o6iq", "W4OgWQ5zAG", "Dmo5WQe", 'WRdcO8oQA8ku', "CdZcIYO", "WO8cW4/cR2q", "ErxcJIpdOq", "WP4uWPZdNSkF", "tmkMF23dIa", 'W5y9jsFcUG', 'WQ3dOJ0/W6i', 'WPtdOwnl', "WRrWW6pcQmok", "eSoqW5SAeG", 'qmk3j1W', 'oSoFW5xcN1e', "bbJcOCkEAW", "WOfdWOPuFq", 'DdtcGcOm', "8yEnMo+4Lb/dUSknW6y", "WQpcQb0wW6S", "WPpcHfyMW4q", 'A8kNW50', 'lCk6qSoSja', "WRlcSG7cMYe", "gSkSWPlHTy7HT6u", 'x8k3jG', "W4vyWO5IW7m", 'rbhcLJ7dUG', 'W6/cJqdcKCkw', "fgRdSLHM", "vmk7W4qMWOS", "CKtcH8ot", 'fXRcQvhdKq', "k8ohWR1Lxa", 'nwG+WPCu', "WQ/cHGtcO8kw", "4BwS4BAzYy7HT7xHTz0", "mZlcIttdUa", "WPifW4ZcVgW", "WR0WW5BcH34", "jCkZW7D2oW", "WPpdLGmMW6y", 'BSoPWRLUnW', "CmoVW7HXnG", "WO4OWRzxyW", "W4tdJLSWWQtdPH/cKmoEWOWiWRa", 'h8ontCkFpq', "WRVdG+g1Log3HmMM", "YiJHT5plSmo34BwW", "W4T7ot7cUW", "W75maSo2fa", "W6TWjmk2ma", 'WQldPvf3WRy', 'W7hcOCo2WRiB', "WQVcKColW6BdKa", "W5GKW7pcMwy", "ihO5WOiw", 'WRCje8kRsCkVw8kucCksWRunWQpcHq', "mSU2YRiOva", 'WOmFW5dcSW', 'gSkPkW', 'W7BcPmoZWRyg', "xudcOthdSa", "WRxdTNC", 'WPK4na', "uCkYW4GRWRe", "WPD3WORdSIS", "WRu0eHZcHq", "8lEFH++7KW", "W6RdMdjvWQa", 'bHZcSa', "W6n9AmoYFG", "k8klovri", 'WOLv4BEo4BAJYA8', "W7pcPSoqAsi", "W6FdSu7cJgi", "E8k4W4i2WQ4", "h8orqCkF", "sbZcLIK", "CSozW5tcKG", "W5u2W67cKwi", 'WPpdHqy', "W7eYWQxcN8kt", 'WOVdPKHnWPC', "W5VcImocAZ0", "WPtdGHOIW5K", "W6DcWO5dW44", 'bh41WOjt', "zSoOpmkFiW", "WP/dG1VdVCoS", "W5GLWRxdMfC", "zs5JWP4h", "W4OaWRfCkG", "W4erWROrWP0", "ESk8WQX7lG", "W71GDmoLFW", 'xSk3WP8WWO0', "pmkxobuo", "WQldUM0", "W6T/W7/cJCkp", "4lEp4lsgW7yIza", "W4uSWQOeWRu", "W6pdQmo/WRet", "W4zYWQP1WPW", "oSkDmKe", "j8kwiruc", 'phqQWPK', "WQNcSuhcOge", "sSoFWPjVeG", 'W6FcQCoUWQmq', 'jSoHW7ZdO34', "uJdcTWpdKG", "WRldO1HhWQu", 'W4SCWQ9qWPS', "WOG0jt7cSW", 'W5bkw8ouoa', "wmkye17dGG", "W5RcKmouW7ldLG", 'FHbpW6SV', 'W7dcSG7cJMm', "WOZdQsuIW4K", "WRS9iYpcPq", "W5WhWOxcJa", "pSobW4m", 'xGRcQsBdOa', "uCkHleNdIq", "FYlcHX7dSG", "4PIUW6tcM8opW5a", "sXhdQapdIa", 'W5xcGmocxMu', "WRNdQxJdLmoS", "mLPzW7yU", "WOmEW5RcSW", "WQhcGSoJaG", 'WOZcQxrzW70', 'j0PvWO7cMa', "FdWVWRFcLa", "W4SXjIxcUq", 'WPe7oMFcTW', "WOpcISk3eCk0", "WRNcNCkwpCkA", "EaRcLmoCpW", "omkGu8o7", 'gCkJpwZdSq', "CCkIn0FdMG", "WPFcKqCMW5e", "WR/cJmodbSkD", "rmkZk1ZdIW", "WR87k8oJDq", 'iHPnWQnH', "qmk9Bb7cNG", "u8k+oGJdGW", "sSkBW5L3WQ0", "bSoEW47dRwC", 'q8oWWORdH14', 'orSsW68V', "gSoms8kfpW", "q8k7WOf1W4K", "W5v0W68MWOW", "WOpcL8k/gCkJ", 'AITYW7pcRW', "rCojtmoEpa", '8jATJU+7OW', "W50wWRWtWPu", 'amkKpgC', "WQVcHmoOcmka", "cbRcVq", "YlhHTAtkSv3HT7e", "WPaeWRZcMmkP", "WRqJWQpcJCkn", "WO3dV2ddOmoZ", "WPm6W6xdL3e", "W5RjNEg2VUg2KCkc", "r8opW4bYWRi", "WQJdRs1U", 'WPtcL8oHrSoW', 'zJBcI24c', 'BsxdHCoRuW', "4BEYYBNlU+g0GCIs", "WPpcJHy", "W43cNCk0fSkL", "W4JcLCobssO", "W6VcUZT3W5G", "WRpcPYTsW7e", 'W5OAWQmj', 'WO3cSSklhmkI', "WOxcOmk7pmkg", 'WQu9WRW', "W6FcMsdcVCks", "W6S0CmoLEq", "W43dJCoKqSoU", '4PMsgaJdNqK', 'B8o9WQX2oW', 'cdZcQGW', 'W7lcRSoJDwu', 'W6pdNITrWQ4', "D8oOWQXYlq", 'W6H3Fmo5xq', 'W4OoWRSEzG', "4BwK4BwFYQ7HT6JHTyW", "W6NcLWdcU8kk", "fXj7W6Ke", "W4L3W7tcKgq", "WPPoW6TeW40MW5xdG8oBW7JcMLK", "shVdUvbo", "WOdcLCoNW6NdLa", 'BSoPWRD2oW', 'W5lcVcijW6BdQCoQWP8wWRNcQNS', "b8k5nhS", "WOpdPwTlWRK", 'h8kuqCkxpa', "WOtcN8kbo8k6", "qpcYLBBcGsxdUa", 'i34JWPi+', 'W7xdNNjhWQi', "srFcIG", "8jIDIo+7IW", "sadcNJJdPq", "yaRdNSoF", "omkTtSoH", "q8kYWOpdJ1q", "iCo6WOrJ", "W5tcHmocwa", "AJ8NWRBcUG", "W4tcICouvq", "nHbCW7DT", "w8k+m03dJq", "qYhcT0uI", "e8orW4ZdRfu", 'WRyjWRT5BG', "W6xcVttcJmoPWQJdTaddGcO", 'cX7cQSkfka', 'CKJcKmoj', 'YAdHT7/HT5DqYzK', "tMZcKCoKdq", "cCk4xSo6Fq", "jSkLkKJdQq", "j8kvk1jk", "uCkz4Bse4BE+Y4u", "WQtdPcO/W4q", "YRVdSUg1MUg0QmIU", "hSkxjXlcJG", 'AWRcMCospa', "BcFcH2SH", 'WPS74BE84BsFYkm', "dmkup1ap", "eZPYW44b", "h1JcPH7dKG", 'yfpcLSod', "EmoYWQlcOmoc", "WRFcKSoauCkn", "eCoStmkhia", "8jw+TU+6HCkFpmoCmq", "q8kcW4G", "xmooWORcSmol", "yWZcHSoifG", "e8kJnw3cRG", "BZNdRSoqrq", "W6nluCo5ha", "lG/cJCk9ba", "W48yWR5DWRC", "W7W2WQlcICkp", 'WQNdUtO7W6a', "WOWWkt7cPG", 'smo2W4ZcGbG', "W4j1qmoRlq", '4lwRx+c1QUc2OEc0Sa', "4BETWQtHTjtQNi/HT5q", "EaddGCoe", "tmotWPVdP38", "WQBcNmocbCof", 'zWZcI8ocgW', "b0TTWQxcSW", "WRZcMbbVW4m", "mrLwW7C5", "wSkAWPuCca", "oh4SWOiw", "WRBcQ8owW6xcGG", "ctLtW5Kz", 'WOhkGUg3K+g0I8kC', "W5H3WRKWW4G", 'F8obEWi', 'WPxcHYreW7O', "WPCGjt/cTa", 'WPqKWOBcNmkK', 'kCofW4pcI1C', 'W6pcPtZcJmko', "W7tdLmoHwmki", "8jAZUUkdOFc3GOmM4Bwh4BE/4Bs2", "i0fsW4/cTq", "B8oXWQxcPSov", 'W5q0WQ3cI3u', "vZ3cJYNdHW", "Aog0VUg0Uog3JUg3Sq", "sexcGcpdOa", "W50AWRuzWRK", 'WOpcKCk4fCkO', "j23dSf1i", "W7fzvSo9cq", "WQldNXyVW4C", "WOX1ncZcSa", "4BwrW7FHT6ZHTiZHTj8", 'F8oEWOddU2e', "W4RcPbe1W7O", 'WOlcMveWWQi', "B8o7WPpcOCoq", "rmoRW4ZIGQRIGlm", 'bSo/WO3dK1m', 'WOCeW5ddSgy', "4BEw4BEEY77HT7hkKa", "r8knWO0", '4PQGW6XZtmoX', 'WPldOwGsW6G', "AWldLCoriW", 'WQzAq8o2fq', 'WQNdHY9t', "W7pcJtLBWR4", 'WPtcISkaa8kq', "kXhcRr7dRW", "yY7dH8oQCW", "jCo0W4NcShC", 'WRhdK8oexmku', "WRhcUJjnW58", "W7tcP8o2WRGh", '4BslaEg3SoQEL+g1PW', 'aN3dU1nh', "bmkqWPi0WPy", "pSkNrmk1ka", "W5xcKSocwIi", "zu7cICoceq", "uCo/BeZcGW", "W4LqWROCyq", "WOhcLmk7eCkZ", "W6VdGtzxW6y", "gmonvSkyna", "WOZcL8k1hW", "AexdN8kgqW", "nKjEWOlcPa", 'BdGXWQFcSa', "WOW8pIq", 'avdcP8kdjG', "WRxdVd4OWOO", "WQldUIhdM8oM", 'W5ytWOJdICkt', "WRdcGmoeqmkb", "w8k8m0hdGa", "mCojW5tdJa", "eCkQp2ZdOa", "WPrqW7qyWPO", 'E8kVW70bnq', "gw0VWQy1", "a34HWPmq", "BSkwWOyAkW", "WQu6zSo2FG", "w8oxWRXRoa", 'FHJdPG', 'CCoLWQBdLe8', "l8ogWRRcGvK", "W73cSG7cJMm", "pSkTfSo0Fq", 'ivBdJM9z', "hrhdPqldLa", "C1pcKW", "W5bdxCoKyG", 'wH7cQ00T', 'Y6VHT5FiSYNHTOy', "amkToMhdRG", 'BCkrW6SLWR0', 'eHFcKZ/dOq', "mSo9W4VcTN0", 'iSkSfSk0kq', "smkYWOddJL8", "xmkAWOWl", "W5y3mctcUa", "hvJcPXddKW", 'W6nErmo9ga', "W4emWRNdVmkZ", "FCkDW4uUWQW", "nmkUqmotsW", 'zCkEWRCPlW', "oKXMWQZcLq", 'AJZdNSoNCa', 'W7lWQOAVASo8na', 'W7RcL8odFZC', "WOOeWRfDyq", "BmoOWQfUoW", "w8kXWPiSWP8", "W6JcJrFcP8km", "z8k4fetdNW", 'jxuPWPmb', "uK/dSCociW", 'dmk4EwFdRa', "4BE6vUg2SoQFREg0JW", "W7nlrW", "q8kWWQ0CjG", "WRJcHc1kW4u", "sryoWOFcNa", 'WRpcHGPPW6y', "4BA5Y5JiMEg3V8Qb", "gSobW4vZWRm", 'WRiXWQtcICkn', "uLpcLSogdq", 'WOhcHaTYW7C', "W5RcRCoPWQqu", "WONdQNa", "gSk/oGFdJq", "W5bSA8oXFG", "WQ7dIMBdS8ob", "wrBcLs3dSG", "W43dICoIqmoU", 'WQC0WPFcPSkh', "iHOoWRy", "WO7dIhXEWPe", 'hXRcQrxcNq', "8l6FIo+4IW", "qCkHoG", 'WP3cGSoetYa', 'r8k3muZdOW', "BmoHWQVcSCoe", "WOBcMc5SW5u", "crBcTSknhW", 'tSkhn17dLa', "i8oGW44", "W5q6W6hcN2q", "g2KQWQmu", "W4ylWQ8nWOC", "r8kDWObGWRe", "C8owWPr0mG", 'WQu1WQJcMmok', "WRtdGfblWP0", "WP3cJSoFvYW", "WRhcI8oebCkq", "aa3cOCknpW", "qmkRl00", "W43cGmoY4Bw94BEC", "rSoxrCkdlW", "cbdcQcJdUa", "W4H1WRCWWPe", "xCk/pK/dIW", "xXapWPG", "WPtcJmk3aSkP", "W6rxumo2cW", "uCoZWPJdHeO", "jCoQWO9/", 'xCknWPG', "y1lcJmogba", "xmkXW4S", 'EblcTqtdPq', 'WQZcI8oHW5/dRW', "CSkKW5OSWO0", "tZddKSoJiW", "EeJdLSoEpa", "WO/dI8oKqa", "W4P3W6xcNMC", "WQSSWQTHza", "4Bwf4BE4Y5xHTk3kSW", 'WRpcPCoiW4JdGq', 'W7T5WQ1gW64', "WRxcGCoesSkl", "abLEW7aT", "WRRcLCoOkSk2", 'W6xdMcTaWQq', "4lE74lw54lELcoc0Ta", "c8kHW5NcLXy", "W4b2WRK", "W5SnWRC", "ySk4x8o7yG", "mh3dTuHo", "W43dICoJq8oX", "zIpcIwm7", '8lEFH++7KZdcLSoUW7K', 'CmoYWRrRma', "A8o9WQPLoW", "wa/dPmoBwW", "W79hySovxq", "WRNcGSkKjmkd", "lKmAW5RdHa", 'hHZdSwxcPa', "WORcTWVcMh8", "h8oCxmkf", "p8oCxmkfEG", "FCklpexdJq", "rCkNmfZdIW", 'bLlcSmkjmW', "jCkmphn5", "W7tcNCoiWO0T", 'AaddISot', "vJBcRqSg", "WOZcPCoBW6pdKa", "W5jRWRb5W4G", "qCkyWPWl", "omkHwCo7", "WRpcVSo8F8ki", "W7e8WRxcJCkC", 'W7JcQSoZWRSq', "qCk5o0ZdVq", "WPrF4BE74BwYYAS", "W7BcIXRcMSkA", 'jHrvW6OY', "dgRdPq", 'WPJdMXzJW6O', "dvldSCoCFq", 'gSkPDdJcSG', "4BA9l+g2M+g3V+g0Gq", "cWVcSmkCoa", "gCocW7ZdIfG", "W404W6VcLG", "WR3cNCoBbCoj", "gweJWQ8k", "W4L6W6/cLM0", "WQxdUJO7W54", 'WPJdSgTnWR8', "oSkzobHy", "xSk4W5DSWPW", "db3cOb8", "W4lcPbxcMCkE", 'WR7dRNtdMCkN', "4Bwb4BA0YjFHTRNkKW", 'fa3dOhtcVW', "tuRdPayl", "WQRdGZztWQm", "wSk+nKBdIW", "WQxcMCoPaq", "ESkyW5HeWRO", "W6NdJdjrW6S", "tb7dOMpcSq", 'pxVdVwvQ', "WQ3cHcpcI3y", "iCk+nq", "W4SxWPFdPSkM", "vZxcNWFdPW", "AJO1W77dRG", "WPqEW57cS2u", 'W7ldNZm', "W6KyB8o5ea", "dXdcOW", "WP8cW4VcRxG", "r8opW6X1WQO", "W6vxt8oOgG", 'zqJdMmoxnq', "WP/cT8ocW6VdHq", "W6TDd8o3fq", "saRdLxRcPq", 'cadcTHK', "amkJEuddRG", 'W7ZcP3aUW48', "vGdcTWxdLG", 'rrhcMCotiG', "W5WhWPC", "sCkkW58QW68", "fYDpW7u2", 'y8kXW4O3W5K', "g8k+ia", "W5bUWRnKW5K", 'cr/dTMpcSW', 'CcdcLMSO', 'W51sW6nmW4m', 'W4nBs8odvq', 'WRGMpwFcTq', "FLxdN8ojda", "FrbzW6uL", 'abpcSZFdVW', 'dfxcOX7dIa', 'zdW4', "WOiyW5VcUhK", "WPRdUeJdPmoi", "W79mqmo5fq", 'nxzUWRBcTW', '4BwCWQ/HT7JQNlVHTjS', "WQ7cRG3cGhG", "D8oXWR1SkG", "W4KBW77HTlZHTjK", "WROsW6VcMKW", 'qmo7WOddHfy', "W7SyW4/cReq", "ymk3W5LJAW", "lahdTCkTsq", 'cLddIctdOq', "W6KEWRCCWOW", "WP0wWOhdGCoF", "W4djOEg3NEg1Q8oG", "WP0JW6JcNse", "W4WvW43cI24", "hrNcPXddKW", "WO4RWR4fWOa", "WRRcMSoxtCkq", "W5ynWPRcGCkv", 'zmozW63cJMW', 'w8k2W4e', "lmoDW6tdHge", "qrxdSmoHhW", 'qCoFWQddU1q', "iSkxlvO", "l8k+qSoNtG", "DCo/WRbJdG", 'rulcLcNcTq', "d8oCsG", "W6pcUSoZWRyB", "WQlcVmofC8k1", "WQm/WQldJmol", "4BAinog0I+QEP+g0La", "WRldVs0/WOC", "YORHTyJkJYRHTyO", 'W6JdGtnrWQG', '8yQ9Lo+4JSkvWQ3cJmoO', "fHddQelcIW", "kmonW5lcM0q", "oCkIWOnJEG", "CSkdW4HMWQ0", "W5jKWRBdIa", 'WR/cImoLgCkl', "uCkGF0hdNq", 'dmorumoClG', "WRiXWQdcMmkd", "W6X2WOXQW5C", "Y7VdRog1Nog0ICId", "kmoEW4/cIL8", "C0ZcMSovea", "WR/dVhxdHCo0", "WOtdQ3xdHCo0", "mmkFWPddJG", "wIST", 'WPpcQCoqW63dHW', "tSo3WO3dLv0", "t2dcKCogfG", "uSkrf1ldIG", "CbPrW68P", "fsnLW6O1", "WP3cQ8kCW6JdJG", "WQa5bbVcGG", "W6OnWO4fWRS", "jfvzW6W1", 'WRO1WQK', "WP11edJcOG", "w/c8PiKRnCkH", "WQ7cSHPKW6O", "EHxcTdxdHW", "W6T9z8o2Fa", "gSkPkZO", "uCoYk1hdNG", "W45/WRvXW58", "hbdcTHi", "4BAWD+g2J+QFIog0Hq", 'W40lW7ziW4y', "B8oPWQTQ", "ASkRWROQlG", 'WPymWQWrja', "vZaoWOtcRq", "d8oCv8ks", "i0ldVK99", "WPqwWQ1z", "k3xdIhPa", "qX7dVSopzq", "p3WIW5Tl", "WPqGWRJcG8kE", "fNRdS0Ho", 'ACo8WQhcQW', "WQtdUg3dNmoZ", "xW/dSSol", "ACoXWRZcSCkm", "bGZcT8knla", "W7f8yCo5", "W4OgWPRdG8kE", "W7pdJHRcQSku", "WQZcGmoH", "yWZcLSojtG", 'u8kXW4eG', "j8k7W6VcOmop", 'W4jPWRLXW4G', "WRNcOSoP", "WPVdIu/dSG", "jKneWOW", "W4ZdMu1YW7C", "W7ewW47cVW", 'xWtcKINdSG', "iXbrW6Cn", 'lmkzjfTk', "WQJdRta0W4y", 'w8kBW49MWRa', "W4r9smojfq", "WONcOCoFW67dRW", "BSoKWQJcRmov", 'WPStW57cQ24', "WOu1WQJcMmok", "W7/cRCo7WQmq", "WRhcVSkXb8k4", "u1BdKhW", "W7DPWQvCW78", "W6G4W4/cK0m", "4Bwj4BsMYQJHT7FjQG", "b1W6WO8N", "hHpcObldIq", "pSorW7ddLx8", "h8oBW4FdIK0", "W6X5zCoWDq", 'l8oCW7ldIMK', "A8oEWOBdS0G", 'WOpdRxNdGCkN', "WPm7W6NcJwu", "BSkujuip", 'mCo0WQXVmG', "x0RdPCorEG", "dCkIdhhdHq", 'hmkrzmo3Fa', 'WR81W73dNCoB', "tCkaW4e", "W7hlIEg3N+g3T8ok", 'bMldUq', 'xmk5WPe5oG', "w8kpWPGwca", "W616zCoUCq", "oaflW7mZ", "WQdcSG1GW5S", 'ogdcGsCI', "CCo7WQpcQSkb", "l8kPrSoHya", 'mWDAW6i0', "4BsZYzViQ+g1HmM5", 'WPRcMG1PW7W', "WRRcVW3cIhq", "omoBW7RcGs4", "WRpcUXpdHhu", 'pmk8DCofwG', "WQhcGSoJaSod", "W5lcHHJcRSkA", "tCknW4rRWRS", "WRJcN8oO", "dSoAW7hcNfa", "8l6VPo+4RCk4uCoibW", "8lQ8Lo+6Lq", "zCoGWRtcT8oo", "WPSMWQlcQmky", "k8oyW6hdGhW", "Y6pHTBJHT4hdJmUs", "xmkxWPfFcq", "u1pcKW", "vSoZWPJdLv0", "W6hdHdnrWQu", 'm8oCW4VdLfW', "W4L3W6BcL3q", "8yQ9Lo+4JG", "WPyyW5hcUhK", "W63cJbpcPmou", 'W6S0Amo2za', "DSoXWRLLoW", "ACkWWQu+dW", 'ECkSW6yjWPG', "CSkEW4eiWQS", 'WQRlH8I1hSob', 'W7pdHtPA', "orHEW6qL", "Bmo5WRzMeW", 'W43dI8k2xCkJ', "4BA9W4hHTR7QNiVHTye", "4BE+YyViQog2JCII", "WPz1fIxcUG", "WPpcSSo7DCkS", "cLVdLevK", "WRVcN8oCqmkh", "dCkcCComqG", "eWRcT8ke", "WOFdPJiiW7S", "vHNcQHBdKG", 'ebdcPaxdMa', "d3VdQeXy", 'WRxcN8ozrmkx', "munaWOVcLq", 'uSo9WRXxjG', "uGtcNY3dVG", "tHNdUCoECq", 'uSo0W5nJWO0', "cbZdO2u", "BXtdV8oYoa", "uSo3WPtdLq", "wuJcH2hdTW", "AFcGPlRdJgfm", 'WRpcGCorsmoj', "rqVdS8oEFq", "zZBcHgK7", 'rfNcVmkp', "W7NcLWtcUCkw", "YRnf4BEJ4BwmYju", "4BwR4BwzY7RHTilHT5C", 'WO0fWQTDka', "xGhdNSoDxW", "W5VcHmoi", "wSkVnMtcRa", 'FaNdMmodpq', "WQNcMaBcRMi", 'mtxcGCkuoa', "Y47HTPtkNsVHTjO", "fNi/WPmK", "WPNcMG5JW7e", 'WRZcMmoRgCkl', "WR0ZnY/cTq", "Fse4WPRcJG", "W5ZGTB3GT43GT4NcQa", "W4eqWO/dJ8ke", "W5zvWQ/dNSke", "WOFcLmk3xCkT", "W5tcSYSpW6JdQCk7WPCSWRhcQMmj", "4Bsh4BwLYkBHTQJlJa", 'hmkjbgDe', "qCknWQ0Pba", 'l8ksi0Do', "cmo/WONcJLy", "d8oHW5dcPe8", "brtdSwhcTq", "4PQeo2FcSWe", "WOOhW74qjq", "WORcPCoyW6tdLG", "WPxdT34", 'WR3cJmoWgCkl', "EmoMW6tcRmos", "WQ3dI0H4WOi", "nGSgW53dHa", "WQ3dP2xdNmoM", "WQtcGmoLcSkl", "W7JcHmoqtYa", "WOddHXaoW68", 'wtVdICo9BG', "fIZdUhdcQG", "WQzbtCoTcq", "lCovyCkRcq", "cbtcSqxdMa", "kYxcL8kElW", 'W69zqCk4da', "z0BcMSkhia", "sCkkW5q", "WOTqW6Gb", "uCkQkWJdMG", "W4lcHmoqwde", "WOnwW5NcSN4", "xmo6WRLdhq", "uqxdP8oDFW", "nKRcLSovpG", 'WOxcPgHlWQK', "aweKWPWc", 'mmoEW58', "pCk9fx/dJq", "WO3cOSo7W7ddHa", "wSkPkwhdRa", "tbdcLsq", "CCkVW5CRpW", "W7NcRCoOW6u", "zCoGW6tcQ8oo", 'E8o9WRBcOmow', 'W5j3W43cMwO', '4PIWq8o0DhC', "4BAQ4BsBYypHTiJiOa", 'W6hdIZPxWR8', "W6Lksq", "WP5eW5/cN8oh", "Yl/dGEg2Tog0U8Uf", "qg7cSmoZjG", "WOlcNGDO", "DKdcI8otbG", "g8oSfgJdQa", "mrLwW6iZ", "W6Prv8o8", 'CcVcKsCQ', "W5CMWORdQmk/", 'W4CsWROAWPe', "uYldGCoCrq", "W4OzWOS", "bbbhW7DG", 'W7NcRCoO', 'k8oAW6ZcHNW', 'qmklWOapdW', "z8kfWRNcKZ8", 'WQtcPq5GW7G', "r8kIm0hdMG", "iIVcJCkJbq", "W6JdRs8YW4u", "abLAW6iZ", 'zbhdJCoaiW', "aqhcPXddKW", "y8kaAUg0Uog0SW", 'pwmUWQW5', "4BwG4BsVY7BHTlJHTkW", "WRm8W5xcTuy", "W5JcQNnlWR0", "WQNcUXNcNq", "q8kXW4O3WOK", 'WPFcVXVcKw8', 'WOWxWQPbDG', 'brFdTsVcTG', "rCkAW5qExa", "W5CNncFcVW", "ESk8WQ9Jma", "WR/cTCoLW53dOq", "waRcKsldUq", 'WOutW57cVN8', "WOmtW4FcQxS", "mmoaW7xcQ2q", "amoCxq", "WRJcLCoLjmkw", "t8owWOLwcq", "WP0NW6NcLMO", "4BAZdEg3TEg2Q+g3Sa", "WP3cTSoeW6q", "W47dP3PnWQq", "taBdR8kFEW", "jvVdKML5", 'uSo5W582WPu', "WP3cKCoEuca", "WQtdVGJcHg0", 'WQNdVGFcHNK', "nG/cICkJmG", "Ae3cLSojbG", "bKRdIsNdUW", "W4xdH0XUW6y", "W7xcHGZcV8kj", "rmkKW54QWO0", 'wmoKWQZcQSov', "qSkNW5C", "pSoHWPzNDG", "WPmWka", 'WPdjUog2VUg0Ogu', "tXhcHZ7dPG", "W4muWPRdMmkv", "vCo3WOldHxu", "q8kiW4GNWP0", 'WROdWQhcLCkR', "WQ3dP2ZdL8oU"];
    _0x4917 = function () {
      return _0x3cd6f7;
    };
    return _0x4917();
  }
  var imgmsg3 = '';
  if (config.LANG === "URDU") {
    imgmsg3 = "*Misaal ke tour par: .banner2 Dark+Evil*";
  } else {
    imgmsg3 = "*Ex: .banner2 Dark+Evil*";
  }
  var imgmsg4 = '';
  function _0x420ef7(_0x4aed1e, _0x147fbe, _0x9cd310, _0x4cd42f, _0x1c7c0a) {
    return _0x1cca(_0x1c7c0a + 0x1e2, _0x4aed1e);
  }
  if (config.LANG === 'URDU') {
    imgmsg4 = "*Misaal ke tour par: .banner3 Dark+Evil*";
  } else {
    imgmsg4 = "*Ex: .banner3 Dark+Evil*";
  }
  var imgmsg5 = '';
  if (config.LANG === 'URDU') {
    imgmsg5 = "*Misaal ke tour par: .banner3 Dark+Evil*";
  } else {
    imgmsg5 = "*Ex: .banner3 Dark+Evil*";
  }
  function _0xb7e46f(_0x1299e9, _0x1534e2, _0xf6dd13, _0x33f178, _0x491f64) {
    return _0x1cca(_0x1299e9 + 0x2bb, _0xf6dd13);
  }
  var imgmsg6 = '';
  if (config.LANG === "URDU") {
    imgmsg6 = "*Misaal ke tour par: .banner3 Dark+Evil*";
  } else {
    imgmsg6 = "*Ex: .banner3 Dark+Evil*";
  }
  var errt = '';
  if (config.LANG === "URDU") {
    errt = "*Ehh, sorry main ye logo nahi bana sakta :(*";
  } else {
    errt = "*I cant create this logo :(*";
  }
  var desc2 = '';
  if (config.LANG === "URDU") {
    desc2 = "Iss command say ap channel ka banner bana sakty hain..";
  } else {
    desc2 = "It creates channel banners..";
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x2e839b = {
      'pattern': "logo",
      'react': "🗃️",
      'desc': "Logo Genarate.",
      'category': 'logo',
      'use': ".logo DARK-EVIL",
      'filename': __filename
    };
    cmd(_0x2e839b, async (_0x101e99, _0x569e23, _0x2cf4c3, {
      from: _0x30d42a,
      l: _0x55b9a1,
      prefix: _0x11290b,
      quoted: _0x2b0af9,
      body: _0x342676,
      isCmd: _0x480666,
      command: _0x3c90f6,
      args: _0x38d1e8,
      q: _0x5293ba,
      isGroup: _0x162108,
      sender: _0x321375,
      senderNumber: _0x7fcc58,
      botNumber2: _0x23a992,
      botNumber: _0x564093,
      pushname: _0x17e716,
      isMe: _0x4a7099,
      isOwner: _0x5cfcea,
      groupMetadata: _0x3ce824,
      groupName: _0x49c400,
      participants: _0x4a634a,
      groupAdmins: _0x2b69da,
      isBotAdmins: _0x32f522,
      isAdmins: _0x4ab121,
      reply: _0x57c33b
    }) => {
      try {
        if (!_0x5293ba) {
          return await _0x57c33b(imgmsg);
        }
        const _0x12b223 = [];
        _0x12b223.push({
          'header': "Select logo type want",
          'title': "Black pink",
          'description': "Black pink logo design",
          'id': _0x11290b + "blackpink " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Deadpool",
          'description': "Create text effects in the style of the Deadpool logo",
          'id': _0x11290b + "deadpool " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Wolf Galaxy",
          'description': "Create logo, avatar Wolf Galaxy",
          'id': _0x11290b + "wolf " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "3D wooden",
          'description': "Create 3D wooden logo",
          'id': _0x11290b + "3dwooden " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Zombie 3D",
          'description': "Zombie 3D Text Effect",
          'id': _0x11290b + "zombie3d " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Comic Style",
          'description': "Create online 3D comic-style text effects",
          'id': _0x11290b + "comic " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Air Balloon",
          'description': "Writing your name on hot air balloon",
          'id': _0x11290b + "airballoon " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Glitter Gold",
          'description': "Glitter Gold",
          'id': _0x11290b + "glittergold " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Incandescent Bulbs",
          'description': "Text effects incandescent bulbs",
          'id': _0x11290b + "bulb " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "BORN PINK",
          'description': "Create BLACKPINKs BORN PINK album logo",
          'id': _0x11290b + "bornpink " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "gold text",
          'description': "Beautiful gold text effect",
          'id': _0x11290b + "goldtext " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Neon Light",
          'description': "Making Neon Light Text Effect with Galaxy Style",
          'id': _0x11290b + "neonlight " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Water Color",
          'description': "Create a watercolor text effect online",
          'id': _0x11290b + "watercolor " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Purple Text",
          'description': "Purple text effect",
          'id': _0x11290b + "purple-text " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "3D ruby ​​stone",
          'description': "3D ruby ​​stone",
          'id': _0x11290b + "3drubystone " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Triangle mountain",
          'description': "Triangle mountain logo black & white",
          'id': _0x11290b + "mountain " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Create Marvel",
          'description': "Create Marvels Style Logo",
          'id': _0x11290b + "marvel " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "letters on the leaves",
          'description': "Write letters on the leaves",
          'id': _0x11290b + "leaves " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Metal",
          'description': "Metal logo online",
          'id': _0x11290b + "metal " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Modern Gold",
          'description': "Modern Gold",
          'id': _0x11290b + "moderngold " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "1917 Style Text",
          'description': "1917 Style Text Effect",
          'id': _0x11290b + "1917 " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': 'Plasma',
          'description': "Plasma text effects online",
          'id': _0x11290b + "plasma " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Blue neon",
          'description': "Blue neon text effect",
          'id': _0x11290b + "blueneon " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Christmas snow",
          'description': "Christmas snow text effect online",
          'id': _0x11290b + "christmas " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Stars night",
          'description': "Stars night",
          'id': _0x11290b + "starsnight " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Mechanical Style",
          'description': "Create your name in a mechanical style",
          'id': _0x11290b + "mechanical " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "multicolored signature attachment",
          'description': "Create multicolored signature attachment arrow effect",
          'id': _0x11290b + "attachmentarrow " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Underwater Text",
          'description': "Underwater Text",
          'id': _0x11290b + "underwater " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Wings Galaxy",
          'description': "Wings Galaxy",
          'id': _0x11290b + "wingsgalaxy " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "star zodiac",
          'description': "Create star zodiac wallpaper mobile",
          'id': _0x11290b + "starzodiac " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': "Heated steel",
          'description': "Heated steel lettering effect",
          'id': _0x11290b + "heatedsteel " + _0x5293ba
        });
        _0x12b223.push({
          'header': '',
          'title': 'FireWork',
          'description': "Text FireWork Effect",
          'id': _0x11290b + "firework " + _0x5293ba
        });
        const _0x241fbd = {
          'display_text': config.BTN,
          'url': config.BTNURL,
          'merchant_url': config.BTNURL
        };
        let _0x915411 = [{
          'name': 'cta_url',
          'buttonParamsJson': JSON.stringify(_0x241fbd)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "sᴇʟᴇᴄᴛ ᴀ ᴄᴀᴛᴇɢᴏʀʏ",
            'sections': [{
              'title': "sᴇʟᴇᴄᴛ ᴀ ᴄᴀᴛᴇɢᴏʀʏ",
              'highlight_label': '𝐃𝐀𝐑𝐊-𝐄𝐕𝐈𝐋',
              'rows': _0x12b223
            }]
          })
        }];
        const _0x43c5d3 = {
          'image': "https://telegra.ph/file/3fc1a690355a453762aec.jpg",
          'header': '',
          'footer': config.FOOTER,
          'body': "> *_ᴅᴀʀᴋ-ᴇᴠɪʟ ʟᴏɢᴏ ᴄʀᴇᴀᴛɪᴏɴ 🖼️_*\n            \n> Tʜᴇ ғɪʀsᴛ ϙᴜᴀʟɪᴛʏ ɢʀᴇᴀᴛ ʟᴏɢᴏs sʜᴀʀᴇ ɪs ᴛʜᴀᴛ ᴛʜᴇʏ'ʀᴇ ʀᴇʟᴇᴠᴀɴᴛ ᴛᴏ ᴛʜᴇ ᴍᴀʀᴋᴇᴛs ᴛʜᴇɪʀ ᴄᴏᴍᴘᴀɴɪᴇs ᴛᴀʀɢᴇᴛ. Mᴏʀᴇ ɪᴍᴘᴏʀᴛᴀɴᴛʟʏ,ᴛʜᴇʏ ᴄʟᴇᴀʀʟʏ ᴄᴏᴍᴍᴜɴɪᴄᴀᴛᴇ ᴀ ʙʀᴀɴᴅ's ᴘᴇʀsᴏɴᴀʟɪᴛʏ ᴀɴᴅ ɪᴅᴇɴᴛɪᴛʏ.A ᴘʀɪᴍᴀʀʏ ᴄᴏᴍᴘᴏɴᴇɴᴛ ɪs ᴛʜᴇ ᴜsᴇ ᴏғ ᴄᴏʟᴏʀs ɪɴ ʏᴏᴜʀ ʟᴏɢᴏ, ᴡʜɪᴄʜ ᴄᴀɴ ᴛʀɪɢɢᴇʀ ᴅɪғғᴇʀᴇɴᴛ ᴇᴍᴏᴛɪᴏɴs ᴀɴᴅ sʜᴏᴡ ʏᴏᴜʀ ʙʀᴀɴᴅ's ᴘᴇʀsᴏɴᴀʟɪᴛʏ ᴛᴏ ᴄᴏɴsᴜᴍᴇʀs."
        };
        const _0x15ed75 = {
          'quoted': _0x569e23
        };
        return await _0x101e99.sendButtonMessage(_0x30d42a, _0x915411, _0x2cf4c3, _0x43c5d3, _0x15ed75);
      } catch (_0x34f209) {
        _0x57c33b("*Error !!*");
        console.log(_0x34f209);
      }
    });
    const _0x10c11f = {
      'pattern': "firework",
      'filename': __filename
    };
    cmd(_0x10c11f, async (_0x57fa49, _0x1ce7b5, _0x1b2542, {
      from: _0x5d2cba,
      l: _0x5584bb,
      quoted: _0x26732f,
      body: _0x566b2a,
      isCmd: _0x32a8b2,
      command: _0x1bd710,
      args: _0x1f1514,
      q: _0x17d788,
      isGroup: _0x1525bc,
      sender: _0x2ccb84,
      senderNumber: _0x33194f,
      botNumber2: _0x214585,
      botNumber: _0x26eb4f,
      pushname: _0xebd1a0,
      isMe: _0x33a033,
      isOwner: _0x493bd8,
      groupMetadata: _0x581409,
      groupName: _0x15b263,
      participants: _0x57489d,
      groupAdmins: _0x1491fc,
      isBotAdmins: _0x42ace0,
      isAdmins: _0x5cbc8,
      reply: _0x4ce9b0
    }) => {
      try {
        const _0x3f4b4a = {
          'text': '🎆',
          'key': _0x1ce7b5.key
        };
        const _0x31835f = {
          'react': _0x3f4b4a
        };
        await _0x57fa49.sendMessage(_0x5d2cba, _0x31835f);
        let _0x5bcf19 = _0x17d788.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/text-firework-effect-356.html", ['' + _0x5bcf19]).then(async _0x32dff8 => {
          const _0xa55d1b = {
            'quoted': _0x1ce7b5
          };
          await _0x57fa49.sendMessage(_0x5d2cba, {
            'image': await getBuffer(_0x32dff8.imageUrl),
            'caption': config.FOOTER
          }, _0xa55d1b);
          const _0x1c6d00 = {
            'text': '✔',
            'key': _0x1ce7b5.key
          };
          const _0x32e9a6 = {
            'react': _0x1c6d00
          };
          await _0x57fa49.sendMessage(_0x5d2cba, _0x32e9a6);
        });
      } catch (_0x5a90f1) {
        _0x4ce9b0(errt);
        _0x5584bb(_0x5a90f1);
      }
    });
    const _0x94abc9 = {
      'pattern': "heatedsteel",
      'filename': __filename
    };
    cmd(_0x94abc9, async (_0x5b7ae9, _0xc6bb08, _0x4c210e, {
      from: _0x21c67f,
      l: _0x33a236,
      quoted: _0x4d5b1f,
      body: _0x10fb8b,
      isCmd: _0x30f0a0,
      command: _0x5f1739,
      args: _0x2d9fc3,
      q: _0x1fe8fb,
      isGroup: _0x5ec3e8,
      sender: _0x38c7c0,
      senderNumber: _0x579d5e,
      botNumber2: _0xe5da8a,
      botNumber: _0x15b353,
      pushname: _0x2c1ace,
      isMe: _0x255b18,
      isOwner: _0x38adb5,
      groupMetadata: _0x2ca7ff,
      groupName: _0x115078,
      participants: _0x4f08cd,
      groupAdmins: _0x189ae9,
      isBotAdmins: _0x1cfbcb,
      isAdmins: _0x4e324f,
      reply: _0x3e5f10
    }) => {
      try {
        const _0x5dc53a = {
          'text': '🎆',
          'key': _0xc6bb08.key
        };
        const _0x5646f1 = {
          'react': _0x5dc53a
        };
        await _0x5b7ae9.sendMessage(_0x21c67f, _0x5646f1);
        let _0x5c354c = _0x1fe8fb.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/heated-steel-lettering-effect-65.html", ['' + _0x5c354c]).then(async _0x1a5d3c => {
          const _0x5b14d9 = {
            'quoted': _0xc6bb08
          };
          await _0x5b7ae9.sendMessage(_0x21c67f, {
            'image': await getBuffer(_0x1a5d3c.imageUrl),
            'caption': config.FOOTER
          }, _0x5b14d9);
          const _0x1c2645 = {
            'text': '✔',
            'key': _0xc6bb08.key
          };
          const _0xb67424 = {
            'react': _0x1c2645
          };
          await _0x5b7ae9.sendMessage(_0x21c67f, _0xb67424);
        });
      } catch (_0x43d1e8) {
        _0x3e5f10(errt);
        _0x33a236(_0x43d1e8);
      }
    });
    const _0x3b813b = {
      'pattern': "starzodiac",
      'filename': __filename
    };
    cmd(_0x3b813b, async (_0x5490d9, _0x5281e3, _0x1b501b, {
      from: _0x47fa7d,
      l: _0x416b55,
      quoted: _0xec7f73,
      body: _0x3457be,
      isCmd: _0x58236e,
      command: _0x2ea32d,
      args: _0x3d4c2d,
      q: _0x17f0e7,
      isGroup: _0x502964,
      sender: _0x4ce7fc,
      senderNumber: _0x37e976,
      botNumber2: _0x35941a,
      botNumber: _0x144c42,
      pushname: _0x2e6eaf,
      isMe: _0x12a437,
      isOwner: _0xfae3ef,
      groupMetadata: _0x4df90b,
      groupName: _0x2d0e1a,
      participants: _0x322862,
      groupAdmins: _0x532e5a,
      isBotAdmins: _0x5140ca,
      isAdmins: _0x22dbae,
      reply: _0xb7ddff
    }) => {
      try {
        const _0x593450 = {
          'text': '🎆',
          'key': _0x5281e3.key
        };
        const _0x349cd9 = {
          'react': _0x593450
        };
        await _0x5490d9.sendMessage(_0x47fa7d, _0x349cd9);
        let _0x274eba = _0x17f0e7.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-star-zodiac-wallpaper-mobile-604.html", ['' + _0x274eba]).then(async _0x4dd6aa => {
          const _0x16264e = {
            'quoted': _0x5281e3
          };
          await _0x5490d9.sendMessage(_0x47fa7d, {
            'image': await getBuffer(_0x4dd6aa.imageUrl),
            'caption': config.FOOTER
          }, _0x16264e);
          const _0x5280fb = {
            'text': '✔',
            'key': _0x5281e3.key
          };
          const _0x10d518 = {
            'react': _0x5280fb
          };
          await _0x5490d9.sendMessage(_0x47fa7d, _0x10d518);
        });
      } catch (_0x50e6f9) {
        _0xb7ddff(errt);
        _0x416b55(_0x50e6f9);
      }
    });
    const _0x5de84b = {
      'pattern': "heatedsteel",
      'filename': __filename
    };
    cmd(_0x5de84b, async (_0x1cfce2, _0x2c4a71, _0x3468c5, {
      from: _0x2d287f,
      l: _0x2ed008,
      quoted: _0x758512,
      body: _0xe58f1,
      isCmd: _0x131b34,
      command: _0x559066,
      args: _0x4ebcc3,
      q: _0x2f1988,
      isGroup: _0x5bbeae,
      sender: _0xef1722,
      senderNumber: _0x49598f,
      botNumber2: _0x219623,
      botNumber: _0x402aed,
      pushname: _0x382357,
      isMe: _0x81c82b,
      isOwner: _0x5d2220,
      groupMetadata: _0x43e5e9,
      groupName: _0x109d58,
      participants: _0x176d99,
      groupAdmins: _0x145cb3,
      isBotAdmins: _0x3c02b0,
      isAdmins: _0x39c606,
      reply: _0x1339d4
    }) => {
      try {
        const _0x5a3c01 = {
          'text': '🎆',
          'key': _0x2c4a71.key
        };
        const _0x2d689c = {
          'react': _0x5a3c01
        };
        await _0x1cfce2.sendMessage(_0x2d287f, _0x2d689c);
        let _0x1a8eb6 = _0x2f1988.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/heated-steel-lettering-effect-65.html", ['' + _0x1a8eb6]).then(async _0x567be1 => {
          const _0x164655 = {
            'quoted': _0x2c4a71
          };
          await _0x1cfce2.sendMessage(_0x2d287f, {
            'image': await getBuffer(_0x567be1.imageUrl),
            'caption': config.FOOTER
          }, _0x164655);
          const _0x3ab2f9 = {
            'text': '✔',
            'key': _0x2c4a71.key
          };
          const _0x529a19 = {
            'react': _0x3ab2f9
          };
          await _0x1cfce2.sendMessage(_0x2d287f, _0x529a19);
        });
      } catch (_0xddf092) {
        _0x1339d4(errt);
        _0x2ed008(_0xddf092);
      }
    });
    const _0x18e9e2 = {
      'pattern': 'wingsgalaxy',
      'filename': __filename
    };
    cmd(_0x18e9e2, async (_0x3133d3, _0x2f7626, _0x51be19, {
      from: _0x3b36cf,
      l: _0x40bbf5,
      quoted: _0x1a07c8,
      body: _0x4f0d28,
      isCmd: _0x1772e1,
      command: _0x23f4d9,
      args: _0x544f6e,
      q: _0x539d55,
      isGroup: _0x5c5cac,
      sender: _0x43859d,
      senderNumber: _0x597ce1,
      botNumber2: _0x5c25f7,
      botNumber: _0x3ce087,
      pushname: _0x49b407,
      isMe: _0x2f44bc,
      isOwner: _0x29b39d,
      groupMetadata: _0x3dede7,
      groupName: _0x4fb967,
      participants: _0x2fe6b4,
      groupAdmins: _0x2b0f90,
      isBotAdmins: _0x11d2f6,
      isAdmins: _0x466f4a,
      reply: _0x5d1acf
    }) => {
      try {
        const _0x2332b1 = {
          'text': '🎆',
          'key': _0x2f7626.key
        };
        const _0x471ef0 = {
          'react': _0x2332b1
        };
        await _0x3133d3.sendMessage(_0x3b36cf, _0x471ef0);
        let _0x182eb4 = _0x539d55.split('+');
        new Maker().Ephoto360('https://en.ephoto360.com/wings-galaxy-206.html', ['' + _0x182eb4]).then(async _0x3c0ed8 => {
          const _0x57081a = {
            'quoted': _0x2f7626
          };
          await _0x3133d3.sendMessage(_0x3b36cf, {
            'image': await getBuffer(_0x3c0ed8.imageUrl),
            'caption': config.FOOTER
          }, _0x57081a);
          const _0x158869 = {
            'text': '✔',
            'key': _0x2f7626.key
          };
          const _0x4a9405 = {
            'react': _0x158869
          };
          await _0x3133d3.sendMessage(_0x3b36cf, _0x4a9405);
        });
      } catch (_0x475d05) {
        _0x5d1acf(errt);
        _0x40bbf5(_0x475d05);
      }
    });
    const _0x5a475f = {
      'pattern': 'underwater',
      'filename': __filename
    };
    cmd(_0x5a475f, async (_0x4d9fad, _0x23ee85, _0x29977a, {
      from: _0x3f8dab,
      l: _0x397c16,
      quoted: _0x25667f,
      body: _0x2b8901,
      isCmd: _0x59d4cc,
      command: _0x56806f,
      args: _0x570e86,
      q: _0x4af940,
      isGroup: _0x4dd1b1,
      sender: _0x5e150a,
      senderNumber: _0xb598c7,
      botNumber2: _0x255859,
      botNumber: _0x2a2460,
      pushname: _0x40278f,
      isMe: _0x39dec1,
      isOwner: _0x454c4d,
      groupMetadata: _0x3f142d,
      groupName: _0x4991d9,
      participants: _0x41fc9c,
      groupAdmins: _0x2d9775,
      isBotAdmins: _0x5a194a,
      isAdmins: _0x328edf,
      reply: _0x4a6198
    }) => {
      try {
        const _0xd76d96 = {
          'text': '🎆',
          'key': _0x23ee85.key
        };
        const _0x503d88 = {
          'react': _0xd76d96
        };
        await _0x4d9fad.sendMessage(_0x3f8dab, _0x503d88);
        let _0x4f1bdb = _0x4af940.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/underwater-text-73.html", ['' + _0x4f1bdb]).then(async _0x37a063 => {
          const _0x2a2937 = {
            'quoted': _0x23ee85
          };
          await _0x4d9fad.sendMessage(_0x3f8dab, {
            'image': await getBuffer(_0x37a063.imageUrl),
            'caption': config.FOOTER
          }, _0x2a2937);
          const _0x3f7588 = {
            'text': '✔',
            'key': _0x23ee85.key
          };
          const _0x40c99a = {
            'react': _0x3f7588
          };
          await _0x4d9fad.sendMessage(_0x3f8dab, _0x40c99a);
        });
      } catch (_0x80c2f4) {
        _0x4a6198(errt);
        _0x397c16(_0x80c2f4);
      }
    });
    const _0x30d554 = {
      'pattern': "attachmentarrow",
      'filename': __filename
    };
    cmd(_0x30d554, async (_0xf56228, _0x5cf56b, _0x450167, {
      from: _0x3a2182,
      l: _0x1755ad,
      quoted: _0x281824,
      body: _0x5e9128,
      isCmd: _0xb5dc22,
      command: _0x240d83,
      args: _0x5e4307,
      q: _0x1095b3,
      isGroup: _0x2c932c,
      sender: _0x44fcc5,
      senderNumber: _0x51e84c,
      botNumber2: _0x168770,
      botNumber: _0x2c9159,
      pushname: _0x2205cc,
      isMe: _0x2011ab,
      isOwner: _0x24c63d,
      groupMetadata: _0x2c75b7,
      groupName: _0x359cab,
      participants: _0x5c474b,
      groupAdmins: _0x29d4c6,
      isBotAdmins: _0x5af781,
      isAdmins: _0x4e7b4c,
      reply: _0x177ade
    }) => {
      try {
        const _0x12191b = {
          'text': '🎆',
          'key': _0x5cf56b.key
        };
        const _0x2b8ded = {
          'react': _0x12191b
        };
        await _0xf56228.sendMessage(_0x3a2182, _0x2b8ded);
        let _0x32589e = _0x1095b3.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html", ['' + _0x32589e]).then(async _0x4b9fdc => {
          const _0xbd913b = {
            'quoted': _0x5cf56b
          };
          await _0xf56228.sendMessage(_0x3a2182, {
            'image': await getBuffer(_0x4b9fdc.imageUrl),
            'caption': config.FOOTER
          }, _0xbd913b);
          const _0x412186 = {
            'text': '✔',
            'key': _0x5cf56b.key
          };
          const _0x31ab2e = {
            'react': _0x412186
          };
          await _0xf56228.sendMessage(_0x3a2182, _0x31ab2e);
        });
      } catch (_0x41d28b) {
        _0x177ade(errt);
        _0x1755ad(_0x41d28b);
      }
    });
    const _0x145de0 = {
      'pattern': "mechanical",
      'filename': __filename
    };
    cmd(_0x145de0, async (_0x3e4431, _0x30c785, _0x3f9c94, {
      from: _0x5d4019,
      l: _0xb5c839,
      quoted: _0x27bd44,
      body: _0x456cef,
      isCmd: _0x42eb62,
      command: _0x1aea55,
      args: _0x3081a6,
      q: _0x5e4ae0,
      isGroup: _0x4600f1,
      sender: _0x3adebf,
      senderNumber: _0x3e648d,
      botNumber2: _0x421b16,
      botNumber: _0x5be52c,
      pushname: _0x3e5dc6,
      isMe: _0x5f21c1,
      isOwner: _0x58e6c0,
      groupMetadata: _0x43f0af,
      groupName: _0x3af535,
      participants: _0x33c80c,
      groupAdmins: _0x47c68b,
      isBotAdmins: _0x5ebfab,
      isAdmins: _0x3d349d,
      reply: _0x2c72b
    }) => {
      try {
        const _0x2388db = {
          'text': '🎆',
          'key': _0x30c785.key
        };
        const _0x19aef1 = {
          'react': _0x2388db
        };
        await _0x3e4431.sendMessage(_0x5d4019, _0x19aef1);
        let _0x18aca3 = _0x5e4ae0.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-your-name-in-a-mechanical-style-306.html", ['' + _0x18aca3]).then(async _0x5c0e5d => {
          const _0x54bf03 = {
            'quoted': _0x30c785
          };
          await _0x3e4431.sendMessage(_0x5d4019, {
            'image': await getBuffer(_0x5c0e5d.imageUrl),
            'caption': config.FOOTER
          }, _0x54bf03);
          const _0x46ff6d = {
            'text': '✔',
            'key': _0x30c785.key
          };
          const _0x5a18d8 = {
            'react': _0x46ff6d
          };
          await _0x3e4431.sendMessage(_0x5d4019, _0x5a18d8);
        });
      } catch (_0x3a3bb8) {
        _0x2c72b(errt);
        _0xb5c839(_0x3a3bb8);
      }
    });
    const _0x4c3092 = {
      'pattern': "starsnight",
      'filename': __filename
    };
    cmd(_0x4c3092, async (_0xaf2601, _0x31de78, _0xd7df94, {
      from: _0x1549c6,
      l: _0x984226,
      quoted: _0x3ddb7c,
      body: _0xf357fd,
      isCmd: _0x13fb58,
      command: _0xf2dc8c,
      args: _0x1fe2c2,
      q: _0x41506c,
      isGroup: _0x49e99c,
      sender: _0x5c1b6a,
      senderNumber: _0x136c2f,
      botNumber2: _0x178845,
      botNumber: _0x4a47a5,
      pushname: _0x401639,
      isMe: _0x203b95,
      isOwner: _0x21abe6,
      groupMetadata: _0x18f253,
      groupName: _0x4b2c7e,
      participants: _0x1218e4,
      groupAdmins: _0x495e83,
      isBotAdmins: _0x1f6169,
      isAdmins: _0x10f9ba,
      reply: _0x309796
    }) => {
      try {
        const _0x43ad8c = {
          'text': '🎆',
          'key': _0x31de78.key
        };
        const _0x541e68 = {
          'react': _0x43ad8c
        };
        await _0xaf2601.sendMessage(_0x1549c6, _0x541e68);
        let _0x21a545 = _0x41506c.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/stars-night-online-84.html", ['' + _0x21a545]).then(async _0x52c07e => {
          const _0x4bf2a7 = {
            'quoted': _0x31de78
          };
          await _0xaf2601.sendMessage(_0x1549c6, {
            'image': await getBuffer(_0x52c07e.imageUrl),
            'caption': config.FOOTER
          }, _0x4bf2a7);
          const _0x50825e = {
            'text': '✔',
            'key': _0x31de78.key
          };
          const _0x132855 = {
            'react': _0x50825e
          };
          await _0xaf2601.sendMessage(_0x1549c6, _0x132855);
        });
      } catch (_0x3f37e7) {
        _0x309796(errt);
        _0x984226(_0x3f37e7);
      }
    });
    const _0x53e8fc = {
      'pattern': "christmas",
      'filename': __filename
    };
    cmd(_0x53e8fc, async (_0x589862, _0x1e35e4, _0x3f9fe8, {
      from: _0x29bb09,
      l: _0x142582,
      quoted: _0x4f9d26,
      body: _0x65614e,
      isCmd: _0x235b11,
      command: _0xae8a80,
      args: _0x2cf1bc,
      q: _0x3f03bf,
      isGroup: _0x46ea9e,
      sender: _0x17a5a1,
      senderNumber: _0xd2a81d,
      botNumber2: _0xbdeddf,
      botNumber: _0x2fb82f,
      pushname: _0x53bdc4,
      isMe: _0x21b458,
      isOwner: _0x5d0d08,
      groupMetadata: _0x4d6425,
      groupName: _0x52e008,
      participants: _0x2743e6,
      groupAdmins: _0x5ebedd,
      isBotAdmins: _0xf6f6e9,
      isAdmins: _0x38cde9,
      reply: _0x539157
    }) => {
      try {
        const _0x44cd64 = {
          'text': '🎆',
          'key': _0x1e35e4.key
        };
        const _0x1db7ec = {
          'react': _0x44cd64
        };
        await _0x589862.sendMessage(_0x29bb09, _0x1db7ec);
        let _0xb9f4d5 = _0x3f03bf.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/christmas-snow-text-effect-online-631.html", ['' + _0xb9f4d5]).then(async _0x43b13 => {
          const _0x48c95a = {
            'quoted': _0x1e35e4
          };
          await _0x589862.sendMessage(_0x29bb09, {
            'image': await getBuffer(_0x43b13.imageUrl),
            'caption': config.FOOTER
          }, _0x48c95a);
          const _0x3a1381 = {
            'text': '✔',
            'key': _0x1e35e4.key
          };
          const _0x241c3d = {
            'react': _0x3a1381
          };
          await _0x589862.sendMessage(_0x29bb09, _0x241c3d);
        });
      } catch (_0x3207e7) {
        _0x539157(errt);
        _0x142582(_0x3207e7);
      }
    });
    const _0x9e6f97 = {
      'pattern': "blueneon",
      'filename': __filename
    };
    cmd(_0x9e6f97, async (_0x544a76, _0x943cf7, _0x4b8033, {
      from: _0x292db0,
      l: _0x1d7b71,
      quoted: _0x27fb33,
      body: _0x548415,
      isCmd: _0x2054dc,
      command: _0x3fb650,
      args: _0x5c1704,
      q: _0x40eb55,
      isGroup: _0x124ba4,
      sender: _0x4566b6,
      senderNumber: _0x1c16b0,
      botNumber2: _0x1c22a0,
      botNumber: _0x322b45,
      pushname: _0x330081,
      isMe: _0x3df02f,
      isOwner: _0x487d25,
      groupMetadata: _0x5dd4cd,
      groupName: _0x312cd2,
      participants: _0x120490,
      groupAdmins: _0x53977e,
      isBotAdmins: _0x1b1b80,
      isAdmins: _0x201917,
      reply: _0x333976
    }) => {
      try {
        const _0x30015b = {
          'text': '🎆',
          'key': _0x943cf7.key
        };
        const _0x364757 = {
          'react': _0x30015b
        };
        await _0x544a76.sendMessage(_0x292db0, _0x364757);
        let _0x275458 = _0x40eb55.split('+');
        new Maker().Ephoto360('https://en.ephoto360.com/blue-neon-text-effect-117.html', ['' + _0x275458]).then(async _0x4954cf => {
          const _0x2a1e09 = {
            'quoted': _0x943cf7
          };
          await _0x544a76.sendMessage(_0x292db0, {
            'image': await getBuffer(_0x4954cf.imageUrl),
            'caption': config.FOOTER
          }, _0x2a1e09);
          const _0x27860c = {
            'text': '✔',
            'key': _0x943cf7.key
          };
          const _0x2d3b88 = {
            'react': _0x27860c
          };
          await _0x544a76.sendMessage(_0x292db0, _0x2d3b88);
        });
      } catch (_0x4a832c) {
        _0x333976(errt);
        _0x1d7b71(_0x4a832c);
      }
    });
    const _0x4d5b7a = {
      'pattern': "plasma",
      'filename': __filename
    };
    cmd(_0x4d5b7a, async (_0x5430ea, _0xd859d, _0x3a9f6f, {
      from: _0x392c9b,
      l: _0x237668,
      quoted: _0x2f9558,
      body: _0x467f8e,
      isCmd: _0x1cf149,
      command: _0x12d3b2,
      args: _0xddac18,
      q: _0x2984c4,
      isGroup: _0x4c356d,
      sender: _0xdaef05,
      senderNumber: _0x1fe4a7,
      botNumber2: _0x550391,
      botNumber: _0x588809,
      pushname: _0x39fbe5,
      isMe: _0x409bde,
      isOwner: _0x2ef371,
      groupMetadata: _0x26e385,
      groupName: _0x33010f,
      participants: _0x5b6512,
      groupAdmins: _0x2056ab,
      isBotAdmins: _0xfeb9b2,
      isAdmins: _0x345a96,
      reply: _0x47762f
    }) => {
      try {
        const _0x276c4 = {
          'text': '🎆',
          'key': _0xd859d.key
        };
        const _0x2c47d8 = {
          'react': _0x276c4
        };
        await _0x5430ea.sendMessage(_0x392c9b, _0x2c47d8);
        let _0x11c022 = _0x2984c4.split('+');
        new Maker().Ephoto360('https://en.ephoto360.com/plasma-text-effects-online-71.html', ['' + _0x11c022]).then(async _0x470259 => {
          const _0x43b8e6 = {
            'quoted': _0xd859d
          };
          await _0x5430ea.sendMessage(_0x392c9b, {
            'image': await getBuffer(_0x470259.imageUrl),
            'caption': config.FOOTER
          }, _0x43b8e6);
          const _0x4577d3 = {
            'text': '✔',
            'key': _0xd859d.key
          };
          const _0x55407e = {
            'react': _0x4577d3
          };
          await _0x5430ea.sendMessage(_0x392c9b, _0x55407e);
        });
      } catch (_0x8d374d) {
        _0x47762f(errt);
        _0x237668(_0x8d374d);
      }
    });
    const _0x5466b7 = {
      'pattern': "1917",
      'filename': __filename
    };
    cmd(_0x5466b7, async (_0x3d815a, _0x5ac662, _0x3dbe30, {
      from: _0x5e4ffe,
      l: _0x51eb10,
      quoted: _0xfe38a6,
      body: _0x1d8534,
      isCmd: _0x4ed749,
      command: _0x1d11d7,
      args: _0x49961c,
      q: _0x2166aa,
      isGroup: _0x50d1c9,
      sender: _0x32d46c,
      senderNumber: _0x3d94bc,
      botNumber2: _0x496689,
      botNumber: _0x3e4518,
      pushname: _0x40b88e,
      isMe: _0xb49251,
      isOwner: _0x17b897,
      groupMetadata: _0x49b2b6,
      groupName: _0x485795,
      participants: _0x42d257,
      groupAdmins: _0x417880,
      isBotAdmins: _0x4d6b7a,
      isAdmins: _0x4f6ad8,
      reply: _0x4ed6db
    }) => {
      try {
        const _0x522417 = {
          'text': '🎆',
          'key': _0x5ac662.key
        };
        const _0x3fdadf = {
          'react': _0x522417
        };
        await _0x3d815a.sendMessage(_0x5e4ffe, _0x3fdadf);
        let _0x32ce81 = _0x2166aa.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/1917-style-text-effect-523.html", ['' + _0x32ce81]).then(async _0x3b3cf7 => {
          const _0x265a44 = {
            'quoted': _0x5ac662
          };
          await _0x3d815a.sendMessage(_0x5e4ffe, {
            'image': await getBuffer(_0x3b3cf7.imageUrl),
            'caption': config.FOOTER
          }, _0x265a44);
          const _0x3f97f9 = {
            'text': '✔',
            'key': _0x5ac662.key
          };
          const _0x3bf6f8 = {
            'react': _0x3f97f9
          };
          await _0x3d815a.sendMessage(_0x5e4ffe, _0x3bf6f8);
        });
      } catch (_0x5d9f51) {
        _0x4ed6db(errt);
        _0x51eb10(_0x5d9f51);
      }
    });
    const _0x306163 = {
      'pattern': 'moderngold',
      'filename': __filename
    };
    cmd(_0x306163, async (_0x1e3ae9, _0x9a3754, _0x1c53c9, {
      from: _0x354d73,
      l: _0x3b0682,
      quoted: _0x3bbd45,
      body: _0x288f7c,
      isCmd: _0x138d3d,
      command: _0x216afc,
      args: _0x3aaa02,
      q: _0x37df7b,
      isGroup: _0x5a9a5e,
      sender: _0x3f3ab0,
      senderNumber: _0x5a40a5,
      botNumber2: _0x3a4ba7,
      botNumber: _0x352a83,
      pushname: _0x2382a0,
      isMe: _0x39dea4,
      isOwner: _0x268e6d,
      groupMetadata: _0x2199a5,
      groupName: _0x3d04ee,
      participants: _0x438a0c,
      groupAdmins: _0x44c723,
      isBotAdmins: _0x2346cc,
      isAdmins: _0x452e56,
      reply: _0x423917
    }) => {
      try {
        const _0x1d9b92 = {
          'text': '🎆',
          'key': _0x9a3754.key
        };
        const _0x251ec4 = {
          'react': _0x1d9b92
        };
        await _0x1e3ae9.sendMessage(_0x354d73, _0x251ec4);
        let _0x1034d5 = _0x37df7b.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/modern-gold-157.html", ['' + _0x1034d5]).then(async _0x18d20e => {
          const _0x11e704 = {
            'quoted': _0x9a3754
          };
          await _0x1e3ae9.sendMessage(_0x354d73, {
            'image': await getBuffer(_0x18d20e.imageUrl),
            'caption': config.FOOTER
          }, _0x11e704);
          const _0x582415 = {
            'text': '✔',
            'key': _0x9a3754.key
          };
          const _0x1d8b6d = {
            'react': _0x582415
          };
          await _0x1e3ae9.sendMessage(_0x354d73, _0x1d8b6d);
        });
      } catch (_0x13ba50) {
        _0x423917(errt);
        _0x3b0682(_0x13ba50);
      }
    });
    const _0x4a3d3b = {
      'pattern': "metal",
      'filename': __filename
    };
    cmd(_0x4a3d3b, async (_0x55672f, _0x36ebc6, _0x3a849a, {
      from: _0x1ecb83,
      l: _0x1e41d1,
      quoted: _0x280c02,
      body: _0x4b1880,
      isCmd: _0x4fb9bd,
      command: _0x4ca19b,
      args: _0x58c7ba,
      q: _0x3822c3,
      isGroup: _0x5761c6,
      sender: _0x5696ed,
      senderNumber: _0x554da9,
      botNumber2: _0x4efa3f,
      botNumber: _0x2b3288,
      pushname: _0x2f6c29,
      isMe: _0x16628a,
      isOwner: _0x3c07f7,
      groupMetadata: _0x45e700,
      groupName: _0x1e0da5,
      participants: _0x3a19d6,
      groupAdmins: _0x41573a,
      isBotAdmins: _0x59cc76,
      isAdmins: _0x3e8ca8,
      reply: _0x4fc5af
    }) => {
      try {
        const _0x3ea7f6 = {
          'text': '🎆',
          'key': _0x36ebc6.key
        };
        const _0x313297 = {
          'react': _0x3ea7f6
        };
        await _0x55672f.sendMessage(_0x1ecb83, _0x313297);
        let _0x4caacf = _0x3822c3.split('+');
        new Maker().Ephoto360('https://en.ephoto360.com/metal-logo-online-108.html', ['' + _0x4caacf]).then(async _0xda89ed => {
          const _0x4032b4 = {
            'quoted': _0x36ebc6
          };
          await _0x55672f.sendMessage(_0x1ecb83, {
            'image': await getBuffer(_0xda89ed.imageUrl),
            'caption': config.FOOTER
          }, _0x4032b4);
          const _0x1f62f6 = {
            'text': '✔',
            'key': _0x36ebc6.key
          };
          const _0x491589 = {
            'react': _0x1f62f6
          };
          await _0x55672f.sendMessage(_0x1ecb83, _0x491589);
        });
      } catch (_0x937683) {
        _0x4fc5af(errt);
        _0x1e41d1(_0x937683);
      }
    });
    const _0x2ce2d8 = {
      'pattern': "leaves",
      'filename': __filename
    };
    cmd(_0x2ce2d8, async (_0x23c1ec, _0x8c1e11, _0x2141e9, {
      from: _0x3d47c5,
      l: _0x38b216,
      quoted: _0x368e8e,
      body: _0x4736a5,
      isCmd: _0xd78263,
      command: _0x4dc927,
      args: _0x29637f,
      q: _0x321d7b,
      isGroup: _0x175592,
      sender: _0x15e83d,
      senderNumber: _0x1a0c1d,
      botNumber2: _0x54416c,
      botNumber: _0x34119c,
      pushname: _0x2d3e2f,
      isMe: _0x43d54f,
      isOwner: _0x54722c,
      groupMetadata: _0x1e052e,
      groupName: _0x5753ae,
      participants: _0x1c1f2f,
      groupAdmins: _0x1efa53,
      isBotAdmins: _0x3c1f79,
      isAdmins: _0xdd8e3d,
      reply: _0x429322
    }) => {
      try {
        const _0x5e4b25 = {
          'text': '🎆',
          'key': _0x8c1e11.key
        };
        const _0x6c92e2 = {
          'react': _0x5e4b25
        };
        await _0x23c1ec.sendMessage(_0x3d47c5, _0x6c92e2);
        let _0x1dfc34 = _0x321d7b.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/write-letters-on-the-leaves-248.html", ['' + _0x1dfc34]).then(async _0x13ce5f => {
          const _0x554038 = {
            'quoted': _0x8c1e11
          };
          await _0x23c1ec.sendMessage(_0x3d47c5, {
            'image': await getBuffer(_0x13ce5f.imageUrl),
            'caption': config.FOOTER
          }, _0x554038);
          const _0x276be0 = {
            'text': '✔',
            'key': _0x8c1e11.key
          };
          const _0x3b77d5 = {
            'react': _0x276be0
          };
          await _0x23c1ec.sendMessage(_0x3d47c5, _0x3b77d5);
        });
      } catch (_0x324fd2) {
        _0x429322(errt);
        _0x38b216(_0x324fd2);
      }
    });
    const _0x2717df = {
      'pattern': "marvel",
      'filename': __filename
    };
    cmd(_0x2717df, async (_0x3921fc, _0x23a57a, _0x1c8350, {
      from: _0x5906d3,
      l: _0x214285,
      quoted: _0x319c5d,
      body: _0x5f3730,
      isCmd: _0x591809,
      command: _0x1a9761,
      args: _0x19716b,
      q: _0x118582,
      isGroup: _0x54abd6,
      sender: _0x1bcd3c,
      senderNumber: _0x14b7a6,
      botNumber2: _0x225f4a,
      botNumber: _0x1f429,
      pushname: _0x56e6d2,
      isMe: _0x5dd094,
      isOwner: _0x315843,
      groupMetadata: _0x41ea16,
      groupName: _0x379dba,
      participants: _0x3a05bc,
      groupAdmins: _0x50b020,
      isBotAdmins: _0x3a6b63,
      isAdmins: _0x28d2e2,
      reply: _0x2a2827
    }) => {
      try {
        const _0x2e0ec2 = {
          'text': '🎆',
          'key': _0x23a57a.key
        };
        const _0x55b598 = {
          'react': _0x2e0ec2
        };
        await _0x3921fc.sendMessage(_0x5906d3, _0x55b598);
        let _0x5538a8 = _0x118582.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-marvel-style-logo-419.html", ['' + _0x5538a8]).then(async _0x3ea4e9 => {
          const _0x9d4f8 = {
            'quoted': _0x23a57a
          };
          await _0x3921fc.sendMessage(_0x5906d3, {
            'image': await getBuffer(_0x3ea4e9.imageUrl),
            'caption': config.FOOTER
          }, _0x9d4f8);
          const _0x504b4c = {
            'text': '✔',
            'key': _0x23a57a.key
          };
          const _0x5891de = {
            'react': _0x504b4c
          };
          await _0x3921fc.sendMessage(_0x5906d3, _0x5891de);
        });
      } catch (_0x392b1a) {
        _0x2a2827(errt);
        _0x214285(_0x392b1a);
      }
    });
    const _0x4eda97 = {
      'pattern': "mountain",
      'filename': __filename
    };
    cmd(_0x4eda97, async (_0x54b346, _0x4f152c, _0x50b6d4, {
      from: _0x5d6d7b,
      l: _0x5f565d,
      quoted: _0x5b9bfe,
      body: _0x5c8eba,
      isCmd: _0x29e230,
      command: _0x9a877d,
      args: _0x7043fc,
      q: _0x79f986,
      isGroup: _0x1b9728,
      sender: _0x5c45c2,
      senderNumber: _0x4871af,
      botNumber2: _0x269566,
      botNumber: _0x346914,
      pushname: _0x405b66,
      isMe: _0x2c1162,
      isOwner: _0x2f80a2,
      groupMetadata: _0x4262cf,
      groupName: _0x356752,
      participants: _0x208c74,
      groupAdmins: _0xd68ec5,
      isBotAdmins: _0x5c13a9,
      isAdmins: _0x17e5af,
      reply: _0x3b3b9f
    }) => {
      try {
        const _0x10e2fd = {
          'text': '🎆',
          'key': _0x4f152c.key
        };
        const _0x3e1ec2 = {
          'react': _0x10e2fd
        };
        await _0x54b346.sendMessage(_0x5d6d7b, _0x3e1ec2);
        let _0x35ece7 = _0x79f986.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/triangle-mountain-logo-black-white-566.html", ['' + _0x35ece7]).then(async _0x5044ca => {
          const _0x50f2d5 = {
            'quoted': _0x4f152c
          };
          await _0x54b346.sendMessage(_0x5d6d7b, {
            'image': await getBuffer(_0x5044ca.imageUrl),
            'caption': config.FOOTER
          }, _0x50f2d5);
          const _0x4b720a = {
            'text': '✔',
            'key': _0x4f152c.key
          };
          const _0x19b1d6 = {
            'react': _0x4b720a
          };
          await _0x54b346.sendMessage(_0x5d6d7b, _0x19b1d6);
        });
      } catch (_0x51ffa8) {
        _0x3b3b9f(errt);
        _0x5f565d(_0x51ffa8);
      }
    });
    const _0x42a5e3 = {
      'pattern': '3drubystone',
      'filename': __filename
    };
    cmd(_0x42a5e3, async (_0x5277a0, _0x3a2546, _0x1b8a98, {
      from: _0x163948,
      l: _0x1d2314,
      quoted: _0x926131,
      body: _0x22d24c,
      isCmd: _0x1bf316,
      command: _0x3b53af,
      args: _0x408aed,
      q: _0x472304,
      isGroup: _0x46f148,
      sender: _0x26677c,
      senderNumber: _0x2bc598,
      botNumber2: _0x5de58c,
      botNumber: _0x4d3a71,
      pushname: _0x43c774,
      isMe: _0x300c99,
      isOwner: _0x768ad2,
      groupMetadata: _0x54c75b,
      groupName: _0xdd5556,
      participants: _0x55cafa,
      groupAdmins: _0x13851b,
      isBotAdmins: _0x2072be,
      isAdmins: _0x15ff78,
      reply: _0x23df52
    }) => {
      try {
        const _0x1ee4d2 = {
          'text': '🎆',
          'key': _0x3a2546.key
        };
        const _0x1689e3 = {
          'react': _0x1ee4d2
        };
        await _0x5277a0.sendMessage(_0x163948, _0x1689e3);
        let _0x549770 = _0x472304.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/3d-ruby-stone-text-281.html", ['' + _0x549770]).then(async _0x12ee69 => {
          const _0x23bc6f = {
            'quoted': _0x3a2546
          };
          await _0x5277a0.sendMessage(_0x163948, {
            'image': await getBuffer(_0x12ee69.imageUrl),
            'caption': config.FOOTER
          }, _0x23bc6f);
          const _0x487f53 = {
            'text': '✔',
            'key': _0x3a2546.key
          };
          const _0x617966 = {
            'react': _0x487f53
          };
          await _0x5277a0.sendMessage(_0x163948, _0x617966);
        });
      } catch (_0xa18e3c) {
        _0x23df52(errt);
        _0x1d2314(_0xa18e3c);
      }
    });
    const _0x4c5613 = {
      'pattern': "purpletext",
      'filename': __filename
    };
    cmd(_0x4c5613, async (_0x317221, _0x37624e, _0x1f3b63, {
      from: _0x4d5b18,
      l: _0x524307,
      quoted: _0x3c6b62,
      body: _0x288f49,
      isCmd: _0x6c22ed,
      command: _0x1fbdd4,
      args: _0x1b8723,
      q: _0x54af63,
      isGroup: _0x5ce316,
      sender: _0x3d14d0,
      senderNumber: _0x2a83ef,
      botNumber2: _0x273901,
      botNumber: _0x3f878c,
      pushname: _0x33dcbf,
      isMe: _0x5068f5,
      isOwner: _0x60e8e0,
      groupMetadata: _0x1db235,
      groupName: _0x2574e2,
      participants: _0x159f94,
      groupAdmins: _0x2a0142,
      isBotAdmins: _0x5d0672,
      isAdmins: _0x1d8655,
      reply: _0x5bebf3
    }) => {
      try {
        const _0x39a6ab = {
          'text': '🎆',
          'key': _0x37624e.key
        };
        const _0x29c53d = {
          'react': _0x39a6ab
        };
        await _0x317221.sendMessage(_0x4d5b18, _0x29c53d);
        let _0x32f5b8 = _0x54af63.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/purple-text-effect-online-100.html", ['' + _0x32f5b8]).then(async _0x3fdfa5 => {
          const _0x120d10 = {
            'quoted': _0x37624e
          };
          await _0x317221.sendMessage(_0x4d5b18, {
            'image': await getBuffer(_0x3fdfa5.imageUrl),
            'caption': config.FOOTER
          }, _0x120d10);
          const _0x1769c2 = {
            'text': '✔',
            'key': _0x37624e.key
          };
          const _0x314506 = {
            'react': _0x1769c2
          };
          await _0x317221.sendMessage(_0x4d5b18, _0x314506);
        });
      } catch (_0xa6b3ed) {
        _0x5bebf3(errt);
        _0x524307(_0xa6b3ed);
      }
    });
    const _0x40881e = {
      'pattern': "watercolor",
      'filename': __filename
    };
    cmd(_0x40881e, async (_0x1f29ce, _0x349d29, _0x2c806f, {
      from: _0x91f8e9,
      l: _0x36872d,
      quoted: _0x1053fa,
      body: _0x193b15,
      isCmd: _0x3eb765,
      command: _0x1c15e5,
      args: _0x220af8,
      q: _0x6d8db,
      isGroup: _0x259029,
      sender: _0x471bdf,
      senderNumber: _0x286c7d,
      botNumber2: _0x2274ca,
      botNumber: _0x88e95a,
      pushname: _0x54e015,
      isMe: _0x143427,
      isOwner: _0x393738,
      groupMetadata: _0x429cb1,
      groupName: _0x5a4f80,
      participants: _0x23a3da,
      groupAdmins: _0x4c8909,
      isBotAdmins: _0x13e823,
      isAdmins: _0xd650a0,
      reply: _0xd01216
    }) => {
      try {
        const _0x384d7b = {
          'text': '🎆',
          'key': _0x349d29.key
        };
        const _0x175211 = {
          'react': _0x384d7b
        };
        await _0x1f29ce.sendMessage(_0x91f8e9, _0x175211);
        let _0x322e1e = _0x6d8db.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html", ['' + _0x322e1e]).then(async _0x20ebc7 => {
          const _0x3af50e = {
            'quoted': _0x349d29
          };
          await _0x1f29ce.sendMessage(_0x91f8e9, {
            'image': await getBuffer(_0x20ebc7.imageUrl),
            'caption': config.FOOTER
          }, _0x3af50e);
          const _0x5a5272 = {
            'text': '✔',
            'key': _0x349d29.key
          };
          const _0x4aa105 = {
            'react': _0x5a5272
          };
          await _0x1f29ce.sendMessage(_0x91f8e9, _0x4aa105);
        });
      } catch (_0x50640f) {
        _0xd01216(errt);
        _0x36872d(_0x50640f);
      }
    });
    const _0x1ab3aa = {
      'pattern': "neonlight",
      'filename': __filename
    };
    cmd(_0x1ab3aa, async (_0x587482, _0x2cb304, _0x1d6ea0, {
      from: _0x1fe311,
      l: _0xe84281,
      quoted: _0x22a999,
      body: _0x20c864,
      isCmd: _0xb7dcfc,
      command: _0x56c8c0,
      args: _0xccb4f7,
      q: _0x572bfa,
      isGroup: _0x1ed964,
      sender: _0xb56e45,
      senderNumber: _0x1b5e30,
      botNumber2: _0x2f1ad3,
      botNumber: _0x5a6085,
      pushname: _0x55ec84,
      isMe: _0x5c55a3,
      isOwner: _0x4e939d,
      groupMetadata: _0x43a7b4,
      groupName: _0x166f51,
      participants: _0x283eb8,
      groupAdmins: _0x2da550,
      isBotAdmins: _0x5bd34e,
      isAdmins: _0x39289c,
      reply: _0x386dfe
    }) => {
      try {
        const _0x212582 = {
          'text': '🎆',
          'key': _0x2cb304.key
        };
        const _0x589cca = {
          'react': _0x212582
        };
        await _0x587482.sendMessage(_0x1fe311, _0x589cca);
        let _0x391ea9 = _0x572bfa.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html", ['' + _0x391ea9]).then(async _0x535c9a => {
          const _0x153c21 = {
            'quoted': _0x2cb304
          };
          await _0x587482.sendMessage(_0x1fe311, {
            'image': await getBuffer(_0x535c9a.imageUrl),
            'caption': config.FOOTER
          }, _0x153c21);
          const _0x52f5d0 = {
            'text': '✔',
            'key': _0x2cb304.key
          };
          const _0x2becb5 = {
            'react': _0x52f5d0
          };
          await _0x587482.sendMessage(_0x1fe311, _0x2becb5);
        });
      } catch (_0x174d42) {
        _0x386dfe(errt);
        _0xe84281(_0x174d42);
      }
    });
    const _0x2ac2c4 = {
      'pattern': "goldtext",
      'filename': __filename
    };
    cmd(_0x2ac2c4, async (_0x20a8c2, _0x722f34, _0x19eb31, {
      from: _0x124a8f,
      l: _0x28511f,
      quoted: _0x576ed7,
      body: _0x52e7dd,
      isCmd: _0x23a3d5,
      command: _0x3a520f,
      args: _0x589557,
      q: _0x583b0e,
      isGroup: _0x28c346,
      sender: _0x2a3d12,
      senderNumber: _0x19955b,
      botNumber2: _0x22a300,
      botNumber: _0x28231b,
      pushname: _0x19b1cf,
      isMe: _0x4b9c46,
      isOwner: _0xce5cb2,
      groupMetadata: _0x2338f9,
      groupName: _0x187ab1,
      participants: _0x1110f7,
      groupAdmins: _0x2ec919,
      isBotAdmins: _0x318803,
      isAdmins: _0x119460,
      reply: _0x30fc48
    }) => {
      try {
        const _0x41165f = {
          'text': '🎆',
          'key': _0x722f34.key
        };
        const _0xce2699 = {
          'react': _0x41165f
        };
        await _0x20a8c2.sendMessage(_0x124a8f, _0xce2699);
        let _0x2e95a0 = _0x583b0e.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/beautiful-gold-text-effect-122.html", ['' + _0x2e95a0]).then(async _0x10328b => {
          const _0xd9f12b = {
            'quoted': _0x722f34
          };
          await _0x20a8c2.sendMessage(_0x124a8f, {
            'image': await getBuffer(_0x10328b.imageUrl),
            'caption': config.FOOTER
          }, _0xd9f12b);
          const _0x300f96 = {
            'text': '✔',
            'key': _0x722f34.key
          };
          const _0x4f40e8 = {
            'react': _0x300f96
          };
          await _0x20a8c2.sendMessage(_0x124a8f, _0x4f40e8);
        });
      } catch (_0x201c8e) {
        _0x30fc48(errt);
        _0x28511f(_0x201c8e);
      }
    });
    const _0x5e9dff = {
      'pattern': "bornpink",
      'filename': __filename
    };
    cmd(_0x5e9dff, async (_0x2ac353, _0x3a2129, _0x3b0d98, {
      from: _0x277afb,
      l: _0x3f685e,
      quoted: _0x14b3e5,
      body: _0x3346a7,
      isCmd: _0x6ca84d,
      command: _0x4426df,
      args: _0x44b1ab,
      q: _0x30d78b,
      isGroup: _0x3a96fe,
      sender: _0x5a4933,
      senderNumber: _0x419cb1,
      botNumber2: _0x2b1f7,
      botNumber: _0x8dae18,
      pushname: _0x43f427,
      isMe: _0x298065,
      isOwner: _0x193994,
      groupMetadata: _0x1e99b5,
      groupName: _0x1de73f,
      participants: _0x39d018,
      groupAdmins: _0x4f0a5e,
      isBotAdmins: _0x10bd7d,
      isAdmins: _0x8234b,
      reply: _0x43f8f6
    }) => {
      try {
        const _0x12c658 = {
          'text': '🎆',
          'key': _0x3a2129.key
        };
        const _0x4ca741 = {
          'react': _0x12c658
        };
        await _0x2ac353.sendMessage(_0x277afb, _0x4ca741);
        let _0x2bb9d6 = _0x30d78b.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-blackpink-s-born-pink-album-logo-online-779.html", ['' + _0x2bb9d6]).then(async _0x8ef5f4 => {
          const _0x4b5eec = {
            'quoted': _0x3a2129
          };
          await _0x2ac353.sendMessage(_0x277afb, {
            'image': await getBuffer(_0x8ef5f4.imageUrl),
            'caption': config.FOOTER
          }, _0x4b5eec);
          const _0x3575ad = {
            'text': '✔'
          };
          _0x3575ad.key = _0x3a2129.key;
          const _0x56aa8f = {
            'react': _0x3575ad
          };
          await _0x2ac353.sendMessage(_0x277afb, _0x56aa8f);
        });
      } catch (_0x3a2396) {
        _0x43f8f6(errt);
        _0x3f685e(_0x3a2396);
      }
    });
    const _0x21ad52 = {
      'pattern': "bulb",
      'filename': __filename
    };
    cmd(_0x21ad52, async (_0xacd3ea, _0x15b2c9, _0x184456, {
      from: _0x551633,
      l: _0x3cd090,
      quoted: _0x1204b2,
      body: _0x31f3ee,
      isCmd: _0x2de911,
      command: _0x4d5749,
      args: _0x5fd43,
      q: _0x21688c,
      isGroup: _0x3a25bf,
      sender: _0x260eb1,
      senderNumber: _0x26aff7,
      botNumber2: _0xabb749,
      botNumber: _0x3fee80,
      pushname: _0xca6a15,
      isMe: _0x39b96b,
      isOwner: _0x3e3852,
      groupMetadata: _0x385bf4,
      groupName: _0x54c4d1,
      participants: _0xf5e6a3,
      groupAdmins: _0x3e6c95,
      isBotAdmins: _0x53fdee,
      isAdmins: _0x5e753e,
      reply: _0x234a3d
    }) => {
      try {
        const _0x7d6de = {
          'text': '🎆',
          'key': _0x15b2c9.key
        };
        const _0x83991e = {
          'react': _0x7d6de
        };
        await _0xacd3ea.sendMessage(_0x551633, _0x83991e);
        let _0x5bc319 = _0x21688c.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html", ['' + _0x5bc319]).then(async _0x4e720c => {
          const _0x2bc7f9 = {
            'quoted': _0x15b2c9
          };
          await _0xacd3ea.sendMessage(_0x551633, {
            'image': await getBuffer(_0x4e720c.imageUrl),
            'caption': config.FOOTER
          }, _0x2bc7f9);
          const _0x15317a = {
            'text': '✔',
            'key': _0x15b2c9.key
          };
          const _0x527271 = {
            'react': _0x15317a
          };
          await _0xacd3ea.sendMessage(_0x551633, _0x527271);
        });
      } catch (_0x16cc95) {
        _0x234a3d(errt);
        _0x3cd090(_0x16cc95);
      }
    });
    const _0x476f00 = {
      'pattern': "glittergold",
      'filename': __filename
    };
    cmd(_0x476f00, async (_0x5e85b6, _0x1f8c84, _0x542956, {
      from: _0x50adf1,
      l: _0x49c1b2,
      quoted: _0x5ce72e,
      body: _0x146f08,
      isCmd: _0xa909c3,
      command: _0x5e53c4,
      args: _0x14fae7,
      q: _0x1b73ed,
      isGroup: _0x1c0009,
      sender: _0x3503f6,
      senderNumber: _0x2aa828,
      botNumber2: _0x147e30,
      botNumber: _0x117e1a,
      pushname: _0x541a94,
      isMe: _0x53cfa1,
      isOwner: _0x22e10a,
      groupMetadata: _0x28655f,
      groupName: _0x1e05b6,
      participants: _0x7b9f67,
      groupAdmins: _0x4bba51,
      isBotAdmins: _0x31be18,
      isAdmins: _0x7c11c2,
      reply: _0x95107a
    }) => {
      try {
        const _0x35a409 = {
          'text': '🎆',
          'key': _0x1f8c84.key
        };
        const _0x56c95a = {
          'react': _0x35a409
        };
        await _0x5e85b6.sendMessage(_0x50adf1, _0x56c95a);
        let _0x50457c = _0x1b73ed.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/glitter-gold-98.html", ['' + _0x50457c]).then(async _0x1ad734 => {
          const _0x4f7e2b = {
            'quoted': _0x1f8c84
          };
          await _0x5e85b6.sendMessage(_0x50adf1, {
            'image': await getBuffer(_0x1ad734.imageUrl),
            'caption': config.FOOTER
          }, _0x4f7e2b);
          const _0x35d969 = {
            'text': '✔',
            'key': _0x1f8c84.key
          };
          const _0x3a6c8e = {
            'react': _0x35d969
          };
          await _0x5e85b6.sendMessage(_0x50adf1, _0x3a6c8e);
        });
      } catch (_0x3e05f1) {
        _0x95107a(errt);
        _0x49c1b2(_0x3e05f1);
      }
    });
    const _0x1ab9db = {
      'pattern': 'airballoon',
      'filename': __filename
    };
    cmd(_0x1ab9db, async (_0x698b74, _0x1bde83, _0x46628f, {
      from: _0x47002e,
      l: _0x3ed977,
      quoted: _0x12f1b7,
      body: _0x564953,
      isCmd: _0x13e402,
      command: _0x52b139,
      args: _0x7ce181,
      q: _0x1b8af8,
      isGroup: _0x508da6,
      sender: _0x53f542,
      senderNumber: _0x331cbf,
      botNumber2: _0x10387a,
      botNumber: _0x7d79ef,
      pushname: _0x52a6cc,
      isMe: _0x145f52,
      isOwner: _0x195d21,
      groupMetadata: _0x5a7398,
      groupName: _0x53092a,
      participants: _0x5755e2,
      groupAdmins: _0x40ed01,
      isBotAdmins: _0x3f1f9e,
      isAdmins: _0x597c47,
      reply: _0x24dee0
    }) => {
      try {
        const _0x55270a = {
          'text': '🎆',
          'key': _0x1bde83.key
        };
        const _0x5d9101 = {
          'react': _0x55270a
        };
        await _0x698b74.sendMessage(_0x47002e, _0x5d9101);
        let _0x3f6c0e = _0x1b8af8.split('+');
        new Maker().Ephoto360('https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html', ['' + _0x3f6c0e]).then(async _0x4170c7 => {
          const _0xe45f84 = {
            'quoted': _0x1bde83
          };
          await _0x698b74.sendMessage(_0x47002e, {
            'image': await getBuffer(_0x4170c7.imageUrl),
            'caption': config.FOOTER
          }, _0xe45f84);
          const _0x254405 = {
            'text': '✔',
            'key': _0x1bde83.key
          };
          const _0x518a5e = {
            'react': _0x254405
          };
          await _0x698b74.sendMessage(_0x47002e, _0x518a5e);
        });
      } catch (_0x5a90df) {
        _0x24dee0(errt);
        _0x3ed977(_0x5a90df);
      }
    });
    const _0x573d81 = {
      'pattern': "comic",
      'filename': __filename
    };
    cmd(_0x573d81, async (_0x18a7e7, _0x5f4661, _0x5d3c34, {
      from: _0x3c869c,
      l: _0x36fdc5,
      quoted: _0x5095d6,
      body: _0x2a0b3e,
      isCmd: _0x4ee6d7,
      command: _0x730152,
      args: _0x529e24,
      q: _0x4eda8b,
      isGroup: _0x267a70,
      sender: _0xd3639d,
      senderNumber: _0x444151,
      botNumber2: _0x2d3e4e,
      botNumber: _0x5bc3f4,
      pushname: _0x1d7c83,
      isMe: _0x576ad7,
      isOwner: _0x2dd1b2,
      groupMetadata: _0x194e50,
      groupName: _0x5ac027,
      participants: _0xb405f7,
      groupAdmins: _0x2a2f05,
      isBotAdmins: _0x4e9ac9,
      isAdmins: _0x52b36c,
      reply: _0x43b300
    }) => {
      try {
        const _0x485d6d = {
          'text': '🎆',
          'key': _0x5f4661.key
        };
        const _0x3703cc = {
          'react': _0x485d6d
        };
        await _0x18a7e7.sendMessage(_0x3c869c, _0x3703cc);
        let _0x480122 = _0x4eda8b.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html", ['' + _0x480122]).then(async _0x4da2d7 => {
          const _0x1df235 = {
            'quoted': _0x5f4661
          };
          await _0x18a7e7.sendMessage(_0x3c869c, {
            'image': await getBuffer(_0x4da2d7.imageUrl),
            'caption': config.FOOTER
          }, _0x1df235);
          const _0x51c29a = {
            'text': '✔',
            'key': _0x5f4661.key
          };
          const _0x2449ad = {
            'react': _0x51c29a
          };
          await _0x18a7e7.sendMessage(_0x3c869c, _0x2449ad);
        });
      } catch (_0x1621c0) {
        _0x43b300(errt);
        _0x36fdc5(_0x1621c0);
      }
    });
    const _0x34ab85 = {
      'pattern': 'zombie3d',
      'filename': __filename
    };
    cmd(_0x34ab85, async (_0x5cc671, _0x475a24, _0x418d47, {
      from: _0x23316f,
      l: _0x42d941,
      quoted: _0x3218be,
      body: _0x204efd,
      isCmd: _0x17a46a,
      command: _0x6c56c5,
      args: _0x335041,
      q: _0x550881,
      isGroup: _0x32d396,
      sender: _0xd295f6,
      senderNumber: _0x2349c2,
      botNumber2: _0xe47563,
      botNumber: _0x412657,
      pushname: _0x1cb613,
      isMe: _0x38964f,
      isOwner: _0x430523,
      groupMetadata: _0x18d7fe,
      groupName: _0x33ba52,
      participants: _0x573bd6,
      groupAdmins: _0x119f64,
      isBotAdmins: _0x4b5b1e,
      isAdmins: _0x15dc66,
      reply: _0x4415e7
    }) => {
      try {
        const _0x1a95bb = {
          'text': '🎆',
          'key': _0x475a24.key
        };
        const _0x4082cf = {
          'react': _0x1a95bb
        };
        await _0x5cc671.sendMessage(_0x23316f, _0x4082cf);
        let _0x223294 = _0x550881.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/zombie-3d-text-effect-143.html", ['' + _0x223294]).then(async _0x10b872 => {
          const _0x5457db = {
            'quoted': _0x475a24
          };
          await _0x5cc671.sendMessage(_0x23316f, {
            'image': await getBuffer(_0x10b872.imageUrl),
            'caption': config.FOOTER
          }, _0x5457db);
          const _0xe077cb = {
            'text': '✔'
          };
          _0xe077cb.key = _0x475a24.key;
          const _0x5e3b04 = {
            'react': _0xe077cb
          };
          await _0x5cc671.sendMessage(_0x23316f, _0x5e3b04);
        });
      } catch (_0x5cdf36) {
        _0x4415e7(errt);
        _0x42d941(_0x5cdf36);
      }
    });
    const _0xa5b0f9 = {
      'pattern': "blackpink",
      'filename': __filename
    };
    cmd(_0xa5b0f9, async (_0x2bef24, _0x4d83ea, _0x3f4eac, {
      from: _0x306dcf,
      l: _0x5fe15e,
      quoted: _0x1556f2,
      body: _0x3c5594,
      isCmd: _0x3e7827,
      command: _0x3c7aed,
      args: _0x3caff7,
      q: _0x90536c,
      isGroup: _0x5157d3,
      sender: _0x1900df,
      senderNumber: _0x43c3ba,
      botNumber2: _0xff2692,
      botNumber: _0x3fd574,
      pushname: _0x313179,
      isMe: _0x247f83,
      isOwner: _0x1c2437,
      groupMetadata: _0x32d7e9,
      groupName: _0x337eff,
      participants: _0x2868a8,
      groupAdmins: _0x1ad46d,
      isBotAdmins: _0x5f0dd2,
      isAdmins: _0x1100b4,
      reply: _0x1a0e1f
    }) => {
      try {
        const _0x2a9fc5 = {
          'text': '🎆',
          'key': _0x4d83ea.key
        };
        const _0x21f544 = {
          'react': _0x2a9fc5
        };
        await _0x2bef24.sendMessage(_0x306dcf, _0x21f544);
        let _0x1f38d7 = _0x90536c.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html", ['' + _0x1f38d7]).then(async _0x32216e => {
          const _0x426603 = {
            'quoted': _0x4d83ea
          };
          await _0x2bef24.sendMessage(_0x306dcf, {
            'image': await getBuffer(_0x32216e.imageUrl),
            'caption': config.FOOTER
          }, _0x426603);
          const _0x540199 = {
            'text': '✔',
            'key': _0x4d83ea.key
          };
          const _0xdb20c5 = {
            'react': _0x540199
          };
          await _0x2bef24.sendMessage(_0x306dcf, _0xdb20c5);
        });
      } catch (_0xb08097) {
        _0x1a0e1f(errt);
        _0x5fe15e(_0xb08097);
      }
    });
    const _0xaeca5c = {
      'pattern': 'deadpool',
      'filename': __filename
    };
    cmd(_0xaeca5c, async (_0x5fcfb0, _0x391be9, _0x11576b, {
      from: _0x329449,
      l: _0x4dcd3f,
      quoted: _0x40ae86,
      body: _0x20d847,
      isCmd: _0x5b42fd,
      command: _0x40c42e,
      args: _0x22e69b,
      q: _0x54294b,
      isGroup: _0x738ccf,
      sender: _0x181c4c,
      senderNumber: _0x1f89e1,
      botNumber2: _0x5aa92d,
      botNumber: _0x19c5ef,
      pushname: _0x25cc1a,
      isMe: _0x42ef9d,
      isOwner: _0x2848f5,
      groupMetadata: _0x450cf7,
      groupName: _0x23dd69,
      participants: _0x297fbd,
      groupAdmins: _0x2ab32c,
      isBotAdmins: _0x139364,
      isAdmins: _0x149f9e,
      reply: _0x8c9317
    }) => {
      try {
        const _0x25c46a = {
          'text': '🎆',
          'key': _0x391be9.key
        };
        const _0x5dd5cc = {
          'react': _0x25c46a
        };
        await _0x5fcfb0.sendMessage(_0x329449, _0x5dd5cc);
        let _0xf62a13 = _0x54294b.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html", ['' + _0xf62a13]).then(async _0x5187ad => {
          const _0x42ee51 = {
            'quoted': _0x391be9
          };
          await _0x5fcfb0.sendMessage(_0x329449, {
            'image': await getBuffer(_0x5187ad.imageUrl),
            'caption': config.FOOTER
          }, _0x42ee51);
          const _0x270d4e = {
            'text': '✔'
          };
          _0x270d4e.key = _0x391be9.key;
          const _0x3e0dbb = {
            'react': _0x270d4e
          };
          await _0x5fcfb0.sendMessage(_0x329449, _0x3e0dbb);
        });
      } catch (_0x5ea3d9) {
        _0x8c9317(errt);
        _0x4dcd3f(_0x5ea3d9);
      }
    });
    const _0x42f419 = {
      'pattern': "wolf",
      'filename': __filename
    };
    cmd(_0x42f419, async (_0x4b595e, _0x3a1637, _0x5c89ed, {
      from: _0x40eba9,
      l: _0x1ee69e,
      quoted: _0x245fb8,
      body: _0x659f59,
      isCmd: _0x57976a,
      command: _0x390932,
      args: _0x4ac93c,
      q: _0x552fa9,
      isGroup: _0x258c62,
      sender: _0x1b1fcd,
      senderNumber: _0x22d1c9,
      botNumber2: _0x3d6f72,
      botNumber: _0x41da6e,
      pushname: _0x202994,
      isMe: _0x152f7b,
      isOwner: _0x44e9ac,
      groupMetadata: _0x4643a2,
      groupName: _0x5188ca,
      participants: _0x183e7f,
      groupAdmins: _0x3ca781,
      isBotAdmins: _0xa3737f,
      isAdmins: _0x43d0f9,
      reply: _0x3d5d0b
    }) => {
      try {
        const _0x43cad7 = {
          'text': '🎆',
          'key': _0x3a1637.key
        };
        const _0x4f50ae = {
          'react': _0x43cad7
        };
        await _0x4b595e.sendMessage(_0x40eba9, _0x4f50ae);
        let _0x5b3d9c = _0x552fa9.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-logo-avatar-wolf-galaxy-online-366.html", ['' + _0x5b3d9c]).then(async _0x4fd716 => {
          const _0x50f75a = {
            'quoted': _0x3a1637
          };
          await _0x4b595e.sendMessage(_0x40eba9, {
            'image': await getBuffer(_0x4fd716.imageUrl),
            'caption': config.FOOTER
          }, _0x50f75a);
          const _0x399038 = {
            'text': '✔',
            'key': _0x3a1637.key
          };
          const _0x284b40 = {
            'react': _0x399038
          };
          await _0x4b595e.sendMessage(_0x40eba9, _0x284b40);
        });
      } catch (_0x497791) {
        _0x3d5d0b(errt);
        _0x1ee69e(_0x497791);
      }
    });
    const _0x283692 = {
      'pattern': "3dwooden",
      'filename': __filename
    };
    cmd(_0x283692, async (_0x38afe3, _0x370301, _0x755a42, {
      from: _0x39a33a,
      l: _0x5c3436,
      quoted: _0x28e045,
      body: _0x276666,
      isCmd: _0x165909,
      command: _0x5abbf3,
      args: _0x3356c6,
      q: _0x295102,
      isGroup: _0x57d6db,
      sender: _0x199853,
      senderNumber: _0x5020b8,
      botNumber2: _0x6091b2,
      botNumber: _0x2d36f0,
      pushname: _0x885878,
      isMe: _0x312ac0,
      isOwner: _0x2c267d,
      groupMetadata: _0x4e53d9,
      groupName: _0x21e6ef,
      participants: _0x6ae3ad,
      groupAdmins: _0x357846,
      isBotAdmins: _0x38b610,
      isAdmins: _0x5107bb,
      reply: _0x2d33d6
    }) => {
      try {
        const _0x3166ee = {
          'text': '🎆',
          'key': _0x370301.key
        };
        const _0x201f30 = {
          'react': _0x3166ee
        };
        await _0x38afe3.sendMessage(_0x39a33a, _0x201f30);
        let _0x58bb46 = _0x295102.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/logo-viettel-156.html", ['' + _0x58bb46]).then(async _0xbea063 => {
          const _0x390e42 = {
            'quoted': _0x370301
          };
          await _0x38afe3.sendMessage(_0x39a33a, {
            'image': await getBuffer(_0xbea063.imageUrl),
            'caption': config.FOOTER
          }, _0x390e42);
          const _0x130e09 = {
            'text': '✔',
            'key': _0x370301.key
          };
          const _0x5b3287 = {
            'react': _0x130e09
          };
          await _0x38afe3.sendMessage(_0x39a33a, _0x5b3287);
        });
      } catch (_0x7b746) {
        _0x2d33d6(errt);
        _0x5c3436(_0x7b746);
      }
    });
    const _0x55c9c5 = {
      'pattern': "banner",
      'alias': ['ytbanner', 'cover', 'channelbanner'],
      'desc': desc2,
      'category': 'logo',
      'use': ".banner X-BYTE+Hamza",
      'filename': __filename
    };
    cmd(_0x55c9c5, async (_0x599b3a, _0x3f6a68, _0x3ea6e6, {
      from: _0x4a6255,
      l: _0x11ed99,
      quoted: _0x1b5f6b,
      body: _0x123db7,
      isCmd: _0x717d18,
      command: _0x55fc4d,
      args: _0x3dd3e5,
      q: _0x40ce88,
      isGroup: _0x1c98ae,
      sender: _0x4fc745,
      senderNumber: _0x12ef36,
      botNumber2: _0x34978e,
      botNumber: _0x4b2dd5,
      pushname: _0x166306,
      isMe: _0x490212,
      isOwner: _0x108a12,
      groupMetadata: _0xc68c72,
      groupName: _0x4a64bf,
      participants: _0x1024f0,
      groupAdmins: _0x4427c0,
      isBotAdmins: _0x288d78,
      isAdmins: _0x199df8,
      reply: _0x4a596d
    }) => {
      try {
        const _0x28fdea = {
          'text': '🎆',
          'key': _0x3f6a68.key
        };
        const _0x48427f = {
          'react': _0x28fdea
        };
        await _0x599b3a.sendMessage(_0x4a6255, _0x48427f);
        if (!_0x40ce88.includes('+')) {
          return await _0x4a596d(imgmsg2);
        }
        let [_0xdb11bd, _0x534cfe] = _0x40ce88.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", ['' + _0xdb11bd, '' + _0x534cfe]).then(async _0x208c06 => {
          const _0x3aff77 = {
            'quoted': _0x3f6a68
          };
          await _0x599b3a.sendMessage(_0x4a6255, {
            'image': await getBuffer(_0x208c06.imageUrl),
            'caption': config.FOOTER
          }, _0x3aff77);
          const _0x4a691e = {
            'text': '✔'
          };
          _0x4a691e.key = _0x3f6a68.key;
          const _0x156526 = {
            'react': _0x4a691e
          };
          await _0x599b3a.sendMessage(_0x4a6255, _0x156526);
        });
      } catch (_0xac8302) {
        _0x4a596d(errt);
        _0x11ed99(_0xac8302);
      }
    });
    const _0x33ca0 = {
      'pattern': "banner2",
      'alias': ["ytbanner2", "cover2", "channelbanner2"],
      'desc': desc2,
      'category': "logo",
      'use': ".banner2 X-BYTE+Hamza",
      'filename': __filename
    };
    cmd(_0x33ca0, async (_0x25bfdd, _0xd70de0, _0x3d7c09, {
      from: _0x155fb6,
      l: _0x21e636,
      quoted: _0x16b1d5,
      body: _0x2d0c8d,
      isCmd: _0x183f9d,
      command: _0x569995,
      args: _0x362c33,
      q: _0xb84e80,
      isGroup: _0x206b8d,
      sender: _0x4791e0,
      senderNumber: _0xde15d4,
      botNumber2: _0x15eeed,
      botNumber: _0x1b3b94,
      pushname: _0x475454,
      isMe: _0x3a7543,
      isOwner: _0x36e7e5,
      groupMetadata: _0x5c8a7a,
      groupName: _0x23ab6f,
      participants: _0x1d6ed8,
      groupAdmins: _0x224f54,
      isBotAdmins: _0x2a05b5,
      isAdmins: _0x5427ca,
      reply: _0x53f5ff
    }) => {
      try {
        const _0x29e093 = {
          'text': '🎆',
          'key': _0xd70de0.key
        };
        const _0x20d3d8 = {
          'react': _0x29e093
        };
        await _0x25bfdd.sendMessage(_0x155fb6, _0x20d3d8);
        if (!_0xb84e80.includes('+')) {
          return await _0x53f5ff(imgmsg3);
        }
        let [_0x382317, _0x14eb48] = _0xb84e80.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", ['' + _0x382317, '' + _0x14eb48]).then(async _0x44d690 => {
          const _0x41dc58 = {
            'quoted': _0xd70de0
          };
          await _0x25bfdd.sendMessage(_0x155fb6, {
            'image': await getBuffer(_0x44d690.imageUrl),
            'caption': config.FOOTER
          }, _0x41dc58);
          const _0x4454b4 = {
            'text': '✔'
          };
          _0x4454b4.key = _0xd70de0.key;
          const _0x32b5ce = {
            'react': _0x4454b4
          };
          await _0x25bfdd.sendMessage(_0x155fb6, _0x32b5ce);
        });
      } catch (_0x5efc5c) {
        _0x53f5ff(errt);
        _0x21e636(_0x5efc5c);
      }
    });
    const _0x1b30e0 = {
      'pattern': "banner3",
      'alias': ["ytbanner3", "cover3", "channelbanner3"],
      'desc': desc2,
      'category': "logo",
      'use': ".banner3 X-BYTE+Hamza",
      'filename': __filename
    };
    cmd(_0x1b30e0, async (_0x2e9895, _0x2a6041, _0x38e79e, {
      from: _0x217c8e,
      l: _0x5723b4,
      quoted: _0x40297d,
      body: _0x38d91f,
      isCmd: _0x3dc5ca,
      command: _0x212ffb,
      args: _0x97ab3e,
      q: _0x35042a,
      isGroup: _0x11de96,
      sender: _0x1b96c6,
      senderNumber: _0xb4bc21,
      botNumber2: _0x1b6d40,
      botNumber: _0x530f8c,
      pushname: _0xec751e,
      isMe: _0x3e2224,
      isOwner: _0x1d6f65,
      groupMetadata: _0x5df068,
      groupName: _0x26892a,
      participants: _0x8ea779,
      groupAdmins: _0x24fed0,
      isBotAdmins: _0x4f410d,
      isAdmins: _0xf2295a,
      reply: _0x1e07c3
    }) => {
      try {
        const _0x41da5d = {
          'text': '🎆',
          'key': _0x2a6041.key
        };
        const _0x9377 = {
          'react': _0x41da5d
        };
        await _0x2e9895.sendMessage(_0x217c8e, _0x9377);
        if (!_0x35042a.includes('+')) {
          return await _0x1e07c3(imgmsg4);
        }
        let [_0x3dbbdf, _0x2f0340] = _0x35042a.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-a-youtube-banner-game-of-pubg-cool-402.html", ['' + _0x3dbbdf, '' + _0x2f0340]).then(async _0x443e78 => {
          const _0xc7801f = {
            'quoted': _0x2a6041
          };
          await _0x2e9895.sendMessage(_0x217c8e, {
            'image': await getBuffer(_0x443e78.imageUrl),
            'caption': config.FOOTER
          }, _0xc7801f);
          const _0x4a93f5 = {
            'text': '✔'
          };
          _0x4a93f5.key = _0x2a6041.key;
          const _0x562ab5 = {
            'react': _0x4a93f5
          };
          await _0x2e9895.sendMessage(_0x217c8e, _0x562ab5);
        });
      } catch (_0x60f430) {
        _0x1e07c3(errt);
        _0x5723b4(_0x60f430);
      }
    });
    const _0x1a031d = {
      'pattern': 'banner4',
      'alias': ["ytbanner4", 'cover4', 'channelbanner4'],
      'desc': desc2,
      'category': 'logo',
      'use': ".banner4 X-BYTE+Hamza",
      'filename': __filename
    };
    cmd(_0x1a031d, async (_0x1a7e52, _0x95c11b, _0x118f04, {
      from: _0x424115,
      l: _0x36376b,
      quoted: _0xc102f,
      body: _0x23e167,
      isCmd: _0x360282,
      command: _0x147f88,
      args: _0x52b8ce,
      q: _0x5b445b,
      isGroup: _0x2f0ce8,
      sender: _0x17eb7b,
      senderNumber: _0x3c3f93,
      botNumber2: _0x529535,
      botNumber: _0x5a231d,
      pushname: _0xe14971,
      isMe: _0x2ef73e,
      isOwner: _0x4a7e8f,
      groupMetadata: _0x5b851,
      groupName: _0x208bc3,
      participants: _0x4b28ea,
      groupAdmins: _0x108625,
      isBotAdmins: _0x1fb1e0,
      isAdmins: _0xc427b3,
      reply: _0x439a3c
    }) => {
      try {
        const _0x3d1f73 = {
          'text': '🎆',
          'key': _0x95c11b.key
        };
        const _0x55910f = {
          'react': _0x3d1f73
        };
        await _0x1a7e52.sendMessage(_0x424115, _0x55910f);
        if (!_0x5b445b.includes('+')) {
          return await _0x439a3c(imgmsg5);
        }
        let [_0x471519, _0x32871b] = _0x5b445b.split('+');
        new Maker().Ephoto360('https://en.ephoto360.com/create-call-of-duty-warzone-youtube-banner-online-548.html', ['' + _0x471519, '' + _0x32871b]).then(async _0x4c50d2 => {
          const _0x30d737 = {
            'quoted': _0x95c11b
          };
          await _0x1a7e52.sendMessage(_0x424115, {
            'image': await getBuffer(_0x4c50d2.imageUrl),
            'caption': config.FOOTER
          }, _0x30d737);
          const _0x41f9fd = {
            'text': '✔',
            'key': _0x95c11b.key
          };
          const _0xad4aac = {
            'react': _0x41f9fd
          };
          await _0x1a7e52.sendMessage(_0x424115, _0xad4aac);
        });
      } catch (_0x58f73e) {
        _0x439a3c(errt);
        _0x36376b(_0x58f73e);
      }
    });
    const _0x648606 = {
      'pattern': "banner5",
      'alias': ["ytbanner5", "cover5", "channelbanner5"],
      'desc': desc2,
      'category': "logo",
      'use': ".banner5 X-BYTE+Hamza",
      'filename': __filename
    };
    cmd(_0x648606, async (_0x1f175e, _0x215ed2, _0x12557a, {
      from: _0x5cafb6,
      l: _0x3fb9be,
      quoted: _0x1f6d0f,
      body: _0x418d1a,
      isCmd: _0x1bf6b2,
      command: _0x102696,
      args: _0x5633e1,
      q: _0xf535de,
      isGroup: _0x144838,
      sender: _0x34bf91,
      senderNumber: _0x5d9151,
      botNumber2: _0x2797d3,
      botNumber: _0x5daea2,
      pushname: _0x3aff07,
      isMe: _0x5d450a,
      isOwner: _0x3e6536,
      groupMetadata: _0x24eaeb,
      groupName: _0x3d2b4e,
      participants: _0x426440,
      groupAdmins: _0x1b74aa,
      isBotAdmins: _0x20eca3,
      isAdmins: _0x5f172b,
      reply: _0x5514d7
    }) => {
      try {
        const _0x4d2d62 = {
          'text': '🎆',
          'key': _0x215ed2.key
        };
        const _0x10af27 = {
          'react': _0x4d2d62
        };
        await _0x1f175e.sendMessage(_0x5cafb6, _0x10af27);
        if (!_0xf535de.includes('+')) {
          return await _0x5514d7(imgmsg6);
        }
        let [_0xb36458, _0x420eed] = _0xf535de.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-banner-youtube-game-apex-legend-online-406.html", ['' + _0xb36458, '' + _0x420eed]).then(async _0x5824d1 => {
          const _0x28093c = {
            'quoted': _0x215ed2
          };
          await _0x1f175e.sendMessage(_0x5cafb6, {
            'image': await getBuffer(_0x5824d1.imageUrl),
            'caption': config.FOOTER
          }, _0x28093c);
          const _0x239b25 = {
            'text': '✔',
            'key': _0x215ed2.key
          };
          const _0x3bd4ce = {
            'react': _0x239b25
          };
          await _0x1f175e.sendMessage(_0x5cafb6, _0x3bd4ce);
        });
      } catch (_0xfb3905) {
        _0x5514d7(errt);
        _0x3fb9be(_0xfb3905);
      }
    });
    const _0x3b433e = {
      'pattern': "naruto",
      'react': "🏜️",
      'alias': ["textpro1"],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': '.naruto',
      'filename': __filename
    };
    cmd(_0x3b433e, async (_0x1bbe28, _0x55722d, _0x169340, {
      from: _0x193ad9,
      l: _0x3ff905,
      quoted: _0x2b9cbe,
      body: _0x30a4d6,
      isCmd: _0xff5ed5,
      command: _0x272fd4,
      args: _0x520404,
      q: _0x3158a2,
      isGroup: _0x1bb6a5,
      sender: _0x383ce2,
      senderNumber: _0x2d88e1,
      botNumber2: _0x5e6f6d,
      botNumber: _0x51daf8,
      pushname: _0x5855b8,
      isMe: _0x4b5fd2,
      isOwner: _0xbd8e47,
      groupMetadata: _0x113228,
      groupName: _0x41b0df,
      participants: _0x1a3cd3,
      groupAdmins: _0x2ce4b6,
      isBotAdmins: _0x2c36bb,
      isCreator: _0x3597d7,
      isDev: _0x5b07b5,
      isAdmins: _0x3f0b58,
      reply: _0x2a62e6
    }) => {
      try {
        if (!_0x3158a2) {
          return _0x2a62e6("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x158a8a = await mumaker.textpro("https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html", _0x3158a2);
        const _0x4141ab = {
          'url': _0x158a8a.image
        };
        const _0x7ee3ff = {
          'image': _0x4141ab,
          'caption': "\n🗾 *Link - https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x390a1c = {
          'quoted': _0x55722d
        };
        await _0x1bbe28.sendMessage(_0x193ad9, _0x7ee3ff, _0x390a1c);
      } catch (_0x2a802c) {
        _0x2a62e6("⛔ *Error !!*" + _0x2a802c);
        _0x3ff905(_0x2a802c);
      }
    });
    const _0x5089c8 = {
      'pattern': "rose",
      'react': '🏜️',
      'alias': ['textpro2'],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': ".rose",
      'filename': __filename
    };
    cmd(_0x5089c8, async (_0x3d37f0, _0x2fa768, _0xc5a15d, {
      from: _0x15416a,
      l: _0xe00ecd,
      quoted: _0x400f89,
      body: _0x17bd8f,
      isCmd: _0x5bd05c,
      command: _0x12fb67,
      args: _0x9d818b,
      q: _0x34a9c8,
      isGroup: _0x13a895,
      sender: _0x336528,
      senderNumber: _0x3ee256,
      botNumber2: _0x1d1a73,
      botNumber: _0x10506e,
      pushname: _0x581181,
      isMe: _0xb5945,
      isOwner: _0x5a26ee,
      groupMetadata: _0xd754ee,
      groupName: _0x432e37,
      participants: _0x257cad,
      groupAdmins: _0x571bf2,
      isBotAdmins: _0x221349,
      isCreator: _0x1d47af,
      isDev: _0x23e6bb,
      isAdmins: _0xd1aa72,
      reply: _0x5cfcaa
    }) => {
      try {
        if (!_0x34a9c8) {
          return _0x5cfcaa("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x189d38 = await mumaker.textpro("https://textpro.me/create-online-elegant-3d-ruby-text-effect-1137.html", _0x34a9c8);
        const _0x10338d = {
          'url': _0x189d38.image
        };
        const _0x13371c = {
          'image': _0x10338d,
          'caption': "\n🗾 *Link - https://textpro.me/create-online-elegant-3d-ruby-text-effect-1137.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ  ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x18f179 = {
          'quoted': _0x2fa768
        };
        await _0x3d37f0.sendMessage(_0x15416a, _0x13371c, _0x18f179);
      } catch (_0x55123e) {
        _0x5cfcaa("⛔ *Error !!*" + _0x55123e);
        _0xe00ecd(_0x55123e);
      }
    });
    const _0x3ce34b = {
      'pattern': "cake",
      'react': "🏜️",
      'alias': ["textpro3"],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': ".cake",
      'filename': __filename
    };
    cmd(_0x3ce34b, async (_0x2394d5, _0x43f9c7, _0x381d3f, {
      from: _0x462ee9,
      l: _0x700e9f,
      quoted: _0x5a534d,
      body: _0x2aa58b,
      isCmd: _0x1d956,
      command: _0x1c1d72,
      args: _0x4cd141,
      q: _0x4d2a86,
      isGroup: _0x1a5574,
      sender: _0xbed759,
      senderNumber: _0x722729,
      botNumber2: _0x496e43,
      botNumber: _0x241225,
      pushname: _0x21ffd0,
      isMe: _0x3ad058,
      isOwner: _0x26b59c,
      groupMetadata: _0x5508c9,
      groupName: _0x4d457d,
      participants: _0x416e9a,
      groupAdmins: _0x34d438,
      isBotAdmins: _0x2eb529,
      isCreator: _0x34207e,
      isDev: _0x58dab7,
      isAdmins: _0x5d0f3d,
      reply: _0xf85f58
    }) => {
      try {
        if (!_0x4d2a86) {
          return _0xf85f58("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x3437be = await mumaker.textpro('https://textpro.me/create-3d-chocolate-cake-text-effect-online-1135.html', _0x4d2a86);
        const _0x2f120d = {
          'url': _0x3437be.image
        };
        const _0x2428d9 = {
          'image': _0x2f120d,
          'caption': "\n🗾 *Link - https://textpro.me/create-3d-chocolate-cake-text-effect-online-1135.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x186150 = {
          'quoted': _0x43f9c7
        };
        await _0x2394d5.sendMessage(_0x462ee9, _0x2428d9, _0x186150);
      } catch (_0xf3aaf7) {
        _0xf85f58("⛔ *Error !!*" + _0xf3aaf7);
        _0x700e9f(_0xf3aaf7);
      }
    });
    const _0x1c2e88 = {
      'pattern': "pokn",
      'react': '🏜️',
      'alias': ["textpro4"],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': ".pokn",
      'filename': __filename
    };
    cmd(_0x1c2e88, async (_0xef7b5c, _0x408849, _0x133784, {
      from: _0x5b41d4,
      l: _0x76bb6d,
      quoted: _0x143e27,
      body: _0x5c3e21,
      isCmd: _0x5da086,
      command: _0x1805f4,
      args: _0x130f68,
      q: _0x79b57,
      isGroup: _0x2dc9e0,
      sender: _0x29a99e,
      senderNumber: _0xeb896c,
      botNumber2: _0x1b7e50,
      botNumber: _0x2035bf,
      pushname: _0x40f663,
      isMe: _0x33b381,
      isOwner: _0x437adc,
      groupMetadata: _0x14410a,
      groupName: _0x5c08d5,
      participants: _0x563651,
      groupAdmins: _0x4de6a7,
      isBotAdmins: _0x28c3c1,
      isCreator: _0xbe9736,
      isDev: _0x294124,
      isAdmins: _0x1cdea5,
      reply: _0x4711e3
    }) => {
      try {
        if (!_0x79b57) {
          return _0x4711e3("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x4a42fe = await mumaker.textpro("https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html", _0x79b57);
        const _0x300c4d = {
          'url': _0x4a42fe.image
        };
        const _0x57c4c0 = {
          'image': _0x300c4d,
          'caption': "\n🗾 *Link - https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x2041a2 = {
          'quoted': _0x408849
        };
        await _0xef7b5c.sendMessage(_0x5b41d4, _0x57c4c0, _0x2041a2);
      } catch (_0x1f6617) {
        _0x4711e3("⛔ *Error !!*" + _0x1f6617);
        _0x76bb6d(_0x1f6617);
      }
    });
    const _0x28e856 = {
      'pattern': "liud",
      'react': "🏜️",
      'alias': ['textpro5'],
      'desc': "Text to Image Collection",
      'category': 'logo',
      'use': ".liud",
      'filename': __filename
    };
    cmd(_0x28e856, async (_0x43f905, _0xbb33e7, _0x358754, {
      from: _0x446415,
      l: _0x46fdca,
      quoted: _0x1a016d,
      body: _0x285929,
      isCmd: _0x1002d9,
      command: _0x59adb4,
      args: _0x28e4fd,
      q: _0x3d281f,
      isGroup: _0xac370e,
      sender: _0x23e885,
      senderNumber: _0x518525,
      botNumber2: _0x2cba77,
      botNumber: _0x3b963b,
      pushname: _0x5b16d3,
      isMe: _0x46f6c5,
      isOwner: _0x43bf1b,
      groupMetadata: _0xcc786e,
      groupName: _0x4a6e43,
      participants: _0x2c9d51,
      groupAdmins: _0x4a8731,
      isBotAdmins: _0x17822e,
      isCreator: _0x2cfc5c,
      isDev: _0x419002,
      isAdmins: _0x315002,
      reply: _0x27e9d1
    }) => {
      try {
        if (!_0x3d281f) {
          return _0x27e9d1("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x2107fa = await mumaker.textpro("https://textpro.me/create-3d-liquid-metal-text-effect-1112.html", _0x3d281f);
        const _0x50a3db = {
          'url': _0x2107fa.image
        };
        const _0x3ce48d = {
          'image': _0x50a3db,
          'caption': "\n🗾 *Link - https://textpro.me/create-3d-liquid-metal-text-effect-1112.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x40bed5 = {
          'quoted': _0xbb33e7
        };
        await _0x43f905.sendMessage(_0x446415, _0x3ce48d, _0x40bed5);
      } catch (_0x12b9f2) {
        _0x27e9d1("⛔ *Error !!*" + _0x12b9f2);
        _0x46fdca(_0x12b9f2);
      }
    });
    const _0x3f1ceb = {
      'pattern': "rusty",
      'react': "🏜️",
      'alias': ["textpro6"],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': ".rusty",
      'filename': __filename
    };
    cmd(_0x3f1ceb, async (_0x3ab610, _0x408d34, _0x46b4cb, {
      from: _0x4b0ac0,
      l: _0x4d7f12,
      quoted: _0xe4b09a,
      body: _0x3bf9f4,
      isCmd: _0x9ab7fe,
      command: _0x40bc3b,
      args: _0xf77449,
      q: _0x37b3ac,
      isGroup: _0x4e462d,
      sender: _0x561016,
      senderNumber: _0x2d21d8,
      botNumber2: _0x5ee54e,
      botNumber: _0x3fd080,
      pushname: _0x4654b8,
      isMe: _0x4b9404,
      isOwner: _0x4b45ff,
      groupMetadata: _0x1a55ae,
      groupName: _0x3bfb96,
      participants: _0x247ac6,
      groupAdmins: _0xa42fa8,
      isBotAdmins: _0x550ef9,
      isCreator: _0x178f4f,
      isDev: _0x2fc619,
      isAdmins: _0x631eca,
      reply: _0x1acabe
    }) => {
      try {
        if (!_0x37b3ac) {
          return _0x1acabe("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x478bd2 = await mumaker.textpro('https://textpro.me/online-3d-rusty-metal-text-effect-maker-1133.html', _0x37b3ac);
        const _0x589f76 = {
          'url': _0x478bd2.image
        };
        const _0x22a3db = {
          'image': _0x589f76,
          'caption': "\n🗾 *Link - https://textpro.me/online-3d-rusty-metal-text-effect-maker-1133.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ**"
        };
        const _0x318eaf = {
          'quoted': _0x408d34
        };
        await _0x3ab610.sendMessage(_0x4b0ac0, _0x22a3db, _0x318eaf);
      } catch (_0x2d8d28) {
        _0x1acabe("⛔ *Error !!*" + _0x2d8d28);
        _0x4d7f12(_0x2d8d28);
      }
    });
    const _0xec598 = {
      'pattern': "frid",
      'react': "🏜️",
      'alias': ["textpro7"],
      'desc': "Text to Image Collection",
      'category': 'logo',
      'use': ".frid",
      'filename': __filename
    };
    cmd(_0xec598, async (_0xb3a534, _0x2bd818, _0x3f348a, {
      from: _0x284098,
      l: _0x381060,
      quoted: _0x5030c2,
      body: _0x196175,
      isCmd: _0x1b90f2,
      command: _0x28cd96,
      args: _0x3f4df6,
      q: _0x40ce53,
      isGroup: _0x12963e,
      sender: _0x36c53e,
      senderNumber: _0x53183e,
      botNumber2: _0x45115d,
      botNumber: _0x33e6bf,
      pushname: _0x540b45,
      isMe: _0x1f9e7c,
      isOwner: _0x7c27c7,
      groupMetadata: _0x1b05ab,
      groupName: _0x5378c0,
      participants: _0x3163ef,
      groupAdmins: _0x570f1f,
      isBotAdmins: _0x20a009,
      isCreator: _0x5a62bf,
      isDev: _0x492423,
      isAdmins: _0x5a78e3,
      reply: _0x50d578
    }) => {
      try {
        if (!_0x40ce53) {
          return _0x50d578("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x517f20 = await mumaker.textpro("https://textpro.me/neon-light-style-3d-text-effect-online-1132.html", _0x40ce53);
        const _0x533491 = {
          'url': _0x517f20.image
        };
        const _0x5ed088 = {
          'image': _0x533491,
          'caption': "\n🗾 *Link - https://textpro.me/neon-light-style-3d-text-effect-online-1132.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x56686f = {
          'quoted': _0x2bd818
        };
        await _0xb3a534.sendMessage(_0x284098, _0x5ed088, _0x56686f);
      } catch (_0x4fa57a) {
        _0x50d578("⛔ *Error !!*" + _0x4fa57a);
        _0x381060(_0x4fa57a);
      }
    });
    const _0x413cea = {
      'pattern': 'pink',
      'react': "🏜️",
      'alias': ["textpro8"],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': ".pink",
      'filename': __filename
    };
    cmd(_0x413cea, async (_0x5b0bed, _0x3d924f, _0x277335, {
      from: _0x309842,
      l: _0x3ee072,
      quoted: _0x6d7a51,
      body: _0x51f21f,
      isCmd: _0x47484a,
      command: _0x840708,
      args: _0x6482c7,
      q: _0x5bbf74,
      isGroup: _0x13953c,
      sender: _0x11db9f,
      senderNumber: _0x4e0a06,
      botNumber2: _0x894bba,
      botNumber: _0x19739d,
      pushname: _0x2d8102,
      isMe: _0x16ed08,
      isOwner: _0x3f1485,
      groupMetadata: _0x5b8160,
      groupName: _0x4b60d2,
      participants: _0x55d286,
      groupAdmins: _0x759ced,
      isBotAdmins: _0x5d43a2,
      isCreator: _0x16bab7,
      isDev: _0x214f24,
      isAdmins: _0x36235d,
      reply: _0x432aec
    }) => {
      try {
        if (!_0x5bbf74) {
          return _0x432aec("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x4f9d7a = await mumaker.textpro("https://textpro.me/create-pink-cute-3d-cartoon-text-effect-online-1131.html", _0x5bbf74);
        const _0x71aee0 = {
          'url': _0x4f9d7a.image
        };
        const _0x5922ec = {
          'image': _0x71aee0,
          'caption': "\n🗾 *Link - https://textpro.me/create-pink-cute-3d-cartoon-text-effect-online-1131.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x2ce6c2 = {
          'quoted': _0x3d924f
        };
        await _0x5b0bed.sendMessage(_0x309842, _0x5922ec, _0x2ce6c2);
      } catch (_0x5d353d) {
        _0x432aec("⛔ *Error !!*" + _0x5d353d);
        _0x3ee072(_0x5d353d);
      }
    });
    const _0x3c5841 = {
      'pattern': "drag",
      'react': "🏜️",
      'alias': ["textpro9"],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': ".drag",
      'filename': __filename
    };
    cmd(_0x3c5841, async (_0x4758b6, _0x2af6cd, _0xadc343, {
      from: _0x388dd8,
      l: _0x66d18a,
      quoted: _0x45e9a8,
      body: _0x511ae9,
      isCmd: _0x33d1db,
      command: _0xc6b1cf,
      args: _0x3298ad,
      q: _0x213e20,
      isGroup: _0x5c2ea2,
      sender: _0x4d1541,
      senderNumber: _0x5c4f88,
      botNumber2: _0x8f48bf,
      botNumber: _0x5d7cbe,
      pushname: _0x4d41dd,
      isMe: _0x3614c0,
      isOwner: _0x13a179,
      groupMetadata: _0x462578,
      groupName: _0x46ca5e,
      participants: _0x55919d,
      groupAdmins: _0x37f110,
      isBotAdmins: _0x48d88f,
      isCreator: _0x31f450,
      isDev: _0x3ac7fa,
      isAdmins: _0x3f4794,
      reply: _0x311d1a
    }) => {
      try {
        if (!_0x213e20) {
          return _0x311d1a("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x4fc105 = await mumaker.textpro('https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html', _0x213e20);
        const _0x354a16 = {
          'url': _0x4fc105.image
        };
        const _0x461f8b = {
          'image': _0x354a16,
          'caption': "\n🗾 *Link - https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x4bd2e9 = {
          'quoted': _0x2af6cd
        };
        await _0x4758b6.sendMessage(_0x388dd8, _0x461f8b, _0x4bd2e9);
      } catch (_0x455a1b) {
        _0x311d1a("⛔ *Error !!*" + _0x455a1b);
        _0x66d18a(_0x455a1b);
      }
    });
    const _0x4a09b4 = {
      'pattern': "sumr",
      'react': '🏜️',
      'alias': ['textpro10'],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': ".sumr",
      'filename': __filename
    };
    cmd(_0x4a09b4, async (_0x2101a6, _0x169096, _0x3b83c3, {
      from: _0x2b61c9,
      l: _0x418f0b,
      quoted: _0x636e5c,
      body: _0x424e82,
      isCmd: _0x376c6d,
      command: _0x12c386,
      args: _0x339637,
      q: _0xac4691,
      isGroup: _0x283602,
      sender: _0x3f63db,
      senderNumber: _0x153fe1,
      botNumber2: _0x2bbc37,
      botNumber: _0x12a957,
      pushname: _0x5a7554,
      isMe: _0x45b5d9,
      isOwner: _0x35526c,
      groupMetadata: _0x431b5e,
      groupName: _0x12958e,
      participants: _0x3f4fd1,
      groupAdmins: _0xed7886,
      isBotAdmins: _0xf5df84,
      isCreator: _0x59e0cb,
      isDev: _0x1ca3e8,
      isAdmins: _0x12aaa6,
      reply: _0x12864c
    }) => {
      try {
        if (!_0xac4691) {
          return _0x12864c("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x23550c = await mumaker.textpro("https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html", _0xac4691);
        const _0x5bf78d = {
          'url': _0x23550c.image
        };
        const _0x441466 = {
          'image': _0x5bf78d,
          'caption': "\n🗾 *Link - https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x177b35 = {
          'quoted': _0x169096
        };
        await _0x2101a6.sendMessage(_0x2b61c9, _0x441466, _0x177b35);
      } catch (_0x1edb49) {
        _0x12864c("⛔ *Error !!*" + _0x1edb49);
        _0x418f0b(_0x1edb49);
      }
    });
    const _0x1a28d3 = {
      'pattern': 'cart',
      'react': '🏜️',
      'alias': ["textpro11"],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': ".cart",
      'filename': __filename
    };
    cmd(_0x1a28d3, async (_0x1d01db, _0x61f958, _0x277026, {
      from: _0x1145a9,
      l: _0x45bf18,
      quoted: _0x3f7ab7,
      body: _0x3d286f,
      isCmd: _0x108b11,
      command: _0x8a7d88,
      args: _0xc516f0,
      q: _0x1aaf70,
      isGroup: _0x2d8cb6,
      sender: _0x1f30e1,
      senderNumber: _0x1c5735,
      botNumber2: _0x43884f,
      botNumber: _0x16dd95,
      pushname: _0x526c88,
      isMe: _0x497ea8,
      isOwner: _0x50664f,
      groupMetadata: _0x29e0d8,
      groupName: _0x30bd9a,
      participants: _0x333a9d,
      groupAdmins: _0x21c7d1,
      isBotAdmins: _0x4e3052,
      isCreator: _0x5d9bb3,
      isDev: _0x56f4bc,
      isAdmins: _0x27906d,
      reply: _0x54a717
    }) => {
      try {
        if (!_0x1aaf70) {
          return _0x54a717("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x42a5f8 = await mumaker.textpro('https://textpro.me/create-3d-cartoon-text-effect-online-1120.html', _0x1aaf70);
        const _0xef1919 = {
          'url': _0x42a5f8.image
        };
        const _0x13dec8 = {
          'image': _0xef1919,
          'caption': "\n🗾 *Link - https://textpro.me/create-3d-cartoon-text-effect-online-1120.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x47b160 = {
          'quoted': _0x61f958
        };
        await _0x1d01db.sendMessage(_0x1145a9, _0x13dec8, _0x47b160);
      } catch (_0x147776) {
        _0x54a717("⛔ *Error !!*" + _0x147776);
        _0x45bf18(_0x147776);
      }
    });
    const _0x3e15a3 = {
      'pattern': 'grun',
      'react': "🏜️",
      'alias': ["textpro12"],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': ".grun",
      'filename': __filename
    };
    cmd(_0x3e15a3, async (_0x453d6d, _0xfd5f1e, _0x38a7ff, {
      from: _0x4c17ab,
      l: _0x5c9ca8,
      quoted: _0x20d87,
      body: _0x116a03,
      isCmd: _0x6fdd6c,
      command: _0x434f81,
      args: _0x160612,
      q: _0x2c8f67,
      isGroup: _0x33c155,
      sender: _0x1e75b7,
      senderNumber: _0x543918,
      botNumber2: _0x5caee8,
      botNumber: _0x2f7b6b,
      pushname: _0x440920,
      isMe: _0x4f1a21,
      isOwner: _0x1f2ab8,
      groupMetadata: _0x30d3c7,
      groupName: _0x360f43,
      participants: _0x16ffbd,
      groupAdmins: _0x470cba,
      isBotAdmins: _0x467b04,
      isCreator: _0xb45029,
      isDev: _0x1a65ae,
      isAdmins: _0x3a6ffd,
      reply: _0x5755c3
    }) => {
      try {
        if (!_0x2c8f67) {
          return _0x5755c3("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x5b950f = await mumaker.textpro("https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html", _0x2c8f67);
        const _0x292364 = {
          'url': _0x5b950f.image
        };
        const _0x1eea9e = {
          'image': _0x292364,
          'caption': "\n🗾 *Link - https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x49b191 = {
          'quoted': _0xfd5f1e
        };
        await _0x453d6d.sendMessage(_0x4c17ab, _0x1eea9e, _0x49b191);
      } catch (_0x32ff20) {
        _0x5755c3("⛔ *Error !!*" + _0x32ff20);
        _0x5c9ca8(_0x32ff20);
      }
    });
    const _0x1bef61 = {
      'pattern': "pain",
      'react': "🏜️",
      'alias': ["textpro13"],
      'desc': "Text to Image Collection",
      'category': 'logo',
      'use': '.pain',
      'filename': __filename
    };
    cmd(_0x1bef61, async (_0x5e553d, _0x2ca29f, _0x3e0c5e, {
      from: _0x4187e5,
      l: _0x1be0d4,
      quoted: _0x23741c,
      body: _0x269e8f,
      isCmd: _0x2bca9e,
      command: _0x4df44d,
      args: _0x578176,
      q: _0x2a14a2,
      isGroup: _0x49f222,
      sender: _0x550ad2,
      senderNumber: _0x2431fb,
      botNumber2: _0x3bca62,
      botNumber: _0xd10f0d,
      pushname: _0x3c5ec5,
      isMe: _0x42851f,
      isOwner: _0x30f5eb,
      groupMetadata: _0x3ca63a,
      groupName: _0x4e6e3c,
      participants: _0x2ff6a6,
      groupAdmins: _0x3609f4,
      isBotAdmins: _0x138aea,
      isCreator: _0x963275,
      isDev: _0x53e3b2,
      isAdmins: _0x28ed11,
      reply: _0x5e21f5
    }) => {
      try {
        if (!_0x2a14a2) {
          return _0x5e21f5("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x1e0d1f = await mumaker.textpro('https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html', _0x2a14a2);
        const _0x2e63ca = {
          'url': _0x1e0d1f.image
        };
        const _0x5571c5 = {
          'image': _0x2e63ca,
          'caption': "\n🗾 *Link - https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x327bd7 = {
          'quoted': _0x2ca29f
        };
        await _0x5e553d.sendMessage(_0x4187e5, _0x5571c5, _0x327bd7);
      } catch (_0x519ddf) {
        _0x5e21f5("⛔ *Error !!*" + _0x519ddf);
        _0x1be0d4(_0x519ddf);
      }
    });
    const _0x4fd59f = {
      'pattern': "meta",
      'react': "🏜️",
      'alias': ['textpro14'],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': '.meta',
      'filename': __filename
    };
    cmd(_0x4fd59f, async (_0x4c9897, _0x426304, _0x297151, {
      from: _0x3c6190,
      l: _0x585734,
      quoted: _0x2d1909,
      body: _0x47d11c,
      isCmd: _0x551321,
      command: _0x5504fa,
      args: _0x4ca413,
      q: _0x3a58cd,
      isGroup: _0x28c797,
      sender: _0x17f3d7,
      senderNumber: _0x4fb86d,
      botNumber2: _0x47cd3b,
      botNumber: _0x52f55b,
      pushname: _0x4456d4,
      isMe: _0xfcf52a,
      isOwner: _0x378049,
      groupMetadata: _0x2281ba,
      groupName: _0x5834bb,
      participants: _0x229560,
      groupAdmins: _0xdf98bc,
      isBotAdmins: _0x1c3a53,
      isCreator: _0x2b4c6b,
      isDev: _0xa5c6a6,
      isAdmins: _0x3db095,
      reply: _0x185d24
    }) => {
      try {
        if (!_0x3a58cd) {
          return _0x185d24("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x132441 = await mumaker.textpro('https://textpro.me/create-3d-metallic-text-with-details-online-1108.html', _0x3a58cd);
        const _0x3ddb75 = {
          'url': _0x132441.image
        };
        const _0x253969 = {
          'image': _0x3ddb75,
          'caption': "\n🗾 *Link - https://textpro.me/create-3d-metallic-text-with-details-online-1108.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x4c10be = {
          'quoted': _0x426304
        };
        await _0x4c9897.sendMessage(_0x3c6190, _0x253969, _0x4c10be);
      } catch (_0x590878) {
        _0x185d24("⛔ *Error !!*" + _0x590878);
        _0x585734(_0x590878);
      }
    });
    const _0x76ae0a = {
      'pattern': 'part',
      'react': "🏜️",
      'alias': ['textpro15'],
      'desc': "Text to Image Collection",
      'category': "logo",
      'use': ".part",
      'filename': __filename
    };
    cmd(_0x76ae0a, async (_0x44eb0b, _0x5525cb, _0x2248fe, {
      from: _0x20f9ce,
      l: _0xb5a1e,
      quoted: _0x42d4dd,
      body: _0x54bf40,
      isCmd: _0x574cb6,
      command: _0x106f49,
      args: _0x38ad78,
      q: _0x400a69,
      isGroup: _0x2c43e1,
      sender: _0x138b84,
      senderNumber: _0x18f2e6,
      botNumber2: _0x95347d,
      botNumber: _0x1dbbd9,
      pushname: _0x3717b4,
      isMe: _0x36161b,
      isOwner: _0x429ace,
      groupMetadata: _0x4f7fe9,
      groupName: _0x27cf82,
      participants: _0x339440,
      groupAdmins: _0x1e506d,
      isBotAdmins: _0x59b670,
      isCreator: _0x4202e9,
      isDev: _0x5051ee,
      isAdmins: _0x494565,
      reply: _0x59ba64
    }) => {
      try {
        if (!_0x400a69) {
          return _0x59ba64("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x5374d7 = await mumaker.textpro("https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html", _0x400a69);
        const _0x78030d = {
          'url': _0x5374d7.image
        };
        const _0x4ff7c2 = {
          'image': _0x78030d,
          'caption': "\n🗾 *Link - https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html* \n\n*ᴅᴀʀᴋ ᴇᴠɪʟ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ*"
        };
        const _0x311887 = {
          'quoted': _0x5525cb
        };
        await _0x44eb0b.sendMessage(_0x20f9ce, _0x4ff7c2, _0x311887);
      } catch (_0x5421d5) {
        _0x59ba64("⛔ *Error !!*" + _0x5421d5);
        _0xb5a1e(_0x5421d5);
      }
    });
  }
  const _0x201f49 = {};
  function _0x5caba2(_0x13ae3a, _0x9acac0, _0x173272, _0x58cd18, _0x4e2b36) {
    return _0x1cca(_0x173272 + 0x16b, _0x4e2b36);
  }
  _0x201f49.pattern = "enhance";
  _0x201f49.react = '↗️';
  _0x201f49.alias = ["imgenhance", "remini", "qualityimage", 'tohd'];
  _0x201f49.desc = "It converts given low quality image to quality image..";
  _0x201f49.category = "convert";
  _0x201f49.use = ".enhance <reply low quality image>";
  _0x201f49.filename = __filename;
  cmd(_0x201f49, async (_0x5e54c0, _0x4fc916, _0x37f777, {
    from: _0x168a4f,
    l: _0xa2124b,
    prefix: _0x549915,
    quoted: _0x18b268,
    body: _0x17f939,
    isCmd: _0x1d41aa,
    command: _0x419970,
    args: _0x18c730,
    q: _0x169b8e,
    isGroup: _0x4c75c4,
    sender: _0x2df700,
    senderNumber: _0x2b8103,
    botNumber2: _0xfd6e06,
    botNumber: _0x19dca1,
    pushname: _0x6aba45,
    isMe: _0x1a8616,
    isOwner: _0x23a84c,
    groupMetadata: _0x141c77,
    groupName: _0x34b74e,
    participants: _0x107ac,
    groupAdmins: _0x3a2df6,
    isBotAdmins: _0x251699,
    isAdmins: _0x7039c8,
    reply: _0x4b667e
  }) => {
    try {
      const _0x29944d = _0x37f777.quoted ? _0x37f777.quoted.type === "viewOnceMessage" : false;
      const _0x16de83 = _0x37f777.quoted ? _0x37f777.quoted.type === "imageMessage" || (_0x29944d ? _0x37f777.quoted.msg.type === "imageMessage" : false) : false;
      if (_0x37f777.type === "imageMessage" || _0x16de83) {
        const _0xcdc73e = require("file-type");
        var _0x3ae0f0 = getRandom('');
        let _0x575df0 = _0x16de83 ? await _0x37f777.quoted.download(_0x3ae0f0) : await _0x37f777.download(_0x3ae0f0);
        let _0x3dd4c1 = await _0xcdc73e.fromBuffer(_0x575df0);
        await fs.promises.writeFile('./' + _0x3dd4c1.ext, _0x575df0);
        img2url('./' + _0x3dd4c1.ext).then(async _0x3bfbc8 => {
          let _0x3fff0a = await fetchJson("https://aemt.me/remini?url=" + _0x3bfbc8 + "&resolusi=4");
          const _0x3f8ef1 = {
            'image': _0x3fff0a.url,
            'caption': "*_ᴅᴀʀᴋ-ᴇᴠɪʟ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*"
          };
          const _0x14b095 = {
            'quoted': _0x4fc916
          };
          await _0x5e54c0.sendMessage(_0x168a4f, _0x3f8ef1, _0x14b095);
        });
      } else {
        return _0x4b667e("*Reply to a photo !*");
      }
    } catch (_0x5a71f9) {
      _0x4b667e("*Server is busy. Try again later.!*");
      _0xa2124b(_0x5a71f9);
    }
  });