import React from 'react';
import "./Patients.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Patients = (props) => {
    function isMobileDevice() {
        return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent);
    };
    const images = [
        'https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/darkcirclecollage1.jpg?raw=true',
        'https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/dentalcollage.jpg?raw=true',
        'https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/Hair-Transplant-BeforeAfter.jpg?raw=true',
        'https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/haircollage1.jpg?raw=true',
        'https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/haircollage2.jpg?raw=true',
        'https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/pigmencollage.jpg?raw=true',
        'https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/pimplecollage.jpg?raw=true',
        'https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/wartcollage1.jpg?raw=true'
    ]
    const gallery = (image) => {
        return (
            <div className="patient4">
                <img src={image} alt="Image" width={300} />
            </div>
        );
    }
    if (isMobileDevice()) {
        return (
            <>
                <div ref={props.galleryRef} className="mob_patient">
                    <Carousel autoPlay={true} infiniteLoop={true}>
                        {images.map((image) => gallery(image))}
                    </Carousel>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div ref={props.galleryRef} className="patient">
                    <div className="patient1">Patient Gallery</div>
                    <div className="patient2">
                        <div className="patient3">
                            {images.map((image) => gallery(image))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Patients