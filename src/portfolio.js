/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello",
  title2: "Navi",
  logo_name: "Naveenkumar Ragupathy",
  nickname: "Navi",
  full_name: "Naveenkumar Ragupathy",
  subTitle:
    "Full Stack Developer with 2+ years of experience building scalable mobile and web applications with React Native, React, Next.js, and Node.js, Mongo DB.",
  resumeLink:
    "./Naveenkumar-R-Full-Stack-Developer.pdf",
  mail: "naveenkumar11301@gmail.com",
};

const socialMediaLinks = {
  /* Social Media Link */
  github: "https://github.com/naveenkumar11301r",
  linkedin: "https://www.linkedin.com/in/naveenkumar11301/",
  gmail: "naveenkumar11301@gmail.com",
  // gitlab: " ",
  // facebook: " ",
  // twitter: " ",
  // instagram: " ",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building scalable cross-platform mobile apps using React Native (Android & iOS)",
        "⚡ Developing high-performance web applications using React.js and Next.js",
        "⚡ Backend development and RESTful API integration using Node.js, Express.js, and MongoDB",
        "⚡ State management with Redux Toolkit and real-time communication using WebRTC",
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "grey",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing mobile apps",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Render",
          fontAwesomeClassname: "simple-icons:render",
          style: {
            color: "grey",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "grey",
          },
        },
      ],
    },
  ],
};

// Education and Certifications page
const degrees = {
  degrees: [
    {
      title: "Anna University",
      subtitle: "MCA - Hindusthan College of Engineering and Technology",
      logo_path: "Anna_University_Logo.png",
      alt_name: "SETI",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Mastered core subjects like Data Structures, Algorithms, Database Management Systems, and Software Engineering.",
        "⚡ Gained expertise in full-stack development, cloud computing, and mobile application development techniques.",
        "⚡ Completed hands-on projects in web and mobile app development, including e-commerce platforms and real-time applications.",
        "⚡ Participated in online courses and workshops on emerging technologies like AI, machine learning, and DevOps.",
      ],
      website_link: "https://www.annauniv.edu/",
    },
    {
      title: "Bharathiar University",
      subtitle: "BCA - Kongu Arts and Science College",
      logo_path: "bharathiar.png",
      alt_name: "SETI",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ Studied core subjects like Programming in C, Java, Web Development, and Database Management Systems.",
        "⚡ Gained proficiency in building web applications using HTML, CSS, JavaScript, and backend frameworks like Node.js.",
        "⚡ Completed hands-on projects in software development, including mobile apps, e-commerce websites, and database-driven applications.",
        "⚡ Participated in online courses and workshops on modern technologies like React, cloud computing, and cybersecurity fundamentals.",
      ],
      website_link: "https://b-u.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Entri Certified Full Stack Developer",
      subtitle: "2024",
      logo_path: "Entri.jpeg",
      certificate_link: "https://drive.google.com/file/d/11258Eqpvfey7Z_tcKx8a6ascljLB4BXI/view?usp=drivesdk",
      alt_name: "Entri.fsd",
      color_code: "#DE3163",
    },
    {
      title: "Illinois Certified Full Stack Developer",
      subtitle: "2025",
      logo_path: "illinois.png",
      certificate_link: "https://drive.google.com/file/d/1yEifspwW_UJjd8UYZq3nc-QUG6Vgc2J7/view?usp=drivesdk",
      alt_name: "illinoisTech.fsd",
      color_code: "#F6B808",
    },
    {
      title: "NSDC Certified Full Stack Developer",
      subtitle: "2025",
      logo_path: "NSDC.png",
      certificate_link: "https://drive.google.com/file/d/18tCr9FhX9GAv35wuDZIMVRutXxNeGdAw/view?usp=drivesdk",
      alt_name: "NSDC certified.fsd",
      color_code: "#6495ED",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "Full Stack Developer with 2+ years of hands-on experience building production-ready mobile and web applications using React Native, Next.js, Node.js, Express.js, and MongoDB.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Trident Solutions Pvt Ltd",
          company_url: "https://tridentsolutions.in/",
          logo_path: "tridentsolutionspvtltd_logo.jpeg",
          duration: "Jun 2026 - Jul 2026",
          location: "Chennai, India",
          description:
            "Contributing to scalable mobile and web applications using Next.js, Node.js, and MongoDB. Designed modular and reusable component architecture across environments and developed optimized RESTful APIs.",
          color: "#0070f3",
        },
        {
          title: "Full Stack Developer",
          company: "Aroganam Technologies Pvt Ltd",
          company_url: "https://aroganam.com/",
          logo_path: "Aroganam.jpg",
          duration: "February 2024 - April 2026",
          location: "Bangalore, India",
          description:
            "Engineered scalable mobile and web applications with React Native, React.js, Node.js, and MongoDB. Implemented state management using Redux Toolkit/Context API and integrated secure RESTful APIs.",
          color: "#f10000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Mobile Application projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Navi1.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    // link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Niticore",
      url: "",
      description:
        "AI Governance & Risk Management Platform built with Next.js, featuring automated AI model risk assessments, mitigation controls, and compliance audit reporting.",
      languages: [
        {
          name: "Next.js",
          iconifyClass: "simple-icons:nextdotjs",
        },
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon",
        },
      ],
    },
    {
      name: "Recroot.app",
      url: "",
      description:
        "AI-powered mock interview app built with React Native and WebRTC for simulated interview environments with automated AI feedback and performance insights.",
      languages: [
        {
          name: "ReactNative.js",
          iconifyClass: "logos-react",
        },
        {
          name: "WebRTC",
          iconifyClass: "logos-webrtc",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon",
        },
      ],
    },
    {
      name: "Cropsmile",
      // url: "https://balakrishnan-b10.github.io/clockmodule/",
      description:
        "Agritech platform connecting farmers, startups, and investors for collaboration, knowledge sharing, and agricultural innovation using React Native and MongoDB.",
      languages: [
        {
          name: "ReactNative.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon",
        },
      ],
    },
    {
      name: "Timesheet",
      // url: "https://taupe-douhua-032726.netlify.app/",
      description:
        "Created a timesheet app for admins to assign projects to team leaders, who can delegate tasks to members.",
      languages: [
        {
          name: "ReactNative.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon",
        },
      ],
    },
    {
      name: "UserVoice",
      // url: "https://delicate-croissant-270ede.netlify.app/",
      description:
        "Designed and deployed an intuitive messaging app with reliable voice call functionality, improving user engagement and personal connectivity.",
      languages: [
        {
          name: "ReactNative.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon",
        },
      ],
    },
    {
      name: "Portfolio",
      url: "https://effervescent-syrniki-b48502.netlify.app/",
      description:
        "My personal Portfolio website made with ReactJS, HTML5, CSS3, Javascript, and Bootstrap.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "devicon-html5",
        },
        {
          name: "CSS3",
          iconifyClass: "devicon-css3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Bootstrap",
          iconifyClass: "devicon-bootstrap",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
