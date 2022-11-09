uniform float u_rotation;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float prevMin, float prevMax, float newMin, float newMax) {
  float t = inverseLerp(v, prevMin, prevMax);
  return mix(newMin, newMax, t);
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, -s, s, c);
  return m * v;
}


void main() {
  vec2 vertexOffset = vec2(
    // Each UV value starts off from a value of [0, 1].
    // We remap it to [-1, 1] so it is nicely centered.
    remap(uv.x, 0.0, 1.0, -1.0, 1.0),
    remap(uv.y, 0.0, 1.0, -1.0, 1.0)
  );

  // Normalize the offset so it stays within boundaries.
  vertexOffset = normalize(vertexOffset);

  vec4 worldViewPosition = modelViewMatrix * vec4(position, 1.0);

  vertexOffset = rotate(vertexOffset, u_rotation);

  worldViewPosition += vec4(vertexOffset, 1.0, 0.0);

  csm_PositionRaw = projectionMatrix * worldViewPosition;
}
