// Pages routes
const route = {
    home: "/",
    products: "/products",
    editProduct: "/editProduct",
    editCategory: "/editCategory",
    about: "/about",
    export: "/export",
    contact: "/contact",
    category: "/category",
    login: "/login",
    packaging: "/packaging",
}

// Navigation menu
const navMenu = [
    { title: "HOME", route: route.home },
    { title: "ABOUT", route: route.about },
    { title: "EXPERIENCE", route: route.experience },
    { title: "CONTACT", route: route.contact }
];

// Introduction
const about = {
    name: "Vimal Patel",
    briefIntroduction: `“It’s hard enough to find an error in your code when you’re looking for it; it’s even harder when you’ve assumed your code is error-free.”`,
    email: "contact@vimalpatel.tech",
    phone: "+91 9624 752 577",
    address: `B-11 Ishwar ami Krupa flats,
    Near Sahjanand Avenue, Vejalpur
    AHMEDABAD, GUJARAT 380051
    India`,
    about: [
        {
            detail: `I am a MERN stack and Mobile app developer. I am 24 Now. Total I have 3 years of working experience.
            Currently my JOB designation is Lead Technology Architect.`
        },
        {
            detail: `Mainly I have worked with React technologies (React.js, React Native). I always want to have a deep understading of perticular technology.`
        },
        {
            detail: `My basic thinking while coding is , How can I write better code than my last ?`,
            bold: true
        }
    ],
    currentWorkingCompany: "IT PATH SOLUTIONS",
    currentDesignation: "Lead Technology Architect",
    proffession: "Web (MERN) , Mobile Developer"
}
// Site data
const data = {
    // Skills
    skills: [
        {
            "title": "Wep App development",
            level: 60,
            color: "#CF2727"
        },
        {
            "title": "Web designs",
            level: 40,
            color: "#EF7B00"
        },
        {
            "title": "Mobile App development",
            level: 60,
            color: "#F49E10"
        }
    ],
    // Technologies 
    technologies: [
        {
            title: "JavaScript (ES6)",
            image: "assets/images/technology/js.png",
            color: "#FFFFFF"
        },
        {
            title: "TypeScript",
            image: "assets/images/technology/typescript.png",
            color: "#FFFFFF"
        },
        {
            title: "React.js",
            image: "assets/images/technology/react.png",
            color: "#FFFFFF"
        },
        {
            title: "Next.js",
            image: "assets/images/technology/nextjs.png",
            color: "#FFFFFF"
        },
        {
            title: "HTML",
            image: "assets/images/technology/html.png",
            color: "#FFFFFF"
        },
        {
            title: "CSS",
            image: "assets/images/technology/css.png",
            color: "#FFFFFF"
        },
        {
            title: "SASS",
            image: "assets/images/technology/sass.png",
            color: "#FFFFFF"
        },
        {
            title: "Node.js",
            image: "assets/images/technology/node.png",
            color: "#FFFFFF"
        },
        {
            title: "Express.js",
            image: "assets/images/technology/express.png",
            color: "#FFFFFF"
        },
        {
            title: "Mongo DB",
            image: "assets/images/technology/mongo.png",
            color: "#FFFFFF"
        },
        {
            title: "SQL",
            image: "assets/images/technology/sql.png",
            color: "#FFFFFF"
        },
        {
            title: "React Native",
            image: "assets/images/technology/reactNative.png",
            color: "#FFFFFF"
        },
        {
            title: "Android Java",
            image: "assets/images/technology/android.png",
            color: "#FFFFFF"
        },
        {
            title: "GIT",
            image: "assets/images/technology/git.png",
            color: "#FFFFFF"
        },
    ],

    // Experience

    experience: [
        {
            year: "Aug 2019 - December 2021",
            image: "assets/images/experience/icon-1.png",
            designation: "Associate Technology Architect",
            company: about.currentWorkingCompany
        },
        {
            year: "December 2021 - Present",
            image: "assets/images/experience/icon-2.png",
            designation: "Lead Technology Architect",
            company: about.currentWorkingCompany
        },
    ],

    // Education
    education: [
        {
            year: "2015 - 2019",
            course: "Bachlor's in Computer Engineering",
            univercity: "Government Engineering College Bhavnagar."
        },
        {
            year: "2013 - 2015",
            course: "HSC with Science",
            univercity: "Pragna higher secondary vidhyalaya , Sarigam."
        },
        {
            year: "2012-2013",
            course: "SSC",
            univercity: "St. Xavier's high school, Zaroli."
        },
    ],

    // Links
    links: [
        {
            title: "GitHub",
            logo: "assets/images/links/github.png",
            url: "https://github.com/vimaloneuser"
        },
        {
            title: "npm",
            logo: "assets/images/links/npm.png",
            url: "https://www.npmjs.com/~vimalpuserone"
        },
        {
            title: "Google Play Store",
            logo: "assets/images/links/playstore.png",
            url: "https://play.google.com/store/apps/collection/cluster?clp=igM4ChkKEzg2OTUyMDEzNzI0NTI3ODY5OTQQCBgDEhkKEzg2OTUyMDEzNzI0NTI3ODY5OTQQCBgDGAA%3D:S:ANO1ljLT6Ac&gsr=CjuKAzgKGQoTODY5NTIwMTM3MjQ1Mjc4Njk5NBAIGAMSGQoTODY5NTIwMTM3MjQ1Mjc4Njk5NBAIGAMYAA%3D%3D:S:ANO1ljKN4xo&hl=en_IN&gl=US"
        },
        {
            title: "linked in",
            logo: "assets/images/links/linkedin.png",
            url: "https://www.linkedin.com/in/vimal-patel-43a189235/"
        },
        {
            title: "Facebook",
            logo: "assets/images/links/facebook.png",
            url: "https://www.facebook.com/profile.php?id=100060844911512"
        },
        {
            title: "Instagram",
            logo: "assets/images/links/instagram.png",
            url: "https://www.instagram.com/vrpmecrazytech/"
        },
        {
            title: "Twitter",
            logo: "assets/images/links/twiitter.png",
            url: "https://twitter.com/VimalPa46456561"
        }
    ]
}

const exports = [
    {
        country: "US",
        flag: "assets/images/flags/us.png"
    },
    {
        country: "UK",
        flag: "assets/images/flags/uk.png"
    },
    {
        country: "Spain",
        flag: "assets/images/flags/spain.png"
    },
    {
        country: "Japan",
        flag: "assets/images/flags/japan.png"
    },
    {
        country: "South Africa",
        flag: "assets/images/flags/sa.png"
    },
    {
        country: "Canada",
        flag: "assets/images/flags/canada.png"
    },
    {
        country: "Australia",
        flag: "assets/images/flags/aus.png"
    },
    {
        country: "Netherland",
        flag: "assets/images/flags/netherland.png"
    },
    {
        country: "Turkey",
        flag: "assets/images/flags/turkey.png"
    },
    // {
    //     country: "China",
    //     flag: "assets/images/flags/china.png"
    // },
    {
        country: "Nepal",
        flag: "assets/images/flags/nepal.png"
    },
    {
        country: "Bangladesh",
        flag: "assets/images/flags/bangla.png"
    },
    {
        country: "UAE (Dubai)",
        flag: "assets/images/flags/dubai.png"
    },
    // {
    //     country: "Saudi Arabia",
    //     flag: "assets/images/flags/saudi.png"
    // },
]

export { route, data, about, navMenu, exports };