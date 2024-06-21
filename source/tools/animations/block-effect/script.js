const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
/*
In your JavaScript code for working with the Canvas API, CTX (short for context) is
a common variable name that stores the 2D rendering context retrieved from your
canvas element using canvas.getContext('2d'). This context object, CTX, provides
all the methods and properties you'll need to draw shapes, images, and text on the
canvas, bringing your graphics to life!
*/
const PARTICLE_DIAMETER = 4;
const particles = [];

const img = new Image();
img.src = '../profile-picture.png';

img.addEventListener('load', () => {
  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

  const numRows = Math.round(img.height / PARTICLE_DIAMETER);
  const numColumns = Math.round(img.width / PARTICLE_DIAMETER);

  for (let row = 0; row < numRows; row++) {
    console.log('row');
    for (let column = 0; column < numColumns; column++) {
      console.log('col');
      /*
      // A.I. Version
      const x = column * PARTICLE_DIAMETER;
      const y = row * PARTICLE_DIAMETER;
      const pixelIndex = (y * img.width + x) * 4; // A.I. Version
      */
      const pixelIndex = (row * PARTICLE_DIAMETER * img.width + column * PARTICLE_DIAMETER) * 4;

      const red = imageData[pixelIndex];
      const green = imageData[pixelIndex + 1];
      const blue = imageData[pixelIndex + 2];
      const alpha = imageData[pixelIndex + 3];

      particles.push({
        // Tutorial: Loads Image with Animation
        x: Math.floor(Math.random() * numColumns * PARTICLE_DIAMETER),
        y: Math.floor(Math.random() * numRows * PARTICLE_DIAMETER),
        originX: column * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
        originY: row * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
        /*
        // Tutorial: Appears Suddenly when Loaded
        x: column * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
        y: row * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
        originX: column * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
        originY: row * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
        */
        /*
        // A.I. Version
        x: x,
        y: y,
        originX: x,
        originY: y,
        */
        color: `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`,
      });
    }
  }
  drawParticles();
});
function drawParticles() {
  updateParticles();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, PARTICLE_DIAMETER / 2, 0, 2 * Math.PI); // I think this makes the particles circular.
    ctx.fillStyle = particle.color;
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}

let mouseX = Infinity;
let mouseY = Infinity;

canvas.addEventListener('mousemove', (event) => {
  mouseX = event.offsetX;
  mouseY = event.offsetY;
});

canvas.addEventListener('mouseleave', () => {
  mouseX = Infinity;
  mouseY = Infinity;
});

function updateParticles() {
  const REPEL_RADIUS = 50;
  const REPEL_SPEED = 5;
  const RETURN_SPEED = 0.1;

  particles.forEach((particle) => {
    const distanceFromMouseX = mouseX - particle.x;
    const distanceFromMouseY = mouseY - particle.y;
    const distanceFromMouse = Math.sqrt(distanceFromMouseX ** 2 + distanceFromMouseY ** 2);

    if (distanceFromMouse < REPEL_RADIUS) {
      const angle = Math.atan2(distanceFromMouseY, distanceFromMouseX);
      const force = (REPEL_RADIUS - distanceFromMouse) / REPEL_RADIUS;

      const moveX = Math.cos(angle) * force * REPEL_SPEED;
      const moveY = Math.sin(angle) * force * REPEL_SPEED;

      particle.x -= moveX;
      particle.y -= moveY;
    } else if (particle.x !== particle.originX || particle.y !== particle.originY) {
      const distanceFromOriginX = particle.originX - particle.x;
      const distanceFromOriginY = particle.originY - particle.y;
      const distanceFromOrigin = Math.sqrt(distanceFromOriginX ** 2 + distanceFromOriginY ** 2);

      const angle = Math.atan2(distanceFromOriginY, distanceFromOriginX);
      const moveX = Math.cos(angle) * distanceFromOrigin * RETURN_SPEED;
      const moveY = Math.sin(angle) * distanceFromOrigin * RETURN_SPEED;

      particle.x += moveX;
      particle.y += moveY;
    }
  });
}
