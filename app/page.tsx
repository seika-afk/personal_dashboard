"use client"
import Window from "@/components/Window"
import { useState } from "react";


export default function Home() {
const [contact,setContact]=useState(false)  
  const cli_activate=()=>{
setContact(true)



  }
  return (

    // Page 1-> home
<div className="  relative min-h-screen bg-cover p-3 bg-center" style={{ backgroundImage: "url('/pic1.jpg')" }}>
  <div className="absolute inset-0 bg-black  opacity-40"></div> {/* Dark overlay */}

{/* columns */}

<div className=" anton relative z-10 text-white flex justify-center items-center flex-row gap-4">
 
 {/* navbar */}
  <div className="flex justify-center items-center w-1/7 h-screen">
  <div className="w-[50px] flex flex-col gap-4 justify-center bg-[#2E66D2] h-[200px] p-2  border-4 border-black rounded-sm shadow-[6px_6px_0px_0px_black]">
  <button className="cursor-pointer bg-white text-black border-2 border-black px-2 py-1  shadow-[3px_3px_0px_0px_black] transition-all duration-200 hover:shadow-none ">
  
    H
  </button>
    <button  className="cursor-pointer bg-white text-black border-2 border-black px-2 py-1   hover:shadow-[3px_3px_0px_0px_black] transition-all duration-200" onClick={cli_activate}>
  
    C
  </button>
  </div>

  </div> 
  <div className=" w-4/7 h-screen">
  {/* skills box */}
 
{/* window component ,parsing title ,content,default position */}
<Window title="🔥 Skills" defaultPosition={{ top: 75, left: 200 }} w={450} h={300}>

  <p className=" cursor-pointer my-2">💻 <b>Web Development</b></p>
  <hr className="cursor-pointer border-black"></hr>

  <p className="cursor-pointer my-2">🤖 <b>Machine Learning</b></p>
  <hr className="border-black"></hr>

  <p className="cursor-pointer my-2">🧠 <b>Deep Learning</b></p>
  <hr className="border-black"></hr>

  <p className="cursor-pointer my-2">📊 <b>Data Structures & Algorithms</b></p>

</Window>


<Window title="Intro" defaultPosition={{ top:450, left: 200 }} w={450} h={180}>
  <p className="text-3xl font-extrabold my-3 tracking-wide drop-shadow-md">
    Gagan
  </p>
  <hr></hr>
  <p className="text-lg italic my-3 text-gray-700">"Character is power"</p>
</Window>



  </div>  
  <div className=" w-3/7 h-screen">
  
  
  
  <Window title=" 🛠️Projects" defaultPosition={{ top: 75, left: 800 }} w={350} h={300}>
  <p className="text-xl font-bold underline">Projects:</p>
  <ul className="mt-2 space-y-2">
    <li>🗄️ <strong>Database [C]</strong></li>
    <li>📊 <strong>KNN from Scratch</strong></li>
    <li>🌐 <strong>Quick-Stack [Full Stack]</strong></li>
    <li>🚢 <strong>Can You Survive Titanic?</strong></li>
    <li>📰 <strong>Fake News Prediction</strong></li>
  </ul>
</Window>

<Window title="💡Working On" defaultPosition={{ top: 450, left: 800 }} w={300} h={180}>
  <div className="p-3">
    <p>📖 Book[&quot;Coding&quot;]</p>
    <p>🧠 Deep Learning - Studying</p>
    <p>🤖 Machine Learning Projects</p>
    <p>⚡ Leet Coding</p>
  </div>
</Window>
{contact && (
  <Window title="📬 Contact Me" defaultPosition={{ top: 200, left: 450 }} w={250} h={250}>
    <div className="flex justify-center items-center flex-col gap-2 p-3">
      <p>🐙 Github: <a href="https://github.com/seika-afk" target="_blank" className="text-blue-500">click</a></p>
      <p>📧 Gmail: <a href="mailto:24bec036@nith.ac.in" className="text-blue-500">click</a></p>
    </div>
  </Window>
)}




  </div>  {/* Medium */}
</div>




</div>




     );
}
