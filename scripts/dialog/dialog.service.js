'use strict';

angular
    .module('wonderpage.dialog', [])
    .factory('dialogService',['$modal', function($modal) {
        return {
            openFolderPropertiesDialog: folderPropertiesDialog,
            openBookmarkPropertiesDialog: bookmarkPropertiesDialog,
            openSocialMediaDialog: socialMediaDialog
        };

        function folderPropertiesDialog() {
            return $modal.open({
                templateUrl: 'scripts/dialog/folder-properties-dialog.html',
                controller: 'openFolderDialog',
                backdrop: 'static',
                keyboard: false
            });
        }
        function bookmarkPropertiesDialog() {
            return $modal.open({
                templateUrl: 'scripts/dialog/bookmark-properties-dialog.html',
                controller: 'openBookmarkDialog',
                backdrop: 'static',
                keyboard: false
            });
        }
        function socialMediaDialog() {
            return $modal.open({
                templateUrl: 'scripts/dialog/social-media-dialog.html',
                controller: 'openSocialDialog',
                windowClass: 'sm-dialog',
                backdrop: 'static',
                keyboard: false
            });
        }
    }]);
