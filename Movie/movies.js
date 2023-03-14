const description = document.getElementById("description");
const IMG = localStorage.getItem("moviePoster")
const title = localStorage.getItem("movieTitle")
const overview = localStorage.getItem("movieOverview")

function showFullMovie() { 
description.innerHTML = `
<div class="movie-info">
<img class="banner_IMG" src="${IMG}" alt="${title}">
<h1> ${title}</h1>
    <h3> ${overview} </h3>
    </div>
    <div> 
    </div>
    <div>
</div>
`
}

// on seat click make seat red 
const seat = document.querySelectorAll(".seat")
console.log(seat)
seat.forEach((seat) => {
    seat.addEventListener("click", () => {
        seat.classList.toggle("red")
    })
})

showFullMovie()
