import React,{ useState, useRef, useEffect } from 'react'
import "./Header2.css";
import Marquee from "react-fast-marquee";

const Header2 = () => {

  return (
    <div className="bar">
        {/* <Marquee speed={55}>
        Now get Hair Transplant on EMIs, call 9108775075 for more details • We have Specialised Modern Treatment Equipped for Hair Transplant, PRP, Wrinkles, Vitiligo, Hairfall, Unwanted Hair Removal, Tattoo Removal • For detailed information kindly check the sections shown below.
        </Marquee> */}
        <p className="bar2">
        Now get Hair Transplant on EMIs, call 9108775075 for more details • We have Specialised Modern Treatment Equipped for Hair Transplant, PRP, Wrinkles, Vitiligo, Hairfall, Unwanted Hair Removal, Tattoo Removal • For detailed information kindly check the sections shown below.   
        </p>
    </div>
  )
}

export default Header2