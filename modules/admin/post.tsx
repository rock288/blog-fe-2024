import { Article } from "@/types/articles"
import { formatDate } from "@/utils/date.helper"
import DialogEditPost from "./dialog-edit-post"

type Props = Article

export function Post(props: Props) {
  const { createdAt, title } = props

  return (
    <section data-title="article" className="flex flex-col p-2 mb-2">
      <div className="flex gap-2 items-center">
        <div className="text-gray-400 font-bold text-xs">
          {formatDate(createdAt)}
        </div>
        <div>Category</div>
      </div>
      <div className="no-underline underline-offset-1 decoration-slate-300 dark:text-white text-slate-600 dark:hover:text-green-500  dark:hover:decoration-green-500">
        {title}
      </div>

      <DialogEditPost post={props} />
    </section>
  )
}
