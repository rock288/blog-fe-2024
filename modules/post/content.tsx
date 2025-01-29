"use client"

import dynamic from "next/dynamic"

const Markdown = dynamic(() => import("@/components/common/markdown"), {
  ssr: false,
})

type Props = {
  content: string
}

function Content(props: Props) {
  const { content } = props

  return (
    <div dir="ltr">
      <Markdown>{content}</Markdown>
    </div>
  )
}

export default Content
