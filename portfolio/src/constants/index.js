import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
    socially,
    weatherApp,
  typingspeed,
  in2it
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
const services = [
      {
      title: "Angular Developer",
      icon: angular,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title:'MERN Developer',
      icon: creator,
    },
    {
      title:'MEAN Developer',
      icon: backend,
  },
        {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:'Angular JS',
      icon:angular
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
const experiences = [
   {
      title: "Frontend Developer - (Angular)",
      company_name: "In2it Technologies",
      icon: in2it,
      iconBg: "#383E56",
      date: "April 2024 - Current",
          points: [
        'Api Integration.',
        'State Management.',
        'Code Testing with jasmine and karma.',
        'Integrated Tables with ag-grid library.',
        'Integrated charts with real time data using amcharts library.',
        'Worked on Micro-Frontend based project in angular. there were seperate remote application was there which we connected with shell application on which I Worked.'
      ],
    },
    {
      title: "Angular Developer",
      company_name: "United Web Enhencers",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Fabruary 2023 - Auguest 2021",
      points: [
        "Developing and maintaining web applications using Angular Js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Made hotel booking platform with Angular Js and Typescript.","Implemented user-friendly hotel booking and advanced filtering for price, property, and type.","Utilized Angular, Material-UI, HTML, CSS, and JavaScript.","Role: Frontend Developer"
      ],
    },
       
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Socially",
      description:
        "Web-based social media platform that allows users to make strange Friends ,Upload Post it can be video ,image,audio user can like, comment on post.User can add and remove friend, last but not least fully responsive website.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "Node js",
          color: "blue-text-gradient",
        },
        {
          name: "Redux toolkit",
          color: "green-text-gradient",
        },
      ],
      image: socially,
      view_website_link:'https://socially-b6do.onrender.com/',
      source_code_link: "https://github.com/Himmatvaghela/Mern-Socially_App.git",
    },
    {
      name: "Weather App",
      description:
        "A comprehensive Weather checking platform that allows users to check weather of any city by it city name and you will see cool icon according to weather.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "WeatherApi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weatherApp,
      view_website_link:'https://himmatvaghela.github.io/WeatherApp/',
      source_code_link: "https://github.com/Himmatvaghela/WeatherApp.git",
    },
    {
      name: "Typing App",
      description:
        "A comprehensive Typing Speed checking App that allows users to check their typing speed and how many mistake has been made and every time a new paragraph come to type.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: typingspeed,
      view_website_link:'https://himmatvaghela.github.io/Typing-website/',
      source_code_link: "https://github.com/Himmatvaghela/Typing-website.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };