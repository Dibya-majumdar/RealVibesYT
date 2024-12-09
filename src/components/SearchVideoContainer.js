import React from 'react'
import { youtubeApi } from "../Api/youtubeApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideosCard from './VideoesCard';
import SearchVideoCard from './SearchVideoCard';

const SearchVideoContainer = () => {
    const searchValue=useSelector((store)=>store.search.items[0])
    // console.log(searchValue)


  

    const[stateForFilter,setstateForFilter]=useState([]);

    const [val,setval]=useState([]);

    const fetchapi=async()=>{
        const data=await fetch(youtubeApi);
        const jsonData=await data.json();
        setval(jsonData.items);
        // console.log(val);

    }
useEffect(()=>{
fetchapi();
},[])

console.log(val);

useEffect(()=>{    //never use && wala inside useEffect.
    const op=val.length!=0 ?(
        val.filter((el)=>{
            return el.snippet.title.toLowerCase().includes(searchValue.toLowerCase());
        })
    ):[]
        setstateForFilter(op);       
        console.log(stateForFilter);
    
    
},[val,searchValue])//removed searchValue

return (
    <div className=''>
        {  stateForFilter.length!=0 &&
           stateForFilter.map((el)=>{
            return <SearchVideoCard  videos={el} />;
           
           })
            
        }
       
      
    </div>
  )
}

export default SearchVideoContainer






