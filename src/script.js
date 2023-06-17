const authentication = `apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1`

const search = document.querySelector('#search');
const searchButton = document.querySelector('.fa-search');

const image = document.querySelector('.image');
const characterName = document.querySelector('.nameCharacterSearched');
const paragraph = document.querySelector('.descriptionSearched');

const divCaracter = document.querySelector('.divCaracter');

// Request Random
const getApiAll = async() => {
  const maxCharacters = 1500;
  const offset = Math.floor((Math.random() * maxCharacters) + 1);

  const apiUrlAll = `https://gateway.marvel.com/v1/public/characters?limit=9&offset=${offset}&${authentication}`
  const response = await fetch(apiUrlAll);
  const data = await response.json();
  return data;
};

async function useApi() {
  const data = await getApiAll();
  data.data.results[0].forEach(element => {
    console.log(element)
    createBox()
    image.setAttribute(
      "src",
      `${element.thumbnail.path}/detail.${element.thumbnail.extension}`
    ) 
    nameCharacter.innerHTML = `${element.name}` 
  });
}

// useApi()
createBox = () => {
  let divCaracter = document.createElement('div')
  divCaracter.className = 'divCarater'
  let divImage = document.createElement('div')
  divImage.className = 'divImage'
  let image = document.createElement('img')
  image.className = 'imageApi'
  let divText = document.createElement('div')
  divText.className = 'divText'
  let nameCharacter = document.createElement('h4')
  nameCharacter.className = 'nameCharacter'
  let paragraph = document.createElement('p')
  paragraph.className = 'paragraph'

  divCaracter.appendChild(divImage);
  divImage.appendChild(image);
  divCaracter.appendChild(divText);
  divText.appendChild(nameCharacter);
  divText.appendChild(paragraph);

  let sectionTwo = document.querySelector('.sectionTwo');
  sectionTwo.appendChild(divCaracter)
}
useApi()



// Request after click
const getApiOne = async(searchValue) => {
  const apiUrlOne = `https://gateway.marvel.com/v1/public/characters?name=${searchValue}&${authentication}`
  const response = await fetch(apiUrlOne);
  const data = await response.json();
  console.log(data)
  return data;
};

const showRequest = async(searchValue) => {
  const data = await getApiOne(searchValue);
  search.value = ''

  characterName.innerHTML = data.data.results[0].name;
  data.data.results[0].description == '' ? paragraph.innerHTML = 'No description at the moment' : paragraph.innerHTML = data.data.results[0].description;
  image.setAttribute(
  "src",
  `${data.data.results[0].thumbnail.path}/detail.jpg`
);
}



//  EVENT
searchButton.addEventListener('click', ()=>{
    const searchValue = search.value;
    getApiAll()
    showRequest(searchValue);
})


