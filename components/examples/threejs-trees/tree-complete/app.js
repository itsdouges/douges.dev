import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Color, MathUtils } from 'three';
import { Suspense } from 'react';
import { Tree } from './tree';

export default function App() {
  return (
    <Canvas style={{ position: 'absolute', inset: 0 }} shadows>
      <Suspense fallback={null}>
        <Tree />

        <mesh name="ground" rotation={[MathUtils.degToRad(-90), 0, 0]} receiveShadow>
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial color={new Color('#3f6d21').convertLinearToSRGB()} />
        </mesh>

        <hemisphereLight color="#87CEEB" intensity={0.3} groundColor="#362907" />
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} color="#eef4aa" intensity={0.5} />

        <PerspectiveCamera far={2000} fov={60} makeDefault near={0.1} position={[0, 3, 6]} />
        <OrbitControls enableZoom={false} target={[0, 3, 0]} />
      </Suspense>
    </Canvas>
  );
}
