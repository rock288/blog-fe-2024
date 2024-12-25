import React from "react"
import { ArticleType } from "./type"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface Props extends ArticleType {}

export function Article(props: Props) {
  const { createdAt, title, href, tags } = props

  return (
    <section data-title="article" className="flex flex-col p-2 mb-2">
      <div className="flex gap-2 items-center">
        <div className="text-gray-400 font-bold text-xs">{createdAt}</div>
        <div>
          {tags.map((item, index) => (
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
        href={href}
        className="underline underline-offset-1 decoration-slate-300 hover:underline-offset-2 hover:decoration-slate-800"
      >
        {title}
      </Link>
    </section>
  )
}
