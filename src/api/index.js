import axios from "axios";
export const API_KEY = "df68ea5f-bb20-433a-8429-cdb744c64b37";
export const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"
export const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

export async function getMovies(url) {
    try {
        const res = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        });
        return res.data
    } catch (e) {
        console.log(e)
    }

}

export function getClassByRate(vote) {
    if (vote >= 7) {
        return "green";
    } else if (vote > 5) {
        return "orange";
    } else {
        return "red";
    }
}
