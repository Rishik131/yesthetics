import React,{useState} from 'react';
import "./Navbar.css";
import { AiOutlineMenu } from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import Sidebar from '../Sidebar/Sidebar';
const Navbar = (props) => {
  const [open,setOpen] = useState(false);
  function isMobileDevice() {
    return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent);
  }
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick2 = (open) => {
    setOpen(!open);
  }
  if(isMobileDevice()){
    return(
      <>
        <div ref={props.homeRef} className="mob_container">
          <Sidebar handleClick2={handleClick2} open={open} setOpen={setOpen} homeRef={props.homeRef} aboutRef={props.aboutRef} galleryRef={props.galleryRef} handleClick={handleClick}/>
          <div className="mob_item1">
            <div className="mob_navbar1">
              <div className="mob_navbar2">
                <div className="mob_navbar4">
                <div className="mob_navbar5">
                  <div>
                  <img className="mob_logo2" src="https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/LOGO1.png?raw=true" alt="Logo" />
                  </div>
                </div>
                <div className="mob_navbar6">
                <div className="follow">
                <div className="follow1">Follow Us:</div>
                <div className="follow2">
                  <a href="#">
                    <img className='follow_logo' src="https://raw.githubusercontent.com/Rishik131/yesthetics/bdfcddcdff15da86d4c6587893a5aee892ac24d5/src/assets/icons/instagram_color.svg" alt="Instagram" />
                  </a>
                </div>
                <div className="follow3">
                  <a href="#">
                    <img className='follow_logo' src="https://raw.githubusercontent.com/Rishik131/yesthetics/bdfcddcdff15da86d4c6587893a5aee892ac24d5/src/assets/icons/linkedin.svg" alt="LinkedIn" />
                  </a>
                </div>
                <div className="follow4">
                  <a href="#">
                    <img className='follow_logo' src="https://raw.githubusercontent.com/Rishik131/yesthetics/bdfcddcdff15da86d4c6587893a5aee892ac24d5/src/assets/icons/twitter.svg" alt="Twitter" />
                  </a>
                </div>
              </div>
                </div>
                </div>                
              </div>
              <div className="mob_navbar3">
                <div onClick={()=>handleClick2(open)}>
                  <FiMenu className='menu_icon'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  else{
    
    return (
      <div className='navbar'>
        <div className="navbar1">
          <div className="navbar3">
            <div className="navbar4">
              <div className="logo">
                <div className="logo1">
                  <img className="logo2" src="https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/LOGO1.png?raw=true" alt="Logo" />
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
                    <img className='follow_logo' src="https://raw.githubusercontent.com/Rishik131/yesthetics/bdfcddcdff15da86d4c6587893a5aee892ac24d5/src/assets/icons/instagram_color.svg" alt="Instagram" />
                  </a>
                </div>
                <div className="follow3">
                  <a href="#">
                    <img className='follow_logo' src="https://raw.githubusercontent.com/Rishik131/yesthetics/bdfcddcdff15da86d4c6587893a5aee892ac24d5/src/assets/icons/linkedin.svg" alt="LinkedIn" />
                  </a>
                </div>
                <div className="follow4">
                  <a href="#">
                    <img className='follow_logo' src="https://raw.githubusercontent.com/Rishik131/yesthetics/bdfcddcdff15da86d4c6587893a5aee892ac24d5/src/assets/icons/twitter.svg" alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar9">
              <div className="enquire">
                <a className="enquire2" href="tel: 9108775075">Book An Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar