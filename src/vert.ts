export const vertexShader = /*glsl*/ `
precision mediump float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
varying vec2 vUv;
void main() {
    mat4 m = mat4(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0.3, 0, 1 );
    m[3][1] = 0.0;
    vUv = uv;
  gl_Position = projectionMatrix * m * modelViewMatrix * vec4(position, 1.);
}
`;
