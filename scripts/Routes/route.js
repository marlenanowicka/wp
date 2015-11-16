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
                    'aside@user-profile': {
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
                        template: '<div ng-switch on="selectionSize.id">' +
                                    '<div ng-switch-when="1">' +
                                    '   <list></list>' +
                                    '</div>' +
                                    '<div ng-switch-default>' +
                                    '<div html-sortable="" ng-model="currentFolder">' +
                                    '<grid ng-class="[selectionSize.value]"></grid>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>'
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

            .state('user-profile.folderFollowers.publicProfile', {
                url: '/publicProfile',
                views: {
                    'nav@user-profile': {
                        controller: 'PublicProfileController',
                        templateUrl: 'scripts/public_profile/publicProfileMenu.html'
                    },
                    'content@user-profile': {
                        controller: 'PublicProfileController',
                        template: '<p>udało się </p>'
                    },
                    'aside@user-profile': {
                        controller: 'PublicProfileController',
                        template: '<public-profile></public-profile>'
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
                templateUrl: 'scripts/search_results/all-public-users.html'
            })
    });
