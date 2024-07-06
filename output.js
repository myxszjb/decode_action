//Sat Jul 06 2024 12:19:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
$(document).ready(function () {
  GetQR();
});
var interval1, interval2, param;
function GetQR(_0x3577b1) {
  _0x3577b1 = _0x3577b1 || false;
  cleartime();
  var _0x4c4393 = getCookie("qrsig"),
    _0x484350 = getCookie("qrimg");
  _0x4c4393 != null && _0x484350 != null && _0x3577b1 == false ? ($("#qrimg").attr("qrsig", _0x4c4393), $("#qrimg").html("<img id=\"qrcodeimg\" onclick=\"GetQR(true)\" src=\"data:image/png;base64," + _0x484350 + "\" title=\"点击刷新\">")) : ($.getJSON("http://103.36.220.235:2345/free/login.php", {
    "do": "getqrpic",
    "r": Math.random(1)
  }, function (_0x40a444) {
    _0x40a444.saveOK == 0 ? (setCookie("qrsig", _0x40a444.qrsig), setCookie("qrimg", _0x40a444.data), $("#qrimg").attr("qrsig", _0x40a444.qrsig), $("#qrimg").html("<img id=\"qrcodeimg\" onclick=\"GetQR(true)\" src=\"data:image/png;base64," + _0x40a444.data + "\" title=\"点击刷新\">")) : layer.alert(_0x40a444.msg);
  }).fail(function (_0xfe8574, _0xd65beb, _0x547071) {
    layer.alert("温馨提示1：接口是http的，你站点启用了https导致无法使用，请关闭https后再尝试！<br>温馨提示2：接口地址无法访问或已失效，请检查网络连接并稍后再试或者联系管理员处理！<br>版权所有©老A网络-QQ：2301858400");
  }), setTimeout("qrLogin()", 3000));
}
function qrLogin() {
  if ($("#login").attr("data-lock") === "true") return;
  $.getJSON("http://103.36.220.235:2345/free/login.php", {
    "do": "qqlogin",
    "qrsig": decodeURIComponent($("#qrimg").attr("qrsig")),
    "r": Math.random(1)
  }, function (_0x1a30f6, _0x2db9c9) {
    _0x1a30f6.saveOK == 0 ? ($("#login").html("<div class=\"alert alert-success\">QQ验证成功！" + _0x1a30f6.nick + "</div><br/><p>↓继续操作↓</p>"), $("#qrimg").hide(), $("#qrLogin").hide(), $("#PhoneInfo").show(), $("#login").attr("data-lock", "true"), $("#avatar").attr("src", "https://q4.qlogo.cn/headimg_dl?spec=100&dst_uin=" + _0x1a30f6.qq), $("#qq").val(_0x1a30f6.qq), param = _0x1a30f6.param) : (cleartime(), $("#loginmsg").html(_0x1a30f6.msg), layer.msg(_0x1a30f6.desc));
  }).fail(function (_0xf33881, _0x31e296, _0x44e393) {
    layer.alert("温馨提示1：接口是http的，你站点启用了https导致无法使用，请关闭https后再尝试！<br>温馨提示2：接口地址无法访问或已失效，请检查网络连接并稍后再试或者联系管理员处理！<br>版权所有©老A网络-QQ：2301858400");
  });
  setTimeout("qrLogin()", 3000);
}
function Post() {
  $.post("http://103.36.220.235:2345/free/laoa.php", {
    "param": param,
    "type": $("#type").val(),
    "imei": $("#imei").val(),
    "desc": $("#desc").val()
  }, function (_0xb0cce4, _0x1f250c, _0x5eeda1) {
    layer.alert(_0xb0cce4.msg);
  }, "json");
}
function cleartime() {
  clearInterval(interval1);
  clearInterval(interval2);
}
function setCookie(_0x458f9b, _0x482e27) {
  var _0x3fb75d = new Date();
  _0x3fb75d.setTime(_0x3fb75d.getTime() + 30 * 1000);
  document.cookie = _0x458f9b + "=" + escape(_0x482e27) + ";expires=" + _0x3fb75d.toGMTString();
}
function getCookie(_0x11b596) {
  var _0x31674c,
    _0x2cafa5 = new RegExp("(^| )" + _0x11b596 + "=([^;]*)(;|$)");
  if (_0x31674c = document.cookie.match(_0x2cafa5)) return unescape(_0x31674c[2]);else return null;
}