/*
 * ora-login.js
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
    checkinfo, onClick, initModule;

  setJqueryMap = function () {
    var $register = stateMap.$register;

    jqueryMap = {
      $register : $register,
      $birthday : $register.find('.ora-register-main-birthday')
    };
  };

  // Start  : checkLeapYear()
  // des    : 检查年份是否为闰年
  // return : true - 闰年(is_leap_year), false - 平年(is_nonleap_year)
  //
  checkLeapYear = function () {};
  // End : checkLeapYear()

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

  // Start : checkbirthday()
  // des   :
  //   * 验证生日
  //   * 1993/03/11
  //   * 月份和日不足 2 位，前面补 0
  //
  checkbirthday = function () {
    var
      $register,   $birthday,
      $year,       $month,       $day,
      $year_group, $month_group, $day_group,
      $year_item,  $month_item,  $day_item,
      year_text,   month_text,   day_text,
      showYear,    showMonth,    showDay,
      hideAll;

    $register    = jqueryMap.$register;
    $birthday    = jqueryMap.$birthday;
    $year        = $birthday.find('.ora-register-main-birthday-choice-year');
    $month       = $birthday.find('.ora-register-main-birthday-choice-month');
    $day         = $birthday.find('.ora-register-main-birthday-choice-day');
    $year_group  = $birthday.find('.ora-register-main-birthday-year');
    $month_group = $birthday.find('.ora-register-main-birthday-month');
    $day_group   = $birthday.find('.ora-register-main-birthday-day');
    $year_item   = $birthday.find('.year-item');
    $month_item  = $birthday.find('.ora-register-main-birthday-month-item span');
    $day_item    = $birthday.find('.ora-register-main-birthday-day span');

    showYear = function () {
      $($year).addClass('active');
      $($year_group).addClass('active');
      $($month).removeClass('active');
      $($month_group).removeClass('active');
      $($day).removeClass('active');
      $($day_group).removeClass('active');
    };

    showMonth = function () {
      $($month).addClass('active');
      $($month_group).addClass('active');
      $($year).removeClass('active');
      $($year_group).removeClass('active');
      $($day).removeClass('active');
      $($day_group).removeClass('active');
    };

    showDay = function () {
      $($day).addClass('active');
      $($day_group).addClass('active');
      $($year).removeClass('active');
      $($year_group).removeClass('active');
      $($month).removeClass('active');
      $($month_group).removeClass('active');
    };

    hideAll = function () {
      $($year).removeClass('active');
      $($year_group).removeClass('active');
      $($month).removeClass('active');
      $($month_group).removeClass('active');
      $($day).removeClass('active');
      $($day_group).removeClass('active');
    };

    $register.click(function (event) {
      var target;

      event = event || window.event;
      target = event.target;

      switch ( $(target)[0] ) {
        case $($year)[0] :
          showYear();
          break;
        case $($month)[0] :
          showMonth();
          break;
        case $($day)[0] :
          showDay();
          break;
        default:
          hideAll();
          break;
      }
    });

    $year_item.click(function () {
      year_text = $(this).text();
      $year.text(year_text);
    });

    $month_item.click(function () {
      month_text = $(this).text();
      $month.text(month_text);
    });

    $day_item.click(function () {
      day_text = $(this).text();
      $day.text(day_text);
    });
  };
  // End : checkbirthday()

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
  onClick = function () {
    checkbirthday();
  };
  // End : onClick()

  initModule = function ($register) {
    stateMap.$register = $register;
    setJqueryMap();

    checkinfo();
    onClick();

    $('input').bind('input propertychange', checkinfo);
  };

  return { initModule : initModule };
}());
