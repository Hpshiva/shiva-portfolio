import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Design Esthetics</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
             Creative Front-End Developer passionate about crafting intuitive, user-centered digital experiences. Specialized in
responsive design, cross-browser compatibility, and accessibility best practices. Built modular websites that
improved Core Web Vitals (LCP, CLS) and increased Lighthouse performance scores by up to 65%, reducing page
load time by 2s. Delivered frontend solutions for 10+ production projects including Trident Hyundai, Agan
Health , WingPath and Kandalaa, improving usability, SEO rankings, and mobile responsiveness across platforms.
Strong collaboration skills with designers and product teams, ensuring pixel-perfect UI delivery using Figma in
Agile environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Utilinet</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              During my Utilinet Technologies internship, Assisted in developing backend services using Java and Spring
Framework for energy domain applications. Collaborated with cross-functional teams and gained hands-on
experience with debugging, and version control workflows.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Career;
