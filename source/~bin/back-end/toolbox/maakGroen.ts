function maakGroen(ele: HTMLHeadElement) {
  setTimeout(function () {
    ele.style.color = 'green';
  }, 2000);
}

// Send to outside, make public. You can only have one default.
export default maakGroen;
