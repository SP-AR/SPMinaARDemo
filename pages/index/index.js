const {clearAllPreload} = requirePlugin('SPARPlugin');

Page({

  data: {
    pages: [
      {name: "playcanvas展示", url: "playcanvas/playcanvas", hint: "playcanvas", use: "spar-component"},
      {name: "crs识别", url: "crs/crs", hint: "crs", use: "spar-component"},
      {name: "cls定位", url: "scan/scan", hint: "scan", use: "spar-clsclient"},
      {name: "license", url: "license/license", hint: "license", use: ""},
    ],
  },

  onReady() {
    let account = wx.getAccountInfoSync();
    let appid = account.miniProgram.appId;
    this.setData({appid});
  },

  onUnload() {
    clearAllPreload();
  },
})