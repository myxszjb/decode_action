//Wed Dec 10 2025 13:35:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x2e0330 = require("axios"),
  _0xfa1926 = require("crypto"),
  _0x542afd = require("querystring");
function _0x5dc4c2(_0x5248e3) {
  const _0x3f70c8 = "xK9mP2nQ5rT8wY3",
    _0x540081 = Buffer.from(_0x5248e3, "base64").toString("binary");
  let _0x1ad741 = "";
  const _0x520a9c = _0x3f70c8.length;
  for (let _0x504b5d = 0; _0x504b5d < _0x540081.length; _0x504b5d++) {
    _0x1ad741 += String.fromCharCode(_0x540081.charCodeAt(_0x504b5d) ^ _0x3f70c8.charCodeAt(_0x504b5d % _0x520a9c));
  }
  return _0x1ad741;
}
const _0x39a57c = _0x5dc4c2("EzhmDCVGAQ5cAgtLEjpBHT9mBjVLMWMFQGA="),
  _0x429368 = _0x5dc4c2("EzhmBj1tDyFcLSddFCtWDBRSCCltXGEHRg=="),
  _0x505c1a = _0x5dc4c2("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcGTtQQyBaHg=="),
  _0x4dfcb3 = _0x5dc4c2("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcEyYXHThC"),
  _0x2dd67b = _0x5dc4c2("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcFT8XHThC"),
  _0x49c9f1 = _0x5dc4c2("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcGTtQQyBaHm5UESBRGDcOHy5NMjFcAD5AHDddGjxdDA=="),
  _0x569b3b = "\n══════════════════════════════════════════════════\n          使用协议\n══════════════════════════════════════════════════\n\n1. 本脚本永久免费使用，不收取任何费用\n2. 我们不抽成、不偷ck、不卖卡密\n3. 脚本仅供学习交流使用，请勿用于非法用途\n4. 使用本脚本需要卡密验证，请加Q群获取：1034077503\n5. 使用脚本前必须将IP添加到白名单\n6. 禁止倒卖、破解、修改脚本后再分发\n7. 使用者必须遵守相关法律法规，否则后果自负\n8. 如遇到问题，请在Q群反馈，我们会及时处理\n";
