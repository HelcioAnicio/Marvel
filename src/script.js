const authentication = `apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1`

const search = document.querySelector('#search');
const searchButton = document.querySelector('.fa-search');

const imageSearched = document.querySelector('.imageSearched');
const characterNameSearched = document.querySelector('.nameCharacterSearched');
const descriptionSearched = document.querySelector('.descriptionSearched');

const sectionTwo = document.querySelector('.sectionTwo');
const sectionThree = document.querySelector('.sectionThree');


// Request Random
const getApiRandom = async() => {
  const maxCharacters = 1500;
  const offset = Math.floor((Math.random() * maxCharacters) + 1);

  const apiUrlSearched = `https://gateway.marvel.com/v1/public/characters?limit=8&offset=${offset}&${authentication}`
  const response = await fetch(apiUrlSearched);
  const data = await response.json();
  return data;
};

async function useApi() {
  const data = await getApiRandom();
  data.data.results.forEach(element => {
    console.log(element)
    createBox(element)
  });
}

createBox = (element) => {
  let divCharacterRandom = document.createElement('div')
  divCharacterRandom.className = 'divCharacterRandom'

  let divImageRandom = document.createElement('div')
  divImageRandom.className = 'divImageRandom'
  
  let imageRandom = document.createElement('img')
  imageRandom.className = 'imageRandom'
  imageRandom.src = `${element.thumbnail.path}.jpg`
  
  let divTextRandom = document.createElement('div')
  divTextRandom.className = 'divTextRandom'
  
  let nameCharacterRandom = document.createElement('h4')
  nameCharacterRandom.className = 'nameCharacterRandom'
  nameCharacterRandom.innerText = element.name
  
  let descriptionRandom = document.createElement('p')
  descriptionRandom.className = 'descriptionRandom'
  descriptionRandom.innerText = element.description == '' ? descriptionRandom.innerHTML = 'No description at the moment' : descriptionRandom.innerHTML = element.description;

  
  let sectionThree = document.querySelector('.sectionThree');
  sectionThree.appendChild(divCharacterRandom)
  
  divCharacterRandom.appendChild(divImageRandom);
  divImageRandom.appendChild(imageRandom);
  divCharacterRandom.appendChild(divTextRandom);
  divTextRandom.appendChild(nameCharacterRandom);
  divTextRandom.appendChild(descriptionRandom);
}
useApi()


// Request after click
const getApiOneSearched = async(searchValue) => {
  const apiUrlSearched = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchValue}&${authentication}`
  const response = await fetch(apiUrlSearched);
  const data = await response.json();
  console.log(data)
  return data;
};

const showRequestSearched = async(searchValue) => {
  const data = await getApiOneSearched(searchValue);
  sectionTwo.style.display = 'flex'
  sectionThree.style.display = 'none'
  search.value = ''

  characterNameSearched.innerHTML = data.data.results[0].name;
  data.data.results[0].description == '' ? descriptionSearched.innerHTML = 'No description at the moment' : descriptionSearched.innerHTML = data.data.results[0].description;
  imageSearched.setAttribute(
  "src",
  `${data.data.results[0].thumbnail.path}/detail.jpg`
);
}



//  EVENT
searchButton.addEventListener('click', ()=>{
    const searchValue = search.value;
    showRequestSearched(searchValue);
})


