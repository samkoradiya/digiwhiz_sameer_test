import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        nav:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>

        <h1 className='h1-hidden'>demo</h1>
        <Slider {...settings} className='banner'>
      
            <div className='slick-item'>
        
        <div className='img-box'>
            <img src="/images/item1.jpg" alt="image" />
            <div className="blend-mode-overlay"></div>
        </div>
        <div className='banner-row'>
        <div className='container'>
            <div className='banner-content'>
                <h2>We Do Big Things With Big Ideas </h2>
                <p>Talk To Our Experts and Get Your Dream Home Done. If you dream of designing 
a new home that takes full advantage  of the unique geography and 
views of land that you love</p>
                <div className='btn-row'>
                    <a href="#" className='primary-btn'>Explore now</a>
                </div>
            </div>
        </div>
        </div>
            </div>
            <div className='slick-item'>
        
        <div className='img-box'>
            <img src="/images/item1.jpg" alt="image" />
            <div className="blend-mode-overlay"></div>
        </div>
        <div className='banner-row'>
        <div className='container'>
            <div className='banner-content'>
                <h2>We Do Big Things With Big Ideas </h2>
                <p>Talk To Our Experts and Get Your Dream Home Done. If you dream of designing 
a new home that takes full advantage  of the unique geography and 
views of land that you love</p>
                <div className='btn-row'>
                    <a href="#" className='primary-btn'>Explore now</a>
                </div>
            </div>
        </div>
        </div>
            </div>
            <div className='slick-item'>
        
        <div className='img-box'>
            <img src="/images/item1.jpg" alt="image" />
            <div className="blend-mode-overlay"></div>
        </div>
        <div className='banner-row'>
        <div className='container'>
            <div className='banner-content'>
                <h2>We Do Big Things With Big Ideas </h2>
                <p>Talk To Our Experts and Get Your Dream Home Done. If you dream of designing 
a new home that takes full advantage  of the unique geography and 
views of land that you love</p>
                <div className='btn-row'>
                    <a href="#" className='primary-btn'>Explore now</a>
                </div>
            </div>
        </div>
        </div>
    </div>
     
        </Slider>
    </>
    
  )
}

export default Banner