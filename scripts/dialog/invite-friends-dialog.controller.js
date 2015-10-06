'use strict';

angular
    .module('wonderpage.dialog')
    .controller('openInviteDialog',['$scope', '$modalInstance', function ($scope, $modalInstance) {

        $scope.close = function () {
            $modalInstance.close();
        }
    }]);
