import crsClientConfig from '../../config/crsClientConfig';
const sysInfo = wx.getSystemInfoSync();
Page({
  data: {
    wxapi: wx,
    running: false,
    cameraWidth: `${sysInfo.windowWidth}px`,
    cameraHeight: `${sysInfo.windowHeight * 0.8}px`,
    count: 0,
  },
  pause() {
    this.setData({running: false});
  },
  resume() {
    this.setData({running: true});
  },
  onResult(e) {
    console.log("onResult", e.detail);
    this.setData({
      result: JSON.stringify(e.detail),
      count: this.data.count + 1,
    });
    this.pause(); // 自定义功能：识别就暂停
  },
  onLost(e) {
    console.log("onLost", e);
    this.setData({
      error: e,
    });
  },
  onError(e) {
    console.log("onError", e.detail);
    this.setData({
      error: JSON.stringify(e.detail),
    });
  },

  onLoad() {
    this.setData(crsClientConfig);
    // setTimeout(() => {
    //   this.setData({requestConfig: {notracking: "true"}, requestInterval: 2000});
    // }, 5000);
  },
  onUnload() { }
})