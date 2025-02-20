import { URL_API } from "@/configs"

export async function fetchCategories() {
  const data = await fetch(`${URL_API}v1/category?limit=100&page=1`)

  const categories = await data.json()
  return categories.data.results
}
