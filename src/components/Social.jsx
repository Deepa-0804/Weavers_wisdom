import React from "react";
import Slider from "react-slick";
import { pricingOptions } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Social = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-40" id="social">
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-center mt-6 tracking-wide">
        நெசவாளர்கள் இணையம்:{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          ஒரு சக்திவாய்ந்த சமூகத்தை உருவாக்குதல்
        </span>
      </h2>
      <p className="text-center pt-5">
        Connecting Weavers Through Mobile: Building a Stronger Community
      </p>
      <Slider {...settings}>
        {pricingOptions.map((option, index) => (
          <div key={index} className="p-4 transition-transform duration-300 hover:scale-105">
            <div className="p-10 border border-neutral-500 rounded-xl bg-gradient-to-r from-orange-100 to-orange-180">
              <p className="text-xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <img
                src={option.price}
                alt={option.title}
                className="w-96 h-64 mb-4 rounded-lg"
              />
              <p className="text-sm text-black">{option.features}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Social;
