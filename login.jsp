<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>用户登陆 | 橘子情感</title>

    <!-- import our stylesheet -->
    <link rel="stylesheet" href="css/ora.css">
    <link rel="stylesheet" href="css/ora-login.css">
  </head>
  <body>
    <div class="ora-login" id="ora-login">
      <div class="ora-login-main">
        <div class="ora-login-main-title">
          <span class="text-center">导师登陆</span>
        </div>
        <form class="ora-login-main-input" action="#" method="post">
          <input class="ora-login-main-input-username" type="text" name="loginname" placeholder="请输入用户名">
          <input class="ora-login-main-input-password" type="text" name="password" placeholder="请输入密码">
          <button class="ora-login-main-input-submit" type="button">登陆</button>
        </form>
        <div class="ora-login-main-icon">
          <span class="ora-login-main-icon-username"></span>
          <span class="ora-login-main-icon-password"></span>
        </div>
        <div class="ora-login-main-tip">
          <div class="ora-login-main-tip-success">
            <!--
              <p>${msg}</p>
            -->
            <p>注册成功，立即登陆！</p>
          </div>
          <div class="ora-login-main-tip-extra">
            <span class="ora-login-main-tip-extra-registry">
              没有账号？
              <a href="#">立即注册</a>
            </span>
            <span class="ora-login-main-tip-extra-find">找回密码</span>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
