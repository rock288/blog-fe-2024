import React from "react"
import { ArticleType } from "./type"
import Link from "next/link"
import { formatDate } from "@/utils/date.helper"

type Props = ArticleType

export function Article(props: Props) {
  const { createdAt, title, href, category } = props

  return (
    <section data-title="article" className="flex flex-col p-2 mb-2">
      <div className="flex gap-2 items-center">
        <div className="text-gray-400 font-bold text-xs">
          {formatDate(createdAt)}
        </div>
        <div className="text-gray-400 font-bold text-sm">{" · "}</div>
        <div className="text-gray-400 font-bold text-sm">{category?.name}</div>
      </div>
      <Link
        href={`/blog/post/${href}`}
        className="no-underline underline-offset-1 decoration-slate-300 dark:text-white text-slate-600 dark:hover:text-green-500  dark:hover:decoration-green-500"
      >
        {title}
      </Link>
    </section>
  )
}
