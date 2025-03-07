import { useState, useEffect } from "react";
import "../index.css";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const images = [hero1, hero2, hero3, hero4]; // Store images in an array

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSlideshowRunning, setIsSlideshowRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isSlideshowRunning) {
            intervalId = setInterval(() => {
                setCurrentImageIndex(
                    (prevIndex) => (prevIndex + 1) % images.length
                );
            }, 2000);
        }
        else{
            setIsSlideshowRunning(false);
        }

        return () => clearInterval(intervalId);
    }, [isSlideshowRunning]);

    return (
        <div className="slider">
            <ul className="slides">
                {images.map((image, index) => (
                    <li
                        key={index}
                        className={`slide ${
                            index === currentImageIndex ? "active" : ""
                        }`}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageSlider;
