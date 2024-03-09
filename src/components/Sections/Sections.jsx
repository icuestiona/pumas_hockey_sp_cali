// SectionsComponent.jsx

import React from "react";
import "./Sections.css";
import imageValuesWorkshops from "../Assets/image57.jpg";
import imageSportsTraining from "../Assets/image17.jpg";
import imageRollerHockey from "../Assets/image48.jpg";
import imageSocialInclusion from "../Assets/image43.jpg";
import imageClosing from "../Assets/image9.jpg";

const SectionsComponent = () => {
  return (
    <div className="sections-container">
      {/* Section 1 */}
      <section className="section">
        <div className="content">
          <div className="text">
            <h2>Unveil the thrills of Roller Hockey</h2>
            <p>
              Welcome to a world where roller hockey isn't just a game; it's a
              lifestyle! Picture this: two teams, five players each, racing on
              parallel four-wheeled skates, weaving through a track enclosed by
              rounded corners or shaped like a pickaxe. With a goal in sight,
              they skillfully wield curved wooden sticks, propelling a rubber
              ball with compressed cork – that's the electrifying essence of
              roller hockey! Embrace The <strong>PUMAS</strong> way: where
              hockey meets lifestyle! <br />
              <span role="img" aria-label="stick">
                🏒
              </span>{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </p>
            <p>
              <strong>
                At PUMAS Hockey Club, from Cali - Colombia, we don't just play
                hockey; we live it. Here's a sneak peek into the PUMAS Way:
              </strong>
            </p>
          </div>
          <div className="image">
            <img src={imageRollerHockey} alt="Roller Hockey" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section">
        <div className="content">
          <div className="image">
            <img src={imageSportsTraining} alt="Sports Training" />
          </div>
          <div className="text">
            <h2>Sports Training and Education</h2>
            <p>
              Step into our dynamic hockey training sessions – a blend of
              technical prowess, physical agility, and tactical brilliance. Our
              approach is fun, creative, and designed to unleash the hockey star
              within you!
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section">
        <div className="content">
          <div className="text">
            <h2>Values Workshops</h2>
            <p>
              Beyond the rink, we delve into leisure and extra sports activities
              that go beyond goals and scores. Our workshops focus on building
              values and teamwork, ensuring every member grows not only as a
              player but as an individual.
            </p>
          </div>
          <div className="image">
            <img src={imageValuesWorkshops} alt="Values Workshops" />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="section">
        <div className="content">
          <div className="image">
            <img
              src={imageSocialInclusion}
              alt="Social and Inclusion Activities"
            />
          </div>
          <div className="text">
            <h2>Social and Inclusion Activities</h2>
            <p>
              It's not just about the game; it's about the community. Join us
              for socialization and inclusion activities - birthdays, warm
              welcomes, educational outings, farewells, and special occasions.
              At Pumas Cali Hockey Club SP, everyone is part of something
              extraordinary
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section">
        <div className="content">
          <div className="text">
            <p>
              The PUMAS way – Where great hockey players meet great people!
              Every day, we evaluate the performance of our young athletes. As
              they evolve, we tailor our efforts to strengthen their skills.
              Recognizing the standouts, we inspire them to aim for the stars
              and become high-performance athletes. We're not just shaping
              incredible hockey players; we're molding remarkable individuals.
            </p>
            <p>
              Ready to embrace the thrill of roller hockey? Join us at our club!
              <span role="img" aria-label="stick">
                🏒
              </span>
              <span role="img" aria-label="start">
                🌟
              </span>
            </p>
          </div>
          <div className="image">
            <img src={imageClosing} alt="Conclusion" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionsComponent;
