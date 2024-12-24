import React from "react"
import { ArticleType } from "./type"
import Link from "next/link"

interface Props extends ArticleType {}

export function Article(props: Props) {
  const { createdAt, title, href } = props

  return (
    <section data-title="article" className="flex gap-2 p-2">
      <div className="text-gray-400 font-bold">{createdAt}</div>
      <Link
        href={href}
        className="underline underline-offset-1 decoration-slate-300 hover:underline-offset-2 hover:decoration-slate-800"
      >
        {title}
      </Link>
    </section>
  )
}
