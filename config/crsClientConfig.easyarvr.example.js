module.exports = {
  crsConfig: {// 用于crs识别，若不使用crs识别则无需添加该属性
    accessKey: 'adaf5d292fee85aa2d80014bd8c627d5',
    accessSecret: 'Tmo1QarppKU4kHe2kFoq2DEPK2xLzu9joYv50HA6rjopLdwYEZXnEfDJUy9IVxji9mVTIgfP0dBN2uW6WWfmsTq5a2QCQpkKj2aqPiKzsOLlucpLM8ZDESmqBkA3FNNJ',
    clientHost: 'https://cn1-crs.easyar.com:8443'
  },
  requestConfig: { notracking: true },
  requestInterval: 2000,
  targetIds: ['6af4c0bb-883e-40fe-b7eb-e5cc0b46dcc0'],// 用于图片id识别，若不使用crs识别则无需添加该属性
  license: require('./license'), // 许可证 内部小程序-填了会校验license
}
