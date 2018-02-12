# m-import

支持 yaml、yml、toml、tml、json、js 文件的自动导入
support yaml、yml、toml、tml、json、js file import。

## 如何使用？

```
npm install --save m-import
```

```js
import mi from 'm-import'
const obj = mi('xxx.toml')
console.log(obj)
```