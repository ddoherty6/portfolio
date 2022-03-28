// simulate backend with json object

const dataFeed = [
    {
        "index": "AboutMe",
        "text": "Full stack web developer educated at UC Berkeley Extension and leveraging STEM background to create intuitive and easy-to-maintain web applications. I have skills across the MERN stack, and experience working in a team setting with Git to design and build original applications under a deadline. In a recent project I developed a RESTful API in a SQL database. Working with six teammates against a deadline, I developed a social media platform that allows people at a networking event to easily exchange digital business cards. I am excited to work in a team-oriented setting building, improving, and maintaining database functionality in support of front-end designers.",
        "img": "../../assets/images/profpic.jpg"
    },
    {
        "index": "Portfolio",
        "content": [
            {
                "title": "project 1",
                "img": "./image.jpg",
                "url": "https://www.google.com"
            },
            {
                "title": "project 2",
                "img": "./image2.jpg",
                "url": "https://www.mcmaster-carr.com"
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