import React, { useEffect, useState } from 'react';
import bg from '../Images/bg.jpg';
import cooking from '../Images/cooking.gif';
import axios from 'axios';
import { NavLink} from 'react-router-dom';
import SearchResult from './SearchResult';



export default function Receipe() {
    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState([]);
    

  
    async function getSearchList(query){
        try{
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b87b97c759664a23bb532c71f8facb2b&query=${query}`)
             if(response.data.results && response.data.results.length>0){
                console.log(response.data.results);
                setResult(response.data.results);
             }else{
                setResult([]);
             }
        }catch(e){
            console.log("error");
        }
    }
    useEffect(()=>{
        if(searchQuery !== ''){
        getSearchList(searchQuery);
        }
    },[searchQuery]);

    const handleSearch = ()=>{
        getSearchList(searchQuery);
       
    }
    return (
        <div className='relative flex justify-center items-center h-screen'>

        <div className='bg-cover bg-center h-full w-full relative' 
        style={{ backgroundImage: `url(${bg})` }}>

        <div className='mt-40 ml-96 flex'>

        <input className='mt-12 ml-20' type="text" placeholder='Search Your Reciepe here' 
          value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
           style={{height:"3rem", width:"25rem", border:"2px solid brown", borderRadius:"2rem", paddingLeft:"6rem"}}/>
          </div>
        <NavLink to= '/SearchResult'>
       
        <button className='mt-12 h-12 w-36 pl-1' onClick={handleSearch}
            style={{backgroundColor:"brown", color:"white", border:"2px solid brown", borderRadius:"10px", marginLeft:"37rem"}}>Search</button>
        </NavLink>
        <SearchResult data={result} /> 
        <img src={cooking} alt="cooking" style={{position:"absolute", height:"14rem", right:"10rem", bottom:"5rem"}}/>
        </div>
      </div>
        
      )
    }
