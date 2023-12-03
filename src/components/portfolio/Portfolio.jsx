import "./portfolio.css";

import IMG1 from "/public/dice game.png";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG3 from "../../assets/Startup Agency Project.jpg";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Dice Game",
      img: IMG1,
      description: "An entertainment Game that good for mental health.",
      technologies: "Html | CSS | Javascript",
      link: "https://github.com/sabzj/Dice_Game",
      github: "https://github.com/sabzj",
    },
    {
      id: 2,
      title: "Snake Game",
      img: IMG2,
      description: "The Most used and public game among all ages.",
      technologies: "JS | CSS | HTML",
      link: "https://github.com/sabzj/snake_game",
      github: "https://github.com/sabzj",
    },
    {
      id: 3,
      title: "RubyCode Blog Project",
      img: IMG2,
      description:
        "This site is a kind of social media platform. You can register and share your posts.",
      technologies: "React | Redux",
      link: "https://rubycode-blog-project.vercel.app/",
      github: "https://github.com/sabzj",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
