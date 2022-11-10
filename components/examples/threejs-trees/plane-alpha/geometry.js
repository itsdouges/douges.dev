import { Color, MeshStandardMaterial } from 'three';
import { useTexture } from '@react-three/drei';
import CustomShaderMaterial from 'three-custom-shader-material';
import vert from './vertex.glsl.js';

export function Geometry({ enabled, remap, normalize }) {
  const alphaMap = useTexture('{ORIGIN}/static/foliage_alpha3.png');

  const uniforms = {
    u_effectBlend: { value: enabled },
    u_remap: { value: remap ? 1.0 : 0.0 },
    u_normalize: { value: normalize ? 1.0 : 0.0 },
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
