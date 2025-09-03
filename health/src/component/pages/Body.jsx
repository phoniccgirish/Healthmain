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
      {/* pt-16 = 64px padding for navbar */}
      <Canvas
        style={{ background: "white" }}
        camera={{ position: [0, 3, 8], fov: 60 }}
      >
        {/* Lights */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Load Model */}
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={2.0}>
            <Model path='/model.gltf' />
          </Bounds>
        </Suspense>

        {/* Controls: only Y-axis rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          target={[0, 2, 0]}
        />
      </Canvas>
    </div>
  );
}
