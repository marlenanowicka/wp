'use strict';

angular.module('wonderpage.public_profile')
    .factory('PublicProfileServices',
    function PublicProfileServices() {
        return {
            getProfile: function () {
                return {
                    screen: '../../images/avatar.jpg',
                    login: 'marlena.nowicka',
                    cantry: 'Poland'
                }
            }
        }
    });
