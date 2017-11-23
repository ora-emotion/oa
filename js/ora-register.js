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
      $register : $register,
      $birthday : $register.find('.ora-register-main-birthday')
    };
  };

  // Start : checkusermark()
  // des   :
  //   * 验证员工编号
  //   * 用户编号只能为数字
  //
  checkusermark = function () {};
  // End : checkusermark()

  // Start : checkusername()
  // des   :
  //   * 验证用户名
  //   * 只能为英文或数字
  //   * 最少 6 字符，最多 12 字符
  //
  checkusername = function () {};
  // End : checkusername()

  // Start : checkpassword()
  // des   :
  //   * 验证密码
  //   * 不包含空格且首尾不能为空格（不能包含空格）
  //   * 最少 8 字符，最多 16 字符
  //
  checkpassword = function () {};
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
