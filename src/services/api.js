import apisauce from 'apisauce'
import ApiConfig from './ApiConfig'

const create = () => {
  const api = apisauce.create({
    baseURL: ApiConfig.baseURL,
    timeout: ApiConfig.timeout,
    responseType: ApiConfig.responseType
  })

  const getCategories = async () => {
    const response = await api.get('/categories')

    if (response.ok) {
      const { categories } = response.data
      return { ok: true,categories }
    }

    return { ok: false }
  }

  return {
    getCategories,
  }
}

export default create()
