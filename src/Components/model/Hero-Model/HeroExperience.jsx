import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./RoomModel";
import HeroLight from "./HeroLight";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
     
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={20}
        maxDistance={30}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLight />
      <group
        scale={isMobile ? 0.6 : isTablet ? 0.8 : 1}
        position={isMobile ? [0, -1.2, 0] : isTablet ? [0,-2.35,0] : [0, -2.5, 0]}
        rotation={[0, -Math.PI / -13, 0]}
      >
         {/* position={[0,-0.35,0]} */}
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
