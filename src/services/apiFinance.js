import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { Alert } from "react-native"

// const api = axios.create({
//   baseURL: "https://brapi.dev/api/"
//   //  https://brapi.dev/api/quote/{tickers}
// });

// export default api


// const apiFinance = axios.create({
//   baseURL: "http://localhost:3001/"
// })


class ApiFinance {
  api
  storage

  constructor() {
    this.api = axios.create({ baseURL: "http://172.16.90.172:3001" })
    this.storage = AsyncStorage
  }

  async usuarioCriar(body) {
    await this.api.post('/usuario/criar', body).then(res => {
      console.log(res.data)
      return true
    }).catch(err => {
      return false
    })
  }

  async usuarioLogin(body) {
    await this.api.post('/usuario/login', body).then(res => {
      this.storage.setItem('token', JSON.stringify(res.data.token))
      this.storage.setItem('user', JSON.stringify(res.data.user))
      return true
    }).catch(err => {
      Alert('O cadastramento falhou. Verifique os dados preenchidos e tente novamente')
      return false
    })
  }

  async operacoesListar() {
    // const user = (this.storage.getItem())
    await this.api.get('/operacao/listar/15').then(res => {
      return res.data
    }).catch(err => {
      Alert('Ocorreu um erro ao processar sua solicitação!')
    })
  }

  async tituloBuscar(ticket) {
    const titulo = (await this.api.get(`/titulo/buscar/${ticket}`)).data[0]
    return titulo
  }

  async operacaoSalvar(operacao) {
    const operacaoSalvo = (await this.api.post('/operacao/salvar', operacao)).data

    return operacaoSalvo
  }

}

export default new ApiFinance()
