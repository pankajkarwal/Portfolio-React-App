import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Pankaj Karwal",
    "title": "Hi all, I'm Pankaj",
    "description": "A passionate Full Stack Web Developer having a good knowledge of building Web applications with JavaScript / Reactjs / Nodejs / and some other cool libraries and frameworks.",
    "resumeLink": "https://drive.google.com/file/d/1XTT4QZEb-VeR5SghW8VchbCiGP3oqygs/view?usp=sharing"
}

export const openSource = {
  githubUserName: 'pankajkarwal92@gmail.com',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/pkarwal1",
    "instagram": "https://www.instagram.com/pkarwal1",
    "twitter": "#",
    "github": "https://github.com/pankajkarwal",
    "linkedin": "https://www.linkedin.com/in/pankajkarwal"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      emoji(
        '⚡ Integration of third party services such as  AWS '
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'aws',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'Medi-Caps University',
      subHeader: 'Master of Technology in Computer Science',
      duration: 'Jun 2019 - Jun 2021',
      desc: 'Participated in the research of Job Allocation inside Cloud Architecture and published 1 paper.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'I.G.N.O.U',
      subHeader: 'Master of Computer Applications',
      duration: 'January 2014 - Jun 2017',
      desc: 'Developed Library Management System and Visitor Management System',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'Guru Nanak Dev University',
      subHeader: 'Bachelor of Computer Application',
      duration: 'Jun 2009 - April 2012',
      desc:
        'Took courses about Software Engineering, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit'],
    },
]

export const experience =[]
export const projects = [
  {
    name: "To-do-List",
    desc: "CRUD (Create,Read,Update and Delete) Operation Performed on users tasks and notes.",
    link: {
      name: "View",
      url: "https://pankajkarwal.github.io/Todolist-React/"
    }
  },
  {
    name: "Hour Calculation",
    desc: "User can calculate the number of hours between two DateTime.",
    link: {
      name: "View",
      url: "https://pankajkarwal.github.io/wks/"
    }
  },
  
]