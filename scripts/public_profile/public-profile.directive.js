'use strict';
angular.module('wonderpage.public_profile')
    .directive('publicProfile',  function () {
        return {
            scope:{
                UserName: '&'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/public_profile/public-profile.html',
            controller: 'PublicProfileController'
        };
    });