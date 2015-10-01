'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openImproperDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {

        $scope.close = function () {
            $modalInstance.close();
        }
    }]);