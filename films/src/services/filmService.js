import axios from "axios";

export class filmService {
    static #apiKey = '1fbad59';
    static async getFilms(title, type) {
        const response =
            await axios.get(`https://www.omdbapi.com/?s=${title}&type=${type}&apikey=${this.#apiKey}`);
        console.log(response.data.Search);
        return response.data.Response === 'False'
            ? null
            : response.data.Search;
    }
}