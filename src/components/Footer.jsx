const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 text-center border-t border-white/10 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <p className="text-gray-400 text-sm">
          © {currentYear} AstralPort. Crafted with{" "}
          <span className="text-red-500">❤️</span> using React + Tailwind + Particles.
          <br />
          All content is for portfolio demonstration purposes.
        </p>
        <div className="flex justify-center gap-4 mt-3">
          <span className="text-xs text-gray-500">✨ Creative Developer</span>
          <span className="text-xs text-gray-500">🚀 Open Source Enthusiast</span>
          <span className="text-xs text-gray-500">💡 Problem Solver</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;