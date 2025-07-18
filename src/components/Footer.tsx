import { tw } from "@/lib/tailwind-theme";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import EmailIcon from "./icons/EmailIcon";
import LocationIcon from "./icons/LocationIcon";
import PhoneIcon from "./icons/PhoneIcon";

export default function Footer() {
  return (
    <footer className={`${tw.bg.card} border-t border-slate-600`}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h4
              className={`text-2xl font-bold ${tw.text.primary} mb-6 font-heading`}
            >
              Mohamed Shaaban
            </h4>
            <p
              className={`${tw.text.secondary} text-lg leading-relaxed mb-6 font-body`}
            >
              Senior Software Engineer with 7+ years of experience in full-stack
              development. Passionate about creating innovative solutions and
              mentoring the next generation of developers.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/mohamed-shaaban-33b805ab"
                target="_blank"
                rel="noopener noreferrer"
                className={`${tw.bg.main} p-3 rounded-full hover:bg-emerald-400 transition-colors duration-300`}
              >
                <LinkedInIcon
                  className={`w-6 h-6 text-slate-900 ${tw.text.primary} hover:bg-emerald-400`}
                />
              </a>
              <a
                href="https://github.com/moshaabn"
                target="_blank"
                rel="noopener noreferrer"
                className={`${tw.bg.main} p-3 rounded-full hover:bg-emerald-400 transition-colors duration-300`}
              >
                <GitHubIcon
                  className={`w-6 h-6 text-slate-900 ${tw.text.primary}`}
                />
              </a>
              <a
                href="https://wa.me/201007943118"
                target="_blank"
                rel="noopener noreferrer"
                className={`${tw.bg.main} p-3 rounded-full hover:bg-emerald-400 transition-colors duration-300`}
              >
                <WhatsAppIcon
                  className={`w-6 h-6 text-slate-900 ${tw.text.primary}`}
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5
              className={`text-xl font-semibold ${tw.text.primary} mb-6 font-heading`}
            >
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className={`${tw.text.secondary} hover:text-emerald-400 transition-colors duration-300 text-lg font-body`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`${tw.text.secondary} hover:text-emerald-400 transition-colors duration-300 text-lg font-body`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`${tw.text.secondary} hover:text-emerald-400 transition-colors duration-300 text-lg font-body`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`${tw.text.secondary} hover:text-emerald-400 transition-colors duration-300 text-lg font-body`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`${tw.text.secondary} hover:text-emerald-400 transition-colors duration-300 text-lg font-body`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5
              className={`text-xl font-semibold ${tw.text.primary} mb-6 font-heading`}
            >
              Contact
            </h5>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <LocationIcon className="w-5 h-5 text-emerald-400" />
                <p className={`${tw.text.secondary} text-lg font-body`}>
                  Alexandria, Egypt
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon  className="w-5 h-5 text-emerald-400" />
                <p className={`${tw.text.secondary} text-lg font-body`}>
                  (+20) 100-7943-118
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <EmailIcon className="w-5 h-5 text-emerald-400" />
                <p className={`${tw.text.secondary} text-lg font-body`}>
                  mo.shaaban.dev@gmail.com
                </p>
              </div>
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
