'use strict';

angular
    .module('wonderpage.dialog', [])
    .factory('dialogService',['$modal', function($modal) {
        return {
            openFolderPropertiesDialog: folderPropertiesDialog,
            openBookmarkPropertiesDialog: bookmarkPropertiesDialog,
            openSocialMediaDialog: socialMediaDialog,
            openSendMessageDialog: sendMessageDialog,
            openUnfollowDialog: unfollowDialog,
            openFollowDialog: followDialog,
            openImproperBookmarkDialog: improperBookmarkDialog,
            openCopyBookmarkDialog: copyBookmarkDialog,
            openProfileSettingsDialog: profileSettingsDialog,
            openInviteFriendsDialog: inviteFriendsDialog
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
        function sendMessageDialog() {
            return $modal.open({
                templateUrl: 'scripts/dialog/send-message-dialog.html',
                controller: 'openMessageDialog',
                windowClass: 'md-dialog',
                backdrop: 'static',
                keyboard: false
            });
        }
        function unfollowDialog() {
            return $modal.open({
                templateUrl: 'scripts/dialog/unfollow-dialog.html',
                controller: 'openUnfollowDialog',
                windowClass: 'un-dialog',
                backdrop: 'static',
                keyboard: false
            });
        }
        function followDialog() {
            return $modal.open({
                templateUrl: 'scripts/dialog/follow-dialog.html',
                controller: 'openFollowDialog',
                windowClass: 'fo-dialog',
                backdrop: 'static',
                keyboard: false
            });
        }
        function improperBookmarkDialog() {
            return $modal.open({
                templateUrl: 'scripts/dialog/improper-bookmark-dialog.html',
                controller: 'openImproperDialog',
                windowClass: 'im-dialog',
                backdrop: 'static',
                keyboard: false
            });
        }
        function copyBookmarkDialog() {
            return $modal.open({
                templateUrl: 'scripts/dialog/copy-bookmark-dialog.html',
                controller: 'openCopyBookDialog',
                windowClass: 'cb-dialog',
                backdrop: 'static',
                keyboard: false
            });
        }
        function profileSettingsDialog() {
            return $modal.open({
                templateUrl: 'scripts/dialog/profile-settings-dialog.html',
                controller: 'openProfileDialog',
                windowClass: 'ps-dialog',
                backdrop: 'static',
                keyboard: false
            });
        }
        function inviteFriendsDialog() {
            return $modal.open({
                templateUrl: 'scripts/dialog/invite-friends-dialog.html',
                controller: 'openInviteDialog',
                windowClass: 'if-dialog',
                backdrop: 'static',
                keyboard: false
            });
        }
    }]);
