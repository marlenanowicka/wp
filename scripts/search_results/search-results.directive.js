'use strict';
angular.module('wonderpage.search_results')
    .directive('searchResults', ['search', function (search) {
        return {
            restrict: 'A',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/search_results/search.html',
            link: function ($scope, element, attrs) {
                $scope.Results = search.getResults();
            }
        };
    }]);