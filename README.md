# Yorozu-admin

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### 添加.env文件
项目down下来之后是没有env文件的，根据自己的需求配置.env文件，初始配置如下：
```javascript
IS_SSL=false
HOST=localhost
REST_API=3000/api
```


### axios 配置 
>根据需求配置代理服务 如下
```json
axios: {
    proxy: true,
    retry: { retries: 3 },
},

proxy:{
    '/api/': {
        target: process.env.IS_SSL ? `https://${process.env.HOST}${process.env.REST_API}` : `http://${process.env.HOST}${process.env.REST_API}`,
        pathRewrite: {'^/api/': ''}
    },
},

```

### svg-icon的使用
>安装好依赖后会自动在assets目录下创建/sprite/svg的目录 

``` html
<!-- icon-name自动从/assets/sprite/svg目录下寻找同名的svg文件 -->
<svg-icon name="icon-name" >
</svg-icon>
```

