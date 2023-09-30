import React,{useEffect,useContext} from 'react';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';

import Posts from '../components/Posts/Posts';
import Footer from '../components/Footer/Footer';
import { Firebase } from '../firebase/config';
import { AuthContextStore } from '../context/AuthContextStore';

function Store(props) {
 const {setUser}=useContext(AuthContextStore)
  useEffect(()=>{
    
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      
    })
    
 
  },[setUser])
  
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Store;
 
