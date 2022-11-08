import vert from './vertex.glsl.js';
import frag from './fragment.glsl.js';

export function Geometry({ enabled, remap, normalize }) {
  const uniforms = {
    u_effectBlend: { value: enabled },
    u_remap: { value: remap ? 1.0 : 0.0 },
    u_normalize: { value: normalize ? 1.0 : 0.0 },
  };

  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        key={vert + frag + JSON.stringify(uniforms)}
        uniforms={uniforms}
        vertexShader={vert}
        fragmentShader={frag}
      />
    </mesh>
  );
}
