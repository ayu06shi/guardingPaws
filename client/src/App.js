import "../src/components/style.css";
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import './index.css'
import About from './screens/About';
import Process from './screens/Process';
import Lists from './screens/charityLists';
import Contact from "./screens/Contact";
import Form from "./screens/Form";
import UserDonation from "./screens/UserDonation";
import CharityHis from "./screens/CharityHis";
import Ask from "./screens/Forum/components/Ask";
// import Loader from "./components/Loader";

function App() {
  // useEffect(() => {
  //   const use = async () => {
  //     (await import('tw-elements-react')).default;
  //   };
  //   use();
  // }, []);
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
          <Route exact path="/form" element={<Form/>}/>
          <Route exact path="/userhis" element={<UserDonation/>}/>
          <Route exact path="/charityhis" element={<CharityHis/>}/>
          <Route exact path="/ask" element={<Ask/>}/>
          {/* <Route exact path="/forum" element={<Forum/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;