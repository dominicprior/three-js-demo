import * as THREE from 'three';
import { vertexShader } from './vert';
import { fragmentShader } from './frag';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1, 4, 4, 4 );
const material = new THREE.RawShaderMaterial( {
  uniforms: {},
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});


const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 1.5;

function animate() {
  cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}
