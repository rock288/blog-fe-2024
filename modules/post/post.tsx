import React from "react"
import { Layout } from "@/components/common/layout"
import Content from "./content"
import { Article } from "@/types/articles"

type Props = {
  article: Article
}

export async function Post({ article }: Props) {
  return (
    <Layout>
      <Content content={article.content} />
    </Layout>
  )
}
