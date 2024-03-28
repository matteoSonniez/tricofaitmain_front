import React from 'react';
import Image1 from '@/img/home_image1.jpeg';
import Image2 from '@/img/home_image2.jpeg';
import Image3 from '@/img/home_image3.jpeg';
const Index = () => {
    return (
        <div className="w-full flex h-full bg-white">
            <div className="w-1/3 mr-1 ">
                <img src={Image1.src} className="w-full"></img>
            </div>
            <div className="w-1/3 ml-1 mr-1 ">
                <img src={Image3.src} className="w-full"></img>
            </div>
            <div className="w-1/3 ml-1">
                <img src={Image1.src} className="w-full"></img>
            </div>
        </div>
    );
}

export default Index;
