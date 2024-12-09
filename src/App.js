
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import {Provider} from "react-redux";
import reduxStore from "./utilities/reduxStore"
import {createBrowserRouter, Outlet} from "react-router-dom";
import InnerVideoCart from './components/InnerVideoCart';

import { RouterProvider } from 'react-router-dom';
import NavbarVideoCardContainer from './components/NavbarVideoCardContainer';
import SearchComponents from './components/SearchComponents';




function App() {
  return (
    <Provider store={reduxStore}>
    <>
  
   {/* <Navbar/> */}
   {/* <Outlet/> */}
   <RouterProvider router={appRouter}/>
  

    </>
    </Provider >
  )
    
  
}





export const appRouter=createBrowserRouter([
  {
      path:"/",
      element:
      <>
      <Navbar/>,
      <Body/>
      </>,
      children:[
        {
          path:"/",
          element:<NavbarVideoCardContainer/>
        },
        {
          path:"/:resId",
          element:<InnerVideoCart/>
        },
        {
          path:"/:resId/search",
          element:<InnerVideoCart/>
        },
        {
          path:"/search",
          element:<SearchComponents/>
        }
      
      ],
      errorElement:<h1>error</h1>
  }
])

export default App;






