import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import doggy from "../images/dog3.png"
import axios from 'axios'
import toast from 'react-hot-toast';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState(0);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    // Toggle the value of role between 0 and 1 when the checkbox changes
    setRole((prevRole) => (prevRole === 0 ? 1 : 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
            "Content-type": "application/json"
          }
        }
      const res = await axios.post('/api/user/register', {name, email, password, address, role}, config);
      if(res && res.data.success)
      {
          toast.success('Register Successfully');
          navigate('/login');
      } else {
          toast.error(res.data.message);
          }
      } catch (error) {
          console.log(error);
          toast.error('Something went wrong');
      }
    };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="font-poppins text-center">Create Account</div>
      <div className="flex flex-row border justify-stretch">
        {/* for image on LHS */}
        <div className="w-[50%]">
          <img src={doggy} width={"100%"} alt="" />
        </div>
        {/* for form on RHS */}
        <div className="flex items-center justify-center px-8 my-auto pr-7">
          <form onSubmit={handleSubmit} className="relative h-[100%] w-[100%] font-poppins">
            <div className="">
              <label htmlFor="name" className="form-label">
                Name: 
              </label>
              <input
                type="text"
                className="form-control border shadow-sm mx-2 my-4"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative justify-between">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email Address: 
                </label>
                <input type="email" className="form-control border shadow-sm mx-2 my-6"
                name="email" value={email} id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="font-extralight">
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
            <div className="">
                <label htmlFor="address">
                    Address: 
                </label>
                <input
                    type="text"
                    className="form-control border shadow-sm mx-2 my-6"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}   
                />
            </div>
            <div className="">
                <label htmlFor="roleCheckbox" className="form-label">
                  {/* Role:  */}
                </label>
                <input
                  type="checkbox"
                  id="roleCheckbox"
                  checked={role === 1}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2">Check If you want to join as Charity</span>
            </div>
            <div className="flex justify-between m-5">
            <button type="submit" className="bg-yellow-main rounded p-2">Register</button>
            <Link to="/login" className="bg-yellow-main rounded p-2">
                Already a user
            </Link>
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

export default Signup;
