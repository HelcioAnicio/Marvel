// const apiKey = process.env.API_KEY;
// const hash = process.env.HASH;
// const authentication = `apikey=${apiKey}&hash=${hash}&ts=1`

const authentication = `apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1`

const search = document.querySelector('#search');
const searchButton = document.querySelector('.fa-search');

const image = document.querySelector('.imageOne');
const characterName = document.querySelector('.nameCharacter');
const paragraph = document.querySelector('p');




const getAPI = async(searchValue) => {
    const apiURL = `http://gateway.marvel.com/v1/public/characters?name=${searchValue}&${authentication}`
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data)
    return data;
  };
  
  const showRequest = async(searchValue) => {
    const data = await getAPI(searchValue);

    characterName.innerHTML = data.data.results[0].name;
    paragraph.innerHTML = data.data.results[0].description;
    image.setAttribute(
    "src",
    `${data.data.results[0].thumbnail.path}/detail.jpg`
    // `http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0`
    // `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  


  }

//  EVENT
searchButton.addEventListener('click', ()=>{
    const searchValue = search.value;
    showRequest(searchValue);
})


