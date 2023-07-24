import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from "../../../assets/img/1.jpg";
import img2 from "../../../assets/img/2.jpg";
import img3 from "../../../assets/img/3.jpg";
import img4 from "../../../assets/img/4.jpg";
import img5 from "../../../assets/img/5.jpg";
import img6 from "../../../assets/img/6.jpeg";
// import img7 from "../../../assets/img/pic-7.jpeg";
// import img8 from '../../../assets/img/pic-8.jpeg';

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6];

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
        });
    }, []);

    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Gallery</h2>
                <p className="text-lg text-gray-500 mb-6">
                    Check out some of our amazing memories captured during the graduation ceremony.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-md"
                        data-aos="zoom-in"
                    >
                        <img
                            src={image}
                            alt={`Picture ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
