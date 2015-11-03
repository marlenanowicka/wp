'use strict';
angular.module('wonderpage.following',[])
    .controller('FollowingController', ['$scope','FollowServices', function($scope, FollowServices){
        $scope.following = FollowServices.getFollow()[0];
    }]);

