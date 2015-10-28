'use strict';
angular.module('wonderpage.bookmarks_views')
    .controller('myController', ['$scope','BookmarksServices', '$stateParams', function ($scope, BookmarksServices, $stateParams) {
        $scope.lists= BookmarksServices.getBookmarks();
        $scope.folderId = $stateParams.folderId;
        $scope.add = function (view) {
            if(this.view) {
                $scope.lists.push($scope.view);
                $scope.view = "";
            }

        }
    } ]
);
