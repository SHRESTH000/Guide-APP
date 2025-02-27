import React from 'react';
// import Place from './component/Place';

import Home from './home/Home';
import { Route, Routes }from "react-router-dom" 
import Choose1 from './choose/Choose1';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Temple from './component/Temple';
import About from './component/About';
import Resturant from './component/Resturant';
import Fmous_Places from './component/Fmous_Places';
import Contact from './component/Contact';

function App() {
    return (
       
    <>
   <div className='dark:bg-slate-900 dark:text-white'>
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/hospital' element={<Choose1/>}></Route>
    <Route path='/temple' element={<Temple/>}></Route>
    <Route path='/resturant' element={<Resturant/>}></Route>
    <Route path='/famous' element={<Fmous_Places/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>
</Routes></div>
    </>
    );
};


export default App;
