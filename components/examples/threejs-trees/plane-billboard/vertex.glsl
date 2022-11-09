uniform float u_effectBlend;
uniform float u_remap;
uniform float u_normalize;

varying vec2 v_uvs;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float prevMin, float prevMax, float newMin, float newMax) {
  float t = inverseLerp(v, prevMin, prevMax);
  return mix(newMin, newMax, t);
}

void main() {
  v_uvs = uv;

  vec2 vertexOffset = vec2(
    // Each UV value starts off from a value of [0, 1].
    // We remap it to [-1, 1] so it is nicely centered.
    remap(uv.x, 0.0, 1.0, -u_remap, 1.0),
    remap(uv.y, 0.0, 1.0, -u_remap, 1.0)
  );

  // Normalize the offset so it stays within boundaries.
  if (u_remap == 1.0) {
    vertexOffset = mix(vertexOffset, normalize(vertexOffset), u_normalize);
  }

  vec4 worldViewPosition = modelViewMatrix * vec4(position, 1.0);

  worldViewPosition += vec4(mix(vec3(0.0), vec3(vertexOffset, 1.0), u_effectBlend), 0.0);

  gl_Position = projectionMatrix * worldViewPosition;
}
