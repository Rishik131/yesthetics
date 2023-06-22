import React,{useState} from 'react';
import './Sidebar.css';
import {AiOutlineClose} from 'react-icons/ai';

const Sidebar = (props) => {
    // const handleClick = (ref) => {
    //     ref.current.scrollIntoView({ behavior: 'smooth' });
    //   };
  return (
    <>
        <div className={`sidebar ${props.open?"":"sidebar_hide"}`}>
            <div className="sidebar1">
                <div onClick={()=>props.handleClick2(props.open)}>
                    <AiOutlineClose/>
                </div>
            </div>
            <div className="sidebar2">
                <div className="sidebar3">
                    <div onClick={() => props.handleClick(props.homeRef)}  className="sidebar4">Home</div>
                    <div onClick={() => props.handleClick(props.aboutRef)} className="sidebar5">About</div>
                    <div onClick={() => props.handleClick(props.galleryRef)} className="sidebar6">Patient Gallery</div>
                    <div className="sidebar7">Blog</div>
                    <hr />
                    <div className="sidebar8">
                        <a href="tel: 9108775075">Enquire Now</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar