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
    image: '/project1.png',
    description: '2Rescue is a cloud-hosted web application built with React that enables communities in the UK to quickly access disaster relief resources. By utilising weatherAPI and Firebase, it provides real-time alerts and help requests, ensuring fast and accessible support during emergencies.',
    tags: ['ReactJS', 'Firebase', 'WeatherAPI'],
    link: 'https://rescue-6250b.web.app/',
    sourceCode: 'https://github.com/amiraTech/2Rescue', 
  },
  {
    title: 'Xyzen Premium Sportwear Website',
    image: '/Project2.png', // IMPORTANT: You will need to take a screenshot of your portfolio and add it to the 'public' folder
    description: 'Xyzen is a live, fully interactive sportswear landing page concept I designed and built. Created in Figma and developed in Framer, it demonstrates my ability to deliver clean, responsive, and engaging website experiences from concept to launch.',
    tags: ['Figma', 'Framer'],
    link: 'https://xyzen.framer.website/', // A link to the homepage is fine here
  },
  // To add a new project, just copy and paste the object structure above and change the details.
];