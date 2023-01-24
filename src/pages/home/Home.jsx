import React from 'react'
import Header from '../../components/Header/Header'
import './home.css'
import FAQs from './sections/FAQs'
import ProgramsSection from './sections/ProgramsSection'
import Testimonials from './sections/Testimonials'
import Values from './sections/Values'
const Home = () => {
  return (
    <div>
      <Header/>
      <ProgramsSection/>
      <Values/>
      <FAQs/>
      <Testimonials/>
    </div>
  )
}

export default Home