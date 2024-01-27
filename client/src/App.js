import "../src/components/style.css";
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import About from './screens/About';
import Process from './screens/Process';
import Lists from './screens/charityLists';
import Contact from "./screens/Contact";
// import Loader from "./components/Loader";

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
          {/* <Route exact path="/rehoming" element={<rehomingCentres/>}/> */}
          <Route exact path="/lists" element={<Lists/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          {/* <Route exact path="/forum" element={<Forum/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;