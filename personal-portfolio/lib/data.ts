// lib/data.ts

// First, we define a "type" for a project. This is a blueprint that
// tells TypeScript what properties each project object should have.
export type Project = {
  title: string;
  image: string; // Path to the image in your 'public' folder
  description: string;
  tags: string[]; // An array of technologies used
  link: string; // Link to the live, deployed project
  sourceCode?: string; // Link to the GitHub repository (the '?' makes it optional)
};


// Now, we create the actual array of your projects.
// Each object in this array must follow the "Project" blueprint.
export const projects: Project[] = [
  {
    title: '2Rescue Cloud-Hosted Web Disaster Relief App',
    image: '/Project1.png',
    description: 'A dynamic disaster relief web app built with React, using a live weather API and Firebase for real-time alerts and help requests.',
    tags: ['React', 'Firebase'],
    link: 'https://rescue-6250b.web.app/',
    sourceCode: 'https://github.com/amiraTech/2Rescue', // IMPORTANT: Replace with your actual GitHub link
  },
  {
    title: 'Xyzen',
    image: '/Project2.png', // IMPORTANT: You will need to take a screenshot of your portfolio and add it to the 'public' folder
    description: 'A website mockup designed with Figma, built at Framer.',
    tags: ['Figma', 'Framer'],
    link: 'https://xyzen.framer.website/', // A link to the homepage is fine here
  },
  // To add a new project, just copy and paste the object structure above and change the details.
];