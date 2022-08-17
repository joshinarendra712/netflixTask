const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const movietask = document.getElementById('movie-tasks');
const search = document.getElementById('search');

function htmlbody (arr){
    let result = '';
    arr.forEach(element => {
        result +=`<div class="col-md-3">
        <div class="card">
            <div class="card-body">
                <figure class="movie-img">
                    <img src="${IMG_PATH }${element.poster_path}" alt="${element.title}" class="img" id="img">
                    <figcaption class="movie-img-caption">
                        <h4 class="heading">${element.title}</h4>
                        <span class="${colors(element.vote_average)}">${element.vote_average}</span>
                     </figcaption>
                     
                <div class="overview">
                    <h5>${element.title}</h5>
                    <p class="para">
                       ${element.overview}
                    </p>
                </div>
                </figure>
            </div>
        </div>
    </div>
        
        `
    });
    movietask.innerHTML = result;
}

htmlbody(results);
//callback function for enter
function onenter(e){
    if(e.key === 'Enter'){
        // console.log('event triggred')
    let name = e.target.value.toLowerCase().trim();
        // console.log(name)
    let htmltemp = results.filter( movie => movie.title.toLowerCase().trim().includes(name))
       htmlbody(htmltemp);
    }else{
        htmlbody(results);
    }
}

// function for colors of rating
function colors(rating){
    if(rating >= 8){
        return "green"
    }else if(rating >= 6){
        return "yellow"
    }else if( rating >= 4){
        return "orange"
    }else{
        return "red"
    }
}



search.addEventListener('keyup',onenter)