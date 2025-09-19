// app/page.tsx
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// --- Re-creating your Project Data ---
const projects = [
  {
    title: '2Rescue',
    src:"/project1.png",
    imageUrl: '/project1.png',
    link: 'https://rescue-6250b.web.app/',
  },

  // Add your other projects here
];

export default function Home() {
  return (
    <main>
      {/* ===== WELCOME SECTION ===== */}
      <section id="about" className="min-h-screen flex flex-col-reverse md:flex-row-reverse items-center justify-center px-10 gap-10">
          {/* Profile Image Section */}
         <div className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center border-4 border-red bg-red-600:border-red-800 hover:border-brand-red transition-colors duration-300">
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
          <h3 className="text-3xl font-bold text-brand-red mt-2">Front End Developer</h3>
          <p className="text-base my-5 text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium facilis consequatur perspiciatis, placeat distinctio est voluptatibus.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="inline-block bg-red-800 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
              Hire me!
            </a>
            <a href="#" className="inline-block bg-red-800 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
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

      
      {/* ===== EXPERIENCES SECTION ===== */}
      <section id="experiences" className="py-20 px-10 bg-[#1E1E1E] text-center">
        <h2 className="text-4xl font-bold mb-10">My Experience</h2>
        <div className="max-w-4xl mx-auto text-left space-y-12">
          {/* Experience Item 1 */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-brand-pink mt-1"></div>
              <div className="flex-grow w-px bg-gray-600"></div>
              </div>
              
              <div>
                <p className="font-semibold text-gray-400">Summer 2025</p>
                <h3 className="text-2xl font-bold mt-1">Frontend Developer Intern</h3>
                <h4 className="text-lg text-brand-pink font-semibold">Tech Solutions Inc.</h4>
                <p className="mt-2 text-gray-300">Worked with the development team to build and maintain responsive web applications using React and TypeScript.</p>
                </div>
              </div>
              
              {/* Experience Item 2 */}
              <div className="flex gap-6">
                <div className="w-4 h-4 rounded-full bg-brand-pink mt-1"></div>
                <div>
                  <p className="font-semibold text-gray-400">Spring 2024</p>
                  <h3 className="text-2xl font-bold mt-1">Hackathon Participant</h3>
                  <h4 className="text-lg text-brand-pink font-semibold">Google Developer Student Clubs</h4>
                  <p className="mt-2 text-gray-300">Collaborated in a team of four to design and prototype a mobile app addressing local community issues.</p>
              </div>
            </div>
            </div>
        </section>
        
        {/* ===== SERVICES SECTION ===== */}
        <section id="services" className="py-20 px-10 bg-[#282828] text-center">
          <h2 className="text-4xl font-bold mb-10">What I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-[#3c3c3c] p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">Web Design</h3>
              <p className="text-gray-400">Creating beautiful and intuitive user interfaces with a focus on user experience.</p>
              </div>
              
              {/* Service 2 */}
               <div className="bg-[#3c3c3c] p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">Frontend Development</h3>
                <p className="text-gray-400">Bringing designs to life with clean, efficient code using React and Next.js.</p>
                </div>
                {/* Service 3 */}
                <div className="bg-[#3c3c3c] p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-2">Responsive Apps</h3>
                  <p className="text-gray-400">Building applications that look and perform great on all devices, from phones to desktops.</p>
                  </div>
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
        <p className="text-sm text-gray-400">&copy; 2025 Amira A. All Rights Reserved.</p>
      </footer>
    </main>
  );
}