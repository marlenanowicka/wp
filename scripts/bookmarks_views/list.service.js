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
                        address: 'yellowjasmine.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Make It With US',
                        description: 'Projektowanie stron www, tworzenie grafiki',
                        address: 'make-it-with.us'
                    },{
                        screen: '../../images/avatar.jpg',
                        name: 'Czyste Auto',
                        description: 'Sprzątanie samochodów, mycie, pranie tapicerki',
                        address: 'onet.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Odzież',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        address: 'wp.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Pizzeria',
                        description: 'Vestibulum lorem sapien, bibendum sit amet nibh sit amet, vulputate ',
                        address: 'wykop.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Yellow Jasmine',
                        description: 'Projektowanie stron internetowych, tworzenie grafiki',
                        address: 'yellowjasmine.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Make It With US',
                        description: 'Projektowanie stron www, tworzenie grafiki',
                        address: 'make-it-with.us'
                    },{
                        screen: '../../images/avatar.jpg',
                        name: 'Czyste Auto',
                        description: 'Sprzątanie samochodów, mycie, pranie tapicerki',
                        address: 'onet.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Odzież',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        address: 'wp.pl'
                    },
                    {
                        screen: '../../images/avatar.jpg',
                        name: 'Pizzeria',
                        description: 'Vestibulum lorem sapien, bibendum sit amet nibh sit amet, vulputate ',
                        address: 'wykop.pl'
                    }
                ];
            }
        }
    });