import { Category } from "./category"

export type Article = {
  id: string
  title: string
  href: string
  content: string
  user: string
  category: Category
}
