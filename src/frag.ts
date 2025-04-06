export const fragmentShader = /*glsl*/ `
precision mediump float;
varying vec2 vUv;
void main() {  
  gl_FragColor = vec4(vUv, 1., 1.);
}
`;
