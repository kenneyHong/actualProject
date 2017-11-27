# 文件结构以及意义

actualProject
    |    |---core                核心模块。
    |    |    |---lib            第三方资源。
    |    |    |    |---normalize.css       css初始化。
    |    |    |    |---jquery-3.2.1.js     jq包。
    |    |    |    |---less.min.js         less包。
    |    |    |    |---fun.js              公共方法。
    |    |    |    |---storingUser.js      初始化用户数据。
    |    |    |
    |    |    |---header.js                 头部公共代码
    |    |    |---style.less     公共样式
    |    |
    |    |---home       首页。
    |    |---login      登陆注册页。
    |
    |---page.json                     项目的内容数据。
    |---README.md                     项目信息。


/////////////////数据结构/////////////////
//用户表
// users
{
    phone: '13657677238', // 手机号码
    password: 'xxxxx',
    id: 066624, // 用户ID
    photo: 'http://test.xuuue.cn/066624.png', // 头像
}
