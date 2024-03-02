import React from "react";
import "./Support.css";
import imageSupport from "../Assets/image6.jpg";

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-title">
        <h2>Join us in creating a better society</h2>
      </div>
      <div className="grid-container">
        <div className="support-text-container">
          <p>
            In our quest to cultivate a society that champions justice, peace,
            and equality, we believe in the transformative power of true
            education. A society thrives when its values are at the forefront,
            paving the way for the best within it to flourish. One key
            ingredient in achieving this vision is fostering a genuine education
            for life through dynamic sports spaces.{" "}
            <span role="img" aria-label="stick">
              🌐
            </span>{" "}
            <span role="img" aria-label="start">
              🙌
            </span>
            <br /> We envision spaces where children, young adults, and the
            elderly come together to recreate, share, and actively contribute to
            social integration. By engaging in sports, individuals can not only
            enhance their physical well-being but also build essential life
            skills such as teamwork, discipline, and resilience. <br />{" "}
            <strong>WHY YOUR HELP MATTERS:</strong> By becoming a part of our
            mission, you play a pivotal role in creating these vital sports
            seedbeds. Your support enables us to provide opportunities for
            individuals to participate in sports activities, fostering a sense
            of community and connection.
            <br /> <strong>HOW YOU CAN CONTRIBUTE:</strong> Whether you are a
            legal entity or an individual, your support can make a significant
            impact. If you share our vision and wish to contribute to the
            development of these sports seedbeds, we warmly invite you to reach
            out to us at Info@PUMAShockeyclub.com. Together, let's make a
            lasting difference in the lives of our athletes and contribute to
            the creation of a more vibrant, inclusive society.
          </p>{" "}
          <p>
            <strong>YOUR SUPPORT MATTERS!</strong>{" "}
            <span role="img" aria-label="stick">
              🏒
            </span>{" "}
            <span role="img" aria-label="start">
              🔥
            </span>
          </p>{" "}
        </div>{" "}
        <div className="support-image">
          <img src={imageSupport} alt="Supporter" />
        </div>
      </div>
    </div>
  );
};

export default Support;
