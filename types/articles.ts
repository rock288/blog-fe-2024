import { Category } from "./category"

export type Article = {
  id: string
  title: string
  description: string
  href: string
  content: string
  image: string
  user: User
  category: Category
  createdAt: string
}

export type User = {
  id: string
  name: string
}

export type CreateArticleType = {
  title: string
  content: string
  image?: string
  category?: string
  user?: string
}
