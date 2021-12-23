import React from 'react';
import {API_KEY, API_URL_SEARCH} from "../api";
import axios from "axios";

const Search = () => {
    // getMovies(API_URL_POPULAR);
    async function getMovies(url) {
        const res = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        })
        Search(res.data);

    }

    function handleSearch(e){
        e.preventDefault();
        console.log("handleSearch",handleSearch)

        // const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
        // if (search.value) {
        //     getMovies(apiSearchUrl);
        //
        //     search.value = "";
        // }
    }
    return (
        <form onSubmit={handleSearch}>

        </form>
    );
};

export default Search;
