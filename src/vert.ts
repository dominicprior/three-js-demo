export const vertexShader = /*glsl*/ `
precision mediump float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vec4 p;
  vUv = uv;
  p = modelViewMatrix * vec4(position, 1.);
  gl_Position = projectionMatrix * p;
  if (modelViewMatrix[3][2] == -1.0) {
    gl_Position.x *= 0.5;
  }
}
`;
