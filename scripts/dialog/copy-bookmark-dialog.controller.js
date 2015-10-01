'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openCopyBookDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {

        $scope.close = function () {
            $modalInstance.close();
        }
    }]);