const moviesSciFi = document.getElementById('movies-sci-fi');


const imbId = ['tt0816692','tt0190601', 'tt0083658', 'tt1454468', 'tt0499549',
                'tt0138396', 'tt0106062', 'tt0079501', 'tt0796366', 'tt0888496',
                'tt0084827', 'tt0088763', 'tt0078748', 'tt3188542', 'tt2087752',
              ];



const dataMovie = () => {
 for (let i=0; i<imbId.length; i++) {
    fetch ('http://www.omdbapi.com/?i=' + imbId[i] +'&apikey=333f998f' )
    .then (response => response.json())
    .then (data => {
    dataMovieList = data;
    console.log (dataMovieList)
    })
  } 
};

dataMovie();





// const printMovies = (movie) => {
//     let nameMovies = `<div class="divMovie">
//         <div class="data"><h5># ${movie.id}</h5><img id="${movie.id}" src="${movie.img}"><p>${movie.name}</p>
//       </div>
//     </div>`;
//     moviesSciF.insertAdjacentHTML("beforeend", nameMovies);
//   };
  
//   //Show List Data
//   const showList = (moviesList) => {
//     movies.innerHTML = "";
//     moviesList.forEach(element => {
//       printMovies(element);
//     });
//   };

