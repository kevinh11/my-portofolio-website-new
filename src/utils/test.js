import * as THREE from 'three';


export function setUpTest() {
  const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer( {
  canvas: document.getElementById("ballsBg")
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a sphere geometry for the ball
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const ball = new THREE.Mesh(geometry, material);
scene.add(ball);

// Set initial velocity
let velocity = 0.05;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Move the ball up and down
  ball.position.y += velocity;

  // Reverse direction if ball reaches boundaries
  if (ball.position.y >= 2 || ball.position.y <= -2) {
    velocity = -velocity;
  }

  // Render the scene
  renderer.render(scene, camera);
}

animate();
}