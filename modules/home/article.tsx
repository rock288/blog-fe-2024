import React from "react"
import { ArticleType } from "./type"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/utils/date.helper"

type Props = ArticleType

export function Article(props: Props) {
  const { createdAt, title, href, tags } = props

  return (
    <section data-title="article" className="flex flex-col p-2 mb-2">
      <div className="flex gap-2 items-center">
        <div className="text-gray-400 font-bold text-xs">
          {formatDate(createdAt)}
        </div>
        <div>
          {(tags ?? []).map((item, index) => (
            <Badge
              key={index}
              variant={"secondary"}
              className="text-slate-700 dark:text-slate-100"
            >
              {item.name}
            </Badge>
          ))}
        </div>
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
