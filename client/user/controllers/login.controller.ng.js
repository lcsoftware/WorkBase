'use strict'

angular.module('workbaseApp').controller('LoginCtrl', ['$scope', '$meteor',
  function(
    $scope, $meteor) {
    $scope.user = {
      username: 'user01',
      password: '123'
    }

    $scope.login = function(user) {
      $meteor.loginWithPassword(user.username, user.password)
        .then(function() {
          console.log('login success');
          console.log($scope.currentUser);
        }, function(err) {
          console.log(err);
        });
    }

  }
]);
