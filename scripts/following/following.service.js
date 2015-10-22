'use strict';

angular.module('wonderpage.following')
    .factory('usersServices',
    function usersServices() {
        return {
            getUser: function () {
                return [{
                    avatar: '../../images/avatar.jpg',
                    user_name: 'przemek.nowicki',
                    quantity_followers: '4',
                    quantity_following: '4',
                    status_following: 'y'
                     },
                    {
                        avatar: '../../images/avatar.jpg',
                        user_name: 'przemek.nowicki',
                        quantity_followers: '4',
                        quantity_following: '1',
                        status_following: 'y'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        user_name: 'przemek.nowicki',
                        quantity_followers: '4',
                        quantity_following: '0',
                        status_following: 'y'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        user_name: 'przemek.nowicki',
                        quantity_followers: '4',
                        quantity_following: '3',
                        status_following: 'n'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        user_name: 'przemek.nowicki',
                        quantity_followers: '2',
                        quantity_following: '4',
                        status_following: 'n'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        user_name: 'przemek.nowicki',
                        quantity_followers: '1',
                        quantity_following: '9',
                        status_following: 'y'
                    }
                ];
            }
        }
    });