const REPEL_SPEED = 5;
const REPEL_RADIUS = 50;
const RETURN_SPEED = 0.1;
const PARTICLE_DIAMETER = 2;

interface Particle {
  originX: number;
  originY: number;
  color: string;
  axisY: number;
  axisX: number;
}

const particles: Particle[] = [];

export default function CanvasPropel(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  const img = new Image();
  img.src =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_3.00/main/public/content/png-files/profile-picture.png';

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

    const numRows = Math.round(img.height / PARTICLE_DIAMETER);
    const numColumns = Math.round(img.width / PARTICLE_DIAMETER);

    for (let row = 0; row < numRows; row++) {
      for (let column = 0; column < numColumns; column++) {
        const pixelIndex = (row * PARTICLE_DIAMETER * img.width + column * PARTICLE_DIAMETER) * 4;
        const red = imageData[pixelIndex];
        const green = imageData[pixelIndex + 1];
        const blue = imageData[pixelIndex + 2];
        const alpha = imageData[pixelIndex + 3];

        particles.push({
          axisX: Math.floor(Math.random() * numColumns * PARTICLE_DIAMETER),
          axisY: Math.floor(Math.random() * numRows * PARTICLE_DIAMETER),
          originX: column * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
          originY: row * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
          color: `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`,
        });
      }
    }

    drawParticles(canvas, ctx);
  };

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

  function drawParticles(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.axisX, particle.axisY, PARTICLE_DIAMETER / 2, 0, 2 * Math.PI);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });

    applyRepelEffect();
    requestAnimationFrame(() => drawParticles(canvas, ctx));
  }

  function applyRepelEffect() {
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
      } else {
        const distanceFromOriginX = particle.originX - particle.axisX;
        const distanceFromOriginY = particle.originY - particle.axisY;

        particle.axisX += distanceFromOriginX * RETURN_SPEED;
        particle.axisY += distanceFromOriginY * RETURN_SPEED;
      }
    });
  }
}
