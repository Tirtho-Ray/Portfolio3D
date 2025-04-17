
const HeroLight = () => {
    return (
        <>
          <ambientLight intensity={0.4} />
               <directionalLight position={[10, 20, 10]} intensity={1} />   
        </>
    );
};

export default HeroLight;