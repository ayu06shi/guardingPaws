import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import doggy from "../images/dog3.png"
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
          const config = {
            headers: {
                "Content-type": "application/json"
              }
            }

          const res = await axios.post('/api/user/login', {email, password}, config);
          if(res && res.data.success) {
            toast.success('Login Successfully')
            setAuth({
              ...auth,
              user: res.data.userToReturn,
              token: res.data.token
            })
            localStorage.setItem('auth', JSON.stringify(res.data));
            navigate('/')
          } else {
            toast.error(res.data.message)
          }
        }
        catch(error) {
          console.log(error);
          toast.error('Something went wrong')
        }
      }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="font-poppins text-center">Login</div>
      <div className="flex flex-row border justify-stretch max-h-screen">
        <div className="w-[50%]">
          <img src={doggy} width={"100%"} alt="" />
        </div>
        <div className="flex items-center justify-center px-8 my-auto pr-7">
          <form onSubmit={handleSubmit} className="relative h-[100%] w-[100%]
          font-poppins">
            <div className="py-4 justify-between">
              <label htmlFor="exampleInputEmail1" className="form-label py-4">
                Email Address: 
              </label>
              <input
                type="email"
                className="form-control border shadow-sm mx-2 my-6"
                name="email"
                value={email}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text font-light">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password: 
              </label>
              <input
                type="password"
                className="form-control border shadow-sm mx-2 my-6"
                name="password"
                value={password}
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-yellow-main rounded px-2">
              Submit
            </button>
            <div><Link to="/signup" className="bg-yellow-main rounded px-2">
              I'm a new user
            </Link></div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Login;
