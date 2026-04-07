import { useState, useEffect } from "react";
import sprite from "../assets/SpaceRockSprite-sheet.png";
import data from "./SpaceRockSprite.json";

function SpaceRock({ increaseCount }) {

  let count = 0;
  const [frameIndex, setFrameIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // track width
  const frames = data.frames;

   useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {

    /*
    const interval = setInterval(() => {
      setFrameIndex(prev => (prev + 1) % frames.length);
    }, frames[frameIndex].duration);

    */
    //return () => clearInterval(interval);

  }, [frameIndex, frames]);

  function handleClickRock(){
    setFrameIndex(prev => (prev + 1) % frames.length);
    increaseCount();
  



  };

  const frame = frames[frameIndex].frame;

  const SIZEMOD = (windowWidth / 100) * .9;


  return (

      <div 
      className="spaceRock" 

      
      

      onClick={(handleClickRock) }
      style={{
        width: frame.w * SIZEMOD,
        height: frame.h * SIZEMOD,
        //alignSelf: "center",
        //marginLeft: "auto",
       // marginRight: "auto",


        backgroundImage: `url(${sprite})`,
        backgroundPosition: `-${frame.x * SIZEMOD}px -${frame.y * SIZEMOD}px`,
        backgroundSize: `
          ${data.meta.size.w * SIZEMOD}px 
          ${data.meta.size.h * SIZEMOD}px`,

        imageRendering: "pixelated",
        //transform: "scale(9)",
        transformOrigin: "center",
        cursor: "pointer",
        imageRendering: "pixelated",
        border: "1px solid red",
        display: "inline-block",
        alignSelf: "center",
        verticalAlign: "middle",
        justifyContent: "center",
        margin: "0 auto",

      }}
    />
  );
}

export default SpaceRock;