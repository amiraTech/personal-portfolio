// lib/data.ts

export type Project = {
  title: string;
  image: string; // Path to the image in your 'public' folder
  description: string;
  tags: string[]; // An array of technologies used
  link: string; // Link to the live, deployed project
  sourceCode?: string; // Link to the GitHub repository (the '?' makes it optional)
};

export const projects: Project[] = [
  {
    title: '2Rescue Cloud-Hosted Web Disaster Relief App',
    image: '/Project1.png',
    description: 'A dynamic disaster relief web app built with React, using a live weather API and Firebase for real-time alerts and help requests.',
    tags: ['ReactJS', 'Firebase', 'WeatherAPI'],
    link: 'https://rescue-6250b.web.app/',
    sourceCode: 'https://github.com/amiraTech/2Rescue', 
  },
  {
    title: 'Xyzen Premium Sportwear Website',
    image: '/Project2.png', // IMPORTANT: You will need to take a screenshot of your portfolio and add it to the 'public' folder
    description: 'Xyzen is a fully interactive mock-up website built as a performance gear showcase for athletes. I designed the UI in Figma and developed it in Framer, focusing on clean visuals, responsive layouts, and smooth interactivity.',
    tags: ['Figma', 'Framer'],
    link: 'https://xyzen.framer.website/', // A link to the homepage is fine here
  },
  // To add a new project, just copy and paste the object structure above and change the details.
];