import { motion } from "framer-motion";
import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="relative py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase bg-blue-900/30 px-4 py-1 rounded-full inline-block backdrop-blur-sm">
            Academic Path
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Education & Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-10 border-l-2 border-blue-500/50 last:border-0 ml-4"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-sm">
                {edu.icon}
              </div>
              <div className="bg-slate-800/60 p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl transition group hover:bg-slate-800/80">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                  {edu.degree}
                </h3>
                <p className="text-blue-400 font-medium mt-1">
                  {edu.institution} • {edu.year}
                </p>
                <p className="text-gray-300 mt-3 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;