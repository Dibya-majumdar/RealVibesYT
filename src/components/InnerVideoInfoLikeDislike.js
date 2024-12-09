import React from 'react'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { RiDownloadLine } from "react-icons/ri";
import { useState } from 'react';

const InnerVideoInfoLikeDislike = ({data1}) => {
    // console.log(data1);

    const [subscriber,setsubscriber]=useState(false);
    const[like ,setlike]=useState(false);
    const [dislike,setdislike]=useState(false);

    const converttoString=(number)=>{
        if(number>=1000 && number<100000){
            let a= number/1000 ;
            return a.toFixed(1)+"k";
        }
        else if(number>=100000  ){
            let a= number/100000 ;
            return a.toFixed(1)+"M";
        }
        else{
            return number;
        }
    }


  return (
    <div className="flex justify-between cursor-pointer ">
                <div className="flex h-12 gap-3 mt-2">
                  <div className="rounded-full bg-cyan-400  w-12 h-12 pl-2 pt-2">
                    logo
                  </div>
                  <div>
                    <div className="text-md mt-1 font-semibold">
                     {data1.snippet.channelTitle}
                    </div>
                    <div className="text-sm">11.1M subscribers</div>
                  </div>
                  <button className="bg-black text-white  w-24 rounded-3xl m-2 text-sm h-9 text-center     font-semibold  " onClick={()=>{
                    setsubscriber(!subscriber);
                  }}>
                    {subscriber == true? <p>subscribe</p>:<p>Unsubscribe</p>}
                   
                  </button>
                </div>
                <div className="flex gap-1">
                  <div className="flex w-36 h-10 rounded-3xl bg-gray-100 text-center pl-4 gap-3 mt-3">
                    <div className=" w-full flex  " onClick={()=>{
                        setlike(!like);
                        setdislike(false)
                    }}>
                        {like==true?<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXH9rFJxhpRTJVjpuCvIfK9arT8f0Ih2YVOw&s" alt="like" className="w-7 h-8 pt-2 mr-2    contrast-125"></img>: <BiLike className="w-7 h-full  "  />}
                     
                      <p className="pt-2">{converttoString(data1.statistics.likeCount)}</p>
                    </div>
    
                    <div className=" w-full   border-l-gray-300 border-l-2"  onClick={()=>{
                        setdislike(!dislike);
                        setlike(false)
                    }}>
                        {dislike==true?<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFzjJHGYVd3KZRGERHOOxRFxY9su8WvMorw&s" alt="like" className="w-7 h-8 pt-2 mr-2    contrast-125"></img>: <BiDislike className="w-7 h-full  "  />}
                      
                    </div>
                  </div>
                  <div className="flex w-28 h-10 rounded-3xl bg-gray-100 text-center pl-4 gap-1 mt-3">
                    <RiShareForwardLine className="h-10 size-7" />
                    <p className=" pt-2">Share</p>
                  </div>
                  <div className="flex w-36 h-10 rounded-3xl bg-gray-100 text-center pl-4 gap-1 mt-3">
                    <RiDownloadLine  className="size-7 h-10" />
                    <p className=" pt-2">Downloads</p>
                  </div>
                </div>
              </div>
      
    
  )
}

export default InnerVideoInfoLikeDislike
