// simulate backend with json object

const dataFeed = [
    {
        "index": "AboutMe",
        "text": "Full stack web developer educated at UC Berkeley Extension leveraging STEM background to create intuitive and efficient web applications. Experience working in a team setting with Git and the MERN stack to design and build original applications under a deadline. Looking to work in a collaborative setting building, maintaining, and writing tests for an application code base.",
        "img": "../../assets/images/profpic.jpg"
    },
    {
        "index": "Portfolio",
        "content": [
            {
                "title": "Pump Plunder",
                "img": "./images/pump-plunder-scrnsht.jpg",   
                "url": "https://pump-plunder.herokuapp.com/",
                "repo": "https://github.com/Afaed/Pump-Plunder"
            },
            {
                "title": "Dinner For You",
                "img": "./images/dinner-for-you-scrnsht.png",
                "url": "https://ddoherty6.github.io/dinner-for-you/",
                "repo": "https://github.com/ddoherty6/dinner-for-you    "
            },
            {
                "title": "Weather Dashboard",
                "img": "./images/bill-michaud-kPxzuiW2aGI-unsplash.jpg",
                "url": "https://ddoherty6.github.io/06-Weather-Dashboard/",
                "repo": "https://github.com/ddoherty6/06-Weather-Dashboard"
            },
            {
                "title": "Password Generator",
                "img": "./images/banner-g58e23b4bd_640.jpg",
                "url": "https://ddoherty6.github.io/03-Password-Generator/",
                "repo": "https://github.com/ddoherty6/03-Password-Generator"
            },
            {
                "title": "Work Day Scheduler",
                "img": "./images/puzzle-g4f5bcbaff_640.jpg",
                "url": "https://ddoherty6.github.io/05-Work-Day-Scheduler/",
                "repo": "https://github.com/ddoherty6/05-Work-Day-Scheduler"
            },
            {
                "title": "Look Me Up",
                "img": "./images/look-me-up.jpg",
                "url": "https://look-meup.herokuapp.com/",
                "repo": "https://github.com/asadi80/look-me-up"
            }
        ]
    },
    {
        "index": "Contact",
        "content": "" // placeholder for future data
    },
    {
        "index": "Resume",
        "content": ""
    }
]

module.exports = dataFeed;