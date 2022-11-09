import { Color, MeshStandardMaterial } from 'three';
import { useTexture } from '@react-three/drei';
import CustomShaderMaterial from 'three-custom-shader-material';
import vert from './vertex.glsl.js';

export function Geometry({ rotation }) {
  const alphaMap = useTexture('{ORIGIN}/static/foliage_alpha3.png');

  const uniforms = {
    u_rotation: { value: rotation },
  };

  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      <CustomShaderMaterial
        alphaMap={alphaMap}
        alphaTest={0.5}
        baseMaterial={MeshStandardMaterial}
        color={new Color('#3f6d21').convertLinearToSRGB()}
        uniforms={uniforms}
        vertexShader={vert}
      />
    </mesh>
  );
}
