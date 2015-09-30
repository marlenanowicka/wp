'use strict';
angular.module('wonderpage.fallowing',[])
    .directive('fallowing', ['usersServices', function (usersServices) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/fallowing/fallowing.html',
            link: function ($scope) {
                $scope.users = usersServices.getUser();
            }
        };
    }]);

