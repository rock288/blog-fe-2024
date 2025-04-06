import React from "react"
import { Post } from "@/modules/post/post"

import { notFound } from "next/navigation"
import { getArticleByHref } from "@/services/articles"
import { Article } from "@/types/articles"
import { URL_HOST } from "@/configs"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post: Article = await getArticleByHref(id)

  return {
    title: post.title,
    description: post.title,
    keywords: post?.category?.name,
    creator: post?.user?.name,
    icons: [
      {
        url: `${URL_HOST}/favicon.png`,
      },
    ],
    openGraph: {
      type: "website",
      url: `${URL_HOST}/blog/post/${post.href}`,
      title: post.title,
      description: post.description,
      siteName: "rock288.com",
      images: [
        {
          url: `${URL_HOST}/${post.image}`,
          width: 500,
          height: 250,
          alt: post.description,
        },
      ],
    },
  }
}

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
