const progressBar = document.querySelector('.progress-bar');

setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  progressBar.style.setProperty('--width', width + 0.1);
}, 5);
