//Thu Aug 08 2024 04:33:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
const {
  createApp,
  ref,
  onMounted
} = Vue;
createApp({
  "setup"() {
    const _0x5b0bb0 = ref({
        "shop": "",
        "code": ""
      }),
      _0x4b17ca = ref(false);
    let _0x341f86 = new Image();
    _0x341f86.src = "./img/mx.png";
    const _0x3f978c = ref("");
    function _0x1d2131() {
      const _0x5b0a19 = document.getElementById("canvas"),
        _0x5f4087 = _0x5b0a19.getContext("2d");
      _0x5f4087.clearRect(0, 0, _0x5b0a19.width, _0x5b0a19.height);
      _0x5f4087.drawImage(_0x341f86, 0, 0, _0x5b0a19.width, _0x5b0a19.height);
      _0x341f86.onload = () => {
        _0x5f4087.drawImage(_0x341f86, 0, 0);
        _0x5f4087.font = "bold 90px 'Fira Sans'";
        _0x5f4087.fillStyle = "rgba(245,245,245,1)";
        _0x5f4087.fillText(_0x5b0bb0.value.code, 440, 330);
        _0x5f4087.font = "bold 48px 'Fira Sans'";
        _0x5f4087.fillStyle = "rgba(51,51,51,1)";
        _0x5f4087.fillText(_0x5b0bb0.value.shop + ">", 65, 995);
        const _0x271a3b = _0x5b0a19.toDataURL("image/png");
        _0x3f978c.value = _0x271a3b;
      };
      _0x341f86.onload();
    }
    function _0x17bbb8() {
      _0x4b17ca.value = true;
      setTimeout(() => {
        _0x1d2131();
      }, 1000);
    }
    return {
      "form": _0x5b0bb0,
      "dialogVisible": _0x4b17ca,
      "imgUrl": _0x3f978c,
      "openDialog": _0x17bbb8
    };
  }
}).use(ElementPlus).mount("#app");