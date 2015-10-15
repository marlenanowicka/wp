'use strict';
angular.module('wonderpage.bookmarks_views')
    .directive('gridMedium', ['BookmarksServices', function (BookmarksServices) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/bookmarks_views/grid-medium.html',
            link: function ($scope) {
                $scope.lists= BookmarksServices.getBookmarks();
            }
        };
    }]);
