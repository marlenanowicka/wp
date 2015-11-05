'use strict';

angular.module('wonderpage.service',[])
    .factory('FolderServices', function(){
        var service = {
            getFolders: function() {
                return [
                    {
                        "folderId": "1",
                        "name": "Home",
                        "privacy": "private",
                        "description": "zxscsfafasf fasfasfafsf fasfafadf rertt ksdjaidja kjdamdkamdka iidsdiasudaid damsladmas. sdadd ",
                        "bookmark": [
                            {
                                "id": "1",
                                "drag": 'true',
                                "name": "Yellow Jasmine",
                                "address": "www.yellowjasmine.pl",
                                "description": "",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2015 - Thu the 23th"
                            },
                            {
                                "id": "2",
                                "drag": "true",
                                "name": "Czyste Auto",
                                "address": "www.czysteaut.pl",
                                "description": "sfafsaafasf jjjjslks kksssss",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "3",
                                "drag": "true",
                                "name": "Wykop",
                                "address": "www.wykop.pl",
                                "description": "dddafaf sfsfsaf adafrjk jgkhu",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Nov 2015 - Thu the 10th"
                            },
                            {
                                "id": "4",
                                "drag": "true",
                                "name": "Czyste Auto",
                                "address": "www.czysteaut.pl",
                                "description": "pppppppppppppppppppppppp ooooooooooooooo jjjjjjjjjjjjj",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "5",
                                "drag": "true",
                                "name": "Onet",
                                "address": "www.onet.pl",
                                "description": "aaaaaaaaaaaaaaaaaa jjjjjjjjjjjj ssssssssssssssssss",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "6",
                                "drag": "true",
                                "name": "Interia",
                                "address": "www.interia.pl",
                                "description": "Najświeższe informacje z Polski i ze Świata. Z nami jako pierwszy będziesz wiedział co dzieje się w twoim kraju.",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "7",
                                "drag": "true",
                                "name": "Stylowi",
                                "address": "www.stylowi.pl",
                                "description": "Strona zawiera różnego rodzaju inspiracje, zdjęcia ze świata mody i sportu, ćwiczenia na płaski brzuch oraz wiele innych ciekawych inspiracji",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "8",
                                "drag": 'true',
                                "name": "Yellow Jasmine",
                                "address": "www.yellowjasmine.pl",
                                "description": "",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2015 - Thu the 23th"
                            },
                            {
                                "id": "9",
                                "drag": "true",
                                "name": "Czyste Auto",
                                "address": "www.czysteaut.pl",
                                "description": "sfafsaafasf jjjjslks kksssss",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "10",
                                "drag": "true",
                                "name": "Wykop",
                                "address": "www.wykop.pl",
                                "description": "dddafaf sfsfsaf adafrjk jgkhu",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Nov 2015 - Thu the 10th"
                            },
                            {
                                "id": "11",
                                "drag": "true",
                                "name": "Czyste Auto",
                                "address": "www.czysteaut.pl",
                                "description": "pppppppppppppppppppppppp ooooooooooooooo jjjjjjjjjjjjj",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "12",
                                "drag": "true",
                                "name": "Onet",
                                "address": "www.onet.pl",
                                "description": "aaaaaaaaaaaaaaaaaa jjjjjjjjjjjj ssssssssssssssssss",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "13",
                                "drag": "true",
                                "name": "Interia",
                                "address": "www.interia.pl",
                                "description": "Najświeższe informacje z Polski i ze Świata. Z nami jako pierwszy będziesz wiedział co dzieje się w twoim kraju.",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "14",
                                "drag": "true",
                                "name": "Stylowi",
                                "address": "www.stylowi.pl",
                                "description": "Strona zawiera różnego rodzaju inspiracje, zdjęcia ze świata mody i sportu, ćwiczenia na płaski brzuch oraz wiele innych ciekawych inspiracji",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            }
                        ]
                    },
                    {
                        "folderId": "2",
                        "name": "Moda",
                        "privacy": "private",
                        "description": "",
                        "bookmark": [
                            {   "id": "1",
                                "drag": "true",
                                "name": "Stylowi",
                                "address": "www.stylowi.pl",
                                "description": "sssssssssssssssssssssssssssssssssss",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Jul 2015 - Thu the 9th"
                            },
                            {
                                "id": "2",
                                "drag": "true",
                                "name": "Onet",
                                "address": "www.onet.pl",
                                "description": "hhhhhhhhhhhhhhhhhhhhhhhhh",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            },
                            {
                                "id": "3",
                                "drag": "true",
                                "name": "Interia",
                                "address": "www.interia.pl",
                                "description": "Najświeższe informacje z Polski i ze Świata. Z nami jako pierwszy będziesz wiedział co dzieje się w twoim kraju.",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            }]
                    },
                    {
                        "folderId": "3",
                        "name": "Motorcycle",
                        "privacy": "public",
                        "description": "",
                        "bookmark":[{
                                "id": "1",
                                "drag": "true",
                                "name": "Motor",
                                "address": "www.aaa.pl",
                                "description": "alalalalallalalalallalala",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Jul 2015 - Thu the 9th"
                        },
                            {
                                "id": "2",
                                "drag": "true",
                                "name": "Tuning",
                                "address": "www.tuning.pl",
                                "description": "apppsspp pppsass",
                                "keywords": "",
                                "privacy": "private",
                                "screen": "../../images/avatar.jpg",
                                "add_date": "Sep 2013 - Thu the 12th"
                            }]
                    }];

            },

            getFolderById: function(folderId) {
                return service.getFolders()[folderId-1].bookmark;
            }
        };
        return service

    });