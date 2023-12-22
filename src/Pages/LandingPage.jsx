import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import styled from "styled-components";
import WhyUs from '../Components/WhyUs/WhyUs';
import Plan from '../Components/Plan/Plan';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Footer from '../Components/Footer/Footer';
import Programs from '../Components/Programs/Programs';
import Testimonials from '../Components/Testimonials/Testimonials';

const LandingPageStyles = styled.div`

    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

function LandingPage() {
  return (
    <LandingPageStyles>
      <Header />
      <Hero />
      <Programs />
      <WhyUs />
      <Plan />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </LandingPageStyles>
  )
}

export default LandingPage
