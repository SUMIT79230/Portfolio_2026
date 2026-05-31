import './Skills.css';

import {
  SiC, SiCplusplus, SiJavascript, SiTypescript, SiPython,
  SiHtml5, SiCss, SiReact, SiRedux, SiMui,
  SiSpring, SiSpringboot, SiNodedotjs, SiHibernate,
  SiMysql, SiMongodb, SiJsonwebtokens, SiOpenid,
  SiGit, SiGithub, SiPostman, SiDocker, SiKubernetes, SiGooglecloud,
} from 'react-icons/si';
import { FaJava, FaServer, FaAws } from 'react-icons/fa';

const skillGroups = [
  {
    title: 'Languages',
    modifier: 'languages',
    skills: [
      { name: 'C',          icon: SiC,          light: '#A8B9CC', dark: '#A8B9CC' },
      { name: 'C++',        icon: SiCplusplus,  light: '#00599C', dark: '#4A9FD4' },
      { name: 'JavaScript', icon: SiJavascript, light: '#c7a800', dark: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, light: '#3178C6', dark: '#5B9BD5' },
      { name: 'Java',       icon: FaJava,       light: '#ED8B00', dark: '#F5A623' },
      { name: 'Python',     icon: SiPython,     light: '#3776AB', dark: '#4B94D4' },
    ],
  },
  {
    title: 'Frontend',
    modifier: 'frontend',
    skills: [
      { name: 'HTML5',       icon: SiHtml5,  light: '#E34F26', dark: '#F06529' },
      { name: 'CSS3',        icon: SiCss,    light: '#1572B6', dark: '#2196F3' },
      { name: 'React.js',    icon: SiReact,  light: '#0A9DC7', dark: '#61DAFB' },
      { name: 'Redux',       icon: SiRedux,  light: '#764ABC', dark: '#9B72CF' },
      { name: 'Material UI', icon: SiMui,    light: '#007FFF', dark: '#4DABF5' },
    ],
  },
  {
    title: 'Backend & Database',
    modifier: 'backend',
    skills: [
      { name: 'Spring',         icon: SiSpring,       light: '#6DB33F', dark: '#8CC84B' },
      { name: 'Spring Boot',    icon: SiSpringboot,   light: '#6DB33F', dark: '#8CC84B' },
      { name: 'Node.js',        icon: SiNodedotjs,    light: '#339933', dark: '#4CAF50' },
      { name: 'Hibernate',      icon: SiHibernate,    light: '#59666C', dark: '#90A4AE' },
      { name: 'JPA',            icon: FaServer,       light: '#59666C', dark: '#90A4AE' },
      { name: 'REST API',       icon: FaServer,       light: '#D84315', dark: '#FF6C37' },
      { name: 'JWT',            icon: SiJsonwebtokens,light: '#555555', dark: '#D63AFF' },
      { name: 'OAuth 2.0',      icon: FaServer,       light: '#EB5424', dark: '#FF7B54' },
      { name: 'OpenID Connect', icon: SiOpenid,       light: '#E06000', dark: '#F5A623' },
      { name: 'MySQL',          icon: SiMysql,        light: '#4479A1', dark: '#5B9BD5' },
      { name: 'MongoDB',        icon: SiMongodb,      light: '#2E7D32', dark: '#47A248' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    modifier: 'cloud',
    skills: [
      { name: 'Git',        icon: SiGit,        light: '#D32F2F', dark: '#F05032' },
      { name: 'GitHub',     icon: SiGithub,     light: '#24292E', dark: '#E0E0E0' },
      { name: 'Postman',    icon: SiPostman,    light: '#D84315', dark: '#FF6C37' },
      { name: 'Docker',     icon: SiDocker,     light: '#1565C0', dark: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, light: '#1A56DB', dark: '#5B8DEF' },
      { name: 'AWS',        icon: FaAws,        light: '#E65100', dark: '#FF9900' },
      { name: 'GCP',        icon: SiGooglecloud,light: '#1A73E8', dark: '#4285F4' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <p className="skills__eyebrow">
          <span className="skills__eyebrow-line" />
          Technical Skills
        </p>
        <h2 className="skills__title">Tools I Use to Build Reliable Software</h2>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skills__card">
            <h3 className="skills__card-title">{group.title}</h3>
            <div className="skills__list">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="skills__chip"
                    style={{
                      '--icon-color-light': skill.light,
                      '--icon-color-dark': skill.dark,
                    }}
                  >
                    <span className="skills__chip-icon">
                      <Icon className="skills__svg-icon" />
                    </span>
                    <span className="skills__chip-label">{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}