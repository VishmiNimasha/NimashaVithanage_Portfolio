import {
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpenText,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Target,
  X,
  Download,
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  'Introduction',
  'Journal',
  'Career Plan',
  'CV',
  'Certificate',
];

const contactLinks = [
  {
    label: 'nimashavithanage6@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nimashavithanage6@gmail.com',
    icon: Mail,
    target: '_blank',
  },
  {
    label: '+94 76 629 1819',
    href: 'tel:+94766291819',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nimasha-vithanage',
    icon: Linkedin,
    target: '_blank',
  },
  {
    label: 'Panadura, Sri Lanka',
    href: '#top',
    icon: MapPin,
  },
];

const skillGroups = [
  {
    title: 'Business Analysis & Analytics',
    skills: [
      'Business requirements gathering',
      'BRD documentation',
      'Stakeholder management',
      'Data analysis',
      'Predictive modelling',
      'Statistical analysis',
      'Dashboard design',
      'Data visualization',
      'Reporting and insights',
    ],
  },
  {
    title: 'Technical Skills',
    skills: [
      'Python',
      'SQL',
      'Machine Learning',
      'Deep Learning',
      'Artificial Intelligence',
      'Power BI',
      'DAX',
      'Data integration',
      'Geospatial analysis',
      'Data warehousing',
      'ETL pipelines',
      'Microsoft Excel',
    ],
  },
  {
    title: 'Professional Skills',
    skills: [
      'Critical thinking',
      'Problem solving',
      'Attention to detail',
      'Communication',
      'Team collaboration',
      'Cross-functional coordination',
      'Project management',
      'Task prioritization',
      'Time management',
    ],
  },
];

const internshipHighlights = [
  'Designed and developed interactive Power BI dashboards for an Employee Welfare Management Project, covering attendance tracking, medical records, and demographic trend analysis.',
  'Collaborated with the development team to build a web application that improved dashboard access and the overall user experience.',
  'Authored Business Requirements Documents and contributed as a Business Analyst for the Sri Lanka Telecom Travel Project.',
];

const projects = [
  {
    title: 'Predictive Models for Urban Air Quality Management using AI',
    type: 'Final Year Research',
    description:
      'Developed an AI-driven framework for predicting urban air pollution using environmental datasets, geospatial covariates, ensemble interpolation, and interactive heatmap visualization.',
  },
  {
    title: 'Predictive Analytics for Diabetes Readmissions',
    type: 'Data Mining | Group',
    description:
      'Applied data mining techniques to explore healthcare readmission patterns and support predictive decision-making.',
  },
  {
    title: 'Retail Data Warehouse',
    type: 'Data Warehousing | Individual',
    description:
      'Designed a data warehouse concept for retail analysis, reporting, and structured business intelligence workflows.',
  },
  {
    title: 'Mobile Recommendation System',
    type: 'Recommender Systems | Group',
    description:
      'Built a recommendation system concept for personalized mobile suggestions using user and item-based patterns.',
  },
  {
    title: 'Image Classifier',
    type: 'Deep Learning | Individual',
    description:
      'Created an image classification project as part of a nanodegree learning path.',
  },
  {
    title: 'Titanic: Machine Learning from Disaster',
    type: 'Kaggle | Individual',
    description:
      'Used machine learning techniques to predict passenger survival outcomes from the Titanic dataset.',
  },
];

const strengths = [
  {
    title: 'Analytical Thinker',
    description:
      'Strong ability to break down complex data problems and translate findings into clear business insights.',
  },
  {
    title: 'Detail-Oriented',
    description:
      'Meticulous approach to documentation, analysis, and delivering accurate, reliable results.',
  },
  {
    title: 'Collaborative & Communicative',
    description:
      'Able to work with cross-functional teams and bridge technical and business stakeholder needs.',
  },
];

