import { STRAPI_URL, API_URL } from "./../config"

export async function getGames({ page = 1, pageSize = 1 }) {
    const res = await fetch(`${API_URL}/videogames?populate[platforms][fields][0]=name&populate[cover][fields][0]=url&pagination[page]=${page}&pagination[pageSize]=${pageSize}`)
    if(!res.ok) {
      throw new Error('Something went wrong, please try again later.')
    }
    const { data, meta } = await res.json()
    const { pagination } = meta
    return { data, pagination }
}

export function getCoverImage ({ attributes }) {
    const { url } = attributes.cover.data.attributes
    return `${STRAPI_URL}${url}`
}
  