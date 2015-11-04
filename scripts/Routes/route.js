'use strict';
angular.module('wonderpage.routes', ['ui.router'])
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
                templateUrl: 'scripts/bookmarks_views/bookmark.html'
            })
            // url will be /user-profile.folderFollowing

            .state('user-profile.folderFollowing', {
                url: '/folderType/folderFollowing',
                controller: 'FollowingController',
                templateUrl: 'scripts/following/following.html'
            })

            // url will be /user-profile.folderFollowers
            .state('user-profile.folderFollowers', {
                url: '/folderType/folderFollowers',
                controller: 'FollowersController',
                templateUrl: 'scripts/followers/followers.html'
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
            })
            .state('user-profile.folderSearch', {
                url: 'folderType/folderSearch/search/ZXZlcnlvbmU=/searchFilter/searchEveryone',
                templateUrl: 'scripts/search_results/all-public-users.html'
            });

    });
