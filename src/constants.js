import PDF from "./resume.pdf";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

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
    icon: faGithub,
    dest: "https://github.com/chrisfotso",
  },
  {
    icon: faEnvelope,
    dest: "mailto:chrisfotso@gmail.com",
  },
  {
    icon: faFileAlt,
    dest: PDF
  }
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
      name: "MongoDB",
      src: "https://img.icons8.com/color/96/000000/mongodb.png",
      link: "https://mongodb.com/",
    },
  ],
};

export const PROJECTS = [
  {
    name: "Talent Trade",
    code: "https://github.com/chingu-voyages/v8-geckos-team-05/",
    src: "talentTrade.png",
    langs: ["React", "SASS"],
  },
  {
    name: "Google Library",
    code: "https://github.com/chrisfotso/chingu-api-project",
    live: "https://chrisfotso.github.io/chingu-api-project",
    src: "googleLibrary.png",
    langs: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Tidbits (Twitter Clone)",
    code: "https://github.com/chrisfotso/tidbits",
    src: "tidbits.png",
    langs: ["React", "Mongo", "Express"],
  },
  {
    name: "Superhero Search",
    code: "https://github.com/chrisfotso/superhero-search",
    live: "https://superhero-search.herokuapp.com/",
    src: "superheroSearch.png",
    langs: ["Express", "Mongo"],
  },
  {
    name: "Portfolio Site (you're already on it!)",
    code: "https://github.com/chrisfotso/chrisfotso.github.io/tree/code",
    src: "portfolioSite.png",
    langs: ["React", "SASS"],
  },
];
