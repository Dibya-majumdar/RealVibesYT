import { useEffect,useState } from "react";
import { ApiKey } from "../Api/youtubeApi";
import { Link } from "react-router-dom";
import { useCallback } from "react";

const SujjessitionVideo=({data1})=>{
    console.log(data1)  //it is printing unlimited times

    const [sujjestVideo,setsujjestVideo]=useState([]);
   
//    console.log(sujjestVideo[0]) //it is printing unlimited times

// const fetchfn= async ()=>{
//     const SujjestionApi=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId="+data1+"&type=video&maxResults=10&key="+ApiKey);
//     const jsondata=await SujjestionApi.json();
//     console.log(jsondata)
//     setsujjestVideo(jsondata.items)

// }
//     useEffect(()=>{
//         fetchfn();       
//     },[data1])  



    const fetchfn = useCallback(async () => {
        if (!data1) return; // Ensure the channelId exists
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${data1}&type=video&maxResults=20&key=${ApiKey}`
            );


            // const response = await fetch(
            //     `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${data1}&key=${ApiKey}`
            // );

            const jsondata = await response.json();
            setsujjestVideo(jsondata.items);
        } catch (error) {
            console.error("Error fetching suggestion videos:", error);
        }
    }, [data1]);

    useEffect(() => {
        fetchfn();
    }, [fetchfn]);



    return (
        <div>
            {
                sujjestVideo.length!=0 && (
                    // <div className="text-white">{sujjestVideo[0].snippet.channelId}</div>

                     sujjestVideo.map((el)=>{
                        return  (   
                         <div className=" flex  w-full h-full mb-2 gap-1">
           
                                <div className="w-40  ">
                                    {/* <Link to={"/"+el.id.videoId}> */}
                                        <img className="w-40 h-20 rounded-md" src={el.snippet.thumbnails.high.url} alt=""></img>
                                    {/* </Link> */}
       
                                </div>
                                <div className=" w-full  mt-2 ">
      
       
                                        <p className="font-semibold text-xs text-wrap ">{el.snippet.title}</p>
                                        <p className=" text-xs">{el.snippet.channelTitle}</p>
        
                                </div>
   
    

                        </div>
                      ) })
               
                )
            }

        </div>
    )
}
export default SujjessitionVideo;










// import { useEffect, useState, useCallback } from "react";
// import { ApiKey } from "../Api/youtubeApi";
// import { Link } from "react-router-dom";

// const SujjessitionVideo = ({ data1 }) => {
//     console.log(data1);
//     const [sujjestVideo, setsujjestVideo] = useState([]);

//     // Stable fetch function using useCallback
//     const fetchfn = useCallback(async () => {
//         if (!data1) return; // Ensure the channelId exists
//         try {
//             const response = await fetch(
//                 `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${data1}&type=video&maxResults=10&key=${ApiKey}`
//             );
//             const jsondata = await response.json();
//             setsujjestVideo(jsondata.items);
//         } catch (error) {
//             console.error("Error fetching suggestion videos:", error);
//         }
//     }, [data1]);

//     useEffect(() => {
//         fetchfn();
//     }, [fetchfn]);

//     return (
//         <div>
//             {sujjestVideo.length !== 0 && (
//                 <div className="w-full h-full flex">
//                     <Link to={`/${sujjestVideo[0]?.id}`}>
//                         <div className="w-full">
//                             <img
//                                 className="w-40 h-20 rounded-md"
//                                 src={sujjestVideo[0]?.snippet?.thumbnails?.high?.url}
//                                 alt=""
//                             />
//                         </div>
//                         <div className="flex gap-4 mt-2">
//                             <div>
//                                 <p className="font-semibold text-xs">{sujjestVideo[0]?.snippet?.title}</p>
//                             </div>
//                             <p className="ml-9">{sujjestVideo[0]?.snippet?.channelTitle}</p>
//                         </div>
//                     </Link>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SujjessitionVideo;
