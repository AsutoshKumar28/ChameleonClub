import React from 'react'
import "./Home.css"
// import Background from "../Images/Background.svg"
import SecFivOne from "../Images/SectionFiveOne.svg"
const Home = () => {
  return (
    <div>
    <section className='section1'>
      <h1 className=' heading heading1'>The Chameleon Club</h1>
      <div className='heading3'>
      <h2 className='heading heading2'>UNLEASH YOUR TRUE COLORS IN A SAFE SPACE</h2>
<div className='btn' >Join Now!</div>
    {/* <img src={Background} alt="back" className="back-image" /> */}
    </div>
    </section>
    {/* ************** SECTION FIVE  ****************** */}
    <section className="section5">
      <p>TCC: More Than Just a Social Network</p>
      <div className="secFivcontainer">
        <div>
        <img src={SecFivOne} alt="back" className="back-image" />
        <p className='secFivcontainer1' >Chameleoning Made Easy</p>
        <p className='secFivcontainer2'>We don't just accept differences, we celebrate them like a chameleon changing colors!</p>
        </div>
        <div>
        <img src={SecFivOne} alt="back" className="back-image" />
        <p className='secFivcontainer1' >Chameleoning Made Easy</p>
        <p className='secFivcontainer2'>We don't just accept differences, we celebrate them like a chameleon changing colors!</p>
        </div>
        <div>
        <img src={SecFivOne} alt="back" className="back-image" />
        <p className='secFivcontainer1' >Chameleoning Made Easy</p>
        <p className='secFivcontainer2'>We don't just accept differences, we celebrate them like a chameleon changing colors!</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home