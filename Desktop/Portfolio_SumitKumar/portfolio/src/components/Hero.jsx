import './Hero.css';
import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">

        <div className="hero__text">

          <p className="hero__greeting">Hi, I'm Sumit Kumar 👋</p>

          <ul className="hero__roles">
            <li><span className="hero__role-dot" />2+ Years of Experience Building Scalable Software at KPIT Technologies</li>
            <li><span className="hero__role-dot" />B.Tech in Computer Science & Engineering, Kalinga Institute of Industrial Technology</li>
          </ul>

          <div className="hero__socials">
            <a href="mailto:sumitkumar79230@gmail.com" className="hero__social-link" aria-label="Gmail">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.64l8.073-6.147C21.69 2.28 24 3.434 24 5.457z"/></svg>
              Gmail
            </a>
            <a href="https://www.linkedin.com/in/sumitwork1/" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            <a href="https://leetcode.com/your-username" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LeetCode">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
              LeetCode
            </a>
            <a href="https://www.geeksforgeeks.org/user/your-username" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GFG">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.282-.819h3.164c.332 0 .332-.497 0-.497h-3.281a3.768 3.768 0 0 1 0-.745h3.281c.332 0 .332-.497 0-.497h-3.164a3.57 3.57 0 0 1 .282-.818 3.79 3.79 0 0 1 2.135-2.078 4.51 4.51 0 0 1 3.116-.016c.412.162.789.4 1.104.695.231.213.422.465.565.745.143.281.166.606-.1.7-.266.095-.509-.166-.652-.447a2.817 2.817 0 0 0-.456-.6 2.878 2.878 0 0 0-.852-.538 3.51 3.51 0 0 0-2.418-.012 2.882 2.882 0 0 0-1.644 1.578c-.14.326-.237.67-.282 1.023h4.57c.332 0 .332.497 0 .497h-4.653c-.016.248-.016.497 0 .745h4.653c.332 0 .332.497 0 .497h-4.57c.045.353.142.697.282 1.023a2.882 2.882 0 0 0 1.644 1.578 3.51 3.51 0 0 0 2.418-.012c.32-.126.608-.31.852-.538.178-.17.332-.367.456-.6.143-.281.386-.542.652-.447.266.094.243.419.1.7zM2.55 14.315c.143.28.334.532.565.745.315.295.692.533 1.104.695a4.51 4.51 0 0 0 3.116-.016 3.79 3.79 0 0 0 2.135-2.078c.14-.326.237-.67.282-.818H6.588c-.332 0-.332-.497 0-.497h3.281a3.768 3.768 0 0 0 0-.745H6.588c-.332 0-.332-.497 0-.497h3.164a3.57 3.57 0 0 0-.282-.818 3.79 3.79 0 0 0-2.135-2.078 4.51 4.51 0 0 0-3.116-.016 3.691 3.691 0 0 0-1.104.695 2.817 2.817 0 0 0-.565.745c-.143.281-.166.606.1.7.266.095.509-.166.652-.447.124-.233.278-.45.456-.6.244-.228.532-.412.852-.538a3.51 3.51 0 0 1 2.418-.012 2.882 2.882 0 0 1 1.644 1.578c.14.326.237.67.282 1.023h-4.57c-.332 0-.332.497 0 .497h4.653c.016.248.016.497 0 .745H3.435c-.332 0-.332.497 0 .497h4.57a3.57 3.57 0 0 1-.282 1.023 2.882 2.882 0 0 1-1.644 1.578 3.51 3.51 0 0 1-2.418-.012 2.878 2.878 0 0 1-.852-.538 2.817 2.817 0 0 1-.456-.6c-.143-.281-.386-.542-.652-.447-.266.094-.243.419-.1.7z"/></svg>
              GeeksforGeeks
            </a>
          </div>

          <div className="hero__cta">
            <a href="#projects" className="hero__btn hero__btn--primary">View My Work</a>
            <a href="#contact" className="hero__btn hero__btn--outline">Hire Me</a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo-inner">
            <div className="hero__frame" />
            <img src={profileImg} alt="Sumit Kumar" className="hero__photo" />
            <div className="hero__photo-shine" aria-hidden="true" />
          </div>

          <span className="hero__orbit hero__orbit--1">
            <span className="hero__dot hero__dot--1" />
          </span>

          <span className="hero__orbit hero__orbit--2">
            <span className="hero__dot hero__dot--3" />
          </span>

          <span className="hero__orbit hero__orbit--3">
            <span className="hero__dot hero__dot--5" />
          </span>

          <span className="hero__orbit hero__orbit--1" style={{ animationDelay: '-3s' }}>
            <span className="hero__dot hero__dot--2" />
          </span>

          <span className="hero__orbit hero__orbit--2" style={{ animationDelay: '-6s' }}>
            <span className="hero__dot hero__dot--4" />
          </span>

          <span className="hero__orbit hero__orbit--3" style={{ animationDelay: '-9s' }}>
            <span className="hero__dot hero__dot--6" />
          </span>

          <span className="hero__orbit hero__orbit--2" style={{ animationDelay: '-11s' }}>
            <span className="hero__dot hero__dot--7" />
          </span>
        </div>

      </div>
    </section>
  );
}