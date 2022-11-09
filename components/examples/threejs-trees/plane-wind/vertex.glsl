uniform float u_rotation;
uniform bool u_localSpace;
uniform bool u_viewSpace;
uniform bool u_offsetSpace;
uniform bool u_applyToOffset;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float prevMin, float prevMax, float newMin, float newMax) {
  float t = inverseLerp(v, prevMin, prevMax);
  return mix(newMin, newMax, t);
}

mat2 rotate2(float radians) {
  float s = sin(radians);
  float c = cos(radians);

  return mat2(
    c, -s,
    s, c
  );
}

mat3 rotationZ3(float radians) {
  float c = cos(radians);
  float s = sin(radians);

	return mat3(
    c, -s, 0,
    s, c, 0,
    0, 0, 1
  );
}

mat4 rotationZ4(float radians) {
  float c = cos(radians);
  float s = sin(radians);

	return mat4(
    c, -s, 0, 0,
    s, c, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  );
}

void main() {
  vec3 localPosition = position;

  if (u_localSpace) {
    localPosition *= rotationZ3(u_rotation);
  }

  vec2 vertexOffset = vec2(
    remap(uv.x, 0.0, 1.0, -1.0, 1.0),
    remap(uv.y, 0.0, 1.0, -1.0, 1.0)
  );

  vertexOffset = normalize(vertexOffset);

  vec4 worldViewPosition = modelViewMatrix * vec4(localPosition, 1.0);

  if (u_viewSpace && u_applyToOffset) {
    vertexOffset *= rotate2(u_rotation);
  }

  worldViewPosition += vec4(vertexOffset, 1.0, 0.0);

  if (u_viewSpace && !u_applyToOffset) {
    worldViewPosition *= rotationZ4(u_rotation);
  }

  csm_PositionRaw = projectionMatrix * worldViewPosition;
}
