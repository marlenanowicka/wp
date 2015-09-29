'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openSocialDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {

        $scope.close = function () {
            $modalInstance.close();
        }
    }]);
