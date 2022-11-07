uniform float u_effectBlend;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

vec2 calcInitialOffsetFromUVs() {
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

void main() {
  vec2 vertexOffset = calcInitialOffsetFromUVs();

  vec4 worldViewPosition = modelViewMatrix * vec4(position, 1.0);

  worldViewPosition += vec4(mix(vec3(0.0), vec3(vertexOffset, 0.0), u_effectBlend), 0.0);

  gl_Position = projectionMatrix * worldViewPosition;
}
