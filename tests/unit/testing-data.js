export const searchShows = [{
    score: 99,
    show: {
        id: 240,
        url: "http://www.tvmaze.com/shows/240/cops",
        name: "Cops",
        genres: ["Action", "Drama"],
    },
},
{
    score: 98,
    show: {
        id: 241,
        url: "http://www.tvmaze.com/shows/241/benched",
        name: "Benched",
        genres: ["Thriller", "Comedy"],
    },
},
]

export const homeShows = [{
    id: 1,
    genres: ["Action", "Drama"],
    rating: {
        average: 7
    }
},
{
    id: 2,
    genres: ["Thriller", "Action"],
    rating: {
        average: 8.1
    }
},
{
    id: 3,
    genres: ["Thriller", "Action"],
    rating: {
        average: null
    }
}
]

export const homeShowsInRandom = [{
id: 3,
genres: ["Thriller", "Action"],
rating: {
    average: null
}
}, {
id: 2,
genres: ["Thriller", "Action"],
rating: {
    average: 8.1
}
}, {
id: 1,
genres: ["Action", "Drama"],
rating: {
    average: 7
}
}]

export const showGenres = [
"Action",
"Drama",
"Thriller"
]

export const homeShowsByGenres = [{
    name: "Action",
    shows: [{
            genres: ["Thriller", "Action"],
            id: 2,
            rating: {
                average: 8.1
            }
        },
        {
            genres: ["Action", "Drama"],
            id: 1,
            rating: {
                average: 7
            }
        },
    ],
},
{
    name: "Drama",
    shows: [{
        genres: ["Action", "Drama"],
        id: 1,
        rating: {
            average: 7
        }
    }],
},
{
    name: "Thriller",
    shows: [{
        genres: ["Thriller", "Action"],
        id: 2,
        rating: {
            average: 8.1
        }
    }],
},
]

export const sortedHomeShows = [{
    id: 2,
    genres: ['Thriller', 'Action'],
    rating: {
        average: 8.1
    }
},
{
    id: 1,
    genres: ['Action', 'Drama'],
    rating: {
        average: 7
    }
}
]

export const showDetails = {
    "id": 240,
    "url": "http://www.tvmaze.com/shows/240/cops",
    "name": "Cops",
    "type": "Reality",
    "language": "English",
    "genres": ["Action", "Crime"],
    "status": "Ended",
    "runtime": 30,
    "premiered": "1989-03-11",
    "officialSite": "http://www.cops.com",
    "schedule": {
        "time": "22:30",
        "days": ["Monday"]
    },
    "rating": {
        "average": 7.8
    },
    "weight": 98,
    "network": {
        "id": 34,
        "name": "Paramount Network",
        "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
        }
    },
    "webChannel": null,
    "externals": {
        "tvrage": 3138,
        "thetvdb": 74709,
        "imdb": "tt0096563"
    },
    "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/1/4185.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/4185.jpg"
    },
    "summary": "<p><b>COPS</b> follows police officers, constables, and sheriff's deputies during patrols and various police activities by embedding camera crews with their units. The show's formula adheres to a classic <i>cinéma vérité</i> ethos. With no narration or scripted dialog, it depends entirely on the commentary of the officers and on the actions of the people with whom they come into contact.</p>",
    "updated": 1591767246,
    "_links": {
        "self": {
            "href": "http://api.tvmaze.com/shows/240"
        },
        "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/1859522"
        }
    }
}





