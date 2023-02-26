import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './page/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Adduser from './user/Adduser';
import Edituser from './user/Edituser';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
        <Route exac path="/" element={<Home/>}/>
        <Route exac path="/adduser" element={<Adduser/>}/>
        <Route exac path="/edituser/:id" element={<Edituser/>}/>
       </Routes>
      </Router>
     
    </div>
  );
}

export default App;
