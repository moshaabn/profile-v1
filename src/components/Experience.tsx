import { tw } from "@/lib/tailwind-theme";

export default function Experience() {
  return (
    <section id="experience" className={`container mx-auto px-6 py-20 lg:py-32 ${tw.bg.overlay}`}>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl lg:text-4xl font-bold mb-16 text-center font-heading">Work Experience</h3>
        <div className="space-y-8">
          {/* Current Position */}
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
              <div className="flex-1">
                <h4 className={`text-2xl font-semibold ${tw.text.primary} mb-2 font-heading`}>Senior Software Engineer</h4>
                <p className={`text-xl ${tw.text.secondary} mb-2 font-body`}>AlexApps</p>
              </div>
              <span className={`${tw.text.muted} text-lg font-body mt-2 lg:mt-0`}>2023 - Present</span>
            </div>
            <ul className={`space-y-3 ${tw.text.muted} font-body text-lg leading-relaxed`}>
              <li>• Developed and maintained RESTful APIs</li>
              <li>• Make decisions about tech stacks, frameworks, and tools for projects</li>
              <li>• Mentoring juniors and mid-level engineers, reviewing code, and providing constructive feedback</li>
              <li>• Solve critical issues, such as performance bottlenecks or system failures</li>
              <li>• Align technical deliverables with business goals</li>
              <li>• Automated CI/CD pipelines, reducing deployment time by 25%</li>
            </ul>
          </div>

          {/* Part-time Position */}
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
              <div className="flex-1">
                <h4 className={`text-2xl font-semibold ${tw.text.primary} mb-2 font-heading`}>Senior Software Engineer</h4>
                <p className={`text-xl ${tw.text.secondary} mb-3 font-body`}>Pinnacle Consultancy and Audit Firm</p>
                <span className={`text-sm ${tw.text.muted} ${tw.bg.main} px-3 py-1 rounded-full font-body`}>Part-time</span>
              </div>
              <span className={`${tw.text.muted} text-lg font-body mt-2 lg:mt-0`}>May 2025 - Present</span>
            </div>
            <ul className={`space-y-3 ${tw.text.muted} font-body text-lg leading-relaxed`}>
              <li>• Refactoring dead code for internal auditing system</li>
              <li>• Adding new features applying best practices, OOP principles and SOLID</li>
              <li>• Automated CI/CD pipelines</li>
            </ul>
          </div>

          {/* Mid Level Position */}
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
              <div className="flex-1">
                <h4 className={`text-2xl font-semibold ${tw.text.primary} mb-2 font-heading`}>Mid Level Software Engineer</h4>
                <p className={`text-xl ${tw.text.secondary} mb-2 font-body`}>AlexApps</p>
              </div>
              <span className={`${tw.text.muted} text-lg font-body mt-2 lg:mt-0`}>November 2021 - 2022</span>
            </div>
            <ul className={`space-y-3 ${tw.text.muted} font-body text-lg leading-relaxed`}>
              <li>• Developed and maintained RESTful APIs</li>
              <li>• Enhanced code quality through rigorous code reviews and adherence to SOLID principles</li>
            </ul>
          </div>

          {/* Junior Position */}
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
              <div className="flex-1">
                <h4 className={`text-2xl font-semibold ${tw.text.primary} mb-2 font-heading`}>Junior Full Stack Developer</h4>
                <p className={`text-xl ${tw.text.secondary} mb-2 font-body`}>AlexApps</p>
              </div>
              <span className={`${tw.text.muted} text-lg font-body mt-2 lg:mt-0`}>June 2018 - July 2019</span>
            </div>
            <ul className={`space-y-3 ${tw.text.muted} font-body text-lg leading-relaxed`}>
              <li>• Developed and maintained RESTful APIs</li>
              <li>• Designed and optimized databases</li>
              <li>• Managed tasks using Jira in an Agile environment</li>
            </ul>
          </div>

          {/* Freelance Position */}
          <div className={`${tw.bg.card} p-8 rounded-2xl card-hover`}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
              <div className="flex-1">
                <h4 className={`text-2xl font-semibold ${tw.text.primary} mb-2 font-heading`}>Freelance Software Engineer</h4>
                <p className={`text-xl ${tw.text.secondary} mb-2 font-body`}>Independent</p>
              </div>
              <span className={`${tw.text.muted} text-lg font-body mt-2 lg:mt-0`}>June 2016 - June 2021</span>
            </div>
            <ul className={`space-y-3 ${tw.text.muted} font-body text-lg leading-relaxed`}>
              <li>• Built websites from the ground up (frontend and backend)</li>
              <li>• Created and documented APIs</li>
              <li>• Optimized and maintained databases</li>
              <li>• Made improvements to existing websites and systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
