import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import AddWord from './Pages/AddWord';
import EditWord from './Pages/EditWord';


const Layout = () => {
  return(
    <div>
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
      element: <Home />,
      },
      {
        path: "/addword",
      element: <AddWord /> ,
      },
      {
        path: "/editword/:id",
      element: <EditWord /> ,
      },
    ]
  },
]);


function App() {

  return (
    <div className="App" >
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
