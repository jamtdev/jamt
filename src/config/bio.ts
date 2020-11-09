import { IconKey } from './theme';

type Bio = {
  icon: IconKey;
  heading: string;
  subHeading: string;
  content: string;
};

const bio: Bio[] = [
  {
    icon: 'code',
    heading: 'JavaScript',
    subHeading: 'Modern full-stack development',
    content: `I've been working with JavaScript, Node.js and TypeScript full-time since 2018, predominately building front-end microservices.`,
  },
  {
    icon: 'react',
    heading: 'React',
    subHeading: 'Flexible and blazing fast',
    content: `React is my go-to choice for building dynamic interfaces. I've worked on complex state management, client-side routing, SEO and reusable component libraries.`,
  },
  {
    icon: 'layout',
    heading: 'Design',
    subHeading: 'Finely crafted experiences',
    content: `Outstanding UX needs to communicate two key concepts; what is happening and why. I bring design systems to life using CSS-in-JS and Storybook.`,
  },
  {
    icon: 'cpu',
    heading: 'Testing',
    subHeading: 'End-to-end and everything in between',
    content: `Comprehensive testing should resemble how software is actually used. I write deterministic tests that identify defects and allow code to be deployed with confidence.`,
  },
  {
    icon: 'layers',
    heading: 'Microservices',
    subHeading: 'Secure, scalable and maintainable',
    content: `I've developed data-rich front-end microservices powered by Apollo GraphQL. I've also converted legacy interfaces into modular micro front-ends.`,
  },
  {
    icon: 'hardDrive',
    heading: 'DevOps',
    subHeading: 'Build and release faster, more reliably',
    content: `I'm familiar with containerisation, automated testing and continuous integration pipelines, plus I'm certified by the DevOps Institute.`,
  },
];

export default bio;
