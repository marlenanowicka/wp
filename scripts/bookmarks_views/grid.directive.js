'use strict';
angular.module('wonderpage.bookmarks_views',[])
    .directive('grid', ['FolderServices', function (FolderServices) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/bookmarks_views/grid.html'
        };
    }]);
