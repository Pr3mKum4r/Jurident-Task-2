import bgimg from "../assets/bgimg.jpg"; // Import the image
import BG from "../assets/BG.png";
import playIcon from '../assets/play-icon.svg';
import "./home.css";
import logo from '../assets/Logo.svg';
import logo1 from '../assets/Logo (1).svg';
import logo2 from '../assets/Logo (2).svg';
import logo3 from '../assets/Logo (3).svg';
import logo4 from '../assets/Logo (4).svg';
import logo5 from '../assets/Logo (5).svg';
import icon from '../assets/Icon.svg';
import icon1 from '../assets/Icon (1).svg';
import icon2 from '../assets/Icon (2).svg';
import icon3 from '../assets/Icon (3).svg';
import servicesImg from '../assets/services-img.png';
const Home = () => {
  const divStyle = {
    backgroundImage: `url(${bgimg})`, // Set the background image
  };

  return (
    <>
      <div className="headerbg" style={divStyle}>
        <div className="header">
          <div>
          <h1>
          Inclusive care for girls with special needs in all of Zimbabwe
          </h1>
          </div>
         
          <div className="part">
            <div>
          <button> What we do </button>
            </div>
          <div className="video">
              <img   src={playIcon} />
              <div className="text-white">Play Video</div>
          </div>
          </div>
          <div className="part2">
            <p>230 children under our care</p>
            <div className="line2"></div>
            <p>58 donations collected</p>
          </div>
        </div>
      </div>

      <div className="header2-main">
        <div className="header2">
        <div>
          <div className="part3">
            <div className="line4"> </div>
           <h3 >KNOW ABOUT US</h3>
          </div>
        </div>

        <div className="part4">
        <h1>We provide empowerment, <br />
           support
           and care to the girl child</h1>
        <p>
          It is a foundation to support and care for the girl child also
          advocating for laws that are fair; they should be made to enforce
          respect and protection for girls.
        </p>
        <p>
          We work to prevent social ills against girls - e.g., prostitution,
          child abuse, rape, early marriage, drug addiction, and all forms of
          discrimination.
        </p>
        </div>
        <div className="btn-m2">
        <button className="btn">Learn more</button>
        </div>
        </div>
        <div>
          <img className="bg" src={BG} alt="" />
        </div>
      </div>


      <div className="supporter">
        <div>
          <h1>our Supporters</h1>
        </div>
      <div className="supporter-icon" >
            <img alt="" src={logo} />
            <img  alt="" src={logo1} />
            <img  alt="" src={logo2} />
            <img  alt="" src={logo3}/>
            <img  alt="" src={logo4} />
            <img  alt="" src={logo5} />
          </div>
      </div>

      <div className="services-main">
        <div className="services">
        <div className="part3">
            <div className="line4"> </div>
           <h3 className="h3" >WHAT WE DO</h3>
      </div>
      <div>
        <h1>
        Some services we <br /> provide for our girls
        </h1>
      </div>
      <div >
        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique.</p>
      </div>
      <div className="advocacy1">
        <div className="adv">
          <img src={icon} alt="" />
          <div>
              <h2>
              Advocacy
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros.</p>
          </div>
        </div>
        <div className="adv">
          <img src={icon1} alt="" />
          <div>
              <h2>
              Health benefits
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros.</p>
          </div>
        </div>
        <div className="adv">
          <img src={icon2} alt="" />
          <div>
              <h2>
              Scholarships
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros.</p>
          </div>
        </div>
        <div className="adv">
          <img src={icon3} alt="" />
          <div>
              <h2>
              Sustainable livelihoods
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros.</p>
          </div>
        </div>
        
      </div>
        </div>

        <div className="serviceImg">
          <img className="serviceImg" src={servicesImg} alt="" />
        </div>

      </div>
    </>
  );
};

export default Home;
