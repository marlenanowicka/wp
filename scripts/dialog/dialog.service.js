'use strict';

angular
    .module('wonderpage.dialog', [])
    .factory('dialogService',['$modal', function($modal) {
        return {
            openFolderPropertiesDialog: folderPropertiesDialog
        };

        function folderPropertiesDialog() {
            console.log("tutja");
            /*return $modal.open({
                    templateUrl: 'scripts/dialog/folder-properties-dialog.controller.html',
                    controller: 'UploadFileDialog'
                },
                defaultOptions());*/
        }

        function defaultOptions() {
            return {
                backdrop: 'static',
                keyboard: false
            };
        }
    }]);
