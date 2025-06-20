/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Balakrishnan",
  logo_name: "Balakrishnan.K()",
  nickname: "Balaji",
  full_name: "Balakrishnan",
  subTitle:
    "Full Stack Developer, Software Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1bLBkjVZqrC-MoE6ExBeITQCfGogUspIS/view?usp=drive_link",
  mail: "bala94srm@gmail.com",
};

const socialMediaLinks = {
  /* Social Media Link */
  github: "https://github.com/Balakrishnan-b10",
  linkedin: "https://www.linkedin.com/in/balakrishnan-k-48b3ab184",
  gmail: "bala94srm@gmail.com",
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
        "⚡ Building responsive website front end using ReactJS and Bootstrap",
        "⚡ Developing web applications using MERN STACK",
        "⚡ Backend development using NodeJS, ExpressJS and Mongodb",
      ],
      softwareSkills: [
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7377AD",
          },
        },
        // {
        //   skillName: "ExpressJS",
        //   fontAwesomeClassname: "simple-icons:expressdotjs",
        //   style: {
        //     color: "white",
        //   },
        // },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#29B0EE",
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
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#3DDC84",
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
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Git-Hub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "grey",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing web apps",
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
      subtitle: "B.E. Mechanical Engineering",
      logo_path: "Anna_University_Logo.png",
      alt_name: "SETI",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ I have studied core subjects like Thermodynamics, Fluid Mechanics, Materials Science, and Manufacturing Processes.",
        "⚡ Gained knowledge in advanced mechanical system design, mechanical testing, and CAD modeling techniques.",
        "⚡ Completed various hands-on projects related to mechanical engineering, such as product design, analysis, and prototyping.",
        "⚡ Participated in online courses and workshops focusing on automation, robotics, and advanced manufacturing technologies.",
      ],
      website_link: "https://www.annauniv.edu/",
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
  subtitle: "Work and Internship",
  description:
    "I've completed internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
                {
          title: "Full Stack Developer",
          company: "Miguel Sevener Innovations Private Limited",
          company_url: "https://sevenertech.com/",
          logo_path: "Sevener.jpg",
          duration: "April 2025 - Till Date",
          location: "Bangalore",
          description: "Develop a website using MERN STACK Technologies.",
          color: "#f10000",
        },
        {
          title: "Full Stack Developer",
          company: "Aroganam Technologies",
          company_url: "https://aroganam.com/",
          logo_path: "Aroganam.jpg",
          duration: "July 2024 - April 2025",
          location: "Bangalore",
          description: "Develop a website using MERN STACK Technologies.",
          color: "#f10000",
        },
        {
          title: "Buyer",
          company: "Suja Shoei Industries Pvt.Ltd",
          company_url: "https://sujarubber.com/",
          logo_path: "Suja.png",
          duration: "August 2019 - April 2024",
          location: "Puducherry",
          description:
            "An industry leader and automotive parts manufacturer with a global presence, supplying to OEMs and Tier 1 customers.",
          color: "#2962FF",
        },
        {
          title: "Buyer",
          company: "Gestamp Automotive Chennai Pvt Ltd  ",
          company_url: "https://www.gestamp.com/About-Us/Gestamp-in-the-world/Centers/Asia/india/Gestamp-Chennai",
          logo_path: "Gestamp.png",
          duration: "April 2017 - April 2019",
          location: "Chennai",
          description:
            "Gestamp is an international group specialized in the design, development and manufacture of metal automotive components.",
          color: "#2962FF",
        },
        {
          title: "Gear Assembly",
          company: "Rane (Madras) Limited",
          company_url: "https://ranegroup.com/rml-steering-and-linkage-business/",
          logo_path: "Rane.avif",
          duration: "December 2015 - December 2016",
          location: "Puducherry",
          description:
            "Pioneer in manufacturing of Steering and suspension systems for Automotive industry.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full-Stack Developer",
          company: "Entri Elevate",
          company_url: "https://entri.app/",
          logo_path: "Entri.jpeg",
          duration: "March 2024 - October 2024",
          location: "Work From Home",
          description: "A Full Stack Developer is a software developer who has the skills and knowledge to work on both the front-end (client side) and back-end (server side) of web applications.",
          color: "#56A4D3",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create MERN projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Photo.jpg",
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
      name: "Food Order Website",
      url: "https://taupe-douhua-032726.netlify.app/",
      description:
        "Food Order website made with ReactJS, Nodejs, Expressjs, MongoDB and implement CRUD operations.",
      languages: [
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
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Signup Form",
      url: "https://delicate-croissant-270ede.netlify.app/",
      description:
        "Signup Form made with ReactJS(React Hook Form) and Bootstrap Framework.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Bootstrap",
          iconifyClass: "devicon-bootstrap",
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
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Portfolio",
      url: "https://effervescent-syrniki-b48502.netlify.app/",
      description:
        "My personal Portfolio website made with ReactJS,HTML ,CSS, Javascript and Bootstrap.",
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
    {
      name: "Analog Clock",
      url: "https://balakrishnan-b10.github.io/clockmodule/",
      description: "Analog Clock  made with HTML ,CSS, Javascript.",
      languages: [
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
      ],
    },
    {
      name: "JavaScript using function",
      url: "https://balakrishnan-b10.github.io/JavaScript-using-function/",
      description:
        "Student mark calculation made with HTML5, CSS3, Javascript, ReactJS and Bootstrap.",
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
    {
      name: "Login Form",
      url: "https://delicate-croissant-270ede.netlify.app/",
      description:
        "Login Form made with ExpressJS and validate the email and password using JWT auth.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Bootstrap",
          iconifyClass: "devicon-bootstrap",
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
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Calculator App",
      url: "https://balakrishnan-b10.github.io/JavaScript-calculator/",
      description:
        "A Calculator webapp made with ExpressJS and Postman endpoints.",
      languages: [
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "Postman",
          iconifyClass: "devicon-postman",
        },
      ],
    },
    {
      name: "Prime Number",
      url: "https://balakrishnan-b10.github.io/prime-number/",
      description:
        "Prime number and Factorial number made with ReactJS, MongoDB,Nodejs, Expressjs.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Bootstrap",
          iconifyClass: "devicon-bootstrap",
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
          iconifyClass: "logos-mongodb",
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
