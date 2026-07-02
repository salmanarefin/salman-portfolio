'use client';

import { useEffect } from 'react';

const skills = {
  Languages: ['Java', 'C#', 'C++', 'Python', 'JavaScript', 'PHP'],
  Frontend: ['HTML', 'CSS', 'React.js', 'Next.js'],
  Backend: ['NestJS', 'ASP.NET Core', 'PHP', 'Laravel'],
  Database: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle'],
  Tools: [
    'GitHub',
    'Postman',
    'VS Code',
    'Visual Studio',
    'Figma',
    'Selenium',
    'Ubuntu',
    'Emu8086',
    'Cisco Packet Tracer',
    'Google Colab',
    'Composer',
  ],
  Concepts: ['OOP', 'Data Structures', 'Web Development', 'ML', 'OpenGL'],
};

const whatIDo = [
  {
    title: 'Full-Stack Web Development',
    description:
      'I build complete web applications by connecting user-friendly frontend interfaces with secure backend systems and databases.',
    items: ['React.js', 'Next.js', 'NestJS', 'ASP.NET Core', 'Laravel'],
  },
  {
    title: 'Backend Development',
    description:
      'I develop server-side logic, authentication flows, database operations, API endpoints, and admin/customer management features.',
    items: ['NestJS', 'ASP.NET Core', 'Laravel', 'PHP', 'REST API'],
  },
  {
    title: 'Frontend Development',
    description:
      'I create clean, responsive, and modern user interfaces with smooth user experience for dashboards, management systems, and portfolio websites.',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
  },
  {
    title: 'Database Work',
    description:
      'I design and work with database-driven systems for storing, managing, and retrieving application data efficiently.',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'Database Design'],
  },
  {
    title: 'API Testing & Development Tools',
    description:
      'I test API endpoints, debug application flows, manage source code, and work with professional development tools.',
    items: ['Postman', 'GitHub', 'VS Code', 'Visual Studio', 'Selenium'],
  },
  {
    title: 'Software Planning & Documentation',
    description:
      'I prepare requirement analysis, system design, testing plans, and project documentation for academic and real-world software projects.',
    items: ['SRS', 'SQT', 'Requirement Analysis', 'System Design'],
  },
];

const projects = [
  {
    title: 'Advanced ERP HRMS Management System',
    tech: 'ASP.NET Core MVC, C#, Entity Framework Core, SQL Server, Identity, Bootstrap, Chart.js • 2026',
    github: 'https://github.com/salmanarefin/Advanced_ERP_Management_System',
    description:
      'A role-based ERP HRMS web application for managing employees, departments, attendance, leave, payroll, reports, audit logs, and dashboard analytics.',
  },
  {
    title: 'E-Pharmacy Shop Management System',
    tech: 'NestJS, Next.js, React.js, PostgreSQL • 2026',
    github: 'https://github.com/salmanarefin/E-Pharmecy_management_system',
    description:
      'A full-stack web application for managing inventory, sales, customer data, medicines, orders, and pharmacy operations.',
  },
  {
    title: 'Library Management System',
    tech: 'ASP.NET, C#, SQL • 2026',
    github: 'https://github.com/salmanarefin/Library_management_system-Asp.net-',
    description:
      'A web-based system for managing books, users, borrowing records, returns, and library administrative workflows.',
  },
  {
    title: 'Hostel Management System',
    tech: 'Laravel, PHP, MySQL, Blade, Tailwind CSS, JavaScript • 2026',
    github: 'https://github.com/salmanarefin/hostel_management_system',
    description:
      'A web-based hostel management system for managing seats, customers, bookings, admin dashboard, offers, authentication, rent payment, leave/exit requests, and admin approval workflows.',
  },
  {
    title: 'Supershop Management System',
    tech: 'HTML, CSS, JavaScript, PHP, MySQL • 2025',
    github: 'https://github.com/salmanarefin/Supershop_management',
    description:
      'A dynamic web-based application for managing products, sales, customer data, and daily shop operations.',
  },
  {
    title: 'Health Data Bank',
    tech: 'Software Requirements Engineering • 2025',
    github: 'https://github.com/salmanarefin/Heath_Data_Bank_Software_Requirement',
    description:
      'A centralized health record management system designed through requirement gathering and analysis for secure and efficient health data handling.',
  },
  {
    title: 'Agricultural Shop Management System',
    tech: 'C#, Database • 2024',
    github: 'https://github.com/salmanarefin/AGRICULTURE-MANAGEMENT-C-SHARP',
    description:
      'A management system for handling agricultural products, inventory, sales, customer records, stock tracking, and transactions.',
  },
  {
    title: 'Real-Time Sign Language Translation',
    tech: 'SRE, SQT, Computer Vision • 2024',
    github: 'https://github.com/salmanarefin/RealTimeLanguageTranslationForSignLanguage',
    description:
      'A real-time sign language translation project that converts gestures into text using computer vision concepts with requirement analysis, system design, UI/UX planning, risk analysis, and testing.',
  },
  {
    title: 'City Life Simulation',
    tech: 'OpenGL, Graphics Programming • 2023',
    github: 'https://github.com/salmanarefin/computer-graphics',
    description:
      'An OpenGL-based simulation of city environments using 2D/3D graphics, animation, and real-time rendering concepts.',
  },
  {
    title: 'Airplane Ticket Management System',
    tech: 'Java • 2022',
    github: 'https://github.com/salmanarefin/java-main-project',
    description:
      'A desktop-based system for booking, managing, and tracking airline tickets with user input handling, data processing, and booking management.',
  },
];

