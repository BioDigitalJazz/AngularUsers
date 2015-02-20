'use strict';

var app = angular.module('app', ['ngResource']);

app.controller('UsersCtrl', function($scope, $resource) {

  var userResource = $resource('/data/users.json');
  $scope.search = ""
  $scope.users = userResource.query(function() {
  });

});

app.directive('user', function() {
  return {
      templateUrl: 'userCard.html',
      // restrict: 'E',
      scope: { user: '=info' }
    };
});




