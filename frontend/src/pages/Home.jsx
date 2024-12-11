import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <div className="container lg:mt-10 mx-auto px-4 py-4 ">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
    {/* Left-side content */}
    <div
      className="w-full lg:w-3/5 h-[80vh] bg-red-400 mx-auto mt-5 lg:mt-0 flex lg:justify-center lg:items-center
        bg-cover bg-center overflow-hidden rounded
        lg:bg-[url('https://images.unsplash.com/photo-1569150134468-2d68f44f4083?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
        bg-[url('https://i.pinimg.com/736x/5d/0d/af/5d0daf8dcc135f7af1043229501c6820.jpg')]">
    </div> 
    {/* Right-side div */}
    <div className="w-full lg:w-2/5 pb-7 py-4 px-10 lg:pr-10 lg:mt-0">
      <h2 className="text-2xl font-bold flex items-center justify-center">Get Started with Velocity</h2>
      <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
        Continue
      </Link>
    </div>
  </div>
</div>

  );
};

export default Home;
