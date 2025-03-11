"use client"

import { getAllArticle } from "@/services/articles"
import React, { useEffect, useState } from "react"
import { Post } from "./post"
import { Article } from "@/types/articles"

function Posts() {
  const [post, setPost] = useState<Article[]>([])

  const onGetPost = async () => {
    const posts = await getAllArticle()
    setPost(posts?.results ?? [])
  }

  useEffect(() => {
    onGetPost()
  }, [])

  return (
    <div>
      {post.map((item, index) => (
        <Post key={index} {...item} />
      ))}
    </div>
  )
}

export default Posts
