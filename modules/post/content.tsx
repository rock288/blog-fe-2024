import Markdown from "@/components/common/markdown"

type Props = {
  content: string
}

function Content(props: Props) {
  const { content } = props

  return (
    <div dir="ltr" className="mt-8">
      <Markdown>{content}</Markdown>
    </div>
  )
}

export default Content
