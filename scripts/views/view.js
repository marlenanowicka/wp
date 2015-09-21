'use strict';
angular.module('wonderpage', ['ngRoute','wonderpage.public_feed', 'wonderpage.bookmarks_views'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'scripts/views/view.html',
                controller: 'Ctrl1'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]).controller("Ctrl1",['$scope', function($scope){
        //$scope.myItemPerPage = 4;
        $scope.simpleSizeValue = [{
            'id': '1',
            value: 'list'
        },
            {
                'id': '2',
                value: 'tiny'
            },
            {
                'id': '3',
                value: 'small'
            },
            {
                'id': '4',
                value: 'medium'
            },
            {
                'id': '5',
                value: 'large'
            },
            {
                'id': '6',
                value: 'huge'
            }
        ];
        $scope.selectionSize = {'id': '1', value: 'list'};
    }])
    .directive('toggle', function(){
        return {
            restrict: 'A',

            link: function(scope, element, attrs){
                if (attrs.toggle=="tooltip"){
                    $(element).tooltip();
                }
                if (attrs.toggle=="popover"){
                    $(element).popover();
                }
            }
        };
    });
