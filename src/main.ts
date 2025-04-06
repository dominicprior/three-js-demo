import * as THREE from 'three';

const vertexShader = `
precision mediump float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}
`;
const fragmentShader = `
precision mediump float;
varying vec2 vUv;
void main() {  
  gl_FragColor = vec4(vUv, 0., 1.);
}
`;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.RawShaderMaterial( {
  uniforms: {},
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});


const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
  cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}
