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
}]).directive('popover', function () {
        return {
            restrict: 'E',
            transclude: true,
            template: '<a ng-transclude></a>',
            scope: {
                feed: '='
            },
            link: function (scope, element) {
                var options = {
                    content: '<img src="'+scope.feed.avatar+'"/><p>'+scope.feed.bookmark+'</p>',
                    placement: "left",
                    html: true,
                    trigger: "hover"
                };
                $(element).popover(options);
            }
        }
    });
