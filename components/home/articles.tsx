import React from "react"
import { Article } from "./article"
import { ArticleType } from "./type"

const articles: ArticleType[] = [
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

interface Props {}

export function Articles(props: Props) {
  const {} = props

  return articles.map((item, index) => <Article key={index} {...item} />)
}
