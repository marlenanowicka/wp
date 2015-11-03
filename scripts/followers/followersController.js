'use strict';
angular.module('wonderpage.followers',[])
    .controller('FollowersController', ['$scope','FollowServices', function($scope, FollowServices){
        $scope.followers = FollowServices.getFollow()[1];
    }]);