function _0x30ee01() {
  const _0x4a9962 = [],
    _0x58b2a1 = process.env.mtck || "";
  _0x58b2a1 && _0x4a9962.push(_0x58b2a1);
  for (let _0xf8182b = 1; _0xf8182b <= 9; _0xf8182b++) {
    {
      const _0x452d4b = process.env["mtck" + _0xf8182b] || "";
      _0x452d4b && _0x4a9962.push(_0x452d4b);
    }
  }
  return _0x4a9962;
}
const _0xc6eacf = {
  "apiUrl": _0x2dd67b,
  "cardSecret": process.env.km || "",
  "meituanAccounts": _0x30ee01(),
  "delay": parseInt(process.env.MT_DELAY) || 1000,
  "announcementUrl": _0x49c9f1,
  "pushToken": process.env.push || "",
  "agreement": process.env.agreement || ""
};
let _0x5025dc = {};
async function _0x1594e4() {
  try {
    {
      _0x2b6abf("正在从后台获取券列表...");
      const _0x19ac4a = await _0x2e0330.post(_0xc6eacf.apiUrl, new URLSearchParams({
        "action": "get_coupons"
      }), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 10000
      });
      if (_0x19ac4a.data && _0x19ac4a.data.success && _0x19ac4a.data.data) {
        {
          _0x5025dc = _0x19ac4a.data.data;
          const _0x509e6a = Object.values(_0x5025dc).join(", ");
          _0x2b6abf("[成功] 已加载 " + _0x19ac4a.data.count + " 个券: " + _0x509e6a, "success");
          return true;
        }
      } else {
        {
          const _0x5ce81b = _0x19ac4a.data?.["message"] || "未知错误";
          _0x2b6abf("[错误] 获取券列表失败: " + _0x5ce81b, "error");
          if (_0x19ac4a.data?.["code"] === 403) _0x2b6abf("[提示] 您的IP可能未在白名单中，请重新运行脚本", "warn"), _0x2b6abf("[提示] 当前IP: " + (_0x19ac4a.data?.["ip"] || "未知"), "warn");else {
            _0x2b6abf("请在后台\"美团券管理\"中添加并启用券", "error");
          }
          return false;
        }
      }
    }
  } catch (_0x1b4cf2) {
    {
      if (_0x1b4cf2.response && _0x1b4cf2.response.status === 403) {
        _0x2b6abf("[错误] 获取券列表失败: IP未在白名单中 (403)", "error");
        _0x2b6abf("[提示] 请稍等片刻后重新运行脚本，或联系管理员手动添加IP", "warn");
        if (_0x1b4cf2.response.data?.["ip"]) {
          _0x2b6abf("[提示] 需要添加的IP: " + _0x1b4cf2.response.data.ip, "warn");
        }
      } else _0x2b6abf("[错误] 获取券列表失败: " + _0x1b4cf2.message, "error"), _0x2b6abf("请检查网络连接或联系管理员", "error");
      return false;
    }
  }
}
function _0xe4aa7f(_0x41350a) {
  return new Promise(_0x31c6d7 => setTimeout(_0x31c6d7, _0x41350a));
}
function _0x28190a() {
  const _0x233701 = 30000,
    _0x4ed7fa = 90000,
    _0x3d7f50 = Math.floor(Math.random() * (_0x4ed7fa - _0x233701 + 1)) + _0x233701;
  return _0x3d7f50;
}
async function _0x45e859(_0x2a74ff, _0x3443dd) {
  if (!_0xc6eacf.pushToken) {
    return;
  }
  try {
    const _0x131057 = await _0x2e0330.post("http://www.pushplus.plus/send", {
      "token": _0xc6eacf.pushToken,
      "title": _0x2a74ff,
      "content": _0x3443dd,
      "template": "html"
    }, {
      "timeout": 10000
    });
    _0x131057.data && _0x131057.data.code === 200 ? _0x2b6abf("[成功] 推送通知发送成功", "success") : _0x2b6abf("[失败] 推送通知发送失败: " + (_0x131057.data?.["msg"] || "未知错误"), "warn");
  } catch (_0x1f60a7) {
    _0x2b6abf("[异常] 推送通知发送异常: " + _0x1f60a7.message, "warn");
  }
}
function _0x2b6abf(_0x398295, _0x5f00b3 = "info") {
  const _0x35afa7 = new Date(),
    _0x37d8db = _0x35afa7.toLocaleTimeString("zh-CN", {
      "hour12": false
    });
  console.log("[" + _0x37d8db + "] " + _0x398295);
}
async function _0x1c2f72() {
  try {
    {
      const _0x455134 = await _0x2e0330.get(_0xc6eacf.announcementUrl, {
        "timeout": 3000,
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
      if (_0x455134.data && _0x455134.data.success && _0x455134.data.data) {
        {
          const _0x3268ce = Array.isArray(_0x455134.data.data) ? _0x455134.data.data : [_0x455134.data.data];
          _0x3268ce.forEach((_0x417d00, _0x31f109) => {
            const _0x3200ca = _0x417d00.title || "系统公告 " + (_0x31f109 + 1),
              _0x51d1c5 = _0x417d00.content || "",
              _0x115003 = _0x51d1c5.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n");
            console.log("\n" + _0x3200ca);
            console.log("═".repeat(50));
            console.log(_0x115003);
            console.log("═".repeat(50));
            _0x31f109 < _0x3268ce.length - 1 && console.log("");
          });
          return;
        }
      }
    }
  } catch (_0x59c73c) {
    console.log("远程公告获取失败，继续执行脚本");
  }
}
async function _0x70cd69() {
  const _0x15a29e = ["https://api.ipify.org?format=json", "https://ipinfo.io/json", "https://api.ip.sb/ip"];
  for (const _0xe055eb of _0x15a29e) {
    try {
      const _0x34f0d4 = await _0x2e0330.get(_0xe055eb, {
        "timeout": 5000
      });
      let _0x5230bd = null;
      if (typeof _0x34f0d4.data === "string") {
        _0x5230bd = _0x34f0d4.data.trim();
      } else {
        if (_0x34f0d4.data.ip) _0x5230bd = _0x34f0d4.data.ip;else _0x34f0d4.data.query && (_0x5230bd = _0x34f0d4.data.query);
      }
      if (_0x5230bd && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x5230bd)) return _0x5230bd;
    } catch (_0x5d9c83) {
      continue;
    }
  }
  return null;
}
async function _0xdfba82(_0x216ada) {
  if (!_0x216ada) return _0x2b6abf("❌ 错误: 未设置km环境变量，无法运行脚本", "error"), _0x2b6abf("请在环境变量中配置：km=你的卡密", "error"), _0x2b6abf("获取卡密Q群：1034077503", "warn"), false;
  _0x2b6abf("🔐 正在验证卡密...");
  try {
    {
      const _0x569a69 = Math.floor(Date.now() / 1000).toString(),
        _0x559bd1 = _0xfa1926.createHash("md5").update(_0x216ada + _0x569a69 + _0x429368).digest("hex"),
        _0x23877f = await _0x2e0330.post(_0x4dfcb3, JSON.stringify({
          "km": _0x216ada,
          "timestamp": _0x569a69,
          "sign": _0x559bd1
        }), {
          "headers": {
            "Content-Type": "application/json"
          },
          "timeout": 10000
        }),
        _0x17d330 = _0x23877f.data;
      return _0x17d330 && _0x17d330.success === true ? (_0x2b6abf("✅ 卡密验证成功，允许运行脚本", "success"), true) : (_0x2b6abf("❌ 卡密验证失败: " + (_0x17d330?.["message"] || "验证不通过"), "error"), _0x2b6abf("请检查卡密是否正确，或联系Q群：1034077503", "warn"), false);
    }
  } catch (_0x4be176) {
    _0x2b6abf("❌ 卡密验证异常: " + _0x4be176.message, "error");
    _0x2b6abf("可能原因：网络连接失败或服务器无响应", "warn");
    _0x2b6abf("请检查网络连接后重试，或联系Q群：1034077503", "warn");
    return false;
  }
}
async function _0x5406a1() {
  let _0x3460df = await _0x70cd69();
  if (!_0x3460df) {
    {
      const _0xa26f39 = process.env.ip;
      if (_0xa26f39 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0xa26f39)) _0x2b6abf("自动获取IP失败，使用手动配置: " + _0xa26f39, "warn"), _0x3460df = _0xa26f39;else {
        _0x2b6abf("无法获取公网IP，请检查网络连接或配置ip变量", "error");
        return false;
      }
    }
  } else _0x2b6abf("获取到公网IP: " + _0x3460df, "success"), _0x1fb6f2 = _0x3460df;
  try {
    {
      const _0x563b90 = Math.floor(Date.now() / 1000).toString(),
        _0xbca1e3 = "mt.js脚本",
        _0x23d865 = _0xfa1926.createHash("md5").update(_0x3460df + _0xbca1e3 + _0x563b90 + _0x39a57c).digest("hex"),
        _0xe6a0f9 = await _0x2e0330.post(_0x505c1a, _0x542afd.stringify({
          "action": "auto_add_ip",
          "ip": _0x3460df,
          "source": _0xbca1e3,
          "timestamp": _0x563b90,
          "sign": _0x23d865
        }), {
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "timeout": 10000
        });
      if (_0xe6a0f9.data && _0xe6a0f9.data.success) {
        _0x2b6abf("白名单添加成功: " + _0x3460df, "success");
        return true;
      } else {
        {
          _0x2b6abf("白名单自动添加失败: " + (_0xe6a0f9.data?.["message"] || "未知错误"), "warn");
          _0x2b6abf("检查IP是否已在白名单中...");
          const _0x553e98 = Math.floor(Date.now() / 1000).toString(),
            _0x14df83 = _0xfa1926.createHash("md5").update(_0x3460df + "heartbeat" + _0x553e98 + _0x39a57c).digest("hex"),
            _0x35164c = await _0x2e0330.post(_0x505c1a, _0x542afd.stringify({
              "action": "check_whitelist",
              "ip": _0x3460df,
              "timestamp": _0x553e98,
              "sign": _0x14df83
            }), {
              "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              "timeout": 10000
            }),
            _0x427a03 = _0x35164c.data && _0x35164c.data.in_whitelist === true || _0x35164c.data && _0x35164c.data.success === true;
          return _0x427a03 ? (_0x2b6abf("IP已在白名单中（可能是管理员手动添加）: " + _0x3460df, "success"), true) : (_0x2b6abf("IP不在白名单中，脚本无法继续运行", "error"), _0x2b6abf("   返回数据: " + JSON.stringify(_0x35164c.data)), _0x2b6abf("   提示: 请联系管理员确认白名单: " + _0x3460df), false);
        }
      }
    }
  } catch (_0x3655f9) {
    _0x2b6abf("IP白名单操作异常: " + _0x3655f9.message, "error");
    return false;
  }
}
let _0x1ffec9 = null,
  _0x1fb6f2 = null;
