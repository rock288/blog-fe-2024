"use client"

import { deleteCategory, getAllCategories } from "@/services/categories"
import React, { useEffect, useState } from "react"
import { Category } from "./category"
import { Category as CategoryType } from "@/types/category"

function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([])

  const onGetCategories = async () => {
    const data = await getAllCategories()
    setCategories(data?.results ?? [])
  }

  async function onDelete(_id: string) {
    try {
      await deleteCategory(_id)
      window.alert("Delete success")
      onGetCategories()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error(e)
    }
  }

  useEffect(() => {
    onGetCategories()
  }, [])

  return (
    <div>
      {categories.map((item, index) => (
        <Category key={index} {...item} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default Categories

