"use client"
interface WindowProps{
title:string;
children:React.ReactNode;
defaultPosition:{top:number;left:number};
w:number;
h:number;
}

import React, { useState,useRef, Children } from "react";



const Window:React.FC<WindowProps>=({title,children,defaultPosition,w,h})=>{
// setting the variables that are gonna change on interaction

const [position,setPosition]=useState({top : defaultPosition.top,left: defaultPosition.left})
const [size,setSize]=useState({width:w,height:h});
const[highestZ,setHighestZ]=useState(1);
const windowRef= useRef<HTMLDivElement>(null);
const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();

    setHighestZ((prev) => prev + 1);
  
    const startX = e.clientX;
    const startY = e.clientY;
    const startTop = position.top;
    const startLeft = position.left;
  
    // Compute new position based solely on initial positions and current mouse coordinates
    const onMouseMove = (moveEvent: MouseEvent) => {
      setPosition({
        top: startTop + (moveEvent.clientY - startY),
        left: startLeft + (moveEvent.clientX - startX),
      });
    };
  
    const onMouseUp = () => {
  
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };
  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.width;
    const startHeight = size.height;
  
    const onMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);
      const newHeight = startHeight + (moveEvent.clientY - startY);
  
      setSize({
        width: newWidth > 150 ? newWidth : 150,
        height: newHeight > 100 ? newHeight : 100,
      });
    };
  
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };
  
  return (
    <div
      ref={windowRef}
      className="window absolute border-4 rounded-sm border-black shadow-[5px_5px_0px_black] bg-white overflow-hidden"
      style={{
        top: position.top,
        left: position.left+100,
        width: size.width,
        height: size.height,
        zIndex: highestZ,
      }}
    >
      {/* 🟢 Draggable Header */}
      <div
        className="cursor-grab bg-gray-800 text-white p-2"
        onMouseDown={handleMouseDown}
      >
        {title}
      </div>
  
      {/* Window Content */}
      <div className="p-4">{children}</div>
  
      {/* 🟢 Resizable Corner */}
      <div
        className="absolute bottom-0 right-0 w-4 h-4 bg-black cursor-se-resize"
        onMouseDown={handleResizeMouseDown}
      ></div>
    </div>
  );
    
}

export default Window;
