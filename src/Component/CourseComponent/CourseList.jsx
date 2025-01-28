import React from 'react'
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css";
// Slick Theme CSS
import './carousel.css'
import CourseCard from './CourseCard';
import Testimonials from './Testomonial';

const CourseList = () => {
    const settings = {
        dots: true, // Enable dots navigation
        infinite: true, // Infinite loop
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable auto-play
        autoplaySpeed: 2000, // Auto-play interval (ms)
        arrows: true, // Show next/prev arrows
    };

    const images = [
        "https://media.geeksforgeeks.org/wp-content/uploads/20230926163338/Java-Full-Stack.png",
        "https://www.vcubesoftsolutions.com/wp-content/uploads/2021/11/PythonFullStackPackage.jpg",
        "https://www.rlogical.com/wp-content/uploads/2020/12/MERN.webp",
        "https://www.weblineindia.com/wp-content/uploads/2016/12/mean-stack-1.jpg",
    ];

    return (
        <>
            <marquee behavior="" direction="">
                <h1><i><u>Course Management System</u></i></h1>
            </marquee>
            <div className="carousel-container">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                        </div>
                    ))}
                </Slider>
            </div>
            <CourseCard />
            <Testimonials />
        </>

    );

}

export default CourseList