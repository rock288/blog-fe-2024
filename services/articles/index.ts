import { URL_API } from "@/configs"
import { CreateArticleType } from "@/types/articles"
import { LocalStorageClass } from "@/utils/localstorage"

export async function getAllArticle() {
  const data = await fetch(`${URL_API}v1/article?limit=20&page=1`, {
    next: { revalidate: 60 }, // refresh after 60 second
  })
  const posts = await data.json()
  return posts?.data
}

export async function getArticleByHref(href: string) {
  const data = await fetch(`${URL_API}v1/article/href/${href}`)
  const posts = await data.json()
  return posts?.data
}

export async function createArticle(body: CreateArticleType) {
  const data = await fetch(`${URL_API}v1/article`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LocalStorageClass.getItem("token")}`,
    },
  })

  const article = await data.json()
  return article.data
}
