import { useSpring, animated } from '@react-spring/web';
import React, {useState} from 'react'

const Toggle = () => {
    
    const [toggle, setToggle] = useState(false);
    const fade = useSpring({
        opacity: toggle? 1: 0
    })
  return (
    <div style={{width: '100%', minWidth: '480px'}}>
        <animated.h1 style={fade}>Hello, World!</animated.h1>
        <button onClick={()=> setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default Toggle