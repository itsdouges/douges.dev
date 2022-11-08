varying vec2 v_uvs;

void main() {
  gl_FragColor = vec4(v_uvs, 1.0, 1.0);
}
