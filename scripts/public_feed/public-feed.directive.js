'use strict';
angular.module('wonderpage.public_feed',[])
    .directive('publicFeed', ['PublicFeedServices', function (PublicFeedServices) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'scripts/public_feed/public-feed.html',
        link: function ($scope, element, attrs) {
            $scope.itemsPerPage = attrs.itemsPerPage;
            $scope.feeds = PublicFeedServices.getFeed();
        }
    };
}]);
