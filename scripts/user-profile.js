'use strict';
angular.module('wonderpage', ['ui.router','ui.bootstrap', 'wonderpage.public_feed', 'wonderpage.bookmarks_views', 'wonderpage.dialog', 'wonderpage.following', 'wonderpage.public_profile', 'wonderpage.search_results','wonderpage.menu'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/user/profile');

        $stateProvider
            // route to show our basic form (/form)
            .state('user-profile', {
                url: '/user/profile',
                controller: 'ListFolderController',
                templateUrl: 'scripts/user-profile.html'

            })
            // url will be //folderType/folderAssets/folder/:folderId
            .state('user-profile.folder', {
                url: '/folderType/folderAssets/folder/:folderId',
                controller: 'BookmarkController',
                templateUrl: 'scripts/bookmarks_views/test.html',
            });
    })
    .controller('ListFolderController', function($scope, FolderServices){
        $scope.folders = FolderServices.getFolders();

    })
    .controller('BookmarkController',['$scope', '$state', '$stateParams', 'FolderServices', function($scope,$state, $stateParams, FolderServices){
        var folderId = $stateParams.folderId;
        if(!folderId) {
            $state.go('user-profile.folder', {folderId:1});
        } else {
            $scope.currentFolder = FolderServices.getFolderById(folderId);
        }
    }])
    .factory('FolderServices', function(){
        var service = {
            getFolders: function() {
                return [
                    {
                        "folderId": "1",
                        "name": "Home",
                        "privacy": "private",
                        "description": "zxscsfafasf fasfasfafsf fasfafadf rertt ksdjaidja kjdamdkamdka iidsdiasudaid damsladmas. sdadd ",
                        "bookmark": [
                            {
                                "id": "1",
                                "name": "Yellow Jasmine",
                                "address": "www.yellowjasmine.pl",
                                "description": "",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2015 - Thu the 23th"
                            },
                            {
                                "id": "2",
                                "name": "Czyste Auto",
                                "address": "www.czysteaut.pl",
                                "description": "sfafsaafasf jjjjslks kksssss",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "3",
                                "name": "Wykop",
                                "address": "www.wykop.pl",
                                "description": "dddafaf sfsfsaf adafrjk jgkhu",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Nov 2015 - Thu the 10th"
                            },
                            {
                                "id": "4",
                                "name": "Czyste Auto",
                                "address": "www.czysteaut.pl",
                                "description": "pppppppppppppppppppppppp ooooooooooooooo jjjjjjjjjjjjj",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "5",
                                "name": "Onet",
                                "address": "www.onet.pl",
                                "description": "aaaaaaaaaaaaaaaaaa jjjjjjjjjjjj ssssssssssssssssss",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "6",
                                "name": "Interia",
                                "address": "www.interia.pl",
                                "description": "Najświeższe informacje z Polski i ze Świata. Z nami jako pierwszy będziesz wiedział co dzieje się w twoim kraju.",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "7",
                                "name": "Stylowi",
                                "address": "www.stylowi.pl",
                                "description": "Strona zawiera różnego rodzaju inspiracje, zdjęcia ze świata mody i sportu, ćwiczenia na płaski brzuch oraz wiele innych ciekawych inspiracji",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            }
                        ]
                    },
                    {
                        "folderId": "2",
                        "name": "Moda",
                        "privacy": "private",
                        "description": "",
                        "bookmark": [
                            {
                                "name": "Stylowi",
                                "address": "www.stylowi.pl",
                                "description": "sssssssssssssssssssssssssssssssssss",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Jul 2015 - Thu the 9th"
                            },
                            {
                                "id": "2",
                                "name": "Onet",
                                "address": "www.onet.pl",
                                "description": "hhhhhhhhhhhhhhhhhhhhhhhhh",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "2",
                                "name": "Interia",
                                "address": "www.interia.pl",
                                "description": "Najświeższe informacje z Polski i ze Świata. Z nami jako pierwszy będziesz wiedział co dzieje się w twoim kraju.",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            }]
                    },
                    {
                        "folderId": "3",
                        "name": "Motorcycle",
                        "privacy": "private",
                        "description": "",
                        "bookmark":[{
                            "name": "Motor",
                            "address": "www.aaa.pl",
                            "description": "alalalalallalalalallalala",
                            "keywords": "",
                            "privacy": "private",
                            "screen": "../../images/avatar.jpg",
                            "add_date": "Jul 2015 - Thu the 9th"
                        },
                            {
                                "id": "2",
                                "name": "Tuning",
                                "address": "www.tuning.pl",
                                "description": "apppsspp pppsass",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            }]
                    }];

            },

            getFolderById: function(folderId) {
                return service.getFolders()[folderId-1].bookmark;
            }
        };
        return service

    });
/*
    .controller("UserProfileCtrl",['$scope','$http', 'dialogService','search', function($scope, $http, dialogService, search){


        $http.get('scripts/users.json').success(function(data){
            $scope.items = data;
        });

        $http.get('scripts/baza_wonderpage.json').success(function(data){
            $scope.folders = data;
        });

        $scope.test = '123';
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
    });*/