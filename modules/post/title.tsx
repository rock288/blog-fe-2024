import { Article } from "@/types/articles"
import React from "react"

type Props = {
  article: Article
}

function Title({ article }: Props) {
  return (
    <div className="text-xl p-2 font-semibold text-green-500">
      {article?.title}
    </div>
  )
}

export default Title
