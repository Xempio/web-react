import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, height } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import vector from '../../public/Vector.png';
import group from '../../public/Group.png';


function Footer() {


    return (
        <>
            <section id="footer">
                <div className="container text-center mt-5">
                    <h5>Have you project in mind?</h5>
                    <h1>Let’s Make Something<br></br>
                    Great Together!</h1>
                    <div className="circle my-5 d-flex flex-column align-items-center justify-content-center">
                        <h4>CONTACT WITH US</h4>
                        <a href="#" className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faArrowUp} className="ps-3 circle-icon"></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="footer_text mb-5">
                        <span className="footer-txt"> <strong>XEST</strong> <br/> <strong>FOLIO</strong> </span>
                    </div>
                    <div className="row footer_icons">
                        <a className="icon" href="#">
                            <FontAwesomeIcon icon={faFacebook}  style={{height:"2rem"}}/>
                        </a>
                        <a className="icon" href="#">
                            <FontAwesomeIcon icon={faLinkedin} style={{height:"2rem"}}/>
                        </a>
                        <a className="icon" href="#">
                            <FontAwesomeIcon icon={faInstagram} style={{height:"2rem"}}/>
                        </a>
                        <a className="icon" href="#">
                            <img src={vector} alt="" width="58px" height="36px"/>
                        </a>
                        <a className="icon" href="#">
                            <img src={group} alt=""
                            width="36px" height="36px"/>
                        </a>
                    </div>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-between px-5 py-3">
                    <h5 className="footer-foot">
                        © 2023 Ideapeel Inc. All Rights Reserved
                    </h5>
                    <h5 className="footer-foot footer-foot-first">
                        Privacy Policy   |   Terms and Conditions
                    </h5>
                </div>
            </section>
        </>    
    )
}

export default Footer;