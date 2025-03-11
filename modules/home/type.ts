export type ArticleType = {
  createdAt: string
  title: string
  href: string
  tags: Tags[]
  category: Category
}

export type Category = {
  name: string
  id: string
}

export type Tags = {
  name: string
  id: string
}
