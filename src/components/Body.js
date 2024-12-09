import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import SelectNavbar from './SelectNav'
import VideoContainer from './VideoContainer'
import { useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';



const Body = () => {

// useEffect(()=>{
//   const url = 'https://yt-api.p.rapidapi.com/updated_metadata?id=Ii8O3K-54pA';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '9793e1d2c1msh2e8d8d31e3bacfep1be314jsnc7e49bad92ad',
// 		'x-rapidapi-host': 'yt-api.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// },[])





// useEffect(() => {
//   const fetchData = async () => {
//     const url = 'https://yt-api.p.rapidapi.com/trending?geo=US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '9793e1d2c1msh2e8d8d31e3bacfep1be314jsnc7e49bad92ad',
// 		'x-rapidapi-host': 'yt-api.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
//   };

//   fetchData();
// }, []);




  const selectToggle=useSelector((Store)=>Store.sidebarToggle.isopen);
// console.log(selectToggle);

  return (
    <>
    <div className='flex gap-2  '>
        <div className='m-0 sticky'>
        { selectToggle &&<Sidebar/>}
        </div>
        <div className=' mt-10 '>
            
           <Outlet/>
            
        </div>
        
    </div>
      
    </>
  )
}



export default Body
