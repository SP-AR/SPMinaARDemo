import crsConfig from '../../config/crsConfig';
import {loadScripts} from './__game-scripts'
Page({
  data: {
    wxapi: wx,
    requestInterval: 1000,
    deviceMotion: null, // 陀螺仪，若不使用陀螺仪则无需添加该属性
    loadScripts: (pc, app, api) => {
      self = api;
      loadScripts(pc);
    },
    loadNetworkScripts: {console, setTimeout, clearTimeout},//动态脚本，需提前注入所需的公共方法，如console、setTimeout、clearTimeout等
    // setup,//添加事件
    // tearDown,//卸载事件
    projectSign: 'demo',//项目标志位
    license: '',//许可证 内部小程序-填了会校验license
  },
  onLoad() {
    wx.startDeviceMotionListening({interval: 'game'});
    wx.onDeviceMotionChange(res => {
      this.setData({deviceMotion: res});
    })
    this.setData(crsConfig)
  },
  onUnload() {
    wx.stopDeviceMotionListening();
  }
})