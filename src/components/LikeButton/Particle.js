import { useSpring, animated } from "react-spring";
import React from "react";

const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;

//function takes a measure of angle which are to be set around
//the heart icon, at various distances
const Particle = ({ distance, angle, children }) => {
  //convert a number given in degrees to rad
  const Rads = convertDegreesToRadians(angle);

  //this is to convert the cartesian coordinates into polar ones around
  //the heart button
  const x0 = Math.cos(Rads) * distance;
  const y0 = Math.sin(Rads) * distance;

  //this animation will set it so that each particle will fade in and out
  //at equal distances
  const style = useSpring({
    transform: `translate(${x0}px, ${y0}px) scale(0)`,
    from: {
      transform: `translate(${x0}px, ${y0}px) scale(1)`,
    },
    config: {
      tension: 180,
      friction: 15,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default Particle;
