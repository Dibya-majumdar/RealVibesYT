import { Link } from "react-router-dom";
const SearchVideoCard = ({ videos }) => {
// console.log(videos.id);

    const converttoString=(number)=>{
        if(number>=1000 && number<100000){
            let a= number/1000 ;
            return a.toFixed(1)+"k";
        }
        else if(number>=100000 && number<10000000 ){
            let a= number/100000 ;
            return a.toFixed(1)+"M";
        }
        else if(number>=10000000 && number<1000000000 ){
            let a= number/1000000 ;
            if(a.toFixed(1)==Math.floor(a)+".0"){
                return Math.floor(a)+"M";
            }else{

            
            return a.toFixed(1)+"M";
            }
        }
        else{
            return number;
        }
    }

  return (
    <div className="mb-7 w-[1270px] ">
      <Link to={"/" + videos.id + "/search"}>
        <div className="flex gap-3 mb-1 ">
            <div className=" w-[600px] h-[270px] rounded-2xl ">
                    <img  className="object-cover w-full h-full rounded-2xl " src={videos.snippet.thumbnails.standard.url} alt="imageofsearchcards  "></img>
            </div>
            <div className="flex-wrap w-[790px]">
                <h1 className=" font-medium text-lg">{videos.snippet.title}</h1>
                <p>{converttoString(videos.statistics.viewCount)}views</p>
                <div className="flex gap-2">
                            <div><img className="max-w-7 rounded-full overflow-hidden"   src={videos.snippet.thumbnails.standard.url} alt="default"></img></div>
                            <div>{videos.snippet.channelTitle}</div>
                </div>

            </div>
        </div>
      </Link>
    </div>
  );
};
export default SearchVideoCard;
