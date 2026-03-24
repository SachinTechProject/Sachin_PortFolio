import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase bg-blue-900/30 px-4 py-1 rounded-full inline-block backdrop-blur-sm">
            Creative Works
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 backdrop-blur border border-white/10 hover:border-blue-500/40 transition-all"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {proj.icon}
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                {proj.title}
              </h3>
              <p className="text-gray-300 mt-2 leading-relaxed">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4">
                <a href={proj.link} className="text-sm text-blue-400 cursor-pointer hover:text-blue-300 transition flex items-center gap-1">
                  Live Demo →
                </a>
                <span className="text-sm text-gray-400 cursor-pointer hover:text-white transition flex items-center gap-1">
                  GitHub
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;