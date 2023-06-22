import React from 'react';
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About2 from '../About2/About2';


const About = (props) => {
    AOS.init({ duration: 2000 });
    function isMobileDevice() {
        return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent);
    };
    
    if (isMobileDevice()) {
        return (
            <>
                <div ref={props.aboutRef} className="container">
                    <div data-aos="fade-down" className="item1">How We Care for You</div>
                    <div className="item2">
                        <div className="mob_item2_1">
                            <div className="item2_2">
                                <div data-aos="fade-left" className="face">

                                    <div className="face1">Face</div>
                                    <div className="face2">Unlock the secret to timeless beauty with our exceptional face treatments. Indulge in rejuvenating therapies that enhance skin health, restore radiance, and boost self-confidence. Experience the ultimate transformation and step into a world of unparalleled skincare excellence.</div>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="item2_3 extra_margin">

                                <img src="https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/facial2.jpg?raw=true" alt="Face" width={250} />
                            </div>
                        </div>
                    </div>
                    <div className="item3">
                        <div className="mob_item3_1">
                        <div className="item3_3">
                                <div data-aos="fade-left" className="hair">

                                    <div className="hair1">Hair</div>
                                    <div className="hair2">Experience the ultimate hair transformation at Yesthetics. Revitalize your locks, restore shine, and embrace luxurious, healthy hair. Our professional hair treatments will leave you feeling confident and ready to turn heads with your stunning mane.</div>
                                </div>
                            </div>
                            <div className="item3_2 extra_margin">
                                <img data-aos="fade-right" src="https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/hair2.jpg?raw=true" alt="Hair" width={250} />
                            </div>
                        </div>
                    </div>
                    <div className="item4">
                        <div className="mob_item4_1">
                            <div className="item4_2">
                                <div data-aos="fade-left" className="teeth">

                                    <div className="teeth1">Teeth</div>
                                    <div className="teeth2">Experience the ultimate hair transformation at Yesthetics. Revitalize your locks, restore shine, and embrace luxurious, healthy hair. Our professional hair treatments will leave you feeling confident and ready to turn heads with your stunning mane.</div>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="item4_3 extra_margin">
                                <img src="https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/teeth1.jpg?raw=true" alt="Teeth" width={250} />
                            </div>
                        </div>
                    </div>
                </div>
                <About2 />
            </>

        );
    }
    else {
        return (
            <>
                <div ref={props.aboutRef} className="container">
                    <div data-aos="fade-down" className="item1">How We Care for You</div>

                    <div className="item2">
                        <div className="item2_1">
                            <div className="item2_2">
                                <div data-aos="fade-left" className="face">

                                    <div className="face1">Face</div>
                                    <div className="face2">Unlock the secret to timeless beauty with our exceptional face treatments. Indulge in rejuvenating therapies that enhance skin health, restore radiance, and boost self-confidence. Experience the ultimate transformation and step into a world of unparalleled skincare excellence.</div>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="item2_3">

                                <img src="https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/facial2.jpg?raw=true" alt="Face" width={350} />
                            </div>
                        </div>
                    </div>
                    <div className="item3">
                        <div className="item3_1">
                            <div className="item3_2">
                                <img data-aos="fade-right" src="https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/hair2.jpg?raw=true" alt="Hair" width={350} />

                            </div>
                            <div className="item3_3">
                                <div data-aos="fade-right" className="hair">

                                    <div className="hair1">Hair</div>
                                    <div className="hair2">Experience the ultimate hair transformation at Yesthetics. Revitalize your locks, restore shine, and embrace luxurious, healthy hair. Our professional hair treatments will leave you feeling confident and ready to turn heads with your stunning mane.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item4">
                        <div className="item4_1">
                            <div className="item4_2">
                                <div data-aos="fade-left" className="teeth">

                                    <div className="teeth1">Teeth</div>
                                    <div className="teeth2">Experience the ultimate hair transformation at Yesthetics. Revitalize your locks, restore shine, and embrace luxurious, healthy hair. Our professional hair treatments will leave you feeling confident and ready to turn heads with your stunning mane.</div>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="item4_3">

                                <img src="https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/teeth1.jpg?raw=true" alt="Face" width={350} />
                            </div>
                        </div>
                    </div>
                </div>
                <About2 />
            </>
        )
    }

}

export default About