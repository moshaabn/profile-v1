import { tw } from "@/lib/tailwind-theme";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import EmailIcon from "./icons/EmailIcon";
import PhoneIcon from "./icons/PhoneIcon";

export default function Contact() {
  return (
    <section
      id="contact"
      className={`container mx-auto px-6 py-20 lg:py-32 ${tw.bg.overlay}`}
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-center font-heading">
          Get In Touch
        </h3>
        <p
          className={`text-xl ${tw.text.secondary} mb-16 text-center max-w-2xl mx-auto font-body leading-relaxed`}
        >
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a chat about technology. Feel free to reach
          out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <h4
              className={`text-2xl font-semibold mb-8 ${tw.text.primary} font-heading`}
            >
              Contact Information
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`${tw.bg.main} p-3 rounded-full flex-shrink-0`}>
                  <EmailIcon
                    className={`w-6 h-6 text-slate-900 ${tw.text.primary}`}
                  />
                </div>
                <div>
                  <h5
                    className={`text-lg font-semibold ${tw.text.primary} mb-2 font-body`}
                  >
                    Email
                  </h5>
                  <p className={`${tw.text.secondary} text-lg font-body`}>
                    mo.shaaban.dev@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className={`${tw.bg.main} p-3 rounded-full flex-shrink-0`}>
                  <PhoneIcon
                    className={`w-6 h-6 text-slate-900 ${tw.text.primary}`}
                  />
                </div>
                <div>
                  <h5
                    className={`text-lg font-semibold ${tw.text.primary} mb-2 font-body`}
                  >
                    Phone
                  </h5>
                  <p className={`${tw.text.secondary} text-lg font-body`}>
                    (+20) 100-7943-118
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className={`${tw.bg.main} p-3 rounded-full flex-shrink-0`}>
                  <WhatsAppIcon
                    className={`w-6 h-6 text-slate-900 ${tw.text.primary}`}
                  />
                </div>
                <div>
                  <h5
                    className={`text-lg font-semibold ${tw.text.primary} mb-2 font-body`}
                  >
                    Location
                  </h5>
                  <p className={`${tw.text.secondary} text-lg font-body`}>
                    Alexandria, Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Links */}
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <h4
              className={`text-2xl font-semibold mb-8 ${tw.text.primary} font-heading`}
            >
              Connect With Me
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:mo.shaaban.dev@gmail.com"
                className={`${tw.button.primary} font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg font-body block text-center`}
              >
                Send Email
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-slate-600">
              <h5
                className={`text-lg font-semibold ${tw.text.primary} mb-6 font-body`}
              >
                Social Media
              </h5>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/mohamed-shaaban-33b805ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tw.bg.main} p-4 rounded-full hover:bg-emerald-400 transition-colors duration-300`}
                >
                  <LinkedInIcon
                    className={`w-6 h-6 text-slate-900 ${tw.text.primary}`}
                  />
                </a>
                <a
                  href="https://github.com/moshaabn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tw.bg.main} p-4 rounded-full hover:bg-emerald-400 transition-colors duration-300`}
                >
                  <GitHubIcon
                    className={`w-6 h-6 text-slate-900 ${tw.text.primary}`}
                  />
                </a>
                <a
                  href="https://wa.me/201007943118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tw.bg.main} p-4 rounded-full hover:bg-emerald-400 transition-colors duration-300`}
                >
                  <WhatsAppIcon
                    className={`w-6 h-6 text-slate-900 ${tw.text.primary}`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
