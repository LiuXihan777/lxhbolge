//项目入口文件
const express = require('express')
const app = express()

// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')

// 设置模板页面的存放路径
app.set('views', './views')

app.use('/node_modules', express.static('./node_modules'))
app.get('/', (req, res) => {
    // 使用render函数之前,一定要保证安装和配置了ejs模板引擎
    res.render('index.ejs', { name: 'zs', age: '22' })
})

app.listen(801, () => {
    console.log('server running at http://127.0.0.1:801')
})