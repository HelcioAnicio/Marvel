const apiKey = process.env.API_KEY;
const hash = process.env.HASH;
const authentication = `apikey=${apiKey}&hash=${hash}&ts=1`

const search = document.querySelector('#search');
const searchButton = document.querySelector('.fa-search');

const image = document.querySelector('.image');
const characterName = document.querySelector('h4');
const Paragraph = document.querySelector('p');




const getAPI = async (searchValue) => {
    const apiURL = `http://gateway.marvel.com/v1/public/characters?${searchValue}&${authentication}`
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data)
    return data;
  };
  
//   const showRequest = (searchValue) => {
//     const data = getAPI (searchValue);
//     console.log(data);
//   }
// getAPI()

//  EVENT
searchButton.addEventListener('click', ()=>{
    const searchValue = search.value;
    getAPI(searchValue)
})


