'use client';

const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Happy Clients', value: '8+' },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#8A9A5B]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#6b9071]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#8A9A5B] text-sm font-bold tracking-wider uppercase mb-3">Get to know me</p>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
            About <span className="text-[#6b9071]">Me</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="glass-effect rounded-3xl p-10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#8A9A5B]/10 border border-[#8A9A5B]/10">
            <h3 className="text-3xl font-bold text-[#6b9071] mb-6">My Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm <span className="text-[#8A9A5B] font-bold">Ingabire Sandrine</span>, a dedicated software developer with expertise in <span className="text-[#6b9071] font-semibold">React, Node.js, MySQL, and UI/UX design</span>. 
              I am passionate about creating intuitive and responsive web experiences that solve real-world problems.
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6b9071]/10 border border-[#6b9071]/10">
            <h3 className="text-3xl font-bold text-[#6b9071] mb-6">What I Do</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              As a creative front-end developer and UI/UX designer, I focus on delivering clean, user-friendly interfaces. 
              I enjoy transforming complex challenges into elegant solutions and turning innovative ideas into impactful applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-6 text-center hover:scale-110 transition-all duration-300 hover:bg-[#6b9071]/10 group border border-white/5"
            >
              <div className="text-4xl font-black text-[#6b9071] mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Currently seeking opportunities to apply my knowledge and grow professionally in a dynamic environment.
          </p>
        </div>
      </div>
    </section>
  );
}
