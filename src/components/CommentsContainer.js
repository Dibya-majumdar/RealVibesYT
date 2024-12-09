import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { youtubeCommentsApi } from "../Api/youtubeApi";

const CommentsContainer=()=>{
    const [comment,setcomment]=useState([]);

    const commentAPI= async ()=>{
const data=await fetch(youtubeCommentsApi);
const jsonData= await data.json();
setcomment(jsonData.items);
// console.log(jsonData.items);
    }

useEffect(()=>{
    commentAPI();
},[])
    return(

        <div className="ml-20 ">
            <div className="font-bold text-2xl my-7">comments</div>
            {
                comment.length!=0 && (
                comment.map((el)=>{
                        return <CommentCard data={el}/>
                })
                )
            }
            
           
          
        </div>
    )

}
export default CommentsContainer;