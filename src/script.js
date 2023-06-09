

// const publicApiKey = 
// const privateApiKey = 

const authentication = 'apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1'
const apikey = '8e30179e891ae0ca9d101872b0217c7e4a6594ff9575100686737c454f288a3d2e9f883d';

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


