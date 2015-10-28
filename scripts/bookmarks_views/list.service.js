'use strict';

angular.module('wonderpage.bookmarks_views')
.factory('BookmarksServices',
    function BookmarksServices($http) {
        return {
            getBookmarks: function () {
                var bookmarks = $http.get('scripts/baza_wonderpage.json').success(function(data){
                    return data;
                });
                return bookmarks;
            }
        }
    });