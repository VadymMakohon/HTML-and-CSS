const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
const earthMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/8/80/Earthmap1000x500.jpg')
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

const light = new THREE.PointLight(0xffffff, 2, 50);
scene.add(light);

camera.position.z = 8;

// Load country data
let countries;
fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
    .then(response => response.json())
    .then(data => { countries = data.features; });

function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.002;
    renderer.render(scene, camera);
}

animate();

function getCountryFromLatLon(lat, lon) {
    if (!countries) return "Unknown";
    for (let country of countries) {
        if (d3.geoContains(country, [lon, lat])) {
            return country.properties.name;
        }
    }
    return "Unknown";
}

window.addEventListener("click", (event) => {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(earth);

    if (intersects.length > 0) {
        const point = intersects[0].point;
        const lat = Math.asin(point.y / 3) * (180 / Math.PI);
        const lon = Math.atan2(point.z, point.x) * (180 / Math.PI);
        const country = getCountryFromLatLon(lat, lon);

        const infoBox = document.getElementById("infoBox");
        infoBox.innerHTML = `<strong>${country}</strong><br>Fun fact: This is an amazing place!`;
        infoBox.style.display = "block";
    }
});
