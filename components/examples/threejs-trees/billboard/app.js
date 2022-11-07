import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Geometry } from './geometry';

export default function App() {
  return (
    <Canvas style={{ position: 'absolute', inset: 0 }} shadows>
      <Geometry />

      <OrbitControls />
      <PerspectiveCamera makeDefault far={2000} fov={60} near={0.1} position={[0, 3, 5]} />
    </Canvas>
  );
}
