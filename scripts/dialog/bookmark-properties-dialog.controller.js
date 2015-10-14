'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openBookmarkDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {
        $scope.isCollapsed = true;
        $scope.close = function () {
            $modalInstance.close();
        }
    }]);