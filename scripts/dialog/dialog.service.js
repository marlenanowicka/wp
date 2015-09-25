'use strict';

angular
    .module('wonderpage.dialog', [])
    .factory('dialogService',['$modal', function($modal) {
        return {
            openFolderPropertiesDialog: folderPropertiesDialog
        };

        function folderPropertiesDialog() {
            return $modal.open({
                    templateUrl: 'scripts/dialog/folder-properties-dialog.html',
                    controller: 'UploadFileDialog',
                    backdrop: 'static',
                    keyboard: false
                }
                );
        }
    }]);
