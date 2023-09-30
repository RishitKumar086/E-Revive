import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Store from '../pages/Store'
import {Register} from '../pages/Register'
import {Login} from '../pages/Login'
import CreatePost from '../pages/CreatePost'
import ViewPost from '../pages/ViewPost'
import ViewMore from '../pages/ViewMore'




function MainRoutes() {
    return (
       <Router>
           <Route exact path="/">
               <Store/>
           </Route>
           <Route path="/register">
               <Register/>
           </Route>
           <Route path="/login">
               <Login/>
           </Route>
           <Route path="/create">
               <CreatePost/>
           </Route>
           <Route path="/view">
               <ViewPost/>
           </Route>
           <Route path="/viewmore">
               <ViewMore/>
           </Route>
         
           

           
       </Router>
    )
}

export default MainRoutes
