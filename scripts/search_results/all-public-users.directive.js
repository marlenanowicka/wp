'use strict';
angular.module('wonderpage.allPublicUsers',[])
    .directive('allUsers', ['usersPublic', function (usersPublic) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/search_results/all-public-users.html',
            link: function ($scope, element, attrs) {
                $scope.allUsers = usersPublic.getAllUser();
            }
        };
    }]);