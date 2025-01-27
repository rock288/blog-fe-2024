import React from "react"
import { Article } from "./article"
import { ArticleType } from "./type"
import { getAllArticle } from "@/services/articles"

export async function Articles() {
  const posts = await getAllArticle()

  const articles: ArticleType[] = posts?.results ?? []

  return articles.map((item, index) => <Article key={index} {...item} />)
}
