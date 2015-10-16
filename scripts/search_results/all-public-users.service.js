'use strict';

angular.module('wonderpage.allPublicUsers')
    .factory('usersPublic',
    function usersPublic() {
        return {
            getAllUser: function () {
                return [{
                    avatar: '../../images/avatar.jpg',
                    user_name: 'przemek.nowicki',
                    quantity_fallowers: '4',
                    quantity_fallowing: '4',
                    status_fallowing: 'y'
                },
                    {
                        avatar: '../../images/avatar.jpg',
                        user_name: 'przemek.nowicki',
                        quantity_fallowers: '4',
                        quantity_fallowing: '1',
                        status_fallowing: 'y'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        user_name: 'przemek.nowicki',
                        quantity_fallowers: '4',
                        quantity_fallowing: '0',
                        status_fallowing: 'y'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        user_name: 'przemek.nowicki',
                        quantity_fallowers: '4',
                        quantity_fallowing: '3',
                        status_fallowing: 'n'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        user_name: 'przemek.nowicki',
                        quantity_fallowers: '2',
                        quantity_fallowing: '4',
                        status_fallowing: 'n'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        user_name: 'przemek.nowicki',
                        quantity_fallowers: '1',
                        quantity_fallowing: '9',
                        status_fallowing: 'y'
                    }
                ];
            }
        }
    });