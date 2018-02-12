# schameimport

支持 yaml、yml、toml、tml、json、js 文件的自动导入
support yaml、yml、toml、tml、json、js file import。

## 如何使用？

```
npm install --save schameimport
```

```js
import si from 'schameimport'
const obj = si('xxx.toml')
console.log(obj)
```