import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const w = 400; // window.innerWidth;
const h = 400; // window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, w / h, 0.1, 1000 );
const light = new THREE.AmbientLight( 0xffffff );
scene.add( light );

const loader = new GLTFLoader();
loader.load('models/untitled.gltf', function (gltf) {
  console.log(gltf);
  const model = gltf.scene;
  scene.add(model);
  model.position.set(0, 0, 0);
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize( w, h );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry(6,6,12,12);
const material = new THREE.MeshBasicMaterial( { color: 0x00ffe0 } );
geometry.translate(0, 0, 4);

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.set(0, 10, 20);

renderer.render( scene, camera );
