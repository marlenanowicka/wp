'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openProfileDialog',['$scope', '$modalInstance', 'dialogService', function ($scope, $modalInstance, dialogService) {
        $scope.isCollapsed = true;

        $scope.close = function () {
            $modalInstance.close();
        };
        $scope.openInvite = function (){
            dialogService.openInviteFriendsDialog();
        };

    }]);