import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { MdOpenInNew } from "react-icons/md";
const projects = [
  {
    title: "Agan Health",
    category: "Health Care",
    tools: "React js, Redux, Tailwind",
    image: "https://media.licdn.com/dms/image/v2/D562DAQFqYRgBfiuzFQ/profile-treasury-image-shrink_1920_1920/B56Z1Y29zpKQAg-/0/1775312299973?e=1776056400&v=beta&t=NIDroLBM3UnmNlZ5w5ci_6CgtvMGu4VcYlHghII2Oxg",
  link: "https://www.aganhealth.com/", 
  },
  {
    title: "Trident Hyundai",
    category: "AutoMobile",
    tools: "Laravel, html5, css3",
    image: "https://media.licdn.com/dms/image/v2/D562DAQEzCkWMuR6nfA/profile-treasury-image-shrink_1920_1920/B56Z1Yzc3LIMAc-/0/1775311381304?e=1776056400&v=beta&t=r8o7evOaC_CSTu9WaXZRUlX_riPysnPzhuj6XWQDzUs",
  link: "https://tridenthyundai.com/", 
  },
  {
    title: "Pristine AutoMobile",
    category: "AutoMobile",
      tools: "Laravel, html5, css3 ,Locomotive js",
    image: "https://media.licdn.com/dms/image/v2/D562DAQEVXcZ8IVYZ8Q/profile-treasury-image-shrink_1920_1920/B56Z1Y8WPKHcAg-/0/1775313712702?e=1776056400&v=beta&t=bcA2PeyPcedJBRoz234vuu9eN1AlHygkXD-7twiAdlY",
  link: "https://pristinerenault.com/", 
  },
  {
    title: "Kinara Capital",
    category: "FinTech",
    tools: "WordPress, Bricks Builder",
    image: "https://media.licdn.com/dms/image/v2/D562DAQG0BO_5sDR_ug/profile-treasury-image-shrink_1920_1920/B56Z1Y1l4cH8Ac-/0/1775311942288?e=1776056400&v=beta&t=PK4tI9nR4n-kNuHw2v0NZRL_5WSswQQXiy0cJiKw_HY",
  link: "https://kinaracapital.com/", 
  },
  {
    title: "Kandalaa",
    category: "E-Commerce",
    tools: "Laravel, html5, css3",
    image: "https://media.licdn.com/dms/image/v2/D562DAQGKQvubDn4SUQ/profile-treasury-image-shrink_1920_1920/B56Z1hFEA7KQAc-/0/1775450213722?e=1776056400&v=beta&t=TPt-eHeLFrXVa1ekLjoYnHt_8ByVMFhO1qcMgH8yE8U",
 link: "https://www.kandalaa.com/", 
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                       <h4>{project.title}</h4>
{project.link && (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View Project <MdOpenInNew />
  </a>
)}
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
