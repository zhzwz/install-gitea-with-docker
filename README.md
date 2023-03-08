# Install Gitea with Docker

## 简介

自用的 Gitea 配置文件，其中包含了自定义的模板文件和静态文件。

> 前往 Gitea 官方文档了解更多：<https://docs.gitea.io/en-us/install-with-docker/>

## 使用方法

- 安装 Docker 以及相关工具或插件：

```bash
# 工具包
sudo yum install -y yum-utils
# 添加仓库
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
# 安装
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
# 启动
sudo systemctl start docker
# 检验
docker version
docker compose version
sudo docker run hello-world
```

- 安装并使用 Git 克隆仓库文件：

```bash
sudo yum install git
git clone https://github.com/zhzwz/install-gitea-with-docker.git
```

- 如果遇到使用国内服务器无法访问 Github 仓库的情况，可以使用第三方搭建的 [Github Proxy 服务](https://ghproxy.com)：

```bash
git clone https://ghproxy.com/https://github.com/zhzwz/install-gitea-with-docker.git
```

- 在仓库目录下执行启动命令：

```bash
docker compose up -d
```

## 配置

```ini
APP_NAME = Gitea                 ; 应用名称
[service]
DISABLE_REGISTRATION = true      ; 禁止注册
SHOW_REGISTRATION_BUTTON = false ; 是否显示注册按钮
REQUIRE_SIGNIN_VIEW = false      ; 是否必须登录后访问
ENABLE_CACHE_AVATAR = true       ; 缓存来自 Gravatar 的头像
ENABLE_NOTIFY_MAIL = true        ; 发送工单创建等提醒邮件
ENABLE_CAPTCHA = true            ; 注册图片验证码
REQUIRE_CAPTCHA_FOR_LOGIN = true ; 登录图片验证码
CAPTCHA_TYPE = cfturnstile       ; 人机验证类型
CF_TURNSTILE_SECRET = ""         ; cloudlfare turnstile 服务密钥 <https://dash.cloudflare.com/?to=/:account/turnstile>
CF_TURNSTILE_SITEKEY = ""        ; cloudlfare turnstile 服务密钥 <https://www.google.com/recaptcha/admin>
[attachment]
ENABLED = true                   ; 上传附件
ALLOWED_TYPES = */*              ; 允许的附件类型，比如：image/jpeg|image/png，使用 */* 表示允许任何类型
MAX_SIZE = 5                     ; 附件最大限制，单位 MB
MAX_FILES = 10                   ; 单次上传的最大附件数量
[i18n]
LANGS = zh-CN                    ; 默认语言
NAMES = 简体中文
[ui]
DEFAULT_THEME = gitea            ; 主题 auto / gitea / arc-green
```

## 其他相关经验

- 使用 SQLite3 作为数据库，运行 Gitea 只需要不超过 100M 的内存。一台 1G 内存的服务器就可以满足小团队的日常使用。

- 使用 MySQL 8 作为数据库， MySQL 最少会占用 400M 的内存。经过实测，低于 2G 内存的服务器无法正常使用。
