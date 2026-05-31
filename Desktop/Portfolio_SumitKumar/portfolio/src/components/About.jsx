import { useEffect, useRef, useState } from 'react';
import './About.css';

const services = [
  {
    modifier: 'frontend',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Frontend Development',
    desc: 'Transforming complex business requirements into intuitive, responsive, and high-performance user experiences through modern frontend engineering practices.',
  },
  {
    modifier: 'backend',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: 'Backend Development',
    desc: 'Architecting scalable and resilient backend platforms with a focus on secure user access, efficient data management, high-performance APIs, and long-term maintainability.',
  },
  {
    modifier: 'cloud',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Cloud & DevOps',
    desc: 'Enabling seamless software delivery and operational excellence through scalable infrastructure, automation, and cloud-native engineering practices.',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className={`about ${visible ? 'about--visible' : ''}`} ref={sectionRef}>
      <div className="about__header">
        <p className="about__eyebrow">
          <span className="about__eyebrow-line" />
          Expertise in
        </p>
        <h2 className="about__title">
          What I <span className="about__title-accent">Bring to the Table</span>
        </h2>
      </div>

      <div className="about__services">
        {services.map((s, i) => (
          <div className={`about__service-card about__service-card--${s.modifier}`} key={i} style={{ transitionDelay: `${0.15 + i * 0.12}s` }}>
            <div className="about__service-icon">{s.icon}</div>
            <h3 className="about__service-title">{s.title}</h3>
            <p className="about__service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
