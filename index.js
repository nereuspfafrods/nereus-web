const frog = document.getElementById("frog");
const tongue = document.getElementById("tongue");
let mouseX;
let mouseY;

function updateTongue() {
  if (mouseX === undefined || mouseY === undefined) return;

  const frogBounds = frog.getBoundingClientRect();
  const pivotX = frogBounds.left + frogBounds.width * 0.512;
  const pivotY = frogBounds.top + frogBounds.height * 0.615;
  const deltaX = mouseX - pivotX;
  const deltaY = mouseY - pivotY;

  console.log(
    `Mouse Position: (${mouseX}, ${mouseY}), Pivot Position: (${pivotX}, ${pivotY}), Delta: (${deltaX}, ${deltaY})`,
  );

  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  const length = Math.hypot(deltaX, deltaY);

  tongue.style.height = `${length}px`;
  tongue.style.left = `${pivotX - tongue.offsetWidth / 2}px`;
  tongue.style.top = `${pivotY - length}px`;
  tongue.style.transform = `rotate(${90 + angle}deg)`;
}

document.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

window.addEventListener("resize", updateTongue);
window.setInterval(updateTongue, 3000);
