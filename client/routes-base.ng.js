'use strict';

angular.module('workbaseApp')

.config(function($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}).run(['$rootScope', '$state', '$meteor', '$window', function($rootScope,
  $state, $meteor, $window) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams,
    fromState, fromParams, error) {
    if (error === 'AUTH_REQUIRED') {
      $state.go('main');
    }
  });

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams,
    fromState, fromParams) {})

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams,
    fromState, fromParams) {});



}]);
