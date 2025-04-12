import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const w = 400; // window.innerWidth;
const h = 400; // window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, w / h, 0.1, 1000 );
const light = new THREE.AmbientLight( 0xffffff );
scene.add( light );

const loader = new GLTFLoader();
loader.load('models/smallfoo.glb', function (gltf) {
  const Mesh = gltf.scene;
  scene.add(Mesh);
  console.log(gltf);
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize( w, h );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry(.5,.5,12,12);
const material = new THREE.MeshBasicMaterial( { color: 0x00ffe0 } );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

renderer.render( scene, camera );
