// simulate backend with json object 

const dataFeed = {
    "AboutMe": "I am the greatest",
    "Portfolio" : [
        {
            "title": "project 1",
            "img": "./image.jpg",
            "url": "www.google.com"
        },
        {
            "title": "project 2",
            "img": "./image2.jpg",
            "url": "www.mcmaster-carr.com"
        }
    ],
    "Contact": "",
    "Resume": ""
}

module.exports = dataFeed;