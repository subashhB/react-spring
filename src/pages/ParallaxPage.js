import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";

const ParallaxPage = () => {
  const ref = useRef();
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{ backgroundImage: `url(${land})`, backgroundSize: "cover" }}
        />
        <ParallaxLayer
        sticky={{start:0.9, end: 2.5}}
          style={{textAlign: 'center'}}
        >
          <img src={cat} alt="Skydiving Cat"/>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.1}
          speed={0.05}
          style={{fontSize: '0.3em'}}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Web Development was supposed to be fun.</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={()=>ref.current.scrollTo(0)}
        >
          <h2>Hello Visitor</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;
