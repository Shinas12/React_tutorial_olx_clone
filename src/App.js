import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Route, useHistory} from 'react-router-dom'
import Post from './store/PostContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login'
import {AuthContext, FirebaseContext} from './store/FirebaseContext';
import AdminLogin from './Components/AdminLogin/AdminLogin';

import Create from './Pages/Create';
import View from './Pages/ViewPost'

import AdminHome from './Pages/AdminHome';
import AdminAdds from './Pages/AdminAdd'
function App() {
  const history = useHistory()
  const {user,setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect (()=>{
     firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
     })
}) 
  return (
    <div>
      <ToastContainer position='top-center'/>
      <Post>
      <Router>
        <Route exact path="/">
           <Home />
        </Route>


      <Route  path="/signup">
         <Signup/>
      </Route>


      <Route  path="/login">
          <Login/>
      </Route>


      <Route  path="/sellform">
       <Create/>
      </Route>

     
      <Route  path="/view">
      <View/>
      </Route>


      <Route exact path="/admin">
      <AdminLogin/>
      </Route>


      <Route  path="/adminDashboard">
      <AdminHome/>
      </Route>


      <Route path="/edit">
      <AdminAdds/>
      </Route>


      </Router>
      </Post>
    </div>
  );
}

export default App;
