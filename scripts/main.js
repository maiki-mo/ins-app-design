function changeGender() {
  let av = document.querySelector('#avatar');
  console.log(av.src);
  if (av.src === './images/avatar-f.png') {
    av.src = './images/avatar-m.png';
  } else {
    av.src = './images/avatar-f.png';
  }
}

let slider = document.querySelector('#age-slider');

slider.oninput = () => {
  let sliVal = document.querySelector('#age-dis');
  let value = slider.value;

  sliVal.innerHTML = slider.value;
}

console.log(slider.value);