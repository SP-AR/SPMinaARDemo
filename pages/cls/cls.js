const sysInfo = wx.getSystemInfoSync();

Page({
  data: {
    wxapi: wx,
    cameraWidth: `${sysInfo.windowWidth}px`,
    cameraHeight: `${sysInfo.windowHeight * 0.8}px`,

    running: true,
    motion: true,
    minInterval: 2000,

    count: 0,

    showScan: true,
  },
  onLoad: function(options) {
    this.setData({
      clsConfig: { //devdev账号 园区新V2-0907
        apiKey: "118b4dacf7af90c67e790cb87750266a",
        apiSecret: "6059dd99ad6341e892015ed52332b1f79fc54d325af4478bb25668a247503ac0",
        ocKey: "540738eaf9a2829533f0691910ce25c7",
        ocSecret: "d4dd2b0df609db28281d1febec9968144bce01d21d344fe17484bb1484da8c18",
        schemaId: "b086fbce-dcea-465c-ac97-34fa22e6e87d",
      },
    });
  },

  pause() {
    this.setData({running: false});
  },
  resume() {
    this.setData({running: true});
  },

  onClsClientLoad(e) {
    let {clsClientContext, clsCameraContext} = e.detail;
    console.log("onClsClientLoad", clsClientContext, clsCameraContext);
  },
  onClsClientResult(e) {
    console.log("onClsClientResult", e.detail);
    this.setData({
      result: e.detail.msg,
      count: this.data.count + 1,
    });
    // 识别成功，暂停扫描
    this.setData({running: false})
  },
  onClsClientError(e) {
    console.log("onClsClientError", e.detail);
    this.setData({
      error: e.detail,
    });
  },

  preview() {
    wx.previewImage({urls: ["https://mp.easyar.cn/artravel/puruan_scan_sample.jpg"]});
  },
  dismiss() {
    this.setData({showScan: false});
  },
});