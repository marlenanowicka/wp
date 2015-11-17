'use strict';
angular.module('wonderpage.routes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/user/profile');

        $stateProvider
            // route to show our basic form (/form)
            .state('user-profile', {
                url: '/user/profile',
                views: {
                    "": {
                        templateUrl: "scripts/user-profile.html",
                        controller: 'ListFolderController'
                    },
                    'header@user-profile': {
                        templateUrl: "scripts/common/header.html"
                    },
                    'nav@user-profile': {
                        templateUrl: "scripts/common/nav.html",
                    },
                    'content@user-profile': {
                        template: '<div ui-view></div>'
                    },
                    'sidebar@user-profile': {
                        template: '<public-feed></public-feed>'
                    },
                    'footer@user-profile': {
                        templateUrl: "scripts/common/footer.html"
                    }
                }

            })
            // url will be //folderType/folderAssets/folder/:folderId
            .state('user-profile.folder', {
                url: '/folderType/folderAssets/folder/:folderId',
                views: {
                    'content@user-profile': {
                        controller: 'BookmarkController',
                        templateUrl: 'scripts/bookmarks_views/bookmark.html'
                                    }
                        }
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

            .state('publicProfile', {
                url: '^/:UserName',
                parent:'user-profile.folderFollowers',
                views: {
                    'nav@user-profile': {
                        controller: 'PublicProfileController',
                        templateUrl: 'scripts/public_profile/publicProfileMenu.html'
                    },
                    'content@user-profile': {
                        controller: 'PublicProfileController',
                        templateUrl: 'scripts/bookmarks_views/bookmark.html'
                    },
                    'sidebar@user-profile': {
                        controller: 'PublicProfileController',
                        template: '<public-profile></public-profile>'
                    },
                    'footer@user-profile': {
                        templateUrl: ''
                    }
                }
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
                views: {
                    'content@user-profile': {
                        controller: 'ListFolderController',
                        templateUrl: 'scripts/search_results/search.html'
                    }
                }
            })
    });
