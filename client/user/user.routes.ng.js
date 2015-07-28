'use strict'

angular.module('workbaseApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'client/user/views/login.view.ng.html',
        controller: 'LoginCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'client/user/views/register.view.ng.html',
        controller: 'RegisterCtrl'
      })
      .state('changepwd', {
        url: '/change/password',
        templateUrl: 'client/user/views/password.view.ng.html',
        controller: 'ChangePwdCtrl'
      })
      .state('findpwd', {
        url: '/find/password',
        templateUrl: 'client/user/views/find.pwd.ng.html',
        controller: 'FindPwdCtrl'
      });
  });
