import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { MathUtils } from 'three';
import { Suspense, useState } from 'react';
import { Tree } from './tree';

export default function App() {
  const [remap, setRemap] = useState(true);
  const [normalize, setNormalize] = useState(true);
  const [enabled, setEnabled] = useState(1.0);

  return (
    <>
      <Canvas style={{ position: 'absolute', inset: 0 }} shadows>
        <Suspense fallback={null}>
          <Tree enabled={enabled} remap={remap} normalize={normalize} />
          <gridHelper
            position={[0, 3.5, 0]}
            rotation={[MathUtils.degToRad(-90), 0, 0]}
            args={[7, 7]}
          />
          <PerspectiveCamera far={2000} fov={60} makeDefault near={0.1} position={[0, 3, 7]} />
          <OrbitControls enableZoom={false} target={[0, 3, 0]} />
        </Suspense>
      </Canvas>

      <div style={{ position: 'absolute', bottom: 8, left: 8, fontSize: 12 }}>
        <div style={{ display: 'flex', alignItems: 'end' }}>
          <label style={{ color: 'rgb(68, 84, 111)' }}>
            Blend
            <br />
            <input
              min={0}
              max={1}
              style={{ width: 80 }}
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
