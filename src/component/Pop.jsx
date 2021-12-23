import React, {useContext, useEffect} from 'react';
import "../App.css"
import {API_KEY, API_URL_POPULAR, API_URL_SEARCH, getClassByRate} from "../api";
import axios from "axios";
import {AppContext} from "../App";

const Pop = () => {
    const {keyword} = useContext(AppContext)
    useEffect(() => {
        getMovies(API_URL_POPULAR).then((res) => showMovies(res));
    }, [])

    async function getMovies(url) {
        const res = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        })
        return res.data

    }

    useEffect(() => {
        if (keyword) {
            console.log(keyword)
            getMovies(API_URL_SEARCH + keyword).then((res) => showMovies(res));
        }

    }, [keyword])


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
