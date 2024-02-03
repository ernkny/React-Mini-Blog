import React, { useState, useEffect } from 'react';
import '../styles/Slider.css';
import "../styles/MyBlogsScreen.css";
import { Blog } from '../types/Blog';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface SliderProps {
  slides: Blog[]; 
  interval: number; 
}

const Slider: React.FC<SliderProps> = ({ slides, interval }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const truncateHtmlContent=(htmlContent:string, maxWords:number)=> {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const textContent = doc.body.textContent || "";
  
    const words = textContent.split(/\s+/);
    if (words.length > maxWords) {
      const truncatedText = words.slice(0, maxWords).join(" ") + "...";
      return truncatedText;
    } else {
      return htmlContent; 
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) =>
          prevIndex + 2 < slides.length ? prevIndex + 2 : 0
        );
      }
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className='slider-container'>
      <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='slider-wrapper' 
      style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
        {slides.map((slide, index) => {
          return (
            <div className='slide' key={index}>
              <Card.Group id="blog-card" className="d-flex justify-content-center" style={{height:"100%"}}>
                <Card className='card-box-shadow card-content-side slider-card'>
                  <Card.Content>
                    <Card.Header>{slide.Title}</Card.Header>
                    <Card.Meta>{slide.Author}</Card.Meta>
                    <Card.Description dangerouslySetInnerHTML={{ __html: truncateHtmlContent(slide.Detail, 20) }}></Card.Description>
                  </Card.Content>
                  <div className="link-container">
                    <Link color='blue' className="button-default btn-detail" target="_blank" to={`http://localhost:5173/BlogDetail/${slide.id}`}>Detail</Link>
                    <Link color='blue' className="button-default" target="_blank" to={`http://localhost:5173/BlogDetail/${slide.id}`}>Add Bookmark</Link>
                  </div>
                </Card>
              </Card.Group>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
