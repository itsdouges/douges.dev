import vert from './vertex.glsl';

export function Geometry() {
  const uniforms = {
    u_effectBlend: { value: 1.0 },
  };

  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      <customShaderMaterial uniforms={uniforms} vertexShader={vert} />
    </mesh>
  );
}
