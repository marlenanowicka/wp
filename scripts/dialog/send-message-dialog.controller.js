'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openMessageDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {

        $scope.close = function () {
            $modalInstance.close();
        }
    }]);