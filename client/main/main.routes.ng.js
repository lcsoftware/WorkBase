'use strict'
angular.module('workbaseApp').config(function($stateProvider) {
  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'client/main/main.view.ng.html',
    controller: 'MainCtrl'
      // resolve: {
      //   'currentUser': ['$meteor', function($meteor) {
      //     return $meteor.requireUser();
      //   }]
      // }
  });
});
