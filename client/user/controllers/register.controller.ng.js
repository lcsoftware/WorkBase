'use strict'
angular.module('workbaseApp').controller('RegisterCtrl', ['$scope', '$state',
  '$meteor',
  function($scope, $state, $meteor) {
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
        $state.go('main', {
          location: 'replace'
        });
      }, function(err) {
        if (err.error === 403) {
          alert('用户名已经存在！');
        }
        console.log('register error - ', err);
      });
    }
  }
]);
