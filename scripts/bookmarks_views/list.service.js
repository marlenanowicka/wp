'use strict';

angular.module('wonderpage.bookmarks_views')
.factory('BookmarksServices',
    function BookmarksServices() {
        return {
            getBookmarks: function () {
                return [{
                        screen: '../../images/avatar.jpg',
                        name: 'Yellow Jasmine',
                        description: 'Projektowanie stron internetowych, tworzenie grafiki',
                        bookmark: 'yellowjasmine.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Make It With US',
                        description: 'Projektowanie stron www, tworzenie grafiki',
                        bookmark: 'make-it-with.us'
                    },{
                        screen: '../../images/avatar.jpg',
                        name: 'Czyste Auto',
                        description: 'Sprzątanie samochodów, mycie, pranie tapicerki',
                        bookmark: 'onet.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Odzież',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        bookmark: 'wp.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Pizzeria',
                        description: 'Vestibulum lorem sapien, bibendum sit amet nibh sit amet, vulputate ',
                        bookmark: 'wykop.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Projektowanie stron www',
                        description: 'Nunc fringilla arcu lacus, vitae tristique tortor sodales ac. Morbi.',
                        bookmark: 'interia.pl'
                    }
                ];
            }
        }
    });