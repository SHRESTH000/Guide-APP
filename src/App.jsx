import Home from './home/Home';
import { Route, Router, Routes }from "react-router-dom" 
import Hospital from './component/Hospital';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Map from './component/Map';
import About from './component/About';
import Temple from './component/Temple';
import Resturant from './component/Resturant';
import Fmous_Places from './component/Fmous_Places';
import Contact from './component/Contact';
import SearchPlace from './component/SearchPlace';
import Railway from './component/Railway';
import Mall from './component/Mall';
import { AuthProvider } from "./auth/AuthContext";
import { BsHospital } from 'react-icons/bs';


function App() {
  return (
    <AuthProvider>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
    <Route path='/hospital' element={<Hospital/>}></Route>
    <Route path='/railway' element={<Railway/>}></Route>
    <Route path='/temple' element={<Temple/>}></Route>
    <Route path='/map' element={<Map/>}></Route>
    <Route path='/mall' element={<Mall/>}></Route>
    <Route path='/resturant' element={<Resturant/>}></Route>
    <Route path='/famous' element={<Fmous_Places/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/searchplace' element={<SearchPlace/>}></Route>
    <Route path='/about' element={<About/>}></Route>
   
      </Routes>
    </AuthProvider>
  );
}

export default App;
