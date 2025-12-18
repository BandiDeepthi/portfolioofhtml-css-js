// Portfolio Configuration and Constants

const PORTFOLIO_DATA = {
    // Personal Information
    personal: {
        name: "Bandi Deepthi",
        role: "Full Stack Java Developer",
        subtitle: "Fresher",
        email: "bnddeepthi@gmail.com",
        phone: "+91 91606 95846",
        github: "https://github.com/BandiDeepthi",
        linkedin: "", // Add LinkedIn URL here
    },

    // Hero Section - Typing Effect Text
    heroText: {
        intro: "I am a B.Tech Computer Science graduate with strong skills in Java, SQL, and Web Development. I have hands-on experience in building backend applications and machine learning–based web systems. I am passionate about creating scalable, secure, and intelligent software solutions.",
        typingPhrases: [
            "Full Stack Java Developer",
            "Web Developer",
            "Machine Learning Enthusiast",
            "Problem Solver"
        ]
    },

    // Projects
    projects: [
        {
            title: "Innovative Web Framework for Cervical Cancer Detection",
            description: "A web-based machine learning application that predicts cervical cancer risk using patient data and advanced ML models.",
            technologies: ["Python", "Machine Learning", "Regression Models", "AdaBoost", "XGBoost", "Flask", "HTML", "CSS"],
            link: "",
            github: "",
            image: "images/project1.jpg"
        },
        {
            title: "Multimedia Blog",
            description: "A web application that displays top movie lists, playlists, and multimedia content with a clean UI.",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "",
            github: "https://github.com/BandiDeepthi/Multimediablog",
            image: "images/project2.jpg"
        }
    ],

    // Experience & Education
    experience: [
        {
            type: "education",
            title: "Bachelor of Technology – Computer Science and Engineering",
            organization: "Annamacharya Institute of Technology and Sciences, Rajampet",
            duration: "2022 – 2025",
            description: "CGPA: 8.74",
            icon: "🎓"
        },
        {
            type: "internship",
            title: "Full Stack Web Development Trainee",
            organization: "Tap Academy",
            duration: "Nov 2025",
            description: "Worked on web development projects using Core Java, HTML, CSS, JavaScript, and SQL. Implemented secure and scalable applications.",
            icon: "💼"
        },
        {
            type: "internship",
            title: "Full Stack Development & Cybersecurity",
            organization: "Pantech & SkillDzire",
            duration: "2023 – 2024",
            description: "Full Stack Development (Web, Java, Python) • Cybersecurity Internship • Artificial Intelligence Workshop",
            icon: "💼"
        }
    ],

    // Skills
    skills: {
        "Programming Languages": ["Java", "SQL", "Python"],
        "Web Technologies": ["HTML", "CSS", "JavaScript"],
        "Machine Learning": ["Logistic Regression", "Stacking Classifier", "AdaBoost", "XGBoost"],
        "Tools & Platforms": ["Git", "VS Code", "Flask"],
        "Core Concepts": ["Cloud Computing", "NLP", "DevOps"]
    }
};

// Animation and UI Constants
const UI_CONFIG = {
    loaderDuration: 2500, // milliseconds
    typingSpeed: 100, // milliseconds per character
    typingDelay: 2000, // delay between phrases
    scrollOffset: 80, // navbar height offset for smooth scroll
};
