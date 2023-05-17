import React, { useEffect, useRef } from "react";

function SocialMedia({ keywork, icon, link }) {
  return (
    <div className="social__icon">
      <a href={link} target="_blank" rel="noreferrer">
        <i className={icon} title={keywork} aria-label={"Go to " + keywork} />
      </a>
    </div>
  );
}

function Header() {
  let social_media = [
    {
      keywork: "Email",
      icon: "fas fa-envelope-square",
      link: "mailto:alwoods@utexas.edu",
    },
    {
      keywork: "LinkedIn",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/woods-aaron/",
    },
    {
      keywork: "Github",
      icon: "fab fa-github",
      link: "https://github.com/guitarbeat",
    },
    // {
    //   keywork: "ORCID",
    //   icon: "fab fa-orcid",
    //   link: "https://orcid.org/0000-0001-6786-9243",
    // },
    {
      keywork: "Instagram",
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/guitarbeat/",
    },
    {
      keywork: "Twitter",
      icon: "fab fa-twitter",
      link: "https://twitter.com/WoodsResearch",
    },
    // {
    //   keywork: "ResearchGate",
    //   icon: "fab fa-researchgate",
    //   link: "https://www.researchgate.net/profile/Aaron-Woods-7",
    // },
    {
      keywork: "CV",
      icon: "fas fa-file-alt",
      link: "/cv.pdf",
    },
  ];

  const headerRef = useRef(null);

  useEffect(() => {
    const enhance = () => {
      headerRef.current.querySelectorAll("h1,h2,h3").forEach((header) => {
        const letters = header.innerText.split("");
        header.innerText = "";
        letters.forEach((letter, i) => {
          const span = document.createElement("span");
          span.className = "letter";
          if (letter === " ") {
            span.innerHTML = "&nbsp;";
          } else {
            span.textContent = letter;
          }
          header.appendChild(span);
        });
      });

      headerRef.current.querySelectorAll(".letter").forEach((letter) => {
        const random = (min, max) =>
          Math.floor(Math.random() * (max - min + 1)) + min;
        letter.addEventListener("mouseover", (e) => {
          e.target.style.setProperty("--x", `${random(-10, 10)}px`);
          e.target.style.setProperty("--y", `${random(-10, 10)}px`);
          e.target.style.setProperty("--r", `${random(-10, 10)}deg`);
        });

        letter.addEventListener("mouseout", (e) => {
          e.target.style.setProperty("--x", "0px");
          e.target.style.setProperty("--y", "0px");
          e.target.style.setProperty("--r", "0deg");
        });
      });
    };
    enhance();
  }, []);

  return (
    <div className="container" id="header" ref={headerRef}>
      <div className="container__content">
        <div className="header">
          <div className="header__image-container">
            <a>
              <img
                src={process.env.PUBLIC_URL + "/profile1.png"}
                className="header__picture"
                alt="me"
              />
              <img
                src={process.env.PUBLIC_URL + "/profile2.png"}
                className="header__picture"
                alt="me"
              />
            </a>
          </div>
          <div className="header__text">
            <h1>Aaron </h1>
            <h1>Lorenzo </h1> <h1>Woods</h1>
            <br />
            <h2>Engineer</h2>
            <h2> | </h2>
            <h2>Artist</h2>
            <h2> | </h2>
            <h2>Scientist</h2>
            <br />
            <h3>Biomedical</h3>
            <h3> Engineering</h3>
            <h3> Doctoral</h3> <h3>Student</h3>
            <br />
            <div className="social tooltip">
              {social_media.map((s) => (
                <SocialMedia key={s.keywork} {...s} />
              ))}
              <span className="tooltiptext">Email: alwoods@utexas.edu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
