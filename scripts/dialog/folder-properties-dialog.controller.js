'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openFolderDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {
        $scope.isCollapsed = true;
        $scope.close = function () {
            $modalInstance.close();
        }
    }]);
