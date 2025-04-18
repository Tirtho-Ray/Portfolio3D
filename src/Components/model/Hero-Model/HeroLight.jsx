
import * as THREE from 'three'
// import { useRef, useEffect } from 'react'

const HeroLight = () => {
//   const rectAreaLightRef = useRef()

//   useEffect(() => {
//     if (rectAreaLightRef.current) {
//       rectAreaLightRef.current.lookAt(0, 0, 0) 
//     }
//   }, [])

  return (
    <>
      {/* White Key Light */}
      <spotLight
        position={[10, 10, 1]}
        intensity={100}
        angle={1}
        penumbra={0.2}
        color="white"
        castShadow
      />

      {/* Green Accent Light */}
      <spotLight
        position={[3, 5, 3]}
        intensity={40}
        angle={2}
        penumbra={0.2}
        color="white"
      />

      {/* Cyan Accent Light */}
      <spotLight
        position={[1, 5, 5]}
        intensity={40}
        angle={2}
        penumbra={0.2}
        color="#4cc9f0"
      />

      {/* Backlight Cyan */}
      <spotLight
        position={[-1, -5, 5]}
        intensity={40}
        angle={0.5}
        penumbra={1}
        color="#4cc9f0"
      />

      {/* Blue Bottom Light */}
      <spotLight
        position={[0, -10, 1]}
        intensity={10}
        angle={0.5}
        penumbra={1}
        color="blue"
      />

      {/* RectAreaLight — Purple Overhead Glow */}
      <primitive
        object={new THREE.RectAreaLight('#a259ff', 8, 2, 4)}
        // ref={rectAreaLightRef}
        position={[0, 10, 0]}
      />
    </>
  )
}

export default HeroLight
