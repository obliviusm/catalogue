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
      return { ok: true, categories }
    }
    console.log(response)
    return { ok: false, error: response.problem }
  }

  const getItem = async (itemId) => {
    const response = await api.get(`/items/${itemId}`)

    if (response.ok) {
      const { item } = response.data
      return { ok: true, item }
    }

    return { ok: false, error: response.problem }
  }

  const getCategoryItems = async (categoryId) => {
    const response = await api.get(`categories/${categoryId}/items`)

    if (response.ok) {
      const { items } = response.data
      return { ok: true, items }
    }

    return { ok: false, error: response.problem }
  }

  return {
    getCategories,
    getItem,
    getCategoryItems
  }
}

export default create()
