'use strict';
angular.module('wonderpage.menu',[])
    .directive('follow',  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/menu/follow.html'
        };
    }).directive('statistics',  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'scripts/menu/statistics.html'
        };
    }).directive('menuAction',  function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'scripts/menu/menu-action.html'
        };
    }).directive('result',  function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template:'<div ng-show="show" class="search-results">' +
                        '<a class="active"><span ng-click="hideMe();" class="fa fa-times"></span>search results<i class="glyphicon glyphicon-search"></i></a>' +
                    '</div>'
        };
    });