function changeGender() {
  let av = document.querySelector('#avatar');
  console.log(av.src);
  if (av.src === './images/avatar-f.png') {
    av.src = './images/avatar-m.png';
  } else {
    av.src = './images/avatar-f.png';
  }
}