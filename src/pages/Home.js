import React from 'react'
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import Profile from './Profile'; 


function Home() {
  const navigate = useNavigate()
  return (
    <div>  
      <div className='title' style={{backgroundImage:`url("parallax.jpg")`}}>
        <h1>Rung-MOd</h1>
        <button type='button' onClick={()=>navigate("/profile")}>start</button>
      </div>
      <div>
        <h2 className='main-title'>What is Rung-MOd</h2>
        <div>
          <p className='main-idea'>
            Rung-MOd is web for spend ur sheet for our friend
          </p>
        </div>
      </div>
      <div>
        <h2 className='main-title2'>How do we do</h2>
        <div>
          <p className='main-idea2'>
            RungMOd make for ...
          </p>
        </div>
        <div className='button'>
          <button type='button' onClick={()=>navigate("/profile")}>start</button>
          
        </div>
      </div>
    </div>
  )
}


export default Home


/*const Home  = () => {
    return <h1>Home</h1>;
};*/

