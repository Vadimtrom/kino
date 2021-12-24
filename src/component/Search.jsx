import React from 'react';
import {getMovies} from "../api/index";
const API_URL_SEARCH =
    "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";


const Search = () => {

    const form = document.querySelector("form");
    const search = document.querySelector(".header__search");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
        if (search.value) {
            getMovies(apiSearchUrl);

            search.value = "";
        }
    });
    return (
        <header>

                <input type="text" className="header__search" placeholder="Поиск"/>



        </header>
    );
};

export default Search;