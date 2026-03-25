import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../data/portfolioData";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase bg-blue-900/30 px-4 py-1 rounded-full inline-block backdrop-blur-sm">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Over 1.6+ years of professional experience in building scalable web applications
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg z-10"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                onHoverStart={() => setHoveredId(exp.id)}
                onHoverEnd={() => setHoveredId(null)}
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-blue-500/40 transition-all shadow-xl">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      animate={{ rotate: hoveredId === exp.id ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-2xl"
                    >
                      {exp.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Period and Location */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-1">▹</span>
                        <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
                    className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
                  >
                    {selectedExp === exp.id ? 'Show Less ↑' : 'View Details →'}
                  </motion.button>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {selectedExp === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <p className="text-gray-300 text-sm">
                            Key achievements in this role:
                          </p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center gap-2 text-sm text-gray-400">
                              <span className="text-green-400">✓</span>
                              Successfully delivered 10+ major features
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-400">
                              <span className="text-green-400">✓</span>
                              Improved team productivity by 30%
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-400">
                              <span className="text-green-400">✓</span>
                              Received "Employee of the Month" award
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Empty spacer for alignment */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
           { value: "1.6+", label: "Years Experience", icon: "💼" },
  { value: "4+", label: "Projects Completed", icon: "📂" },
  { value: "2+", label: "Internships / Roles", icon: "🧑‍💻" },
  { value: "100%", label: "Project Dedication", icon: "🔥" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/40 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;