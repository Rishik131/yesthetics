import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Header2 from "./components/Header2/Header2";
import About from "./components/About/About";
import Patients from "./components/Patients/Patients";
import Contact from "./components/Contact/Contact";
import { useRef } from "react";

const App = () => {
  function isMobileDevice() {
    return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent);
  }
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  if (isMobileDevice()) {
    return (
      <>
        <Navbar homeRef={homeRef} aboutRef={aboutRef} galleryRef={galleryRef}/>
        <Header/>
        <Header2/>
        <About aboutRef={aboutRef}/>
        {/* testing */}
      </>
    );
  } 
  else {
    return (
      <>
        <Navbar homeRef={homeRef} aboutRef={aboutRef} galleryRef={galleryRef}/>
        <Header/>
        <Header2/>
        <About aboutRef={aboutRef}/>
        <Patients galleryRef={galleryRef}/>
        <Contact/>
      </>
    );
  }
}

export default App
