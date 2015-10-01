'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openUnfollowDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {

        $scope.close = function () {
            $modalInstance.close();
        }
    }]);
