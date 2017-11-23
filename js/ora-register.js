/*
 * ora-register.js
 * 用户注册模块
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, register */

var register = (function () {
  var
    configMap = {},
    stateMap = { $register : null },
    jqueryMap = {},

    setJqueryMap,  checkLeapYear,
    checkusermark, checkusername, checkpassword, checkname,   checkphonenum,
    checkwechat,   checkidnum,    checkquestion, checkanswer, checkbirthday,
    checkinfo,     onClick, initModule;

  setJqueryMap = function () {
    var $register = stateMap.$register;

    jqueryMap = {
      $register   : $register,
      $mark       : $register.find('.ora-register-main-mark'),
      $username   : $register.find('.ora-register-main-username'),
      $password   : $register.find('.ora-register-main-password'),
      $confirmpwd : $register.find('.ora-register-main-confirmpwd'),
      $birthday   : $register.find('.ora-register-main-birthday')
    };
  };

  // Start : checkusermark()
  // des   :
  //   * 验证员工编号
  //   * 用户编号只能为数字
  // return :
  //   * true  - 用户编号为 number 类型，可提交
  //   * false - 用户编号为 NaN 类型，不可提交
  //
  checkusermark = function () {
    var $mark, mark_val;
    $mark = jqueryMap.$mark;
    mark_val = $mark.find('input').val();

    if (!parseInt(mark_val, 10)) {
      return false;
    }

    return true;
  };
  // End : checkusermark()

  // Start : checkusername()
  // des   :
  //   * 验证用户名
  //   * 首字符不能为数字
  //   * 只能为英文或数字
  //   * 最少 6 字符，最多 12 字符
  // return :
  //   * true  - 符合规则，可提交
  //   * false - 不符合规则，不可提交
  //
  checkusername = function () {
    var $username, username_val, i;
    $username = jqueryMap.$username;
    username_val = $username.find('input').val();

    if (username_val.length < 6 || username_val.length > 12) {
      return false;
    }

    for (i = 0; i < username_val.length; i++) {
      if ( !(/\w/.test(username_val[i]) && /[^0-9]/.test(username_val[0])) ) {
        return false;
      }
    }

    return true;
  };
  // End : checkusername()

  // Start : checkpassword()
  // des   :
  //   * 验证密码
  //   * 首字符不能为数字
  //   * 不包含空格且首尾不能为空格（不能包含空格）
  //   * 最少 8 字符，最多 16 字符
  //
  checkpassword = function () {
    var
      $password,    $password_tip,  $confirmpwd, $confirmpwd_tip,
      password_val, confirmpwd_val, i;

    $password       = jqueryMap.$password;
    $confirmpwd     = jqueryMap.$confirmpwd;
    $password_tip   = $('.ora-register-main-tip-checkpassword');
    $confirmpwd_tip = $('.ora-register-main-tip-confirmpwd');
    password_val    = $password.find('input').val();
    confirmpwd_val  = $confirmpwd.find('input').val();


    // 显示验证密码提示信息
    $password.find('input').focus(function () {
      $password_tip.addClass('active');
    });
    // 隐藏验证密码提示信息
    $password.find('input').blur(function () {
      $password_tip.removeClass('active');
    });

    for (i = 0; i < password_val.length; i++) {
      // 密码不能包含空格
      if ( /\s/.test(password_val.charAt(i)) ) {
        $('.password-no-space').removeClass('pass');
        return false;
      } else {
        $('.ora-register-main-tip-checkpassword .password-no-space')
          .addClass('pass');
      }
    }

    // 验证密码最大长度
    if (password_val.length > 16) {
      $('.password-max-length').removeClass('pass');
      return false;
    } else {
      $('.password-max-length').addClass('pass');
    }

    // 验证密码最小长度
    if (password_val.length < 8) {
      $('.password-min-length').removeClass('pass');
      return false;
    } else {
      $('.password-min-length').addClass('pass');
    }

    // 确认密码
    $confirmpwd.find('input').blur(function () {
      if (password_val !== confirmpwd_val) {
        $confirmpwd_tip.addClass('active');
        return false;
      } else {
        $confirmpwd_tip.removeClass('active');
      }
    });

    return true;
  };
  // End : checkpassword()

  // Start : checkname
  // des   :
  //   * 验证姓名
  //   * 英文字符或汉字
  //
  checkname = function () {};
  // End : checkname()

  // Start : checkphonenum()
  // des   :
  //   * 验证电话号码
  //   * 11 位，纯数字
  //
  checkphonenum = function () {};
  // End : checkphonenum()

  // Start : checkidnum()
  // des   :
  //   * 验证身份证号码
  //   * 最短 17 位，最多 18 位，最后一位数字或 X
  //
  checkidnum = function () {};
  // End : checkidnum()

  // Start : checkquestion()
  // des   : 验证密保问题
  //
  checkquestion = function () {};
  // End : checkquestion()

  // Start : checkanswer()
  // des   : 验证密保答案
  //
  checkanswer = function () {};
  // End : checkanswer()

  // Start : checkanswer()
  // des   : 验证密保答案
  //
  checkquestion = function () {};
  // End : checkanswer()


  // Start : checkinfo()
  // des   :
  //
  checkinfo = function () {
    checkusermark();
    checkusername();
    checkpassword();
  };
  // End : checkinfo()

  // Start : onClick()
  // des   : 点击事件处理程序
  //
  onClick = function () {};
  // End : onClick()

  initModule = function ($register) {
    stateMap.$register = $register;
    setJqueryMap();

    // 验证出生年月模块
    register.checkbirthday.initModule( jqueryMap.$birthday );

    checkinfo();
    onClick();

    $('input').bind('input propertychange', checkinfo);
  };

  return { initModule : initModule };
}());
