import { Article } from "@/types/articles"
import { formatDate } from "@/utils/date.helper"
import DialogEditPost from "./dialog-edit-post"
import DialogDeletePost from "./dialog-delete-post"

type Props = Article & {
  onDelete: (id: string) => void
}

export function Post(props: Props) {
  const { createdAt, title, onDelete } = props

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
      <div className="flex gap-2">
        <DialogEditPost post={props} />
        <DialogDeletePost post={props} onDelete={onDelete} />
      </div>
    </section>
  )
}
