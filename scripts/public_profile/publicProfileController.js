'use strict';
angular.module('wonderpage.public_profile',[])
    .controller('PublicProfileController', ['$scope','FollowServices', function($scope, FollowServices){
        $scope.followersProfile = FollowServices.getFollow()[1];
    }]);