import * as THREE from 'three';
import { vertexShader } from './vert';
import { fragmentShader } from './frag';

const w = 400; // window.innerWidth;
const h = 400; // window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 140, w / h, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( w, h );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry(6,6,12,12);
// const geometry = new THREE.BoxGeometry( 1, 1, 1, 4, 4, 4 );
const material = new THREE.RawShaderMaterial( {
  uniforms: {},
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  wireframe: true,
  side: THREE.DoubleSide,
});
geometry.translate(0, 0, 4);

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 1.00;

// renderer.setAnimationLoop( animate );
// function animate() {
  // cube.rotation.y += 0.01;
  renderer.render( scene, camera );
// }
