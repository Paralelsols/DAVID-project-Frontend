'use client'
import Image from "next/image";
import img from "../../assets/images/swap.webp";

import VideoSlider from "../videoSlider/VideoSlider";

export default function Swap() {

  const videos = [
    { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', title: 'Big Buck Bunny' },
    { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', title: 'Elephant Dream' },
    { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', title: 'For Bigger Blazes' },
    // Add more videos as needed
  ];

  return (
    <>
      <div className="bg-web3 max-w-screen-xl w-full z-20 top-0 left-0 mt-40 mb-40 text-white">
        
      <VideoSlider videos={videos} />
        {/* <div className="flex flex-col md:flex-row max-w-screen-xl w-[94%] items-center justify-between mx-auto pt-5 pb-5">
          <div className="md:w-1/2 p-4 order-2 md:order-2 text-center md:text-center ">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
              <span className="mangoname">MangoSWAP</span>
            </h1>
            <p className="text-sm md:text-sm lg:text-lg mt-9 mb-6">
              Your Gateway to DeFi Fruitful profits Explore decentralized
              finance with MangoSwap—earn, trade, and harvest rewards!
           </p>
            <a href="https://www.mangoswapp.com/" target="_blank">
              <button className="button" type="button">
                Explore MangoSwapp
              </button>
            </a>
          </div>
          <div className="md:w-1/2  md:order-1">
            <Image
              className="rotateAnimation"
              width={"100%"}
              height={"100%"}
              src={img}
              alt="heroimg"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
