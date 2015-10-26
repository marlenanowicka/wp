'use strict';
angular.module('wonderpage', ['ui.router','ui.bootstrap', 'wonderpage.public_feed', 'wonderpage.bookmarks_views', 'wonderpage.dialog', 'wonderpage.following', 'wonderpage.public_profile', 'wonderpage.search_results' ])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // route to show our basic form (/form)
            .state('user-profile', {
                url: '/user/profile',
                controller: 'Ctrl1',
                abstract: true,
                    views: {
                        '': { templateUrl: 'scripts/views/user-profile.html' },
                        'header@user-profile': {
                            url: "",
                            templateUrl: 'scripts/common/header.html'
                        },
                        'footer@user-profile': {
                            url: "",
                            templateUrl: 'scripts/common/footer.html'
                        }
                    }
            })
            .state('user-profile.folder', {
                url: '/folderType/folderAssets/folder/:folderId',
                templateUrl: 'scripts/bookmarks_views/list.html',
                controller: 'myController'
            })
            // url will be /form/interests
            .state('user-profile.folderFollowing', {
                url: '/folderType/folderFollowing',
                templateUrl: 'scripts/following/following.html'
            })

            // url will be /form/payment
            .state('user-profile.folderFollowers', {
                url: '/folderType/folderFollowers',
                templateUrl: 'scripts/following/following.html'
            })

            // url will be /form/payment
            .state('user-profile.mostViewed', {
                url: '/folderType/mostViewed',
                templateUrl: 'scripts/following/following.html'
            })

            // url will be /form/payment
            .state('user-profile.recentlyAdded', {
                url: '/folderType/recentlyAdded',
                templateUrl: 'scripts/following/following.html'
            });
        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/user/profile');
    });