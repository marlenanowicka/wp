'use strict';
angular.module('wonderpage.bookmarks_views',[])
    .directive('list', ['FolderServices', function (FolderServices) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/bookmarks_views/list.html'
        };
    }])
    .controller('listController', ['$scope', function ($scope) {
        $scope.add = function (view) {
            if(this.view) {
                $scope.currentFolder.push($scope.view);
                $scope.view = "";
            }

        }
    } ]
);
