import { Link } from "react-router-dom";


const Sidebar=()=>{


 return (
    <>
     <div className="  w-52 mt-14 sticky shadow-md">
            <div className="my-5">
                <ul className="ml-10">
                <Link to={"/"}>   <li>Home</li> </Link>
                    <li>shorts</li>
                    <li>subscription</li>
                </ul>
            </div>
            <div className="border-t border-t-gray-950 ml-2">
                <div className="font-bold text-xl my-5">heading</div>
                <ul className="ml-10">
                    <li>History</li>
                    <li>Playlists</li>
                    <li>Your videoes</li>
                    <li>your courses</li>
                    <li>liked videoes</li>
                    <li>downloads</li>
                    <li>watch later</li>
                </ul>
            </div>
            <div className="border-t border-t-gray-950 ml-2">
                <div className="font-bold text-xl my-5">explore</div>
                <ul className="ml-10">
                    <li>trending</li>
                    <li>shopping</li>
                    <li>sports</li>
                    <li>gaming</li>
                    <li>film</li>
                    <li>film</li>
                    <li>contast</li>
                    <li>anything</li>
                    <li>live</li>
                </ul>
            </div>
            

        </div>
        
        </>
    )
}

export default Sidebar;