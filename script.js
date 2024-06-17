import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const cam = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
cam.position.z = 3;

// lookat
// cam.lookAt(new THREE.Vector3(0, -1, 0));
// cam.lookAt(mesh.position);

scene.add(cam);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, cam);
