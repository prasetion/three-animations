import * as THREE from "three";
import gsap from "gsap";

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

scene.add(cam);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

// // animation
// // let time = Date.now();
// const clock = new THREE.Clock();

// const tick = () => {
//   // time
//   // const currentTime = Date.now();
//   // const deltaTime = currentTime - time;
//   // time = deltaTime;

//   const elapsedTime = clock.getElapsedTime();

//   // rotate object
//   // mesh.rotation.y += 0.01 * deltaTime;
//   mesh.rotation.y = elapsedTime;

//   // position
//   // mesh.position.x = Math.cos(elapsedTime);
//   // mesh.position.y = Math.sin(elapsedTime);

//   // camera
//   cam.position.x = Math.cos(elapsedTime);
//   cam.position.y = Math.sin(elapsedTime);
//   cam.lookAt(mesh.position);

//   renderer.render(scene, cam);
//   window.requestAnimationFrame(tick);
// };

// tick();

// gasp animation
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

const tick = () => {
  renderer.render(scene, cam);
  window.requestAnimationFrame(tick);
};

tick();
