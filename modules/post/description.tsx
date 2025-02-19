import { Article } from "@/types/articles"
import { formatDate } from "@/utils/date.helper"
import React from "react"

type Props = {
  article: Article
}

function Description({ article }: Props) {
  return (
    <div className="text-sm p-2">
      {formatDate(article?.createdAt)} · {article?.user?.name}
    </div>
  )
}

export default Description
