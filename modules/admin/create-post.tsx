"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { USER_ID } from "@/configs"
import { createArticle } from "@/services/articles"
import { fetchCategories } from "@/services/categories"
import { Category } from "@/types/category"
import { useEffect, useState } from "react"
import Content from "../post/content"
import { fetchUploads } from "@/services/upload"
import { UploadType } from "@/types/upload"

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  image: z.string().optional(),
  category: z.string(),
})

export function CreatePost() {
  const [categories, setCategories] = useState<Category[]>([])
  const [uploads, setUploads] = useState<UploadType[]>([])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      content: "",
      description: "",
      image: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const article = await createArticle({ ...data, user: USER_ID })
      window.open(`${location.origin}/post/${article.href}`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log(e)
    }
  }

  const getCategories = async () => {
    const temp = await fetchCategories()
    setCategories(temp)
  }

  const getUploads = async () => {
    const temp = await fetchUploads()
    setUploads(temp)
  }

  useEffect(() => {
    getUploads()
    getCategories()
  }, [])

  console.log(form.watch("content"))

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((item, index) => (
                    <SelectItem key={index} value={item._id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea className="h-96" placeholder="content" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>image</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {uploads.map((item, index) => (
                    <SelectItem key={index} value={item.path}>
                      {item.path}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create</Button>
        <h1 className="font-bold">Preview Content</h1>

        <Content content={form.watch("content")} />
      </form>
    </Form>
  )
}
