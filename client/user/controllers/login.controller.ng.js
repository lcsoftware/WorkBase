'use strict'

angular.module('workbaseApp').controller('LoginCtrl', ['$scope', '$state',
  '$meteor', '$location',
  function($scope, $state, $meteor, $location) {
    $scope.user = {
      username: 'user01',
      password: '123'
    }

    $scope.login = function(user) {
      $meteor.loginWithPassword(user.username, user.password)
        .then(function() {
          $state.go('main', null, {
            location: 'replace'
          });
        }, function(err) {
          console.log(err);
        });
    }

  }
]);
