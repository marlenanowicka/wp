'use strict';

angular.module('wonderpage.public_feed')
.factory('PublicFeedServices',
    function PublicFeedServices() {
        return {
            getFeed: function () {
                return [{
                        avatar: '../../images/avatar.jpg',
                        login: 'marlena.nowicka',
                        add: '18.09.2015',
                        bookmark: 'yellowjasmine.pl'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        login: 'przemek.nowicka',
                        add: '21.09.2015',
                        bookmark: 'make-it-with.us'
                    },{
                        avatar: '../../images/avatar.jpg',
                        login: 'aleksandra.nowak',
                        add: '08.07.2015',
                        bookmark: 'onet.pl'
                    }
                ];
            }
    }
 });