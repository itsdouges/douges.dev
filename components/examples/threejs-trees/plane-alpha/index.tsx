import { Sandpack } from '../../sandpack';
import appCode from '!!raw-loader!./app.js';
import geometryCode from '!!raw-loader!./geometry.js';
import vertexShaderCode from '!!raw-loader!./vertex.glsl';
import { origin } from 'lib/location';

export function PlaneAlpha() {
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
        visibleFiles: ['/geometry.js', 'vertex.glsl'],
        activeFile: '/geometry.js',
      }}
      files={{
        '/App.js': appCode,
        '/vertex.glsl.js': `const shader = \`${vertexShaderCode}\`; export default shader;`,
        '/vertex.glsl': vertexShaderCode,
        '/geometry.js': geometryCode.replace(/\{ORIGIN\}/g, origin),
      }}
    />
  );
}
