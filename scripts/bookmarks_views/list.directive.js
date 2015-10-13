'use strict';
angular.module('wonderpage.bookmarks_views')
    .directive('list', ['BookmarksServices', function (BookmarksServices) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/bookmarks_views/list.html',
            link: function ($scope) {
                $scope.lists= BookmarksServices.getBookmarks();
            }
        };
    }]).controller('myController', ['$scope', function ($scope) {
        $scope.add = function (view) {
            if(this.view) {
                $scope.lists.push($scope.view);
                $scope.view = "";
            }

        }
    } ]
);
