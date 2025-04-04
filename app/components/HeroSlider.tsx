// src/components/HeroSlider.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router";

// Import slide images
// import personalityDisorderImg from "../assets/slides/mirror-daughter-mother.jpg";
// import sexAddictionImg from "../assets/slides/mirror-son-father.jpg";
// import eatingDisorderImg from "../assets/slides/skinny-woman-eating.jpg";
// import selfHarmImg from "../assets/slides/We-Treat-Self-Harm-at-WD-Recovery-and-Wellness-Center-1.jpg";
// import alcoholismImg from "../assets/slides/alcoholism-addiction-white-overlay.jpg";
// import gamblingImg from "../assets/slides/We-Treat-Gambling-at-WD-Recovery-and-Wellness-Center.jpg";
// import bingeEatingImg from "../assets/slides/eating-disorder-inner-page-white-overlay.jpg";
// import bodyDysmorphicImg from "../assets/slides/Body-Dysmorphic-Disorder.jpg";

// Define slide types
interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

export default function HeroSlider() {
  // Define slides
  const slides: Slide[] = [
    // {
    //   id: 1,
    //   image: personalityDisorderImg,
    //   title: "PERSONALITY",
    //   subtitle: "Disorder",
    //   link: "/personality-disorders"
    // },
    // {
    //   id: 2,
    //   image: sexAddictionImg,
    //   title: "SEX",
    //   subtitle: "Addiction",
    //   link: "/sex-addiction"
    // },
    // {
    //   id: 3,
    //   image: eatingDisorderImg,
    //   title: "EATING",
    //   subtitle: "Disorders",
    //   link: "/eating-disorders"
    // },
    // {
    //   id: 4,
    //   image: selfHarmImg,
    //   title: "SELF HARM",
    //   subtitle: "Disorders",
    //   link: "/self-harm"
    // },
    // {
    //   id: 5,
    //   image: alcoholismImg,
    //   title: "ALCOHOL",
    //   subtitle: "Addiction",
    //   link: "/alcoholism"
    // },
    // {
    //   id: 6,
    //   image: gamblingImg,
    //   title: "GAMBLING",
    //   subtitle: "Addictions",
    //   link: "/gambling"
    // },
    // {
    //   id: 7,
    //   image: bingeEatingImg,
    //   title: "BINGE EATING",
    //   subtitle: "Disorder",
    //   link: "/eating-disorders"
    // },
    // {
    //   id: 8,
    //   image: bodyDysmorphicImg,
    //   title: "BODY DYSMORPHIC",
    //   subtitle: "Disorder",
    //   link: "/body-image-dysmorphic-disorder"
    // }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h3 className="slide-pretitle">We Treat</h3>
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-subtitle">{slide.subtitle}</h3>
            <p className="slide-tagline">We will help you achieve recovery</p>
            <div className="slide-buttons">
              <Link to="/contact" className="cta-button primary">Book A Free Appointment</Link>
              <Link to={slide.link} className="cta-button secondary">Learn More &gt;</Link>
            </div>
          </div>
        </div>
      ))}

      <div className="slider-controls">
        <button className="prev-button" onClick={prevSlide} aria-label="Previous slide">
          <span className="arrow-left"></span>
        </button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <button className="next-button" onClick={nextSlide} aria-label="Next slide">
          <span className="arrow-right"></span>
        </button>
      </div>
    </div>
  );
}