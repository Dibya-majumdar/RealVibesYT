import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const CommentCard = ({data}) => {
    // console.log(data)
  return (
    <div className="flex mb-5 w-[900px] ml-5">
      <div>
        <img src= {data.snippet.authorProfileImageUrl} alt="user" className="w-10 rounded-full mt-2"></img>
      </div>
      <div className="ml-4">
        <div className="font-semibold text-sm">{data.snippet["authorDisplayName"] }</div>
        <div className="mb-1 mt-1 text-sm" dangerouslySetInnerHTML={{ __html:data.snippet.textDisplay  }}></div>
        <div className="flex w-32 gap-4 text-center">
          <div className="flex gap-2 h-5"> <BiLike className="h-7" />
          <p className=" text-center">{data.snippet.likeCount}</p>
          </div>
          <div>
          <BiDislike  className="h-7" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentCard;
