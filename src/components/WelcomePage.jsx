import rpgMenu from "../images/rpg-menu.png";
import mainCharacter from "../images/main-character.png";
import fccBackground from "../images/fcc_background.png";
import Navbar from "./Navbar";
import Button from "./Button";
import HeroSection from "./HeroSection";
import "../stylesheets/HomepageRow.css";

const WelcomePage = ({ start }) => {
  return (
    <>
      <Navbar />
      <HeroSection start={start} />

      <main className="text-center">
        <hr className="featurette-divider" id="divider" />

        <div
          className="row featurette content-row-container"
          style={{ backgroundColor: "#0a0a23" }}
        >
          <div className="col-md-7 content-text-container">
            <h2 className="featurette-heading">
              Want to test your programming knowledge?
            </h2>
            <p className="lead">
              Brush up on HTML, CSS, JavaScript, React Native, Python, Django,
              Git, SQL, IT and general Computer Science concepts, with{" "}
              <span style={{ fontWeight: "700" }}>600+</span> questions.
            </p>
            <p className="lead">Take our quiz and have fun learning!</p>
            <Button handleClick={start} text="Quiz" isTransparent={false} />
          </div>
          <div className="col-md-5 content-img-container">
            <img
              src={mainCharacter}
              className="img-fluid rounded content-section-img"
              id="main-character-img"
              alt="main female character from rpg game"
            />
          </div>
        </div>

        <hr className="featurette-divider" id="divider" />

        <div
          className="row featurette content-row-container"
          style={{ backgroundColor: "#2a2a40" }}
        >
          <div className="col-md-7 order-md-2 content-text-container">
            <h2 className="featurette-heading">Brand new to programming?</h2>
            <p className="lead">
              Learn to code for free and start your programming journey with{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lupleg.website"
              >
                Lupleg
              </a>
              .
            </p>
            <p className="lead">
              Lupleg's mission is to help people{" "}
              <strong>learn to code for free</strong>. We accomplish this by
              creating thousands of projects, articles, and interactive coding
              lessons - all freely available to the public.
            </p>
          </div>
          <div className="col-md-5 order-md-1 content-img-container">
            <img
              src={fccBackground}
              className="img-fluid rounded"
              id="#fcc-image"
              alt="lupleg rpg logo"
            />
          </div>
        </div>

        <hr className="featurette-divider" id="divider" />

        <div
          className="row featurette content-row-container"
          style={{ backgroundColor: "#0a0a23" }}
        >
          <div className="col-md-7 order-md-2 content-text-container">
            <h2 style={{ marginTop: "40px" }} className="featurette-heading">
              Want to learn how to code while Still a Beginner?
            </h2>
            <p className="lead">
              {" "}
              Give Lupleg a try👇 <br />{" "}
              <a
                href="https://app.lupleg.website/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                30DaysCodingChallenges
              </a>{" "}
              a go!
            </p>
            <p className="lead">
              Available for free Online, <br /> try and signup Now.
            </p>
          </div>
          <div className="col-md-5 order-md-2 content-img-container">
            <img
              src={rpgMenu}
              className="img-fluid rounded"
              alt="Lupleg rpg logo"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default WelcomePage;
