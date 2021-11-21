import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Rsearch from "./Rsearch";



const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Subscribe to </p>
        <h1>Rupak kumar Home Page</h1>
      </section>
      
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Rupak k About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  const[img,setimg]=useState('');
  const setimage=(e)=>{
    setimg(e.target.value);
  }
  return (
    <>
      <Navbar />
  
      <section className="hero-section">
        <p>Welcome to Searchbar</p>
        {/* <h1>Rupak  Service Page</h1> */}
        <input type="text"placeholder="search anything" value={img} onChange={setimage}/>

    <Rsearch name={img}/>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Register yourself </p>
        NAME:<input type="text"placeholder="enter your name."/>
       MOBILE NO <input type="text"placeholder="enter your mobile number."/>
       EMAIL: <input type="text"placeholder="enter your email id."/><br/>
       <button>submit</button>
        
      </section>
   
    </>
  );
};

const App = () => {
  return (<>
  
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
    <Footer/>
    
    </>
    
  );
};

export default App;
