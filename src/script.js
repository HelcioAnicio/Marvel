

// const publicApiKey = 
// const privateApiKey = 

const search = document.querySelector('#search')
const searchButton = document.querySelector('.fa-search')

const getAPI = async (searchValue) => {
    const apiURL = `https://gateway.marvel.com:443/v1/public/characters?${publicApiKey}`
    const res = await fetch(apiURL);
    const data = await res.json();
    return data;
  };
  
  const showRequest = async (searchValue) => {
    const data = await getAPI(searchValue);
    console.log(data);
  }
// console.log()



//  EVENT
searchButton.addEventListener('click', ()=>{
    const searchValue = search.value;
    showRequest(searchValue)
})


