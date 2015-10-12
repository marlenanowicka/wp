'use strict';

angular.module('wonderpage.public_feed')
.factory('PublicFeedServices',
    function PublicFeedServices() {
        return {
            getFeed: function () {
                return [{
                        avatar: '../../images/avatar.jpg',
                        login: 'MariYellow',
                        add: 'Jul 2015 - Thu the 9th',
                        bookmark: 'yellowjasmine.pl'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        login: 'AnMaria',
                        add: 'Nov 2015 - Thu the 10th',
                        bookmark: 'make-it-with.us'
                    },{
                        avatar: '../../images/avatar.jpg',
                        login: 'OlaKowalska',
                        add: 'Sep 2015 - Thu the 23th',
                        bookmark: 'onet.pl'
                    },{
                        avatar: '../../images/avatar.jpg',
                        login: 'MariYellow',
                        add: 'Jul 2015 - Thu the 9th',
                        bookmark: 'yellowjasmine.pl'
                    },
                    {
                        avatar: '../../images/avatar.jpg',
                        login: 'AnMaria',
                        add: 'Nov 2015 - Thu the 10th',
                        bookmark: 'make-it-with.us'
                    },{
                        avatar: '../../images/avatar.jpg',
                        login: 'OlaKowalska',
                        add: 'Sep 2015 - Thu the 23th',
                        bookmark: 'onet.pl'
                    }
                ];
            }
    }
 });