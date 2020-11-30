// 拷贝为 crsConfig.js 并更新

module.exports = {
  // 识别成功后播放的3D内容
  projectUrl: 'https://mp.easyar.cn/SPMinaARDemo/crs/playcanvas/demo',
  sceneFileName: '935237.json',
  // 用于crs识别，若不使用crs识别则无需添加该属性
  crsConfig: {
    accessKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // EasyAR 开发中心-云识别管理-秘钥-小程序 AR 使用 - Cloud Key
    accessSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // EasyAR 开发中心-云识别管理-秘钥-小程序 AR 使用 - Cloud Secret
    clientHost: 'https://xxx-xxx.xxxxxx.xxx:xxxx', // EasyAR 开发中心-云识别管理-秘钥-小程序 AR 使用 - Cloud URLs
  },
  // 云识别管理中的识别图ID，开启扫描后会持续请求服务，直到扫描结果在 targetIds 中
  targetIds: ['xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'],// EasyAR 开发中心-云识别管理-识别图-识别图 ID
  license: '', // 许可证 内部小程序-填了会校验license
}