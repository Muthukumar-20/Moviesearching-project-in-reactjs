import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const movieSearchBox = document.getElementById('movie-search-box');
    const searchInputRef = useRef("");
    const searchListRef = useRef(null); // Create a ref to access the search list element
    const [movieList, setMovieList] = useState([]);
    const [movies, setMovies] = useState([])
    const searchList = document.getElementById('search-list');
    const image = document.getElementById("image")
const search=document.getElementById("movieSearch")
const navbarRef = useRef(null);

    // const [loadMoviesDetails,setLoadMoviesDetails] =useState("")

    // let searchList=document.getElementById("search-list-item")


    const movieListItem = document.createElement('li');
    movieListItem.textContent = 'Movie Title';


    document.addEventListener('DOMContentLoaded', function () {
        let searchList = document.getElementById('search-list')
    })


    async function loadMovies(searchTerm) {
        try {
            const URL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=79b25d3`;
            const res = await fetch(`${URL}`);
            const data = await res.json();
        } catch (error) {
            console.log(error)
        }
      
        // console.log(data.Search);

        if (data.Response == "True") displayMovieList(data.Search)
    }


    function findMovies() {
        const movieSearchBox = document.getElementById('movie-search-box'); // Replace 'movie-search-box' with your actual ID



        if (movieSearchBox) { // Check if the element exists
            let searchTerm = movieSearchBox.value.trim();
            if (searchTerm.length > 0) {

                searchList.classList.remove('hide-search-list')
                loadMovies(searchTerm)
            }
            else {
                searchList.classList.add('hide-search-list')
            }

            // ... rest of your code
        } else {
            console.error("Search input element not found!");
        }


    }

    function displayMovieList(movies) {
        const searchList = searchListRef.current;
        if (searchList) {
            searchList.innerHTML = "";
            for (let idx = 0; idx < movies.length; idx++) {

                let movieListItem = document.createElement('div');
                movieListItem.dataset.id = movies[idx].imdbID;
                movieListItem.classList.add('search-list-item')
                // if (movies[idx].poster != "N/A")
                //     movieposter = movies[idx].poster;
                // else
                // movieposter = "Movies not found";


                const posterUrl = movies[idx].Poster !== "N/A" ? movies[idx].Poster : "path/to/placeholder.jpg";


                movieListItem.innerHTML =
                `
                          <div class = "search-item-thumbnail">
            <img src = "${posterUrl}" alt="MoviePoster"/>
        </div>
        <div class = "search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
           
        </div>
                    `;
                const search = document.getElementById("search");
                // search.classList.add("bg-gray-950","cursor-pointer","flex","gap-2","justify-evenly","w-[800px]","border","border-yellow-700")
                //   image.classList.add("")                  
                if (searchList) {
                    searchList.appendChild(movieListItem);
                } else {
                    console.error("searchList element not found");
                }
                loadMoviesDetails()
            }
        }
    }

    useEffect(() => {
        // Access the search list element after it's rendered
        let searchList = searchListRef.current;

        // const movieList = document.getElementById('movie-list'); // Replace with your selector
        if (searchList) {
            searchList.classList.add('active');
        }

        if (searchList) {
            // Your logic to handle searchList
            if (searchTerm.length > 0) {
                searchList.classList.remove('hide-search-list-item');
                loadMovies(searchTerm);
            } else {
                searchList.classList.add('hide-search-list-item');
            }
        }

        if (searchListRef.current) {
            searchList = searchListRef.current;
        }


    }, [searchTerm]);



    displayMovieList(movies); {
        if (movies && Array.isArray(movies)) {
            movies.forEach(movie => {
                // Access movie properties like movie.title, movie.poster, etc.
                console.log(movie.title);
            });
        } else {
            console.error("Movies data is not available or not an array.");
        }
    }
    document.addEventListener('DOMContentLoaded', function () {
        // const se = document.getElementById('movie-list'); // Replace with your actual selector
        if (searchList) {
            searchList.classList.add('active');
        }

    });


    function loadMoviesDetails() {
        const searchListMovies = searchList.querySelectorAll(".search-list-item")
        searchListMovies.forEach(movie => {
            movie.addEventListener('click', async () => {
                // console.log(movie.dataset.id);
                searchList.classList.add("hide-search-list")
                movieSearchBox.value = "";
                const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=79b25d3`);
                const movieDetails = await result.json()
                // console.log(movieDetails);
                displayMovieDetails(movieDetails)
                
            })
        })
    }
