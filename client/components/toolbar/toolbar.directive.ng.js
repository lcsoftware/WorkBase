'use strict'

angular.module('workbaseApp')
  .directive('toolbar', function() {
    return {
      restrict: 'AE',
      templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
      replace: true,
      controller: ['$scope', '$state', '$meteor', function($scope, $state,
        $meteor) {
        $scope.logout = function() {
          $state.go('login');
          $meteor.logout();
        }
      }]
    };
  });
