const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById("main")

getMovies(API_URL)
async function getMovies(url) { 
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
 }

 function showMovies(movie){
console.log(movie)
    main.innerHTML = ''
    movie.forEach(movies => {
        const movieEl = document.createElement('div')
        movieEl.classList.add("col-4")
        movieEl.innerHTML = `
       
        <div class="card bg-dark text-white mt-5">
                <img class="card-img" src="${IMG_PATH + movies.poster_path}" alt="Card image">
                <div class="card-img-overlay">
                    <h5 class="card-title"> ${movies.title}</h5>
                    <p class="card-text">  ${movies.overview}</p>
                    <p class="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
      
         
        `
    main.appendChild(movieEl)
    });

 }
