'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openBookmarkDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {

        $scope.close = function () {
            $modalInstance.close();
        }
    }]);