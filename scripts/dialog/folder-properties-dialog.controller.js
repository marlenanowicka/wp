'use strict';

angular
    .module('wonderpage.dialog')
    .controller('UploadFileDialog', function ($scope, $modalInstance) {
        $scope.close = closeDialog;

        function closeDialog() {
            $modalInstance.close();
        }
    });
