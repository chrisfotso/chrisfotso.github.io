import PDF from "./resume.pdf";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

export const NAVBAR_ITEMS = [
  {
    text: "ABOUT",
    dest: "#about",
  },
  {
    text: "PROJECTS",
    dest: "#projects",
  },
  {
    text: "CONTACT ME",
    dest: "#contact",
  },
  {
    text: "RESUME",
    dest: PDF,
    isNewTab: true,
  },
];

export const SOCIAL_ITEMS = [
  {
    icon: faLinkedin,
    dest: "http://linkedin.com/in/chrisfotso",
  },
  {
    icon: faFileAlt,
    dest: PDF,
  },
];

export const SKILLS = {
  "Front End": [
    {
      name: "Javascript",
      src: "https://img.icons8.com/color/96/000000/javascript.png",
      link: "https://www.javascript.com/",
    },
    {
      name: "React",
      src: "https://img.icons8.com/color/96/000000/react-native.png",
      link: "https://reactjs.org/",
    },
    {
      name: "Angular",
      src: "https://img.icons8.com/color/96/000000/angularjs.png",
      link: "https://angular.io",
    },
    {
      name: "SASS",
      src: "https://img.icons8.com/color/96/000000/sass.png",
      link: "https://sass-lang.com/",
    },
    {
      name: "HTML5",
      src: "https://img.icons8.com/color/96/000000/html-5.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
  ],
  "Back End": [
    {
      name: "Node",
      src: "https://img.icons8.com/color/96/000000/nodejs.png",
      link: "https://www.nodejs.org/",
    },
    {
      name: "GraphQL",
      src: "https://img.icons8.com/color/96/000000/graphql.png",
      link: "https://graphql.org/",
    },
    {
      name: "C#",
      src: "https://img.icons8.com/color/96/000000/c-sharp-logo.png",
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "SQL",
      src: "https://img.icons8.com/color/96/000000/sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: 'MongoDB',
      src: "https://img.icons8.com/color/96/000000/mongodb.png",
      link: 'https://mongodb.com/',
    },
  ]
};
