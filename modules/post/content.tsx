import Markdown from "@/components/common/markdown"

type Props = {
  content: string
}

function Content(props: Props) {
  const { content } = props

  return (
    <div className="p-2">
      <div dir="ltr">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}

export default Content
