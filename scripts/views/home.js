'use strict';
angular.module('wonderpage', ['ngRoute','ui.bootstrap', 'wonderpage.public_feed', 'wonderpage.bookmarks_views', 'wonderpage.dialog', 'wonderpage.following', 'wonderpage.public_profile', 'wonderpage.search_results' ])
    .config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'scripts/views/home.html',
                controller: 'Ctrl1'
            }).
            when('/folderType/folderAssets/folder/folderId', {
                templateUrl:'scripts/bookmarks_views/list.html',
                controller: 'myController'
            }).
            when('/folderType/folderFollowing', {
                templateUrl:'scripts/following/following.html',
                controller: 'myController'
            }).
            when('/folderType/folderFollowers', {
                templateUrl:'scripts/following/following.html',
                controller: 'myController'
            }).
            when('/folderType/mostViewed', {
                templateUrl:'scripts/following/following.html',
                controller: 'myController'
            }).
            when('/folderType/recentlyAdded', {
                templateUrl:'scripts/following/following.html',
                controller: 'myController'
            }).
            otherwise({
                redirectTo: '/'
            });

    }]).controller("Ctrl1",['$scope', 'dialogService','BookmarksServices', 'search', function($scope, dialogService, BookmarksServices, search){
        //$scope.myItemPerPage = 4;
        $scope.Results = search.getResults();

        $scope.showMe = function(){
            $scope.show=true;
        };
        $scope.hideMe = function(){
            $scope.show=false;
        };

        $scope.inputOpen = false;
        $scope.tab = 'home';

        $scope.items = function($scope) {

            BookmarksServices.getBookmarks();
        };

        $scope.openFolder = function (){
            dialogService.openFolderPropertiesDialog();
        };

        $scope.openBookmark = function (){
            dialogService.openBookmarkPropertiesDialog();

        };

        $scope.openSocial = function (){
            dialogService.openSocialMediaDialog();
        };

        $scope.openMessage = function (){
            dialogService.openSendMessageDialog();
        };

        $scope.openUnfollow = function (){
            dialogService.openUnfollowDialog();
        };

        $scope.openFollow = function (){
            dialogService.openFollowDialog();
        };

        $scope.openImproper = function (){
            dialogService.openImproperBookmarkDialog();
        };

        $scope.openCopy = function (){
            dialogService.openCopyBookmarkDialog();
        };

        $scope.openProfile = function (){
            dialogService.openProfileSettingsDialog();
        };

        $scope.select = '123';
        $scope.options = [
            {id:"1", msg:"my pages"},
            {id:"2", msg:"all pages"},
            {id:"3", msg:"users" }];

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
                    $(element).tooltip();
                }
            }
    }).directive('ccSelect', function() {
        return {
            restrict: 'AEC',
            require: ['^select', '^ngModel'],
            transclude: true,
            scope: {
                ngModel: "=",
                select: "="
            },
            template: '<label><select ng-model="select" ng-options="c.msg for c in ngModel"><option value=""></option></select></label>'
        }
    });