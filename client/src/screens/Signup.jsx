import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import doggy from "../images/dog3.png"

function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    phone: "",
  });

  let navigate = useNavigate();
  const handleSubmit = async (e, res) => {
    e.preventDefault();
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
        phone: credentials.phone,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials !");
    } else {
      localStorage.setItem("token", json.authToken);
      navigate("/login");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
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
          <form onSubmit={handleSubmit} className="relative h-[100%] w-[100%]
          font-poppins">
            <div className="">
              <label htmlFor="name" className="form-label">
                Name: 
              </label>
              <input
                type="text"
                className="form-control border shadow-sm mx-2 my-4"
                name="name"
                value={credentials.name}
                onChange={onChange}
              />
            </div>
            <div className="relative justify-between">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email Address: 
                </label>
                <input type="email" className="form-control border shadow-sm mx-2 my-6"
                name="email" value={credentials.email} id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={onChange}
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
                    value={credentials.password}
                    id="exampleInputPassword1"
                    onChange={onChange}    
                />
            </div>
            <div className="">
                <label htmlFor="address">
                    Address: 
                </label>
                <input
                    type="text"
                    className="form-control border shadow-sm mx-2 my-6"
                    name="location"
                    value={credentials.location}
                    onChange={onChange}    
                />
            </div>
            <div className="flex justify-between">
              <Link to='#'>
            <button type="submit" className="bg-yellow-main rounded px-2">Submit</button>
            </Link>
            <Link to="/login" className="bg-yellow-main rounded px-2">
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
