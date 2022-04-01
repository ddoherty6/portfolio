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
                "title": "Look Me Up",
                "img": "./images/look-me-up.jpg",
                "url": "https://look-meup.herokuapp.com/",
                "repo": "https://github.com/ddoherty6/02-Professional-Portfolio/blob/main/assets/css/style.css"
            },
            {
                "title": "Dinner For You",
                "img": "https://user-images.githubusercontent.com/89751266/146664325-27e406be-2110-4bce-bcfd-c20662d5e80d.png",
                "url": "https://www.mcmaster-carr.com",
                "repo": "https://github.com/ddoherty6/02-Professional-Portfolio/blob/main/assets/css/style.css"
            },
            {
                "title": "Weather Dashboard",
                "img": "./images/bill-michaud-kPxzuiW2aGI-unsplash.jpg",
                "url": "https://www.mcmaster-carr.com",
                "repo": "https://github.com/ddoherty6/02-Professional-Portfolio/blob/main/assets/css/style.css"
            },
            {
                "title": "Password Generator",
                "img": "./images/banner-g58e23b4bd_640.jpg",
                "url": "https://www.mcmaster-carr.com",
                "repo": "https://github.com/ddoherty6/02-Professional-Portfolio/blob/main/assets/css/style.css"
            },
            {
                "title": "Work Day Scheduler",
                "img": "./images/puzzle-g4f5bcbaff_640.jpg",
                "url": "https://www.mcmaster-carr.com",
                "repo": "https://github.com/ddoherty6/02-Professional-Portfolio/blob/main/assets/css/style.css"
            },
            {
                "title": "Run Buddy",
                "img": "./images/run-buddy.png",
                "url": "https://www.mcmaster-carr.com",
                "repo": "https://github.com/ddoherty6/02-Professional-Portfolio/blob/main/assets/css/style.css"
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