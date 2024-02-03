import "../src/components/style.css";
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { useEffect } from "react";
import './index.css'
import About from './screens/About';
import Process from './screens/Process';
import Lists from './screens/CharityLists';
import Contact from "./screens/Contact";
import CharityForm from "./screens/CharityForm";
import UserDonation from "./screens/UserDonation";
import CharityHis from "./screens/CharityHis";
// import Forum from "./screens/Forum/Forum";
// import Ask from "./screens/Forum/components/Ask";
import Donate from "./screens/Donate";
// 
// import Content from "./screens/discussion-forum/src/components/Content";
// import Content from "./screens/discussion-forum/src/components/Content";
// import CreateButton from "./screens/discussion-forum/src/components/CreateButton";
// import Navbar from "./screens/discussion-forum/src/components/Navbar";
// import Sidebar from "./screens/discussion-forum/src/components/Sidebar";
// import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "react-query";
// import Askquestion from "./screens/discussion-forum/src/components/Askquestion";
// import Register from "./";
// import Login from "./pages/Login";
import { useState } from "react";
import axios from "axios";
import React from "react";
import Forum from "./screens/Forum";
// import Chat from "./screens/discussion-forum/src/pages/Chat";
// import Myanswers from "./screens/discussion-forum/src/pages/Myanswers";
// import Explore from "./screens/discussion-forum/src/pages/Explore";
// import Notfound from "./screens/discussion-forum/src/components/Notfound";
// import { useDispatch, useSelector } from "react-redux";
// import { io } from "socket.io-client";
// import { addUsers } from "./screens/discussion-forum/src/context/onlineSlice";
// import Forum from "./screens/Forum";
// const queryClient = new QueryClient();
// import socket from "socket.io-client";

function App() {
 
  // const Layout = () => {
  //   const [users, setUsers] = useState([]);
  //   const dispatch = useDispatch();
  
  //   useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem("user"));
  //     if (!user) {
  //       window.location.href = "/login";
  //     }
  
  //     socket.connect();
  //     socket.on("connect", () => {
  //       console.log("socket connected");
  //     });
  //     socket.auth = user;
  
  //     socket.on("user-connected", (users) => {
  //       console.log("users", users);
  
  //       dispatch(addUsers(users));
  //     });
  
  //     socket.on("user-disconnected", (users) => {
  //       console.log("users", users);
  //       dispatch(addUsers(users));
  //     });
  
  //     const getUsers = async () => {
  //       const res = await axios.get(
  //         ""
  //       );
  //       setUsers(res.data);
  //     };
  //     getUsers();
  //   }, [socket]);
  
  //   return (
  //     <QueryClientProvider client={queryClient} contextSharing={true}>
  //       <div
  //         className="relative w-screen flex flex-col justify-center items-center 
  //       overflow-x-hidden bg-white dark:bg-[#32353F]"
  //       >
  //         <Navbar />
  //         <div
  //           className="w-full h-screen flex justify-center items-start px-4 
  //         md:px-12 pt-12 dark:bg-[#32353F]"
  //         >
  //           <Sidebar />
  //           <Outlet />
  //           <div
  //             className="right-section
  //           hidden md:block
  //           h-80 fixed z-10 top-24 right-28"
  //           >
  //             <CreateButton />
  //             <div
  //               className="mt-8  py-4 px-3 rounded-md flex
  //          flex-col items-start gap-5"
  //             >
  //               <h2 className="text-gray-600 font-bold text-start">Top Users</h2>
  //               {users.length > 0 &&
  //                 users.slice(0, 5).map((user, index) => {
  //                   console.log("user", user);
  //                   return (
  //                     <div className="flex items-center cursor-pointer">
  //                       <img
  //                         src={user?.profileImage}
  //                         alt="profile"
  //                         className="w-6 h-6 rounded-full mr-2"
  //                       />
  //                       <h3 className="text-xs">{user.name}</h3>
  //                     </div>
  //                   );
  //                 })}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </QueryClientProvider>
  //   );
  // }; 
  return (
    <div className='App'>
      {/* <Loader/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/process" element={<Process/>}/>
          <Route exact path="/lists" element={<Lists/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/form" element={<CharityForm/>}/>
          <Route exact path="/userhis" element={<UserDonation/>}/>
          <Route exact path="/charityhis" element={<CharityHis/>}/>
          {/* <Route exact path="/ask" element={<Ask/>}/> */}
          {/* <Route exact path="/forum" element={<Forum/>}/> */}
          <Route exact path="/donate" element={<Donate/>}/>
         {/* <Route exact path="/content" element={<Content/>}/> */}
          {/* <Route exact path="/layout" element={<Layout/>}/> */}
          <Route exact path="/forum" element={<Forum/>}/>

        </Routes>
      </Router>
    </div>
  );
}



export default App;