const certificates = [
  {
    title: 'Python for Beginners',
    institute: 'University of Moratuwa',
    image: '/assets/python-certificate.jpg',
  },
  {
    title: 'Master Microsoft Power BI in 21 Days',
    institute: 'Udemy',
    image: '/assets/powerbi-certificate.jpg',
  },
  {
    title: 'Data Analysis with Python',
    institute: 'freeCodeCamp',
    image: '/assets/data-analysis-certificate.jpg',
  },
  {
    title: 'SQL Basic Quiz',
    institute: 'LearnTube',
    image: '/assets/sql-certificate.jpg',
  },
  {
    title: 'Ask Questions to Make Data-Driven Decisions',
    institute: 'Google (Coursera)',
    image: '/assets/google-data-driven-decisions.jpg',
  },
  {
    title: 'Foundations: Data, Data, Everywhere',
    institute: 'Google (Coursera)',
    image: '/assets/google-data-foundations.jpg',
  },
  {
    title: 'Oracle Cloud Infrastructure 2024 Certified Foundations Associate',
    institute: 'Oracle University',
    image: '/assets/oracle-cloud-foundations.jpg',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-base font-bold tracking-wide">
            Nimasha Vithanage
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                className="text-sm font-medium text-slate-400 transition hover:text-coral"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nimashavithanage6@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-coral md:inline-flex"
          >
            <Mail size={16} />
            Contact
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-800 bg-slate-900 px-5 py-4 lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                  onClick={closeMenu}
                  className="rounded-md px-2 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-800"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section
          id="introduction"
          className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-slate-900 px-4 py-2 text-sm font-semibold text-teal shadow-sm">
              <Sparkles size={16} />
              Business & Data Analytics Professional
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-200 sm:text-5xl lg:text-6xl">
              Nimasha Vithanage
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I am a results-driven Data Analytics and Business Intelligence
              professional with hands-on experience in dashboard development,
              complex data analysis, and data-driven decision-making. I enjoy
              translating data into clear, actionable insights that support
              smarter organizations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/assets/CV.pdf"
                download="Nimasha_Vithanage_CV.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-bold text-slate-200 shadow-soft transition hover:bg-coral/80"
              >
                Download CV
                <Download size={17} />
              </a>
              <a
                href="#career-plan"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-teal hover:text-teal"
              >
                Career Plan
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-slate-800 shadow-soft">
            <img
              src="/assets/profile.jpg"
              alt="Nimasha Vithanage"
              className="w-full object-cover aspect-[4/5] object-top"
            />
          </div>
        </section>

        <section id="journal" className="border-y border-slate-800 bg-slate-900">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <BookOpenText className="text-coral" size={32} />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-coral">
                Reflective Journal
              </p>
              <h2 className="mt-3 text-3xl font-black">What I learned in PPW.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-400">
              <p>
                Through Preparing for Professional World, I improved my
                understanding of professional communication, interview
                readiness, CV presentation, and workplace expectations. These
                lessons helped me connect my academic and internship experience
                with the standards expected in the IT and analytics industry.
              </p>
              <p>
                I also learned the importance of presenting skills with clear
                evidence. My work in business intelligence, dashboard design,
                and requirements documentation shows how technical knowledge and
                professional communication should support each other.
              </p>
            </div>
          </div>
        </section>

        <section id="career-plan" className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Target className="text-teal" size={34} />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-teal">
                Career Development Plan
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Growing toward data-driven roles.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5 shadow-sm">
                <h3 className="font-black">Short-Term Goal</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Strengthen practical experience in Business Intelligence,
                  Power BI, SQL, Python, and requirements analysis through
                  internships, projects, and certifications.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5 shadow-sm">
                <h3 className="font-black">Long-Term Goal</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Build a career as a Data Analyst, Business Intelligence
                  Analyst, or Business Analyst who helps organizations make
                  better decisions through reliable data insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cv" className="bg-slate-800">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <BriefcaseBusiness className="text-gold" size={34} />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-gold">
                  Curriculum Vitae
                </p>
                <h2 className="mt-3 text-3xl font-black">Professional profile.</h2>
              </div>
              <a
                href="https://www.linkedin.com/in/nimasha-vithanage"
                className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-coral"
              >
                LinkedIn Profile
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-5">
                <article className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-sm">
                  <GraduationCap className="text-coral" size={28} />
                  <h3 className="mt-4 text-xl font-black">Education</h3>
                  <p className="mt-3 font-semibold">
                    BSc (Hons) in Information Technology Specializing in Data
                    Science
                  </p>
                  <p className="mt-2 text-slate-400">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                  <p className="mt-2 text-sm font-semibold text-teal">
                    07/2022 - 07/2026 | Malabe, Sri Lanka
                  </p>
                </article>

                <article className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-sm">
                  <BarChart3 className="text-teal" size={28} />
                  <h3 className="mt-4 text-xl font-black">Languages</h3>
                  <p className="mt-3 text-slate-400">English - Full Professional</p>
                  <p className="mt-2 text-slate-400">Sinhala - Professional</p>
                </article>
              </div>

              <article className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-sm">
                <p className="text-sm font-bold text-coral">
                  09/2024 - 03/2025 | Colombo, Sri Lanka
                </p>
                <h3 className="mt-3 text-2xl font-black">
                  Intern - Business Intelligence & Analytics
                </h3>
                <p className="mt-2 font-semibold text-slate-400">
                  Sri Lanka Telecom - Head Office
                </p>
                <ul className="mt-5 space-y-4">
                  {internshipHighlights.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-slate-400">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-sm"
                >
                  <h3 className="text-xl font-black">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
                Projects & Research
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Analytics work and academic projects.
              </h2>
            </div>
            <a
              href="https://github.com/"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-coral"
            >
              GitHub
              <Github size={16} />
            </a>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="text-sm font-bold text-teal">{project.type}</p>
                <h3 className="mt-3 text-xl font-black">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">
              Strengths
            </p>
            <h2 className="mt-3 text-3xl font-black">Professional qualities.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {strengths.map((strength) => (
                <article
                  key={strength.title}
                  className="rounded-lg border border-slate-800 bg-slate-950 p-6"
                >
                  <h3 className="text-xl font-black">{strength.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">
                    {strength.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certificate" className="bg-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="mb-12">
              <Award className="text-gold" size={34} />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Certificate Evidence
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Professional Courses & Certifications.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {certificates.map((cert) => (
                <div key={cert.title} className="overflow-hidden rounded-2xl bg-slate-900/5 border border-white/10 shadow-sm transition hover:-translate-y-1 hover:bg-slate-900/10">
                  <div className="aspect-[4/3] bg-slate-900/10">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black">{cert.title}</h3>
                    <p className="mt-2 font-medium text-white/70">{cert.institute}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                Portfolio Overview
              </p>
              <h2 className="mt-4 text-2xl font-black">
                Preparing for Professional World
              </h2>
              <p className="mt-4 max-w-lg leading-7 text-white/72">
                This portfolio presents my introduction, PPW learning reflection,
                career development direction, CV, skills, work experience, and
                evidence section for course certification.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ label, href, icon: Icon, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 rounded-lg bg-slate-900/5 px-4 py-3 font-semibold transition hover:bg-slate-900/15"
                >
                  <Icon size={18} />
                  <span className="break-all">{label}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm font-medium text-white/50">
            © {new Date().getFullYear()} Nimasha Vithanage. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
