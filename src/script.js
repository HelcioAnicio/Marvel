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
  data.data.results.forEach(elementRandom => {
    console.log(elementRandom)
    createBoxRandom(elementRandom)
  });
}

createBoxRandom = (elementRandom) => {
  let divCharacterRandom = document.createElement('div')
  divCharacterRandom.className = 'divCharacterRandom'

  let divImageRandom = document.createElement('div')
  divImageRandom.className = 'divImageRandom'
  
  let imageRandom = document.createElement('img')
  imageRandom.className = 'imageRandom'
  imageRandom.src = `${elementRandom.thumbnail.path}/standard_fantastic.jpg`
  
  let divTextRandom = document.createElement('div')
  divTextRandom.className = 'divTextRandom'
  
  let nameCharacterRandom = document.createElement('h4')
  nameCharacterRandom.className = 'nameCharacterRandom'
  nameCharacterRandom.innerText = elementRandom.name
  
  let descriptionRandom = document.createElement('p')
  descriptionRandom.className = 'descriptionRandom'
  descriptionRandom.innerText = elementRandom.description == '' ? descriptionRandom.innerHTML = "Marvel didn't provide information" : descriptionRandom.innerHTML = elementRandom.description;

  let linkCharacter = document.createElement('a')
  linkCharacter.href = "https://www.google.com.br";

  let moreInformation = document.createElement('button')
  moreInformation.className = 'moreInformation'
  moreInformation.innerText = 'More information'
  moreInformation.setAttribute('type', 'button');
  
  let sectionThree = document.querySelector('.sectionThree');
  sectionThree.appendChild(divCharacterRandom)
  
  divCharacterRandom.appendChild(divImageRandom);
  divImageRandom.appendChild(imageRandom);
  divCharacterRandom.appendChild(divTextRandom);
  divTextRandom.appendChild(nameCharacterRandom);
  divTextRandom.appendChild(descriptionRandom);
  divCharacterRandom.appendChild(linkCharacter)
  linkCharacter.appendChild(moreInformation)
}
useApi()



// Request after click
const getApiOneSearched = async(searchValue) => {
  const apiUrlSearched = `https://gateway.marvel.com/v1/public/characters?limit=20&nameStartsWith=${searchValue}&${authentication}`
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
  sectionTwo.innerText = ''

  data.data.results.forEach(elementSearched => {
  console.log(elementSearched)
  createBoxSearched(elementSearched)
  });
}

createBoxSearched = (elementSearched) => {
  let divSearched = document.createElement('div')
  divSearched.className = 'divSearched'

  let divImageSearched = document.createElement('div')
  divImageSearched.className = 'divImageSearched'
  
  let imageSearched = document.createElement('img')
  imageSearched.className = 'imageSearched'
  imageSearched.src = `${elementSearched.thumbnail.path}/standard_fantastic.jpg`
  
  let divTextSearched = document.createElement('div')
  divTextSearched.className = 'divTextSearched'
  
  let nameCharacterSearched = document.createElement('h4')
  nameCharacterSearched.className = 'nameCharacterSearched'
  nameCharacterSearched.innerText = elementSearched.name
  
  let descriptionSearched = document.createElement('p')
  descriptionSearched.className = 'descriptionSearched'
  descriptionSearched.innerText = elementSearched.description == '' ? descriptionSearched.innerHTML = "Marvel didn't provide information" : descriptionSearched.innerHTML = elementSearched.description;

  
  let sectionTwo = document.querySelector('.sectionTwo');
  sectionTwo.appendChild(divSearched)
  
  divSearched.appendChild(divImageSearched);
  divImageSearched.appendChild(imageSearched);
  divSearched.appendChild(divTextSearched);
  divTextSearched.appendChild(nameCharacterSearched);
  divTextSearched.appendChild(descriptionSearched);
}



//  EVENT
searchButton.addEventListener('click', ()=>{
    const searchValue = search.value;
    showRequestSearched(searchValue);
})


