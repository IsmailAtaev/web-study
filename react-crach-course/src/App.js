import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import About from "./About";
import Footer from "./components/Footer";


export default function App() {
    return (<>
            <Router>
                <Navibar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </Router>
            <Footer/>
        </>
    );
}
