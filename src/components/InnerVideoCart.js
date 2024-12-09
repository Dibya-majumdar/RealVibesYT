import React from "react";
import { useParams } from "react-router-dom";

import { youtubeApi } from "../Api/youtubeApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { offalltime } from "../utilities/hamBurgerSlice";

import InnerVideoInfoLikeDislike from "./InnerVideoInfoLikeDislike";
import CommentsContainer from "./CommentsContainer";
import SujjessitionVideo from "./SujjessitionVideo";
import { useCallback } from "react";

import { ApiKey } from "../Api/youtubeApi";

const InnerVideoCart = () => {
 

  const [innerData, setinnerData] = useState([]);
  const dispatch = useDispatch();
  //closing permanently the sidebar
  useEffect(() => {
    dispatch(offalltime());
  }, []);

  //for fetching the api
  const [val, setval] = useState([]);

  const fetchapi = async () => {
    const data = await fetch(youtubeApi);
    const jsonData = await data.json();
    setval(jsonData.items);
    // console.log(val);
  };
  useEffect(() => {
    fetchapi();
  }, []);

 //for taking parameter from url
  const { resId } = useParams();
  // console.log(resId)
  

  useEffect(() => {
    if (val.length > 0 && resId) {
      const filteredData = val.filter((el) => el.id === resId);
      // setinnerData(filteredData.length > 0 ? filteredData[0] : null); // Set the first matched item
      setinnerData(filteredData[0]);
    }
  }, [val, resId]);
  console.log(innerData);






 
  return (
    <>
    <div className="flex gap-2">
      <div className="w-[900px] max-h[600px] ">
        <div className="ml-20 mt-8 rounded-xl overflow-hidden ">
          <iframe
            width="790"
            height="455"
            src={"https://www.youtube.com/embed/" + resId}
            
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        {/* <div>
        {innerData.length!=0 && innerData[0].snippet}

    </div> */}

        <div>
          {innerData.length != 0 && (
            <div className="ml-20">
              <h2 className=" mt-4 font-bold text-lg ">
                {innerData.snippet.title}
              </h2>
              <InnerVideoInfoLikeDislike data1={innerData}/>
            </div>
          )}
        </div>
        <CommentsContainer/>
      </div>
     

{/* //sujjestions ka div */}

      <div className=" h-full mt-8 ">
        <div className="h-[800px] w-[383px] ">
       <SujjessitionVideo data1={innerData?.snippet?.channelId} />  
       {/* <SujjessitionVideo data1={innerData?.snippet?.title} />  */}
        </div>
       
      </div>

      </div>
     
    </>
  );
};

export default InnerVideoCart;
