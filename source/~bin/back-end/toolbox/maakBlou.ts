function maakBlou(ele: HTMLHeadElement) {
  setTimeout(function () {
    ele.style.color = 'blue';
  }, 4000);
}

// Send to outside, make public. You can only have one default.
export default maakBlou;
