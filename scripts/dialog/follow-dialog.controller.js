'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openFollowDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {

        $scope.close = function () {
            $modalInstance.close();
        }
    }]);