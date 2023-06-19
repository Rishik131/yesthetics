import React from 'react';
import "./Header.css";
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {
    
  return (
    <>
        <div className="header">
            <div className="header1">
                <div className="header4">
                    <div className="header5">
                        <Typewriter 
                            options={{
                                strings: ['We Care,<br/> About the Aura that you spread.'],
                                autoStart: true,
                                loop: true,
                                cursor:"",
                              }}
                            onInit={(typewriter)=>{
                                typewriter.typeString().deleteAll().start()
                            }}
                        />
                        {/* We Care,<br/> About the Aura that you spread. */}
                    </div>
                    {/* <div className="header6">About the Aura that you Spread.</div> */}
                </div>
            </div>
            <div className="header2">
                <svg className='header3'>
                    <path d="M 350 0 L 700 0 L 700 350 L 0 350 C 353 286 426 82 350 0" fill="#F7E9D7" fillOpacity={.5}/>
                    <path d="m 0 0 L 500 0 L 500 350 L 250 350 C 246 202 113 37 0 0" fill="#F7E9D7" fillOpacity={.5}/>
                </svg>
            </div>
        </div>
    </>
  )
}

export default Header;