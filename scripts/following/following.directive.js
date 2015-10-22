'use strict';
angular.module('wonderpage.following',[])
    .directive('following', ['usersServices', function (usersServices) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/following/following.html',
            link: function ($scope) {
                $scope.users = usersServices.getUser();
            }
        };
    }]);

