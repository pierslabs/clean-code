import axios from 'axios';

export class HttpClient {
  async get(url: string) {
    const { data } = await axios.get(url);

    return data;
  }

  async getPosts(url: string) {
    const { data } = await axios.get(url);
    return data;
  }

  async getPhotos(url: string) {
    const { data } = await axios.get(url);
    return data;
  }
}
