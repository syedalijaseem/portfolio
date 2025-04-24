import { Suspense, useLayoutEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const GLTF_PATH = "./desktop_pc/scene.gltf?v=2";

// Preload on module load
useGLTF.preload(GLTF_PATH);

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF(GLTF_PATH);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 500px)").matches
      : false
  );
  useLayoutEffect(() => {
    const mql = window.matchMedia("(max-width: 500px)");
    const onChange = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Optionally clear cache on version bump
  // THREE.Cache.clear();

  const pixelRatio =
    typeof window !== "undefined" ? (window.devicePixelRatio > 1 ? 1.5 : 1) : 1;

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={pixelRatio}
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
