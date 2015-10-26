'use strict';
angular.module('wonderpage.bookmarks_views')
    .controller('myController', ['$scope','BookmarksServices', function ($scope, BookmarksServices) {
        $scope.lists= BookmarksServices.getBookmarks();
        $scope.add = function (view) {
            if(this.view) {
                $scope.lists.push($scope.view);
                $scope.view = "";
            }

        }
    } ]
);
