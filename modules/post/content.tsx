"use client"

import Markdown from "@/components/common/markdown"

type Props = {
  content: string
}

function Content(props: Props) {
  const { content } = props

  return <Markdown>{content}</Markdown>
}

export default Content
