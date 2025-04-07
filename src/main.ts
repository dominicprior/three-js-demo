import * as THREE from 'three';
import { vertexShader } from './vert';
import { fragmentShader } from './frag';

const w = 400; // window.innerWidth;
const h = 400; // window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, w / h, 0.5, 1.5 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( w, h );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry(2,2,4,4);
// const geometry = new THREE.BoxGeometry( 1, 1, 1, 4, 4, 4 );
const material = new THREE.RawShaderMaterial( {
  uniforms: {},
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  wireframe: true,
  side: THREE.DoubleSide,
});


const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 1.00;

// renderer.setAnimationLoop( animate );
// function animate() {
  // cube.rotation.y += 0.01;
  renderer.render( scene, camera );
// }
