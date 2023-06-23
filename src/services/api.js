import axios from "axios"

const api = axios.create({
  baseURL: "https://brapi.dev/api/"
  //  https://brapi.dev/api/quote/{tickers}
});

// export default api


const apiFinance = axios.create({
  baseURL: "http://localhost:3001/"
})


class ApiFinance {
  api

  constructor() {
    api = axios.create({ baseURL: "http://localhost:3001/" })
  }

  usuarioCriar(body) {
    this.api.post('criar', body).then(res => {

    }).catch(err => {

    })
  }

}

export default new ApiFinance()



//import axios from "axios";

//const api = axios.create({
//    baseURL: "http://rickandmortyapi.com/api/"
//});

//export default api;

