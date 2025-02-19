import React from "react"
import { Layout } from "@/components/common/layout"
import Content from "./content"
import { Article } from "@/types/articles"
import Description from "./description"
import Title from "./title"

type Props = {
  article: Article
}

export async function Post({ article }: Props) {
  return (
    <Layout>
      <Title article={article} />
      <Description article={article} />
      <Content content={article.content} />
    </Layout>
  )
}
