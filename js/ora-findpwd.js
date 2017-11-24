/*
 * ora-findpwd.js
 * 找回密码模块
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, findpwd */

var findpwd = (function () {
  var
    configMap = {},
    stateMap = { $findpwd : null },
    jqueryMap = {},

    setJqueryMap, showTip, makeReq, getParam, changePassword, onClick, initModule;

  setJqueryMap = function () {
    var $findpwd = stateMap.$findpwd;

    jqueryMap = {
      $findpwd : $findpwd,
      $tip     : $findpwd.find('.ora-findpwd-s01-tip')
    };
  };

  // Start : showTip()
  // des   : 密保问题验证失败时，显示提示信息
  //
  showTip = function () {
    var $tip = jqueryMap.$tip;
    $tip.addClass('active');
  };
  // End : showTip()

  // Start : changePassword()
  // des   : 验证密保通过后，显示重置密码页面
  //
  changePassword = function () {
    console.log('密保问题已确认，允许重置密码！');
  };
  // End : changePassword()

  // Start : getParam()
  // des   : 判断用户密保问题是否已验证
  //   * 通过验证，显示重置密码页面
  //   * 未通过验证，显示提示信息
  //
  getParam = function (data) {
    var key_name;

    for (key_name in data) {
      if (data.hasOwnProperty(key_name)) {
        if (data.findpwd.permission) {
          changePassword();
        } else {
          showTip();
        }
      }
    }
  };
  // End : getParam()

  // Start : makeReq()
  // des   : 请求验证密保答案
  //
  makeReq = function () {
    $.ajax({
      type    : 'post',
      url     : '../../json/findpwd.json',
      success : function (data) {
        getParam(data);
      },
      error   : function (erroe) {
        console.log('request error!');
      }
    })
  };
  // End : makeReq()

  onClick = function () {
    $('button').click(function () {
      makeReq();
    });
  };

  initModule = function ($findpwd) {
    stateMap.$findpwd = $findpwd;
    setJqueryMap();

    onClick();
  };

  return { initModule : initModule };
}());
