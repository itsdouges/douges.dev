import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { MathUtils } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Geometry } from './geometry';

export default function App() {
  const [remap, setRemap] = useState(true);
  const [normalize, setNormalize] = useState(true);
  const [enabled, setEnabled] = useState(1.0);

  return (
    <>
      <Canvas style={{ position: 'absolute', inset: 0 }}>
        <Geometry enabled={enabled} remap={remap} normalize={normalize} />
        <OrbitControls enableZoom={false} />
        <PerspectiveCamera makeDefault far={2000} fov={60} near={0.1} position={[0, 0, 5]} />
        <gridHelper rotation={[MathUtils.degToRad(-90), 0, 0]} args={[5, 5]} />
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
      </Canvas>

      <div style={{ position: 'absolute', bottom: 8, left: 8, fontSize: 12 }}>
        <div style={{ display: 'flex', alignItems: 'end' }}>
          <label style={{ color: 'rgb(68, 84, 111)' }}>
            Blend
            <br />
            <input
              min={0}
              max={1}
              step={0.1}
              type="range"
              value={enabled}
              onChange={(e) => setEnabled(e.target.value)}
            />
          </label>

          <label
            style={{
              color: 'rgb(68, 84, 111)',
              marginLeft: 8,
              marginBottom: 5,
              display: 'inline-block',
            }}>
            <input type="checkbox" checked={remap} onChange={() => setRemap((prev) => !prev)} />
            Remap UVs
          </label>

          <label
            style={{
              color: 'rgb(68, 84, 111)',
              marginLeft: 8,
              marginBottom: 5,
              display: 'inline-block',
            }}>
            <input
              disabled={!remap}
              type="checkbox"
              checked={remap ? normalize : false}
              onChange={() => setNormalize((prev) => !prev)}
            />
            Normalize
          </label>
        </div>
      </div>
    </>
  );
}
