import { useDispatch } from "react-redux";
import { toggleState } from "../utilities/hamBurgerSlice";
import { useEffect, useState } from "react";
import { dosearch } from "../utilities/searching";
import { Link } from "react-router-dom";

const Navbar=()=>{


    const RemoveSujjestionDIV=()=>{
        setshowSujjestionDiv(false);
    }

    const [showSujjestionDiv,setshowSujjestionDiv]=useState(false);
const [Search,setsearch]=useState([]);
const [inputData,setinputData]=useState("");

     const searchApi=async ()=>{
        const data=await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+inputData);
        const jsonData=await data.json();
        // console.log(jsonData);
        setsearch(jsonData);
    }
useEffect(()=>{
    searchApi();
},[inputData]) //we want to call search api after changing in state .so that we use it


const dispatch=useDispatch();
const handleclick=()=>{
       
            dispatch(toggleState())
}
return (
    <div className="flex justify-between py-2 shadow-lg fixed mb-0 w-full h-16 bg-white z-10 pt-5" onClick={ ()=>RemoveSujjestionDIV()}>
        {/* Left Section with Hamburger Menu and YouTube Logo */}
        <div className="flex gap-4 ml-4" >
            <img 
                className="h-7" 
                src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png" 
                alt="HAMBURGER" onClick={handleclick}
            />
            <img 
                className="h-7" 
                src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" 
                alt="YouTube Logo" 
            />
        </div>

        {/* Middle Section with Search Input */}
        <div className="flex mr-32">
            <input 
                className="border border-zinc-300 w-[30rem] outline-none pl-5 py-1 text-xl rounded-l-full" 
                placeholder="search" value={inputData} onChange={(el)=>{
                    setinputData(el.target.value);
                    // console.log(inputData);
                    setshowSujjestionDiv(true)
                    }} 
                    //  onFocus={()=>{
                    //     setshowSujjestionDiv(true)
                    // }} 

                   
                   
                    />

            {
                inputData.length==0?   <button className="bg-zinc-300 rounded-r-full w-10 " onClick={()=>{
                    // dispatch(dosearch(inputData))
                               }}>
                                   🔍
                               </button>:<Link to={"/search"}><button className="bg-zinc-300 rounded-r-full w-10 h-full " onClick={()=>{
                                console.log(inputData)
                               setinputData("")
                    dispatch(dosearch(inputData))
                    // setinputData("")
                               }}>
                                   🔍
                               </button></Link>
            }
          
        </div>
        {  //after adding these error occurs before adding this there is no error 
            showSujjestionDiv==true &&  <div className="absolute ml-[30rem] mt-[44px] bg-white w-[33rem]  shadow-2xl rounded-lg pl-5 pt-5 min-h-0">
            {
                 Search.length!=0&& Search[1].map((el)=>{
                    return  <div className="flex my-2 gap-4" onClick={()=>{
                        // console.log(el)
                        setinputData(el);
                    }}  
                    // onBlur={()=>{               
                       
                    // }} 
                    
                         
                >
                    <img   className="w-6" src="https://static.vecteezy.com/system/resources/previews/000/633/173/original/clock-icon-symbol-sign-vector.jpg"></img>
                    {el} 
                     </div>
                   
                })
            }
            
                 
                 </div>
        }
        

        {/* Right Section with Icons and Logo */}
        <div className="flex gap-3 mr-4" onClick={ ()=>RemoveSujjestionDIV()}>
            <img 
                className="h-7" 
                src="https://tse4.mm.bing.net/th?id=OIP.quEjDRgVDUSsGriTtOLJvAHaHa&pid=Api&P=0&h=180" 
                alt="Profile" 
            />
            <div>logo</div>
        </div>
    </div>
);

}
export default Navbar

