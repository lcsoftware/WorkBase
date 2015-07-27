'use strict'

angular.module('workbaseApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'client/user/login.view.ng.html',
        controller: 'LoginCtrl'
      })
      .state('changepwd', {
        url: '/change/password',
        templateUrl: 'client/user/password.view.ng.html',
        controller: 'ChangePwdCtrl'
      })
      .state('findpwd', {
        url: '/find/password',
        templateUrl: 'client/user/find.pwd.ng.html',
        controller: 'FindPwdCtrl'
      });
  });
