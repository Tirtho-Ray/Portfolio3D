import * as THREE from 'three';
const HeroLight = () => {
    return (
        <>
          <spotLight position={[10,10,1]} intensity={100}
          angle={1}
          penumbra={0.2}
          color="white"/>
          <spotLight position={[3,5,3]} intensity={40}
          angle={2}
          penumbra={0.2}
          color="green"/>
          <spotLight position={[1,5,5]} intensity={40}
          angle={2}
          penumbra={0.2}
          color="4cc9f0"/>
          <spotLight position={[-1,-5,5]} intensity={40}
          angle={0.5}
          penumbra={20}
          color="4cc9f0"/>
          <spotLight position={[-0,-10,1]} intensity={10}
          angle={0.5}
          penumbra={20}
          color="blue"/>
          <primitive 
          object={new THREE.RectAreaLight('#a259ff',8,2,4)}
          position={[0,10]}
          penumbra={[-Math.Pi/4,Math.Pi/4,0]}
          />
         
        </>
    );
};

export default HeroLight;