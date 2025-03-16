const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const planets = [];
const planetData = [
    { name: "Mercury", color: 0xaaaaaa, distance: 5, size: 0.3, fact: "Mercury is the smallest planet." },
    { name: "Venus", color: 0xffa500, distance: 8, size: 0.7, fact: "Venus has a thick toxic atmosphere." },
    { name: "Earth", color: 0x0000ff, distance: 11, size: 0.8, fact: "Earth is the only planet with life!" },
    { name: "Mars", color: 0xff0000, distance: 15, size: 0.6, fact: "Mars has the tallest volcano." }
];



const light = new THREE.PointLight(0xffffff, 2, 50);
scene.add(light);

camera.position.z = 20;

function animate() {
    requestAnimationFrame(animate);
    planets.forEach(planet => {
        planet.angle += 0.01;
        planet.mesh.position.x = Math.cos(planet.angle) * planet.data.distance;
        planet.mesh.position.z = Math.sin(planet.angle) * planet.data.distance;
    });
    renderer.render(scene, camera);
}

animate();

window.addEventListener("click", (event) => {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(planets.map(p => p.mesh));

    if (intersects.length > 0) {
        const planet = planets.find(p => p.mesh === intersects[0].object);
        const infoBox = document.getElementById("infoBox");
        infoBox.innerHTML = `<strong>${planet.data.name}</strong><br>${planet.data.fact}`;
        infoBox.style.display = "block";
    }
});
