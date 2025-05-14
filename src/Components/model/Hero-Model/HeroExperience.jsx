import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./RoomModel";
import HeroLight from "./HeroLight";
import Particles from "./Partical";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      shadows
      gl={{ antialias: true }}
    >
      <ambientLight intensity={1} />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={18}
        maxDistance={60}
        minPolarAngle={Math.PI / 10}
        maxPolarAngle={Math.PI / 0}
      />

      <HeroLight />
     
      <group
        scale={isMobile ? 1 : isTablet ? 1 : 0.98}
        position={
          isMobile ? [-0.8, -2.9, -0.8] : isTablet ? [0, -2, 0] : [0, -2.5, 0]
        }
        rotation={[0, -Math.PI / -13, 0]}
      >
        {/* position={[0,-0.35,0]} */}
        <Room />
      </group>
       <Particles count={180} />
    </Canvas>
  );
};

export default HeroExperience;
