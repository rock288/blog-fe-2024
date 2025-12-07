import { Category as CategoryType } from "@/types/category"
import DialogEditCategory from "./dialog-edit-category"
import DialogDeleteCategory from "./dialog-delete-category"

type Props = CategoryType & {
  onDelete: (id: string) => void
}

export function Category(props: Props) {
  const { name } = props

  return (
    <section data-title="category" className="flex flex-col p-2 mb-2">
      <div className="no-underline underline-offset-1 decoration-slate-300 dark:text-white text-slate-600 dark:hover:text-green-500  dark:hover:decoration-green-500">
        {name}
      </div>
      <div className="flex gap-2">
        <DialogEditCategory category={props} />
        <DialogDeleteCategory category={props} onDelete={props.onDelete} />
      </div>
    </section>
  )
}

