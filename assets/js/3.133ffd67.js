(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{70:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"mysql创建数据库与创建用户以及授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql创建数据库与创建用户以及授权","aria-hidden":"true"}},[e._v("#")]),e._v(" mysql创建数据库与创建用户以及授权")]),a("p",[a("strong",[e._v("针对"),a("code",[e._v("mysql5.6")]),e._v("以后的版本")])]),a("h4",{attrs:{id:"创建用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建用户","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建用户")]),a("ol",[a("li",[e._v("以管理员身份登录mysql")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql -u root -p\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("选择mysql database")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("use mysql;\n")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("创建用户并设定密码")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create user 'username'@'localhost' identified by 'urpassword';\n")])]),a("pre",[a("code",[e._v(" 此处`localhost`表示只能本地访问, 可以换为`%`, 表示匹配所有主机, 远程也能访问\n")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("使操作生效")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("flush privileges;\n")])]),a("h4",{attrs:{id:"创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建数据库")]),a("ol",[a("li",[e._v("命令")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create database [数据库名称] default character set utf8 collate utf8_general_ci;\n")])]),a("pre",[a("code",[e._v(" `[]`为了说明使用, 不需要在命令中打出来  \n")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("参数说明:")])]),a("pre",[a("code",[e._v("- `character set X` --- 采用字符集`X`, 如果单独指定了这项参数, 而没有指定`collate`, 则采用`X`的默认校对规则.\n\n- `collate Y` --- 采用校对规则`Y`.\n\n- 如果两个都没指定, 则采用数据库默认的字符集和校对规则.\n")])]),a("h4",{attrs:{id:"为用户赋予操作数据库的权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为用户赋予操作数据库的权限","aria-hidden":"true"}},[e._v("#")]),e._v(" 为用户赋予操作数据库的权限")]),a("ul",[a("li")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    grant all privileges on [数据库名称].* to 'username'@'localhost|%'   \n    identified by 'urpassword';\n")])]),a("ul",[a("li",[e._v("也可以单独设置某项权限")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    grant insert, update, select, delete, create on [数据库名称].* to   \n    'username'@'localhost|%' identified by 'urpassword';\n")])]),a("ul",[a("li",[e._v("赋予用户权限的同时, 允许其再授权")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    grant all privileges on [数据库名称].* to 'username'@'localhost|%'    \n    with grant option identified by 'urpassword';\n")])]),a("ul",[a("li",[e._v("使操作生效")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    flush privileges;\n")])]),a("h4",{attrs:{id:"删除和取消操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除和取消操作","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除和取消操作")]),a("ol",[a("li",[e._v("取消用户所有数据库的所有权限")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    revoke all on *.* from [username];\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("删除用户")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    delete from mysql.user where user = 'username'\n")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("删除数据库")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    drop database [databaseName|schemaName];\n")])])])}],!1,null,null,null);t.default=s.exports}}]);