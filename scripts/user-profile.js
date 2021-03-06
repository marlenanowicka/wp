'use strict';
angular.module('wonderpage')
.controller('ListFolderController',['$scope','$http','FolderServices','dialogService','search', function($scope,$http, FolderServices, dialogService, search){

        $scope.folders = FolderServices.getFolders();

        $http.get('scripts/users.json').success(function(data){
            $scope.items = data;
        });

        var max = 6;
        $scope.changePlus = function(){
            if ($scope.selectionSize.id < max)
                $scope.selectionSize.id ++

        };
        var min = 1;
        $scope.changeMinus = function(){
            if ($scope.selectionSize.id > min)
                $scope.selectionSize.id --

        };

        $scope.add = function (folder) {

            if (folder) {
                folder.privacy = 'private';
                $scope.folders.push(folder);
                this.folder = {};
            }
        };

        $scope.pages = [];
        $scope.pageContent = [];

        $scope.Results = search.getResults();

        $scope.showMe = function(){
            $scope.show=true;
        };
        $scope.hideMe = function(){
            $scope.show=false;
        };

        $scope.inputOpen = false;

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
        $scope.openBlock = function (item){
            dialogService.openBlockDialog();
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
        $scope.selectionSize = {'id': '6',
            value: 'huge'};

    }])
    .controller('BookmarkController',['$scope', '$state', '$stateParams', 'FolderServices', function($scope,$state, $stateParams, FolderServices){

        var folderId = $stateParams.folderId;
        if(!folderId) {
            $state.go('user-profile.folder', {folderId:1});
        } else {
            $scope.currentFolder = FolderServices.getFolderById(folderId);
        }

    }]).directive('toggle', function(){
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