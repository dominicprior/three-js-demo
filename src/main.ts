import * as THREE from 'three';
import { vertexShader } from './vert';
import { fragmentShader } from './frag';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const w = 1200; // window.innerWidth;
const h = 900; // window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
camera.position.z = 10.00;
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

const loader = new GLTFLoader();
const astronaut = await loader.loadAsync('./models/smallfoo.glb');
scene.add(astronaut.scene);

const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(6,6,12,12);
const planeMaterial = new THREE.RawShaderMaterial({
  uniforms: {},
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  wireframe: true,
  side: THREE.DoubleSide,
});

const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

renderer.render(scene, camera);
export { renderer, scene, camera, planeMesh };
console.log(astronaut.scene.children[0].children[0].geometry);
globalThis.scene = scene;
globalThis.camera = camera;
globalThis.renderer = renderer;
globalThis.planeMesh = planeMesh;
globalThis.astronaut = astronaut;