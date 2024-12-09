import { Link } from "react-router-dom";

const VideosCard=({videos})=>{
    console.log(videos)
    return(
        <div className="m-4 w-[392px] ">
            <Link to={"/"+videos.id}>
        <div className="w-[392px] h-[252px]">
            <img className=" rounded-lg mb-0 h-[240px] bg-red-700 w-full" src={videos?.snippet?.thumbnails?.standard?.url} alt=""></img>
            <div className="pl-1 rounded-md relative bottom-6 left-80 text-white bg-black/40 w-16">3:20:32</div>
         </div>
         <div className="flex   gap-4 mt-2 ">
            <div  className=" rounded-full "><img className="max-w-7 rounded-full" src="https://universemagazine.com/wp-content/uploads/2022/08/zm4nfgq29yi91-1536x1536-1.jpg" alt="logo"></img></div>
            
             <div><p className="font-semibold  ">{videos.snippet.title}</p> </div>
            
         </div>
         <p className="ml-9">{videos.snippet.channelTitle}</p>
         <div className="flex gap-2 ml-9">
            <p>{videos.statistics.viewCount} views</p>
            <p></p>
         </div>
         </Link>
     </div>
    )
}
export default VideosCard;

;
