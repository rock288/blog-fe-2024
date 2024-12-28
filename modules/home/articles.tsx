import React from "react"
import { Article } from "./article"
import { ArticleType } from "./type"

const articles: ArticleType[] = [
  {
    createdAt: "2024-12-23",
    title: "ezpkg.io/conveyz: Understanding the Implementation of FConvey",
    href: "/abc",
    tags: [
      {
        name: "React",
        id: "1",
      },
    ],
  },
  {
    createdAt: "2024-12-22",
    title: "ezpkg.io/conveyz: Understanding the Implementation of FConvey",
    href: "/abc",
    tags: [
      {
        name: "React",
        id: "1",
      },
    ],
  },
  {
    createdAt: "2024-12-20",
    title: "ezpkg.io/conveyz: Understanding the Implementation of FConvey",
    href: "/abc",
    tags: [
      {
        name: "React",
        id: "1",
      },
    ],
  },
]

export function Articles() {
  return articles.map((item, index) => <Article key={index} {...item} />)
}
