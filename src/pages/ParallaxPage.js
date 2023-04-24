import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

const ParallaxPage = () => {
    
  return (
    <div style={{display: 'flex',justifyContent: 'center', margin: 'auto'}}>
      <Parallax pages={4}>
        <ParallaxLayer speed={1}>
          <h1>Welcome to the Parallax Page.</h1>
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} offset={1}>
          <h1>Web Developmnet was supposed to be fun.</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default ParallaxPage