import axios from 'axios';

class Axios {
    instance = axios.create({
      baseURL: 'https://connect.squareup.com/',
      headers: { Authorization: 'Bearer sq0atp-4h0aJCbCqmKn-fngaFt0_w' },
    });
}

export default new Axios();
