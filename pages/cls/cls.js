import clsConfig from '../../config/clsConfig';
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
    showVideo: false, // 识别成功后播放视频， 验证视频可以位于cls上方
  },
  onLoad: function(options) {
    this.setData(clsConfig);
  },

  pause () {
    this.setData({ running: false });
  },
  resume () {
    this.setData({ running: true });
  },

  onClsClientLoad (e) {
    let { clsClientContext, clsCameraContext } = e.detail;
    console.log("onClsClientLoad", clsClientContext, clsCameraContext);
  },
  onClsClientResult (e) {
    console.log("onClsClientResult", e.detail);
    this.setData({
      result: e.detail.msg,
      count: this.data.count + 1,
    });
    // 识别成功，暂停扫描
    this.setData({ running: false })
    this.setData({ showVideo: true })
  },
  onClsClientError (e) {
    console.log("onClsClientError", e.detail);
    this.setData({
      error: e.detail,
    });
  },

  preview () {
    wx.previewImage({ urls: ["https://mp.easyar.cn/artravel/puruan_scan_sample.jpg"] });
  },
  dismiss () {
    this.setData({ showScan: false });
  },
});