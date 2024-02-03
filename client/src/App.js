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
<<<<<<< HEAD
import CharityForm from "./screens/CharityForm";
import UserDonation from "./screens/UserDonation";
import CharityHis from "./screens/CharityHis";
// import Forum from "./screens/Forum/Forum";
=======
import Form from "./screens/CharityForm";
import Donate from './screens/Donate'
import UserDonation from "./screens/UserDonation";
import CharityHis from "./screens/CharityHis";

>>>>>>> upstream/main
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