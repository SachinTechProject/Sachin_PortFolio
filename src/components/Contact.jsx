import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("")
  const form = useRef();
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    emailjs
     .sendForm(
        "service_5mc9bht",
        "template_1wmdxx9",
        form.current,
        "36yQPPx5JS1Gi5rxn"
     )
     .then(
         (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message, try again.");
        }
     )

    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-900/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase bg-blue-900/30 px-4 py-1 rounded-full inline-block backdrop-blur-sm">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-3xl p-8 backdrop-blur-md border border-white/10"
          >
            {submitted && (
              <div className="mb-4 p-3 bg-green-500/20 text-green-300 rounded-xl text-center">
                ✨ Message sent! I'll reply within 24 hours.
              </div>
            )}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-slate-900/80 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-slate-900/80 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your message..."
                  required
                  className="w-full bg-slate-900/80 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-500 resize-none"
                />
              </div>
              {status && <p>{status}</p>}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition transform hover:-translate-y-1"
              >
                Send Message ✨
              </button>
            </form>

            <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-white/10">
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-blue-400 transition flex items-center gap-2">
                📧 {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition flex items-center gap-2">
                🔗 LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition flex items-center gap-2">
                🐙 GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;