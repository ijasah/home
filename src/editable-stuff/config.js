// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "IJAS",
  middleName: "",
  lastName: "A H",
  message: " Passionate about changing the world with Artificial Intelligence",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ijasah",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ijas.ah.1/",
    },
    {
      image: "fa-instagram",
      url: "#",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ijas-ah/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/ijas_h",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Ijas.jpg").default,
  imageSize: 375,
  message:
    "Completed Bachelor of Technology in Computer Science and Engineering from SCMS School of Engineering and Technology affiliated to APJ Abdul Kalam Technological University. My research interests span on data science, machine learning, and deep learning. Much of my work has been improving, understanding and solving problems related to these areas. I am currently working as a systems engineer at Infosys center for emerging technology solutions(Research and development).",
  resume: "#",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "ijasah", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [],
};




// Leadership SECTION
const leadership = {
  show: true,
  heading: "Projects & Certifications",
  message:
    "Here are the list of certifications i am holding: 1. IBM Quantum Consultations 2. Infosys certified global Agile developer 3. Infosys certified open chain practioner 4.Infosys certified big data developer 4. Problem Solving Hacker rank( 5 star ranking) 5. Python, Hackerrank(5 star ranking) 6. R programming(Coursera) 7. Big data modelling and management systems(Coursera) 8. IBM Applied AI proffesional certificate 9. Infosys certified Data Science proffesional 10. Unix fundementals(infosys) 11. Certified Ethical Hacker(EC Council - Expired 2020) ",
  images: [
    { 
      img: require("../editable-stuff/project1.jpg").default,
      label: "MACHINE LEARNING, DEEP LEARNING (RESEARCH PROJECT)",
      paragraph: "Evaluation of robustness of Android malware detectors aganist adversarial examples - Conference paper"
    },
    { 
      img: require("../editable-stuff/project2.jpg").default,
      label: "MALWARE ANALYSIS",
      paragraph: "Research on visual detection of Malware"
    },
    {
      img: require("../editable-stuff/project3.jpg").default,
      label: "OPTIMAL ROUTE SELECTOR",
      paragraph: "Designed an algorithm to solve combinatorial optimisation in the field of routing."
    }
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Machine Learning", value: 75 },
    { name: "Deep Learning", value: 75 },
    { name: "Keras", value: 75 },
    { name: "Tensorflow", value: 65 },
    { name: "Pytorch", value: 60 },
    { name: "Scikit-learn", value: 70 },
    { name: "Computer vision", value: 70 },
    { name: "Natural Language Processing", value: 70 },
    { name: "Django", value: 70 },
    { name: "git", value: 70 },
    { name: "Docker", value: 50 },
    { name: "ML-OPS", value: 65 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 50 },
    { name: "HTML/CSS", value: 55 },
    { name: "Research", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Please feel free to connect with me for any queries realted to machine learning and Deep Learning at ",
  email: "ijas.ah96@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer - Research Engineer',// Here Add Company Name
      companylogo: require('../assets/img/infosys.png').default,
      date: 'Dec 2019 – Present',
    },
    {
      role: 'Technical Writer',// Here Add Company Name
      companylogo: require('../assets/img/Analytics_vidhya.png').default,
      date: 'Nov 2019 – Present',
    },
    {
      role: 'Software Engineer Intern',// Here Add Company Name
      companylogo: require('../assets/img/sayone.png').default,
      date: 'Jun 2018 – Jul 2018',
    },
    {
      role: 'Software Engineer Intern',// Here Add Company Name
      companylogo: require('../assets/img/ihrd.jpeg').default,
      date: 'May 2017 – Jun 2017',
    },
  ]
}

//Blog SECTION
 const blog = {
   show: false,
   heading: "Blogs",
   data: [
     {
      title: "My First Blog",
      image: "img",
      description:
        "Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!",
     }
   ]
 };

 const achievements = {
  show: true,
  heading: "Awards and Achievements",
  imageLink: require("../editable-stuff/Ijas.jpg"),
  imageSize: 375,
  message:
    "Completed Bachelor of Technology in Computer Science and Engineering from SCMS School of Engineering and Technology affiliated to APJ Abdul Kalam Technological University. My research interests span on data science, machine learning, and deep learning. Much of my work has been improving, understanding and solving problems related to these areas. I am currently working as a systems engineer at Infosys center for emerging technology solutions(Research and development).",
  resume: "#",
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, achievements };
