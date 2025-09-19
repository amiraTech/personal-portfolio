// app/projects/page.tsx

import { projects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa'; // Make sure to install react-icons: npm install react-icons

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white py-24">
      <section id="projects">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
          My Projects
        </h1>
        
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          
          {/* This maps over your projects and creates the card */}
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-razzmatazz/30 transition-shadow duration-300"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                {/* 1. Image Preview Area */}
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={`Preview of the ${project.title} project`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              
              {/* 2. Content Area Below Image */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mt-2 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-neutral-700 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto pt-4 flex items-center gap-4 border-t border-neutral-700">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="bg-razzmatazz text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
                    View Live
                  </Link>
                  {project.sourceCode && (
                    <Link href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                      <FaGithub size={24} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}