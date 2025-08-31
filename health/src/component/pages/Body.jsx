import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";

function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
}

export default function Body() {
  return (
    <div className='w-full h-screen pt-16'>
      {" "}
      {/* pt-16 = 64px padding for navbar */}
      <Canvas
        style={{ background: "white" }}
        camera={{ position: [0, 3, 8], fov: 60 }}
      >
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Bounds>
            <Model path='/model.glb' />
          </Bounds>
        </Suspense>
        {/* Controls: only Y-axis rotation */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          target={[0, 2, 0]}
        />
      </Canvas>
    </div>
  );
}
