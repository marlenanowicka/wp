'use strict';
angular.module('wonderpage.public_profile',[])
    .directive('publicProfile', ['PublicProfileServices', function (PublicProfileServices) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/public_profile/public-profile.html',
            link: function ($scope, element, attrs) {
                $scope.profiles = PublicProfileServices.getProfile();
            }
        };
    }]);