'use strict';
angular.module('wonderpage.bookmarks_view',[])
    .controller('listController', ['$scope', function ($scope) {
        $scope.folder = $scope.folders.bookmark;
        $scope.add = function (view) {
            if(this.view) {
                $scope.lists.push($scope.view);
                $scope.view = "";
            }

        }
    } ]
);
