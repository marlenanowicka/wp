'use strict';
angular.module('wonderpage.public_profile',[])
    .controller('PublicProfileController', ['$scope','FollowServices','dialogService', function($scope, FollowServices, dialogService){
        $scope.followersProfile = FollowServices.getFollow()[1];
        $scope.openMessage = function (){
            dialogService.openSendMessageDialog();
        };

        $scope.openUnfollow = function (){
            dialogService.openUnfollowDialog();
        };

        $scope.openFollow = function (){
            dialogService.openFollowDialog();
        };
    }]);