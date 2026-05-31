import './Projects.css';
import { FiExternalLink } from 'react-icons/fi';
import { SiStreamlit, SiSpringboot, SiReact, SiPython } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import { BiBook } from 'react-icons/bi';

const projects = [
  {
    id: 1,
    tag: 'AI / ML',
    title: 'Gen AI Assistant',
    description:
      'A conversational AI assistant powered by large language models. Supports multi-turn dialogue, context retention, and smart response generation — built for real-world productivity.',
    link: 'https://genaiassistants.streamlit.app',
    techIcons: [
      { icon: <SiPython color="#3776AB" />, label: 'Python' },
      { icon: <SiStreamlit color="#FF4B4B" />, label: 'Streamlit' },
      { icon: <TbBrain color="#A855F7" />, label: 'LLM' },
    ],
    accentClass: 'projects__card--ai',
    Icon: TbBrain,
  },
  {
    id: 2,
    tag: 'Full Stack',
    title: 'Global Book Store',
    description:
      'A full-stack e-commerce platform for books with user authentication, cart management, order tracking, and an admin dashboard — built with Spring Boot and React.',
    link: 'https://globalbookstore.duckdns.org/',
    techIcons: [
      { icon: <SiSpringboot color="#6DB33F" />, label: 'Spring Boot' },
      { icon: <SiReact color="#61DAFB" />, label: 'React' },
    ],
    accentClass: 'projects__card--book',
    Icon: BiBook,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <p className="projects__eyebrow">
          <span className="projects__eyebrow-line" />
          Live Projects
        </p>
        <h2 className="projects__title">Things I've Shipped</h2>
        <p className="projects__subtitle">
          Real-world applications, fully deployed and production-ready.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => {
          const Icon = project.Icon;
          return (
            <article key={project.id} className={`projects__card ${project.accentClass}`}>
              <div className="projects__card-inner">
                <div className="projects__card-top">
                  <div className="projects__icon-wrap">
                    <Icon size={28} />
                  </div>
                  <span className="projects__tag">{project.tag}</span>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <div className="projects__tech">
                  {project.techIcons.map((t) => (
                    <span key={t.label} className="projects__tech-chip">
                      <span className="projects__tech-icon">{t.icon}</span>
                      {t.label}
                    </span>
                  ))}
                </div>

                <div className="projects__actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__btn projects__btn--primary"
                  >
                    <FiExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="projects__card-glow" aria-hidden="true" />
            </article>
          );
        })}
      </div>
    </section>
  );
}