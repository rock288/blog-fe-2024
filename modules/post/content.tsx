import Markdown from "@/components/common/markdown"

type Props = {
  content: string
}

function Content(props: Props) {
  const { content } = props

  return (
    <div>
      <div dir="ltr">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}

export default Content
