import axios from 'axios';

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const API_KEY = 'AIzaSyDpG0MbEAjIue5TzdoxwBcnYv7cABNYXJU';

const nearByPlace = (latitude, longitude, type) => {
  console.log(latitude, longitude, type);
  const url =
    BASE_URL +
    `/nearbysearch/json?&location=${latitude},${longitude}&radius=1500${
      type && '&type=' + type
    }&key=${API_KEY}`;
  console.log(url);
  return axios.get(url);
};

export default {
  nearByPlace,
};
