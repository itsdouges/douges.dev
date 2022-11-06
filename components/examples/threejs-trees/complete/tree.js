import { Clone, useGLTF } from '@react-three/drei';
import { TreeFoliageMaterial } from './foliage-material';

export function Tree({ position, rotation }) {
  const tree = useGLTF('{ORIGIN}/static/tree.glb');

  return (
    <group name="tree" rotation={rotation} position={position}>
      <Clone
        receiveShadow
        castShadow
        object={tree.nodes.trunk}
        inject={<meshBasicMaterial color="brown" />}
      />
      <Clone
        receiveShadow
        castShadow
        object={tree.nodes.foliage}
        inject={<TreeFoliageMaterial />}
      />
    </group>
  );
}
