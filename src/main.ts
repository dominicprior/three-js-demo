import * as THREE from 'three';
import { vertexShader } from './vert';
import { fragmentShader } from './frag';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const w = 1200; // window.innerWidth;
const h = 900; // window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
camera.position.x = -0.10;
camera.position.y = 1.50;
camera.position.z = -3.00;
camera.lookAt(0, 0, 0);

// const light = new THREE.AmbientLight(0xffffff);  // looked rubbish because the sides were as bright as the top.
// const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );  // looked rubbish because the sides completely black.
const HemisphereLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 1 );
scene.add(HemisphereLight);

const loader = new GLTFLoader();
const astronaut = await loader.loadAsync('./models/spiral_wall_5c.glb');
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
// console.log(astronaut.scene.children[0].children[0].geometry);
// globalThis.scene = scene;
// globalThis.camera = camera;
// globalThis.renderer = renderer;
// globalThis.planeMesh = planeMesh;
// globalThis.astronaut = astronaut;