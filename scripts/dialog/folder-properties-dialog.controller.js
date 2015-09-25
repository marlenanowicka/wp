'use strict';

angular
    .module('wonderpage.dialog')
    .controller('UploadFileDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {

        $scope.close = function () {
            $modalInstance.close();
        }
    }]);
