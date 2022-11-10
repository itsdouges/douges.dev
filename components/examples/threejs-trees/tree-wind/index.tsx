import { Sandpack } from '../../sandpack';
import appCode from '!!raw-loader!./app.js';
import materialCode from '!!raw-loader!./foliage-material.js';
import treeCode from '!!raw-loader!./tree.js';
import vertexShaderCode from '!!raw-loader!./vertex.glsl';
import { origin } from 'lib/location';

export function TreeWind() {
  return (
    <Sandpack
      customSetup={{
        dependencies: {
          '@react-three/drei': '9.14.3',
          '@react-three/fiber': '8.0.27',
          'three-custom-shader-material': '4.0.0',
          three: '0.144.0',
        },
      }}
      options={{
        visibleFiles: ['/vertex.glsl', '/foliage-material.js'],
        activeFile: '/vertex.glsl',
      }}
      files={{
        '/App.js': appCode,
        '/foliage-material.js': materialCode.replace(/\{ORIGIN\}/g, origin),
        '/tree.js': treeCode.replace(/\{ORIGIN\}/g, origin),
        '/vertex.glsl.js': `const shader = \`${vertexShaderCode}\`; export default shader;`,
        '/vertex.glsl': vertexShaderCode,
      }}
    />
  );
}
