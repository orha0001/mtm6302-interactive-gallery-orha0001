const $imgContainer = document.getElementById('img-container')

const $modal = document.querySelector('.modal')

const imgArr = []

const imagesObject = [
  {
    src: 'images/verstappen.png',
    large: 'images/verstappen-big.png',
    caption: 'Max Verstappen',
    alt: 'Verstappen',
  },

  {
    src: 'images/perez.png',
    large: 'images/perez-big.png',
    caption: 'Sergio Perez',
    alt: 'Perez',
  },

  {
    src: 'images/hamilton.png',
    large: 'images/hamilton-big.png',
    caption: 'Lewis Hamilton',
    alt: 'Hamilton',
  },

  {
    src: 'images/alonso.png',
    large: 'images/alonso-big.png',
    caption: 'Fernando Alonso',
    alt: 'Alonso',
  },

  {
    src: 'images/leclerc.png',
    large: 'images/leclerc-big.png',
    caption: 'Charles Leclerc',
    alt: 'Leclerc',
  },

  {
    src: 'images/norris.png',
    large: 'images/norris-big.png',
    caption: 'Lando Norris',
    alt: 'Norris',
  },

  {
    src: 'images/sainz.png',
    large: 'images/sainz-big.png',
    caption: 'Carlos Sainz',
    alt: 'Sainz',
  },

  {
    src: 'images/russell.png',
    large: 'images/russell-big.png',
    caption: 'George Russell',
    alt: 'Russell',
  },

  {
    src: 'images/piastri.png',
    large: 'images/piastri-big.png',
    caption: 'Oscar Piastri',
    alt: 'Piastri',
  },

  {
    src: 'images/stroll.png',
    large: 'images/stroll-big.png',
    caption: 'Lance Stroll',
    alt: 'Stroll',
  },

  {
    src: 'images/gasly.png',
    large: 'images/gasly-big.png',
    caption: 'Pierre Gasly',
    alt: 'Gasly',
  },

  {
    src: 'images/ocon.png',
    large: 'images/ocon-big.png',
    caption: 'Esteban Ocon',
    alt: 'Ocon',
  },


]

for (const imageData of imagesObject) {
  imgArr.push(`<img class="thumb" src="${imageData.src}" alt="${imageData.alt}" data-large="${imageData.large}" data-caption="${imageData.caption}">
  `)
}

$imgContainer.innerHTML = imgArr.join('')


$imgContainer.addEventListener('click', function (e) {
  const $thumb = e.target.closest('.thumb')
  $modal.innerHTML = `
    <img src="${$thumb.dataset.large}">   
    <small>${$thumb.dataset.caption}</small>`
  $modal.classList.add('show')
})

$modal.addEventListener('click', function () {
  $modal.classList.remove('show')
})
