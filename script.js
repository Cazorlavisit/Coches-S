// Configurar la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un coche
const geometry = new THREE.BoxGeometry(1, 0.5, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const car = new THREE.Mesh(geometry, material);
scene.add(car);

// Posicionar la cámara en el coche
camera.position.z = 5;
camera.position.y = 1;

// Renderizar la escena
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Mover el coche
document.addEventListener('keydown', (event) => {
  const speed = 0.1;
  if (event.key === 'ArrowUp') {
    car.position.z -= speed;
  }
  if (event.key === 'ArrowDown') {
    car.position.z += speed;
  }
});
