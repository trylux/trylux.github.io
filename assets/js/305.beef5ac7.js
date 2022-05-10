(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{782:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"一-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-安装"}},[t._v("#")]),t._v(" 一.安装")]),t._v(" "),e("h2",{attrs:{id:"_1-安装mariadb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装mariadb"}},[t._v("#")]),t._v(" 1.安装MariaDB")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" # yum install mariadb mariadb-server\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-启动mariadb服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动mariadb服务"}},[t._v("#")]),t._v(" 2. 启动MariaDB服务")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# systemctl start mariadb\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-设置mariadb服务开机自动启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置mariadb服务开机自动启动"}},[t._v("#")]),t._v(" 3. 设置MariaDB服务开机自动启动")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# systemctl  enable  mariadb\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4-进行配置mariadb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-进行配置mariadb"}},[t._v("#")]),t._v(" 4. 进行配置MariaDB")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# mysql_secure_installation\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("执行后 会提示如下:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Enter current password for root (enter for none): \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("第一次安装没有设置密码，按回车键，然后进行设置密码")]),t._v(" "),e("p",[t._v("执行")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# mysql -u root -p\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("输入密码登录MariaDB")]),t._v(" "),e("h1",{attrs:{id:"二-mysql常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-mysql常用命令"}},[t._v("#")]),t._v(" 二. MySql常用命令")]),t._v(" "),e("h2",{attrs:{id:"_1-创建新mysql用户及用户权限管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建新mysql用户及用户权限管理"}},[t._v("#")]),t._v(" 1. 创建新MySQL用户及用户权限管理")]),t._v(" "),e("p",[t._v("用户权限在MySQL中其实就是一张表，用户名密码，权限保存在mysql数据库中的user表中，")]),t._v(" "),e("p",[t._v("对用户账号、密码、权限的相关操作其实就是修改mysql.user表中对应的字段。")]),t._v(" "),e("p",[t._v("user表中host字段表示该用户可以从哪个地址登录MySQL数据库")]),t._v(" "),e("p",[t._v("user表中host列的值的意义")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("host")]),t._v(" "),e("th",[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("%")]),t._v(" "),e("td",[t._v("匹配所有主机")])]),t._v(" "),e("tr",[e("td",[t._v("localhost")]),t._v(" "),e("td",[t._v("localhost不会被解析成IP地址，直接通过UNIXsocket连接")])]),t._v(" "),e("tr",[e("td",[t._v("127.0.0.1")]),t._v(" "),e("td",[t._v("会通过TCP/IP协议连接，并且只能在本机访问；")])]),t._v(" "),e("tr",[e("td",[t._v("::1")]),t._v(" "),e("td",[t._v("::1就是兼容支持ipv6的，表示同ipv4的127.0.0.1")])])])]),t._v(" "),e("h3",{attrs:{id:"_1-1-创建新用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-创建新用户"}},[t._v("#")]),t._v(" 1.1 创建新用户")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create user  username@地址 identified by 'password';\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("创建一个只能本地登录的username账号 ，密码为password")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create user  username@localhost identified by 'password';\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_1-2-删除用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-删除用户"}},[t._v("#")]),t._v(" 1.2 删除用户")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" delete from mysql.user where user='username';\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_1-3-设置密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-设置密码"}},[t._v("#")]),t._v(" 1.3 设置密码")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("set password for username = password('******');\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("或者")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("update mysql.user set password=password('*****') where user='username';\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_1-4-查看用户权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-查看用户权限"}},[t._v("#")]),t._v(" 1.4 查看用户权限")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("show grants for rlq\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_1-5-授予权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-授予权限"}},[t._v("#")]),t._v(" 1.5 授予权限")]),t._v(" "),e("p",[t._v("格式  授予用户拥有数据库中某个表的某个权限")]),t._v(" "),e("p",[t._v("如果被授予权限的用户不存在，则会创建此用户(创建的用户的Host字段为%)")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("grant 权限, on 数据库.表名 to 用户名;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("授予username 拥有整个MySQL中所有数据库的权限")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" grant all on *.* to username;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("授予username 拥有testdb数据库中查 删 增 改 权限")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("grant select, insert,update,delete on testdb.* to username; \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_1-6-回收权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-回收权限"}},[t._v("#")]),t._v(" 1.6 回收权限")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("revoke 权限 on 数据库.表名 from 用户名;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("执行")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flush  privileges\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("使更改立即生效。")]),t._v(" "),e("p",[t._v("权限表")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("权限")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("all")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("alter")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("alter routine")]),t._v(" "),e("td",[t._v("使用alter procedure 和drop procedure")])]),t._v(" "),e("tr",[e("td",[t._v("create")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("create routine")]),t._v(" "),e("td",[t._v("使用create  procedure")])]),t._v(" "),e("tr",[e("td",[t._v("create temporary tables")]),t._v(" "),e("td",[t._v("使用create temporary table")])]),t._v(" "),e("tr",[e("td",[t._v("create  user")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("create view")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("delete")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("drop")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("execute")]),t._v(" "),e("td",[t._v("使用call和存储过程")])]),t._v(" "),e("tr",[e("td",[t._v("file")]),t._v(" "),e("td",[t._v("使用select into outfile  和load data infile")])]),t._v(" "),e("tr",[e("td",[t._v("grant option")]),t._v(" "),e("td",[t._v("可以使用grant和revoke")])]),t._v(" "),e("tr",[e("td",[t._v("index")]),t._v(" "),e("td",[t._v("可以使用create index 和drop index")])]),t._v(" "),e("tr",[e("td",[t._v("insert")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("lock tables")]),t._v(" "),e("td",[t._v("锁表")])]),t._v(" "),e("tr",[e("td",[t._v("process")]),t._v(" "),e("td",[t._v("使用show full processlist")])]),t._v(" "),e("tr",[e("td",[t._v("reload")]),t._v(" "),e("td",[t._v("使用flush")])]),t._v(" "),e("tr",[e("td",[t._v("replication client")]),t._v(" "),e("td",[t._v("服务器位置访问")])]),t._v(" "),e("tr",[e("td",[t._v("replocation slave")]),t._v(" "),e("td",[t._v("由复制从属使用")])]),t._v(" "),e("tr",[e("td",[t._v("select")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("show databases")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("show view")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("shutdown")]),t._v(" "),e("td",[t._v("使用mysqladmin shutdown 来关闭mysql")])]),t._v(" "),e("tr",[e("td",[t._v("super")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("update")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("usage")]),t._v(" "),e("td",[t._v("无访问权限")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);