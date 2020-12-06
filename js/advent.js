dayClick = document.querySelector('.days').addEventListener('click', openDay);

function openDay(evt) {
  let target = evt.target;
  if ( target.tagName === 'LI' ) {
    const day = target.innerText;
    window.location.href = `${day}/index.html`;
  }
}

