'use strict';
angular.module('wonderpage', ['ngRoute','ui.bootstrap', 'wonderpage.public_feed', 'wonderpage.bookmarks_views', 'wonderpage.dialog', 'wonderpage.fallowing', 'wonderpage.public_profile', 'wonderpage.allPublicUsers' ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'scripts/views/view.html',
                controller: 'Ctrl1'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]).controller("Ctrl1",['$scope', 'dialogService','BookmarksServices', function($scope, dialogService, BookmarksServices){
        //$scope.myItemPerPage = 4;
        $scope.isInfo = false;
        $scope.showMe = function(){
            $scope.show=true;
        }
        $scope.hideMe = function(){
            $scope.show=false;
        }

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
    });