function changeGender() {
  let av = document.querySelector('#avatar');
  console.log(av.src);
  if (av.src === 'http://127.0.0.1:5500/images/avatar-f.png') {
    av.src = 'http://127.0.0.1:5500/images/avatar-m.png';
  } else {
    av.src = 'http://127.0.0.1:5500/images/avatar-f.png';
  }
}