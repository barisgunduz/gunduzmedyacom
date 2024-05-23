import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ProcessOne from '../component/process/ProcessOne';
import AboutThree from '../component/about/AboutThree';
import AboutFour from '../component/about/AboutFour';
import AboutFive from '../component/about/AboutFive';


const AboutUs = () => {

    return (
        <>
            <SEO title="Hakkımızda" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerOne
                    title="Eğlence yaratıcılığı teşvik eder."
                    paragraph="Farklı geçmişlere sahip, dinamik ve hırslı bireylerden oluşan sıkı bağlı bir grup olarak, yapmamız gereken her işte en iyisi olma isteğimiz bizi bir arada tutan bağdır."
                />
                <AboutFour />
                <AboutThree />
                <AboutFive />
                <ProcessOne />
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default AboutUs;