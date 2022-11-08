import { Sandpack } from '../../sandpack';
import appCode from '!!raw-loader!./app.js';
import treeCode from '!!raw-loader!./tree.js';
import vertexShaderCode from '!!raw-loader!./vertex.glsl';
import fragmentShaderCode from '!!raw-loader!./fragment.glsl';
import { origin } from 'lib/location';

export function NoAlphaTree() {
  return (
    <Sandpack
      customSetup={{
        dependencies: {
          '@react-three/drei': '9.14.3',
          '@react-three/fiber': '8.0.27',
          three: '0.144.0',
        },
      }}
      options={{
        visibleFiles: ['/tree.js', '/vertex.glsl'],
        activeFile: '/vertex.glsl',
      }}
      files={{
        '/App.js': appCode,
        '/vertex.glsl.js': `const shader = \`${vertexShaderCode}\`; export default shader;`,
        '/vertex.glsl': vertexShaderCode,
        '/fragment.glsl.js': `const shader = \`${fragmentShaderCode}\`; export default shader;`,
        '/fragment.glsl': fragmentShaderCode,
        '/tree.js': treeCode.replace(/\{ORIGIN\}/g, origin),
      }}
    />
  );
}
