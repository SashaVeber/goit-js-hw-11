import axios from 'axios';

const API_KEY = '58280939-6abb5fdce6cf7c462995d9856';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return axios.get(`${BASE_URL}?${urlParams}`).then(response => response.data);
}