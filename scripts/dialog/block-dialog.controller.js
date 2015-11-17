'use strict';

angular
    .module('wonderpage.dialog')
    .controller('blockDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {

        $scope.close = function () {
            $modalInstance.close();
        }
    }]);
