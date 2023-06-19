import React from 'react';
import "./Patients.css"

const Patients = (props) => {
    const images = [
        'src/assets/images/darkcirclecollage1.jpg',
    'src/assets/images/dentalcollage.jpg',
    'src/assets/images/Hair-Transplant-BeforeAfter.jpg',
    'src/assets/images/haircollage1.jpg',
    'src/assets/images/haircollage2.jpg',
    'src/assets/images/pigmencollage.jpg',
    'src/assets/images/pimplecollage.jpg',
    'src/assets/images/wartcollage1.jpg'
]
    const gallery = (image) => {
        return (
            <div className="patient4">
                <img src={image} alt="Image" width={300}/>
            </div>
        );
    }
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

export default Patients