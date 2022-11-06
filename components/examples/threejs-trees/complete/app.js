import { Canvas } from '@react-three/fiber';
import { Color } from 'three';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { MathUtils } from 'three';
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

        <OrbitControls />
        <PerspectiveCamera makeDefault far={2000} fov={60} near={0.1} position={[0, 3, 5]} />
      </Suspense>
    </Canvas>
  );
}
