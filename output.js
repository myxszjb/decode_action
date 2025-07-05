//Sat Jul 05 2025 05:28:51 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const SECRET_KEY = "xY7#d9vP4Lm8Qw!zK2rB0s6F";
function updateUsageCount(_0x2e4491) {
  const _0x2b91da = document.getElementById("usageCount");
  _0x2b91da.textContent = "📊 当前已查询 " + _0x2e4491 + " 次";
}
async function fetchCount() {
  try {
    {
      const _0x219f72 = await fetch("/api");
      const _0x1ba657 = await _0x219f72.json();
      if (_0x1ba657.status === 200 && _0x1ba657.count) {
        {
          updateUsageCount(_0x1ba657.count);
        }
      }
    }
  } catch (_0x32c456) {
    {
      console.error("获取查询次数失败:", _0x32c456);
    }
  }
}
window.addEventListener("DOMContentLoaded", fetchCount);
async function hmacSha256(_0x5dfc14, _0x4b3303) {
  const _0x5bcc17 = new TextEncoder();
  const _0x57611a = await crypto.subtle.importKey("raw", _0x5bcc17.encode(_0x4b3303), {
    name: "HMAC",
    hash: "SHA-256"
  }, false, ["sign"]);
  const _0x2f3abe = await crypto.subtle.sign("HMAC", _0x57611a, _0x5bcc17.encode(_0x5dfc14));
  return Array.from(new Uint8Array(_0x2f3abe)).map(_0x20a4b4 => _0x20a4b4.toString(16).padStart(2, "0")).join("");
}
document.getElementById("shortenForm").addEventListener("submit", async _0x4939a7 => {
  _0x4939a7.preventDefault();
  const _0x3c7cb8 = document.getElementById("url").value.trim();
  if (!_0x3c7cb8) {
    return;
  }
  const _0x109f01 = document.getElementById("result");
  _0x109f01.innerHTML = "<div class=\"text-secondary\">⏳ 生成中...</div>";
  try {
    const _0x534854 = Date.now().toString();
    const _0x530a92 = _0x3c7cb8 + "|" + _0x534854;
    const _0x3396e5 = await hmacSha256(_0x530a92, SECRET_KEY);
    const _0xa3ce15 = await fetch("/jiexi?url=" + encodeURIComponent(_0x3c7cb8) + "&t=" + _0x534854 + "&sign=" + _0x3396e5);
    const _0x38db7f = await _0xa3ce15.json();
    if (!_0x38db7f.success || !_0x38db7f.data?.["data"]) {
      {
        throw new Error(_0x38db7f.data?.["message"] || "生成失败");
      }
    }
    const _0x3a1853 = _0x38db7f.data.data;
    _0x109f01.innerHTML = "\n          <div class=\"alert alert-success py-2 px-3\">\n            <div class=\"fw-semibold mb-2\">✅ 短链生成成功：</div>\n            <div class=\"d-flex justify-content-center align-items-center gap-2 flex-wrap\">\n              <a href=\"" + _0x3a1853 + "\" target=\"_blank\" id=\"shortLink\">" + _0x3a1853 + "</a>\n              <button class=\"btn btn-outline-secondary btn-sm btn-copy\" id=\"copyBtn\">📋 复制</button>\n            </div>\n          </div>\n        ";
    document.getElementById("copyBtn").onclick = () => {
      {
        navigator.clipboard.writeText(_0x3a1853).then(() => {
          {
            const _0x22a36d = document.getElementById("copyBtn");
            _0x22a36d.textContent = "✅ 已复制";
            setTimeout(() => _0x22a36d.textContent = "📋 复制", 1500);
          }
        });
      }
    };
    if (_0x38db7f.count) {
      {
        updateUsageCount(_0x38db7f.count);
      }
    }
  } catch (_0x349f2b) {
    _0x109f01.innerHTML = "<div class=\"alert alert-danger py-2\">❌ " + _0x349f2b.message + "</div>";
  }
});