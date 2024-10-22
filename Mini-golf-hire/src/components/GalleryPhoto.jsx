import React from "react";
import golfball1 from "../assets/GalleryPhoto1.jpg";
import golfball2 from "../assets/GalleryPhoto2.jpg";
import golfball3 from "../assets/GalleryPhoto3.jpg";
import golfball4 from "../assets/GalleryPhoto4.jpg";
import golfball5 from "../assets/GalleryPhoto5.jpg";
import golfball6 from "../assets/GalleryPhoto6.jpg";
import golfball7 from "../assets/GalleryPhoto7.jpg";
import golfball8 from "../assets/GalleryPhoto8.jpg";
import golfball9 from "../assets/GalleryPhoto9.jpg";
import golfball10 from "../assets/GalleryPhoto10.jpg";
import golfball11 from "../assets/GalleryPhoto11.png";
import golfball12 from "../assets/GalleryPhoto12.jpg";
import golfball13 from "../assets/GalleryPhoto13.jpg";
import golfball14 from "../assets/GalleryPhoto14.jpg";
import golfball15 from "../assets/GalleryPhoto15.jpg";
import golfball16 from "../assets/GalleryPhoto16.jpg";
import golfball17 from "../assets/GalleryPhoto17.jpg";
import golfball18 from "../assets/GalleryPhoto18.jpg";

const Gallery = () => {
  const galleryItems = [
    { name: "DEAN BRADSHAW", image: golfball1 },
    { name: "JULIE DEVINE", image: golfball2 },
    { name: "CHUCK GUMPERT", image: golfball3 },
    { name: "EARL HAMILTON", image: golfball4 },
    { name: "SUZANNE BROOKER", image: golfball5 },
    { name: "SHARON MARSLAND", image: golfball6 },
    { name: "JEANE MYERS", image: golfball7 },
    { name: "JIM POWLAN", image: golfball8 },
    { name: "LOLLY SHERA", image: golfball9 },
    { name: "CHERYL D. MCCLURE", image: golfball10 },
    { name: "PENNY MICHEL", image: golfball11 },
    { name: "MATTHEW X. CURRY", image: golfball12 },
    { name: "MATTHEW X. CURRY", image: golfball13 },
    { name: "MATTHEW X. CURRY", image: golfball14 },
    { name: "MATTHEW X. CURRY", image: golfball15 },
    { name: "MATTHEW X. CURRY", image: golfball16 },
    { name: "MATTHEW X. CURRY", image: golfball17 },
    { name: "MATTHEW X. CURRY", image: golfball18 },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Gallery Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">
          Since its founding in 1980,{" "}
            <strong className="font-bold">MINI GOLF HIRE</strong>   has been a favorite destination for mini golf enthusiasts in Australia. Conveniently located near [Landmark], we showcase a fun and challenging course that appeals to players of all ages. In addition to hosting tournaments and special events, we provide a welcoming atmosphere for both regulars and newcomers alike.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto mb-4"
              />
              <p className="text-center text-gray-700 font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
