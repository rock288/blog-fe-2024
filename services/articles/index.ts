import { URL_API } from "@/configs"

export async function getAllArticle() {
  const data = await fetch(`${URL_API}v1/article?limit=20&page=1`)
  const posts = await data.json()
  return posts?.data
}

export async function getArticleByHref(href: string) {
  const data = await fetch(`${URL_API}v1/article/href/${href}`, {
    cache: "force-cache",
  })
  const posts = await data.json()
  return posts?.data
}
