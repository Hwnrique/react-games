import Linkedin from "../images/icons8-linkedin-96.png";
import instagram from "../images/icons8-instagram-96.png";
import twitter from "../images/icons8-x-96.png";
import youtube from "../images/icons8-youtube-96.png";

import classe from "./Follow.module.css";

const Follow = () => {
  return (
    <div className={classe.container}>
      <h2 className={classe.title}>Follow us!</h2>
      <div className={classe.media_container}>
        <a href="">
          <img src={Linkedin} alt="linkedin" />
        </a>
        <a href="">
          <img src={instagram} alt="linkedin" />
        </a>
        <a href="">
          <img src={twitter} alt="linkedin" />
        </a>
        <a href="">
          <img src={youtube} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Follow;
