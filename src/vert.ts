export const vertexShader = /*glsl*/ `
precision mediump float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vec4 p = modelViewMatrix * vec4(position, 1.);  // e.g. the centre of the plane in front of us is (0,0,-1,1)
  float d = length(p.xyz); // distance from the camera
  p.z -= d;
  gl_Position = projectionMatrix * p;
  if (modelViewMatrix[3][2] == -1.0) {
    gl_Position.x *= 0.5;
  }
  vUv = uv;
}
`;
