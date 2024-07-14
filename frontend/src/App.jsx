import "./index.css"
import Homepage from "./pages/Homepage/Homepage"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Listpage from "./pages/Listpage/Listpage";
import Navbar from "./components/Navbar/Navbar";
import Singlepage from "./pages/Singlepage/Singlepage";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
function App() {

  
  const router  = createBrowserRouter([
    {
      path:"/",
      element:<> <Navbar/> <Homepage/> </>
    },
    {
      path:"/List",
      element:<> <Navbar/> <Listpage/> </>
    },
    {
      path:"/:id",
      element:<> <Navbar/> <Singlepage/> </>
    },
    {
      path:"/Login",
      element:<> <Navbar/> <Login/> </>
    },
    {
      path:"/Profile",
      element:<> <Navbar/> <Profile/> </>
    },
  ]);

  return (

    <>
    
    <div className="layout">
    <RouterProvider router={router}/>
    </div>
    </>


  
  )
}

export default App
