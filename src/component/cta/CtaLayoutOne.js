import React from 'react';
import { Link } from 'react-router-dom';


const CtaLayoutOne = () => {

    return (

        <div className="section call-to-action-area">
            <div className="container">
                <div className="call-to-action">
                    <div className="section-heading heading-light">
                        <span className="subtitle">Teklif Alın</span>
                        <h2 className="title">Bizimle çalışmak ister misiniz?</h2>
                        <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-large btn-fill-white">
                            Proje Teklifi
                        </Link>
                    </div>
                    
                </div>
            </div>
            <ul className="list-unstyled shape-group-9">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-12.png"} alt="Comments" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-13.png"} alt="Comments" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Comments" /></li>
                <li className="shape shape-5"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
                <li className="shape shape-6"><img src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"} alt="Comments" /></li>
                <li className="shape shape-7"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
            </ul>
        </div>
    )

}

export default CtaLayoutOne;