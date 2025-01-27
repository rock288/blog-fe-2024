import React from "react"
import { Post } from "@/modules/post/post"

import { notFound } from "next/navigation"
import { getArticleByHref } from "@/services/articles"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = await getArticleByHref(id)

  if (!article) {
    return notFound()
  }

  return <Post article={article} />
}
