'use strict';
angular.module('wonderpage', ['ngRoute','ui.bootstrap', 'wonderpage.public_feed', 'wonderpage.bookmarks_views', 'wonderpage.dialog'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'scripts/views/view.html',
                controller: 'Ctrl1'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]).controller("Ctrl1",['$scope', 'dialogService', function($scope, dialogService){
        //$scope.myItemPerPage = 4;


        $scope.openFolder = function (){
            dialogService.openFolderPropertiesDialog();
        };

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
