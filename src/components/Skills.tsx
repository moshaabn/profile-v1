import { tw } from "@/lib/tailwind-theme";

export default function Skills() {
  return (
    <section
      id="skills"
      className={`container mx-auto px-6 py-20 lg:py-32 ${tw.bg.overlay}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center font-heading">
          Technical Skills
        </h2>
        <h3
          className={`text-2xl font-semibold mb-8 text-center ${tw.text.primary} font-heading`}
        >
          Core Technologies
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <h4
              className={`text-2xl font-semibold mb-6 ${tw.text.primary} font-heading`}
            >
              Backend
            </h4>
            <ul className={`space-y-3 ${tw.text.secondary} font-body text-lg`}>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                .NET Core (EF, Clean Architecture)
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                Node.js (Nest.js) with DDD
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                RESTful APIs, WebSockets
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                SignalR
              </li>
            </ul>
          </div>
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <h4
              className={`text-2xl font-semibold mb-6 ${tw.text.primary} font-heading`}
            >
              Frontend
            </h4>
            <ul className={`space-y-3 ${tw.text.secondary} font-body text-lg`}>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                JavaScript (Next.js, React.js)
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                TypeScript
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                HTML5 & CSS3
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                Socket.io
              </li>
            </ul>
          </div>
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <h4
              className={`text-2xl font-semibold mb-6 ${tw.text.primary} font-heading`}
            >
              Database & Tools
            </h4>
            <ul className={`space-y-3 ${tw.text.secondary} font-body text-lg`}>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                MySQL, MongoDB
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                Firebase
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                Git, Linux, Docker
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                DevOps, CI/CD
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                Entity Framework
              </li>
            </ul>
          </div>
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <h4
              className={`text-2xl font-semibold mb-6 ${tw.text.primary} font-heading`}
            >
              Frameworks & Integration
            </h4>
            <ul className={`space-y-3 ${tw.text.secondary} font-body text-lg`}>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                ABP Framework
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                Clean Architecture
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                Vimeo Integration
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                Real-time Systems
              </li>
              <li className="flex items-center">
                <span
                  className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                POS Systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
