import axios from 'axios';

class Axios {
    instance = axios.create({
      baseURL: 'https://connect.squareup.com/',
      headers: { Authorization: 'Bearer ' },
    });
}

export default new Axios();
