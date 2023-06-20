const authentication = `apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1`

const search = document.querySelector('#search');
const searchButton = document.querySelector('.fa-search');

const imageSearched = document.querySelector('.imageSearched');
const characterNameSearched = document.querySelector('.nameCharacterSearched');
const paragraphSearched = document.querySelector('.descriptionSearched');


// Request Random
const getApiRandom = async() => {
  const maxCharacters = 1500;
  const offset = Math.floor((Math.random() * maxCharacters) + 1);

  const apiUrlSearched = `https://gateway.marvel.com/v1/public/characters?limit=9&offset=${offset}&${authentication}`
  const response = await fetch(apiUrlSearched);
  const data = await response.json();
  return data;
};

async function useApi(divCharacterRandom, divImageRandom, imageRandom, divTextRandom, nameCharacterRandom, paragraphRandom) {
  const data = await getApiRandom();
  data.data.results.forEach(element => {
    console.log(element)

    createBox(element)
    // imageRandom.setAttribute(
    //   "src",
    //   `${element.thumbnail.path}/detail.jpg`
    // ) 
    // nameCharacterRandom.innerHTML = `${element.name}` 
  });
}

// useApi()
createBox = (element) => {
  
  console.log('dentro do create box', element)
  let divCharacterRandom = document.createElement('div')
  divCharacterRandom.className = 'divCharacterRandom'
  divImageRandom = document.createElement('div')
  divImageRandom.className = 'divImageRandom'
  imageRandom = document.createElement('img')
  imageRandom.className = 'imageRandom'
  imageRandom.src = 'assets/Marvel_universe.png'
  divTextRandom = document.createElement('div')
  divTextRandom.className = 'divTextRandom'
  nameCharacterRandom = document.createElement('h4')
  nameCharacterRandom.className = 'nameCharacterRandom'
  nameCharacterRandom.innerText = element.name
  paragraphRandom = document.createElement('p')
  paragraphRandom.className = 'paragraphRandom'
  
  divCharacterRandom.appendChild(divImageRandom);
  divImageRandom.appendChild(imageRandom);
  divCharacterRandom.appendChild(divTextRandom);
  divTextRandom.appendChild(nameCharacterRandom);
  divTextRandom.appendChild(paragraphRandom);

  let sectionTwo = document.querySelector('.sectionTwo');
  sectionTwo.appendChild(divCharacterRandom)
}
useApi()


// Request after click
const getApiOneSearched = async(searchValue) => {
  const apiUrlSearched = `https://gateway.marvel.com/v1/public/characters?name=${searchValue}&${authentication}`
  const response = await fetch(apiUrlSearched);
  const data = await response.json();
  console.log(data)
  return data;
};

const showRequestSearched = async(searchValue) => {
  const data = await getApiOneSearched(searchValue);
  search.value = ''

  characterNameSearched.innerHTML = data.data.results[0].name;
  data.data.results[0].description == '' ? paragraphSearched.innerHTML = 'No description at the moment' : paragraphSearched.innerHTML = data.data.results[0].description;
  imageSearched.setAttribute(
  "src",
  `${data.data.results[0].thumbnail.path}/detail.jpg`
);
}



//  EVENT
searchButton.addEventListener('click', ()=>{
    const searchValue = search.value;
    getApiAll()
    showRequestSearched(searchValue);
})


