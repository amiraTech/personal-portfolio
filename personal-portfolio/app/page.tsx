// app/page.tsx
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { projects } from '@/lib/data';

// This show the featured projects
const featuredProjects = projects.slice(0, 2); 

export default function Home() {
  return (
    <main>
      {/* ===== WELCOME SECTION ===== */}
      <section id="about" className="min-h-screen bg-[#000000] flex flex-col-reverse md:flex-row-reverse items-center justify-center px-10 gap-10">
          {/* Profile Image Section */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center ring-4 ring-razzmatazz">
         <Image
             src="/amira-profile.png"
             alt="Amira A"
             layout="fill"
             objectFit="cover"
             className="rounded-full object-center"
           />
        </div>
     
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight">Hi! I'm Amira</h1>
          <h3 className="text-3xl font-bold text-brand-red mt-2">Web Designer & Developer</h3>
          <p className="text-base my-5 text-gray-300">
            A freelance web designer & developer who helps clients bring their ideas to life with responsive, user-friendly websites, web apps and Figma designs. I’ve delivered projects such as a cloud-hosted disaster relief web app and an educational gamified app using ReactJS and the OpenAI API, demonstrating creativity, technical skill and fast execution. My goal is to provide reliable, high-quality digital solutions that help businesses and individuals achieve their objectives.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="inline-block bg-red-800 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
              Download CV
            </a>
            <a href="/contact" className="inline-block bg-red-800 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS SECTION ===== */}
      <section id="projects" className="py-20 px-10 bg-[#0b0b0e] text-center">
        <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredProjects.map((project) => (
            <div 
              key={project.title} 
              className="bg-[#1a191e] rounded-lg overflow-hidden shadow-lg flex flex-col text-left"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-neutral-400 mt-2 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* 3. ADD a button to link to your full projects page */}
        <div className="mt-12">
            <Link href="/projects" className="inline-block bg-razzmatazz text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors">
              View All Projects
            </Link>
        </div>
      </section>


      {/* ===== EXPERIENCES SECTION ===== */}
      <section id="experiences" className="py-20 px-10 bg-[#000000] text-center">
        <h2 className="text-4xl font-bold mb-10">My Experience</h2>
        <div className="max-w-4xl mx-auto text-left space-y-12">
          {/* Experience Item 1 - G-Research*/}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-red-600 mt-1"></div>
              <div className="flex-grow w-px bg-red-400 dark:bg-red-700"></div>
              </div>
              
              <div>
                <p className="font-semibold text-gray-400">Summer 2025</p>
                <h3 className="text-2xl font-bold mt-1">G-Research | 1st Place</h3>
                <h4 className="text-lg text-brand-pink font-semibold">UpReach Tech500 Bootcamp 2025</h4>
                <p className="mt-2 text-gray-300">As part of a 4-person team, I competed in a Python algorithms challenge, implementing quant theory and backtesting methods in a trading simulation to secure 1st place overall.</p>
                </div>
              </div>
              
              {/* Experience Item 2 - Google Hackathon */}
              <div className="flex gap-6">
                <div className="w-4 h-4 rounded-full bg-brand-pink mt-1"></div>
                <div>
                  <p className="font-semibold text-gray-400">Autumn 2024</p>
                  <h3 className="text-2xl font-bold mt-1">Prompt Quest Google BGN Hackathon 2024 | 2nd Place</h3>
                  <h4 className="text-lg text-brand-pink font-semibold">Google</h4>
                  <p className="mt-2 text-gray-300">Engineered Prompt Quest gamified educational app during a 4-day hackathon as a 5 person team. I built the front-end with React and integrated the OpenAI API, helping earn 2nd place out of 10 teams.</p>
              </div>
            </div>
            </div>
        </section>     

        
        {/* ===== SERVICES SECTION ===== */}
        <section id="services" className="py-20 px-10 bg-[#0b0b0e] text-center">
          <h2 className="text-4xl font-bold mb-10">What I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-[#000000] p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">Web Design</h3>
              <p className="text-gray-400">Creating beautiful and intuitive user interfaces with a focus on user experience.</p>
              </div>
              
              {/* Service 2 */}
               <div className="bg-[#000000] p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">Frontend Development</h3>
                <p className="text-gray-400">Bringing designs to life with clean, efficient code using React and Next.js.</p>
                </div>
                {/* Service 3 */}
                <div className="bg-[#000000] p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-2">Responsive Apps</h3>
                  <p className="text-gray-400">Building applications that look and perform great on all devices, from phones to desktops.</p>
                  </div>
                </div>
            </section>

      
      {/* ===== FOOTER/CONTACTS SECTION ===== */}
      <footer id="contacts" className="py-10 px-10 bg-[#0b0b0e] text-center">
        <div className="flex justify-center gap-5 mb-5">
          <a href="https://github.com/amiraTech" target="_blank" className="text-3xl text-white hover:text-brand-red">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/amiraabdow/" target="_blank" className="text-3xl text-white hover:text-brand-red">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; 2025 Amira A. All Rights Reserved.</p>
      </footer>
    </main>
  );
}