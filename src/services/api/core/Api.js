export class Api {
  static getUrl(path) {
    return `${process.env.REACT_APP_API_URL}${path}`
  }
}
