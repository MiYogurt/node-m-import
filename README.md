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
### Similar projects

[gray-matter](https://github.com/jonschlinkert/gray-matter)

it's a parser

```
console.log(matter('---\ntitle: Front Matter\n---\nThis is content.'));

---

{
  content: '\nThis is content.',
  data: { 
    title: 'Front Matter' 
  } 
}
```
