import React from "react"
import { BreadcrumbCollapsed } from "./breadcrumb-collapsed"
import { Layout } from "@/components/common/layout"
import Content from "./content"
import { Article } from "@/types/articles"

type Props = {
  article: Article
}

export async function Post({ article }: Props) {
  return (
    <Layout>
      <BreadcrumbCollapsed />
      <Content content={article.content} />
    </Layout>
  )
}
