'use strict';

angular.module('wonderpage.service')
    .factory('FollowServices', function(){
        var service = {
            getFollow: function() {
                return [{

                    "following": [
                        {
                            "id": "101",
                            "avatar": "../../images/avatar.jpg",
                            "name": "nowicki.przemek",
                            "followers": "4",
                            "following": "10",
                            "status":"Y"
                        },
                        {
                            "id": "102",
                            "avatar": "../../images/avatar.jpg",
                            "name": "ala.nowak",
                            "followers": "1",
                            "following": "0",
                            "status":"N"
                        },
                        {
                            "id": "104",
                            "avatar": "../../images/avatar.jpg",
                            "name": "ola.kowalska",
                            "followers": "19",
                            "following": "3",
                            "status": "Y"
                        },
                        {
                            "id": "102",
                            "avatar": "../../images/avatar.jpg",
                            "name": "ala.nowak",
                            "followers": "1",
                            "following": "0",
                            "status": "N"
                        },
                        {
                            "id": "104",
                            "avatar": "../../images/avatar.jpg",
                            "name": "ola.kowalska",
                            "followers": "19",
                            "following": "3",
                            "status": "N"

                        }]
                    },
                    {

                    "followers": [
                            {
                                "id": "101",
                                "avatar": "../../images/avatar.jpg",
                                "name": "nowicki.przemek",
                                "followers": "4",
                                "following": "10",
                                "status":"Y"

                            },
                            {
                                "id": "102",
                                "avatar": "../../images/avatar.jpg",
                                "name": "ala.nowak",
                                "followers": "1",
                                "following": "0",
                                "status": "N"
                            },
                            {
                                "id": "104",
                                "avatar": "../../images/avatar.jpg",
                                "name": "ola.kowalska",
                                "followers": "19",
                                "following": "3",
                                "status":"Y"
                            }]
                    }]
            }

        };
        return service

    });