async function _0x496c31() {
  try {
    {
      let _0x45a024 = _0x1fb6f2 || (await _0x70cd69());
      if (!_0x45a024) {
        _0x2b6abf("白名单心跳检查异常: 无法获取IP，继续运行", "warn");
        return;
      }
      const _0xc94da2 = Math.floor(Date.now() / 1000).toString(),
        _0x28dddf = _0xfa1926.createHash("md5").update(_0x45a024 + "heartbeat" + _0xc94da2 + _0x39a57c).digest("hex"),
        _0x3f6689 = await _0x2e0330.post(_0x505c1a, _0x542afd.stringify({
          "action": "check_whitelist",
          "ip": _0x45a024,
          "timestamp": _0xc94da2,
          "sign": _0x28dddf
        }), {
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "timeout": 10000
        }),
        _0x1af1c8 = _0x3f6689.data && _0x3f6689.data.in_whitelist === true || _0x3f6689.data && _0x3f6689.data.success === true;
      if (_0x1af1c8) {} else _0x2b6abf("白名单心跳检查失败: " + (_0x3f6689.data?.["message"] || "IP不在白名单中"), "error"), _0x2b6abf("   返回数据: " + JSON.stringify(_0x3f6689.data)), _0x2b6abf("可能原因: 1.白名单刚添加未生效 2.IP已过期被删除 3.网络波动", "warn"), _0x2b6abf("将在下次检查时重新验证，暂不退出脚本", "warn");
    }
  } catch (_0x5d7b0a) {
    _0x2b6abf("白名单心跳检查异常: " + _0x5d7b0a.message + "，继续运行", "warn");
  }
}
function _0x1c0a47() {
  _0x1ffec9 && clearInterval(_0x1ffec9);
  setTimeout(() => {
    _0x496c31();
  }, 10000);
  _0x1ffec9 = setInterval(() => {
    _0x496c31();
  }, 300000);
}
function _0x157670(_0x50baaa) {
  try {
    {
      const _0x22ed01 = new URL(_0x50baaa),
        _0x152bf5 = _0x22ed01.searchParams.get("userId"),
        _0xdff8e9 = _0x22ed01.searchParams.get("token");
      if (!_0x152bf5 || !_0xdff8e9) {
        throw new Error("URL中缺少userId或token参数");
      }
      return {
        "userId": _0x152bf5,
        "token": _0xdff8e9
      };
    }
  } catch (_0x17d08b) {
    throw new Error("URL解析失败: " + _0x17d08b.message);
  }
}
async function _0x1ff76b(_0x352a37, _0xa57691 = {}) {
  try {
    {
      const _0x2ddf76 = new URLSearchParams();
      _0x2ddf76.append("action", _0x352a37);
      _0x2ddf76.append("card", _0xc6eacf.cardSecret);
      for (const _0x2ae053 in _0xa57691) {
        _0x2ddf76.append(_0x2ae053, _0xa57691[_0x2ae053]);
      }
      const _0x59951b = await _0x2e0330.post(_0xc6eacf.apiUrl, _0x2ddf76, {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        "timeout": 30000
      });
      return _0x59951b.data;
    }
  } catch (_0x214240) {
    {
      if (_0x214240.response) return {
        "success": false,
        "message": "HTTP错误: " + _0x214240.response.status,
        "error": _0x214240.response.data
      };else {
        if (_0x214240.request) {
          return {
            "success": false,
            "message": "网络请求超时或无响应"
          };
        } else {
          return {
            "success": false,
            "message": _0x214240.message
          };
        }
      }
    }
  }
}
async function _0x4c9cc5(_0x5bb80a, _0x587af3, _0x4be256) {
  const _0x16623b = _0x5025dc[_0x5bb80a] || _0x5bb80a;
  _0x2b6abf("正在领取券: " + _0x16623b);
  const _0x41be6a = await _0x1ff76b("meituan_receive", {
      "coupon_id": _0x5bb80a,
      "user_id": _0x587af3,
      "meituan_token": _0x4be256
    }),
    _0x310025 = _0x41be6a.message || "",
    _0x20400d = _0x310025.includes("失败") || _0x310025.includes("已失效") || _0x310025.includes("错误") || _0x310025.includes("异常");
  if (_0x41be6a.success && !_0x20400d) {
    let _0x54c6ba = _0x310025 || "领券成功";
    if (_0x54c6ba.includes(":")) {
      const _0x2cf223 = _0x54c6ba.split(":");
      _0x2cf223.length > 1 && (_0x54c6ba = _0x2cf223.slice(1).join(":").trim());
    }
    _0x2b6abf("[成功] 券 " + _0x16623b + " 领取成功: " + _0x54c6ba, "success");
    return {
      "success": true,
      "couponId": _0x5bb80a,
      "message": _0x54c6ba
    };
  } else {
    let _0x1f320a = _0x310025 || "领券失败";
    _0x1f320a.startsWith("失败:") && (_0x1f320a = _0x1f320a.substring(3).trim());
    _0x1f320a.startsWith("失败>") && (_0x1f320a = _0x1f320a.substring(3).trim());
    const _0x364278 = _0x41be6a.error_type || "unknown";
    if (_0x364278 === "already_claimed" || _0x1f320a.includes("已领") || _0x1f320a.includes("已抽")) _0x2b6abf("[已领] 券 " + _0x16623b + " " + _0x1f320a, "warn");else {
      if (_0x364278 === "limit_exceeded" || _0x1f320a.includes("已失效") || _0x1f320a.includes("链接")) {
        _0x2b6abf("[失效] 券 " + _0x16623b + " " + _0x1f320a, "warn");
      } else _0x2b6abf("[失败] 券 " + _0x16623b + " 领取失败: " + _0x1f320a, "error");
    }
    return {
      "success": false,
      "couponId": _0x5bb80a,
      "message": _0x1f320a,
      "error_type": _0x364278
    };
  }
}
async function _0x44bcef(_0x174f0f, _0x3204d5, _0x2a9167) {
  _0x2b6abf("========================================");
  _0x2b6abf("开始批量领券");
  _0x2b6abf("========================================");
  const _0x452cb6 = [];
  let _0x50fc8a = 0,
    _0x3d3a65 = 0,
    _0x23a2ab = 0,
    _0x30c479 = 0,
    _0x21ec73 = 0;
  for (let _0x4ee40f = 0; _0x4ee40f < _0x174f0f.length; _0x4ee40f++) {
    const _0x4fa32a = _0x174f0f[_0x4ee40f],
      _0x288462 = await _0x4c9cc5(_0x4fa32a, _0x3204d5, _0x2a9167);
    _0x452cb6.push(_0x288462);
    if (_0x288462.success) {
      {
        _0x50fc8a++;
        if (_0x4ee40f < _0x174f0f.length - 1) {
          {
            const _0x2bb341 = _0x28190a(),
              _0x57b516 = Math.round(_0x2bb341 / 1000);
            _0x2b6abf("领券成功，等待 " + _0x57b516 + " 秒后继续...", "success");
            await _0xe4aa7f(_0x2bb341);
          }
        }
      }
    } else {
      {
        _0x3d3a65++;
        if (_0x288462.error_type === "already_claimed") _0x23a2ab++;else {
          if (_0x288462.error_type === "limit_exceeded") _0x30c479++;else {
            if (_0x288462.error_type === "daily_limit_exceeded") {
              _0x21ec73++;
            }
          }
        }
        _0x4ee40f < _0x174f0f.length - 1 && (await _0xe4aa7f(_0xc6eacf.delay));
      }
    }
  }
  _0x2b6abf("========================================");
  _0x2b6abf("领券完成: 成功 " + _0x50fc8a + " 个，失败 " + _0x3d3a65 + " 个");
  _0x23a2ab > 0 && _0x2b6abf("其中已领取: " + _0x23a2ab + " 个", "warn");
  if (_0x30c479 > 0) {
    _0x2b6abf("其中限制: " + _0x30c479 + " 个", "warn");
  }
  _0x2b6abf("========================================");
  return {
    "total": _0x174f0f.length,
    "success": _0x50fc8a,
    "failed": _0x3d3a65,
    "already_claimed": _0x23a2ab,
    "limit_exceeded": _0x30c479,
    "results": _0x452cb6
  };
}
async function _0x8aaa7b(_0x45ff2b, _0x2bbc6d, _0x17b1ce) {
  _0x2b6abf("\n" + "═".repeat(50));
  _0x2b6abf("开始处理账号 " + _0x2bbc6d + "/" + _0x17b1ce);
  _0x2b6abf("═".repeat(50));
  _0x2b6abf("正在解析mt URL...");
  const {
    userId: _0x512f58,
    token: _0x2cbdce
  } = _0x157670(_0x45ff2b);
  _0x2b6abf("解析成功: userId=" + _0x512f58, "success");
  try {
    const _0x90b60d = Object.keys(_0x5025dc),
      _0x1b1617 = Object.values(_0x5025dc);
    _0x2b6abf("准备领取券: " + _0x1b1617.join(", "));
    const _0x2ea6bf = Math.floor(Math.random() * 30000) + 30000,
      _0x56a94e = Math.round(_0x2ea6bf / 1000);
    _0x2b6abf("等待 " + _0x56a94e + " 秒后继续...");
    await _0xe4aa7f(_0x2ea6bf);
    _0x2b6abf("");
    let _0x320f5f;
    _0x90b60d.length === 1 ? _0x320f5f = await _0x4c9cc5(_0x90b60d[0], _0x512f58, _0x2cbdce) : _0x320f5f = await _0x44bcef(_0x90b60d, _0x512f58, _0x2cbdce);
    _0x2b6abf("\n账号 " + _0x2bbc6d + " 领券完成", "success");
    return {
      "userId": _0x512f58,
      "result": _0x320f5f,
      "success": true
    };
  } catch (_0xd0c249) {
    _0x2b6abf("\n账号 " + _0x2bbc6d + " 执行出错: " + _0xd0c249.message, "error");
    console.error(_0xd0c249);
    return {
      "userId": "unknown",
      "result": null,
      "success": false,
      "error": _0xd0c249.message
    };
  }
}
async function _0x2f7c61() {
  await _0x1c2f72();
  console.log(_0x569b3b);
  _0xc6eacf.agreement !== "我同意协议" && (console.log("[错误] 您尚未同意使用协议！"), console.log("请设置环境变量 agreement=我同意协议 以同意协议并继续使用脚本"), console.log("注意：必须完整输入\"我同意协议\"四个字，否则无法使用\n"), process.exit(1));
  !_0xc6eacf.cardSecret && (_0x2b6abf("错误：未配置卡密（km）", "error"), _0x2b6abf("请在青龙面板设置环境变量：km", "error"), _0x2b6abf("获取卡密Q群：1034077503", "warn"), process.exit(1));
  _0x2b6abf("=".repeat(50));
  const _0x798917 = await _0xdfba82(_0xc6eacf.cardSecret);
  if (!_0x798917) {
    _0x2b6abf("\n❌ 卡密验证失败，脚本终止运行", "error");
    _0x2b6abf("请设置正确的km环境变量后重试", "error");
    _0x2b6abf("获取卡密请加Q群：1034077503", "warn");
    _0x2b6abf("=".repeat(50));
    process.exit(1);
  }
  _0x2b6abf("=".repeat(50));
  _0x2b6abf("");
  if (_0xc6eacf.meituanAccounts.length === 0) {
    _0x2b6abf("错误：未配置mt URL（mtck）", "error");
    _0x2b6abf("请在青龙面板设置环境变量：mtck", "error");
    _0x2b6abf("格式：https://i.meituan.com/mttouch/page/account?userId=xxx&token=xxx", "error");
    _0x2b6abf("支持mtck到mtck9，最多10个账号", "error");
    process.exit(1);
  }
  _0x2b6abf("开始执行IP白名单自动添加...\n");
  const _0x1860f3 = await _0x5406a1();
  !_0x1860f3 && (_0x2b6abf("\nIP白名单添加失败，脚本终止运行", "error"), _0x2b6abf("未添加IP白名单无法运行脚本，请检查网络连接或手动添加IP", "warn"), process.exit(1));
  _0x2b6abf("\nIP白名单验证通过，继续执行脚本...\n");
  const _0x360495 = await _0x1594e4();
  if (!_0x360495) {
    _0x2b6abf("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "error");
    _0x2b6abf("券列表加载失败，脚本终止运行", "error");
    _0x2b6abf("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "error");
    _0x2b6abf("\n可能的原因：", "warn");
    _0x2b6abf("1. 后台未配置券列表 → 请在后台\"美团券管理\"中添加券并启用", "warn");
    _0x2b6abf("2. IP白名单未同步 → 请等待5秒后重新运行脚本", "warn");
    _0x2b6abf("3. 网络连接问题 → 请检查网络连接是否正常", "warn");
    _0x2b6abf("\n如问题持续，请加Q群反馈：1034077503\n", "warn");
    process.exit(1);
  }
  _0x1c0a47();
  _0x2b6abf("\n检测到 " + _0xc6eacf.meituanAccounts.length + " 个账号，开始批量处理...\n");
  const _0x1d60de = [];
  for (let _0x2feed8 = 0; _0x2feed8 < _0xc6eacf.meituanAccounts.length; _0x2feed8++) {
    const _0x2f55ba = _0xc6eacf.meituanAccounts[_0x2feed8],
      _0x471a58 = await _0x8aaa7b(_0x2f55ba, _0x2feed8 + 1, _0xc6eacf.meituanAccounts.length);
    _0x1d60de.push(_0x471a58);
    if (_0x2feed8 < _0xc6eacf.meituanAccounts.length - 1) {
      const _0x6b4f56 = 5;
      _0x2b6abf("\n等待 " + _0x6b4f56 + " 秒后处理下一个账号...\n");
      await _0xe4aa7f(_0x6b4f56 * 1000);
    }
  }
  _0x2b6abf("\n" + "═".repeat(50));
  _0x2b6abf("所有账号处理完成");
  _0x2b6abf("═".repeat(50));
  const _0xbff4be = _0x1d60de.filter(_0x360eaf => _0x360eaf.success).length,
    _0x3fca4c = _0x1d60de.length - _0xbff4be;
  _0x2b6abf("成功: " + _0xbff4be + " 个账号，失败: " + _0x3fca4c + " 个账号");
  if (_0xc6eacf.pushToken) {
    const _0x5bb594 = "美团领券通知";
    let _0x588383 = "<h3>批量领券结果</h3>";
    _0x588383 += "<p>总账号数: " + _0x1d60de.length + "</p>";
    _0x588383 += "<p>成功: " + _0xbff4be + " 个</p>";
    _0x588383 += "<p>失败: " + _0x3fca4c + " 个</p>";
    _0x588383 += "<hr>";
    _0x1d60de.forEach((_0x329d0e, _0x37beae) => {
      {
        _0x588383 += "<h4>账号 " + (_0x37beae + 1) + "</h4>";
        _0x588383 += "<p>用户ID: " + _0x329d0e.userId + "</p>";
        if (_0x329d0e.success && _0x329d0e.result) {
          {
            const _0x4e2cbb = _0x329d0e.result;
            _0x4e2cbb.couponId !== undefined ? (_0x588383 += "<p>券名称: " + (_0x5025dc[_0x4e2cbb.couponId] || _0x4e2cbb.couponId) + "</p>", _0x588383 += "<p>状态: " + (_0x4e2cbb.success ? "成功" : "失败") + "</p>", _0x588383 += "<p>消息: " + _0x4e2cbb.message + "</p>") : (_0x588383 += "<p>总计: " + (_0x4e2cbb.total || 0) + " 张券</p>", _0x588383 += "<p>成功: " + (_0x4e2cbb.success || 0) + " 张</p>", _0x588383 += "<p>失败: " + (_0x4e2cbb.failed || 0) + " 张</p>", _0x4e2cbb.results && _0x4e2cbb.results.length > 0 && (_0x588383 += "<ul>", _0x4e2cbb.results.forEach(_0x18f7f8 => {
              {
                const _0x5d4f3b = _0x5025dc[_0x18f7f8.couponId] || _0x18f7f8.couponId,
                  _0x471d20 = _0x18f7f8.success ? "[成功]" : "[失败]";
                _0x588383 += "<li>" + _0x471d20 + " " + _0x5d4f3b + ": " + _0x18f7f8.message + "</li>";
              }
            }), _0x588383 += "</ul>"));
          }
        } else _0x588383 += "<p style=\"color:red;\">执行失败: " + (_0x329d0e.error || "未知错误") + "</p>";
        if (_0x37beae < _0x1d60de.length - 1) {
          _0x588383 += "<hr>";
        }
      }
    });
    _0x588383 += "<p>时间: " + new Date().toLocaleString("zh-CN") + "</p>";
    await _0x45e859(_0x5bb594, _0x588383);
  }
  _0x2b6abf("\n脚本执行完成，即将退出...");
  process.exit(0);
}
require.main === module && _0x2f7c61().catch(_0x5776bc => {
  console.error("未捕获的错误:", _0x5776bc);
  process.exit(1);
});
module.exports = {
  "main": _0x2f7c61
};