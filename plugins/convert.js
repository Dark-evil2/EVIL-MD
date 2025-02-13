(function (_0x22a623, _0x4cf1e5) {
    const _0x23a779 = _0x22a623();
    while (true) {
      try {
        const _0x343bd9 = parseInt(_0x52bd(0x531, "SM)t")) / 0x1 + parseInt(_0x52bd(0x1e9, '!%q!')) / 0x2 + parseInt(_0x52bd(0x2ad, "uJY1")) / 0x3 + parseInt(_0x52bd(0x1ee, "snSO")) / 0x4 + parseInt(_0x52bd(0x459, '3BCF')) / 0x5 + -parseInt(_0x52bd(0x594, "7M)H")) / 0x6 * (-parseInt(_0x52bd(0x580, "zKJW")) / 0x7) + parseInt(_0x52bd(0x2d1, "YknU")) / 0x8 * (-parseInt(_0x52bd(0x351, "ybU@")) / 0x9);
        if (_0x343bd9 === _0x4cf1e5) {
          break;
        } else {
          _0x23a779.push(_0x23a779.shift());
        }
      } catch (_0x40f377) {
        _0x23a779.push(_0x23a779.shift());
      }
    }
  })(_0x2e3c, 0x77f40);
  const config = require("../settings");
  function _0x188cb3(_0xe18493, _0x2d208c, _0x5c5a8a, _0x4d15c5, _0x2fd87e) {
    return _0x52bd(_0x2d208c + 0x3b, _0x2fd87e);
  }
  const {
    cmd,
    commands
  } = require("../lib/command");
  const fs = require('fs');
  const fileType = require('file-type');
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
  const path = require("path");
  function _0x2528c4(_0x4f0022, _0x3b8150, _0x2e8f96, _0xe3b51d, _0x5ecc57) {
    return _0x52bd(_0x4f0022 + 0x14e, _0xe3b51d);
  }
  const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
  const ffmpeg = require("fluent-ffmpeg");
  const {
    Sticker,
    createSticker,
    StickerTypes
  } = require('wa-sticker-formatter');
  const translate = require("translate-google-api");
  const {
    tmpdir
  } = require('os');
  const Crypto = require('crypto');
  async function videoToWebp(_0x41a19e) {
    const _0x1f85d2 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
    const _0x4e2bbc = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".mp4");
    fs.writeFileSync(_0x4e2bbc, _0x41a19e);
    await new Promise((_0x1efe02, _0x4fe2da) => {
      ffmpeg(_0x4e2bbc).on('error', _0x4fe2da).on("end", () => _0x1efe02(true)).addOutputOptions(["-vcodec", 'libwebp', "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", '-loop', '0', "-ss", '00:00:00', '-t', "00:00:05", "-preset", "default", "-an", '-vsync', '0']).toFormat("webp").save(_0x1f85d2);
    });
    const _0x3891ac = fs.readFileSync(_0x1f85d2);
    fs.unlinkSync(_0x1f85d2);
    fs.unlinkSync(_0x4e2bbc);
    return _0x3891ac;
  }
  function _0x2e3c() {
    const _0xbb306a = ['sCoAx3RcLG', "WRy2ymkqW4m", "ACkUlWVcOq", "WQXIWQbJha", "vSkmWRFdPLq", 'C3RdN1u', "W5nDyrJdQq", "pIhdPYfd", 'l8o/EfJcTCk1z8k5WPyODG', "BSkQkqRdLa", "W4pcPXCmaa", "W5tcP8kLp8kp", "WQpcTdu", "W6i4cvBdMa", 'WRldN8kB', 'FCoJWRNdPSoN', "qmoaWOrr", "D8odWPhdNNy", 'WPVGT5VGTPlGTPpGTyu', "W65VkCohW78", "WOtcPx48hG", 'BmkxWOBcIgq', 'W7ubbcfG', "qtJcICo4yq", "WO/dSe5bW6u", "WQLhrYv+", "W6ChWOj1", '4lEy4lsS4lsh4lsU4lsX', 'WQ7cM8oWkCkX', "CN7dNb5w", 'y2RcGmkm', 'WPddLW8gqq', 'gmoqW5io', "zNVdN8oSaa", "WPDmqsFdOq", "WOFcTCoXWO7cRW", 'FCkrWOtdMgi', 'WO/dKmoTW4tcUG', "krFdNX/cJa", "W6RdVXm6DG", "W5fcoCoBW7C", "c8kGmSkWDq", "WQpdGmo6W57cTa", "m0nPWRu", "WRxdR8k0BmoMl0KhqCkpttXG", "WOxdS8kIpmkn", "zX9qACkm", "W70sWOu+W6e", 'BSk7gmocpa', "qmkqfmoCxG", "W5BdOu3dJYi", "rSk2hsddRa", "WRnpWOTKbW", "A8k3WQZcO8o0", "BHXtuSkz", "DJdcMmkbea", 'lCo6W6a', "fHORqCkk", "W7TDWOW", "WP7dRmo5W5RcJW", 'WRjyW40OW7C', "ECk8oW/dPG", "nSoGWQJdOCoW", "WOzUWPhcOwK", "DuD1", "aSkhd8oFhW", 'W7ZdJYGUrW', "4lAN4lsfAoc3Moc1Gq", "F2dcT8kgWQO", "W5RcRCkZwJe", "dXe9WRmV", "xJxdU8k2ya", 'c3/cIG', 'W5vJp8odW5e', "c1GRWRmW", "ymkHjmoXfG", "WOtdQSoZW5/dUW", "hrJdM8oNAW", "W67cRSoOp8oG", "WOfvF8kdBW", "WORdKCo+W6dcOq", "WORdGmo6", "WO/dUCk6lY4", "WOxcUxqXdW", "WO7cVmoMwHS", "A8oNWQZdSCoL", 'WPZcKKaXdW', "WOvSWQPtdW", "tSo7DhJcKq", "W5VdRvmzWR8", 's2VdHq', "zbDw", "WR7dKSkKdsq", "W7VdJHKcCW", "zJxcNSkgwW", "zh7dJX5c", "imk8gmk3zq", 'WQRcLamzlG', "qmkfba", "W6JdUmk4v8oC", "FeFdJ8oEEq", "DItcLCk9sW", "WRDgWOC", "sSkpcCkAga", "WRf7sSk6yG", "Cc7dUIDi", "WRDCW4K0W78", "WRHFiGaf", "rLdcMmo4yq", "WPT3u8kbzG", "W6DoW542W7i", "rCo8W6PxrW", "u1a7WQiV", "uw3dMrL3", "W7anb1pdHG", 'A8kzcs3dSa', "A8oOW6jEtW", "wMZdVCkD", "W7xdRhZdVG", "4lAw4lECW7hcJSk9", "iXpcOCoVxa", "W5uvkN3dRG", "WQb4CCkcsa", "W7tdUNZdVcW", "Ab1xDmos", "W7FcRSoUmSkQ", 'WO5av3q', "W6LZi8oeW5u", "CmkMkHBcSW", "wxNdVq", "vSkvfCoana", "W4FcPSo5B8oj", "uvC/WQvI", "AZFdGmkxua", 'yCoHW6S', "WR8gWOrSia", 'EMhdLSofDW', 'qmkwgq', 'WRv7FCkSCq', "W6PlW4GT", 'qCktgmoiqG', "DvVdGZ5I", "wSo2BW", 'uKVcQCkwWQ0', 'W53cT8oSFmoo', "W506W456jW", 'oahdNKpcGW', 'W6eMomoFWPa', "W4FcUN8GhG", 'WRddLmkbeJ0', 'DIVcLmkaeq', 'cConW4LEW6m', "WQ1EmqG/", "A3NdQ8kufq", "WP7dJCoMW5NcUG", 'W6Kmjbjh', "WPhcICoWWPRcQG", 'WPrrrM/cPW', 'W5RcS8oSzCos', "W6pdKSoOB8kh", "W5VcPXaxsq", "W6dcSGfsW7m", "swBdLSoj", 'xuhcI8kmWOK', 'gwVdQa', 'WQNcV8oW', 'duamWPOx', "WOVdS8kW", "B8kQjGRdJa", "W4OvbvRdIG", "WQdcVXG7uG", "WQhdQv5k", 'i3tdGmocdG', "WPtcKSo+W7/cUq", "W5xdOvmrW7S", "zhldSCkaWRC", "qtJcO8kzwG", "Ct9Wymk4", "W4NcNCoOWRlcVq", "W4Syl1BcRW", 'W5tdSw7dSdS', "W6BdQmo5CCkR", "BHeFB8ks", "WOKfvM/cVa", "WR1nley", "F2JcVCkkWRy", "w8ksbCoota", "zYahE8oJ", "WQ3dPvqxW6m", "W4Dnxv5d", "dG7cImoRAq", "EbngqmkA", "WOXUcJeq", 'W5/dTuWfrG', "W5NdQa5mqq", "WRhcPriQdW", "WRBcTdu7aG", "WRz9ySoNyG", "W77dTKfzbW", "Amo7WQtdT8kG", 'pCkeamoDFW', "ow7dNSkEvW", "BCkuWOhdSNC", "W7ddPgO", 'hGRcJmopAq', "fColAx7cMW", "W4ddJmkWW4ZdUa", 'WRtdRSk4A8oU', "W6RcSCoXnmk8", "W7KCjIfQ", 'WP50cZmq', 'egfwW5q3', "WQFdKmkHW7hdUa", "WQdcVtVcQxK/WRK8WOldMCkAwW", "xX5Lq8k9", 'WOTqqhtcRa', "fCo3W7nyW6G", "amolW5axWQC", 'WOPmag3cQa', "vgVdU8kakq", 'W6VdV2G+aG', "WQBcVIK7aG", "W4aEWQ/cRSoH", "W4mMWO9OyG", "W6ldPwddQG", "r8kxWOtdLN4", "WPFcJ8o9WPZcLq", "W4BcUge3ha", "W5Dsk8oPW7m", "C8kGlWldPa", "W40VWQe", "nGBdIa/cGW", 'qSkwcq', "WP3cVv0qfW", "WPLUWRFcPmkG", "WPWWWP0", "WOZcPbaNfW", "WQPPW4SvW6y", "W6alcsHR", "jazCyCoh", "4lsW4lwK4lEB4lEJwW", 'zmoPW70', "WPvesW", 'kmk/WRWGlG', 'Bmo4WO/dTSoM', "W4hdLK1bjq", "DMRdLa9a", "Fmo4WRRdRCoS", 'bqRdQHdcUa', "zmoJW7L+BG", "W4FdVCoVW50", "WRldN8kqxIe", "WOVcN8oJ", "W5iSWObTyG", "W6BdI8oOE8k8", "Fc3cV8oAhW", "iSkydmko", "b8oVW7jfW5S", "WO/dQ20kW6m", "laxcMSo6xG", 'aColW5XhW6O', "kNxcPCkkWRS", 'zXmijG', "WOtcGxayda", 'DfddJYje', "W607i03dLW", "W4vOWOxcQ1e", "yqFdGXpcMW", 'WQdcV8oCwd0', "W6JcSdu", "b0JdVCkeka", "Ce/cK8kfWPW", "W54VWOfPoG", "W4hcRmoXyCoA", "iSkjhq", "W7T/WPhcQuG", 'W4/dOWOmaa', 'kJtdR8op', "W7hdNSoRECk9", "hxhdLCkAlq", "WR/dP8kmW7ddLq", "W5pdPaGguG", 'hfWQ', "WQZcVYa", "WPq6WQRcPCoN", "W4hdPeFdUb8", "W7zSWRxcP0O", "W6hcPSo2zG", "oKqkBq", "ehVdRSkpCW", "g8oOW6HXW6q", 'w8kodCoF', "mfpdTbHutCog", "uCkLWPddRui", "W7iaCfj+", "W7VdUL5i", "4lwF4lsO4lsZ4lwL4lwx", 'p0BdUJbg', "WOFcONuOpG", 'jc5dASkM', 'kYHcA8kM', "DmoNs0JcLq", "pGhdJr3cNW", 'W6pdJbO0sG', "W7XJp8ot", "W5nkvw9Z", 'W5/cH8o5BSoN', "W47dTqinuW", "WPZWMBUMW6VWNPsm", "EwpdSCkeWRe", "cbxcKSoMAG", "W5n8W7pdP8oP", "WRldPSkXBmoQkGu1BmkQCaC", 'W4tGTitGTyBGTjFGTjO', "ErncASkD", "W4pdICoMW4lcPq", "WPZcHCkOWOZdVW", 'efzmW7i2', "FcxcG8oDxW", "gwJdQSkogG", "W5JcQaamtq", "WPxdSCk4zCoq", "W6fAEvn1", "WPfSWOdcR2m", 'A8kqWPFdKhu', "aqJdLqFcJG", "WQBcVIPIeq", 'EbnCySkX', "zCoIWRnIzW", "W6S0WQHQxW", "B8o6WQ7dOSo6", "dJLEACkQ", "WQNdM8kwfG", 'feuQWPzV', "EGnDCSkz", 'mX/cQdzi', "WQ/dR09dbq", "chydWOq2", 'CdBdNCkouW', "jJjIsSoQ", "WO5+cYe8", 'bmkgdCkXvW', "W6D7WR7cM2u", "vu3dGSoGva", "W5nXfsi", "W53dNSo/FCoO", "W4tdR1ShWQW", 'W7NcSHiwWOK', "xSoyWOldL8of", "WOZdSSkGW5NdUG", "WOhcKCkNW77dPW", "u14HWQq6", "W5pdPmolqmkE", 'W7WAasnN', "dd7dHHTf", "gZJdQmkala", "kLX0W5eW", 'mcrfFW', 'WP1rW44sW4q', "W7tdMCoyhW", 'W51Tdceq', "jmkniCkAwq", "gConW59fW6S", "DINcMmk4Eq", "WPBdHKCkW7q", "lSkjdCkyDq", 'oXrfqmk0', "bYDbySo2", "W6GsWQrPyq", "WPboqehcRW", "AGzckCkD", 'hmoxW5feW6O', "WPRdSeOoWQm", "W70ldanK", 'WO7cUmogstW', 'WR1Cz3hcRG', 'WP/dKmoMW5NcSa', "uCo4FN7cGa", "Amo2WRNdT8oL", "s8oRy3G", 'eSoTixO', 'WORdHmo9W4ZdRW', "W7HkWPzXka", 'W7fByLC', 'WRzMlCkMAW', "WOxdRmkS", "rSoeW4vDzq", "WP96fIbd", 'WPj6bJeC', 'W7JdPMhcOc4', "W4FcPMu7ga", "WRvkWPzGpW", "ysRdRmkAuG", "EbDvyW", "gw7cIbHP", "W7FdOHaqqq", "W4KDke3cOG", 'WOj+Dmkeua', "W6ldUwRdVJ8", "WPP0cIiz", "ECkHla", "BgddL8kdhW", 'WOxdNSovWR7cUq', "EHtcKmk4sq", 'AbDgy8kB', "W7hdLmo6DSkK", "C2RdIr5b", "FCkPW63cV8o0", "W5K3WPPRDa", "W57dOKT1bG", "W5RcSCoXA8ou", "xmkse8oEiq", "zNJcK8klcG", "FN/cOCkg", "tWXEvmkQ", "CJZcV8kwua", "WQZcVsiEhG", "haldHsjf", "awVdQG", "W6ipnWy6", 'yJ/dMbrb', "p13dLSkzca", "W5xdNuldUsq", 'W4uXWO91Da', "W6NcISoytNG", "AbiRWRux", "W7/dOxi", "W7RdICo0", "W6HiWOJcMha", 'zCk/lq', "WP/dQ0KqW70", "W4zvwLfa", "Fs/cMmkC", 'WQVcMSkqgZG', 'W5xdOaOf', 'WOKGWQdcP8o1', "y3RdIbG", "WRNdNCo9A8o1", "euuSWRmD", "W5NcMYS1WRK", "fqDU", "W7zFWO0Loq", "W6BdHufvda", "nY3cLmkCsG", "WRu4WO3cHSob", "W5OCscDH", "W4xdPI/dVIq", "WOT8W6qy", "cvqRW7G", "W49UWORcO2W", "hf7dP8k5iW", "iSkGp8knCq", "W7LPa8oCW7u", "lHdcV8kyva", "lCo1kWhdRq", 'qmorW40', 'W70NpK7dJG', "hCodW4Py", 'DIZcMmkttq', "WRxcRafzbW", "WQRcQSoTk8kQ", "W7RcOHWgWQO", '4lAXvUc2Qoc2VEc1HG', 'c8k6kJZdHa', "W7OCscDH", "WP9saZa/", "W7CLkxhdIG", "hNpdOmkOla", "CCk/lqK", "W7benCoMW6O", "4lwT4lE94lww4lA/Ea", "WQFdT8kZDtu", "Dg/dMGLa", "W77cPby", "W7ldGNNdJcK", "W5jzjfddUG", 'kanEs8kW', "hX5ZE8kY", "W5HzWRRcKse", "zarl", "WPJcOh4MhG", "ysNcLCkxuq", "WP7dP8kLW5K", "WOfOW6yt", "W6hcRCoXoSk5", 'WRNcUX0AvSoNj13dMSkSeSo+', "WR1vW4iTW6S", "W6RcSCo2E8kT", "WO16fYaB", 'W7xcQ8oqp8kP', "DSkaWO/dQhm", 'W7NdLCkqxJW', "pKtcJv/dGq", "CJJcHCop", "WQKGWRFcH8of", "WRhdSMGzW5W", "W7pcHSokxmop", "v3q9WQqW", "W7HMEmkGDG", "cum7", "B8o8W7TJ", "n+c3OEc0VUc1Ioc3Sq", "FXL0ACko", "W6flC357", "WQVcQtCjda", "W4Gal0e", "laldRdbi", "EsBcQmkmWQ0", "W5arpW", "rHZdU8kDqW", 'bHZcNmoVma', "WQ3dT8ogW73cHq", "lSkecCk8xq", "WPf2WOZcR3C", "WP7cT8ofWRNcIq", "ywpcQa", "W67dTKPedq", "dSodW4PvW6G", "W5tdONn2aa", 'W55tamo8', "jIHorCob", "W4hcUSoOAq", "EwFcTSkg", "ncrjA8ol", "W6tdQHCxWQW", "WO0RW5xdTZ8VzHzqetCzW4m", "W5pcOmo9ASow", 'qxBdLX52', 'qCkbgmoiga', "W4tcPwm3ca", "W5RdRcnMqY1Waa8el8kQWRu", "W6ZdRebBbW", "z3VdImoHra", "WPFcV8o0", 'F0VdNmoyva', "WR/cPYddSsi", "lH/dNtjp", 'WPT+fW', "pJrXvSoP", 'W4SydGjh', 'yZNcGCkx', 'WPdcKCoQWQ/dVG', "W4tdOmo7W5/cUG", "W6pdRg7dUq0", "ibe/WRCZ", "WRJdLSklhZS", "wIJcO8ojoq", "W6CbW7G6W6e", "WQmCWOZcM8oq", "W6utWRXtyW", 'WO0OW5VcQW', "gWf4wSkb", "WR1GxCkSDG", "WO0mWRRcV8oL", "W7G7esPT", "WRFdKmoMW4ZcKW", "pG/dPbfW", 'WRhcTd85eW', 'ECkcWPu', "CmknWPFdJNe", "tmoRo2VcNq", 'lqJdIqRcNW', 'wLBcGSkkWP4', 't2/dRbjV', "WRjoWPfM", "W4NdPHug", "d8k+itZdHa", "BSo4WRnGCa", "W7pdNCoRFSkU", "Frf/sSkn", "omkxWPNcL2m", 'W4hdVw7dIai', "EgRdMmoC", "WQVcPYi/eW", "W5CDje3dVW", "cIruFmoN", 'WOFcO3qGdW', "xIpdIHmLW6JdUsxcHMNcIGKl", 'W5qni0dcOq', "W7esorD2", 'W4NdQWOarq', "svS6dSku", "WPjUW6ldQSkQ", "W611kq", "WOdcHCorsba", "WOVdPuOkW7q", "W4lcO1mrWQa", 'WRBdJ3OmW5S', "W58dj2ddTW", 'CCoQBexcJG', "W4RcSq9gWQrezSkbocddMSkNha", '4lw+WPRGTzBGT4xGTPO', "W7fRlCoxW5u", 'W45/WOlcPfi', "4lwi4lsD4lEu4lAG4lwv", "WOHxrmketW", 'WP7dQGmmW7q', "kLmCWQ8M", 'tW7dVCkvCa', "W7JcSH0wWOi", "W6boyLn1", "W4hcRmoRy8ot", "WR1eW5O8W7G", "WOqyWQ/cGSoU", 'W7JdVIBcUNe', "WPFcVmkN", "fXX1s8k7", 'A8oJWQZdR8oS', "fxhdPSkJdq", "Ch7cVmkpWRq", 'WPJdQeSAW7q', 'WQfGAmkVCq', "WPxdQ0PEW6i", "WOZdT8k5W5NdUG", 'W6ldQhNdUa', "W446W4ldOs0", "WOddHSoSW6dcSa", "WO3dHmo9W4JcSG", "zSoLW6j1Ba", "W6JcPZq0cq", "y3RdIa", 'qgZcI15Z', "WQjAw3a7", 'EspcLmk/wW', "W6raz1u", "rSkAhmoDcq", "pCkjdCkjDW", "W4ddM8kNW47dUW", "W47dHmkPW5NcSa", "CcddR8kE", "yh3dGW", 'WOJcPf9EW6u', 'ACk8lq', "WPGKWQlcGmon", 'W4NcMmoOWQ3cOa', 'WPqRWRVcVW', "WPODW5O+W70", 'ECkxWOldKMi', "muP+W4Gf", 'W4VdPwVdKb4', "kahdNX0", "A8oNWOVdRSoe", "W77dSu1cbG", "WPVdQ8k6W4JdSq", 'WO/dPSkHWPZdOa', "W7ZdS09FbW", 'WOxcK8oI', "W7VcSHq", "xSkJvMG", "WQjqW4u1W7G", "A2ddJCocxa", "W6uvWOLWCq", "WPpcOCoYste", 'r8k/fu7dSq', "WQJdHvWwW5W", "W73dOKbjdq", "B8kJiq3dPa", "u8kSdJRdMW", "W40TWRhcRq", 'q2NcJe5+', 'WRn3ySoPoq', "tCoREM/cGa", "kN3cGrO", "W7FdVSoJE8kQ", 'WR1oWPaR', 'W7fBFG', "zKRdQtC", "BmodW4RdPxu", "ux7dKrjx", "W4GSWPS7ya", "FCoKWR7dOSoN", "WPlcQCopWPJcGW", "W7OpagjJ", 'oWBdRq', "zW1gyCoH", "WPWGW5r6", "vJZdR8kxta", "W6iFW5m1Aa", "nSkuWPpdLwa", "WQFcVwSQmq", "W7pdQ3VdKcC", 'W6iDbZbR', "C3RdGW8", "W5pdUJ4ZcW", "W7epye50", "WP3dOuKsW6m", "W4CMWOi", 'uee9WRmS', "WQVcKSoqWOxcGW", "FtTZFSki", "W4fAEwLj", "ESoVeX7dNa", "W5/dJ33dTs8", "xSkkWPRdKKm", 'ka7dUYzo', "4lwjWOxdPmoiWRS", 'n1rI', "kJet", "CSk7iqhdRW", "WOpdGSkP4lsB4lsv", 'WR3dRmkonYy', "WPZdNCkOcYO", "tmkzjZ7dQq", "aSkcWO8", "mfjVW6Sp", "u8oNFMJdLa", "nJriE8oJ", "W6pdRg7dVJ8", "WPDewW", 'WPJcOem2da', 'WQihWQZcRSot', "W4dWRlUgW6dWV6wO", 'BZZdPG', "kIbaASoh", "WPpcPhGkmG", 'WR7dTSkpfbi', "lmkJW7ZcS8kW", "ymkbe8oEhW", "WPf7WOa", 'WPZcV8ojWQBcQa', 'ebPIxSkx', 'W5VcQ8oKWOtcOrJdLCoAuhtdLmkbW6q', "rH7cICoS", "WQpdJmkHhZW", "WOhcHCo/W4tcSq", "cmocvg/cHs5p", "zZBdSCknua", "i8kpdmkCDq", "WO/cT8oQBCot", "W6OMBCkrWPO", "D8o+W6DKzW", "iaxdMbVdHG", "FM/cVSknW7G", "WPzYE2RcUW", "W6tcTHC", 'BmoUWR3dPG', 'WOtdUCo7y8or', 'W79DnLv1', "WOGfdIhdOW", '4lA1l+c0Ooc0L+c2IG', "BSkQkq3dTq", "ECo9W6LMua", 'W7/cSGSg', 'W7NcSHirWRS', "BCkgjmodja", "omorW59xW6O", "l2dcR1j+", "WQTHCCkUya", "W4NdOG0hBq", "W5FdT1a", "WRxdQuOUW5i", "A1NdLSoLxG", "kG3dGbVcHq", 'W6RcQmoNkCkQ', "W5q2WP1+", "dbDMsW", "pmkAgSksDG", "WRZcSX4BvSkafgZdHSkihq", "WQ9ZpCk6Cq", "B8ohWQZdLmor", 'W4pdHSkZW4W', 'WQD3aqGG', "WO5kW5mOW5C", 'isHlASkR', "DxRdMHHr", 'WR/dQ8oHFCkP', "W6CzW5PU", 'W7D0nq', "WOHtfs00", '4lsp4lsa4ls34lAc4lwV', "WRpcTgeUca", 'W5BcSCoHFmoj', "W6vCWQxcOua", "dhFcNq", 'ALhcU2Cx', "hf0QWQiR", "C2BdIX4", "wSkzeCotaG", "dhldRSkIbW", "W79Dk1b4", "WRzFCSkpBq", "lqdcKu3dMq", 'AmocW6L+AW', "o0L1W60z", "DKNcNutdHG", 'WQnsw3y+', "W6TZlSodW4q", 'ghhdRCkElW', "WQHMECkMAW", "W4iVWOfS", "WPFdRmoVW7RcKq", "iKldU8kgjG", "oIhcGW", "FrnE", "CSoPW69ZDG", "C8kSW7D/DW", "awdcQ3fm", "bw3dOmkDlW", "WPpcMcWbmG", "WRFdGSksoIm", 'gbJcLCoUqW', "WR4luJi", "WRVdJ8o5AmoO", 'hr1Lt8kd', "WQjoW5K+W7y", 'W71YomovW5C', "W7ajhcfP", "WPRdNmo5W4G", 'bdlcNmoqwW', "W5xcPSoAomkC", 'DCkHlW', "W7TkBW", "WPaAWPFcHSo4", "WPX3dcqg", '4lwg4lsm4lAG4lAy4lEk', "WRRdOL9sWR8", "WP7dK8k2ccO", 'W6pdVLriWQK', 'W6DjW4v/W7G', "W7PBwej0", 'qHBcICk9va', 'W4uZWPTVsa', "Bmo4W63cOSkQ", "gqj/t8kx", 'agRdJa', "dNxcLLf4", 'oSoaW7vjW5W', "W63cSruuWQK", "hSohWP5xW6y", "aqb1", 'W583WOHYAW', "W4eIWPPVyG", "hg/cL1n4", "ECoRW7LXuG", "W6hcRmk4B8os", 'nmo8EL7cRq', "WRDCW5G6W78", 'WRnHWRnTpa', "WO7dT1S", 'WR/cTmoYqYq', "W6WgW5m/Dq", "tmkdfmovaG", 'WOBdKCkNW6ZdKW', "WP1Nz2NcHW", "WO/cVmoJqsy", 'WPqHWOxcPmoY', "hSowW5DtW6q", "WOJdPmo1zCot", "ha/cKSo+AW", "ysZdRmkE", "WRjwimovW5e", 'cGT3sSkI', "fLq9", "W61VW48VW70", "WP9DwZ7dQq", "WPmTWQZcNSo2", "WOdcUha1hG", "W73dReLLmW", "W6xdMSo5BmkT", 'W4pcHXOMWOS', "m3vIW7uF", 'W7WDW7e9W4W', "yZ3dK8kDrW", 'D0tdTXZcTG', 'WQLqD2xcNG', 'W7pcO1ntW6u', "CNhdLXjl", "WPNdPKOZW70", 'W7RdMNBdSYG', "W49FzeHZ", "WO09WQq", "aSkbeW", "W591WOFcPsC", 'gtRdHeT8', 'zWnvtmkp', 'WOHeF8kzBq', "W47dVHmg", "W7pdQsunCW", "fabfz8ol", "WPhcQCoQ", "vrH4", "uhVdImonxG", "WRLfWR1Ppq", "WPdcH8o3WRO", "fSkyjmoDyG", 'W5z4W7VdVmoid8oZW5JcRWO', "W4xcSCo3yCou", "W5tcUmo8xYy", "WRrjWPzina", "W6PJp8ofW5W", 'BmorWOy', "WPhdMmk0maW", "DSkvWPpdHwq", "hSofrCor", "WRNGTQVGTQlGT6pGT5W", "W47dPGqq", "kN7dLq", "WQHZzmk9ya", "oqtdPInc", "W5iazKhdOa", "W45ffmoHW5y", "wCoND2NcMG", "ArqJW7a", "pSknc8klDW", "crxdMs/cRa", "sSoYWR3dR8o5", "W7tcV8o2l8k7", 'AJ3dUSkjgW', "A8oMteNcTq", "pbpcV8oisq", "WRJdUmk9W7JdSW", "oCkhkSkjya", "WR5mW5awW4S", "W6xcNsyJaa", "W7/cRGmx", 'WPHPrteA', "muyc", "4lsj4lA8Boc0Poc0HG", "FCooWPFdH3K", "W6NdIehdPc4", "vaVcNSketq", 'WOOHWQRcPq', 'WOxcHSoFWPRcRW', "DMtdR8kvuG", "fgdcVK1Z", "gei8WRC4", "W7uAbYK", "WQfuW4y6W78", "dg/cJe9Y", 'WR4Ys8k5wa', "FCkIlq", "lfrYW7y", "Fr9wy8kt", 'W7vNiSou', "W5tcHmo+rCos", 'oe3cQNjp', 'W7mkWPXMWQe2WRpdQHuXW57dVfu', "hCoxnCoZ", "WO7cKxWJiG", "CCo5W6fKzW", "sSkGiX/dIq", "W43cGJ8+", "W58vh03dJG", "j8k5e8kEAW", "WQWpWO3cJa", "WOVcJmkNWR7dRq", 'WPBdKCkPWOZdVW', "dszAwSkS", "nsrgBmoY", 'WP3cVhi5hG', "yg7dNG", "WOtcUNS7ja", "WQVcHmolWQRcJW", "W7vxyHO", 'WPRcOxGXea', "WPnltgZcVa", 'gGJcLmo+AW', "WQpcPMNdUcO", "cmorW41rW6G", 'p8kngmkEzG', "uJRdH8kHuq", 'W70Edtz6', "fXWRwCkm", 'W5BcOSoSACoA', 'u3BcTmkqWRu', 'WRJdV8o9W4lcUq', "dr5MqCkw", "bM/cOxze", "WPlcM8kNWRlcQa", "xmkdfmozbW", "D8k4lqRdJq", "WOLVfq", 'W6nNy1vz', "eX/cQdzi", "WQeBiHmIASkQWQ3dJtFdNSkt", "WQtcMW0lja", 'W67dQKDNjq', 'WQ5qW4mN', "W54PWOC7CW", 'WQdcP8odwJe', "mY5LESoG", "WR7dRSkY", "W7xcQ8oTl8k7", "f0K8WRKk", "W7/dT0Dcda", "yc/dICoywq", "W6P2WRVcPfy", 'WOZcRwu', "WRtcPcG5aG", 'mZngyCo1', "W5xdHaSTwa", "W4JcTG5sW7G", "d8kBfmoubW", "iXBdJXVcTa", 'W5jSWOBcSNm', "4lw44lwVmEc3HUc3Jq", 'dqb6r8kk', 'W47dKCoMWO3cVa', "WOZcPMiZha", "puH/", "W7TDWOb3", "FtFdVa", 'WQ7dISkyW5JdUW', "yb9gzCku", "W51QWORdR2O", "dX/cOSoPAG", "lfjoW7Wu", "W5tcTSo8zCos", "A1NcSd4", "AJDeymoI", 'z8k6hmknFG', "h3VcLKnY", "WPTeta", "W4eolIjK", "WQldQCoWW7ZcSG", "W5PUW63cV8oY", "pmkDfSkjDW", "bXtcMCoYpa", "W6ddImoO", "WRnyW5iRW6u", "WQ7dPvihW5C", "WOddUhC7aW", "cCohW4W", 'WRryW4q7W5W', "qSkwgSoFuG", "W6bgouPX", "WRJdMSoU", "4lwDW6ZGTkFGTPxGTOy", "WOJdP18sW7q", "gJVcTmo/xW", "W6/cTmoEFCoL", 'WP3dRviBW78', "WRldQmk6BmkwAYOvDSkq", "r8oJWR/dOSoU", "WPpcOmo2Fs0", "WO/cHCo5W4xcUG", "W7ayebDD", 'zcxcN8kwCW', "CJpdM8k3CG", "W7BdKmoOASoO", "WQXoaGKC", "d8odW41vWRK", "WQTICCk7ya", "W4BdIgFdRr8", "W5f8W7ddV8k1", "kxtdVmkjwG", "W53dIehdMG", "W512WORcOxq", 'yxBdLW9a', "iSkAaa", "W4hdK8oAxCkj", "l8oHW6XrW6K", "grJcMSoPEG", "WO9lq2NcPW", 'WP7dGSkddHG', "WQviWOnPpq", "zMddLmkm4lAF", "hN/dMe5Z", "WPL0eISz", 'r8krWPFdG3K', "WPFdPmoWW4tcUa", "W6xdPKVdVd8", "WO7dOCo1sdK", "W4tcTSo3Emoy", "FmoJWOFdISod", 'kq9ZDSka', "W7tcJ8ogcSkR", "W7JcOXOrWQq", "amorW5K", "W4/cISoAASo5", "aJTdv8kE", "W71uWPdcKgq", "WPJdT8k7W5S", 'W77cTHqxW68', 'g8kMlCkXvG', "dXJcNCoREW", "W77cNWmAWO4", "aqhdNW3cIG", "lXJdRq", "WR/dImkneWO", 'WOtdV8k5W6pdTq', "w8ofWOldK8oq", 'ltXazCk+', '4lAy4lAD4lEr4ls24lEn', "WRNcVCo3Bay", "a2RdPSkDlW", "WO/cRSoUWOFcNq", "nmkCp8kFFG", "hLa/WQi2", "WPtdTmkwmYq", "jGbu", "DuD5", "W7FcU8oSp8kt", "W7bYpSo9W4q", 'vmoRyG', "evldLSkJla", "W7FcQSoRomk1", 'BCkrWPO', "CJJcHCossG", 'h0VdTSkhkq', 'W5PTzG', "W4RcOsq8WRS", "mWv/EmoG", "A2RdICop", "W7nJpSkFW5e", "WRpcMMe2pq", 'kc1iFCk7', "WRZdICkrhY8", "FSkpWO7dP38", 'W5uxp33dRa', "WQP3CCk6ya", "4lEq4lA+WOWtWO4", 'W6hcPSo2EG', "bN3dVmkAiW", "WQnyWOC", "WOLVfsez", "BCk6jXRdPa", "W5BdTvzCoG", "FCkmW4G", 'WQRdRcmOba', "cgNcIW", 'W5H/WPdcOW', "tdbhDmks", "w8o6uuxcTW", "yM3dIrrx", "W6JdGKHKoW", "fsJdOWRcVa", "WQFcIComWRhcRa", "W5hcPSoRBW", "ESoHthVcHa", "ncru", "hZRcIKjT", "W5hdOHO", 'imoLW6LgW64', "pSkygmkpDW", 'WPzmsMtdQq', "W5NdRWix", "W4pdH8kZW4W", "WPrSfbCA", "xupdOSoRrG", "WQ0iE05+", 'v2ldM8okya', "BCkqWPm", "WRvWkG", "WPuLWRlcMmoY", "WOTZW5S", "gM3cN2XX", "W7tdU0ldUdG", "tmo6CM/cNW", "BbeTWQjmn8oUvmoEr2WHBq", 'WRBcP3aMeG', "WObXWPzQna"];
    _0x2e3c = function () {
      return _0xbb306a;
    };
    return _0x2e3c();
  }
  ffmpeg.setFfmpegPath(ffmpegPath);
  function toAudio(_0x41d615, _0x608fb2) {
    return ffmpeg(_0x41d615, ["-vn", "-ac", '2', "-b:a", "128k", "-ar", "44100", '-f', "mp3"], _0x608fb2, "mp3");
  }
  function toPTT(_0x5a9a4c, _0x2e0a85) {
    return ffmpeg(_0x5a9a4c, ['-vn', "-c:a", 'libopus', '-b:a', '128k', '-vbr', 'on', "-compression_level", '10'], _0x2e0a85, "opus");
  }
  function toVideo(_0x1114ca, _0x53a54f) {
    return ffmpeg(_0x1114ca, ["-c:v", "libx264", "-c:a", "aac", '-ab', '128k', "-ar", '44100', "-crf", '32', "-preset", "slow"], _0x53a54f, "mp4");
  }
  var imgmsg1 = '';
  if (config.LANG === "URDU") {
    imgmsg1 = "*Sticker pe reply karein !*";
  } else {
    imgmsg1 = "*Reply to a sticker !*";
  }
  var descg1 = '';
  if (config.LANG === 'URDU') {
    descg1 = "Iss command say ap replied sticker ko image mein convert ker sakty hain..";
  } else {
    descg1 = "It converts your replied sticker to img.";
  }
  var imgmsg2 = '';
  if (config.LANG === "URDU") {
    imgmsg2 = "*Kisi tasveer par reply karo..*";
  } else {
    imgmsg2 = "*Reply to a photo !*";
  }
  var descg2 = '';
  if (config.LANG === 'URDU') {
    descg2 = "Iss command say ap reply ki gayi Tasveer ko sticker mein convert ker sakty hain..";
  } else {
    descg2 = "It converts your replied photo to sticker.";
  }
  const _0x3fae0d = {
    'pattern': "attp",
    'react': '✨',
    'alias': ['texttogif'],
    'desc': "it converts a text to gif sticker.",
    'category': "convert",
    'use': ".attp HI",
    'filename': __filename
  };
  cmd(_0x3fae0d, async (_0x20b37c, _0x5e1632, _0x4cbade, {
    from: _0x50e496,
    l: _0x4a28bf,
    quoted: _0x214cb0,
    body: _0x274848,
    isCmd: _0x31d5db,
    command: _0x33dddb,
    args: _0xc5b576,
    q: _0x5dbb9d,
    isGroup: _0x3cd8de,
    sender: _0x17503a,
    senderNumber: _0x119cf6,
    botNumber2: _0x487652,
    botNumber: _0x39ee98,
    pushname: _0x2c00e2,
    isMe: _0x25e60b,
    isOwner: _0x49de3d,
    groupMetadata: _0x14c245,
    groupName: _0xf9cbd6,
    participants: _0x15c4c7,
    groupAdmins: _0x3505fe,
    isBotAdmins: _0xa94c7f,
    isAdmins: _0x41f9dd,
    reply: _0x430b33
  }) => {
    try {
      if (!_0x5dbb9d) {
        return await _0x430b33("*Please give me a text !*");
      }
      let _0x122b44 = await getBuffer("https://api-fix.onrender.com/api/maker/attp?text=" + _0x5dbb9d);
      const _0x2c49a0 = {
        'quoted': _0x5e1632
      };
      await _0x20b37c.sendMessage(_0x50e496, {
        'sticker': await videoToWebp(_0x122b44)
      }, _0x2c49a0);
    } catch (_0x49a902) {
      _0x4a28bf(_0x49a902);
    }
  });
  const _0x452dd8 = {};
  function _0x52bd(_0xbab93d, _0x180edb) {
    const _0x423926 = _0x2e3c();
    _0x52bd = function (_0xbe386f, _0xeb5f18) {
      _0xbe386f = _0xbe386f - 0x196;
      let _0x161787 = _0x423926[_0xbe386f];
      if (_0x52bd.ksnVVw === undefined) {
        var _0xae9e3b = function (_0x1c0db8) {
          let _0x307292 = '';
          let _0x109c43 = '';
          let _0x2f2b1c = 0x0;
          let _0x40ba60;
          let _0x255d98;
          for (let _0x57af9d = 0x0; _0x255d98 = _0x1c0db8.charAt(_0x57af9d++); ~_0x255d98 && (_0x40ba60 = _0x2f2b1c % 0x4 ? _0x40ba60 * 0x40 + _0x255d98 : _0x255d98, _0x2f2b1c++ % 0x4) ? _0x307292 += String.fromCharCode(0xff & _0x40ba60 >> (-0x2 * _0x2f2b1c & 0x6)) : 0x0) {
            _0x255d98 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x255d98);
          }
          let _0x50ee8d = 0x0;
          for (let _0x3a3e63 = _0x307292.length; _0x50ee8d < _0x3a3e63; _0x50ee8d++) {
            _0x109c43 += '%' + ('00' + _0x307292.charCodeAt(_0x50ee8d).toString(0x10)).slice(-0x2);
          }
          return decodeURIComponent(_0x109c43);
        };
        const _0x230b89 = function (_0x3ca00e, _0x24577f) {
          let _0x327880 = [];
          let _0x2773e3 = 0x0;
          let _0x557f10;
          let _0x1bff21 = '';
          _0x3ca00e = _0xae9e3b(_0x3ca00e);
          let _0x377276;
          for (_0x377276 = 0x0; _0x377276 < 0x100; _0x377276++) {
            _0x327880[_0x377276] = _0x377276;
          }
          for (_0x377276 = 0x0; _0x377276 < 0x100; _0x377276++) {
            _0x2773e3 = (_0x2773e3 + _0x327880[_0x377276] + _0x24577f.charCodeAt(_0x377276 % _0x24577f.length)) % 0x100;
            _0x557f10 = _0x327880[_0x377276];
            _0x327880[_0x377276] = _0x327880[_0x2773e3];
            _0x327880[_0x2773e3] = _0x557f10;
          }
          _0x377276 = 0x0;
          _0x2773e3 = 0x0;
          for (let _0x510421 = 0x0; _0x510421 < _0x3ca00e.length; _0x510421++) {
            _0x377276 = (_0x377276 + 0x1) % 0x100;
            _0x2773e3 = (_0x2773e3 + _0x327880[_0x377276]) % 0x100;
            _0x557f10 = _0x327880[_0x377276];
            _0x327880[_0x377276] = _0x327880[_0x2773e3];
            _0x327880[_0x2773e3] = _0x557f10;
            _0x1bff21 += String.fromCharCode(_0x3ca00e.charCodeAt(_0x510421) ^ _0x327880[(_0x327880[_0x377276] + _0x327880[_0x2773e3]) % 0x100]);
          }
          return _0x1bff21;
        };
        _0x52bd.dQxTLP = _0x230b89;
        _0xbab93d = arguments;
        _0x52bd.ksnVVw = true;
      }
      const _0x403b1d = _0x423926[0x0];
      const _0x4802b3 = _0xbe386f + _0x403b1d;
      const _0x406263 = _0xbab93d[_0x4802b3];
      if (!_0x406263) {
        if (_0x52bd.pdQZYO === undefined) {
          _0x52bd.pdQZYO = true;
        }
        _0x161787 = _0x52bd.dQxTLP(_0x161787, _0xeb5f18);
        _0xbab93d[_0x4802b3] = _0x161787;
      } else {
        _0x161787 = _0x406263;
      }
      return _0x161787;
    };
    return _0x52bd(_0xbab93d, _0x180edb);
  }
  _0x452dd8.pattern = "attp2";
  _0x452dd8.react = '✨';
  _0x452dd8.alias = ["texttogif2"];
  _0x452dd8.desc = "it converts a text to gif sticker.";
  _0x452dd8.category = 'convert';
  _0x452dd8.use = ".attp2 HI";
  _0x452dd8.filename = __filename;
  cmd(_0x452dd8, async (_0x2ba0d8, _0x3c8909, _0x1f77a5, {
    from: _0x23c9dc,
    l: _0x3b3286,
    quoted: _0xfab629,
    body: _0x1e0cb0,
    isCmd: _0x55f524,
    command: _0x28fa72,
    args: _0x539ea5,
    q: _0x5b0036,
    isGroup: _0x4d3fe1,
    sender: _0x33e4ff,
    senderNumber: _0x5987ae,
    botNumber2: _0x3d00ed,
    botNumber: _0x2b9d7a,
    pushname: _0x7701b1,
    isMe: _0x44b783,
    isOwner: _0x39c7d4,
    groupMetadata: _0x4b4c7a,
    groupName: _0x526a0f,
    participants: _0xcc94,
    groupAdmins: _0x4182d2,
    isBotAdmins: _0x5e1d6f,
    isAdmins: _0x51b62e,
    reply: _0x5ec861
  }) => {
    try {
      if (!_0x5b0036) {
        return await _0x5ec861("*Please give me a text !*");
      }
      let _0x11d0de = await getBuffer("https://api-brunosobrino-dcaf9040.koyeb.app/api/maker/attp?text=" + _0x5b0036);
      const _0x29ee08 = {
        'quoted': _0x3c8909
      };
      await _0x2ba0d8.sendMessage(_0x23c9dc, {
        'sticker': await videoToWebp(_0x11d0de)
      }, _0x29ee08);
    } catch (_0x28639c) {
      _0x3b3286(_0x28639c);
    }
  });
  const _0x310dfa = {
    'pattern': "ttp",
    'react': '✨',
    'alias': ["t2p", 'ttpdl'],
    'desc': "it converts a text to sticker.",
    'category': "convert",
    'use': ".ttp HI",
    'filename': __filename
  };
  cmd(_0x310dfa, async (_0x2453a9, _0x22909d, _0x4a5f25, {
    from: _0x241bae,
    l: _0x1d7130,
    quoted: _0x5956a9,
    body: _0x45ed5c,
    isCmd: _0x46565e,
    command: _0x319481,
    args: _0x36967d,
    q: _0x439a0c,
    isGroup: _0x42d88c,
    sender: _0x415057,
    senderNumber: _0x2d2aa4,
    botNumber2: _0x11fdb1,
    botNumber: _0x17e20e,
    pushname: _0x3f5213,
    isMe: _0x5297a7,
    isOwner: _0x40301f,
    groupMetadata: _0x596379,
    groupName: _0x346b2f,
    participants: _0x516bee,
    groupAdmins: _0x4662dd,
    isBotAdmins: _0x547059,
    isAdmins: _0x4d1499,
    reply: _0x3cd0b1
  }) => {
    try {
      if (!_0x439a0c) {
        return await _0x3cd0b1("*Please give me a text !*");
      }
      let _0x542264 = await getBuffer("https://api-fix.onrender.com//api/maker/ttp?text=" + _0x439a0c);
      let _0x1019c0 = new Sticker(_0x542264, {
        'pack': "DARK-EVIL",
        'author': 'DARK-EVIL',
        'type': _0x439a0c.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x40a594 = await _0x1019c0.toBuffer();
      const _0x5942bd = {
        'sticker': _0x40a594
      };
      const _0x182983 = {
        'quoted': _0x22909d
      };
      return _0x2453a9.sendMessage(_0x241bae, _0x5942bd, _0x182983);
    } catch (_0x5af970) {
      _0x1d7130(_0x5af970);
    }
  });
  const _0x386a0c = {
    'pattern': "sticker",
    'react': '🔮',
    'alias': ['s', "stic"],
    'desc': descg2
  };
  function _0x19d345(_0x357be4, _0x4f7b75, _0x4633c7, _0x15ec72, _0x4feed5) {
    return _0x52bd(_0x4633c7 + 0x92, _0x15ec72);
  }
  _0x386a0c.category = "convert";
  _0x386a0c.use = ".sticker <Reply to image>";
  _0x386a0c.filename = __filename;
  cmd(_0x386a0c, async (_0x448ad6, _0x376d09, _0xd799cd, {
    from: _0x1eac60,
    l: _0x39a9b9,
    quoted: _0xbc6970,
    body: _0x585122,
    isCmd: _0x5e7a3f,
    command: _0x1e6cfd,
    args: _0x304def,
    q: _0x3c6598,
    isGroup: _0x1dd145,
    sender: _0x4bb9bb,
    senderNumber: _0x1ee4d7,
    botNumber2: _0x7e04e,
    botNumber: _0x3f6f19,
    pushname: _0x4a1082,
    isMe: _0x598274,
    isOwner: _0x576229,
    groupMetadata: _0x1c43ac,
    groupName: _0x60d7ed,
    participants: _0x5c13ef,
    groupAdmins: _0x123b29,
    isBotAdmins: _0x59d352,
    isAdmins: _0x55d4f5,
    reply: _0x4ca093
  }) => {
    try {
      const _0x9f0d8a = _0xd799cd.quoted ? _0xd799cd.quoted.type === "viewOnceMessage" : false;
      const _0x480373 = _0xd799cd.quoted ? _0xd799cd.quoted.type === 'imageMessage' || (_0x9f0d8a ? _0xd799cd.quoted.msg.type === "imageMessage" : false) : false;
      const _0x3b2f62 = _0xd799cd.quoted ? _0xd799cd.quoted.type === "stickerMessage" : false;
      if (_0xd799cd.type === "imageMessage" || _0x480373) {
        var _0x1da585 = getRandom('');
        if (_0x480373) {
          await _0xd799cd.quoted.download(_0x1da585);
        } else {
          await _0xd799cd.download(_0x1da585);
        }
        let _0x59898b = new Sticker(_0x1da585 + ".jpg", {
          'pack': _0x4a1082,
          'author': '',
          'type': _0x3c6598.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': '12345',
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x406404 = await _0x59898b.toBuffer();
        const _0x310db7 = {
          'sticker': _0x406404
        };
        const _0x2692e0 = {
          'quoted': _0x376d09
        };
        return _0x448ad6.sendMessage(_0x1eac60, _0x310db7, _0x2692e0);
      } else {
        if (_0x3b2f62) {
          var _0x307f9d = getRandom('');
          await _0xd799cd.quoted.download(_0x307f9d);
          let _0x5bbf9a = new Sticker(_0x307f9d + '.webp', {
            'pack': _0x4a1082,
            'author': '',
            'type': _0x3c6598.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': '12345',
            'quality': 0x4b,
            'background': "transparent"
          });
          const _0x283434 = await _0x5bbf9a.toBuffer();
          const _0xfd8f15 = {
            'sticker': _0x283434
          };
          const _0x52c5b5 = {
            'quoted': _0x376d09
          };
          return _0x448ad6.sendMessage(_0x1eac60, _0xfd8f15, _0x52c5b5);
        } else {
          return await _0x4ca093(imgmsg2);
        }
      }
    } catch (_0x484915) {
      _0x4ca093("*Error !!*");
      _0x39a9b9(_0x484915);
    }
  });
  const _0x2d0e49 = {
    'pattern': "emojimix",
    'react': '😁',
    'desc': "To convert 2 imoji to 1",
    'category': "convert",
    'use': ".emojimix"
  };
  function _0x490b92(_0x560baa, _0x16364c, _0x473586, _0x10f175, _0x39c0b) {
    return _0x52bd(_0x16364c - 0x304, _0x473586);
  }
  _0x2d0e49.filename = __filename;
  cmd(_0x2d0e49, async (_0xe32405, _0x513653, _0x32bcf5, {
    from: _0x22eeae,
    prefix: _0x37587d,
    l: _0x3d807b,
    quoted: _0xa3337a,
    body: _0x24708a,
    isCmd: _0x1ba60a,
    command: _0x20866b,
    args: _0x10e2d7,
    q: _0x316b75,
    isGroup: _0x55d84f,
    sender: _0x168e6d,
    senderNumber: _0x47cd79,
    botNumber2: _0x24c952,
    botNumber: _0x424feb,
    pushname: _0x142916,
    isMe: _0x1429de,
    isOwner: _0x54d55e,
    groupMetadata: _0x434caf,
    groupName: _0x144946,
    participants: _0x40945e,
    groupAdmins: _0x3bfd70,
    isBotAdmins: _0x3d87f0,
    isAdmins: _0x3ab510,
    reply: _0x409728
  }) => {
    try {
      let [_0x911107, _0x3f4000] = _0x316b75.split`+`;
      if (!_0x911107) {
        throw "Example: " + (_0x37587d + _0x20866b) + " 😅+🤔";
      }
      if (!_0x3f4000) {
        throw "Example: " + (_0x37587d + _0x20866b) + " 😅+🤔";
      }
      let _0x1e3f11 = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x911107) + '_' + encodeURIComponent(_0x3f4000));
      for (let _0x41d508 of _0x1e3f11.results) {
        let _0x967997 = await _0xe32405.sendImageAsSticker(_0x22eeae, _0x41d508.url, _0x513653, {
          'packname': global.packname,
          'author': global.author,
          'categories': _0x41d508.tags
        });
        await fs.unlinkSync(_0x967997);
      }
      const _0x306734 = {
        'text': '✅',
        'key': _0x513653.key
      };
      const _0x3d12fe = {
        'react': _0x306734
      };
      await _0xe32405.sendMessage(_0x22eeae, _0x3d12fe);
    } catch (_0x524a38) {
      _0x409728("*Error !!*");
      _0x3d807b(_0x524a38);
    }
  });
  const _0x524f3c = {
    'pattern': "trt",
    'react': '🔖',
    'desc': "To convert languages"
  };
  function _0x4ad0f3(_0x27d44d, _0x101cc5, _0x268ebf, _0x473ce7, _0x2015ae) {
    return _0x52bd(_0x473ce7 + 0x1e0, _0x101cc5);
  }
  _0x524f3c.category = 'convert';
  _0x524f3c.use = '.trt';
  _0x524f3c.filename = __filename;
  cmd(_0x524f3c, async (_0xbcc733, _0x32abda, _0xd05801, {
    from: _0x5965ff,
    prefix: _0x161ca6,
    l: _0x2a7cb6,
    quoted: _0x1ec782,
    body: _0x1ed67b,
    isCmd: _0x4b5976,
    command: _0x162cd7,
    args: _0x5bf879,
    q: _0x6be391,
    isGroup: _0x3b86c1,
    sender: _0x1f5c44,
    senderNumber: _0x19b59e,
    botNumber2: _0x183c9a,
    botNumber: _0x4637ed,
    pushname: _0x495aab,
    isMe: _0x20640b,
    isOwner: _0x3ba07e,
    groupMetadata: _0x2699b6,
    groupName: _0x567caf,
    participants: _0x5928c0,
    groupAdmins: _0x14d58a,
    isBotAdmins: _0x508ed2,
    isAdmins: _0x189936,
    reply: _0x4d4f1a
  }) => {
    try {
      if (!_0x6be391) {
        return mreply("Usage: .trt <language code> <text> or reply message");
      }
      if (_0x6be391 && _0x32abda.quoted && _0x32abda.quoted.text) {
        let _0x3e8803 = _0x6be391.slice(0x0, 0x2);
        try {
          let _0x447baf = _0x32abda.quoted.q;
          const _0x3758f6 = {
            'to': _0x3e8803
          };
          let _0x3c0fcc = await translate('' + _0x447baf, _0x3758f6);
          _0x4d4f1a(_0x3c0fcc[0x0]);
        } catch {
          return _0x4d4f1a(" Language code not supported.");
        }
      } else {
        if (_0x6be391) {
          let _0x3c0c83 = _0x6be391.slice(0x0, 0x2);
          let _0x489ea0 = _0x6be391.substring(0x2).trim();
          const _0x26d840 = {
            'to': _0x3c0c83
          };
          let _0x3374ea = await translate('' + _0x489ea0, _0x26d840);
          _0x4d4f1a(_0x3374ea[0x0]);
        }
      }
      const _0x2c4390 = {
        'text': '✅',
        'key': _0x32abda.key
      };
      const _0x179af4 = {
        'react': _0x2c4390
      };
      await _0xbcc733.sendMessage(_0x5965ff, _0x179af4);
    } catch (_0x3883dc) {
      _0x4d4f1a("*Error !!*");
      _0x2a7cb6(_0x3883dc);
    }
  });
  const _0x3e71e4 = {
    'pattern': "toimg",
    'react': '🔮',
    'desc': descg1,
    'category': "convert",
    'use': ".sticker <Reply to image>",
    'filename': __filename
  };
  cmd(_0x3e71e4, async (_0x3085fe, _0x28b8d8, _0x3611a5, {
    from: _0xc86527,
    l: _0x40e0d1,
    quoted: _0x4e6058,
    body: _0x4624b9,
    isCmd: _0x380e54,
    command: _0x5ddccf,
    args: _0x2440d8,
    q: _0x9684af,
    isGroup: _0xf32c3e,
    sender: _0x462496,
    senderNumber: _0x44852d,
    botNumber2: _0x4997c7,
    botNumber: _0x5a5921,
    pushname: _0x4cf198,
    isMe: _0x31c223,
    isOwner: _0x43be97,
    groupMetadata: _0x195ef4,
    groupName: _0x404b0c,
    participants: _0x3983d5,
    groupAdmins: _0x23eac0,
    isBotAdmins: _0x283d93,
    isAdmins: _0x2d3b20,
    reply: _0x1371d2
  }) => {
    try {
      const _0x1b36bc = _0x3611a5.quoted ? _0x3611a5.quoted.type === "stickerMessage" : false;
      if (_0x1b36bc) {
        var _0x46bdc2 = getRandom('');
        let _0x520ec9 = _0x1b36bc ? await _0x3611a5.quoted.download(_0x46bdc2) : await _0x3611a5.download(_0x46bdc2);
        let _0x54a451 = await fileType.fromBuffer(_0x520ec9);
        await fs.promises.writeFile('./' + _0x54a451.ext, _0x520ec9);
        const _0x29e1a1 = {
          'quoted': _0x28b8d8
        };
        await _0x3085fe.sendMessage(_0xc86527, {
          'image': fs.readFileSync('./' + _0x54a451.ext),
          'caption': config.FOOTER
        }, _0x29e1a1);
      } else {
        return await _0x1371d2(imgmsg1);
      }
    } catch (_0x4c974f) {
      _0x1371d2("*Error !!*");
      _0x40e0d1(_0x4c974f);
    }
  });
  const _0x7e4619 = {
    'pattern': 'tomp3',
    'react': '🔊',
    'alias': ["toaudio", "tosong"],
    'desc': "It converts your replied video to audio [mp3].",
    'category': 'convert',
    'use': ".toptt <Reply to video>",
    'filename': __filename
  };
  cmd(_0x7e4619, async (_0x14efc8, _0x346c72, _0x52cfd1, {
    from: _0x29774f,
    l: _0x3f5cff,
    quoted: _0x370c75,
    body: _0x5ebea8,
    isCmd: _0x5f47a1,
    command: _0x292342,
    args: _0x2ba6e7,
    q: _0x2c203d,
    isGroup: _0x4af7f2,
    sender: _0x111855,
    senderNumber: _0x385c41,
    botNumber2: _0x537782,
    botNumber: _0x192c96,
    pushname: _0x127c08,
    isMe: _0x4bedb3,
    isOwner: _0x3d49a2,
    groupMetadata: _0x323366,
    groupName: _0x37ffea,
    participants: _0x113302,
    groupAdmins: _0x40d1fb,
    isBotAdmins: _0x1292cb,
    isAdmins: _0x5b329b,
    reply: _0x56a4ab
  }) => {
    try {
      let _0x3aed55 = _0x52cfd1.quoted ? _0x52cfd1.quoted.type === "videoMessage" : _0x52cfd1 ? _0x52cfd1.type === "videoMessage" : false;
      if (!_0x3aed55) {
        return await _0x56a4ab("*Reply to a video !*");
      }
      let _0x3c34e9 = _0x52cfd1.quoted ? await _0x52cfd1.quoted.download() : await _0x52cfd1.download();
      let _0x36037e = await ffmpeg(_0x3c34e9, ['-vn', '-c:a', "libopus", "-b:a", '128k', "-vbr", 'on', '-compression_level', '10'], 'mp4', "opus");
      const _0x3287fd = {
        'audio': _0x36037e.options,
        'mimetype': "audio/mpeg"
      };
      let _0x5340a9 = await _0x14efc8.sendMessage(_0x52cfd1.chat, _0x3287fd, {
        'quoted': _0x52cfd1
      });
      const _0x15b215 = {
        'text': '🎼',
        'key': _0x5340a9.key
      };
      const _0x15838e = {
        'react': _0x15b215
      };
      await _0x14efc8.sendMessage(_0x29774f, _0x15838e);
    } catch (_0xaa591e) {
      _0x56a4ab("*Error !!*");
      _0x3f5cff(_0xaa591e);
    }
  });
  const _0x307812 = {
    'pattern': "toqr",
    'react': '🔊',
    'desc': "It converts your replied video to audio [mp3].",
    'category': 'convert',
    'use': ".toqr <Reply a text or a url>",
    'filename': __filename
  };
  cmd(_0x307812, async (_0x13a494, _0x5b063c, _0x12c76a, {
    from: _0x121e7d,
    l: _0x53ef22,
    quoted: _0x3b4706,
    body: _0x1e8acb,
    prefix: _0x1c041f,
    isCmd: _0x5730f0,
    command: _0x5a8afd,
    args: _0x1738da,
    q: _0x399724,
    isGroup: _0x1b9b6b,
    sender: _0xaf6bd6,
    senderNumber: _0x362aad,
    botNumber2: _0x56f446,
    botNumber: _0x1acbd0,
    pushname: _0x4e7fb2,
    isMe: _0x436d41,
    isOwner: _0x134818,
    groupMetadata: _0x11860d,
    groupName: _0xf292ea,
    participants: _0xb901dc,
    groupAdmins: _0xb92d25,
    isBotAdmins: _0x282c81,
    isAdmins: _0x5120c2,
    reply: _0x247de0
  }) => {
    try {
      if (!_0x399724) {
        return _0x247de0(" Please include link or text!");
      }
      const _0x49c01f = require("qrcode");
      const _0x230223 = {
        'scale': 0x23
      };
      let _0x6e6dbe = await _0x49c01f.toDataURL(_0x399724, _0x230223);
      let _0x134f2c = new Buffer.from(_0x6e6dbe.replace("data:image/png;base64,", ''), "base64");
      let _0x3e79ae = getRandom('.jpg');
      await fs.writeFileSync('./' + _0x3e79ae, _0x134f2c);
      let _0x31e4cb = fs.readFileSync('./' + _0x3e79ae);
      const _0x5d9ea7 = {
        'image': _0x31e4cb,
        'caption': "Here you go!"
      };
      const _0x412b4e = {
        'quoted': _0x12c76a
      };
      await _0x13a494.sendMessage(_0x121e7d, _0x5d9ea7, _0x412b4e);
      setTimeout(() => {
        fs.unlinkSync(_0x3e79ae);
      }, 0x2710);
      const _0x139828 = {
        'text': '🎼',
        'key': _0x5b063c.key
      };
      const _0x3ef3c5 = {
        'react': _0x139828
      };
      await _0x13a494.sendMessage(_0x121e7d, _0x3ef3c5);
    } catch (_0x5aceed) {
      _0x247de0("*Error !!*");
      _0x53ef22(_0x5aceed);
    }
  });