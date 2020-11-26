// 拷贝为 crsConfig.js 并更新

module.exports = {
  // 识别成功后播放的3D内容
  projectUrl: 'https://mp.easyar.cn/SPMinaARDemo/crs/playcanvas/demo',
  sceneFileName: '935237.json',
  // 用于crs识别，若不使用crs识别则无需添加该属性
  crsConfig: {
    accessKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    accessSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    clientHost: 'https://xxx-xxx.xxxxxx.xxx:xxxx'
  },
  // 云识别管理中的识别图ID，开启扫描后会持续请求服务，直到扫描结果在 targetIds 中
  targetIds: ['xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'],
}