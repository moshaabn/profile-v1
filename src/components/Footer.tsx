import { tw } from "@/lib/tailwind-theme";

export default function Footer() {
  return (
    <footer className={`${tw.bg.card} border-t border-slate-600`}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h4 className={`text-2xl font-bold ${tw.text.primary} mb-6 font-heading`}>Mohamed Shaaban</h4>
            <p className={`${tw.text.secondary} text-lg leading-relaxed mb-6 font-body`}>
              Senior Software Engineer with 7+ years of experience in full-stack development. 
              Passionate about creating innovative solutions and mentoring the next generation of developers.
            </p>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/mohamed-shaaban-33b805ab" target="_blank" rel="noopener noreferrer" 
                 className={`${tw.bg.main} p-3 rounded-full hover:bg-emerald-400 transition-colors duration-300`}>
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/moshaabn" target="_blank" rel="noopener noreferrer" 
                 className={`${tw.bg.main} p-3 rounded-full hover:bg-emerald-400 transition-colors duration-300`}>
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://shaabohub.com" target="_blank" rel="noopener noreferrer" 
                 className={`${tw.bg.main} p-3 rounded-full hover:bg-emerald-400 transition-colors duration-300`}>
                <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className={`text-xl font-semibold ${tw.text.primary} mb-6 font-heading`}>Quick Links</h5>
            <ul className="space-y-3">
              <li><a href="#home" className={`${tw.text.secondary} hover:text-emerald-400 transition-colors duration-300 text-lg font-body`}>Home</a></li>
              <li><a href="#about" className={`${tw.text.secondary} hover:text-emerald-400 transition-colors duration-300 text-lg font-body`}>About</a></li>
              <li><a href="#experience" className={`${tw.text.secondary} hover:text-emerald-400 transition-colors duration-300 text-lg font-body`}>Experience</a></li>
              <li><a href="#skills" className={`${tw.text.secondary} hover:text-emerald-400 transition-colors duration-300 text-lg font-body`}>Skills</a></li>
              <li><a href="#contact" className={`${tw.text.secondary} hover:text-emerald-400 transition-colors duration-300 text-lg font-body`}>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className={`text-xl font-semibold ${tw.text.primary} mb-6 font-heading`}>Contact</h5>
            <div className="space-y-3">
              <p className={`${tw.text.secondary} text-lg font-body`}>📍 Alexandria, Egypt</p>
              <p className={`${tw.text.secondary} text-lg font-body`}>📞 (+20) 100-7943-118</p>
              <p className={`${tw.text.secondary} text-lg font-body`}>✉️ mo.shaaban.dev@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-600 mt-12 pt-8 text-center">
          <p className={`${tw.text.muted} text-lg font-body`}>
            © 2024 Mohamed Shaaban. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
