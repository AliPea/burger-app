import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-d24fb.firebaseio.com/'
});

export default instance;
