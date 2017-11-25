<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>验证密保 | 找回密码 | 橘子情感</title>

    <!-- import our stylesheet -->
    <link rel="stylesheet" type="text/css" href="../../css/ora.css">
    <link rel="stylesheet" type="text/css" href="../../css/ora-findpwd.css">

    <!-- import third-party javascript -->
    <script src="../../js/jq/jquery-3.2.1.js" type="text/javascript" charset="utf-8"></script>

    <!-- import our javascript -->
    <script src="../../js/ora-findpwd.js" type="text/javascript" charset="utf-8"></script>

    <script type="text/javascript">
      $(function () {
        findpwd.initModule( $('#ora-findpwd') );
      });
    </script>
  </head>
  <body>
    <div class="ora-findpwd" id="ora-findpwd">
      <div class="ora-findpwd-wrapper">
        <!-- Start : 验证密保 -->
        <div class="ora-findpwd-s01">
          <!-- Start : 背景图 -->
          <div class="ora-findpwd-s01-step"></div>
          <!-- End : 背景图 -->

          <!-- Start : 用户名 -->
          <div class="ora-findpwd-s01-username">
            <span class="text-right">用户名：</span>
            <input type="text" name="" value="" placeholder="请输入您要找回密码的用户名">
          </div>
          <!-- Start : 用户名 -->

          <!-- Start : 密保问题 -->
          <div class="ora-findpwd-s01-question">
            <span class="text-right">密保问题：</span>
            <select class="" name="">
              <option value="">请选择您的密保问题</option>
              <option value="1">对您影响最大的人的名字是？</option>
              <option value="2">您最熟悉的童年好友的名字是？</option>
              <option value="3">您最熟悉的学校宿舍室友名字是？</option>
            </select>
          </div>
          <!-- End : 密保问题 -->

          <!-- Start : 密保答案 -->
          <div class="ora-findpwd-s01-answer">
            <span class="text-right">密保答案：</span>
            <input type="text" name="" value="" placeholder="请输入您的密保答案">
          </div>
          <!-- End : 密保答案 -->

          <!-- Start : 提交按钮 -->
          <div class="ora-findpwd-s01-submit text-center">
            <button type="submit" name="button">确认</button>
          </div>
          <!-- End : 提交按钮 -->

          <!-- Start : 提示信息 -->
          <div class="ora-findpwd-s01-tip">
            <span class="text-center">密保问题验证失败，请您重新输入</span>
          </div>
          <!-- End : 提示信息 -->
        </div>
        <!-- End : 验证密保 -->

        <!-- Start : 重置密码 -->
        <div class="ora-findpwd-s02">
          <!-- Start : 背景图 -->
          <div class="ora-findpwd-s02-step"></div>
          <!-- End : 背景图 -->

          <!-- Start : 输入密码 -->
          <div class="ora-findpwd-s02-password">
            <span class="text-right">输入密码：</span>
            <input type="text" name="" value="" placeholder="请重新设置密码">
          </div>
          <!-- End : 输入密码 -->

          <!-- Start : 确认密码 -->
          <div class="ora-findpwd-s02-confirmpwd">
            <span class="text-right">确认密码：</span>
            <input type="text" name="" value="" placeholder="请确认密码">
          </div>
          <!-- End : 确认密码 -->

          <!-- Start : 提交按钮 -->
          <div class="ora-findpwd-s02-submit">
            <button type="submit" name="button">确认</button>
          </div>
          <!-- End : 提交按钮 -->
        </div>
        <!-- End : 重置密码 -->
      </div>
    </div>
  </body>
</html>
