import VideosCard from "./VideoesCard";
import { youtubeApi } from "../Api/youtubeApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const VideoContainer=()=>{

    //subscribing
    // const searchCards=useSelector((store)=>store.search.items);
    // const [searchState,setsearchState]=useState([searchCards])




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
// console.log(val);
    return(
       <div> 
        
        {
           
            val ==[] ? null: <div className="flex flex-wrap mt-20 ">
           


                {
                    val.map((el)=>{
                        return   <VideosCard  key={el.id} videos={el}/> 
           
                    })
                }
                                
           </div>
           
        }
       </div>  
      
    )
}
export default VideoContainer;