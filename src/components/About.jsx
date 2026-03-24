import { motion } from "framer-motion";
import { personalInfo, achievements } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-slate-900/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase bg-blue-900/30 px-4 py-1 rounded-full inline-block backdrop-blur-sm">
            Get to Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-1 rounded-2xl">
              <div className="bg-slate-900 rounded-2xl p-6 md:p-8">
                <p className="text-gray-300 text-lg leading-relaxed">{personalInfo.summaryBio}</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div>
                    <span className="text-blue-400 font-bold">📍</span>
                    <span className="text-gray-300 ml-2">{personalInfo.location}</span>
                  </div>
                  <div>
                    <span className="text-blue-400 font-bold">📧</span>
                    <span className="text-gray-300 ml-2">{personalInfo.email}</span>
                  </div>
                  <div>
                    <span className="text-blue-400 font-bold">🎂</span>
                    <span className="text-gray-300 ml-2">Jun 03, 2000</span>
                  </div>
                  <div>
                    <span className="text-blue-400 font-bold">💼</span>
                    <span className="text-gray-300 ml-2">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-4"
          >
            <div className="bg-slate-800/50 rounded-xl p-5 border-l-4 border-blue-500">
              <p className="text-gray-200 italic">
                "I believe in clean code, meaningful design, and continuous learning. Every project is an opportunity to innovate and create something extraordinary."
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              {achievements.map((achievement, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-slate-800 rounded-full text-blue-300 text-sm hover:bg-slate-700 transition"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;