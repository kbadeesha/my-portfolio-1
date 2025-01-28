
import MyDetails from '@/app/components/MyDetails/MyDetails'
import Technologies from '@/app/components/Technologies/Technologies'
import React from 'react'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <Container>
      <MyDetails/>
      <Technologies/>
    </Container>
  )
}

export default Hero