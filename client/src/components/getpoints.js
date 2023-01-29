import "./style/points.css";

import point from "../assets/images/star.png";
import badge2 from "../assets/images/badge2.png";
import streak from "../assets/images/fire.jpg";

const GetPoints = () => {
  return (
    <>
      <div className="points-container">
        <div className="courses-completion">
          <p className="primary-heading">
            Congratulations on course completion!!!
          </p>
          <div className="award-container">
            <div className="awards">
              <p className="points-award">
                You have scored:{" "}
                <span className="fifty">
                  50 <img className="point-imgs imgs" src={point} alt="" />
                </span>{" "}
                points for completing the course
              </p>
              <p className="points-award">
                You have added:{" "}
                <span className="fifty">
                  1 <img className="badge-imgs imgs" src={badge2} alt="" />
                </span>{" "}
                <span className="get-badge">course completion badge.</span>
              </p>
              <p className="points-award">
                You have scored:{" "}
                <span className="fifty">
                  50 <img className="streak-imgs imgs" src={streak} alt="" />
                </span>
                <span className="get-streak">
                  continuing the course for 50 days
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPoints;
