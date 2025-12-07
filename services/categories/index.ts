import { URL_API } from "@/configs"
import { LocalStorageClass } from "@/utils/localstorage"

export async function fetchCategories() {
  const data = await fetch(`${URL_API}v1/category?limit=100&page=1`)

  const categories = await data.json()
  return categories.data.results
}

export async function getAllCategories() {
  const data = await fetch(`${URL_API}v1/category?limit=200&page=1`, {
    cache: "no-store",
  })
  const categories = await data.json()
  return categories?.data
}

export async function createCategory(body: { name: string }) {
  const data = await fetch(`${URL_API}v1/category`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LocalStorageClass.getItem("token")}`,
    },
  })

  const category = await data.json()
  return category.data
}

export async function editCategory(idCategory: string, body: { name: string }) {
  const data = await fetch(`${URL_API}v1/category/${idCategory}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LocalStorageClass.getItem("token")}`,
    },
  })

  const category = await data.json()
  return category.data
}

export async function deleteCategory(idCategory: string) {
  const data = await fetch(`${URL_API}v1/category/${idCategory}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LocalStorageClass.getItem("token")}`,
    },
  })

  const res = await data.json()
  return res.data
}
