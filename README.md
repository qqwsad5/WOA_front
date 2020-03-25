# nginx + vuecli3 + uwsgi + django 实现前后端分离的网页部署

超多坑和bug，真是麻烦

## 1. 安装工具

除了npm，感觉都用 pip3 安装比较好，因为安装完是python3版本的\
即 nginx + uwsgi + django

## 2. npm 相关

npm 过慢换代理，之后使用 cnpm 命令替代 npm 命令来安装包
```
npm install cnpm -g
```
局部添加依赖 -S
```
npm i 包名 -S
```
这样只用使用命令 cnpm install 即可装好所有依赖包

本地测试用
```
npm run serve
```
服务器上用生成的镜像，然后使用 nginx 做路由到该镜像
```
npm run build
```

## 3. vuecli3的路径

在根目录添加 vue.config.js 文件

```
module.exports = {
    publicPath: './',
  }
```
之后 npm run build 就能生成所需的 dist

## 4. axios请求路径配置

安装完axios包后，在 main.js 中加入该包\
无法使用 Vue.use() 来全局应用，因此必须使用 Vue.prototype\
这样在具体使用的地方，用 this.axios 即可
```
import axios from 'axios';

Vue.prototype.axios = axios;
```
最后配置一下默认的 baseURL，即在发送http请求时的根目录\
注意在与后端交互时，http请求的ip必须为外网访问服务器的ip，因为该ip是从用户的浏览器发出来的
```
axios.defaults.baseURL = "http://123.56.170.97:7777/"
```


## 5. 跨域问题

只需要在 django 的 setting 文件里配置就行

先安装包

```
pip3 install django-cors-headers
```

然后改 setting 文件
```
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',  # 新加的插件
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',  # 新加的应用
]

CORS_ORIGIN_ALLOW_ALL = True  # 新增的跨域访问设置
```

## 6. uwsgi配置

首先安装 uwsgi
```
pip3 install uwsgi 
```

在 django 根目录下添加配置文件 uwsgi.ini
```
[uwsgi]

socket = :8888
chdir           = /root/WOA/django/HelloWorld
module          = HelloWorld.wsgi
master          = true
processes       = 1
vacuum          = true
```
socket：指定端口\
chdir：根目录路径\
module：指定 HelloWorld 包下的 wsgi 模块

配置结束后，在 uwsgi.ini 目录下利用如下命令即可打开 uwsgi
```
uwsgi --ini uwsgi.ini
```
这样就应该可以访问了，不需要再 runserver 了

## 7. nginx配置

相当于是一个路由，将对固定端口的访问路由到应该去的地方

配置文件在 /etc/nginx（这是安装目录） 里的 /sites-enabled\
最好先复制一份 default 文件，在新文件里改

```
server {
        listen       3000;
        server_name  localhost;  # 这样就可以从外部访问服务器的3000端口，得到网站

        location / {
            root   /root/front_end/dist;  #把dist.zip解压到data文件夹下
            index  index.html index.htm;
        }
}
server {
        listen       7777;
        server_name  localhost;  # 从外部访问服务器的7777端口，得到后端数据

        location / {
            include uwsgi_params;
            uwsgi_pass 127.0.0.1:8888;  # 这里填写uwsgi.ini中设置的端口
        }
}
```
改完后使用以下命令重启nginx
```
nginx -s reload
```
