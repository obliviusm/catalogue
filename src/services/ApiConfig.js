const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000/v1'

const ApiConfig = {
  baseURL: baseURL,
  timeout: 20000,
  responseType: 'json'
}

export default ApiConfig
