// 拷贝为 crsClientConfig.js 并更新
// 支持插件版本号：^1.2.3
module.exports = {
  // crs识别基本配置
  crsConfig: {
    accessKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // EasyAR 开发中心-云识别管理-秘钥-小程序 AR 使用 - Cloud Key
    accessSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // EasyAR 开发中心-云识别管理-秘钥-小程序 AR 使用 - Cloud Secret
    clientHost: 'https://xxx-xxx.xxxxxx.xxx:xxxx', // EasyAR 开发中心-云识别管理-秘钥-小程序 AR 使用 - Cloud URLs
  },
  requestConfig: {notracking: true}, // 请求数据配置，参考 https://help.easyar.cn/EasyAR%20CRS/api/target-search.html#%E6%90%9C%E7%B4%A2%E8%AF%86%E5%88%AB%E7%9B%AE%E6%A0%87
  requestInterval: 2000, // 请求间隔时间，单位ms，默认0
  // 云识别管理中的识别图ID，开启扫描后会持续请求服务，直到扫描结果在 targetIds 中
  targetIds: ['xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'],// EasyAR 开发中心-云识别管理-识别图-识别图 ID
  license: '', // 许可证 内部小程序-填了会校验license
}