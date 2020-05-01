import React, { useRef, Suspense } from "react";
import { OrbitControls } from "drei";
import { Canvas, useThree, useFrame, Dom } from "react-three-fiber";
import lerp from "lerp";

const Fallback = () => (
  <Dom>
    <div className="text">Loading...</div>
  </Dom>
);

const Startup = () => {
  const { camera } = useThree();

  const ref = useRef();
  useFrame(() => {
    ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.01);
    camera.zoom = lerp(camera.zoom, 1.2, 0.05);
    if (Math.abs(camera.zoom - 100) > 0.001) camera.updateProjectionMatrix();
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        color="#0e0e0f"
        transparent
        opacity={0}
      />
    </mesh>
  );
};

const Scene = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Startup />
    <Suspense fallback={<Fallback />}>
      <Dom>
        <div className="center text">Your components here</div>
      </Dom>
    </Suspense>
    <OrbitControls />
  </Canvas>
);

export default Scene;
