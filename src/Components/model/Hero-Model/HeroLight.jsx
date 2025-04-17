import * as THREE from 'three';
import React from 'react';

const HeroLight = () => {
  return (
    <>
      {/* Ambient Light - soft base lighting */}
      <ambientLight intensity={0.4} />

      {/* Key Light - main spotlight for focus */}
      <spotLight
        position={[5, 8, 10]}
        intensity={1.5}
        angle={0.3}
        penumbra={0.5}
        castShadow
        color={"#ffffff"}
      />

      {/* Fill Light - softens the shadows */}
      <directionalLight
        position={[-5, 5, 2]}
        intensity={0.6}
        color={"#a0a0ff"}
      />

      {/* Rim/Back Light - outlines the model from behind */}
      <spotLight
        position={[0, 5, -5]}
        intensity={1}
        angle={0.4}
        penumbra={1}
        color={"#4cc9f0"}
      />
    </>
  );
};

export default HeroLight;
