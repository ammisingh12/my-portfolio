// THREE.JS SCENE
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')});

renderer.setSize(innerWidth, innerHeight);
camera.position.setZ(30);

// Lights
const light = new THREE.PointLight(0xffffff);
light.position.set(10,10,10);
scene.add(light);

// Objects
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(10, 3, 16, 100),
  new THREE.MeshStandardMaterial({ color: 0x00ffff })
);
scene.add(torus);

// Stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25);
  const material = new THREE.MeshBasicMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);

  const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Scroll animation
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = 30 + t * -0.01;
}
document.body.onscroll = moveCamera;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();


// Typing effect
const text = ["Final-Year B.Tech CSE Student","Frontend Developer", "3D Web Enthusiast", "Creative Coder", "Problem Solver"];
let i = 0, j = 0;

function type() {
  if(j < text[i].length) {
    document.getElementById("typing").innerHTML += text[i][j];
    j++;
    setTimeout(type, 50);
  } else {
    setTimeout(() => {
      document.getElementById("typing").innerHTML = "";
      j = 0;
      i = (i + 1) % text.length;
      type();
    }, 1500);
  }
}
type();

const projects = [
  {
    title: "🚀 Trip Planner Web App",
    desc: "Full-stack travel booking system using Node.js and MongoDB.",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    type: "youtube",
    live: "#",
    github: "#"
  },
  {
    title: "🎨 AI Image Generator Game",
    desc: "AI-based prompt-to-image game using APIs.",
    video: "videos/project2.mp4",
    type: "file",
    live: "#",
    github: "#"
  },
  {
    title: "🌐 3D Portfolio",
    desc: "Three.js interactive portfolio.",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    type: "youtube",
    live: "#",
    github: "#"
  }
];