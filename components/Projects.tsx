'use client';

import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management',
    tech: ['React', 'Node.js', 'MySQL', 'Stripe'],
    icon: <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    gradient: 'from-blue-600 to-cyan-600',
    status: 'Completed'
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio with smooth animations, dark mode, and contact form integration',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    icon: <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    gradient: 'from-purple-600 to-pink-600',
    status: 'Live'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates, team collaboration, and progress tracking',
    tech: ['React', 'Firebase', 'Material-UI'],
    icon: <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
    gradient: 'from-green-500 to-teal-500',
    status: 'In Progress'
  },
  {
    title: 'UI/UX Design System',
    description: 'Comprehensive design system with reusable components, style guide, and documentation',
    tech: ['Figma', 'Storybook', 'CSS'],
    icon: <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    gradient: 'from-orange-500 to-red-500',
    status: 'Completed'
  },
  {
    title: 'Restaurant Booking System',
    description: 'Online reservation platform with table management, menu display, and customer reviews',
    tech: ['Next.js', 'MongoDB', 'Tailwind'],
    icon: <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /><circle cx="12" cy="12" r="10" strokeWidth={2} /></svg>,
    gradient: 'from-yellow-500 to-orange-500',
    status: 'Completed'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with data visualization and reporting features',
    tech: ['React', 'Chart.js', 'API'],
    icon: <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    gradient: 'from-indigo-500 to-blue-500',
    status: 'Live'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#8A9A5B]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#6b9071]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-20">
          <p className="text-[#8A9A5B] text-sm font-bold tracking-wider uppercase mb-3">MY WORK</p>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
            Featured <span className="text-[#6b9071]">Projects</span>
          </h2>
          <p className="text-gray-400 text-2xl font-light">Turning Ideas Into Reality</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6b9071]/20 overflow-hidden cursor-pointer border border-white/5"
            >
              <div className="absolute inset-0 bg-[#6b9071] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                  project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="relative z-10">
                <div className="mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-black text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold border border-white/10 hover:scale-110 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 rounded-xl font-bold bg-[#6b9071] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-block px-10 py-5 bg-[#6b9071] text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6b9071]/30"
          >
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}
