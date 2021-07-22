# 萬アドミン

## 运行项目

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

## 更新nuxt版本
```bash
# yarn
yarn upgrade nuxt

#npm 
npm update nuxt
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



##TailwindCss 安装

- 安装依赖
```bash
npm install --save-dev @nuxtjs/tailwindcss postcss@latest
```

- 配置nuxt.config.js
```javascript
//nuxt.config.js
export default {
  buildModules: ['@nuxtjs/tailwindcss']
}
```

- 创建tailwind.config.js 文件 
```bash
npx tailwindcss init
```


### i18n使用方法
> 具体使用的.vue文件内
```html
<i18n>
{
    "ja": {
      "hello": "こんにちは世界"
    },
    "en": {
      "hello": "Hello World"
    },
    "zh":{
        "hello": "你好世界"
    }
}
</i18n>
```

```html
<div>
{{ $t('hello') }}
</div>
```