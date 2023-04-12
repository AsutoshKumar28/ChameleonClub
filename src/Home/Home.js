import React from 'react'
import "./Home.css"
import SecFiv from "../Home/Sectionfive"
// import SectionThree from "./SectionThree/SectionFiveOne.svg"
import video from "../videos/TCC_Website_Banner.mp4"
// import SecF from "../Images/SectionFiveOne.svg"
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
    {/* *******************SECTION 2***************** */}


    {/* *******************Section 3 ****************** */}

    {/* <SectionThree/> */}

{/* **********************SECTION 4 ******************* */}
      {/* <SecFivOne/> */}


    {/* ************** SECTION FIVE  ****************** */}
    <section className="section5">
    <SecFiv/>
    </section>
    </div>
  )
}

export default Home