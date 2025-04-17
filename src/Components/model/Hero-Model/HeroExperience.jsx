import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./RoomModel";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 20, 10]} intensity={1} />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={20}
        maxDistance={30}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        scale={isMobile ? 1 : isTablet ? 0.8 : 1}
        position={isMobile ? [0, -2.2, 0] : isTablet ? [0, -1.8, 0] : [0, -1.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
