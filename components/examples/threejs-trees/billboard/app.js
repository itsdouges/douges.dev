import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { Color, MathUtils } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Geometry } from './geometry';

export default function App() {
  const [remap, setRemap] = useState(true);
  const [enabled, setEnabled] = useState(1.0);

  return (
    <>
      <Canvas style={{ position: 'absolute', inset: 0 }}>
        <Geometry enabled={enabled} remap={remap} />
        <OrbitControls />
        <PerspectiveCamera makeDefault far={2000} fov={60} near={0.1} position={[0, 0, 5]} />
        <gridHelper
          position={[-0.5, -0.5, 0]}
          rotation={[MathUtils.degToRad(-90), 0, 0]}
          args={[10, 10]}
        />
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
            <input type="checkbox" checked={remap} onClick={() => setRemap((prev) => !prev)} />
            Remap UVs
          </label>
        </div>
      </div>
    </>
  );
}
