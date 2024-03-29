const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [`pic1.jpg`, `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}


const alts2 = [`Closeup of a human eye`, `Rock that looks like a wave`, `Purple and white pansies`, `Section of wall from a pharoah's tomb`, `Large moth on a leaf`];

function myCustomFunction(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

for( var i=0; i<images.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/`+images[i]);
  newImage.setAttribute('alt', alts2[i]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', myCustomFunction);

}




/* Wiring up the Darken/Lighten button */

var myOverlay = true;
btn.addEventListener('click', () => {
  if (myOverlay) {
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,55,0.5)';
  } else {
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
  myOverlay = !myOverlay;
});
/*
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
*/