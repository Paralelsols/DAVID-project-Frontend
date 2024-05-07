import React from 'react'
import Slider from 'react-slick';

export const VideoCard = ({ videoSrc, title }) => {
    return (
      <div className="bg-black text-white p-4">
        <video style={{borderRadius:'20px'}} width="450" height="240" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mt-2">{title}</div>
      </div>
    );
  };
  

  const VideoSlider = ({ videos }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
        // className="container mx-auto px-4 py-8"
      <div >
        <Slider {...settings}>
          {videos.map((video, index) => (
            <VideoCard key={index} videoSrc={video.src} title={video.title} />
          ))}
        </Slider>
      </div>
    );
  };

export default VideoSlider