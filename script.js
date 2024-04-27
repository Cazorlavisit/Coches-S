// Configurar la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear el cuerpo del coche
const carBodyGeometry = new THREE.BoxGeometry(1, 0.5, 2);
const carBodyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const carBody = new THREE.Mesh(carBodyGeometry, carBodyMaterial);
scene.add(carBody);

// Crear las ruedas del coche
const wheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.25, 32);
const wheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const wheel1 = new THREE.Mesh(wheelGeometry, wheelMaterial);
const wheel2 = new THREE.Mesh(wheelGeometry, wheelMaterial);
const wheel3 = new THREE.Mesh(wheelGeometry, wheelMaterial);
const wheel4 = new THREE.Mesh(wheelGeometry, wheelMaterial);

// Posicionar las ruedas
wheel1.position.set(-0.5, -0.25, -1);
wheel2.position.set(0.5, -0.25, -1);
wheel3.position.set(-0.5, -0.25, 1);
wheel4.position.set(0.5, -0.25, 1);

// Añadir las ruedas al cuerpo del coche
carBody.add(wheel1);
carBody.add(wheel2);
carBody.add(wheel3);
carBody.add(wheel4);

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
    carBody.position.z -= speed;
  }
  if (event.key === 'ArrowDown') {
    carBody.position.z += speed;
  }
});
