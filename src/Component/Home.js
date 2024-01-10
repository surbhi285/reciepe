import React from 'react';
import vegfruits from '../Images/vegfruits.jpg';
import { NavLink } from 'react-router-dom';


export default function Home(){
    return(
        <div className='relative flex justify-center items-center h-screen'>
        <div
          className='bg-cover bg-center h-screen w-full relative'
          style={{ backgroundImage: `url(${vegfruits})` }}
        >
          <div className='h-full w-full absolute top-0 left-0 bg-black opacity-75'></div>
          <div className='relative'>
            <h1 className='text-white text-7xl font-bold text-center pt-20'>What are you in the mood for?</h1>
            <h1 className='text-7xl font-bold text-center pt-20'style={{fontFamily:"Brush Script MT", color:"pink"}}>Reciepe App</h1>
             <NavLink to="Receipe" style={{textDecoration:"none"}}>
            <button className='text-sm text-white h-10 w-40 border border-white hover:bg-gray-800' 
            style={{fontFamily:"cursive", justifyContent:"center", marginLeft:"35rem", marginTop:"7rem"}} >
            <span className="inline-block">Let's get started</span>
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    )
};