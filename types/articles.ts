import { Category } from "./category"

export type Article = {
  id: string
  title: string
  href: string
  content: string
  user: User
  category: Category
  createdAt: string
}

export type User = {
  id: string
  name: string
}
