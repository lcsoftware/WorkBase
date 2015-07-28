'use strict'

angular.module('workbaseApp').controller('RegisterCtrl', ['$scope', '$meteor',
  function($scope, $meteor) {

    $scope.user = {
      username: 'user01',
      password: '123',
      confirmPwd: '123',
      nick: 'nick01',
      mobile: '13585513045'
    }

    $scope.createUser = function(user) {
      $meteor.createUser({
        username: user.username,
        password: user.password,
        profile: {
          nick: user.nick,
          mobile: user.mobile
        }
      }).then(function() {
        console.log('register success');
        console.log($scope.currentUser);
      }, function(err) {
        console.log('register error - ', err);
      });
    }
  }
]);
