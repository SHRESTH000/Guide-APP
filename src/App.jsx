import Home from './home/Home';
import { Route, Router, Routes }from "react-router-dom" 
import Choose1 from './choose/Choose1';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Temple from './component/Map';
import About from './component/About';
import Resturant from './component/Resturant';
import Fmous_Places from './component/Fmous_Places';
import Contact from './component/Contact';
import SearchPlace from './component/SearchPlace';
import { AuthProvider } from "./auth/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
    <Route path='/hospital' element={<Choose1/>}></Route>
    <Route path='/map' element={<Temple/>}></Route>
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
