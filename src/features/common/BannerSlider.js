import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", width: "auto", height: "auto" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", width: "auto", height: "auto" }}
            onClick={onClick}
        />
    );
}
const BannerSlider = ({deskBanner1, deskBanner2, deskBanner3, mobBanner1, mobBanner2, mobBanner3 }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // autoplay:true,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const deskBanners = [deskBanner1, deskBanner2, deskBanner3];
    const mobBanners = [mobBanner1, mobBanner2, mobBanner3];


    return (
        <>
            <div className="home-banner-slider desktop-banner">
                <Slider {...settings}>
                    {deskBanners.map((product) => (
                        <div key={product}>

                            <div className="banner-slide-img" style={{ backgroundImage: `url(${product})` }}>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
            <div className="home-banner-slider mobile-banner">
                <Slider {...settings}>
                    {mobBanners.map((product) => (
                        <div key={product}>

                            <div className="banner-slide-img" style={{ backgroundImage: `url(${product})` }}>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default BannerSlider;