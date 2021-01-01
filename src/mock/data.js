import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Joseph.',
  subtitle: 'I am an aspiring Software Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Programming has always been my Achilles’ heel and an area I want to explore but have been putting off for the longest time. Finally in July 2020, I purchased an online course to pursue my journey into the coding world. I started learning Python, Data Science and Machine Learning. I followed this up with web development courses focusing on the front-end using JavaScript and ReactJS, with a little bit of backend and database implementation.',
  paragraphTwo:
    'Prior to this, I spent that last twelve years working as an Electronics Technician in the oilfield services sector. The role has allowed me to gain various skills and competencies that have to do with repair and maintenance of different electronic tools, training and mentoring junior colleagues. It also gave me the opportunity to work outside of my home country, spending a good bit of time in the United Arab Emirates and Malaysia., where I met wonderful people from different backgrounds and cultures.',
  paragraphThree:
    'I recently moved to Long Beach, California where I am planning to launch my career as a Software Developer. I would say that I am still fairly new into coding but I am very eager to learn the ropes and be proficient in this field.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smartdetek.jpg',
    title: 'Smart-Detek',
    info: 'Smart-Detek is an image recognition application utilizing Machine Learning API.',
    info2:
      'This is a fullstack application developed using JavaScript, ReactJS, Express.JS, and PostgreSQL. Currently deployed using Heroku.',
    url: 'https://smart-detek.herokuapp.com',
    repo: 'https://github.com/joe-mgl/face-detection', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'retazo.jpg',
    title: 'Retazo Clothing CA',
    info: 'Retazo Clothing CA is an online, e-commerce application similar to Shopify.',
    info2:
      'This is a fullstack application utilizing ReactJS, Redux, React Hooks, Firebase, and Stripe. Currently under development; initial deployment using Heroku.',
    url: 'https://retazo-ca.herokuapp.com',
    repo: 'https://github.com/joe-mgl/retazo-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info: 'This is a simple web application created using ReactJS with API implementation.',
    info2: '',
    url: 'https://joe-mgl.github.io/robofriends/',
    repo: 'https://github.com/joe-mgl/robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'josephmiguel02@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/josephmiguel',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/joe-mgl',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
