import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function TsParticles() {

    const particlesInit = useCallback(async engine => {      
      await loadFull(engine);
      }, []);
    
    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);
  return (
    <div>
<Particles
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}/>

    </div>
  )
}

export default TsParticles