


const MovieAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
const IMGPATH = "https://image.tmdb.org/t/p/w1280"



const MainURL = "https://api.themoviedb.org/3/"
const Disocover = "/discover/movie?sort_by=popularity.desc"
const API = "&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"

const MovieURL = MainURL + Disocover + API

// Get Movie data
getMovies(MovieURL)
async function getMovies(url) {
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    console.log(data);
    const movies = data.results
    // console.log(movies);
    displayMovie(movies);
}

const MoviesHTML = document.getElementById("main");

// Show Movies

function displayMovie (movies) {
    console.log(movies)
    MoviesHTML.innerHTML = ""
    movies.forEach((movie) => { 
        const MovieEl = document.createElement("div")
        MovieEl.classList.add("movie")
        MovieEl.innerHTML = `
        <a href="./movie.html?${movie.id}">
        <div>
            <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
            </div>
            <div>
                ${movie.overview}
            </div>
            <div>
                <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
            </div>
        </div>
        </a>
        `
        MovieEl.addEventListener("click", () => {
            localStorage.setItem("movieId", movie.id)
            localStorage.setItem("movieTitle", movie.title)
            localStorage.setItem("movieOverview", movie.overview)
            localStorage.setItem("moviePoster", IMGPATH + movie.backdrop_path)
        })
        function getClassByRate(vote) { 
            console.log(vote)
            if (vote >= 8) {
                return "green"
            }
            else if (vote >= 5) {
                return "orange"
            }
            else {
                return "red"
            }
         }
        MoviesHTML.appendChild(MovieEl)
    });
}




