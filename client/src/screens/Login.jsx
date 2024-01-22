import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import doggy from "../images/dog3.png"

function Login() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    let navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            })
        });

        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter valid credentials !");
        }
        else{
            localStorage.setItem("userEmail", credentials.email);
            localStorage.setItem("authToken", json.authToken);
            console.log(localStorage.getItem("authToken"))
            navigate("/signup");
        }
    };

    const onChange = (e) => {
        setCredentials ({...credentials, [e.target.classname]: e.target.value});
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
                value={credentials.email}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={onChange}
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
                value={credentials.password}
                id="exampleInputPassword1"
                onChange={onChange}
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
