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
            .state('findpwd', {
                url: '/find/password',
                templateUrl: 'client/user/views/find.pwd.ng.html',
                controller: 'FindPwdCtrl'
            })
            .state('settings', {
                abstract: true,
                url: '/settings',
                templateUrl: 'client/user/views/setting.nav.ng.html'
            })
            .state('settings.company', {
                url: '/company',
                templateUrl: 'client/user/views/setting.company.ng.html',
                controller: 'CompanyCtrl'
            })
            .state('settings.changepwd', {
                url: '/changepwd',
                templateUrl: 'client/user/views/setting.password.ng.html',
                controller: 'ChangePwdCtrl'
            })
            .state('settings.profile', {
                url: '/profile',
                templateUrl: 'client/user/views/setting.profile.ng.html',
                controller: 'ProfileCtrl'
            });
    });
