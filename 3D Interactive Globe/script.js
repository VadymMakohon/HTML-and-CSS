const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
const earthMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Blue_Marble_2002.png/1024px-Blue_Marble_2002.png')
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

const light = new THREE.PointLight(0xffffff, 2, 50);
scene.add(light);
camera.position.z = 8;

let countries = null;
fetch('data/countries.geojson')  // Replace with a working online URL if needed
    .then(response => response.json())
    .then(data => {
        countries = data.features;
        console.log("GeoJSON Loaded");
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.002;
    renderer.render(scene, camera);
}
animate();
