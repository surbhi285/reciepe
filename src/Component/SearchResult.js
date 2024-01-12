import axios from "axios";
import poster from '../Images/poster.avif'
import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import {NavLink, useLocation} from 'react-router-dom';

function SearchResult(){
    const [result, setResult] = useState([]);
    const location = useLocation();
    console.log(location)

    async function getSearchList(query) {
      try {
        if(query){
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=b87b97c759664a23bb532c71f8facb2b&query=${query}`
        );
        if (response.data.results && response.data.results.length > 0) {
          console.log(response.data.results);
          setResult(response.data.results);
        } else {
          setResult([]);
        }
      }else{
        console.log("No query provided");
      }
      } catch (e) {
        console.log("error");
      }
    }
  
    useEffect(() => {
        console.log(location.state)
      const { state } = location;
      if (state && state.data) {
        getSearchList(state.data);
      }else{
        console.log("No search data is there")
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]); 
    if (!result || result.length === 0) {
        return <p>No result found</p>;
      }
  
    return (
      <div>
        <div className='bg-cover bg-center h-full w-full relative' 
        style={{ backgroundImage: `url(${poster})` }}>
        <div className="pt-5">
        <NavLink to="/Receipe">
        <button className=" flex flex-row justify-center items-center border-solid border-2 border-blue-400 h-10 ml-10 rounded-full 
        bg-blue-400 text-white text-lg font-bold w-28">
        <BiLeftArrowAlt className="mr-3 text-2xl"/> Back
        </button>
        </NavLink>
        </div>
        <div className="flex flex-col items-center justify-center pb-20">
        <h1 className="text-4xl font-bold">SEARCH RESULTS OF {(location.state.data).toUpperCase()}</h1>
        </div>
        {result?.length > 0 ? (
          <div className="flex flex-row flex-wrap justify-around items-center mb-2" >
            {result.map((data) => (
              <div key={data.id} className="flex flex-col items-center mb-4 ml-6 mt-10" style={{width: "300px", height: "300px"}}>
            <img src={data.image} alt="recipe" className="mb-2" style={{ width: "300px", height: "300px" }}/>
              <p className="text-lg font-bold">{data.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No result found</p>
        )}
      </div>
      </div>
    );
  }
  export default SearchResult;
