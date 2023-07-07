import axios from "axios";
class Request {
  constructor() {
    this.instance = axios.create({
      baseURL: "/api",
      timeout: 3000,
    });
  }
  // GET请求
  get(url, params) {
    return this.instance.get(url, { params });
  }

  // POST请求
  post(url, data) {
    return this.instance.post(url, data);
  }

  // PUT请求
  put(url, data) {
    return this.instance.put(url, data);
  }

  // DELETE请求
  delete(url) {
    return this.instance.delete(url);
  }
}

export default new Request();