const experiences = [
  {
    role: 'Research & Analysis Assistant',
    company: 'EduBdesh — Arha-ab Group',
    location: 'Dhaka, Bangladesh',
    duration: 'Jan 2026 – June 2026',
    points: [
      'Conducting research to support business development, communication, and planning activities.',
      'Analyzing information and preparing insights for branding and outreach initiatives.',
      'Collaborating with cross-functional teams in a business and technology consulting environment.',
    ],
  },
];

const navItems = [
  { label: 'Who I Am', href: '#who-i-am' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(
      `
      section:not(#home) > p,
      section:not(#home) .section-title,
      section:not(#home) .card h2,
      section:not(#home) .card h3,
      section:not(#home) .card p,
      section:not(#home) .card li,
      section:not(#home) .card span,
      section:not(#home) .card a
      `
    );

    revealItems.forEach((element, index) => {
      element.classList.add('text-reveal-pro');

      if (index % 2 === 0) {
        element.classList.add('text-from-left');
      } else {
        element.classList.add('text-from-right');
      }

      element.style.transitionDelay = `${Math.min((index % 5) * 0.06, 0.3)}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('text-reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -70px 0px',
      }
    );

    revealItems.forEach((element) => observer.observe(element));

    const cards = document.querySelectorAll('.card');

    const handleMouseMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();

      card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      observer.disconnect();

      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="dynamic-background" aria-hidden="true">
        <span className="bg-orb orb-one"></span>
        <span className="bg-orb orb-two"></span>
        <span className="bg-orb orb-three"></span>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4"></span>
        <span className="particle particle-5"></span>
        <span className="particle particle-6"></span>
        <span className="particle particle-7"></span>
        <span className="particle particle-8"></span>
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-xl font-black tracking-tight text-white">
            Salman<span className="gradient-text">.</span>
          </a>

          <div className="hidden items-center gap-4 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-xs font-semibold xl:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="/salman-cv.pdf"
            download="Salman_Arefin_CV.pdf"
            className="rounded-full border border-sky-300/40 px-4 py-2 text-sm font-bold text-sky-100 transition hover:bg-sky-400/10"
          >
            Download CV
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28"
      >
        <div>
          <p className="mb-4 inline-flex rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-100">
            Software Engineer • Full-Stack & Web Developer
          </p>

          <h1 className="text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">
            Hi, I’m <span className="gradient-text">Salman Arefin</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Software Engineering graduate from American International
            University-Bangladesh (AIUB) with hands-on experience in full-stack web
            development. I build scalable, database-driven, and user-focused
            applications using React.js, Next.js, NestJS, ASP.NET Core, Laravel,
            PHP, MySQL, PostgreSQL, SQL Server, and Oracle.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="card relative p-8">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-400/20" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-400/20" />

          <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border border-white/10 bg-white/10">
            <img
              src="/profile.jpg"
              alt="Salman Arefin"
              className="h-full w-full scale-110 object-cover translate-y-3"
            />
          </div>

          <div className="relative mt-8 grid gap-4 text-center">
            <h2 className="text-2xl font-black text-white">
              Software Engineer | Full-Stack Web Developer
            </h2>

            <p className="text-lg font-semibold text-sky-300">
              React.js | Next.js | NestJS | ASP.NET Core | Laravel | SQL Server
            </p>

            <p className="text-slate-400">AIUB • BSc in CSE</p>
          </div>
        </div>
      </section>

      <section id="who-i-am" className="mx-auto max-w-6xl px-5 py-16">
        <div className="card p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
            Who I Am
          </p>

          <h2 className="section-title mt-3">Who is Salman Arefin?</h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Salman Arefin is a Bangladeshi Software Engineer and Full-Stack Web
            Developer. He completed his BSc in Computer Science and Engineering
            from American International University-Bangladesh (AIUB), majoring in
            Software Engineering.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            He works with React.js, Next.js, NestJS, ASP.NET Core, Laravel, PHP,
            MySQL, PostgreSQL, SQL Server, and Oracle. His experience includes
            full-stack web applications, management systems, database-driven
            platforms, software requirement analysis, testing, and computer
            graphics.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            He focuses on building clean, practical, and maintainable software
            solutions that solve real problems and support better user
            experiences.
          </p>
        </div>
      </section>

      <section id="what-i-do" className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
          What I Do
        </p>

        <h2 className="section-title mt-3">
          I develop complete software solutions from frontend to database.
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whatIDo.map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="text-xl font-black text-white">{item.title}</h3>

              <p className="mt-4 leading-7 text-slate-300">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.items.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
          Skills
        </p>

        <h2 className="section-title mt-3">Technical Toolbox</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card p-6">
              <h3 className="text-xl font-black text-white">{category}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
          Projects
        </p>

        <h2 className="section-title mt-3">Selected Work</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card flex flex-col p-6 transition hover:bg-white/10"
            >
              <h3 className="text-2xl font-black text-white">{project.title}</h3>

              <p className="mt-2 text-sm font-semibold text-sky-300">
                {project.tech}
              </p>

              <p className="mt-4 flex-1 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-sky-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-sky-300"
                >
                  GitHub
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white hover:bg-white/10"
                >
                  Discuss Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
          Experience
        </p>

        <h2 className="section-title mt-3">Professional Experience</h2>

        <div className="mt-8 grid gap-6">
          {experiences.map((experience) => (
            <div key={experience.role} className="card p-8">
              <p className="text-sm font-semibold text-sky-300">
                {experience.duration}
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                {experience.role}
              </h3>

              <p className="mt-2 text-lg font-semibold text-slate-200">
                {experience.company}
              </p>

              <p className="mt-1 text-slate-400">{experience.location}</p>

              <ul className="mt-5 space-y-3 text-slate-300">
                {experience.points.map((point) => (
                  <li key={point} className="leading-7">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
          Education
        </p>

        <h2 className="section-title mt-3">Academic Background</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card p-8">
            <p className="text-sm font-semibold text-sky-300">
              Bachelor of Science
            </p>

            <h3 className="mt-3 text-2xl font-black text-white">
              BSc in Computer Science & Engineering
            </h3>

            <p className="mt-3 text-slate-300">
              American International University-Bangladesh (AIUB)
            </p>

            <p className="mt-3 font-bold text-white">CGPA: 3.45 / 4.00</p>

            <p className="mt-2 text-slate-400">Major: Software Engineering</p>
          </div>

          <div className="card p-8">
            <p className="text-sm font-semibold text-sky-300">
              Higher Secondary Certificate
            </p>

            <h3 className="mt-3 text-2xl font-black text-white">HSC</h3>

            <p className="mt-3 text-slate-300">
              Rajshahi Education Board Govt. Model School & College
            </p>

            <p className="mt-3 font-bold text-white">GPA: 5.00 / 5.00</p>

            <p className="mt-2 text-slate-400">Group: Science</p>
          </div>

          <div className="card p-8">
            <p className="text-sm font-semibold text-sky-300">
              Secondary School Certificate
            </p>

            <h3 className="mt-3 text-2xl font-black text-white">SSC</h3>

            <p className="mt-3 text-slate-300">
              Rajshahi Education Board Govt. Model School & College
            </p>

            <p className="mt-3 font-bold text-white">GPA: 5.00 / 5.00</p>

            <p className="mt-2 text-slate-400">Group: Science</p>
          </div>
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
          Certifications
        </p>

        <h2 className="section-title mt-3">Professional Certifications</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card p-8">
            <p className="text-sm font-semibold text-sky-300">Cisco</p>

            <h3 className="mt-3 text-xl font-black text-white">
              Cisco IT Essentials
            </h3>

            <p className="mt-3 text-slate-300">PC Hardware and Software</p>
          </div>

          <div className="card p-8">
            <p className="text-sm font-semibold text-sky-300">
              UNICEF GenU P2E
            </p>

            <h3 className="mt-3 text-xl font-black text-white">
              Excel Essentials
            </h3>

            <p className="mt-3 text-slate-300">
              Essentials for Workplace Productivity
            </p>
          </div>

          <div className="card p-8">
            <p className="text-sm font-semibold text-sky-300">
              UNICEF GenU P2E
            </p>

            <h3 className="mt-3 text-xl font-black text-white">
              Workplace Communication
            </h3>

            <p className="mt-3 text-slate-300">Communication Essentials</p>
          </div>

          <div className="card p-8">
            <p className="text-sm font-semibold text-sky-300">
              Team Pro5.ai on behalf of bKash Limited
            </p>

            <h3 className="mt-3 text-xl font-black text-white">
              bKash Limited Technical Vetting Certificate
            </h3>

            <p className="mt-3 text-slate-300">
              Technical vetting certificate completed in 2026.
            </p>
          </div>

          <div className="card p-8">
            <p className="text-sm font-semibold text-sky-300">Pro5.ai</p>

            <h3 className="mt-3 text-xl font-black text-white">
              ASP.NET Technical Vetting Certificate
            </h3>

            <p className="mt-3 text-slate-300">
              ASP.NET technical vetting certificate completed in 2026.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 pb-24">
        <div className="card p-8 text-center md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
            Contact
          </p>

          <h2 className="section-title mt-3">
            Let’s build reliable software that creates real value.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I am seeking entry-level Software Developer, Backend Developer, or
            Full-Stack Developer opportunities where I can contribute to practical
            software solutions and continue growing as a professional engineer.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:salmanarefinofficial007@gmail.com"
              className="rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 hover:bg-sky-300"
            >
              Email Me
            </a>

            <a
              href="https://github.com/salmanarefin"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/salman-arefin-2b2a3a293/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}