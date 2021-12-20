import React, {useEffect} from 'react';
import "../App.css"
import {API_URL_POPULAR, getClassByRate, getMovies} from "../api";

const Pop = () => {

    useEffect(()=>{
        getMovies(API_URL_POPULAR).then((res)=>showMovies(res));
    },[])


// контейнер с фильмами
    function showMovies(data) {
        const moviesEl = document.querySelector(".movies");

        // очищаем страницу с фильмами
        document.querySelector(".movies").innerHTML = "";

        data.films.forEach((movie) => {
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");
            movieEl.innerHTML = `
        <div class="movie__cover-inner">
            <img
            src="${movie.posterUrlPreview}"
            class="movie__cover"
            alt="${movie.nameRu}"
          
            />
            <div class="movie__cover--darkened"></div>
        </div>
            <div class="movie__title">${movie.nameRu}</div>
            <div class="movie__year">${movie.year}</div>
            <div class="movie__category">${movie.genres.map(
                (genre) => ` ${genre.genre}`
            )}</div>
        ${
                movie.rating &&
                `
            <div class="movie__average movie__average--${getClassByRate(
                    movie.rating
                )}">${movie.rating}</div>
            `
            }
            `;
            moviesEl.appendChild(movieEl);


        });
    }
    return (
        <div>

        </div>
    );
};

export default Pop;
