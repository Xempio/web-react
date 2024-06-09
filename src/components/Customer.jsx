import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Customer() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 576);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const options = {
        loop: true,
        margin: 30,
        nav: true,
        stagePadding: 150,
        responsive: {
            0: {
                items: 0,
                stagePadding: 80
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    };

    return (
        <>
            <section id="customer" className="container">
                <div className="header-text text-center mb-5">
                    <h5>TESTIMONIALS</h5>
                    <h1>What our customers say</h1>
                </div>
                <div className="container mb-3">
                    {isMobile ? (
                        <div className='static-items'>
                            <div className='item mb-3'>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="../src/assets/icon.png" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <p className="lead">
                                            “Now, I can track my business activity more easily and have a greater understanding of how to operate the products.”
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="content pb-2">
                                            <img src="https://s3-alpha-sig.figma.com/img/79b4/ef89/786f08ce08e3d6f04c66c9bf5426949e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqKtQ8HcQ8e0SdLXo7~FB6hDIzHdqF3U75rmv8G75YAiiIQR30rBXscKyRLbsjAswxu0f--QEkv7j8Q4dfuoF8vziSkk-iZtijA2L3desYUsx3UHn90HstqCrYgehrygmBMVW1c8Q4YGdHmrJsdRC4vDIhkwk9h5b0Y9nT3JM8vsYURyWoeSbMf5~rcpq1VAZaW6-yZhoFSd5ItUHUgdlPWH-UtAq2mRtAkFXU9Xx8WHK-3XZRmq1KOyi8U57k2nMKlTP~hvwxGrMoTpXlkbvl4lWF7WYpYZ1SdH0lwLJn5098ruUm7WYYmZvOn~wMzYMf349EIPdsYy64s843fDJA__" alt="" className='rounded-circle' />
                                            <h4 className='ms-3'>Janne Cooper</h4>
                                        </div>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} className='text-warning me-2' />
                                            <h3>4.3</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item mb-3'>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="../src/assets/icon.png" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <p className="lead">
                                            “Now, I can track my business activity more easily and have a greater understanding of how to operate the products.”
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="content pb-2">
                                            <img src="https://s3-alpha-sig.figma.com/img/34af/7cbc/68e2053abdd51645d5fb62593a126d5b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBPbGgB71jkm-7ZWUH0uzmoHd8DaDsi4UCJcLX4quU2m1-NoqKPKgT5YomNcZ0hxDvpMsFZEWi9i7ZX4ry8~0AwNPZZMKnYK522QkWEmY2RJL5ipMwAddOcxzgJciknXfKP2XdO4uQ4YEVbQIvx50Gubs4SAbFgD~EYE5H88Ps71HWHRLglH-xZ9mWS9WCIrT6L15b3LHbxj~-I7s1ODolTmYCdbcjMrSCb-35MRraDKwAZA9OEakUdKxt-Tl7fQTc0qph5nFvnEoSY3b2socfaH36AJxRuGBfUem9OkiBMRngdpmeTfY5uau5tLO1Lifsdgm5OFXcFpzQpP8pacIg__" alt="" className='rounded-circle' />
                                            <h4 className='ms-3'>Cobocannaeru</h4>
                                        </div>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} className='text-warning me-2' />
                                            <h3>4.3</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="../src/assets/icon.png" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <p className="lead">
                                            “Now, I can track my business activity more easily and have a greater understanding of how to operate the products.”
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="content pb-2">
                                            <img src="https://s3-alpha-sig.figma.com/img/6761/1022/60824110a459a1b071ad0b672bdb8b66?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c2Xy~EuxG1GugUAp2XLF~Rtc7obovBOcd1~DoFsPXZoNcmQ6ZvQ4t30gPochPCau8qP0Xt0JX7a6ynEe~EN8hf0iLBCe62zkzcFyYOpy6OmpPyEVtymNvzfy8g22Pe-0ZCcBFx8GmX0hjYiPHpy2BFTz6P3g0BBMbDsXzZGO7c2xoA2akGT81cJUf-06-6YNJ7c8XSxKy-GQpOzLceOTNZM884AB44niRiIuLMOf1iL5u0MuaMc2rPFN38tmgSxxVqUc8IgQCayaQ~9iUCJrDLG90lbsGX5bes9Q0LPe48KfF4qx9J6UINQXfjn8wWPqQBsgKPm~D5w~OB9smMEXrw__" alt="" className='rounded-circle' />
                                            <h4 className='ms-3'>Berry Gunawan</h4>
                                        </div>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} className='text-warning me-2' />
                                            <h3>4.3</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <OwlCarousel className='owl-theme' {...options}>
                            <div className='item'>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="../src/assets/icon.png" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <p className="lead">
                                            “Now, I can track my business activity more easily and have a greater understanding of how to operate the products.”
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="content pb-2">
                                            <img src="https://s3-alpha-sig.figma.com/img/79b4/ef89/786f08ce08e3d6f04c66c9bf5426949e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqKtQ8HcQ8e0SdLXo7~FB6hDIzHdqF3U75rmv8G75YAiiIQR30rBXscKyRLbsjAswxu0f--QEkv7j8Q4dfuoF8vziSkk-iZtijA2L3desYUsx3UHn90HstqCrYgehrygmBMVW1c8Q4YGdHmrJsdRC4vDIhkwk9h5b0Y9nT3JM8vsYURyWoeSbMf5~rcpq1VAZaW6-yZhoFSd5ItUHUgdlPWH-UtAq2mRtAkFXU9Xx8WHK-3XZRmq1KOyi8U57k2nMKlTP~hvwxGrMoTpXlkbvl4lWF7WYpYZ1SdH0lwLJn5098ruUm7WYYmZvOn~wMzYMf349EIPdsYy64s843fDJA__" alt="" className='rounded-circle' />
                                            <h4 className='ms-3'>Janne Cooper</h4>
                                        </div>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} className='text-warning me-2' />
                                            <h3>4.3</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="../src/assets/icon.png" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <p className="lead">
                                            “Now, I can track my business activity more easily and have a greater understanding of how to operate the products.”
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="content pb-2">
                                            <img src="https://s3-alpha-sig.figma.com/img/34af/7cbc/68e2053abdd51645d5fb62593a126d5b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBPbGgB71jkm-7ZWUH0uzmoHd8DaDsi4UCJcLX4quU2m1-NoqKPKgT5YomNcZ0hxDvpMsFZEWi9i7ZX4ry8~0AwNPZZMKnYK522QkWEmY2RJL5ipMwAddOcxzgJciknXfKP2XdO4uQ4YEVbQIvx50Gubs4SAbFgD~EYE5H88Ps71HWHRLglH-xZ9mWS9WCIrT6L15b3LHbxj~-I7s1ODolTmYCdbcjMrSCb-35MRraDKwAZA9OEakUdKxt-Tl7fQTc0qph5nFvnEoSY3b2socfaH36AJxRuGBfUem9OkiBMRngdpmeTfY5uau5tLO1Lifsdgm5OFXcFpzQpP8pacIg__" alt="" className='rounded-circle' />
                                            <h4 className='ms-3'>Cobocannaeru</h4>
                                        </div>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} className='text-warning me-2' />
                                            <h3>4.3</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="../src/assets/icon.png" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <p className="lead">
                                            “Now, I can track my business activity more easily and have a greater understanding of how to operate the products.”
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="content pb-2">
                                            <img src="https://s3-alpha-sig.figma.com/img/6761/1022/60824110a459a1b071ad0b672bdb8b66?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c2Xy~EuxG1GugUAp2XLF~Rtc7obovBOcd1~DoFsPXZoNcmQ6ZvQ4t30gPochPCau8qP0Xt0JX7a6ynEe~EN8hf0iLBCe62zkzcFyYOpy6OmpPyEVtymNvzfy8g22Pe-0ZCcBFx8GmX0hjYiPHpy2BFTz6P3g0BBMbDsXzZGO7c2xoA2akGT81cJUf-06-6YNJ7c8XSxKy-GQpOzLceOTNZM884AB44niRiIuLMOf1iL5u0MuaMc2rPFN38tmgSxxVqUc8IgQCayaQ~9iUCJrDLG90lbsGX5bes9Q0LPe48KfF4qx9J6UINQXfjn8wWPqQBsgKPm~D5w~OB9smMEXrw__" alt="" className='rounded-circle' />
                                            <h4 className='ms-3'>Berry Gunawan</h4>
                                        </div>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} className='text-warning me-2' />
                                            <h3>4.3</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="../src/assets/icon.png" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <p className="lead">
                                            “Now, I can track my business activity more easily and have a greater understanding of how to operate the products.”
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="content pb-2">
                                            <img src="https://s3-alpha-sig.figma.com/img/79b4/ef89/786f08ce08e3d6f04c66c9bf5426949e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqKtQ8HcQ8e0SdLXo7~FB6hDIzHdqF3U75rmv8G75YAiiIQR30rBXscKyRLbsjAswxu0f--QEkv7j8Q4dfuoF8vziSkk-iZtijA2L3desYUsx3UHn90HstqCrYgehrygmBMVW1c8Q4YGdHmrJsdRC4vDIhkwk9h5b0Y9nT3JM8vsYURyWoeSbMf5~rcpq1VAZaW6-yZhoFSd5ItUHUgdlPWH-UtAq2mRtAkFXU9Xx8WHK-3XZRmq1KOyi8U57k2nMKlTP~hvwxGrMoTpXlkbvl4lWF7WYpYZ1SdH0lwLJn5098ruUm7WYYmZvOn~wMzYMf349EIPdsYy64s843fDJA__" alt="" className='rounded-circle' />
                                            <h4 className='ms-3'>Janne Cooper</h4>
                                        </div>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} className='text-warning me-2' />
                                            <h3>4.3</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    )}
                </div>
            </section>
        </>
    );
}

export default Customer;
