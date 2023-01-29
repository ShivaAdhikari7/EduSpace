import "./style/myprofile.css";
import badge1 from "../assets/images/badge1.jpg";
import badge2 from "../assets/images/badge2.png";
import point from "../assets/images/star.png";
import streak from "../assets/images/fire.jpg";
import student1 from "../assets/images/man.png";
import student2 from "../assets/images/diver.png";
import student3 from "../assets/images/journalist.png";
import student4 from "../assets/images/user.png";

const MyProfile = () => {
  return (
    <>
      <div className="container-profile">
        <div className="myprofile">
          <img className="myprofileImage" src={student1} alt="myprofileImage" />
          <div className="myinfo">
            <h3 className="myname tp">Name: Shiva Adhikari</h3>
            <h3 className="myemail">Email: shivaadhikari110@gmail.com</h3>
          </div>
        </div>
        <div className="achievements">
          <p className="mypoints">
            Your points: 1000{" "}
            <img className="points-image" src={point} alt="star" />
          </p>
          <p>
            Your badges: 2 badges{" "}
            <img className="badge1" src={badge1} alt="badges" />
            <img className="badge2" src={badge2} alt="badges" />
          </p>
          <p>
            Your streaks: 120 streaks{" "}
            <img className="badge1" src={streak} alt="badges" />
          </p>
        </div>

        <div className="leaderboard">
          <div className="heading-leaderboard">
            <p>Leaderboard of Top 10 students:</p>
          </div>
          <table id="customers">
            <tr>
              <th>Avatar Image </th>
              <th>Name</th>
              <th>Email</th>
              <th>Rank</th>
              <th>Points</th>
            </tr>
            <tr>
              <td>
                <img className="avatar-img" src={student1} alt="" />
              </td>
              <td>Shiva Adhikari</td>
              <td>shivaadhikari499@gmail.com</td>
              <td>
                1<sup>st</sup> Rank
              </td>
              <td>
                1000 points{" "}
                <img className="points-image" src={point} alt="star" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="avatar-img" src={student2} alt="" />
              </td>
              <td>Priyanaka Adhikari</td>
              <td>Priyanakadhikari112@gmail.com</td>
              <td>
                2<sup>st</sup> Rank
              </td>
              <td>
                950 points{" "}
                <img className="points-image" src={point} alt="star" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="avatar-img" src={student3} alt="" />
              </td>
              <td>Neesha Kandel</td>
              <td>kandelneesha499@gmail.com</td>
              <td>
                3<sup>rd</sup> Rank
              </td>
              <td>
                949 points{" "}
                <img className="points-image" src={point} alt="star" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="avatar-img" src={student4} alt="" />
              </td>
              <td>Suman Ghimire</td>
              <td>imsuman@gmail.com</td>
              <td>
                4<sup>th</sup> Rank
              </td>
              <td>
                930 points{" "}
                <img className="points-image" src={point} alt="star" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="avatar-img" src={student1} alt="" />
              </td>
              <td>Bikash Aryal</td>
              <td>bikashar1@gmail.com</td>
              <td>
                5<sup>th</sup> Rank
              </td>
              <td>
                900 points{" "}
                <img className="points-image" src={point} alt="star" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="avatar-img" src={student2} alt="" />
              </td>
              <td>Aayesha Pandey</td>
              <td>ayesha23@gmail.com</td>
              <td>
                6<sup>th</sup> Rank
              </td>
              <td>
                891 points{" "}
                <img className="points-image" src={point} alt="star" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="avatar-img" src={student3} alt="" />
              </td>
              <td>Susmita Rijal</td>
              <td>susmitarijal234@gmail.com</td>
              <td>
                7<sup>th</sup> Rank
              </td>
              <td>
                890 points{" "}
                <img className="points-image" src={point} alt="star" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="avatar-img" src={student4} alt="" />
              </td>
              <td>Avishek Poudel</td>
              <td>avishekpoudel222@gmail.com</td>
              <td>
                8<sup>th</sup> Rank
              </td>
              <td>
                860 points{" "}
                <img className="points-image" src={point} alt="star" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="avatar-img" src={student3} alt="" />
              </td>
              <td>Apsara Bhandari</td>
              <td>bhandariapsara225@gmail.com</td>
              <td>
                9<sup>th</sup> Rank
              </td>
              <td>
                810 points{" "}
                <img className="points-image" src={point} alt="star" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="avatar-img" src={student4} alt="" />
              </td>
              <td>Madan Barshakoti</td>
              <td>barshakotimadan23@gmail.com</td>
              <td>
                10<sup>th</sup> Rank
              </td>
              <td>
                800 points{" "}
                <img className="points-image" src={point} alt="star" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
