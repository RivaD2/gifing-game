import axios from 'axios';
const giphyKey = process.env.REACT_APP_API_KEY;

export const instance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
  timeout: 1000,
});

export const searchGifs = async term => {
  try {
    const randomOffset = Math.floor(Math.random() * 200);
    const searchResponse = await instance.get(`search?offset=${randomOffset}&q=${term}&api_key=${giphyKey}&limit=6`);
    return searchResponse.data.data;
  } catch (err) {
    console.log(err);
  }
}
