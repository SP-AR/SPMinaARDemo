import playcanvasConfig from '../../config/playcanvasConfig';
import {loadScripts} from './__game-scripts'
Page({
  data: {
    wxapi: wx,
    deviceMotion: null, // 陀螺仪，若不使用陀螺仪则无需添加该属性
    loadScripts: (pc, app, api) => {
      self = api;
      loadScripts(pc);
    },
    loadNetworkScripts: {console, setTimeout, clearTimeout},//动态脚本，需提前注入所需的公共方法，如console、setTimeout、clearTimeout等
    license: '',//许可证 内部小程序-填了会校验license
  },
  onLoad() {
    wx.startDeviceMotionListening({interval: 'game'});
    wx.onDeviceMotionChange(res => {
      this.setData({deviceMotion: res});
    })
    this.setData(playcanvasConfig)
    wx.showToast({title: '3s后加载3d动画'});
    setTimeout(() => {
      this.setData({show3d: true});
    }, 3000);
  },
  loadProgress(process) {console.log(process)},
  load(e) {console.log('event.load', e);},
  unload(e) {console.log('event.unload', e);},
  error(e) {console.log('event.error', e);},
  onUnload() {
    wx.stopDeviceMotionListening();
  }
})