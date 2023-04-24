import { animated, useSpring } from "@react-spring/web";
import React from 'react'

export default function GettingStarted() {
    const [springs, api] = useSpring(()=>({
        from: {x: 0, y:0, z:0},
    }))
    const handleClick = () =>{
        api.start({
            from: {
                x:0,
                y:0,
                z:0
            },
            to:{
                x:100,
                y:150,
                z: 150
            },
        })
    }
  return (
    <animated.div 
        onClick={handleClick}
        style={{
            width:80,
            height:80,
            background: '#ff6d6d',
            borderRadius: 8,
            ...springs,
        }}
    />
  )
}
