'use strict';
angular.module('wonderpage', ['ui.router','ui.bootstrap', 'wonderpage.public_feed', 'wonderpage.bookmarks_views', 'wonderpage.dialog', 'wonderpage.following', 'wonderpage.public_profile', 'wonderpage.search_results','wonderpage.menu' ])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/user/profile');

        $stateProvider

            // route to show our basic form (/form)
            .state('user-profile', {
                 url: '/user/profile',
                templateUrl: 'scripts/user-profile.html'

            })
            // url will be //folderType/folderAssets/folder/:folderId
            .state('user-profile.folder', {
                url: '/folderType/folderAssets/folder/:id',
                templateUrl: 'scripts/bookmarks_views/list.html',
                controller: function($scope, $stateParams){
                    $scope.id = $stateParams.id;
                    $scope.folder = $scope.folders[$stateParams.id];
                }
            })
            // url will be /user-profile.folderFollowing

            .state('user-profile.folderFollowing', {
                url: '/folderType/folderFollowing',
                templateUrl: 'scripts/following/following.html'
            })

            // url will be /user-profile.folderFollowers
            .state('user-profile.folderFollowers', {
                url: '/folderType/folderFollowers',
                templateUrl: 'scripts/following/following.html'
            })

            // url will be /user-profile.mostViewed
            .state('user-profile.mostViewed', {
                url: '/folderType/mostViewed',
                templateUrl: 'scripts/following/following.html'
            })

            // url will be /user-profile.recentlyAdded
            .state('user-profile.recentlyAdded', {
                url: '/folderType/recentlyAdded',
                templateUrl: 'scripts/following/following.html'
            });

    });
