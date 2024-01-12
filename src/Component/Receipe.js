import React, {useState } from 'react';
import bg from '../Images/bg.webp';
// import cooking from '../Images/cooking.gif';
import { NavLink, useNavigate} from 'react-router-dom';

export default function Receipe() {

    const[inputValue, setInputValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleData=()=>{
        console.log(inputValue);
        if(inputValue.trim() !==''){
        setSearchQuery(inputValue);
        navigate('/SearchResult',{
        state: {
            data: inputValue,    
        }})   
    }else{
         console.log("Input value is empty")
        }
    }
  
    return (
        <div className='relative flex justify-center items-center h-screen'>

        <div className='bg-cover bg-center h-full w-full relative'   
        style={{ backgroundImage: `url(${bg})` }}>
        <div className='h-full w-full absolute top-0 left-0 bg-black opacity-75'></div>
        <div className='relative'>
        <div className='mt-40 ml-96 flex'>
        <input className='mt-12 ml-20' type="text" placeholder='Search Your Reciepe here' 
        value={inputValue} onChange={(e)=>setInputValue(e.target.value)}
        style={{height:"3rem", width:"25rem", border:"2px solid brown", borderRadius:"2rem", paddingLeft:"6rem"}}/>
        </div>
        
        <NavLink to= '/SearchResult'>
        <button className='mt-12 h-12 w-36 pl-1' onClick={handleData}
            style={{backgroundColor:"brown", color:"white", border:"2px solid brown", borderRadius:"10px", marginLeft:"37rem"}}>Search</button>
        </NavLink>
        </div>
        {/* <img src={cooking} alt="cooking" style={{position:"absolute", height:"14rem", right:"10rem", bottom:"5rem"}}/> */}
        </div>
      </div>
        
      )
    }
