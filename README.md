# SPMinaARDemo

- [基础修改](#基础修改)
- [playcanvas 项目展示](#playcanvas-项目展示)
- [CRS-playcanvas 案例](#crs-demo)
- [CRS 单组件案例](#crsclient)
- [CLS 案例](#cls-demo)

## 基础修改

1. 修改`project.config.json`中的`appid`为自己的 appid
2. app.json 修改添加插件，添加位置获取

```json
{
  "plugins": {
    "SPARPlugin": {
      "version": "1.2.2",
      "provider": "wx513725758120fb69"
    }
  },
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  }
}
```

3. 申请插件[EasyAR 小程序插件](https://developers.weixin.qq.com/community/servicemarket/detail/000a264d244c78c2769a34ba356815)

- 具体参考[小程序工作流程](https://shimo.im/docs/rOqmeOwgYMt9F0qz/read)

## playcanvas-项目展示

- playcanvas 导出的文件结构

```tree
├── 935237.json
├── __game-scripts.js
├── __loading__.js
├── __modules__.js
├── __settings__.js
├── __start__.js
├── config.json
├── files
├── index.html
├── logo.png
├── manifest.json
├── playcanvas-stable.min.js
└── styles.css
```

1. 将其放置某服务器上，获取`访问地址`和`json文件名`
2. 拷贝`__game-scripts.js` 到 `pages/crs` 目录下
3. 配置`config/crsConfig.js`如下:
   ```js
   {
     projectUrl: "https://mp.easyar.cn/SPMinaARDemo/crs/playcanvas/demo",
     sceneFileName: "935237.json",
   }
   ```

## crs-demo

```js
module.exports = {
  // 识别成功后播放的3D内容
  projectUrl: "https://mp.easyar.cn/SPMinaARDemo/crs/playcanvas/demo",
  sceneFileName: "935237.json",
  // 用于crs识别，若不使用crs识别则无需添加该属性
  crsConfig: {
    accessKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    accessSecret:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    clientHost: "https://xxx-xxx.xxxxxx.xxx:xxxx",
  },
  // 云识别管理中的识别图ID，开启扫描后会持续请求服务，直到扫描结果在 targetIds 中
  targetIds: [
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    ...
  ],
  license: '', // 许可证 内部小程序-填了会校验license
};
```

1. 配置`projectUrl`、`sceneFileName`，参考[playcanvas 项目展示](#playcanvas-项目展示)
2. 配置`crsConfig`，进入[EasyAR 开发中心](https://portal.easyar.cn/)-云识别管理-秘钥-小程序 AR 使用

| 系统对应数据子段                                 | 代码字段     |
| ------------------------------------------------ | ------------ |
| Cloud Key xxxxxxxxxxxxx                          | accessKey    |
| Cloud Secret xxxxxxxxxxx                         | accessSecret |
| Cloud URLs @ Client-end (Target Recognition) URL | clientHost   |

3. 配置 `targetIds`，进入[EasyAR 开发中心](https://portal.easyar.cn/)-云识别管理-识别图 查找需要识别的图，获取图片 ID，配置到 `targetIds`，此 demo 会持续请求服务知道识别匹配到`targetIds`中的图片

## cls-demo

1. 配置`config/clsConfig.js`如下：

```js
module.exports = {
  clsConfig: {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    apiSecret:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    ocKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    ocSecret:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    schemaId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  },
  license: '', // 许可证 内部小程序-填了会校验license
};
```

内容来源

| 代码字段  | 查看路径                               |
| --------- | -------------------------------------- |
| apiKey    | EasyAR 开发中心 - API KEY - API Key    |
| apiSecret | EasyAR 开发中心 - API KEY - API Secret |
| ocKey     | AR 运营中心 - 访问秘钥 - Key           |
| ocSecret  | AR 运营中心 - 访问秘钥 - Secret        |
| schemaId  | AR 运营中心 - 选择 AR 启动方案 - ID    |

## crsclient

```js
module.exports = {
  // 用于crs识别，若不使用crs识别则无需添加该属性
  crsConfig: {
    accessKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    accessSecret:"xxxxxxxxxxxxxxxxxxxxxxxxxxx...",
    clientHost: "https://xxx-xxx.xxxxxx.xxx:xxxx",
  },
  // 云识别管理中的识别图ID，开启扫描后会持续请求服务，直到扫描结果在 targetIds 中
  targetIds: [ // EasyAR 开发中心-云识别管理-识别图-识别图 ID
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    ...
  ],
  requestConfig: {notracking: true}, // 请求数据配置，参考 https://help.easyar.cn/EasyAR%20CRS/api/target-search.html#%E6%90%9C%E7%B4%A2%E8%AF%86%E5%88%AB%E7%9B%AE%E6%A0%87
  requestInterval: 2000, // 请求间隔时间，单位ms，默认0
  license: '', // 许可证 内部小程序-填了会校验license
};
```

1. 配置`crsConfig`，进入[EasyAR 开发中心](https://portal.easyar.cn/)-云识别管理-秘钥-小程序 AR 使用

| 系统对应数据子段                                    | 代码字段      |
| ------------------------------------------------ | ------------ |
| Cloud Key xxxxxxxxxxxxx                          | accessKey    |
| Cloud Secret xxxxxxxxxxx                         | accessSecret |
| Cloud URLs @ Client-end (Target Recognition) URL | clientHost   |

2. 配置 `targetIds`，进入[EasyAR 开发中心](https://portal.easyar.cn/)-云识别管理-识别图 查找需要识别的图，获取图片 ID，配置到 `targetIds`，此 demo 会持续请求服务知道识别匹配到`targetIds`中的图片

3. 配置 `requestConfig` 参考[官网CRS文档-搜索识别目标](https://help.easyar.cn/EasyAR%20CRS/api/target-search.html#%E6%90%9C%E7%B4%A2%E8%AF%86%E5%88%AB%E7%9B%AE%E6%A0%87)

4. `requestInterval` 可动态设置

5. `license` 许可证 内部小程序-填了会校验license