import * as THREE from 'three';

export function setUp() {
  const scene = new THREE.Scene();
  const minRadius = 0.01
  const maxRadius = 0.02
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('ballsBg')
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const maxVelocity = 0.007
  const minVelocity = -0.007
  const maxBalls = 40
  
  const margin = 0.5

  const minX = -8
  const maxX = 8

  const minY = -4
  const maxY = 4
  let balls = [];

  function getRandomValueBetween(min,max) {
    return Math.random() * (max - min) + min;
  }

  function seedBalls() {
    for (let i = 0; i < maxBalls; i++) {
      const geometry = new THREE.SphereGeometry(getRandomValueBetween(minRadius,maxRadius), 32, 32);

      const velocity = getRandomValueBetween(minVelocity, maxVelocity)
      const ballInfo = {
        ball : new THREE.Mesh(geometry, material),
        xVel: velocity,
        yVel: velocity,
        xPos: getRandomValueBetween(minX,maxX),
        yPos: getRandomValueBetween(minY, maxY)
      
      } 
      balls.push(ballInfo)
    }
  }

  function addToScene() {
    balls.forEach((b)=>{
      b.ball.position.x = b.xPos;
      b.ball.position.y = b.yPos;
      scene.add(b.ball)
      

    })
  }

  function animate() {
    requestAnimationFrame(animate);

    for (let x = 0; x < balls.length; x++) {
      const ball = balls[x].ball;
      
      ball.position.x += balls[x].xVel;
      ball.position.y += balls[x].yVel;

      if (ball.position.x >= maxX || ball.position.x <= minX) {
        balls[x].xVel *= -1;
      }

      if (ball.position.y >= maxY || ball.position.y <= minY) {
        balls[x].yVel *= -1;
      }
    }

    renderer.render(scene, camera);
  }

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  

  window.addEventListener('resize', handleResize);

  seedBalls();
  addToScene();
  animate();

}