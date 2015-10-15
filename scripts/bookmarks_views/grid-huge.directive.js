'use strict';
angular.module('wonderpage.bookmarks_views',[])
    .directive('gridHuge', ['BookmarksServices', function (BookmarksServices) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/bookmarks_views/grid-huge.html',
            link: function ($scope) {
                $scope.lists= BookmarksServices.getBookmarks();
            }
        };
    }]);