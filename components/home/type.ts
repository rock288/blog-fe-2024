export type ArticleType = {
  createdAt: string
  title: string
  href: string
  tags: Tags[]
}

export type Tags = {
  name: string
  id: string
}
