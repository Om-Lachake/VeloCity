import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }
    
    setEmail('')
    setPassword('')
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-around">
      <h3 className="mx-auto text-xl mb-2">Login to your VeloCity account, User</h3>
      <div>
        <form onSubmit={(e)=>{submitHandler(e)}} className="mx-auto lg:w-2/5 md:w-3/5 w-full">
          <h3 className="text-xl mb-2">Email</h3>
          <input
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button type="submit" className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] lg:w-2/5 md:w-3/5 mx-auto flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