function displayMovieDetails(details){
setTimeout(()=>{ 
    const resultgrid=document.getElementById("result-grid")
    if(resultgrid){
 resultgrid.innerHTML=`
 <div class= "movie-poster">
                        <img class='max-w-[300px] image-box border-black border-4' src = "${details.Poster!="N/A"? details.Poster: "image_not_found"}" alt = "movie poster"/>
                    </div>
                    <div class = "movie-info grid gap-4 ">
                        <h3 class= "movie-title text-4xl text-yellow-400">${details.Title}</h3>
                        <ul class= "movie-misc-info">
                            <li class = "year">Year:${details.Year}</li>
                            <li class = "rated bg-yellow-400 w-32 h-7 rounded-sm text-white">Ratings:${details.Rated}</li>
                            <li class= "released">Released:${details.Released}</li>
                        </ul>
                        <p class= "genre bg-gray-200 w-72 h-7 rounded-sm"><b>Genre:</b>${details.Genre}</p>
                        <p class= "writer"><b>Writer:</b>${details.Writer}</p>
                        <p class= "actors"><b>Actors: </b>${details.Actors}</p>
                        <p class= "plot"><b>Plot:</b>${details.Plot}</p>
                        <p class= "language text-yellow-500"><b>Language:</b>${details.Language}</p>
                        <p class= "awards font-semibold text-red-800"><i class="fa-solid fa-award"></i>${details.Awards}</p>
                    </div> `
    }
},500)
}


document.addEventListener('DOMContentLoaded', () => {
    const movieSearchBox = document.getElementById('movie-search-box');
    const searchList = document.getElementById('searchList');
  
    if (movieSearchBox && searchList) { 
      movieSearchBox.addEventListener('click', (event) => {
         if (event.target.className != "form-control") {
          searchList.classList.remove("hidden");
         }
      });
  
      
    }
  });



  window.addEventListener('click', (event) => {
    if (event.target.className != "form-control") {
      searchList.classList.add("hide-search-list");
    }
  });

 

    return (
        <>

            <div className='flex justify-center border border-black pt-5 relative bg-[rgb(18,18,18)]'>

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" alt="" className='h-12 absolute left-8' />
                <div className='relative'>
                    <form className="max-w-md mx-auto flex justify-center">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <div>
                            <nav ref={navbarRef}>
                                <div className='' id='movieSearch'>
                                    <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className=" p-4 ps-10 text-sm text-gray-900 border-2 border-black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bla dark:focus:ring-blue-500 dark:focus:border-gray-500 w-[800px] form-control" placeholder="Search movies..." id="movie-search-box" onKeyUp={findMovies} required />
                                    <button type="submit" className=" text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>

                                </div>
                                </nav>

                            </div>
                        </div>
                    </form>

                    <div className="search-list hide-search-list z-10 border w-[800px] rounded-md overflow-scroll justify-center flex-col h-60 text-white " id="search-list">
                    
                        <div className='search-item'>
                        <Link to={"/aboutserch"}>
                            <ul className="hide-search-list-item" ref={searchListRef} >

                                {/* Your search list items will be rendered here */}
                            </ul>
                            </Link>

                        </div>
                    </div>
                </div>


                <div className='flex absolute right-12 top-6 gap-2'>

                    <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>


                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Signup</button>
               
                  
                </div>


            </div>


        </>
    );
};

export default Navbar;