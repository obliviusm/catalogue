import apisauce from 'apisauce'
import ApiConfig from './ApiConfig'
import { getPages } from './pagination'

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

  const getCategoryItems = async ({categoryId, page}) => {
    const response = await api.get(`categories/${categoryId}/items`, { page })
    if (response.ok) {
      const { items } = response.data

      const pages = getPages({
        total: parseInt(response.headers.total),
        perPage: parseInt(response.headers['per-page']),
        currentPage: parseInt(page)
      })

      return { ok: true, items, pages }
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
