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
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}
    shadows
    gl={{ antialias: true }}
    >
     
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
// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import React, { Suspense } from "react";
// import { useMediaQuery } from "react-responsive";
// import { Room } from "./RoomModel";
// import HeroLight from "./HeroLight";

// const HeroExperience = () => {
//   const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
//   const isMobile = useMediaQuery({ query: "(max-width:768px)" });

//   return (
//     <Canvas shadows camera={{ position: [5, 5, 10], fov: 45 }}>
//   <ambientLight intensity={0.3} />

//   <directionalLight
//     castShadow
//     position={[5, 10, 5]}
//     intensity={0.8}
//     shadow-mapSize-width={1024}
//     shadow-mapSize-height={1024}
//   />

//   {/* 💡 Lamp Light */}
//   <pointLight
//     position={[3.1, 4.5, 4.8]} // same as your lamp_95 position
//     intensity={2.5}
//     distance={5}
//     decay={2}
//     color={'#fff9cc'} // warm yellowish lamp light
//     castShadow
//   />

//   {/* 💻 Laptop Light */}
//   <pointLight
//     position={[0.13, 4.6, 3.5]} // slightly above your laptop_8 position
//     intensity={1.5}
//     distance={3}
//     decay={2}
//     color={'#b3e5fc'} // cool bluish light from screen
//   />

//   <Suspense fallback={null}>
//     <Room scale={0.6} position={[0, -2, 0]} />
//   </Suspense>

//   <OrbitControls />
//   <mesh position={[1, 4, 18]}>
//   <sphereGeometry args={[0.05, 16, 16]} />
//   <meshBasicMaterial color="#fff9cc" toneMapped={false} />
// </mesh>
// </Canvas>

  
//   );
// };

// export default HeroExperience;
