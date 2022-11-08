import { Clone, useGLTF } from '@react-three/drei';
import vert from './vertex.glsl.js';
import frag from './fragment.glsl.js';

export function Tree({ enabled, remap }) {
  const tree = useGLTF('{ORIGIN}/static/tree.glb');
  const uniforms = {
    u_effectBlend: { value: enabled },
    u_remap: { value: remap ? 1.0 : 0.0 },
  };

  return (
    <group name="tree">
      <Clone object={tree.nodes.trunk} inject={<meshBasicMaterial color="black" />} />
      <Clone
        object={tree.nodes.foliage}
        inject={
          <shaderMaterial
            key={vert + frag + JSON.stringify(uniforms)}
            uniforms={uniforms}
            vertexShader={vert}
            fragmentShader={frag}
          />
        }
      />
    </group>
  );
}
