import { Sandpack } from '../sandpack';

export function Complete() {
  return (
    <Sandpack
      customSetup={{
        dependencies: {
          '@react-three/drei': '9.14.3',
          '@react-three/fiber': '8.0.27',
          three: '0.144.0',
          'three-custom-shader-material': '4.0.0',
        },
      }}
      options={{
        visibleFiles: ['/tree.js', '/foliage-material.js', '/vertex.glsl'],
        activeFile: '/tree.js',
      }}
      files={{
        '/foliage-material.js': `import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { Color, FrontSide, MeshStandardMaterial } from 'three';
import CustomShaderMaterial from 'three-custom-shader-material';
import vert from './vertex.glsl.js';

export function TreeFoliageMaterial() {
  const ref = useRef(null);
  const alphaMap = useTexture('https://faze.vercel.app/textures/shaders/foliage_alpha3.png');

  useFrame((_, delta) => {
    ref.current.uniforms.u_windTime.value += ref.current.uniforms.u_windSpeed.value * delta;
  });

  const uniforms = useMemo(
    () => ({
      u_effectBlend: { value: 1.0 },
      u_inflate: { value: 0.0 },
      u_scale: { value: 1.0 },
      u_windSpeed: { value: 2.0 },
      u_windTime: { value: 0.0 },
    }),
    []
  );

  return (
    <CustomShaderMaterial
      alphaMap={alphaMap}
      alphaTest={0.5}
      baseMaterial={MeshStandardMaterial}
      color={new Color('#3f6d21').convertLinearToSRGB()}
      ref={ref}
      uniforms={uniforms}
      vertexShader={vert}
      shadowSide={FrontSide}
    />
  );
}
`,
        '/vertex.glsl': `uniform float u_effectBlend;
uniform float u_inflate;
uniform float u_scale;
uniform float u_windSpeed;
uniform float u_windTime;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, -s, s, c);
  return m * v;
}

vec2 applyWind(vec2 offset) {
  // Get the Y normal which we will use to apply difference rotation speeds to emulate wind.
  float boundedYNormal = remap(normal.y, -1.0, 1.0, 0.0, 1.0);

  float posXZ = position.x + position.z;
  float power = u_windSpeed / 5.0 * -0.5;

  // Top facing normals will move faster than bottom facing normals.
  float topFacing = remap(sin(u_windTime + posXZ), -1.0, 1.0, 0.0, power);
  float bottomFacing = remap(cos(u_windTime + posXZ), -1.0, 1.0, 0.0, 0.05);
  float mixedValue = mix(bottomFacing, topFacing, boundedYNormal);

  return rotate(offset, mixedValue);
}

vec2 calcInitialOffsetFromUVs() {
  // Offset the xy position of each vertex by its UV value.
  // This requires every quad of the tree foliage to be uniformly
  // mapped over the entire UV map from bottom left to top right.
  vec2 offset = vec2(
    // Each UV value starts off from a value of [0, 1].
    // We remap it to [-1, 1] so it is nicely centered.
    remap(uv.x, 0.0, 1.0, -1.0, 1.0),
    remap(uv.y, 0.0, 1.0, -1.0, 1.0)
  );

  // Invert the vertex offset so it's positioned towards the camera.
  offset *= vec2(-1.0, 1.0);

  // Normalize and scale the offset (makes the foliage larger or smaller).
  offset = normalize(offset) * u_scale;

  return offset;
}

vec3 inflateOffset(vec3 offset) {
  // Optionally inflate the offset (moves the quads along the normal direction).
  return offset + normal.xyz * u_inflate;
}

void main() {
  vec2 vertexOffset = calcInitialOffsetFromUVs();

  vertexOffset = applyWind(vertexOffset);

  vec3 inflatedVertexOffset = inflateOffset(vec3(vertexOffset, 0.0));

  // Transform to world view space.
  vec4 worldViewPosition = modelViewMatrix * vec4(position, 1.0);

  // Apply the vertex offset to world view space
  worldViewPosition += vec4(mix(vec3(0.0), inflatedVertexOffset, u_effectBlend), 0.0);

  // Transform into clip space - we're done!
  csm_PositionRaw = projectionMatrix * worldViewPosition;
}
`,
        '/vertex.glsl.js': `const shader = \`uniform float u_effectBlend;
uniform float u_inflate;
uniform float u_scale;
uniform float u_windSpeed;
uniform float u_windTime;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, -s, s, c);
  return m * v;
}

vec2 applyWind(vec2 offset) {
  // Get the Y normal which we will use to apply difference rotation speeds to emulate wind.
  float boundedYNormal = remap(normal.y, -1.0, 1.0, 0.0, 1.0);

  float posXZ = position.x + position.z;
  float power = u_windSpeed / 5.0 * -0.5;

  // Top facing normals will move faster than bottom facing normals.
  float topFacing = remap(sin(u_windTime + posXZ), -1.0, 1.0, 0.0, power);
  float bottomFacing = remap(cos(u_windTime + posXZ), -1.0, 1.0, 0.0, 0.05);
  float mixedValue = mix(bottomFacing, topFacing, boundedYNormal);

  return rotate(offset, mixedValue);
}

vec2 calcInitialOffsetFromUVs() {
  // Offset the xy position of each vertex by its UV value.
  // This requires every quad of the tree foliage to be uniformly
  // mapped over the entire UV map from bottom left to top right.
  vec2 offset = vec2(
    // Each UV value starts off from a value of [0, 1].
    // We remap it to [-1, 1] so it is nicely centered.
    remap(uv.x, 0.0, 1.0, -1.0, 1.0),
    remap(uv.y, 0.0, 1.0, -1.0, 1.0)
  );

  // Invert the vertex offset so it's positioned towards the camera.
  offset *= vec2(-1.0, 1.0);

  // Normalize and scale the offset (makes the foliage larger or smaller).
  offset = normalize(offset) * u_scale;

  return offset;
}

vec3 inflateOffset(vec3 offset) {
  // Optionally inflate the offset (moves the quads along the normal direction).
  return offset + normal.xyz * u_inflate;
}

void main() {
  vec2 vertexOffset = calcInitialOffsetFromUVs();

  vertexOffset = applyWind(vertexOffset);

  vec3 inflatedVertexOffset = inflateOffset(vec3(vertexOffset, 0.0));

  // Transform to world view space.
  vec4 worldViewPosition = modelViewMatrix * vec4(position, 1.0);

  // Apply the vertex offset to world view space
  worldViewPosition += vec4(mix(vec3(0.0), inflatedVertexOffset, u_effectBlend), 0.0);

  // Transform into clip space - we're done!
  csm_PositionRaw = projectionMatrix * worldViewPosition;
}
\`;

export default shader;`,
        '/tree.js': `import { Clone, useTexture, useGLTF } from '@react-three/drei';
import { TreeFoliageMaterial } from './foliage-material';

export function Tree({ position, rotation }) {
  const tree = useGLTF('https://faze.vercel.app/mesh/tree.glb');
  const trunk = useTexture('https://faze.vercel.app/textures/shaders/trunk.png');

  return (
    <group name="tree" rotation={rotation} position={position}>
      <Clone
        receiveShadow
        castShadow
        object={tree.nodes.trunk}
        inject={<meshBasicMaterial map={trunk} />}
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
`,
        '/App.js': `
import { Canvas } from '@react-three/fiber';
import { Color } from 'three';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { MathUtils } from 'three';
import { Tree } from './tree';

export default function App() {
  return (
    <Canvas style={{ position: 'absolute', inset: 0 }} shadows>
      <Suspense fallback={null}>
        <Tree />

        <mesh name="ground" rotation={[MathUtils.degToRad(-90), 0, 0]} receiveShadow>
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial color={new Color('#3f6d21').convertLinearToSRGB()} />
        </mesh>

        <hemisphereLight color="#87CEEB" intensity={0.3} groundColor="#362907" />
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} color="#eef4aa" intensity={0.5} />

        <OrbitControls />
        <PerspectiveCamera
          makeDefault
          far={2000}
          fov={60}
          near={0.1}
          position={[0, 3, 5]}
        />
      </Suspense>
    </Canvas>
  );
}`,
      }}
    />
  );
}
