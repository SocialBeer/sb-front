import axios from 'axios'

import { Api } from '../core/Api'

export class AuthService {
  static api_name = 'auth'

  static async login(request) {
    const result = await axios.post(
      Api.getUrl(`${this.api_name}/login`),
      request
    )

    return result
  }

  static async registration(request) {
    const result = await axios.post(
      Api.getUrl(`${this.api_name}/registration`),
      request
    )

    return result
  }

  static async metadata() {
    const result = await axios.get(
      Api.getUrl(`${this.api_name}/registration/metadata`)
    )

    return result
  }
}
