// app/page.tsx
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// --- Re-creating your Project Data ---
const projects = [
  {
    title: 'Number Guessing Game',
    imageUrl: 'https://i.ibb.co/VWgjJBc/project.png',
    link: 'https://codepen.io/amiraTech/full/vYqBVPm',
  },

  // Add your other projects here
];

export default function Home() {
  return (
    <main className="bg-[#1E1E1E] text-white">
      {/* ===== WELCOME SECTION ===== */}
      <section id="about" className="min-h-screen flex items-center px-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight">Hi! I'm Amira Abdow</h1>
          <h3 className="text-3xl font-bold text-brand-red mt-2">Front End Developer</h3>
          <p className="text-base my-5 text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium facilis consequatur perspiciatis, placeat distinctio est voluptatibus.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="inline-block bg-brand-red text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
              Hire me!
            </a>
            <a href="#" className="inline-block bg-brand-red text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="py-20 px-10 bg-[#282828] text-center">
        <h2 className="text-4xl font-bold mb-10">These are my projects!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#3c3c3c] p-5 rounded-xl hover:scale-105 hover:bg-[#474747] transition-all"
            >
              <p className="mt-4 text-xl font-medium text-white">{project.title}</p>
            </a>
          ))}
        </div>
      </section>
      
      {/* ===== FOOTER/CONTACTS SECTION ===== */}
      <footer id="contacts" className="py-10 px-10 bg-[#282828] text-center">
        <div className="flex justify-center gap-5 mb-5">
          <a href="https://github.com/amiraTech" target="_blank" className="text-3xl text-white hover:text-brand-red">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/amiraabdow/" target="_blank" className="text-3xl text-white hover:text-brand-red">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; 2025 Amira Abdow. All Rights Reserved.</p>
      </footer>
    </main>
  );
}