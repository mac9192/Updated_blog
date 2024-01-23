'use client'
import React, { useRef, useEffect, useState } from "react";
import Image from 'next/image'
import play from '../public/assets/icon-play1.svg'
 

interface myComponentProps {
  dictionary: any
}
 
const Header2: React.FC<myComponentProps> = ({dictionary}:{dictionary:any}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isButtonPressed, setButtonPressed] = useState<boolean>(false)

 
  console.log(isButtonPressed)
 
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative sticky lg:mt-[-117px] md:mt-[-138px]  ">

      {/*
      
    
      */}

      <div>
        { isButtonPressed ? (

              <div className= " sm:hidden md:block fixed w-full h-screen bg-black z-100 bg-opacity-95 md:p-[120px] mt-[px] absolute  z-[999]" >
       
     <div className="relative justfy  w-full pt-3 ...">
        <div className="relative mx-auto  w-1/6 ...">
        <div className="absolute top-0 left-[680px]    w-16  w-2/3 text-white  border-white text-center hover:text-2xl...">
          <button type="button" className="text-xl hover:text-2xl mb-2" onClick={() => setButtonPressed(!isButtonPressed) }>    
            Close Video
          </button>
          </div>
      </div>
        </div>
        <div className="w-full mx-auto relative">
          <iframe className="mx-auto w-full md:min-h-[550px] mt-[40px] sticky"   src="https://www.youtube.com/embed/F1O_Tqa38JQ?si=AK0Da9WrtqmpjBpb" title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
  
        </div>
   
      </div>
        ): null }
      </div>
 

      <video   className=" " autoPlay loop muted ref={videoRef}>
        <source src={'/assets/bgvideo-2.mov'}  />
      </video>
      <div className="absolute top-1/2 left-[300px] transform -translate-x-1/2 -translate-y-1/2 text-white   bg-logoBlue min-w-[500px] max-w-[600px] text-left text-5xl p-7 opacity-80 mt-4 font-extrabold sm:hidden md:block">
      <h1 className=" ">{dictionary.frontHeader.topLine} </h1>
      <p className="text-2xl mt-6">Atlanta Immigration Law and Personal Injury</p>
      <button type="button" className="text-xl hover:text-2xl mb-2" onClick={() => setButtonPressed(!isButtonPressed) }>    
          <div className="flex flex-row inline-block">
          <p>Play Full Video </p> 
          <Image src = {play} alt="/" width="30" height="50" priority={true} />
        
          </div>
        </button>
      
      {/*   
      
     <div className="grid-btn pt-7 space-x-5">
        <button className="btn" onClick={handlePlay}>
       Play
        </button>
        <button className="btn-pause" onClick={handlePause}>
          Pause
        </button>
      </div>
      */}
     

      </div>
    </div>
  );
};

export default Header2;