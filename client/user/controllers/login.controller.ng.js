'use strict'

angular.module('workbaseApp').controller('LoginCtrl', ['$scope', '$state',
  '$meteor',
  function(
    $scope, $state, $meteor) {
    $scope.user = {
      username: 'user01',
      password: '123'
    }

    $scope.login = function(user) {
      $meteor.loginWithPassword(user.username, user.password)
        .then(function() {
          $state.go('main');
        }, function(err) {
          console.log(err);
        });
    }

  }
]);
