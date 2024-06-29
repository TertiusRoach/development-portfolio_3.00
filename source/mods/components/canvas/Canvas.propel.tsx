const REPEL_SPEED = 5;
const REPEL_RADIUS = 50;
const RETURN_SPEED = 0.1;
const PARTICLE_DIAMETER = 2;

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const particles: Particle[] = [];

interface Particle {
  originX: number;
  originY: number;
  color: string;
  axisY: number;
  axisX: number;
}

// const img = new Image();
// img.src = '../profile-picture.png';

// img.addEventListener('load', () => {
//   canvas.width = img.width;
//   canvas.height = img.height;

//   ctx.drawImage(img, 0, 0);

//   const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

//   const numRows = Math.round(img.height / PARTICLE_DIAMETER);
//   const numColumns = Math.round(img.width / PARTICLE_DIAMETER);

//   for (let row = 0; row < numRows; row++) {
//     for (let column = 0; column < numColumns; column++) {
//       const pixelIndex = (row * PARTICLE_DIAMETER * img.width + column * PARTICLE_DIAMETER) * 4;
//       const red = imageData[pixelIndex];
//       const green = imageData[pixelIndex + 1];
//       const blue = imageData[pixelIndex + 2];
//       const alpha = imageData[pixelIndex + 3];

//       particles.push({
//         axisX: Math.floor(Math.random() * numColumns * PARTICLE_DIAMETER),
//         axisY: Math.floor(Math.random() * numRows * PARTICLE_DIAMETER),
//         originX: column * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
//         originY: row * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
//         color: `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`,
//       });
//     }
//   }
//   drawParticles();
// });

// function drawParticles() {
//   updateParticles();
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   particles.forEach((particle) => {
//     ctx.beginPath();
//     ctx.arc(particle.axisX, particle.axisY, PARTICLE_DIAMETER / 2, 0, 2 * Math.PI);
//     ctx.fillStyle = particle.color;
//     ctx.fill();
//   });
//   requestAnimationFrame(drawParticles);
// }

let mouseX = Infinity;
let mouseY = Infinity;

canvas.addEventListener('mousemove', (event: MouseEvent) => {
  mouseX = event.offsetX;
  mouseY = event.offsetY;
});

canvas.addEventListener('mouseleave', () => {
  mouseX = Infinity;
  mouseY = Infinity;
});

export default function updateParticles() {
  particles.forEach((particle) => {
    const distanceFromMouseX = mouseX - particle.axisX;
    const distanceFromMouseY = mouseY - particle.axisY;
    const distanceFromMouse = Math.sqrt(distanceFromMouseX ** 2 + distanceFromMouseY ** 2);

    if (distanceFromMouse < REPEL_RADIUS) {
      const angle = Math.atan2(distanceFromMouseY, distanceFromMouseX);
      const force = (REPEL_RADIUS - distanceFromMouse) / REPEL_RADIUS;

      const moveX = Math.cos(angle) * force * REPEL_SPEED;
      const moveY = Math.sin(angle) * force * REPEL_SPEED;

      particle.axisX -= moveX;
      particle.axisY -= moveY;
    } else if (particle.axisX !== particle.originX || particle.axisY !== particle.originY) {
      const distanceFromOriginX = particle.originX - particle.axisX;
      const distanceFromOriginY = particle.originY - particle.axisY;
      const distanceFromOrigin = Math.sqrt(distanceFromOriginX ** 2 + distanceFromOriginY ** 2);

      const angle = Math.atan2(distanceFromOriginY, distanceFromOriginX);
      const moveX = Math.cos(angle) * distanceFromOrigin * RETURN_SPEED;
      const moveY = Math.sin(angle) * distanceFromOrigin * RETURN_SPEED;

      particle.axisX += moveX;
      particle.axisY += moveY;
    }
  });
}
