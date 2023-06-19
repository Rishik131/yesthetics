import React from 'react';
import "./Navbar.css";

const Navbar = (props) => {

  function isMobileDevice() {
    return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent);
  }

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  if (isMobileDevice()) {
    <div className="mob_navbar1">
      <div className="mob_navbar2"></div>
      <div className="mob_navbar3"></div>
    </div>
  }
  else {
    return (
      <div className='navbar'>
        <div className="navbar1">
          <div className="navbar3">
            <div className="navbar4">
              <div className="logo">
                <div className="logo1">
                  <img className="logo2" src="src/assets/images/LOGO1.png" alt="Logo" />
                </div>
              </div>
            </div>
            <div className="navbar5">
              <div className="navbar6">
                <div className="nav_button1">Home</div>
                <div onClick={() => handleClick(props.aboutRef)} className="nav_button2">About Us</div>
                <div onClick={() => handleClick(props.galleryRef)} className="nav_button3">Patient Gallery</div>
                <div className="nav_button4">Blog</div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar2">
          <div className="navbar7">
            <div className="navbar8">
              <div className="follow">
                <div className="follow1">Follow Us:</div>
                <div className="follow2">
                  <a href="#">
                    <img className='follow_logo' src="src\assets\icons\instagram_color.svg" alt="Instagram" />
                  </a>
                </div>
                <div className="follow3">
                  <a href="#">
                    <img className='follow_logo' src="src\assets\icons\linkedin.svg" alt="LinkedIn" />
                  </a>
                </div>
                <div className="follow4">
                  <a href="#">
                    <img className='follow_logo' src="src\assets\icons\twitter.svg" alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar9">
              <div className="enquire">
                Book An Appointment
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Navbar