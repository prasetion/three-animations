import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const axeshHelper = new THREE.AxesHelper(2);
scene.add(axeshHelper);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// change position
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

// set position
mesh.position.set(0.7, -0.6, 1);

// scale
mesh.scale.x = 2;
mesh.scale.y = 0.25;
mesh.scale.z = 0.5;

// rotation
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

// scene.add(mesh);

// group
const group = new THREE.Group();
group.scale.y = 2;
group.rotation.y = 0.2;
scene.add(group);

// group : cube 1
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -1.5;
group.add(cube1);

// group : cube 2
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube2.position.x = 0;
group.add(cube2);

// group : cube 3
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube3.position.x = 1.5;
group.add(cube3);

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
