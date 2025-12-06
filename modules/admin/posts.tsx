"use client"

import { deleteArticle, getAllArticle } from "@/services/articles"
import React, { useEffect, useState } from "react"
import { Post } from "./post"
import { Article } from "@/types/articles"

function Posts() {
  const [post, setPost] = useState<Article[]>([])

  const onGetPost = async () => {
    const posts = await getAllArticle()
    setPost(posts?.results ?? [])
  }

  async function onDelete(_id: string) {
    try {
      await deleteArticle(_id)
      window.alert("Delete success")
      onGetPost()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error(e)
    }
  }

  useEffect(() => {
    onGetPost()
  }, [])

  return (
    <div>
      {post.map((item, index) => (
        <Post key={index} {...item} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default Posts
