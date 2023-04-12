import React from 'react'
import "./Home.css"
import SecFivOne from "./HomeST"
import SectionThree from "../Home/HomeSectionThree"
import video from "../videos/TCC_Website_Banner.mp4"
// import SecFivOne from "../Images/SectionFiveOne.svg"
const Home = () => {
  return (
    <div>
    <section className='section1'>
    <video src={video} autoPlay loop muted class="videoback"type='video/mp4' /> 
    <div className='content'>
      <h1 className=' heading heading1'>The Chameleon Club</h1>
      <h2 className='heading heading2'>UNLEASH YOUR TRUE COLORS IN A SAFE SPACE</h2>
     <div className='btn' >Join Now!</div>  
     </div>
    </section>
    {/* *******************Section 3 ****************** */}

    <SectionThree/>

{/* **********************SECTION 4 ******************* */}
{/* <SecFivOne/> */}


    {/* ************** SECTION FIVE  ****************** */}
    <section className="section5">
      {/* <p id='heading5'>TCC: More Than Just a Social Network</p> */}
      {/* <div className="secFivcontainer">
        <div>
        <img src={SecFivOne} alt="back" className="back-image" />
        <p className='secFivcontainer1' >Chameleoning Made Easy</p>
        <p className='secFivcontainer2'>We don't just accept differences, we celebrate them like a chameleon changing colors!</p>
        </div> */}
        {/* <div>
        <img src={SecFivOne} alt="back" className="back-image" />
        <p className='secFivcontainer1' >Chameleoning Made Easy</p>
        <p className='secFivcontainer2'>We don't just accept differences, we celebrate them like a chameleon changing colors!</p>
        </div>
        <div>
        <img src={SecFivOne} alt="back" className="back-image" />
        <p className='secFivcontainer1' >Chameleoning Made Easy</p>
        <p className='secFivcontainer2'>We don't just accept differences, we celebrate them like a chameleon changing colors!</p>
        </div> */}
      {/* </div> */}
    </section>
    </div>
  )
}

export default Home