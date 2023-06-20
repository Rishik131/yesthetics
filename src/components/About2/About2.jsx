import React from 'react';
import "./About2.css";

const About2 = () => {
    function isMobileDevice() {
        return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent);
      }
      if(isMobileDevice()){
        return(
            <>
                <div className="container1">
                    <div className="doctor1">
                        Dr. Sitanshu Singh
                    </div>
                    <div className="mob_doctor2">
                    <img src="https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/drimage.jpg?raw=true" alt="Doctor" width={200}/>
                    </div>
                    <div className="mob_doctor3">
                    <div className="doctor6">
                                    <div className="doctor7">Bachelor of Dental Surgery<br/>
        Manipal College of Dental Sciences, Manipal University, Manipal</div>
                                    <div className="doctor8">Post Graduate Diploma in Clinical Cosmetology<br/>
        Delhi Institute of Health Sciences, Delhi</div>
                                    <div className="doctor9">Fellowship in Maxillofacial Aesthetics<br/>
        International Academy of Aesthetics Training, Sweden</div>
                                </div>
                    </div>
                </div>
            </>
        )
      }
      else{
        return (
            <>
                <div className="container1">
                    <div className="doctor1">
                        Dr. Sitanshu Singh
                    </div>
                    <div className="doctor2">
                        <div className="doctor3">
                            <div className="doctor4">
                                <img src="https://github.com/Rishik131/yesthetics/blob/main/src/assets/images/drimage.jpg?raw=true" alt="Doctor" width={200}/>
                            </div>
                            <div className="doctor5">
                                <div className="doctor6">
                                    <div className="doctor7">Bachelor of Dental Surgery<br/>
        Manipal College of Dental Sciences, Manipal University, Manipal</div>
                                    <div className="doctor8">Post Graduate Diploma in Clinical Cosmetology<br/>
        Delhi Institute of Health Sciences, Delhi</div>
                                    <div className="doctor9">Fellowship in Maxillofacial Aesthetics<br/>
        International Academy of Aesthetics Training, Sweden</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
          )
      }
}

export default About2